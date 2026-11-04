import mongoose from 'mongoose';

let connectionPromise;

export async function connectDB() {
  if (mongoose.connection.readyState === 1) return mongoose;
  const uri = process.env.MONGODB_URI;
  if (!uri) throw new Error('MONGODB_URI is not set');
  mongoose.set('strictQuery', true);
  if (!connectionPromise) {
    connectionPromise = mongoose.connect(uri, { serverSelectionTimeoutMS: 2000 }).catch((err) => {
      connectionPromise = undefined;
      throw err;
    });
  }
  return connectionPromise;
}
