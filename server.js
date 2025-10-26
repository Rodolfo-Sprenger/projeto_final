import express from "express";
import next from "next";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./lib/mongodb.js";


dotenv.config();

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

async function start() {
  try {
    await connectDB();
    await app.prepare();

    const server = express();
    server.use(cors());
    server.use(express.json());


    server.listen(port, () => {
      console.log(`Servidor rodando (Next + Express) em http://localhost:${port}`);
    });
  } catch (err) {
    console.error("Erro ao iniciar o servidor:", err);
    process.exit(1);
  }
}

start();