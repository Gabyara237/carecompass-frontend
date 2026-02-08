# CareCompass – Frontend

![React](https://img.shields.io/badge/react-18.x-blue)
![Vite](https://img.shields.io/badge/vite-5.x-purple)
![Tailwind](https://img.shields.io/badge/styling-TailwindCSS-38bdf8)
![Leaflet](https://img.shields.io/badge/maps-Leaflet-green)
![JWT](https://img.shields.io/badge/auth-JWT-blue)

**CareCompass Frontend** is the client-side application for CareCompass, a healthcare access platform that helps immigrant communities find affordable, multilingual community health clinics regardless of insurance or immigration status.

## Description

This React + Vite application consumes the CareCompass REST API and provides an interactive UI with geospatial search, interactive maps, and multilingual support. It includes protected routes for authenticated users, a review system, and real-time clinic filtering by location, language, and specialty.

## Project Links

- **Backend Repository:**  
  [View the CareCompass Backend repository on GitHub](https://github.com/Gabyara237/carecompass-backend/) 

- **Frontend Repository:**  
  [View the CareCompass Frontend repository on GitHub](https://github.com/Gabyara237/carecompass-frontend/) 


## Core Features

- **Geospatial Search** – Find clinics by zip code or city with real-time distance calculation
- **Interactive Map** – Leaflet-powered map with clinic markers and "Map/Satellite" toggle
- **Advanced Filters** – Filter by language, specialty, radius, and insurance acceptance
- **Multilingual Support** – UI available in English, Spanish, Haitian Creole, and French
- **Clinic Details** – Comprehensive clinic information with hours, services, costs, and reviews
- **Review System** – Create, edit, and delete reviews with star ratings (CRUD)
- **Direct Navigation** – One-click "Open in Google Maps" for directions
- **JWT Authentication** – Secure sign in/sign up with protected routes
- **Responsive Design** – Mobile-first, works on all devices

## Technologies Used

- **React** – Frontend framework
- **Vite** – Build tool and dev server
- **React Router** – Client-side routing
- **Tailwind CSS** + **shadcn/ui** – Styling and UI components
- **Leaflet** + **React-Leaflet** – Interactive maps
- **Axios** – API requests
- **JWT** – Authentication token storage
- **Nominatim API** – Geocoding (zip code to coordinates)

## Team

This project was collaboratively developed by:

- **Gabriela Araujo** – Full Stack Development  
  [GitHub Profile](https://github.com/Gabyara237)

- **John Gutierrez** – Full Stack Development  
  [GitHub Profile](https://github.com/canilo1) 


## Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/Gabyara237/carecompass-frontend/
cd carecompass-frontend
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the root of the frontend project:
```bash
VITE_BACK_END_SERVER_URL=http://localhost:3000
```

> The variable name must start with `VITE_` or Vite will not expose it to the app.  
> Use your deployed backend URL in production (e.g., Render/Railway).

### 4. Run the app locally
```bash
npm run dev
```

> The frontend will run on http://localhost:5173 (or another Vite port).



## Key Features Implementation

### Geospatial Search
- Uses Nominatim API to convert zip codes/cities to coordinates
- Backend calculates distances using Haversine formula
- Results sorted by proximity with distance displayed in km

### Interactive Map
- Leaflet map with custom markers for each clinic
- Click markers to view clinic info in popup
- Toggle between "Map" and "Satellite" views
- Automatic centering based on search location

### Review System
- Star rating (1-5) with visual feedback
- Comment with 500-character limit
- Users can only leave one review per clinic
- Edit/delete only your own reviews
- Average rating calculated automatically



## API Integration

The frontend communicates with the CareCompass backend API:

- `GET /clinics/nearby` – Geospatial search with filters
- `GET /clinics/:id` – Clinic details with reviews
- `POST /clinics/:id/reviews` – Create review (protected)
- `PUT /clinics/:id/reviews/:reviewId` – Update review (protected)
- `DELETE /clinics/:id/reviews/:reviewId` – Delete review (protected)
- `POST /auth/sign-in` – User authentication
- `POST /auth/sign-up` – User registration

## Future Improvements

- **Medical Document Translation** – OCR + AI to translate prescriptions and lab results
- **Appointment Booking** – Schedule appointments directly through the app
- **SMS Reminders** – Appointment notifications via Twilio
- **Telehealth Integration** – Connect with clinics offering virtual visits
- **Mobile App** – React Native version for iOS/Android
- **Expand Coverage** – Add clinics in 50+ cities nationwide
- **Health Resource Library** – Educational content in multiple languages
- **AI Chatbot** – Answer common health questions

## Attributions

- **Maps:** OpenStreetMap contributors, Leaflet library
- **Geocoding:** Nominatim API (OpenStreetMap)
- **Icons:** Heroicons, Lucide React
- **Clinic Data:** Verified from official FQHC and community health center websites
- **UI Components:** shadcn/ui, Tailwind CSS

---

**CareCompass** – Healthcare access for everyone 💙