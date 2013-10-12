$(document).ready(function() {
    var signup_url = site_base_url + "signature/course/" + window.spark_class_short_name + "/" + window.spark_class_id;

    jQuery.getJSON(spark_signature_url + 'api/site/status', function(site_data) {
        // if signature track not enabled, we do nothing
        if(site_data.enabled == 1) { 
            jQuery.getJSON(spark_signature_url + 'api/user/status', function(user_data) {
                // within sign up period and user has not yet signed up
                if(site_data.sign_up_now === 1 && user_data.signature_track === 0) {
                    if(window.Cookie.get('spark_signaturetrack_hide') != 1) {
                        var join_st_label = "Earn a Verified Certificate for this course!";
                        var join_st_button = "Get Started";

                        var experiment = window.ab.session.getExperiment('sigtrack_landing_topfold');
                        var chosen = experiment.getChosenVariant();

                        if (chosen === 'title' || chosen === 'title_threebox') {
                          join_st_label = "Get official recognition for your coursework.";
                        }

                        $('body').prepend(
                          "<div class='course-signaturetrack-topbanner'>" +
                          "  <span class='course-signaturetrack-topbanner-close'>" +
                          "    <a href='#'>&times;</a>" +
                          "  </span>" +
                          "  <span class='course-signaturetrack-topbanner-text'>" +
                               join_st_label +
                          "  </span>" +
                          "  <span class='course-signaturetrack-topbanner-button'>" +
                          "    <a target='_new' href='" + signup_url + "?utm_source=spark&utm_medium=banner" + "'>" + join_st_button + "</a>" +
                          "  </span>" +
                          "</div>");

                        $('.course-signaturetrack-topbanner-close').click(function() {
                            $('.course-signaturetrack-topbanner').hide();
                            window.Cookie.set('spark_signaturetrack_hide', 1, {
                              expires: new Date('2020'),
                              path: spark_class_url
                            });
                        });
                    }

                    var makeLastChanceModal = function(arg) {
                      return $(
                        '<div class="modal coursera-signature-modal-container">' +
                        '  <div class="coursera-signature-modal-header modal-header">' +
                        '    <button class="close" aria-hidden="true" data-modal-close>&times;</button>' +
                        '    <img class="coursera-signature-modal-ribbon" src="' + arg['ribbon'] + '" />' +
                        '    <p class="coursera-signature-modal-signature-track">Signature Track</p>' +
                        '    <p class="coursera-signature-modal-title">' + arg['timeLeft'] + ' left to join!</p>' +
                        '  </div>' +
                        '  <div class="coursera-signature-modal-body modal-body" style="margin-left: 50px; margin-right: 50px;">' +
                        '    <p>Hi ' + arg['studentName'] + ',</p>' +
                        '    <p></p>' +
                        '    <p>We are really glad to see you in ' + arg['courseName'] + '! You\'ve been invited to join the Signature Track, which allows you to earn a Verified Certificate for this course.</p>' +
                        '    <p>Through this special option, you will be able to certify your success in this course by securely linking your coursework to your identity using your unique typing pattern and webcam.</p>' +
                        '    <div style="text-align: center">' +
                        '      <button class="btn coursera-signature-next-button course-signaturetrack-modal-learnmore" data-modal-close>' +
                        '        Learn More' +
                        '      </button>' +
                        '    </div>' +
                        '    <div class="course-signaturetrack-modal-nothanks">' +
                        '      <a href="javascript:void(0)" data-modal-close>Not now</a>' +
                        '    </div>' +
                        '    <p style="font-size: 12px">Note: Joining the Signature Track is optional, you can still complete the course if you decide not to join.</p>' +
                        '  </div>' +
                        '</div>'
                      );
                    }

                    if(site_data.last_chance_dialog && !user_data.last_chance_modal) {
                        var $modalDiv = makeLastChanceModal({
                          'ribbon': site_static_asset_url+'/pages/signature/views/ribbon_stripes.png',
                          'timeLeft': site_data.duration_left,
                          'courseName': course_strings_name,
                          'studentName': student_full_name
                        });
                        var modal = new Modal($modalDiv, {
                          'overlay.class':'coursera-signature-modal-overlay-darker',
                          'overlay.close': false
                        });

                        modal.on('open', function() {

                            $('.course-signaturetrack-modal-learnmore').on('click', function() {
                                window.open(signup_url + "?utm_source=spark&utm_medium=lastchance");
                            });
                        })

                        modal.on('close', function() {
                            $.get(spark_signature_url + 'api/user/set_last_chance');
                        });

                        modal.open();
                    }
                } else if(user_data.signature_track === 1) {
                    var $statusDiv = $('<div class="course-signaturetrack-status-modal-container"><h1>Signature Track Status</h1></div>');
                    var statusModal = new Modal($statusDiv, {'overlay.class':'course-modal-overlay'});

                    //$('.course-signaturetrack-bannerbox-enrolled').on('click', function() {
                    //    statusModal.open();
                    //});
                }
            });
        }
    });

});
