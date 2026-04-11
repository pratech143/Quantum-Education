import { createApp } from './app.js';
import { env } from './shared/config/env.js';
import { ConsoleLogger } from './shared/logger/console-logger.js';
import { connectDatabase } from './shared/database/prisma.js';

const logger = new ConsoleLogger();

const start = async () => {
  await connectDatabase();
  logger.info('Database connected');

  const app = createApp();

  app.listen(env.PORT, () => {
    logger.info(`Backend listening on http://localhost:${env.PORT}${env.API_PREFIX}`);
  });
};

start().catch((error) => {
  logger.error('Failed to start server', { error: error instanceof Error ? error.message : error });
  process.exit(1);
});
