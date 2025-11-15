# Website Perumahan

Platform properti modern untuk menemukan rumah, apartemen, tanah, dan properti komersial di seluruh Indonesia.

## Fitur Utama

- 🏠 **Berbagai Jenis Properti** - Rumah, apartemen, tanah, dan properti komersial
- 🔍 **Pencarian & Filter Canggih** - Cari berdasarkan lokasi, harga, tipe, dan spesifikasi
- 📱 **Responsive Design** - Tampilan optimal di semua perangkat
- ♿ **Accessible** - Mengikuti standar aksesibilitas WCAG
- 🚀 **Performa Tinggi** - Dibangun dengan Next.js 14 dan optimasi gambar
- 🎨 **UI/UX Modern** - Interface yang bersih dan mudah digunakan
- 🌐 **SEO Optimized** - Meta tags dan struktur yang SEO-friendly

## Teknologi yang Digunakan

- **Framework**: [Next.js 14](https://nextjs.org/) dengan App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Image Optimization**: Next.js Image Component

## Prasyarat

Pastikan Anda telah menginstal:
- Node.js 18.x atau lebih tinggi
- npm, yarn, atau pnpm

## Instalasi

1. **Clone repository**
   ```bash
   git clone https://github.com/avarice27/website-perumahan.git
   cd website-perumahan
   ```

2. **Install dependencies**
   ```bash
   npm install
   # atau
   yarn install
   # atau
   pnpm install
   ```

3. **Jalankan development server**
   ```bash
   npm run dev
   # atau
   yarn dev
   # atau
   pnpm dev
   ```

4. **Buka browser**

   Akses [http://localhost:3000](http://localhost:3000) untuk melihat website.

## Struktur Proyek

```
website-perumahan/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Root layout dengan Header & Footer
│   ├── page.tsx             # Homepage
│   ├── globals.css          # Global styles
│   ├── properti/            # Halaman daftar properti
│   │   ├── page.tsx         # Listing dengan filter & search
│   │   └── [id]/            # Detail properti (dynamic route)
│   │       └── page.tsx
│   ├── tentang/             # Halaman tentang kami
│   │   └── page.tsx
│   └── kontak/              # Halaman kontak
│       └── page.tsx
├── components/              # Reusable components
│   ├── Header.tsx           # Navigation header
│   ├── Footer.tsx           # Footer
│   └── PropertyCard.tsx     # Kartu properti
├── data/                    # Data & mock data
│   └── properties.ts        # Sample property data
├── types/                   # TypeScript type definitions
│   └── property.ts          # Property interfaces
├── public/                  # Static files
│   └── images/
├── CLAUDE.md               # AI assistant guide
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.js
```

## Halaman Utama

### 1. Homepage (`/`)
- Hero section dengan CTA
- Fitur unggulan
- Properti featured
- Call-to-action section

### 2. Daftar Properti (`/properti`)
- Grid properti dengan pagination
- Filter berdasarkan:
  - Jenis properti (rumah, apartemen, tanah, komersial)
  - Rentang harga
  - Jumlah kamar tidur
  - Lokasi/kota
  - Status (tersedia, dipesan, terjual)
- Search bar untuk pencarian cepat
- Responsive untuk mobile dan desktop

### 3. Detail Properti (`/properti/[id]`)
- Galeri gambar properti
- Informasi lengkap (harga, spesifikasi, fasilitas)
- Lokasi dan alamat
- Informasi agen
- Tombol kontak (WhatsApp, telepon)

### 4. Tentang Kami (`/tentang`)
- Cerita perusahaan
- Statistik
- Nilai-nilai perusahaan

### 5. Kontak (`/kontak`)
- Informasi kontak
- Form kontak
- Jam operasional

## Kustomisasi

### Menambah Properti Baru

Edit file `data/properties.ts` dan tambahkan objek properti baru:

```typescript
{
  id: 'unique-id',
  title: 'Judul Properti',
  description: 'Deskripsi lengkap...',
  price: 2000000000,
  currency: 'IDR',
  location: {
    address: 'Alamat lengkap',
    city: 'Nama Kota',
    province: 'Nama Provinsi',
  },
  specifications: {
    landArea: 200,
    buildingArea: 150,
    bedrooms: 3,
    bathrooms: 2,
    floors: 2,
    carports: 2,
  },
  images: ['url-gambar-1', 'url-gambar-2'],
  amenities: ['Taman', 'Garasi', 'CCTV'],
  propertyType: 'house',
  status: 'available',
  listedDate: new Date('2024-01-15'),
  agent: {
    name: 'Nama Agen',
    contact: '+62 812-3456-7890',
  },
}
```

### Mengubah Tema Warna

Edit file `tailwind.config.ts` untuk mengubah warna primary:

```typescript
colors: {
  primary: {
    50: '#f0f9ff',
    // ... ubah nilai warna sesuai kebutuhan
  },
}
```

## Build untuk Production

```bash
npm run build
npm run start
```

Atau deploy ke platform seperti:
- [Vercel](https://vercel.com/) (Recommended untuk Next.js)
- [Netlify](https://www.netlify.com/)
- [AWS](https://aws.amazon.com/)

## Checklist Deployment

- [ ] Update meta tags dan SEO
- [ ] Ganti sample data dengan data real
- [ ] Setup environment variables untuk API
- [ ] Konfigurasi domain kustom
- [ ] Setup analytics (Google Analytics, dll)
- [ ] Test responsive design di berbagai device
- [ ] Test aksesibilitas
- [ ] Setup monitoring dan error tracking

## Pengembangan Selanjutnya

Fitur yang bisa ditambahkan:
- [ ] Integrasi dengan backend/database real
- [ ] Sistem autentikasi user
- [ ] Wishlist/favorites
- [ ] Perbandingan properti
- [ ] Kalkulator KPR/cicilan
- [ ] Integrasi maps (Google Maps)
- [ ] Filter advanced (radius search, dll)
- [ ] Multi-bahasa (i18n)
- [ ] Dark mode
- [ ] Admin dashboard

## Kontribusi

Kontribusi selalu diterima! Silakan:
1. Fork repository
2. Buat branch fitur (`git checkout -b feature/AmazingFeature`)
3. Commit perubahan (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

## Best Practices

Ikuti panduan di [CLAUDE.md](./CLAUDE.md) untuk:
- Code style dan konvensi
- Security best practices
- Accessibility guidelines
- Performance optimization
- Testing guidelines

## License

Proyek ini dibuat untuk keperluan demonstrasi dan pembelajaran.

## Kontak

Untuk pertanyaan atau saran, silakan hubungi:
- Email: info@websiteperumahan.com
- Website: [https://websiteperumahan.com](https://websiteperumahan.com)

---

**Dibuat dengan ❤️ menggunakan Next.js dan TypeScript**
