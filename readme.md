# PRISMA 7, EXPRESS JS, MYSQL/MARIADB


Struktur Folder
```
express-prisma7-mysql/
├── generated/            
├── node_modules/
├── prisma/
│   ├── migrations/
│   ├── posts.prisma
│   ├── scheme.prisma
│   └── user.prisma
├── src/
│   ├── lib/              
│   │   └── prisma.js
│   └── index.js
├── .env
├── env.example
├── package.json
└── prisma.config.ts
```

Jalankan
```
npm install
npm run dev
```
## Perubahan di Prisma
Jika sudah ada perubahan pada scheme db
```
npx prisma migrate dev --name nama_perubahan_kamu
```
Contoh: Jika Anda menambahkan kolom password pada model User, Anda bisa menamainya:
```
npx prisma migrate dev --name tambah_kolom_password
```
Apa yang dilakukan perintah ini?
* Prisma akan membandingkan skema baru Anda dengan kondisi database MySQL saat ini.
* Prisma membuat file catatan migrasi baru di dalam folder prisma/migrations/.
* Prisma langsung menerapkan perubahan struktur tersebut ke database MySQL Anda secara otomatis.

## Regenerate Prisma Client
Setelah migrasi selesai, jalankan perintah ini untuk memperbarui "kecerdasan" auto-complete pada kode Anda:
```
npx prisma generate
```

## PUDIN SAEPUDIN
* [Italazhar](https://italazhar.com)
* [Telegram](https://t.me/pudin_ira)
* [Instagram](https://instagram.com/pudin.ira)