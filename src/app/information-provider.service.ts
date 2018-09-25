export class InformationProvider {
  introductionText = "Welcome to my page. Computer science to me is the ability to produce a simulation of virtually anything, then to package it and allow for it to function on its own. I consider computer science to be a magical power and if such a thing existed in the Tudor period, Mark Zuckerberg would have been burnt at the stake. It is the ability to produce anything the mind can conjure from the comfort of anywhere. It is a farrago of complexity, amazement, and exploration, but the thing I love most is no matter what your age or experience, you will always remain a student and something yet to learn."
  introduction1Text = "I am a computer scientist and welcome to my website. I designed this website myself from the foundation up using angular alongside firebase. Please make use of the side page navigation to make the 4 hours of coding it somewhat not pointless. This page is all about me and computer science. Please contact me about anything whether it be help with your coding projects or just you want me to produce something for you. I do provide a service for anyone that requires an application, website or component. See the service section for more information.";

  aboutText: String = "I'm Amin Mansour, a London-born computer science student currently at Imperial College London. I focus my efforts today on mobile and web development. I'm the publisher of two android applications which are now live on the play store. I am also developing several businesses ideas into products, but they haven't been published yet. I have also gained a first, achieving 87% in my BSc Computer Science course at King’s College London.";

  about1Text: String = "I only fell in love with computer science during my A-levels when I was forced to decide on what I was going to do for the rest of my life. At the time, I was taking maths, physics, and chemistry and I came across a video featuring celebrated and famous coders like Mark Zuckerberg and Bill Gates talking about programming. It struck me, all these people were highly successful at what they did and were able to change the world in some way. I did not understand how they were able to achieve so much in a short period of time. This underlying question is what initiated my journey into the field of computer science. Fast forward today and this question remains unanswered. Computer science only ever becomes more expansive the deeper you go."

  about2Text: String = "The languages which I have proficient understanding in and which I have used to create an application at some point in time are below.";
  programmingNameStore: String[] = ["Java with JavaFx", "C++", "Android", "Ruby with Rails framework", "Javascript", "Angular 2.0", "HTML and CSS", "SQL", "Scala"];

  programmingLogoPaths: String[] = ["android", "java", "javascript", "rails", "c++", "html", "sql", "angular", "ruby", "scala"];


  serviceText: String = "I am qualified in making efficient and well-written programs of different kinds and have extensive experience in making web, desktop and mobile applications. If you want an application, website or component of an application then I can produce it for a fair price. This would be subject to clear criteria being provided beforehand. If I create an application, then I will aid with free assistance. As soon as the program is given to you, there will a brief window, depending on the intensity of the project, where you can reject the program with a sufficient reason and a refund will be issued immediately. I am flexible with regards to the conditions of the project. The service includes you receiving weekly updates on the status of the project; where you have the right to request more features and make modifications to existing features. If you are interested, just contact me below or email me and we will both find a suitable timeframe and price.";





  projectsBatch = [



    {
      title: "Red Badger's best project award",
      text: "I worked in a group of 8 and we made an application for a client and had to present our product over the 8 weeks in front of a group of Red Badger employees. Out of around 25 groups, we were rewarded with the best project by Red Badger. ",
      imageSource: "redbadger"
    },

  {
    title: "BalloonUp application on android",
    text: "I made this app via android and published it on the Google play store and the Amazon store. Its a addictive android game which tests the reaction of the player. The objective is for the player to pop the balloons before they reach the top and survive as long as possible, and the game only gets harder with time. ",
    link: "https://play.google.com/store/apps/details?id=com.mansouriStudio.theballoontapgame&hl=en_GB",
    imageSource: "balloonup"
  },

  {
    title: "Macro economics desktop application creator",
    text: "I was the leader of a group of 6. We produced a application which pulls data from the World Bank api and displays it in a informative and intresting way to the user, and allowing them to easily derive conclusions from the data. We used JavaFX to produce the application.",
    imageSource: "macroeconomics"
  }

]
projectsBatch1 = [

  {
   title: "Push-down Automata Educational Tool",
   downloadLink: "pushdown-automata.jar",
   projectLink:  "report.pdf",
   text: "Push-down automata, or PDA for short, is one of the core technologies deployed in computational theory and computer science. The PDA allows us to theorize about machine computation. The desktop application is a PDA simulation intended for both students and lecturers’. A program which allows the user to visualize what the PDA machine is doing at each transition and allow the user to easily go forward and backward in the computation. The PDA application is written in java and is available in all operating systems. ",
   imageSource: "pushdown"
 },

  {
   title: "Creator of several websites",
   text: "I've produced and designed several websites which are design-friendly and responsive. I made websites using different techonolgies to try and achieve the best results. I have primarily used ruby on rails and angular.  ",
   imageSource: "websites"
 },

  {
    title: "Modulect web application creator",
    text: "I worked in a group of 8 where we had to produce an application for a client. The web application we had to create was a module selector which allowed students to be informed with the modules they should be taking based on what their desired career paths were. We used Ruby on Rails to produce this web application. ",
    imageSource: "modulect",
    link: "https://modulect.herokuapp.com/"
  }
]
projectsBatch2 =[
  {
    title: "QuickFireMaths application on android",
    text: "I created this application on android and published it on the Google play store. Its an addictive ducational android game which tests the mental maths of the player. The game gets exponentially harder with time and is free of charge for everyone. ",
    link: "https://play.google.com/store/apps/details?id=com.education.quickfiremaths&hl=en_GB",
    imageSource: "quickfiremaths"
  },  {
     title: "Part of a social start-up",
     text: "The app aims to connect students from all around the world into a single platform, where users can ask questions of their respected discipline and socialize with their fellow peers. Allowed me to work in a group; to exchange ideas, and take those ideas and apply it to produce tangible results; and contribute to making a full-scale cross-platform mobile application.  ",
     imageSource: "brainswap"
   }


   ];



  projectsMobileOrder = [
    {
     title: "Push-down Automata Educational Tool",
     downloadLink: "pushdown-automata.jar",
     projectLink:  "report.pdf",
     text: "Push-down automata, or PDA for short, is one of the core technologies deployed in computational theory and computer science. The PDA allows us to theorize about machine computation. The desktop application is a PDA simulation intended for both students and lecturers’. A program which allows the user to visualize what the PDA machine is doing at each transition and allow the user to easily go forward and backward in the computation.",
     imageSource: "pushdown"
   },
   {
    title: "Modulect web application creator",
    text: "I worked in a group of 8 where we had to produce an application for a client. The web application we had to create was a module selector which allowed students to be informed with the modules they should be taking, based on what their desired career paths were. We used Ruby on Rails to produce this web application. ",
    imageSource: "modulect",
    link: "https://modulect.herokuapp.com/"
  },
  {
    title: "Macro economics desktop application creator",
    text: "I was the leader of a group of 6. We produced a application which pulls data from the World Bank api and displays it in a informative and intresting way to the user, and allowing them to easily derive conclusions from the data. We used JavaFX to produce the application.",
    imageSource: "macroeconomics"
  },
  {
    title: "BalloonUp application on android",
    text: "I made this application using android and published it on the Google play store and the Amazon store. Its a addictive android game which tests the reaction of the player. The objective is for the player to pop the balloons before they reach the top and survive as long as possible, and the game only gets harder with time.  ",
    imageSource: "balloonup"
  },
  {
     title: "Creator of several websites",
     text: "I've produced and designed several websites which are design-friendly and responsive. I made websites using different techonolgies to try and achieve the best results. ",
     imageSource: "websites"
   },
  {
    title: "Red Badger's best project award",
    text: "I worked in a group of 8 and we made an application for a client and had to present our product produced over the 8 weeks in front of a group of Red Badger employees. Out of around 25 groups, we were rewarded with the best project by Red Badger. ",
    imageSource: "redbadger"
  },




    {
    title: "QuickFireMaths application on android",
    text: "I created this application on android and published it on the Google play store. Its a educational and addictive android game which tests the mental maths of the player. The game gets exponentially harder with time and is free of charge for everyone. ",
    imageSource: "quickfiremaths"
  },

  {
   title: "Part of a social start-up",
   text: "The app aims to connect students from all around the world into a single platform, where users can ask questions of their respected discipline and socialize with their fellow peers. Allowed me to work in a group; to exchange ideas, and take those ideas and apply it to produce tangible results; and contribute to making a full-scale cross-platform mobile application.  ",
   imageSource: "brainswap"
 },


];
}
