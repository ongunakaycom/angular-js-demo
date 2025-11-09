# 🌟 AngularJS Portfolio Demo

A **simple single-page portfolio website** built with **AngularJS**, **ngRoute**, and **Angular Material**. This project demonstrates **routing**, **modular architecture**, and **dynamic data binding** for a personal portfolio.

---

## 🗂 Project Structure

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
```

---

## ⚡ Features

* 🚀 **Single-Page Application (SPA)** using AngularJS with **ngRoute** for client-side routing.
* 📄 **Three main pages**:

  * Home 🏠
  * About 👤
  * CV 📑
* 🔄 **Dynamic content** rendered via AngularJS controllers:

  * `HomeController` – Manages welcome message
  * `AboutController` – Displays personal biography
  * `CvController` – Handles contact info, career objectives, qualifications, experience, and skills
* 📱 **Responsive layout** using **Angular Material** design components.
* 📦 **GitHub Pages deployment** automated with **GitHub Actions**.

---

## ⚙️ AngularJS App Overview

```javascript
angular.module('cvApp', ['ngRoute', 'ngMaterial'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', { templateUrl: 'home.html', controller: 'HomeController', controllerAs: 'home' })
      .when('/about', { templateUrl: 'about.html', controller: 'AboutController', controllerAs: 'about' })
      .when('/cv', { templateUrl: 'cv.html', controller: 'CvController', controllerAs: 'cv' })
      .otherwise({ redirectTo: '/' });
  }]);
```

---

## 🏡 Installation & Usage

### Clone the repository

```bash
git clone https://github.com/ongunakaycom/angular-js-demo.git
cd angular-js-demo
```

### Open locally

* Simply open `index.html` in your browser (no server required for this static demo).

### Optional: Run on a local server (recommended for routing support)

```bash
# Using Python
python -m http.server 8080
# Then navigate to http://localhost:8080
```

---

## 🚀 Deployment

This project uses **GitHub Actions** to deploy to **GitHub Pages** automatically when changes are pushed to the `main` branch.

**Workflow:** `.github/workflows/deploy.yml`

**Key steps:**

* ✅ Checkout repository
* 📂 Copy project files to a public folder
* 🌐 Deploy contents of `public/` to GitHub Pages using `peaceiris/actions-gh-pages`

---

## 👨‍💻 About Me

I'm **Ongun Akay**, a Senior Full-Stack Developer with expertise across various technologies.

* 🌐 Website: [ongunakay.com](https://ongunakay.com)
* 💻 GitHub: [github.com/ongunakaycom](https://github.com/ongunakaycom)
* 🔗 LinkedIn: [linkedin.com/in/ongunakay](https://linkedin.com/in/ongunakay)
* ✉️ Email: [info@ongunakay.com](mailto:info@ongunakay.com)

---

## 📄 License

This project is licensed under the **MIT License**. See [LICENSE](LICENSE) for details.

---