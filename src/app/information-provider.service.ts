export class InformationProvider {
  introductionText = "Welcome to my page. I'm Amin. In short, computer science is the ability to produce a simulation of virtually anything, then to package it and allow for it to function on its own. I consider computer science to be a magical power and I usually say if such a thing existed in the Tudor period, Mark Zuckerberg would've been burnt at the stake. Computer science gives the ability to produce anything that the mind can think of, from the comfort of your own home. Computer science is a farrago of complexity, amazement and exploration, but the thing I love most is no matter whether you have 10,20 or 50 years of experience, you'll always be and remain a student and never stop knocking at the gates of learning. I am a computer scientist and welcome to my website." +
    "I designed this website myself from the foundation up using angular 2.0 with firebase. Please make use of the side page navigation, to make 4 hours of coding it somewhat not pointless. This page is all about me and computer science. Please contact me about anything, whether it be help with coding, information on how I designed this website or you just want me to produce something for you. I do provide a service for anyone that requires an application, website or component. See service section for more information. If you have any ways of improving this website, please let me know."
  aboutText: String = "I'm Amin Mansour, a second generation immigrant London-born computer science student currently at king's college university in my third year. I focus my efforts today on mobile and web development. I'm the publisher of two android applications which are on the play store. The languages which i have proficient understanding in and which i have used to create an application at some point in time are below. I'm also developing several businesses ideas into products but they haven't been published as of yet. I've also gained a first, achieving 86.5% over my two years. I'm the standard guy and I like sports and regular stuff. I only fell in love with computer science during my Alevels when I was forced to make a decision on what I was going to do for the rest of my life. At the time I was doing maths,physics and chemistry but I knew although they were interesting subjects, I couldn't really picture myself taking them. I came across computer science in a YouTube video containing very famous coders like Mark Zuckerberg and Bill Gates talking about the field, and it hit me that all these people were highly successful at what they did and have changed the world in some way. Yet I didn't understand how they did it. This initiated my research in the field and overtime with practice fell more and more in love with it and haven't looked back since. I took computer science because its everywhere, without me even trying to look for it and it belongs in the future, no matter how much we might run away from it, whether it be in agriculture, medicine or robotics. Its became the essence of endeavour and if the mind can do to think of something, then the hands can do to produce it through the medium of computer science and programming.";

  programmingNameStore: String[] = ["Java with JavaFx", "C++", "Android", "Ruby with Rails framework", "Javascript", "Angular 2.0", "HTML and CSS", "SQL", "Scala"];

  programmingLogoPaths: String[] = ["android", "java", "javascript", "rails", "c++", "html", "sql", "angular", "ruby", "scala"];


  serviceText: String = "I'm accustomed to making applications with specific criteria and have deep experience in making web,desktop and mobile applications. If you want an application, website or component of a website application in any language of choosing then I can produce it for you for a low price, as long as clear criteria is provided. I specialize in making the most efficient running  programs and im fully quilified in producing such programs and have took courses on efficency and data structures at my university. The main thing I get is experience from this, as I am still a student. If I create an application, then I will provide assistance for free from the point of completion. As soon as the program is given to you, there will a brief window, depending on the intensity of the project, where the you can reject the program with a sufficient reason that cannot be amended within reasonable circumstance. I'm pretty flexible with regards to the conditions of the project. The service includes you receiving weekly updates of the current status of the project; where you have the right to request more features and make modifications to existing features. If you are interested, just contact me below or email me instead and i will find a suitable timeframe and price for you.";





  projects = [
  {
    title: "BalloonUp application on android",
    text: "I made this app via android and published it on the Google play store and the Amazon store. Its a addictive android game which tests the reaction of the player. The objective is for the player to pop the balloons before they reach the top and survive as long as possible, and the game only gets harder with time. ",
    imageSource: "balloonup"
  },
  {
    title: "Red Badger's best project award",
    text: "I worked in a group of 8 and we made an application for a client and had to present our product produced over the 8 weeks in front of a group of Red Badger employees. Out of around 25 groups, we were rewarded with the best project by Red Badger. ",
    imageSource: "redbadger"
  },
  {
    title: "Macro economics desktop application creator",
    text: "I was the leader of a group of 6. We produced a application which pulls data from the World Bank api and displays it in a informative and intresting way to the user, and allowing them to easily derive conclusions from the data. We used JavaFX to produce the application.",
    imageSource: "macroeconomics"
  },
  {
    title: "QuickFireMaths application on android",
    text: "I created this application on android and published it on the Google play store. Its a educational and addictive android game which tests the mental maths of the player. The game gets exponentially harder with time and is free of charge for everyone. ",
    imageSource: "quickfiremaths"
  },{
    title: "Modulect web application creator",
    text: "I worked in a group of 8 where we had to produce an application for a client. The web application we had to create was a module selector which allowed students to be informed with the modules they should be taking, based on what their desired career paths were. We used Ruby on Rails to produce this web application. ",
    imageSource: "modulect",
    link: "https://modulect.herokuapp.com/"
  },
   {
    title: "Creator of several websites",
    text: "I've produced and designed several websites which are design-friendly and responsive. I made websites using different techonolgies to try and achieve the best results. ",
    imageSource: "websites"
  }
   ];



  projectsMobileOrder = [
    {
    title: "QuickFireMaths application on android",
    text: "I created this application on android and published it on the Google play store. Its a educational and addictive android game which tests the mental maths of the player. The game gets exponentially harder with time and is free of charge for everyone. ",
    imageSource: "quickfiremaths"
  },
  {
    title: "BalloonUp application on android",
    text: "I made this application using android and published it on the Google play store and the Amazon store. Its a addictive android game which tests the reaction of the player. The objective is for the player to pop the balloons before they reach the top and survive as long as possible, and the game only gets harder with time.  ",
    imageSource: "balloonup"
  },
  {
    title: "Red Badger's best project award",
    text: "I worked in a group of 8 and we made an application for a client and had to present our product produced over the 8 weeks in front of a group of Red Badger employees. Out of around 25 groups, we were rewarded with the best project by Red Badger. ",
    imageSource: "redbadger"
  },
   {
    title: "Modulect web application creator",
    text: "I worked in a group of 8 where we had to produce an application for a client. The web application we had to create was a module selector which allowed students to be informed with the modules they should be taking, based on what their desired career paths were. We used Ruby on Rails to produce this web application. ",
    imageSource: "modulect",
    link: "https://modulect.herokuapp.com/"
  }, {
    title: "Creator of several websites",
    text: "I've produced and designed several websites which are design-friendly and responsive. I made websites using different techonolgies to try and achieve the best results. ",
    imageSource: "websites"
  },
  {
    title: "Macro economics desktop application creator",
    text: "I was the leader of a group of 6. We produced a application which pulls data from the World Bank api and displays it in a informative and intresting way to the user, and allowing them to easily derive conclusions from the data. We used JavaFX to produce the application.",
    imageSource: "macroeconomics"
  }];
}
