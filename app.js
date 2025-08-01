angular.module('cvApp', ['ngRoute', 'ngMaterial'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'home.html',
        controller: 'HomeController',
        controllerAs: 'home'
      })
      .when('/about', {
        templateUrl: 'about.html',
        controller: 'AboutController',
        controllerAs: 'about'
      })
      .when('/cv', {
        templateUrl: 'cv.html',
        controller: 'CvController',
        controllerAs: 'cv'
      })
      .otherwise({redirectTo: '/'});
  }])

  // Home Controller
  .controller('HomeController', function() {
    const vm = this;
    vm.greeting = "Welcome to my portfolio website!";
  })

  // About Controller
  .controller('AboutController', function() {
    const vm = this;
    vm.aboutText = "Hi! I'm Ongun Akay, a passionate Front-End Developer specializing in AngularJS, React, and Vue.js. I build modern, scalable web apps with a focus on clean code and great UX.";
  })

  // CV Controller
  .controller('CvController', function() {
    const vm = this;

    vm.contact = {
      website: 'ongunakay.com',
      github: 'https://github.com/ongunakaycom',
      linkedin: 'https://linkedin.com/in/ongunakay',
      email: 'info@ongunakay.com',
      location: 'Spain',
    };

    vm.careerObjective = "Passionate Front-End Developer with 5+ years of experience creating scalable, AI-driven applications. Specialized in React, Firebase, and GDPR-compliant architecture. Eager to join remote or hybrid teams across Europe to build future-ready, intuitive web solutions.";

    vm.qualifications = [
      "Versatile Front-End Developer with proven expertise in React.js, Angular, Vue, and TypeScript.",
      "Skilled in cloud platforms: Google Cloud (Firebase), AWS, Oracle Cloud.",
      "Experienced with CI/CD pipelines, REST and GraphQL API integration.",
      "Crafts mobile-first, accessible UIs from Figma designs.",
      "Cross-browser testing and Agile workflows expert."
    ];

    vm.professionalExperience = [
      {
        role: 'Full Stack Developer',
        company: 'AyaMatchMaker',
        location: 'UK, Remote',
        dates: '2024-2025',
        details: [
          'Designed Firestore-backed matching algorithm with <500ms response time',
          'Built React frontend with swipeable Tinder-style UI achieving 92% user retention',
          'Integrated AI conversation models (Gemini API/Custom NLP)'
        ]
      },
      {
        role: 'Front-end Developer',
        company: 'Corepany Software Agency',
        location: 'Turkey, On-site',
        dates: '2020-2022',
        details: [
          'Developed 15+ dynamic web apps with React.js',
          'Led mobile-first redesigns using Bootstrap and Material Design',
          'Integrated React with PHP/CodeIgniter backends'
        ]
      }
    ];

    vm.skills = [
      'React', 'Node.js', 'Gemini API', 'AngularJS', 'API Integration',
      'Vue.js', 'Firebase', 'JavaScript', 'TypeScript', 'Design Systems',
      'Responsive Design', 'CI/CD', 'UI Testing', 'Accessibility', 'Git',
      'Serverless', 'Web Vitals', 'Agile'
    ];
  });
