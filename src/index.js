// index.js
import express from 'express';
import { prisma } from './lib/prisma.js'; // Impor instance prisma yang aman dari lib

const app = express();
app.use(express.json());

const PORT = 3000;

// 1. POST: Membuat User Baru
app.post('/users', async (req, res) => {
  const { name, email } = req.body;
  try {
    const newUser = await prisma.user.create({
      data: { name, email },
    });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ error: "Gagal membuat user. Email mungkin sudah terdaftar." });
  }
});

// 2. GET: Mengambil Semua Data User
app.get('/users', async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: "Gagal mengambil data dari database." });
  }
});

// 3. DELETE: Menghapus User Berdasarkan ID
app.delete('/users/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.user.delete({
      where: { id: parseInt(id) },
    });
    res.status(200).json({ message: `User dengan ID ${id} berhasil dihapus.` });
  } catch (error) {
    res.status(400).json({ error: "User tidak ditemukan atau gagal dihapus." });
  }
});

// Menghidupkan Server Express
app.listen(PORT, () => {
  console.log(`🚀 Server Express & Prisma 7 berjalan sukses di http://localhost:${PORT}`);
});