import consola from 'consola';
import app from './app';

const PORT = process.env.PORT || 3001;

app.listen(PORT, () =>
  consola.success('\x1b[32m%s\x1b[0m', `🚀 Servidor rodando na porta ${PORT}`)
);
