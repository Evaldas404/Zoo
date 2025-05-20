export interface LoggerStrategy {
  log(message: string): void;
}

class ConsoleLogger implements LoggerStrategy {
  log(message: string): void {
    console.log(`[LOG]: ${message}`);
  }
}

export class Logger {
  private static instance: Logger;
  private logs: string[] = [];
  private strategy: LoggerStrategy = new ConsoleLogger();

  private constructor() {}

  static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  setStrategy(strategy: LoggerStrategy): void {
    this.strategy = strategy;
  }

  log(message: string): void {
    this.logs.push(message);
    this.strategy.log(message);
  }

  getLogs(): string[] {
    return this.logs;
  }
}