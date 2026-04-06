# Weather App

A beginner-friendly full-stack weather application built with **React** on the frontend and **Express** on the backend. The app lets users search for a city and view current weather data through a clean UI, while the backend securely requests data from OpenWeather so the API key stays on the server.[1][2]
<img width="806" height="788" alt="image" src="https://github.com/user-attachments/assets/bd31d455-07ed-43c7-90cf-a18323d40ca2" />

## Features

- Search current weather by city name.
- React frontend with reusable components for search, messages, and weather display.
- Express backend with separated `routes`, `controllers`, and `services` for cleaner structure.
- Weather data fetched from OpenWeather through the backend instead of exposing the API key in the client.
- Error handling for missing city input and failed API requests.

## Tech Stack

### Frontend

- React
- Vite
- CSS

### Backend

- Node.js
- Express
- CORS middleware
- dotenv for environment variables

### API

- OpenWeather Current Weather API

## Project Structure

```bash
weather-app/
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── SearchBar.jsx
│   │   │   ├── WeatherCard.jsx
│   │   │   └── Message.jsx
│   │   ├── services/
│   │   │   └── weatherApi.js
│   │   ├── App.jsx
│   │   └── index.css
│   └── package.json
│
├── server/
│   ├── controllers/
│   │   └── weatherController.js
│   ├── routes/
│   │   └── weatherRoutes.js
│   ├── services/
│   │   └── weatherService.js
│   ├── server.js
│   ├── .env
│   └── package.json
│
└── README.md
```

## How It Works

1. The user enters a city name in the React frontend.
2. React sends a request to the Express backend.
3. The Express route passes the request to the controller.
4. The controller calls the service layer.
5. The service requests weather data from OpenWeather.
6. The backend returns a simplified JSON response to the frontend.
7. React displays the weather data on the screen.

## Installation

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd weather-app
```

### 2. Set up the backend

```bash
cd server
npm install
```

Create a `.env` file inside the `server` folder:

```env
PORT=5000
WEATHER_API_KEY=your_openweather_api_key_here
```

Environment variables are commonly used to keep API keys out of source code.[13][14]

### 3. Set up the frontend

```bash
cd ../client
npm install
```

## Run the App

### Start the backend

```bash
cd server
npm run dev
```

If a `dev` script is not set up yet, run:

```bash
node server.js
```

### Start the frontend

```bash
cd client
npm run dev
```

Vite typically runs the frontend on `http://localhost:5173`, while the Express backend runs on `http://localhost:5000` during development.

## API Endpoint

### Get weather by city

```http
GET /api/weather?city=Austin
```

The response shape is intentionally simplified by the backend service so the frontend does not need to work with the full raw weather API response.

## Frontend Components

- `App.jsx` manages state, form submission, and conditional rendering.
- `SearchBar.jsx` handles user input and form submission through props.  
- `WeatherCard.jsx` displays the weather details returned by the backend.  
- `Message.jsx` shows loading and error messages.  
- `weatherApi.js` contains the fetch request to the backend and handles API errors.

## Backend Files  
                                                                                      
- `server.js` creates the Express app, applies middleware, and mounts routes.    
- `weatherRoutes.js` defines the weather endpoint using `express.Router()`.
- `weatherController.js` reads the request, validates input, and sends the response.
- `weatherService.js` calls OpenWeather and returns formatted weather data.

## Learning Goals

This project is a good beginner full-stack exercise because it teaches:

- React component structure and props
- Form handling with `useState`.
- Conditional rendering for loading and error states.
- Express routing and controller-service structure.
- Backend API integration with environment variables.

## Notes

- The frontend should call the Express backend, not OpenWeather directly, so the API key is not exposed in the browser.
- If the backend works in Postman but not in the frontend, check the frontend URL, CORS setup, or Vite proxy configuration.
- OpenWeather may return errors for invalid cities or invalid API keys, so basic error handling is important.
