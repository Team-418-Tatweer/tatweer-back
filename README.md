# Tatweer Backend API

## Overview

The IBP REST API is designed to enable seamless Integrated Business Planning (IBP) by providing access to real-time forecasting, alerts, inventory management, and supply chain optimization. This API allows businesses to predict demand, track inventory fluctuations, and respond dynamically to external factors affecting their supply chains.

## Table of Contents

- [Tatweer Backend API](#tatweer-backend-api)
    - [Overview](#overview)
    - [Table of Contents](#table-of-contents)
    - [Features](#features)
    - [Tech Stack](#tech-stack)
        - [Core Technologies](#core-technologies)
        - [Key Dependencies](#key-dependencies)
        - [Development Tools](#development-tools)
    - [Project Structure](#project-structure)
    - [Getting Started](#getting-started)
        - [Prerequisites](#prerequisites)
        - [Installation](#installation)
        - [Running the Application](#running-the-application)
    - [Development](#development)
        - [Available Scripts](#available-scripts)
        - [Code Style](#code-style)
    - [Testing](#testing)
    - [Deployment](#deployment)
        - [Production Build](#production-build)
        - [Deployment Considerations](#deployment-considerations)
    - [Contributing](#contributing)
    - [License](#license)
    - [Support](#support)

## Features

- 🔐 JWT-based Authentication & Authorization
- 📦 MongoDB Integration with Mongoose
- 🔄 RESTful API Architecture
- 📝 TypeScript Implementation
- 🧪 Comprehensive Testing Suite
- 📧 Email Service Integration
- 🖼️ File Upload Support
- 🔍 Request Validation
- 📊 Logging System

## Tech Stack

### Core Technologies

- Node.js
- Express.js
- TypeScript
- MongoDB

### Key Dependencies

- express (4.18.2)
- mongoose (7.4.0)
- jsonwebtoken (9.0.1)
- bcryptjs (2.4.3)
- winston (3.11.0)
- nodemailer (6.9.4)
- cloudinary (2.0.1)
- cors (2.8.5)
- express-validator (7.0.1)

### Development Tools

- Jest
- Supertest
- ESLint
- Prettier
- TypeDoc

## Project Structure

```
src/
├── config/          # Configuration files
├── controllers/     # Request handlers
├── db/             # Database setup and models
├── middleware/     # Custom middleware
├── routes/         # API routes
├── services/       # Business logic
├── types/          # TypeScript type definitions
├── utils/          # Utility functions
└── tests/          # Test files
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/tatweer-back.git
cd tatweer-back
```

2. Install dependencies:

```bash
npm install
```

3. Configure environment variables:

```bash
cp .env.example .env
```

4. Update the .env file with your configurations:

```env
PORT=3000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_key
CLOUDINARY_API_SECRET=your_cloudinary_secret
```

### Running the Application

Development mode:

```bash
npm run dev
```

Production mode:

```bash
npm run build
npm start
```

## Development

### Available Scripts

- `npm run build` - Transpile TypeScript to JavaScript
- `npm run dev` - Start development server
- `npm run test` - Run test suite
- `npm run lint` - Run linting
- `npm run lint:fix` - Fix linting issues
- `npm run doc` - Generate documentation

### Code Style

- Follow ESLint configuration
- Use Prettier for formatting
- Follow TypeScript best practices

## Testing

```bash
# Run all tests
npm run test

# Run specific test file
npm run test -- path/to/test

# Run tests with coverage
npm run test -- --coverage
```

## Deployment

### Production Build

```bash
npm run build
```

### Deployment Considerations

- Set up proper environment variables
- Configure MongoDB production instance
- Set up proper logging
- Configure CORS settings
- Enable security middleware

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support, email js_zouambia@esi.dz or open an issue in the repository.
