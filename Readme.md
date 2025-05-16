# ToDo App

A full-stack Todo application built with modern web technologies, featuring user authentication, task management, and a responsive user interface.

## Features

- User Authentication (Sign Up, Login)
- Create, Read, Update, and Delete Tasks
- Protected Routes
- Responsive Design
- Modern UI with Tailwind CSS

## Tech Stack

### Frontend
- React.js
- React Router DOM for routing
- Axios for API calls
- Tailwind CSS for styling
- Vite as build tool

### Backend
- Node.js with Express.js
- MongoDB with Mongoose
- JWT for authentication
- Bcrypt for password hashing
- CORS enabled

## Project Structure

```
ToDo/
├── backend/                 # Backend server
│   ├── controllers/        # Request handlers
│   ├── db/                # Database configuration
│   ├── middlewares/       # Custom middlewares
│   ├── models/            # Database models
│   └── routes/            # API routes
└── frontend/              # React frontend
    ├── src/
    │   ├── api/          # API integration
    │   ├── components/   # Reusable components
    │   ├── layout/       # Layout components
    │   ├── pages/        # Page components
    │   └── utils/        # Utility functions
    └── public/           # Static assets
```

## Getting Started

1. Clone the repository
```bash
git clone https://github.com/vikasyadav01234/ToDo.git
cd ToDo
```
2. Install dependencies for both frontend and backend:

# Install backend dependencies
```bash
cd backend
npm install
```

# Install frontend dependencies
```bash
cd ../frontend
npm install
```

3. Set up environment variables:
   - Create a `.env` file in the backend directory
   - Add necessary environment variables (MongoDB URI, JWT Secret, etc.)

4. Run the application:

```bash
# Start backend server
cd backend
npm run dev

# Start frontend development server
cd ../frontend
npm run dev
```

## Available Scripts

### Backend
- `npm run dev` - Start the development server

### Frontend
- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Contributing

Feel free to contribute to this project by creating issues or submitting pull requests.

## License

This project is licensed under the ISC License.