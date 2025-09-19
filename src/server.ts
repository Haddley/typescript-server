import express, { Request, Response } from 'express';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 3000;

// Determine public directory path based on environment
const publicPath = process.env.NODE_ENV === 'production' 
  ? path.join(__dirname, 'public')  // Azure App Service structure
  : path.join(__dirname, '../public'); // Local development structure

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(publicPath));

// Routes
app.get('/', (req: Request, res: Response) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.get('/api/hello', (req: Request, res: Response) => {
  res.json({ 
    message: 'Hello from TypeScript Server!', 
    timestamp: new Date().toISOString() 
  });
});

app.get('/api/status', (req: Request, res: Response) => {
  res.json({ 
    status: 'OK', 
    server: 'Node.js + TypeScript',
    uptime: process.uptime()
  });
});

// 404 handler - must be last route
app.use((req: Request, res: Response, next: any) => {
  res.status(404).json({ error: 'Route not found' });
});

// Error handler
app.use((err: Error, req: Request, res: Response) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal server error' });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

export default app;