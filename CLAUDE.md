# Prompt: Website Iuran Perumahan dengan Payment Gateway Indonesia

## Deskripsi Proyek
Buatkan aplikasi web untuk manajemen iuran perumahan yang memungkinkan warga membayar tagihan air, listrik, dan iuran lainnya menggunakan QRIS dan Virtual Account bank Indonesia.

## Tech Stack yang Digunakan
- **Frontend**: Next.js 14+ (App Router) dengan TypeScript
- **Styling**: Tailwind CSS + shadcn/ui components
- **Backend**: Next.js API Routes
- **Database**: PostgreSQL dengan Prisma ORM
- **Payment Gateway**: Midtrans (mendukung QRIS dan VA berbagai bank Indonesia)
- **Authentication**: NextAuth.js
- **State Management**: Zustand (optional)

## Fitur Utama

### 1. Autentikasi & User Management
- Login/Register untuk warga
- Dashboard Admin dan User terpisah
- Role-based access control (Admin, Warga)
- Profile management dengan data rumah (nomor rumah, blok)

### 2. Manajemen Tagihan (Admin)
- Input tagihan bulanan per rumah:
  - Iuran kebersihan
  - Iuran keamanan
  - Tagihan air
  - Tagihan listrik (jika ada)
  - Iuran lain-lain
- Upload tagihan massal via CSV/Excel
- Set deadline pembayaran
- Generate tagihan otomatis per bulan
- Edit/hapus tagihan

### 3. Dashboard Warga
- Lihat daftar tagihan (lunas/belum lunas)
- Detail tagihan per item
- Riwayat pembayaran
- Download bukti pembayaran/invoice
- Notifikasi tagihan baru

### 4. Sistem Pembayaran
- Integrasi Midtrans Payment Gateway:
  - **QRIS** (semua e-wallet: GoPay, OVO, DANA, ShopeePay, dll)
  - **Virtual Account**: 
    - BCA
    - Mandiri
    - BNI
    - BRI
    - Permata
    - CIMB
    - BTN
- Pilih metode pembayaran
- Generate payment code/QRIS
- Webhook untuk update status pembayaran otomatis
- Expired payment handling

### 5. Dashboard Admin
- Overview statistik:
  - Total tagihan bulan ini
  - Total pembayaran masuk
  - Outstanding payment
  - Grafik pembayaran per bulan
- Daftar warga dan status pembayaran
- Export laporan ke Excel/PDF
- Manajemen users
- Pengaturan biaya iuran default

### 6. Notifikasi
- Email notification untuk:
  - Tagihan baru
  - Pembayaran sukses
  - Reminder deadline
- In-app notification

## Database Schema (Prisma)

```prisma
model User {
  id            String    @id @default(cuid())
  email         String    @unique
  name          String
  password      String
  role          Role      @default(RESIDENT)
  houseNumber   String?   
  block         String?   
  phoneNumber   String?
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
  bills         Bill[]
  payments      Payment[]
}

enum Role {
  ADMIN
  RESIDENT
}

model Bill {
  id                String    @id @default(cuid())
  userId            String
  user              User      @relation(fields: [userId], references: [id])
  month             String    // Format: YYYY-MM
  cleaningFee       Float     @default(0)
  securityFee       Float     @default(0)
  waterBill         Float     @default(0)
  electricityBill   Float     @default(0)
  otherFees         Float     @default(0)
  totalAmount       Float
  status            BillStatus @default(UNPAID)
  dueDate           DateTime
  createdAt         DateTime  @default(now())
  updatedAt         DateTime  @updatedAt
  payment           Payment?
}

enum BillStatus {
  UNPAID
  PENDING
  PAID
  OVERDUE
}

model Payment {
  id              String        @id @default(cuid())
  billId          String        @unique
  bill            Bill          @relation(fields: [billId], references: [id])
  userId          String
  user            User          @relation(fields: [userId], references: [id])
  amount          Float
  paymentMethod   PaymentMethod
  orderId         String        @unique
  transactionId   String?       
  vaNumber        String?       
  qrisUrl         String?
  status          PaymentStatus @default(PENDING)
  paidAt          DateTime?
  expiredAt       DateTime?
  createdAt       DateTime      @default(now())
  updatedAt       DateTime      @updatedAt
}

enum PaymentMethod {
  QRIS
  BCA_VA
  MANDIRI_VA
  BNI_VA
  BRI_VA
  PERMATA_VA
  CIMB_VA
  BTN_VA
}

enum PaymentStatus {
  PENDING
  SUCCESS
  FAILED
  EXPIRED
  CANCELLED
}
```

