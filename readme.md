# AngularJS Portfolio Demo

A simple single-page portfolio website built with **AngularJS**, **ngRoute**, and **Angular Material**. It demonstrates routing, modular architecture, and dynamic data binding for a personal portfolio.

---

## Project Structure

```

angular-js-demo/
├── .github/
│   └── workflows/
│       └── deploy.yml        # GitHub Actions workflow for deployment
├── .gitignore
├── index.html                 # Main entry point
├── home.html                  # Home page template
├── about.html                 # About page template
├── cv.html                    # CV / Resume page template
├── app.js                     # AngularJS application and controllers
├── style.css                  # Main stylesheet
├── LICENSE
└── readme.md

````

---

## Features

- **SPA with AngularJS** using `ngRoute` for client-side routing.
- **Three main pages**: Home, About, CV.
- **Dynamic content** rendered via controllers (`HomeController`, `AboutController`, `CvController`).
- **Responsive layout** using Angular Material design components.
- **GitHub Pages deployment** automated with GitHub Actions.

---

## AngularJS App Overview

```javascript
angular.module('cvApp', ['ngRoute', 'ngMaterial'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', { templateUrl: 'home.html', controller: 'HomeController', controllerAs: 'home' })
      .when('/about', { templateUrl: 'about.html', controller: 'AboutController', controllerAs: 'about' })
      .when('/cv', { templateUrl: 'cv.html', controller: 'CvController', controllerAs: 'cv' })
      .otherwise({ redirectTo: '/' });
  }]);
````

* **HomeController**: Manages welcome message.
* **AboutController**: Displays personal biography.
* **CvController**: Handles contact info, career objectives, qualifications, experience, and skills.

---

## Installation & Usage

1. **Clone the repository**

```bash
git clone https://github.com/ongunakaycom/angular-js-demo.git
cd angular-js-demo
```

2. **Open `index.html`** in your browser (no server required for this static demo).

3. **Optional: Run on a local server** (for routing support)

```bash
# Using Python
python -m http.server 8080
# Then navigate to http://localhost:8080
```

---

## Deployment

This project uses **GitHub Actions** to deploy to GitHub Pages automatically when changes are pushed to the `main` branch.

Workflow: `.github/workflows/deploy.yml`

Key steps:

1. Checkout repository.
2. Copy project files to a `public` folder.
3. Deploy contents of `public/` to GitHub Pages using `peaceiris/actions-gh-pages`.

---

## About Me

* Website: [ongunakay.com](https://ongunakay.com)
* GitHub: [github.com/ongunakaycom](https://github.com/ongunakaycom)
* LinkedIn: [linkedin.com/in/ongunakay](https://linkedin.com/in/ongunakay)
* Email: [info@ongunakay.com](mailto:info@ongunakay.com)

---

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.