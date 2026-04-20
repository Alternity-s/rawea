# RAWEA – Lingkar Pertiwi Website

Website statis UMKM **RAWEA** oleh **Lingkar Pertiwi** siap deploy ke GitHub Pages.

## 📁 Struktur File

```
rawea/
├── index.html        ← Halaman Beranda
├── products.html     ← Halaman Produk (dengan filter kategori)
├── contact.html      ← Halaman Kontak (form + FAQ + map)
├── assets/
│   ├── style.css     ← Semua styling (shared)
│   └── main.js       ← Semua JavaScript (shared)
└── README.md
```

## 🚀 Deploy ke GitHub Pages

1. Upload semua file ke repository GitHub Anda
2. Masuk ke **Settings → Pages**
3. Pilih branch `main` dan folder `/ (root)`
4. Klik **Save** — situs akan live di `https://username.github.io/nama-repo/`

## 🎨 Panduan Ganti Icon

Semua icon ditandai dengan komentar `<!-- [ICON: NAMA] -->` di dalam HTML.
Cari komentar tersebut untuk menemukan lokasi yang perlu diganti.

### Daftar Icon yang perlu diganti:

| Tag Komentar | Lokasi | Keterangan |
|---|---|---|
| `[ICON: LOGO-MARK]` | Semua halaman (navbar) | Logo utama SVG – ganti dengan logo PNG/SVG final |
| `[ICON: FOOTER-LOGO]` | Semua halaman (footer) | Logo di footer |
| `[ICON: ARROW-RIGHT]` | index.html hero | Ikon panah tombol "Lihat Produk" |
| `[ICON: HERO-MAIN]` | index.html hero | Ilustrasi/gambar produk utama |
| `[ICON: BADGE-ORGANIK]` | index.html hero | Badge "100% Organik" |
| `[ICON: BADGE-DELIVERY]` | index.html hero | Badge "Pengiriman Cepat" |
| `[ICON: MARQUEE-ITEMS]` | Semua halaman | Emoji di teks berjalan |
| `[ICON: WHY-1..4]` | index.html | Ikon keunggulan (organik, petani, kemasan, pengiriman) |
| `[ICON: AVATAR-1..3]` | index.html testimoni | Foto/avatar pelanggan |
| `[ICON: STARS-1]` | index.html testimoni | Ikon bintang rating |
| `[ICON: PROD-IMG-1..9]` | products.html | Foto produk nyata |
| `[ICON: CONTACT-ALAMAT]` | contact.html | Ikon lokasi/alamat |
| `[ICON: CONTACT-TELP]` | contact.html | Ikon telepon |
| `[ICON: CONTACT-EMAIL]` | contact.html | Ikon email |
| `[ICON: CONTACT-JAM]` | contact.html | Ikon jam operasional |
| `[ICON: SEND-BTN]` | contact.html form | Ikon tombol kirim |
| `[ICON: MAP-LARGE]` | contact.html | Ganti placeholder dengan Google Maps embed |
| `[ICON: FAQ-TOGGLE]` | contact.html | Ikon chevron FAQ |
| `[ICON: SOCIAL-FB/IG/TW]` | Semua halaman footer | Ikon media sosial |
| `[ICON: WHATSAPP-FAB]` | Semua halaman | Tombol WA floating (SVG sudah ada, bisa diganti) |
| `[ICON: FLAG-ID]` | Semua halaman footer | Emoji bendera Indonesia |

### Rekomendasi Library Icon Gratis:
- **Heroicons** → https://heroicons.com (MIT License, SVG)
- **Tabler Icons** → https://tabler.io/icons (MIT License, SVG)
- **Lucide** → https://lucide.dev (ISC License, SVG)
- **Phosphor Icons** → https://phosphoricons.com (MIT License, SVG)

### Cara Ganti Foto Produk:
1. Simpan foto produk di folder `assets/products/`
2. Cari komentar `<!-- [ICON: PROD-IMG-x] -->` di dalam `products.html`
3. Ganti seluruh `<div class="prod-img">...</div>` dengan:
   ```html
   <img src="assets/products/nama-foto.jpg" alt="Nama Produk" class="prod-img-real">
   ```

### Cara Ganti Logo:
1. Simpan logo di `assets/logo.svg` atau `assets/logo.png`
2. Cari `<!-- [ICON: LOGO-MARK] -->` di navbar setiap halaman
3. Ganti seluruh blok `<svg class="logo-mark">...</svg>` dengan:
   ```html
   <img src="assets/logo.svg" alt="Logo RAWEA" class="logo-mark">
   ```

### Cara Embed Google Maps:
1. Buka Google Maps → cari alamat Anda → klik "Share" → "Embed a map"
2. Copy kode `<iframe ...>`
3. Di `contact.html`, cari `<!-- [ICON/EMBED: MAP] -->` dan ganti seluruh `<div class="map-placeholder">...</div>` dengan iframe tersebut

## ✏️ Kustomisasi Cepat

### Ganti No. WhatsApp:
Cari `6281234567890` di semua file dan ganti dengan nomor Anda.

### Ganti Warna Brand:
Edit variabel CSS di `assets/style.css` bagian `:root { ... }`:
```css
:root {
  --green-dark: #1a5c2e;  /* Hijau gelap */
  --green-mid:  #2d8a4e;  /* Hijau utama */
  --green-lite: #4dba72;  /* Hijau muda */
  --amber:      #e8a020;  /* Kuning/amber aksen */
  --cream:      #f7f3ec;  /* Background krem */
  --bark:       #2b1f0f;  /* Warna teks gelap */
}
```

### Ganti Harga & Info Produk:
Edit langsung di `products.html` pada bagian `.card-price` dan `.card-title`.