## Struktur Folder

```
src/
├── app/
│   ├── (auth)/
│   │   ├── login/
│   │   └── register/
│   ├── (dashboard)/
│   │   ├── admin/
│   │   │   ├── bills/
│   │   │   ├── users/
│   │   │   └── reports/
│   │   └── user/
│   │       ├── bills/
│   │       ├── payment/
│   │       └── history/
│   ├── api/
│   │   ├── auth/
│   │   ├── bills/
│   │   ├── payment/
│   │   │   ├── create/
│   │   │   └── notification/ (webhook)
│   │   └── users/
│   └── layout.tsx
├── components/
│   ├── ui/ (shadcn components)
│   ├── layout/
│   ├── bills/
│   └── payments/
├── lib/
│   ├── prisma.ts
│   ├── midtrans.ts
│   └── utils.ts
└── types/
```

## Implementasi Payment Gateway

### Setup Midtrans
1. Daftar di Midtrans (sandbox untuk testing)
2. Dapatkan Server Key dan Client Key
3. Install dependency: `npm install midtrans-client`

### Contoh Flow Pembayaran
1. User pilih tagihan yang mau dibayar
2. User pilih metode pembayaran (QRIS/VA Bank)
3. Sistem create transaction di Midtrans
4. Tampilkan QRIS code atau nomor VA
5. User melakukan pembayaran
6. Midtrans kirim notifikasi via webhook
7. Update status pembayaran di database
8. Kirim email konfirmasi

## Fitur Keamanan
- Password hashing dengan bcrypt
- Protected API routes dengan middleware
- Environment variables untuk sensitive data
- Input validation
- SQL injection prevention (Prisma)
- XSS protection
- CSRF tokens

## Environment Variables
```env
DATABASE_URL="postgresql://..."
NEXTAUTH_SECRET="..."
NEXTAUTH_URL="http://localhost:3000"

# Midtrans
MIDTRANS_SERVER_KEY="..."
MIDTRANS_CLIENT_KEY="..."
MIDTRANS_IS_PRODUCTION=false

# Email
SMTP_HOST="..."
SMTP_PORT="..."
SMTP_USER="..."
SMTP_PASSWORD="..."
```

## Deliverables
1. Full-stack Next.js application
2. Responsive design (mobile-friendly)
3. Admin dashboard dengan analytics
4. User dashboard untuk warga
5. Payment integration yang working
6. Email notification system
7. Database migrations
8. README.md dengan cara setup dan run project
9. .env.example file

## Catatan Tambahan
- Gunakan TypeScript untuk type safety
- Implement proper error handling
- Add loading states untuk UX yang baik
- Responsive design untuk mobile
- Accessible (a11y)
- SEO friendly
- Code comments untuk maintainability

## Prioritas Development
1. Setup project structure & database
2. Authentication system
3. Admin: CRUD bills
4. User: View bills
5. Payment integration (Midtrans)
6. Webhook handling
7. Email notifications
8. Dashboard & reports
9. Testing & refinement
10. Deployment guide

---

Mulai dengan setup Next.js project, install dependencies, dan setup database schema terlebih dahulu. Lalu implementasikan fitur satu per satu sesuai prioritas.
