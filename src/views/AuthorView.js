import AppHeader from '../components/AppHeader.js';

export default {
  name: 'AuthorView',

  components: {
    AppHeader
  },

  template: `
    <div class="dashboard-page">
      <AppHeader />

      <main class="content">
        <h1>Data Author</h1>
        <p class="welcome">
          Halaman pengelolaan data penulis buku.
        </p>

        <section class="panel">
          <h2>Daftar Author</h2>
          <p>
            Data author akan diambil dari Laravel API
            pada pertemuan berikutnya.
          </p>
        </section>
      </main>
    </div>
  `
};