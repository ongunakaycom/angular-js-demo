# AngularJS Demo Project

This is a simple AngularJS demo project showcasing basic single-page application features including routing, data binding, and Material Design styling.

## Project Structure

```
/
├── about.html
├── app.js
├── cv.html
├── home.html
├── index.html
├── readme.md
└── style.css
```

## File Descriptions

- `index.html\`: Main entry point of the application
- `app.js\`: AngularJS module and route configuration
- `home.html\`, \`about.html\`, \`cv.html\`: Different views for the single page app
- `style.css\`: Custom CSS styles
- `readme.md\`: This project documentation

## Features

- AngularJS routing with ngRoute
- Dynamic content loading based on views
- Material Design styling with Angular Material
- Simple navigation menu
- Responsive design
- Single Page Application (SPA) architecture

## Prerequisites

- Modern web browser with JavaScript enabled
- Basic HTTP server (for proper routing functionality)

## Installation & Usage

### Method 1: Python HTTP Server

```bash
cd path/to/angular-js-demo
python3 -m http.server 8000
```

Then open your browser at `http://localhost:8000`

### Method 2: Node.js Live Server

```bash
npm install -g live-server
cd path/to/angular-js-demo
live-server
```

### Method 3: Direct File Access

Simply open \`index.html\` directly in your browser (note: routing may not work properly with this method).

## Browser Compatibility

This project is compatible with:
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Development

To modify or extend this project:

1. Clone or download the repository
2. Make your changes to the respective files
3. Test using one of the server methods above
4. Commit your changes

## Technology Stack

- **AngularJS** (1.8.2): JavaScript framework
- **Angular Material**: UI component library
- **ngRoute**: Routing module
- **HTML5**: Markup
- **CSS3**: Styling

## License

This project is licensed under the Apache-2.0 License.

## About Me

I'm Ongun Akay, a Senior Full-Stack Developer with expertise across various technologies.

- 👀 I specialize in full-stack development with extensive experience in frontend and backend technologies.
- 🌱 Currently, I'm sharpening my skills in advanced concepts of web development.
- 💞️ I’m always open to exciting collaborations and projects that challenge my abilities.

## Contributing

Feel free to submit issues and enhancement requests!

## Changelog

- Initial release with basic SPA functionality
- Material Design integration
- Responsive navigation menu