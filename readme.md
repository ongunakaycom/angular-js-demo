# AngularJS Demo Project

This is a simple AngularJS demo project showcasing basic single-page application features including routing, data binding, and Material Design styling.

## 🔗 Live Demo

You can view the live deployed version of this project here:  
\*\*[https://ongunakaycom.github.io/angular-js-demo/](https://ongunakaycom.github.io/angular-js-demo/)\*\*

---

## 🚀 Deployment

This project is automatically deployed to GitHub Pages using a GitHub Actions workflow. Every push to the \`main\` branch triggers a deployment pipeline that publishes the latest version to the \`gh-pages\` branch.

### CI/CD Workflow

- Runs on every push to \`main\`
- Builds the public directory from project files
- Pushes content to \`gh-pages\` branch
- Uses [peaceiris/actions-gh-pages](https://github.com/peaceiris/actions-gh-pages)

GitHub Actions config file: \`.github/workflows/deploy.yml\`

---

## 📁 Project Structure

```
├── .github/
│   └── workflows/
│       └── deploy.yml
├── .gitignore
├── about.html
├── app.js
├── cv.html
├── home.html
├── index.html
├── readme.md
└── style.css
```

## 📄 File Descriptions

- \`index.html\`: Main entry point of the application
- \`app.js\`: AngularJS module and route configuration
- \`home.html\`, \`about.html\`, \`cv.html\`: Different views for the single-page app
- \`style.css\`: Custom CSS styles
- \`readme.md\`: This project documentation
- \`.github/workflows/deploy.yml\`: GitHub Actions deployment configuration
- \`.gitignore\`: Git ignore file for excluding files from version control

---

## ✨ Features

- AngularJS routing with ngRoute
- Dynamic content loading based on views
- Material Design styling with Angular Material
- Responsive single-page application (SPA)
- Lightweight and easy to understand codebase
- Automated deployment to GitHub Pages

---

## 🧰 Prerequisites

- A modern web browser (Chrome, Firefox, Edge, etc.)
- A simple HTTP server (Python, Node, etc.)

---

## 📦 Usage

### Option 1: Python HTTP Server

```bash
cd path/to/angular-js-demo
python3 -m http.server 8000
```

Access it at: \`http://localhost:8000\`

### Option 2: Node.js Live Server

```bash
npm install -g live-server
cd path/to/angular-js-demo
live-server
```

### Option 3: Direct File Access

Simply open \`index.html\` directly in your browser (note: routing may not work properly with this method).

---

## 🌐 Browser Compatibility

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

---

## 🔧 Development

1. Clone the repository
2. Modify files as needed
3. Run locally using one of the server methods above
4. Push changes to \`main\` to trigger auto-deployment

---

## 🛠️ Technology Stack

- \*\*AngularJS\*\* (1.8.2)
- \*\*Angular Material\*\*
- \*\*ngRoute\*\*
- \*\*HTML5\*\*, \*\*CSS3\*\*
- \*\*GitHub Actions\*\* (CI/CD)

---

## 📝 License

This project is licensed under the \*\*Apache-2.0 License\*\*.

---

## 👨‍💻 About Me

I'm **Ongun Akay**, a Senior Full-Stack Developer with expertise across various technologies.

- 👀 I specialize in full-stack development with deep frontend/backend skills
- 🌱 Currently sharpening advanced web architecture and deployment practices
- 💬 Reach out: info@ongunakay.com

---

## 🤝 Contributing

Pull requests, suggestions, and stars ⭐️ are always welcome!

---

## 📌 Changelog

- ✅ Initial release with SPA functionality
- 🎨 Angular Material styling added
- 🚀 GitHub Pages deployment with CI/CD