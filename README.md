# TypeScript Server

A simple website built with Node.js and TypeScript using Express.js framework.

## Features

- 🚀 **TypeScript** - Type-safe JavaScript with modern features
- 🌐 **Express.js** - Fast, minimalist web framework for Node.js
- 🔄 **API Routes** - RESTful API endpoints for data exchange
- 📱 **Responsive Design** - Mobile-friendly UI with CSS Grid
- ⚡ **Hot Reload** - Automatic server restart during development
- 🎨 **Modern UI** - Beautiful gradient design with interactive elements

## Project Structure

```
typescipt-server/
├── src/
│   └── server.ts          # Main server file with Express setup
├── public/
│   ├── index.html         # Main HTML page
│   ├── styles.css         # CSS styles with responsive design
│   └── script.js          # Client-side JavaScript
├── dist/                  # Compiled JavaScript (after build)
├── package.json           # Project dependencies and scripts
└── tsconfig.json          # TypeScript configuration
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone or download this project
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server with hot reload:
```bash
npm run dev
```

The server will start at `http://localhost:3000`

### Production

1. Build the TypeScript code:
   ```bash
   npm run build
   ```

2. Start the production server:
   ```bash
   npm start
   ```

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Compile TypeScript to JavaScript
- `npm start` - Start production server
- `npm run clean` - Remove compiled files

## API Endpoints

- `GET /` - Serve the main HTML page
- `GET /api/hello` - Returns a hello message with timestamp
- `GET /api/status` - Returns server status and uptime

## Technology Stack

- **Backend**: Node.js + TypeScript + Express.js
- **Frontend**: HTML5 + CSS3 + Vanilla JavaScript
- **Development**: nodemon + ts-node for hot reload
- **Build**: TypeScript compiler

## License

ISC