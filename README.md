# 🦙 Llama Chat - Local AI Chat Interface

A clean, modern chat interface for interacting with Llama 3.2 locally using Ollama. Features a beautiful green-themed UI built with React and Tailwind CSS.

![Llama Chat Interface](https://img.shields.io/badge/React-18+-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3+-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Ollama](https://img.shields.io/badge/Ollama-Local_AI-FF6B35?style=for-the-badge)

## ✨ Features

- 🎨 **Modern UI**: Clean, minimal design with green theme
- 🔒 **Privacy First**: All processing happens locally - no data sent to external servers
- ⚡ **Real-time Chat**: Instant responses from your local Llama 3.2 model
- 🎯 **User-friendly**: Keyboard shortcuts, loading states, and intuitive interface
- 📱 **Responsive**: Works seamlessly on desktop and mobile devices

## 🛠️ Tech Stack

### Frontend
- **React 18+** - Modern React with hooks
- **Tailwind CSS** - Utility-first CSS framework
- **Axios** - HTTP client for API requests
- **Inter Font** - Clean, modern typography

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **Ollama** - Local AI model runner
- **CORS** - Cross-origin resource sharing

## 📋 Prerequisites

Before running this project, make sure you have:

1. **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
2. **Ollama** installed - [Download here](https://ollama.ai/)
3. **Llama 3.2 model** pulled in Ollama:
   ```bash
   ollama pull llama3.2:latest
   ```

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/shivam-tadas/simple-ollama-web-ui.git
   cd simple-ollama-web-ui
   ```

2. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd frontend
   npm install
   ```

4. **Install Tailwind CSS CLI** (if not already installed)
   ```bash
   npm install -g @tailwindcss/cli
   ```

## 🏃‍♂️ Running the Application

You need to run **3 terminals** simultaneously:

### Terminal 1: CSS Compilation (Tailwind Watch)
```bash
cd frontend
npx @tailwindcss/cli -i ./src/index.css -o ./src/App.css --watch
```

### Terminal 2: Backend Server
```bash
cd backend
npm run dev
```

### Terminal 3: Frontend Development Server
```bash
cd frontend
npm start
```

## 🔧 Configuration

### Backend Configuration
The backend runs on `http://localhost:3005` by default. You can modify the port in `backend/index.js`:

```javascript
app.listen(3005, () => {
  console.log('Backend running on http://localhost:3005');
});
```

### Frontend Configuration
The frontend runs on `http://localhost:3000` and connects to the backend at `http://localhost:3005`. Update the API endpoint in `frontend/src/App.js` if needed:

```javascript
const res = await axios.post('http://localhost:3005/generate', { prompt });
```

## 🎨 Customization

### Changing Colors
The app uses a green theme. To change colors, update the Tailwind classes in `App.js`:
- `from-green-500 to-emerald-500` - Gradient colors
- `border-green-200` - Border colors
- `bg-green-50` - Background colors

## 🚨 Troubleshooting

### Common Issues

1. **"ollama command not found"**
   - Make sure Ollama is installed and in your PATH
   - Restart your terminal after installation

2. **Model not responding**
   - Ensure Llama 3.2 is pulled: `ollama pull llama3.2:latest`
   - Check if Ollama service is running: `ollama serve`

3. **Frontend not connecting to backend**
   - Verify backend is running on port 3005
   - Check for CORS issues in browser console

4. **Tailwind styles not applying**
   - Make sure the CSS watch command is running
   - Check that `App.css` is being generated

## 📝 API Endpoints

### POST `/generate`
Generates a response from Llama 3.2 model.

**Request Body:**
```json
{
  "prompt": "Your message here"
}
```

**Response:**
```json
{
  "response": "AI generated response"
}
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🙏 Acknowledgments

- [Ollama](https://ollama.ai/) for making local AI accessible
- [Meta](https://ai.meta.com/) for the Llama models
- [Tailwind CSS](https://tailwindcss.com/) for the styling framework
- [React](https://reactjs.org/) for the frontend framework

## ⭐ Star History

If you found this project helpful, please consider giving it a star!

---

**Made with ❤️ for the local AI community**
