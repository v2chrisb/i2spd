
function loadLectures(){
    var output = 
        { 'lectures':   
          [
              // lecture object data definition is in displayTable.js

              // BSL
              {
                  'module'      :  'BSL',
	          'label'       :  'intro',
                  'title'       : 'Introduction',
                  'description' : '<p>Motivation and goals of the \
                                   course. How and why this course differs from other \
                                   introductory programming courses.</p>',
                  'length'      : '5:33',
                  'starterFile' : '',
                  'notes'       : 'bsl-introduction.rkt',
                  'inVideoQs'   : false,
                  'videoNum'    : 111
              },

              {
                  'module'      :  'BSL',
	              'label'       :  'how2study',
                  'title'       : 'How to Study',
                  'description' : '<p>A introductory navigation through the course website, and some advice on studying.</p>',
                  'length'      : '6:52',
                  'starterFile' : '',
                  'notes'       : 'bsl-introduction.rkt',
                  'inVideoQs'   : false,
                  'videoNum'    : 225
              },

              {
                  'module'      : 'BSL',
	          'label'       :  'exprs',
                  'title'       : 'Expressions',
                  'description' : '<p>DrRacket, numbers, forming expressions that operate on numbers.</p> \
                                   <p><i>NOTE: Before starting this lecture \
                                   <a href="http://racket-lang.org/download">download the latest version of DrRacket</a>, \
                                   install the download on your computer and then start the <strong>DrRacket</strong> application.</p>',
                  'length'      : '8:30',
                  'starterFile' : 'pythag-starter.rkt',
                  'notes'       : 'bsl-expressions-to-constant-defs.rkt',
                  'inVideoQs'   : true,
                  'videoNum'    : 41
              },

              {
                  'module'      : 'BSL',
	          'label'       :  'eval',
                  'title'       : 'Evaluation',
                  'description' : '<p>Rules for evaluating primitive call expressions.</p>',
                  'length'      : '6:56',
                  'starterFile' : '',
                  'notes'       : 'bsl-expressions-to-constant-defs.rkt',
                  'inVideoQs'   : true,
                  'videoNum'    : 43

              },        

              {
                  'module'      : 'BSL',
	          'label'       :  'strs-imgs',
                  'title'       : 'Strings and Images',
                  'description' : '<p>String and image values. Primitives that operate on strings and images.</p>',      
                  'length'      : '11:28',
                  'starterFile' : '',
                  'notes'       : 'bsl-expressions-to-constant-defs.rkt',
                  'inVideoQs'   : true,
                  'videoNum'    : 45


              },        

              {
                  'module'      : 'BSL',
	          'label'       :  'const-def',
                  'title'       : 'Constant Definitions',
                  'description' : '<p>Constant definitions, forming constant definitions and rules for evaluating constants.</p>',
                  'length'      : '6:15',
                  'starterFile' : '',
                  'notes'       : 'bsl-expressions-to-constant-defs.rkt',
                  'inVideoQs'   : true,
                  'videoNum'    : 47
              },


              {
                  'module'      : 'BSL',
	          'label'       :  'pacing',
                  'title'       : 'Pacing and Doing Well in the Course',
                  'description' : '<p>On the pacing of the course, and reminders of how to do well.</p>',
                  'length'      : '1:15',
                  'starterFile' : '',
                  'notes'       : '',
                  'inVideoQs'   : false,
                  'videoNum'    : 221
              },


              {
                  'module'      : 'BSL',
	          'label'       :  'fun-def',
                  'title'       : 'Function Definitions',
                  'description' : '<p>Function definitions, forming function definitions and rules for evaluating function calls.</p>',
                  'length'      : '11:01',
                  'starterFile' : 'function-definitions-starter.rkt',
                  'notes'       : 'bsl-function-defs.rkt',
                  'inVideoQs'   : true,
                  'videoNum'    : 49
              },                

              {
                  'module'      : 'BSL',
	          'label'       :  'bool-if-exprs',
                  'title'       : 'Booleans and if Expressions',
                  'description' : '<p>Boolean Values. Forming if expressions and rules for evaluating if expressions.</p> \
                             \
                             <p>This video is particularly long because it includes a \
                             detailed step-by-step evaluation example. You may want to skim \
                             that example and come back to it later.</p>',              
                  'length'      : '14:02',
                  'starterFile' : '',
                  'notes'       : 'bsl-booleans.rkt',
                  'inVideoQs'   : true,
                  'videoNum'    : 51
              },                

              {
                  'module'      : 'BSL',
	          'label'       :  'stepper',
                  'title'       : 'Using the Stepper',
                  'description' : '<p>Using the Dr. Racket stepper to walk through \
                                      the evaluation of an expression one step at a time.</p>',
                  'length'      : '5:36',
                  'starterFile' : 'stepper-starter.rkt',
                  'notes'       : '',
                  'inVideoQs'   : false,
                  'videoNum'    : 79
              },        


              {
                  'module'      : 'BSL',
	          'label'       :  'disc-prim',
                  'title'       : 'Discovering Primitives',
                  'description' : '<p>How to discover primitives beyond those covered in lecture.</p> \
                                   <p><i>Watch this lecture some time this week or next, but after lecture 1d.</i></p>',
                  'length'      : '5:25',
                  'starterFile' : '',
                  'notes'       : '',
                  'inVideoQs'   : true,
                  'videoNum'    : 35
              },


              // HtDF

              {
                  'module'      : 'HtDF',
	          'label'       :  'full',
                  'title'       : 'Full Speed HtDF Recipe',
                  'description' : '<p>Now we get to the heart of the course - a first quick \
                             demonstration of the How to Design Functions Recipe \
                             (<a href="view?page=HtDFunctions">HtDF recipe</a>).</p>',          
                  'length'      : '8:47',
                  'starterFile' : 'double-starter.rkt',
                  'notes'       : 'htdf-notes.rkt',
                  'inVideoQs'   : true,
                  'videoNum'    : 37
              },        

              {
                  'module'      : 'HtDF',
	          'label'       :  'slow',
                  'title'       : 'Slow Motion HtDF Recipe',
                  'description' : '<p>A slower presentation and discussion of the How to Design Functions Recipe \
                             (<a href="view?page=HtDFunctions">HtDF recipe</a>).</p> \
                             <p><i>NOTE: Be sure to watch the BSL - Using the Stepper lecture before you watch this one.</i></p>',           
                  'length'      : '11:22',
                  'starterFile' : 'double-starter.rkt',
                  'notes'       : 'htdf-notes.rkt',
                  'inVideoQs'   : true,
                  'videoNum'    : 39        
              },

              {       
                  'module'      : 'HtDF',
	          'label'       :  '',
                  'title'       : '',
                  'description' : '<p>The next 4 video lectures are short examples of using the \
                             the <a href="view?page=HtDFunctions">HtDF recipe</a>. \
                             Each video is partly review of the HtDF recipe, but each video also elaborates \
                             on how to use the recipe, including points on:</p> \
                             <ul> \
                                   <li>writing signatures and purpose statements</li> \
                                   <li>how many tests a function should have</li> \
                                   <li>what to do when tests fail</li> \
                                   <li>what to do when your understanding of the purpose changes part way through the design</li> \
                             </ul> \
                             <p> \
                               We recommend that you work through the problems along with the \
                               video. Get the starter file, work one step of the recipe, \
                               watch that on video, then work the next step of the recipe, \
                               watch that and so on. Remember, you can\'t learn program \
                               design by watching -- you have to do it! \
                             </p>',
                  'length'      : '',
                  'starterFile' : '',
                  'notes'       : '',
                  'inVideoQs'   : false,
                  'videoNum'    : 0

              },

              {
                  'module'      : 'HtDF',
	          'label'       :  'yell',
                  'title'       : 'Examples - yell!',
                  'description' : '<p>A detailed example of using the HtDF recipe to design a simple function operating on \
                                 a string. This is a good chance for you to practice the material from the previous two lectures.</p>.',
                  'length'      : '3:31',
                  'starterFile' : 'yell-starter.rkt',
                  'notes'       : 'htdf-notes.rkt',
                  'inVideoQs'   : true,
                  'videoNum'    : 27
                  
              },

              {
                  'module'      : 'HtDF',
	          'label'       :  'area',
                  'title'       : 'Examples - area',
                  'description' : '<p>In this example of using the HtDF recipe, you can see \
                                      what it\'s like to have an incorrect test as well a case \
                                      of having to copy part of the template.</p>.',
                  'length'      : '5:02',
                  'starterFile' : 'area-starter.rkt',
                  'notes'       : 'htdf-notes.rkt',
                  'inVideoQs'   : true,
                  'videoNum'    : 29
                  
              },

              {
                  'module'      : 'HtDF',
	          'label'       :  'img-area',
                  'title'       : 'Examples - image-area',
                  'description' : '<p>Another HtDF example, including a discussion of when and why \
                                    it makes sense to vary the order of the steps in the HtDF recipe.</p>.',        
                  'length'      : '5:59',
                  'starterFile' : 'image-area-starter.rkt',
                  'notes'       : 'htdf-notes.rkt',
                  'inVideoQs'   : false,
                  'videoNum'    : 33
                  
              },

              {
                  'module'      : 'HtDF',
	          'label'       :  'tall',
                  'title'       : 'Examples - tall',
                  'description' : '<p>An HtDF example in which the problem statement is less specific \
                                    about what is needed. We also talk more about the number of tests \
                                    a function requires.</p>.',
                  'length'      : '11:18',
                  'starterFile' : 'tall-starter.rkt',
                  'notes'       : 'htdf-notes.rkt',
                  'inVideoQs'   : false,
                  'videoNum'    : 31
              },


              // HtDD
              {
                  'module'      : 'HtDD',
	          'label'       :  'cond-exprs',
                  'title'       : 'cond Expressions',
                  'description' : '<p><tt>cond</tt> expressions simplify writing conditional \
                                      expressions with more than 2 cases. A detailed look at the \
                                      evaluation of <tt>cond</tt> expressions provides insight \
                                      into the nature of the evaluation rules used by BSL.</p>',
                  'length'      : '11:12',
                  'starterFile' : 'cond-starter.rkt',
                  'notes'       : 'htdd-cond.rkt',
                  'inVideoQs'   : true,
                  'videoNum'    : 53
              },
              {
                  'module'      : 'HtDD',
	          'label'       :  'intro',
                  'title'       : 'Data Definitions',
                  'description' : '<p>Data definitions explain how information is represented \
                                   as data. This is a crucial part of program design and has a significant \
                                   effect on the design of every function that operates on that data. </p>',
                  'length'      : '8:00',
                  'starterFile' : 'next-color-starter.rkt',
                  'notes'       : 'htdd-intro.rkt',
                  'inVideoQs'   : false,
                  'videoNum'    : 57
              },
              {
                  'module'      : 'HtDD',
	          'label'       :  'atomic',
                  'title'       : 'Atomic Non-Distinct',
                  'description' : '<p>A first example of using the How to Design Data \
                                     (<a href="view?page=HtDData">HtDD recipe</a>) and \
                                      <a href="view?page=DataDrivenTemplates">Data Driven Templates</a> recipes.</p>',          
                  'length'      : '8:05',
                  'starterFile' : 'city-name-starter.rkt',
                  'notes'       : 'htdd-first-data-defs.rkt',
                  'inVideoQs'   : true,
                  'videoNum'    : 59
              },
              {
                  'module'      : 'HtDD',
	          'label'       :  'atomic-htdf',
                  'title'       : 'HtDF With Non-Primitive Data',
                  'description' : '<p>How to use the HtDF recipe with non-primitive data (data defined by a data definition).</p>',             
                  'length'      : '7:50',
                  'starterFile' : 'best-starter.rkt',
                  'notes'       : 'htdd-htdf-dd.rkt',
                  'inVideoQs'   : true,
                  'videoNum'    : 61
              },
              {
                  'module'      : 'HtDD',
	          'label'       :  'orthog',
                  'title'       : 'HtDF X Structure of Data Orthogonality',
                  'description' : '<p>The HtDF and HtDD recipes are largely orthogonal. This means that HtDF works nearly the same \
                                      way for all forms of data. This has a significant impact on how quickly we can expand our \
                                      design abilities since once we learn a new form of data we already mostly know how to design \
                                      functions that operate on it.</p>',
                  'length'      : '5:32',
                  'starterFile' : '',
                  'notes'       : '',
                  'inVideoQs'   : false,
                  'videoNum'    : 63
              },
              {
                  'module'      : 'HtDD',
	          'label'       :  'interv',
                  'title'       : 'Interval',
                  'description' : '<p>Interval data definitions are used for information that is numbers within a certain range.</p>',             
                  'length'      : '7:14',
                  'starterFile' : 'seat-num-starter.rkt',
                  'notes'       : 'htdd-first-data-defs.rkt',
                  'inVideoQs'   : true,
                  'videoNum'    : 65
              },
              {
                  'module'      : 'HtDD',
	          'label'       :  'enum',
                  'title'       : 'Enumeration',
                  'description' : '<p>Enumeration data definitions are used when the information to be represented consists of two \
                                      or more distinct values.</p>',             
                  'length'      : '9:40',
                  'starterFile' : 'letter-grade-starter.rkt',
                  'notes'       : 'htdd-first-data-defs.rkt',
                  'inVideoQs'   : true,
                  'videoNum'    : 67
              },
              {
                  'module'      : 'HtDD',
	          'label'       :  'itemz',
                  'title'       : 'Itemization',
                  'description' : '<p>Itemizations are used for information comprised of 2 or more categories, at least one of \
                                      which is not a distinct value.</p>',
                  'length'      : '11:40',
                  'starterFile' : 'countdown-starter.rkt',
                  'notes'       : 'htdd-first-data-defs.rkt',
                  'inVideoQs'   : true,
                  'videoNum'    : 69
              },
              {
                  'module'      : 'HtDD',
	          'label'       :  'interv-htdf',
                  'title'       : 'HtDF with Interval',
                  'description' : '<p>A quick presentation of designing a function that consumes an interval type.</p>',             
                  'length'      : '4:57',
                  'starterFile' : 'aisle-starter.rkt',
                  'notes'       : 'htdd-htdf-dd.rkt',
                  'inVideoQs'   : true,
                  'videoNum'    : 71
              },
              {
                  'module'      : 'HtDD',
	          'label'       :  'enum-htdf',
                  'title'       : 'HtDF with Enumeration',
                  'description' : '<p>A quick presentation of designing a function that consumes an enumeration type.</p>',             
                  'length'      : '6:03',
                  'starterFile' : 'bump-up-starter.rkt',
                  'notes'       : 'htdd-htdf-enum.rkt',
                  'inVideoQs'   : true,
                  'videoNum'    : 73
              },

              {
                  'module'      : 'HtDD',
	          'label'       :  'itemz-htdf',
                  'title'       : 'HtDF with Itemization',
                  'description' : '<p>A quick presentation of designing a function that consumes an itemization type.</p>',             
                  'length'      : '10:41',
                  'starterFile' : 'countdown-to-display-starter.rkt',
                  'notes'       : 'htdd-htdf-dd.rkt',
                  'inVideoQs'   : true,
                  'videoNum'    : 75
              },
              {
                  'module'      : 'HtDD',
	          'label'       :  'info-flow',
                  'title'       : 'Structure of Information Flows Through',
                  'description' : '<p>A summary of the week, highlighting how identification of the form of information to be represented \
                                      flows through the rest of the program.</p>',             
                  'length'      : '3:54',
                  'starterFile' : '',
                  'notes'       : '',
                  'inVideoQs'   : false,
                  'videoNum'    : 77
              },

              // HtDW
              {
                  'module'      : 'HtDW',
	          'label'       :  'intro',
                  'title'       : 'Interactive Programs',
                  'description' : '<p>This week we are going to learn how to design simple interactive programs: \
                                      animations, games, desktop applications. The graphics will be pretty plain \
                                      but the core structure of these programs will be like that of more sophisticated \
                                      versions of these programs.</p>',
                  'length'      : '2:18',
                  'starterFile' : '',
                  'notes'       : 'htdw-intro.rkt',
                  'inVideoQs'   : false,
                  'videoNum'    : 145
              },
              {
                  'module'      : 'HtDW',
	          'label'       :  'big-bang',
                  'title'       : 'The big-bang Mechanism',
                  'description' : '<p>The inherent behind-the-scenes functionality of interactive programs, \
                                      and the <tt>big-bang</tt> primitive.</p>',
                  'length'      : '11:53',
                  'starterFile' : '',
                  'notes'       : 'htdw-intro.rkt',
                  'inVideoQs'   : true,
                  'videoNum'    : 83
              },
              {
                  'module'      : 'HtDW',
	          'label'       :  'domain-analy',
                  'title'       : 'Domain Analysis',
                  'description' : '<p>The first phase of the How to Design Worlds (HtDW) recipe is to analyze the problem \
                                      to identify constant information, changing information and required <tt>big-bang</tt> \
                                      options.</p>',
                  'length'      : '7:52',
                  'starterFile' : 'cat-starter.rkt',
                  'notes'       : 'htdw-intro.rkt',
                  'inVideoQs'   : true,
                  'videoNum'    : 85
              },
              {
                  'module'      : 'HtDW',
	          'label'       :  'main',
                  'title'       : 'Program through main Function',
                  'description' : '<p>The second phase of the How to Design Worlds (HtDW) involves going from the analysis \
                                      to the overall structure of the main program. This is our first example of a larger \
                                      program, and we use the wish-list technique to manage the overall design work.</p>',
                  'length'      : '14:34',
                  'starterFile' : 'cat-starter.rkt',
                  'notes'       : '',
                  'inVideoQs'   : true,
                  'videoNum'    : 87
              },
              {
                  'module'      : 'HtDW',
	          'label'       :  'wish-list',
                  'title'       : 'Working through the Wish List',
                  'description' : '<p>Completing the world program involves systematically going through the wish list \
                                      and completing the design of every \'wished-for\' function.</p>',
                  'length'      : '11:04',
                  'starterFile' : '',
                  'notes'       : '',
                  'inVideoQs'   : true,
                  'videoNum'    : 89
              },
              {
                  'module'      : 'HtDW',
	          'label'       :  'add-speed',
                  'title'       : 'Improving a World Program - Add SPEED',
                  'description' : '<p>Given an existing world program we can extend it with new behavior by using the \
                                      analysis as a model of the program in order to plan the revision. \
                                      Much of this video is really another example of using HtDF and HtDW.</p>',
                  'length'      : '6:25',
                  'starterFile' : 'cat-v1.rkt',
                  'notes'       : '',
                  'inVideoQs'   : false,
                  'videoNum'    : 91
              },
              {
                  'module'      : 'HtDW',
	          'label'       :  'add-key',
                  'title'       : 'Improving a World Program - Add key handler',
                  'description' : '<p>We now extend the cat program to respond to keyboard events. \
                                      Again much of this video is review. The key new material has \
                                      to do with testing and templating functions that operate on large enumerations.</p>',
                  'length'      : '12:32',
                  'starterFile' : 'cat-v2.rkt',
                  'notes'       : '',
                  'inVideoQs'   : true,
                  'videoNum'    : 93
              },

              // Compound
              {
                  'module'      : 'Compound',
	          'label'       :  'define-struct',
                  'title'       : 'define-struct',
                  'description' : '<p>A new mechanism from the BSL language allows us to build multi-part \
                                      (or compound) values and later to desconstruct the compound values to \
                                      get the individual values back.</p>',
                  'length'      : '5:27',
                  'starterFile' : '',
                  'notes'       : 'compound-defstruct.rkt',
                  'inVideoQs'   : true,
                  'videoNum'    : 99
              },

              {
                  'module'      : 'Compound',
	          'label'       :  'data-def',
                  'title'       : 'Compound Data Definitions',
                  'description' : '<p>How to form compound data definitions using the HtDD recipe.</p>',
                  'length'      : '6:19',
                  'starterFile' : 'compound-starter.rkt',
                  'notes'       : 'compound-defstruct.rkt',
                  'inVideoQs'   : true,
                  'videoNum'    : 81
              },
              
              {
                  'module'      : 'Compound',
	          'label'       :  'htdw',
                  'title'       : 'HtDW With Compound Data',
                  'description' : '<p>This is a <strong>very long video</strong>. That is because it goes step-by-step through the development of a \
                                       world program with compound world state. In that sense much of <strong>the video is like TA office hours</strong> - \
                                       you can work through the problemm on your own consulting the video now and then to compare your \
                                       solution to ours. \
                                      Part of the video goes into more detail on how to handle the geometry of keeping moving elements \
                                      inside the screen, which is an area that students often ask about. \
                                      Another part introduces helper functions.</p>',
                  'length'      : '29:35',
                  'starterFile' : 'cowabunga-starter.rkt', 
                  'notes'       : 'compound-htdw.rkt',
                  'inVideoQs'   : false,
                  'videoNum'    : 95
              },

              // Self-Ref
              
              {
                  'module'      : 'Self-Ref',
	          'label'       :  'intro',
                  'title'       : 'Introduction to Arbitrary Sized Data',
                  'description' : '<p>This week we focus on how programs can represent arbitrary amounts \
                                   of information. This includes things like all the students in a course, \
                                   all your friends on Facebook, or (sadly) all your favorite hockey teams.</p>',
                  'length'      : '1:22',
                  'starterFile' : '', 
                  'notes'       : 'self-ref-intro.rkt',
                  'inVideoQs'   : false,
                  'videoNum'    : '103'
              },
              
              {
                  'module'      : 'Self-Ref',
	          'label'       :  'list-mech',
                  'title'       : 'List Mechanisms',
                  'description' : '<p>Primitive data and operations for representing lists.</p>',
                  'length'      : '8:40',
                  'starterFile' : '', 
                  'notes'       : '',
                  'inVideoQs'   : true,
                  'videoNum'    : 101
              },
              
              {
                  'module'      : 'Self-Ref',
	          'label'       :  'list-dd',
                  'title'       : 'List Data Definition',
                  'description' : '<p>A data definition for representing lists of Quidditch teams. \
                                      In this first list data definition we make a few lucky (and unexplained \
                                      decisions) and wind up with a data definition that seems to do the job. \
                                      The mysteries are all resolved in 5e.</p>',
                  'length'      : '11:33',
                  'starterFile' : 'quidditch-starter.rkt', 
                  'notes'       : 'self-ref-first-lists.rkt',
                  'inVideoQs'   : true,
                  'videoNum'    : 105
              },
              
              {
                  'module'      : 'Self-Ref',
	          'label'       :  'list-fun',
                  'title'       : 'Function Operating on List',
                  'description' : '<p>A function for operating on a list. \
                                      In this first function that operates on a list we use the data definition \
                                      from 5c and our function works out splendidly.<\p> \
                                      The mysteries are all resolved in 5e.',
                  'length'      : '7:36',
                  'starterFile' : '', 
                  'notes'       : 'self-ref-first-lists.rkt',
                  'inVideoQs'   : true,
                  'videoNum'    : 107
              },
              
              {
                  'module'      : 'Self-Ref',
	          'label'       :  'rev-recp-list',
                  'title'       : 'Revising the Recipes for Lists',
                  'description' : '<p>The luck of the last two videos is explained. The key ideas of well-formed \
                                      self-referential data definitions, natural recursion and trusting the \
                                      natural recursion are the key to operating on arbitrary-sized data. \
                                      We update the recipes to include them.</p>',
                  'length'      : '12:15',
                  'starterFile' : 'quidditch-recap-starter.rkt', 
                  'notes'       : 'self-ref-list-recipes.rkt',
                  'inVideoQs'   : true,
                  'videoNum'    : 109
              },
              
              {
                  'module'      : 'Self-Ref',
	          'label'       :  'des-w-list',
                  'title'       : 'Designing with Lists',
                  'description' : '<p>Examples of using the revised recipes beginning to end.</p>',
                  'length'      : '13:04',
                  'starterFile' : 'designing-with-lists-1-starter.rkt', 
                  'notes'       : 'self-ref-more-list-fns.rkt',
                  'inVideoQs'   : true,
                  'videoNum'    : 113
              },
              
              {
                  'module'      : 'Self-Ref',
	          'label'       :  'pos-list-templ',
                  'title'       : 'Positions in List Templates',
                  'description' : '<p>Looking over all the list functions designed so far we see that \
                                      each position in the list template plays a specific role.</p>',
                  'length'      : '7:15',
                  'starterFile' : '', 
                  'notes'       : 'self-ref-more-list-fns.rkt',
                  'inVideoQs'   : true,
                  'videoNum'    : 115
              },

              // Ref
              {
                  'module'      : 'Ref',
	          'label'       :  'part-1',
                  'title'       : 'The Reference Rule Part 1',
                  'description' : '<p>In the next three videos we take a small but very significant \
                                      step in terms of the complexity of the information we can \
                                      represent as data. We will start to have designs with more than \
                                      one data definition each for representing one part of the \
                                      overall information.  As we have seen before this difference will \
                                      arise in the information, be reflected in the type comments,  \
                                      be carried into the templates by the template rules and show  \
                                      up in the structure of the final function definitions and tests.</p>',
                  'length'      : '10:42',
                  'starterFile' : 'tuition-graph-starter.rkt', 
                  'notes'       : 'ref-other-example.rkt',
                  'inVideoQs'   : true,
                  'videoNum'    : 117
              },
              
              {
                  'module'      : 'Ref',
	          'label'       :  'part-2',
                  'title'       : 'The Reference Rule Part 2',
                  'description' : '<p>This video focuses almost entirely on the examples for the <tt>chart</tt>  \
                                      function. This provides a good example of the incremental process of working out \
                                      more complex image producing functions and also reinforces why we do the \
                                      recipe steps in the order we do. Even though this video does not address the \
                                      reference rule directly it is absolutely essential that you watch it before \
                                      part 3.</p>',
                  'length'      : '14:47',
                  'starterFile' : 'tuition-graph-v3.rkt', 
                  'notes'       : '',
                  'inVideoQs'   : true,
                  'videoNum'    : 119
              },
              
              {
                  'module'      : 'Ref',
	          'label'       :  'part-3',
                  'title'       : 'The Reference Rule Part 3',
                  'description' : '<p>The final reference rule video completes the design of the <tt>chart</tt> \
                                      function. When we encounter the natural helper in the template for \
                                      <tt>ListOfSchool</tt> we make a wish for the problem to get simpler - \
                                      and it does.</p>',
                  'length'      : '11:33',
                  'starterFile' : 'tuition-graph-v3.rkt', 
                  'notes'       : '',
                  'inVideoQs'   : true,
                  'videoNum'    : 125
              },
              
              // Naturals
              {
                  'module'      : 'Naturals',
	          'label'       :  'nat',
                  'title'       : 'Natural Numbers',
                  'description' : '<p>There are arbitrarily many natural numbers, so we can use a well-formed \
                                      self-referential data definition to describe the type Natural. Doing \
                                      so makes it easy to design functions that count down from a given \
                                      natural number to 0.</p>',
                  'length'      : '12:55',
                  'starterFile' : 'naturals-starter.rkt', 
                  'notes'       : 'naturals.rkt',
                  'inVideoQs'   : true,
                  'videoNum'    : 121
              },
              
              {
                  'module'      : 'Naturals',
	          'label'       :  'parlor',
                  'title'       : 'A Parlor Trick',
                  'description' : '<p>If DrRacket didn\'t have naturals numbers as a primitive type what would \
                                      we do? Easy, use HtDD and HtDF to define them.</p>',
                  'length'      : '16:18',
                  'starterFile' : 'new-numerals-starter.rkt', 
                  'notes'       : 'a-parlor-trick.rkt',
                  'inVideoQs'   : false,
                  'videoNum'    : 123
              },

              // Helpers
              
              {
                  'module'      : 'Helpers',
	          'label'       :  'intro',
                  'title'       : 'Introduction',
                  'description' : '<p>Big design problems need to be broken into smaller pieces in order to be tractable. \
                                      In this week we learn several new rules for breaking down function and data designs. \
                                      We also see more examples of the form of information flows through to the data and \
                                      the functions that operate on that data. </p>',
                  'length'      : '1:00',
                  'starterFile' : '', 
                  'notes'       : '',
                  'inVideoQs'   : false,
                  'videoNum'    : '167'
              },
              
              {
                  'module'      : 'Helpers',
	          'label'       :  'fun-comps',
                  'title'       : 'Function Composition',
                  'description' : '<p>A function should be split into a function composition when it performs two or more \
                                      distinct and complete operations on the consumed data.</p>',
                  'length'      : '13:45',
                  'starterFile' : 'arrange-images-starter.rkt', 
                  'notes'       : 'helpers-rules.rkt',
                  'inVideoQs'   : true,
                  'videoNum'    : '131'
              },
              
              {
                  'module'      : 'Helpers',
	          'label'       :  'layout-img',
                  'title'       : 'Laying Out a List of Images',
                  'description' : '<p>This function design requires no new techniques. It needs to be done as part of\
                                      the larger problem, and it serves as practice and review.</p>',
                  'length'      : '4:05',
                  'starterFile' : 'arrange-images-v2.rkt', 
                  'notes'       : 'helpers-rules.rkt',
                  'inVideoQs'   : true,
                  'videoNum'    : '133'
              },
              
              {
                  'module'      : 'Helpers',
	          'label'       :  'op-list',
                  'title'       : 'Operating on a List',
                  'description' : '<p>When an expression must operate on a list -- and go arbitrarily far into that list -- then \
                                      it must call a helper function to do that.</p>',
                  'length'      : '10:55',
                  'starterFile' : 'arrange-images-v3.rkt', 
                  'notes'       : 'helpers-rules.rkt',
                  'inVideoQs'   : true,
                  'videoNum'    : '135'
              },
              
              {
                  'module'      : 'Helpers',
	          'label'       :  'know-shift',
                  'title'       : 'Domain Knowledge Shift',
                  'description' : '<p>When the body of a function must shift to a new knowledge domain it should call a \
                                      helper function to do the work in the new domain.</p>',
                  'length'      : '14:48',
                  'starterFile' : 'arrange-images-v4.rkt', 
                  'notes'       : 'helpers-rules.rkt',
                  'inVideoQs'   : true,
                  'videoNum'    : '137'
              },
              
              {
                  'module'      : 'Helpers',
	          'label'       :  'wrap-up',
                  'title'       : 'Wrap Up',
                  'description' : '<p>The wish list process organizes the process of working through a design process, \
                                      consisting of potentially many helper functions. The moment at which the last helper is \
                                      finished, and \"all tests pass\" is very satisfying.</p>',
                  'length'      : '7:19',
                  'starterFile' : 'arrange-images-v5.rkt', 
                  'notes'       : 'helpers-rules.rkt',
                  'inVideoQs'   : true,
                  'videoNum'    : '139'
              },
              

              //BSTs
              {
                  'module'      : 'BSTs',
	          'label'       : 'list-abrv',
                  'title'       : 'List Abbreviations',
                  'description' : '<p>A new notation for lists is less cumbersome, but that comes at the cost of making the\
                                      recursive structure less apparent.</p>',
                  'length'      : '5:45',
                  'starterFile' : '', 
                  'notes'       : 'list-abbrevs.rkt',
                  'inVideoQs'   : true,
                  'videoNum'    : '141'
              },
              {
                  'module'      : 'BSTs',
	          'label'       : 'loa',
                  'title'       : 'List of Account',
                  'description' : '<p>We consider the problem of looking up member names in a bunch of accounts with account numbers names; first, by representing the data as a list.</p>',
                  'length'      : '2:44', 
                  'starterFile' : 'lookup-in-list-starter.rkt', 
                  'notes'       : 'bst-notes.rkt',
                  'inVideoQs'   : false,
                  'videoNum'    : '227'
              },

              {
                  'module'      : 'BSTs',
	          'label'       : 'bsts',
                  'title'       : 'Binary Search Trees',
                  'description' : '<p>An introduction to an alternate representation of the account data, this time in a Binary Search Trees</p>',
                  'length'      : '7:56', 
                  'starterFile' : '', 
                  'notes'       : 'bst-notes.rkt',
                  'inVideoQs'   : true,
                  'videoNum'    : '229'
              },
              {
                  'module'      : 'BSTs',
	          'label'       : 'dd',
                  'title'       : 'BST Data Definition',
                  'description' : '<p>A data definition for Binary Search Trees.</p>',
                  'length'      : '11:49', 
                  'starterFile' : 'bst-dd-starter.rkt', 
                  'notes'       : 'bst-notes.rkt',
                  'inVideoQs'   : true,
                  'videoNum'    : '231'
              },

              {
                  'module'      : 'BSTs',
	          'label'       : 'lookup',
                  'title'       : 'Lookup in BST',
                  'description' : '<p>Creating a function that searches for the entry with a given key in a BST.</p>',
                  'length'      : '14:53', 
                  'starterFile' : 'lookup-in-bst-starter.rkt', 
                  'notes'       : 'bst-notes.rkt',
                  'inVideoQs'   : true,
                  'videoNum'    : '233'
              },

              {
                  'module'      : 'BSTs',
	          'label'       : 'render',
                  'title'       : 'Render BST',
                  'description' : '<p>In this video, we develop a function to render BSTs.</p>',
                  'length'      : '17:19',
                  'starterFile' : 'render-bst-starter.rkt', 
                  'notes'       : 'bst-notes.rkt',
                  'inVideoQs'   : true,
                  'videoNum'    : '235'
              },




              //MUTUAl-REF
              {
                  'module'      : 'Mutual-Ref',
	          'label'       :  'intro',
                  'title'       : 'Mutually Recursive Data',
                  'description' : '<p>Mutually self-referential types can represent a tree of arbitrary depth and width.</p>',
                  'length'      : '9:14',
                  'starterFile' : 'fs-starter.rkt', 
                  'notes'       : '',
                  'inVideoQs'   : true,
                  'videoNum'    : '143'
              },
              
              {
                  'module'      : 'Mutual-Ref',
	          'label'       :  'templ',
                  'title'       : 'Templating Mutual Recursion',
                  'description' : '<p>The templates for mutual recursion fall out naturally from the type comments.</p>',
                  'length'      : '4:51',
                  'starterFile' : 'fs-starter.rkt', 
                  'notes'       : '',
                  'inVideoQs'   : true,
                  'videoNum'    : '151'
              },
              
              {
                  'module'      : 'Mutual-Ref',
	          'label'       :  'fun-part-1',
                  'title'       : 'Functions on Mutually Recursive Data - Part 1',
                  'description' : '<p>Mutually self-referential types lead to mutually recursive functions.</p>',
                  'length'      : '12:43',
                  'starterFile' : 'fs-v1.rkt', 
                  'notes'       : '',
                  'inVideoQs'   : false,
                  'videoNum'    : '153'
              },
              
              {
                  'module'      : 'Mutual-Ref',
	          'label'       :  'fun-part-2',
                  'title'       : 'Functions on Mutually Recursive Data - Part 2',
                  'description' : '<p>Additional examples of mutually recursive function design.</p>',
                  'length'      : '12:02',
                  'starterFile' : 'fs-v2.rkt', 
                  'notes'       : '',
                  'inVideoQs'   : true,
                  'videoNum'    : '155'
              },
              
              {
                  'module'      : 'Mutual-Ref',
	          'label'       :  'back-srch',
                  'title'       : 'Backtracking Search',
                  'description' : '<p>Searching an arbitrary-arity tree for the first element to have a given property \
                                      leads to a backtracking traversal of the tree.</p>',
                  'length'      : '19:05',
                  'starterFile' : 'fs-v3.rkt', 
                  'notes'       : '',
                  'inVideoQs'   : true,
                  'videoNum'    : '165'
              },


              // 2 One-Of

              {
                  'module'      : '2-One-Of',
	          'label'       : 'table',
                  'title'       : 'Cross Product Table',
                  'description' : '<p>Building a cross product table for a function consuming two one-of types.</p>',
                  'length'      : '11:10', 
                  'starterFile' : 'prefix-equal-starter.rkt', 
                  'notes'       : '2-one-of-notes.rkt',
                  'inVideoQs'   : true,
                  'videoNum'    : '237'
              },

              {
                  'module'      : '2-One-Of',
	          'label'       : 'code',
                  'title'       : 'Cross Product Code',
                  'description' : '<p>Coding a function consuming two one-of types after having created the cross-product table.</p>',
                  'length'      : '15:18',
                  'starterFile' : '', 
                  'notes'       : '2-one-of-notes.rkt',
                  'inVideoQs'   : true,
                  'videoNum'    : '239'
              },

              // Local
              
              {
                  'module'      : 'Local',
	          'label'       :  'intro',
                  'title'       : 'Introduction',
                  'description' : '<p>The Intermediate Student Language (ISL) provides <tt>local</tt> expressions, \
                                      which make it possible to have definitions visible only within the local \
                                      expression.</p>',
                  'length'      : '0:44',
                  'starterFile' : '', 
                  'notes'       : '',
                  'inVideoQs'   : false,
                  'videoNum'    : '193'
              },

	      {
                  'module'      : 'Local',
	          'label'       :  'form-intu',
                  'title'       : 'Forming and Intuition',
                  'description' : '<p>Examples of local expressions and rules for writing well-formed local expressions.</p>',
                  'length'      : '4:56',
                  'starterFile' : '', 
                  'notes'       : 'local-basics.rkt',
                  'inVideoQs'   : true,
                  'videoNum'    : '169'
              },

	      {
                  'module'      : 'Local',
	          'label'       :  'lex-scope',
                  'title'       : 'Lexical Scoping',
                  'description' : '<p>The concept of lexical scoping allows us to answer questions about what definition any \
                                      reference to a name refers to.</p>',
                  'length'      : '7:45',
                  'starterFile' : '', 
                  'notes'       : 'local-basics.rkt',
                  'inVideoQs'   : true,
                  'videoNum'    : '171'
              },

	      {
                  'module'      : 'Local',
	          'label'       :  'eval',
                  'title'       : 'Evaluation Rules',
                  'description' : '<p>Evaluation of local expressions involves simultaneous renaming and lifting \
                                      of local definitions.</p>',
                  'length'      : '8:00',
                  'starterFile' : '', 
                  'notes'       : 'local-basics.rkt',
                  'inVideoQs'   : true,
                  'videoNum'    : '173'
              },

	      {
                  'module'      : 'Local',
	          'label'       :  'encap',
                  'title'       : 'Encapsulation',
                  'description' : '<p>Lexical scoping is the foundation of encapsulation, a crucial technique for \
                                      managing complexity of large programs.</p>',
                  'length'      : '18:21',
                  'starterFile' : 'fs-v4.rkt', 
                  'notes'       : 'local-encap.rkt',
                  'inVideoQs'   : true,
                  'videoNum'    : '175'
              },

	      {
                  'module'      : 'Local',
	          'label'       :  'avoid-recomp',
                  'title'       : 'Avoiding Recomputation',
                  'description' : '<p>Local expressions can be used to avoid recomputing results, and in recursive \
                                      programs this can have significant (even exponential) effects on program performance.</p>',
                  'length'      : '10:48',
                  'starterFile' : 'fs-v6.rkt', 
                  'notes'       : 'local-recomp.rkt',
                  'inVideoQs'   : true,
                  'videoNum'    : '177'
              },

              //Abstraction
	      {
                  'module'      : 'Abstraction',
	          'label'       :  'intro',
                  'title'       : 'Introduction',
                  'description' : '<p>A new technique for managing complexity is to reduce redundancy in programs using abstraction.</p>',
                  'length'      : '1:10',
                  'starterFile' : '', 
                  'notes'       : '',
                  'inVideoQs'   : false,
                  'videoNum'    : '191'
              },

	      {
                  'module'      : 'Abstraction',
	          'label'       :  'from-ex-1',
                  'title'       : 'From Examples 1',
                  'description' : '<p>The simplest way to design abstract functions is to start with two or more examples of highly repetitive code. In designing an abstract function this way the first step is to produce the working function definition.</p>',
                  'length'      : '11:16', //!!!
                  'starterFile' : 'parameterization-starter.rkt', 
                  'notes'       : 'abstraction-from-ex.rkt',
                  'inVideoQs'   : false,
                  'videoNum'    : '179'
              },

	      {
                  'module'      : 'Abstraction',
	          'label'       :  'from-ex-2',
                  'title'       : 'From Examples 2',
                  'description' : '<p>After the working function definition, we produce the check-expects and the purpose.</p>',
                  'length'      : '10:39',
                  'starterFile' : 'parameterization-v2.rkt', 
                  'notes'       : 'abstraction-from-ex.rkt',
                  'inVideoQs'   : false,
                  'videoNum'    : '181'
              },

	      {
                  'module'      : 'Abstraction',
	          'label'       :  'from-ex-3',
                  'title'       : 'From Examples 3',
                  'description' : '<p>The final step of designing an abstract function is to write the signature. Doing this requires three new elements of signature and type notation.</p>',
                  'length'      : '17:26',
                  'starterFile' : 'parameterization-v3.rkt', 
                  'notes'       : 'abstraction-sigs.rkt',
                  'inVideoQs'   : true,
                  'videoNum'    : '183'
              },

	      {
                  'module'      : 'Abstraction',
	          'label'       :  'built-in',
                  'title'       : 'Using Built In Abstract Functions',
                  'description' : '<p>List abstract functions are so useful that they are built into ISL. Using them requires identifying situations when they would be useful.</p>',
                  'length'      : '19:15',
                  'starterFile' : 'using-built-ins-starter.rkt', 
                  'notes'       : 'abstraction-using-built-ins.rkt',
                  'inVideoQs'   : true,
                  'videoNum'    : '185'
              },

	      {
                  'module'      : 'Abstraction',
	          'label'       :  'closures',
                  'title'       : 'Closures',
                  'description' : '<p>When the function passed to an abstract function requires access to a parameter of the enclosing function it must be locally defined.</p>',
                  'length'      : '12:21',
                  'starterFile' : 'closures-starter.rkt', 
                  'notes'       : 'abstraction-closures.rkt',
                  'inVideoQs'   : false,
                  'videoNum'    : '187'
              },

	      {
                  'module'      : 'Abstraction',
	          'label'       :  'fold',
                  'title'       : 'Fold Functions',
                  'description' : '<p>Abstract functions can be produced directly from templates. This can be wonderfully useful, especially for types involving mutual reference.</p>',
                  'length'      : '21:17',
                  'starterFile' : 'fold-functions-starter.rkt', 
                  'notes'       : 'abstraction-fold-functions.rkt',
                  'inVideoQs'   : true,
                  'videoNum'    : '189'
              },

              // Genrec
              
              {
                  'module'      : 'Genrec',
	          'label'       :  'intro',
                  'title'       : 'Introduction',
                  'description' : '<p>A new kind of recursion in which the data passed to the \
                                     recursive call is generated, rather than being a part of \
                                     the data passed to the current call.</p>',
                  'length'      : '1:44',
                  'starterFile' : '', 
                  'notes'       : '',
                  'inVideoQs'   : false,
                  'videoNum'    : '211'
              },

	      {
                  'module'      : 'Genrec',
	          'label'       :  'fract',
                  'title'       : 'Fractals',
                  'description' : '<p>Fractals are images that have a recursive structure. \
                                      They provide a fun first example of generative recursion.</p>',
                  'length'      : '24:46',
                  'starterFile' : 'fractals-starter.rkt', 
                  'notes'       : 'genrec-fractals.rkt',
                  'inVideoQs'   : false,
                  'videoNum'    : '195'
              },

	      {
                  'module'      : 'Genrec',
	          'label'       :  'term-arg',
                  'title'       : 'Termination Arguments',
                  'description' : '<p>In generative recursion we no longer can count on well-formed \
                                      type comments and the template rules to guarantee that the recursion \
                                      will end. Instead we must formulate our own proof of that for each \
                                      function that uses generative recursion.</p>',
                  'length'      : '11:42',
                  'starterFile' : 'termination-starter.rkt', 
                  'notes'       : 'genrec-how-to.rkt',
                  'inVideoQs'   : true,
                  'videoNum'    : '197'
              },

             //Search
	      {
                  'module'      : 'Search',
	          'label'       :  'intro',
                  'title'       : 'Introduction',
                  'description' : '<p>Over the next several lectures we will design a program based on \
                                      the idea of problem solving by search. Our program will generate \
                                      a space of all possible paths from an initial puzzle state and \
                                      then search that space to find a solution.</p>',
                  'length'      : '1:51',
                  'starterFile' : '', 
                  'notes'       : '',
                  'inVideoQs'   : false,
                  'videoNum'    : '217'
              },

	      {
                  'module'      : 'Search',
	          'label'       :  'sdk-term',
                  'title'       : 'Sudoku -- Terminology',
                  'description' : '<p>The basic terminology and rules of Sudoku.</p>',
                  'length'      : '3:03',
                  'starterFile' : '', 
                  'notes'       : '',
                  'inVideoQs'   : false,
                  'videoNum'    : '199'
              },

	      {
                  'module'      : 'Search',
	          'label'       :  'sdk-dd',
                  'title'       : 'Sudoku -- Data Definitions and Primitives',
                  'description' : '<p>The data definitions in the starter file.</p>',
                  'length'      : '12:19',
                  'starterFile' : 'sudoku-starter.rkt', 
                  'notes'       : '',
                  'inVideoQs'   : true,
                  'videoNum'    : '201'
              },

	      {
                  'module'      : 'Search',
	          'label'       :  'sdk-intu',
                  'title'       : 'Sudoku -- The Search Intuition',
                  'description' : '<p>Overview of using search to solve a Sudoku puzzle.</p>',
                  'length'      : '6:09',
                  'starterFile' : '', 
                  'notes'       : '',
                  'inVideoQs'   : false,
                  'videoNum'    : '203'
              },

	      {
                  'module'      : 'Search',
	          'label'       :  'sdk-templ-blend',
                  'title'       : 'Sudoku -- Template Blending',
                  'description' : '<p>The one new design technique required for the Sudoku solver is \
                                      template blending, in which we combine several different kinds of \
                                      templates all of which contribute to the backbone of a function \
                                      (or functions).</p>',
                  'length'      : '13:56',
                  'starterFile' : 'sudoku-starter.rkt', 
                  'notes'       : '',
                  'inVideoQs'   : true,
                  'videoNum'    : '205'
              },

	      {
                  'module'      : 'Search',
	          'label'       :  'sdk-wish',
                  'title'       : 'Sudoku -- Making the Wish List',
                  'description' : '<p>Two wish list entries that accompany the solve function from the \
                                      previous video.</p>',
                  'length'      : '4:12',
                  'starterFile' : 'sudoku-v1.rkt', 
                  'notes'       : '',
                  'inVideoQs'   : false,
                  'videoNum'    : '207'
              },

	      {
                  'module'      : 'Search',
	          'label'       :  'sdk-wish-come-true-1',
                  'title'       : 'Sudoku -- Making the Wish List Come True',
                  'description' : '<p>Working through the wish list.</p>',
                  'length'      : '14:00',
                  'starterFile' : 'sudoku-v2.rkt', 
                  'notes'       : '',
                  'inVideoQs'   : true,
                  'videoNum'    : '209'
              },

	      {
                  'module'      : 'Search',
	          'label'       :  'sdk-wish-come-true-2',
                  'title'       : 'Sudoku -- Making the Wish List Come True 2',
                  'description' : '<p>Working through the wish list.</p>',
                  'length'      : '21:42',
                  'starterFile' : 'sudoku-v3.rkt', 
                  'notes'       : '',
                  'inVideoQs'   : false,
                  'videoNum'    : '215'
              },

	      {
                  'module'      : 'Search',
	          'label'       :  'sdk-wish-come-true-3',
                  'title'       : 'Sudoku -- Making the Wish List Come True 3',
                  'description' : '<p>The <tt>valid-board?</tt> function is perhaps the hardest single function in the course so far. \
                                      Or maybe its just the longest, because following the recipes takes us to a solution relatively easily.</p>',
                  'length'      : '21:20',
                  'starterFile' : 'sudoku-v4.rkt', 
                  'notes'       : '',
                  'inVideoQs'   : false,
                  'videoNum'    : '219'
              },

	      {
                  'module'      : 'Search',
	          'label'       :  'sum',
                  'title'       : 'Summary of Course',
                  'description' : '<p>Stepping back from the details of the programs we have \
                                      been designing we can see that a general design method that is \
                                      useful in any language and for any sufficiently hard program.</p>',
                  'length'      : '12:43',
                  'starterFile' : '', 
                  'notes'       : '',
                  'inVideoQs'   : false,
                  'videoNum'    : '213'
              }

          ]};
    return output.lectures;
}