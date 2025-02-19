// mongodb/mongo.connection.ts
import { Injectable } from '@nestjs/common';
import * as mongoose from 'mongoose';
import { DatabaseConnection } from '../interfaces/database.interface';
import { MongoConfig } from './mongo.config';

@Injectable()
export class MongoConnection implements DatabaseConnection {
  constructor(private config: MongoConfig) {}

  async connect(): Promise<void> {
    try {
      const { uri } = this.config.getConnectionConfig();
      await mongoose.connect(uri);
      console.log('Connexion à MongoDB réussie ! 🎉');
    } catch (error) {
      console.error('Erreur de connexion à MongoDB:', error);
      throw error;
    }
  }

  async disconnect(): Promise<void> {
    await mongoose.disconnect();
    console.log('Déconnexion de MongoDB réussie');
  }
}
