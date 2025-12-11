import 'dotenv/config';

export const apiKeyMiddleware = (req, res, next) => {
  const clientKey = req.header('x-api-key');
  
  if (!clientKey || clientKey !== process.env.API_KEY) {
    return res.status(401).json({ message: 'Acceso denegado: API key inválida o ausente' });
  }

  next();
};
