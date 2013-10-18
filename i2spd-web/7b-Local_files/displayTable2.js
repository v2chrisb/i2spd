// displayTable.js
// contains JavaScript to create Lecture and Problem tables from JSON-formatted object storage files. 

// Master Functions Called in HTML Files---------------------------------------

//function displayLectureTable(ID, moduleFilter){
//   the main function called to create a lecture table
//   id            is id of HTML to be replace with Lecture Table. 
//   moduleFilter  is one of: 'all' or the number representing the desired module eg 1, 12.

//function displayProblemTable(ID, moduleFilter, kindFilter) {
// the main function called to create a problem table
//  id           is id of HTML element to be replaced with Problem Table. 
//  moduleFilter   is one of: 'all' or a value that appears in the module field of problems eg 1, 12. 
//  kindFilter   is one of: 'all' or a value that appears in the kind field of problems

// Notes-----------------------------------------------------------------------
//
//  To make table sortable, do:   table.className = "sortable";
//


// *** DATA DEFINITIONS ***

// An example problem object:
//
// {   
//     'module'       : 'BSL',                                              // String
//     'label'        : 'intro',                                            // String
//     'kind'         : 'Practice',                                         // one of 'Practice' 'Homework' 'Lecture'
//     'setNumber'    : 1,                                                  // Natural
//     'name'         : 'Chessboard',                                       // String 
//     'codeFiles'    : ['chessboard-starter.rkt',                          // [String, ...]
//                       'chessboard-solution.rkt'],
//     'description'  : 'Create an image using image placement functions.', // String
//     'duration'     : 5,                                                  // Integer (minutes long)
//     'difficulty'   : 'Green',                                            // one of 'Green', 'Blue', 'Black'
//     'lecture'      : '01a'                                               // 3 char String of form 01a, 11b etc.
// } 

// An example lecture object (normal, with all column entries):
// {
//     'module'      : 'BSL',                                               // String
//     'title'       : 'How to Skin a Cat',                                 // String
//     'description' : '<p>Mmmm a yummy stew</p> \                          // String
//                      <p>Your mileage may vary.</p>'
//     'length'      : '!!:!!',                                             // String
//     'starterFile' : 'double-starter.rkt',                                // Filename (string)
//     'notes'       : 'foo.rkt',                                           // String
//     'videoNum'    : 5                                                    // Natural (COURSERA video number)
// }
//
// An example lecture object (two-char id, only description, renders to span all columns):
// {    
//     'module'       : 'BSL',
//     'title'        : '',
//     'description'  : '<p>The next 4 video lectures are...</p>'
//     'length'       : '',
//     'notesFile'    : '',
//     'starterFile'  : '',
//     'videoNum'     : ''       

MODULE_ORDER = [ 'BSL', 'HtDF', 'HtDD', 'HtDW', 'Compound',
		 'Self-Ref', 'Ref', 'Naturals', 'Helpers', 'BSTs', 'Mutual-Ref', 
		 '2-One-Of', 'Local', 
		 'Abstraction', 
		 'Genrec', 'Search'
	       ];

CURRENT_MODULE = 'Local'; // !!!

function moduleIsReleased(module) {
    return MODULE_ORDER.indexOf(module) <= MODULE_ORDER.indexOf(CURRENT_MODULE);
}



// Global Constants and Functions for Creating URLs----------------------------

IMAGE_FILE_BASE            = "https://spark-public.s3.amazonaws.com/programdesign/image_files/tables/";
STARTER_FILE_BASE          = "https://spark-public.s3.amazonaws.com/programdesign/starters/";
SOLUTION_FILE_BASE         = "https://spark-public.s3.amazonaws.com/programdesign/starters/";
NOTES_FILE_BASE            = "https://spark-public.s3.amazonaws.com/programdesign/notes/";
IN_VIDEO_QUIZZES_FILE_BASE = "https://spark-public.s3.amazonaws.com/programdesign/in-video-quizzes/";

MODULE_PAGE_BASE           = "../wiki/";
LECTURE_VIDEO_BASE         = "../lecture/";

function createImageFileURL      (filename)         { return downcase(IMAGE_FILE_BASE    + filename); }

function createLectureVideoURL (lecture)            { return downcase(LECTURE_VIDEO_BASE + 'view?lecture_id='         + lecture.videoNum);}
function createTranscriptURL   (lecture)            { return downcase(LECTURE_VIDEO_BASE + 'subtitles?q='             +  lecture.videoNum + '_en&format=txt'); }
function createSRTURL          (lecture)            { return downcase(LECTURE_VIDEO_BASE + 'subtitles?q='             +  lecture.videoNum + '_en&format=srt'); }
function createVideoMP4URL     (lecture)            { return downcase(LECTURE_VIDEO_BASE + 'download.mp4?lecture_id=' + lecture.videoNum); }


