# Instagram Clone (Vue.js)

A fully responsive Instagram web UI clone developed using Vue.js and modern web technologies. This project replicates the core UI features and functionality of Instagram's web interface.

## ✨ Features

- 📱 Responsive design that works on desktop and mobile
- 🎨 Instagram-like UI and animations
- 🔐 Firebase authentication
- 📸 Photo feed with likes and comments
- 👤 User profiles
- 📝 Post creation and sharing
- 💾 Persistent data storage with Firebase

## 🛠️ Technologies Used

- **Vue.js (v2.6)** - Progressive JavaScript Framework
- **Vuex** - State Management
- **Vue Router** - Navigation
- **Firebase** - Backend and Authentication
- **Axios** - HTTP client
- **CSS** - Styling and Animations

## 🚀 Getting Started

### Prerequisites

- Node.js (v12 or higher)
- npm or yarn
- Firebase account (for backend services)

### Installation

1. Clone the repository
```bash
git clone https://github.com/coderdal/instagram-clone-vue.git
cd instagram-clone-vue
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Set up environment variables
Create a `.env` file in the root directory and add your Firebase configuration:
```
VUE_APP_FIREBASE_API_KEY=your_api_key
VUE_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
VUE_APP_FIREBASE_PROJECT_ID=your_project_id
VUE_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VUE_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VUE_APP_FIREBASE_APP_ID=your_app_id
```

4. Run the development server
```bash
npm run serve
# or
yarn serve
```

The application will be available at `http://localhost:8080`

### Building for Production

```bash
npm run build
# or
yarn build
```

## 📁 Project Structure

```
src/
├── assets/        # Static assets
├── components/    # Vue components
├── views/         # Page components
├── router/        # Route configurations
├── store/         # Vuex store modules
└── services/      # API and external service integrations
```

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check [issues page](https://github.com/coderdal/instagram-clone-vue/issues).

## 📝 License

This project is [MIT](LICENSE) licensed.

## 👨‍💻 Author

**Your Name**
- GitHub: [@coderdal](https://github.com/coderdal)
- LinkedIn: [Muhammed Erdal](https://linkedin.com/in/muhammederdal)

## 🙏 Acknowledgments

- Instagram for the inspiration
- Vue.js team for the amazing framework
- Firebase team for the backend services
