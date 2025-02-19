export interface DatabaseConfig {
  getConnectionConfig(): any;
}

export interface DatabaseConnection {
  connect(): Promise<void>;
  disconnect(): Promise<void>;
}

export const DATABASE_CONNECTION = 'DATABASE_CONNECTION';
