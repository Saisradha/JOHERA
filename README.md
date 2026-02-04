# Johera - Luxury Meets Culture

A complete full-stack fashion e-commerce website for Johera, a brand that bridges streetwear energy and ethnic elegance.

## Tech Stack

- **Frontend:** React 18 + Vite, Tailwind CSS, Framer Motion
- **Backend:** Python Flask
- **Deployment:** Render.com

## Project Structure

```
johera/
├── src/
│   ├── components/      # React components
│   ├── pages/          # Page components
│   ├── App.jsx         # Main app component
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── app.py              # Flask backend
├── requirements.txt    # Python dependencies
├── package.json        # Node dependencies
├── vite.config.js      # Vite configuration
├── tailwind.config.js  # Tailwind configuration
└── render.yaml         # Render deployment config
```

## Local Development

### Prerequisites

- Node.js 18+ and npm
- Python 3.11+
- pip

### Setup Steps

1. **Install Node dependencies:**
   ```bash
   npm install
   ```

2. **Install Python dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

3. **Run the development server:**

   **Option 1: Run frontend and backend separately (recommended for development)**
   
   Terminal 1 (Frontend):
   ```bash
   npm run dev
   ```
   This will start the Vite dev server on `http://localhost:5173`
   
   Terminal 2 (Backend):
   ```bash
   python app.py
   ```
   This will start the Flask server on `http://localhost:5000`
   
   **Note:** For development, you may need to configure the frontend to proxy API requests to the backend, or update the API calls in the React components to use `http://localhost:5000/api/products`.

   **Option 2: Build and run with Flask (production-like)**
   ```bash
   npm run build
   python app.py
   ```
   This will serve the built React app from Flask on `http://localhost:5000`

### Development Notes

- The frontend runs on Vite dev server (port 5173) in development mode
- The backend Flask API runs on port 5000
- Update API calls in `src/pages/Shop.jsx` to use the full URL if running separately:
  ```javascript
  const response = await fetch('http://localhost:5000/api/products')
  ```

## Production Build

1. **Build the React app:**
   ```bash
   npm run build
   ```

2. **Run with Gunicorn:**
   ```bash
   gunicorn app:app
   ```

## Deployment on Render.com

1. **Connect your repository** to Render.com

2. **Create a new Web Service** and configure:
   - **Build Command:** `pip install -r requirements.txt && npm install && npm run build`
   - **Start Command:** `gunicorn app:app`
   - **Environment:** Python 3
   - **Node Version:** 18.17.0 (set in environment variables)

3. **Environment Variables:**
   - `PYTHON_VERSION`: 3.11.0
   - `NODE_VERSION`: 18.17.0

4. **Deploy!** Render will automatically:
   - Install Python dependencies
   - Install Node dependencies
   - Build the React app
   - Start the Flask server with Gunicorn

## Features

- ✅ Responsive design with Tailwind CSS
- ✅ Smooth animations with Framer Motion
- ✅ React Router for navigation
- ✅ Flask API with CORS enabled
- ✅ Product listing and filtering
- ✅ Modern Heritage design theme
- ✅ Mobile-friendly navigation

## API Endpoints

- `GET /api/products` - Get all products
- `GET /api/products/<id>` - Get a specific product
- `GET /api/products/category/<category>` - Get products by category

## Color Palette

- **Terracotta:** #C97D60
- **Beige:** #F5E6D3
- **Deep Green:** #2D5016
- **Dark Beige:** #E8D5C4

## Fonts

- **Sans-Serif:** Inter (for modern feel)
- **Serif:** Playfair Display (for luxury feel)

---

Built with ❤️ for Johera

