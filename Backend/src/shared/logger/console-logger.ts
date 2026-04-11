type Metadata = Record<string, unknown>;

export class ConsoleLogger {
  info(message: string, metadata?: Metadata) {
    this.write('INFO', message, metadata);
  }

  error(message: string, metadata?: Metadata) {
    this.write('ERROR', message, metadata);
  }

  private write(level: string, message: string, metadata?: Metadata) {
    const payload = {
      level,
      message,
      timestamp: new Date().toISOString(),
      ...(metadata ? { metadata } : {})
    };

    console.log(JSON.stringify(payload));
  }
}