function createStarterFileURL  (module, filename)   { return downcase(STARTER_FILE_BASE          +         module + "/" + filename); }
function createSolutionFileURL (module, filename)   { return downcase(SOLUTION_FILE_BASE         +         module + "/" + filename); }
function createNotesURL        (lecture)            { return downcase(NOTES_FILE_BASE            + lecture.module + "/" + lecture.notes); }
function createQuizzesURL      (lecture)            { return downcase(IN_VIDEO_QUIZZES_FILE_BASE + lecture.module + "-" + lecture.label + '.pdf'); }

function downcase (str) { return str.toLowerCase(); }  //just makes above more compact
     
// Global Settings for Look and Feel of Tables---------------------------------
function setTableStyleAndProperties(table) {
    table.border = "1";
    table.cellpadding = "5";
    table.width = "90%"; 
    
    //Below are CSS Style attributes set to match Module1 Table
    table.style.border = "1px solid rgb(0, 0, 0)";
    table.style.padding = "5px"; 
    table.style.textAlign = "left";
    table.style.horizontalAlign = "left"; 
    table.style.verticalAlign = "top";
    table.style.maxWidth = "90%";
}


// Problem Table Specific Functions--------------------------------------------

function displayProblemTable(ID, moduleFilter, kindFilter) {
    // the main function called to create a problem table
    //  id           is id of HTML element to be replaced with Problem Table. 
    //  moduleFilter is one of: 'all' or a value that appears in the module field of problems
    //  kindFilter is one of: 'all' or a value that appears in the kind field of problems
        
    outputTable(createProblemTable(filterProblems(loadProblems(), moduleFilter, kindFilter)), ID);
}

function createProblemTable(problems,ID) {
 
    var table = document.createElement('table');
    setTableStyleAndProperties(table);
    //table.className = "sortable-onload-0"; //Delete this line to disable sorting table on module column by default. 

    createProblemTableHead(table)
    createProblemTableBody(table, problems);

    return table;
}

function createProblemTableHead(table) {
    var thead = table.createTHead();
    var row = thead.insertRow(0);

    //create and Append Headers 
    //NOTE: Order of following function calls dictate ordering of headers. 
    createHeaderCell(row, 'Module Kind #'   , 1, 1);
    createHeaderCell(row, 'Assignment'  , 1, 1);
    createHeaderCell(row, 'Duration'    , 1, 1);
    createHeaderCell(row, 'Difficulty'  , 1, 1);
    createHeaderCell(row, 'Code Files'  , 1, 1);
    createHeaderCell(row, 'Requires<br>Lecture'     , 1, 1);
}

function createProblemTableBody(table, problems) {
    var tbody = document.createElement('tbody');
    table.appendChild(tbody);

    for (i = 0; i < problems.length; i++) {
        var problem = problems[i];
        var row = tbody.insertRow(-1);

        createGenericCell(row,(problem.module + ' ' + PorGorL(problem.kind) + problem.setNumber)); 
        createAssignmentCell(row,problem);
        createGenericCell(row,problem.duration + ' min.');
        createDifficultyCell(row,problem);
        createCodeFilesCell(row,problem);
        createLectureCell(row,problem);
    }   
}

function PorGorL(kind) {
    if (kind === 'Practice') {
        return 'P';
    } else if (kind === 'Homework') {
        return 'H';
    } else if (kind === 'Lecture') {
        return 'L';
    }
}


function createAssignmentCell(row, problem) {
    var name        = problem.name;
    var description = problem.description;
    
    var cell         = row.insertCell(-1);

//     var titleHyperlink = document.createElement('a');
//     titleHyperlink.appendChild(document.createTextNode(problem.name));
//     titleHyperlink.title = problem.name;
//     titleHyperlink.href = createStarterFileURL(module, problem.starterFile);

//     assignmentCell.appendChild(titleHyperlink);
    
//     var title = document.createElement('strong');
//     title.appendChild(document.createTextNode(name));

//     cell.appendChild(title);
//    cell.appendChild(document.createElement('br'));
    cell.appendChild(document.createTextNode(description));
}

function createDifficultyCell(row,problem) {
    var difficultyCell = row.insertCell(-1);
    difficultyCell.align = "center";
    
    //Create Image
    var difficultyImage = document.createElement('img');
    difficultyImage.title = "Difficulty";
    if (problem.difficulty === "Green") {
        difficultyImage.src = createImageFileURL("1_green_circle.svg");
        difficultyImage.height = 23;
        difficultyImage.width = 23;
    } else if (problem.difficulty === "Blue") {
        difficultyImage.src = createImageFileURL("2_blue_square.svg");
        difficultyImage.height = 18;
        difficultyImage.width = 18;
    } else {
        difficultyImage.src = createImageFileURL("3_black_diamond.png");
        difficultyImage.height = 23;
        difficultyImage.width = 23;
    }
    
    difficultyCell.appendChild(difficultyImage);
    
}

