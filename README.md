# Perpustakaan Digital - Frontend

Kerangka aplikasi SPA Perpustakaan Digital menggunakan Vue.js 3 melalui CDN
dan JavaScript ES Modules, tanpa Node.js dan npm.

**Nama:** Salwa Hanifa Hanum
**NIM:** 240212034
**Mata Kuliah:** Web Development (Full Stack) - Minggu ke-9

## Cara Menjalankan

1. Buka folder project di Visual Studio Code.
2. Instal ekstensi **Live Server**.
3. Klik kanan `index.html`, pilih **Open with Live Server**.
4. Buka `http://127.0.0.1:5500/`.

Project tidak boleh dibuka lewat `file://` karena ES Modules membutuhkan HTTP server.

## Struktur Folder

    perpustakaan-frontend/
    ├── index.html
    ├── assets/css/style.css
    └── src/
        ├── main.js
        ├── components/AppHeader.js
        └── views/
            ├── LoginView.js
            ├── DashboardView.js
            ├── BukuView.js
            ├── AnggotaView.js
            └── AuthorView.js

## Halaman dan Route

| URL | Komponen |
|-----|----------|
| `#/` | Redirect ke `#/login` |
| `#/login` | LoginView |
| `#/dashboard` | DashboardView |
| `#/buku` | BukuView |
| `#/anggota` | AnggotaView |
| `#/author` | AuthorView |

## Penggunaan Vue Router

Vue Router dimuat melalui CDN dan dikonfigurasi di `src/main.js`.

- `createRouter()` membuat router dengan daftar `routes`.
- `createWebHashHistory()` membuat URL berbasis hash (`#/dashboard`), sehingga
  tidak perlu konfigurasi server tambahan.
- Setiap route berisi `path` (alamat) dan `component` (halaman yang tampil).
- `<router-view>` pada template aplikasi utama menjadi tempat halaman ditampilkan.
- `<router-link>` pada `AppHeader` dipakai untuk berpindah halaman tanpa reload.
- `this.$router.push('/dashboard')` dipakai pada halaman Login untuk berpindah
  ke Dashboard setelah form disubmit.
- `app.use(router)` mengaktifkan router pada aplikasi Vue.

Karena navigasi ditangani Vue Router, perpindahan halaman tidak meminta dokumen
HTML baru ke server. Ini terbukti pada tab Network (filter Doc) yang tidak
menunjukkan request HTML baru saat berpindah menu.

## Penggunaan ES Modules

Kode aplikasi dipisah ke beberapa file menggunakan `import` dan `export`.

- Pada `index.html`, `main.js` dimuat dengan `<script type="module">`, sehingga
  browser mendukung `import` dan `export` tanpa Node.js.
- Setiap komponen dan halaman diekspor dengan `export default`.
  Contoh: `export default { name: 'AppHeader', ... }`.
- File lain mengambilnya dengan `import`.
  Contoh: `import AppHeader from '../components/AppHeader.js';`.
- Library Vue dan Vue Router dimuat lewat CDN global, lalu diambil dari
  `window.Vue` dan `window.VueRouter`.
- Urutan script di `index.html` penting: Vue dan Vue Router harus dimuat
  sebelum `main.js`.

## Teknologi

- Vue.js 3 (CDN)
- Vue Router 4 (CDN)
- JavaScript ES Modules
- HTML dan CSS