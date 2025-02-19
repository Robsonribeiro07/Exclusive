import mongoose from 'mongoose'

const MONGODB_URI = process.env.NEXT_PUBLIC_MONGODB_URI

if (!MONGODB_URI) {
  throw new Error('MONGODB_URI is not defined')
}

const connectDb = async (): Promise<void> => {
  try {
    if (mongoose.connection.readyState === 1) return

    await mongoose.connect(MONGODB_URI)
    console.log('Connected to MongoDB')
  } catch (error) {
    console.error('Error connecting to MongoDB:', error)
    throw error
  }
}

export default connectDb