function createCodeFilesCell(row, problem) {

    var cell = row.insertCell(-1);
    cell.align = "left";

    var files = problem.codeFiles;

    if (files === '') {
        //create italicized None
        cell.appendChild(createElementFromHTML('<i>none</i>'));

    }
    else if ( typeof files === "string" ) {
	addSingleCodeFile(document, cell, problem, files);

    }
	
    else if (Array.isArray(files)) {
	for(var i=0, len=files.length; i < len; i++) {
	    addSingleCodeFile(document, cell, problem, files[i]);
	    if(i < len - 1) {
		cell.appendChild(document.createElement('br'));
	    }
	}

    }
}

    function addSingleCodeFile(document, cell, problem, file) {
        var solutionLink = document.createElement('a');
        solutionLink.appendChild(document.createTextNode(file));
        solutionLink.title = problem.name;
        solutionLink.href = createSolutionFileURL(problem.module, file);
        
        cell.appendChild(solutionLink);
    }


function createLectureCell(row, problem) {
    var lecture = problem.lecture;

    var lectureCell = row.insertCell(-1);
    lectureCell.align = "center";

    lectureCell.appendChild(document.createTextNode(lecture));

}

function filterProblems(problems, moduleFilter, kindFilter) { 
    var filteredProblems = [];

    for (i = 0; i < problems.length; i++) {
	var problem = problems[i];
	var module  = problem.module;
	var kind    = problem.kind;

        if ( (   (moduleFilter === module) || (moduleFilter === 'all'))
             && ((kindFilter   === kind)   || (kindFilter   === 'all'))
	     && moduleIsReleased(module)
	   )
	{
	    filteredProblems.push(problem);
	}
    }

    return filteredProblems;
}


// Lecture Table Specific Functions -------------------------------------------

function displayLectureTable(ID, moduleFilter){
    // the main function called to create a lecture table
    // id           is id of HTML to be replace with Lecture Table. 
    // moduleFilter   is one of: 'all' or the number representing the desired module eg 1, 12. 

    outputTable(createLectureTable(filterLectures(loadLectures(), moduleFilter)), ID);
}

function createLectureTable(lectures){
    var table = document.createElement('table');
    setTableStyleAndProperties(table);

    createLectureTableHead(table);
    createLectureTableBody(table, lectures);

    return table;

}

function createLectureTableHead(table){
    var thead = table.createTHead();
    var row = thead.insertRow(0);
    createHeaderCell(row,'Topic'              , 1, 1);
    createHeaderCell(row,'Length <br> (mm:ss)', 1, 1);
    createHeaderCell(row,'Starter File'       , 1, 1);
    createHeaderCell(row,'Downloads'          , 1, 1);
}

function createLectureTableBody(table, lectures){
    var tbody = document.createElement('tbody');
    table.appendChild(tbody);

    for (i = 0; i < lectures.length; i++) {
        var lecture = lectures[i];
        var row     = tbody.insertRow(-1);

        if (lecture.title === ''){ //Checks if lecture is a multi-column spanning description. 
            createOneColumnRow(row,lecture);
        }
        else{
            createManyColumnRow(row,lecture);
        }  
    }   
}

function createOneColumnRow(row, lecture){
    // Creates a row where the description spans the entire row. 

    var cell = row.insertCell(-1);
    cell.align = "left";
    cell.colSpan = "4";
    
    cell.appendChild(createElementFromHTML(lecture.description));
}

function createManyColumnRow(row, lecture){

    createTopicCell(row, lecture);
    createGenericCell(row, lecture.length);
    createStarterFileCell(row, lecture);
    createDownloadsCell(row, lecture);
}

function createTopicCell(row, lecture){
    var topicCell = row.insertCell(-1);
    var topicTitle = createTopicTitle(lecture);

    //create Hyperlink element
    var titleHyperlink = document.createElement('a');
    titleHyperlink.appendChild(document.createTextNode(topicTitle));
    titleHyperlink.title = topicTitle;
    titleHyperlink.href = createLectureVideoURL(lecture);
    titleHyperlink.setAttribute("data-modal", ".inpage-video-modal");
    titleHyperlink.setAttribute("data-modal-iframe", "../lecture/view?lecture_id="+ lecture.videoNum);

    //Append Hyperlink, a break, and the text description 
    topicCell.appendChild(titleHyperlink);
    topicCell.appendChild(document.createElement('br'));
    topicCell.appendChild(createElementFromHTML(lecture.description));
}

