import mongoose from 'mongoose'

const MONGODB_URI = process.env.NEXT_PUBLIC_MONGODB_URI

if (!MONGODB_URI) {
  throw new Error('MONGODB_URI is not defined')
}

let cached = (global as any).mongoose || { conn: null, promise: null }

const connectDb = async (): Promise<typeof mongoose> => {
  if (cached.conn) {
    console.log('Using existing MongoDB connection')
    return cached.conn
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI).then((mongoose) => {
      console.log('Connected to MongoDB')
      return mongoose
    })
  }

  cached.conn = await cached.promise
  return cached.conn
}

export default connectDb
