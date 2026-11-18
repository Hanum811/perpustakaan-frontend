import AppHeader from '../components/AppHeader.js';

export default {
  name: 'AnggotaView',

  components: {
    AppHeader
  },

  template: `
    <div class="dashboard-page">
      <AppHeader />

      <main class="content">
        <h1>Data Anggota</h1>
        <p class="welcome">
          Halaman pengelolaan data anggota perpustakaan.
        </p>

        <section class="panel">
          <h2>Daftar Anggota</h2>
          <p>
            Data anggota akan diambil dari Laravel API
            pada pertemuan berikutnya.
          </p>
        </section>
      </main>
    </div>
  `
};