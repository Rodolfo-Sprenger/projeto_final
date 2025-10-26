import mongoose from "mongoose";// Conexão com o MongoDB usando Mongoose

export const connectDB = async () => { 
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MongoDB conectado: ${conn.connection.host}`);
  } catch (error) {
    console.error("Erro ao conectar ao MongoDB:", error.message);
    process.exit(1);
  }
}