function createTopicTitle(lecture){
    //Creates Title for Topic Cell of form '1a - Introduction' or '11b - Example Title'

    var prefix = lecture.module;
    var midix = ' - ';
    var suffix = lecture.title;
    return prefix + midix + suffix;
}

function createStarterFileCell(row, lecture){
    var starterFileCell = row.insertCell(-1);
    starterFileCell.align = "center";
    var starterFile = lecture.starterFile;
    var module = lecture.module;

    if (starterFile === ''){
        starterFileCell.appendChild(createElementFromHTML('<i>none</i>'));
    }
    else {
        var starterFileLink = document.createElement('a');
        starterFileLink.href = createStarterFileURL(module, starterFile);
        starterFileLink.title = starterFile;
        starterFileLink.appendChild(createElementFromHTML(starterFile));
        
        starterFileCell.appendChild(starterFileLink);
    }
}

function createDownloadsCell(row, lecture){
    var cell = row.insertCell(-1);
    cell.align = "center";

    var div = document.createElement('div');

    div.className="course-lecture-item-resource";

    
    if (lecture.notes)     { div.appendChild(createNotesLink(lecture)); }
                             div.appendChild(createVideoDownloadLink(lecture));
    if (lecture.inVideoQs) { div.appendChild(createQuizzesDownloadLink(lecture)); }
                             div.appendChild(createTranscriptLink(lecture));
                             div.appendChild(createSRTLink(lecture));

    cell.appendChild(div);
}

function createNotesLink          (lecture){ return createDownloadLink(lecture, "icon-align-justify",         "Notes",             "rkt", createNotesURL(lecture)); }
function createVideoDownloadLink  (lecture){ return createDownloadLink(lecture, "icon-download-alt resource", "Video",             "mp4", createVideoMP4URL(lecture)); }
function createQuizzesDownloadLink(lecture){ return createDownloadLink(lecture, "icon-file",                  "In Video Quizzes",  "pdf", createQuizzesURL(lecture)); }
function createTranscriptLink     (lecture){ return createDownloadLink(lecture, "icon-align-justify",         "Transcript",        "txt", createTranscriptURL(lecture)); }
function createSRTLink            (lecture){ return createDownloadLink(lecture, "icon-list",                  "Subtitles",         "srt", createSRTURL(lecture)); }

function createDownloadLink(lecture, icon, title, format, url){    

    var link = document.createElement('a');
    link.target = "_new";
    link.href  = url;
    link.title = title + " (" + format + ")";
    link.appendChild(createElementFromHTML('<i class="' + icon + '" ></i>'));
    link.appendChild(createElementFromHTML('<div class="hidden">' + link.title + '</div>'));

    return link;
}	







function filterLectures(lectures, moduleFilter){

    var filteredLectures = []; 

    for (i = 0; i < lectures.length; i++) {
        var lecture = lectures[i];
        var module  = lecture.module;

        if ( ((moduleFilter   === module)   || (moduleFilter === 'all'))
	     && moduleIsReleased(module)) {

            filteredLectures.push(lecture);
        }
    }

    return filteredLectures;
}

// Global Functions -----------------------------------------------------------

function outputTable(table, ID) {
    //clears HTML element with id ID, and then appends table. 

    document.getElementById(ID).innerHTML = ''; 
    document.getElementById(ID).appendChild(table);
}

function createHeaderCell(row, html, rowspan, colspan) {
    // creates header cell
    // text is a string, containing the text for the header. Can be HTML, for example 'Length <br> (mm:ss)'
    
    var cell = document.createElement('th');
    var textElement = createElementFromHTML(html);
    setColumnSort(cell,html);

    

    cell.rowSpan = rowspan;
    cell.colSpan = colspan;
        
    cell.appendChild(textElement);
    cell.align = "center";

    row.appendChild(cell);
}

function setColumnSort(cell,html){
    // sets what sorting mechanism should be used for this column.
    // className="sortable" sets to default sorting. 
    // other sorting methods are found in tablesort.js
    // more info: http://www.frequency-decoder.com/2006/09/16/unobtrusive-table-sort-script-revisited

    if (html === 'Difficulty'){
        cell.className = "sortable-sortImage";
    }
    else{
        cell.className = "sortable";
    }

}


function createGenericCell(row, html) {
    //  creates a generic cell whose contents are set to the html string. 

    var cell = row.insertCell(-1);
    cell.align = "center";
    cell.appendChild(createElementFromHTML(html));
}

function createElementFromHTML(html){
    // Creates an element whose HTML is set to input html.
    // Allows table entries to contain explicit HTML, such as breaks, bolding, links, etc. 

    var textElement = document.createElement("div");
    textElement.innerHTML = html;
    return textElement;
}
