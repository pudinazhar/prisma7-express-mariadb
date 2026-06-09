// lib/prisma.js
import "dotenv/config";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";
// Opsi B: Cari di satu folder sebelum /client
import { PrismaClient } from "../../generated/prisma/client.ts";

// Konfigurasi adapter database lokal sesuai aturan Prisma 7
const adapter = new PrismaMariaDb({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  connectionLimit: 5,
});

// Masukkan adapter ke dalam konstruktor PrismaClient
const prisma = new PrismaClient({ adapter });

export { prisma };