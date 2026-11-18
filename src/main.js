/* 1. Mengimpor halaman aplikasi */
import LoginView from './views/LoginView.js';
import DashboardView from './views/DashboardView.js';
import BukuView from './views/BukuView.js';
import AnggotaView from './views/AnggotaView.js';
import AuthorView from './views/AuthorView.js';

/* 2. Mengambil fungsi Vue dari CDN */
const { createApp } = window.Vue;

/* 3. Mengambil fungsi Vue Router dari CDN */
const { createRouter, createWebHashHistory } = window.VueRouter;

/* 4. Mendefinisikan daftar route */
const routes = [
    { path: '/', redirect: '/login' },
    { path: '/login', component: LoginView },
    { path: '/dashboard', component: DashboardView },
    { path: '/buku', component: BukuView },
    { path: '/anggota', component: AnggotaView },
    { path: '/author', component: AuthorView }
];

/* 5. Membuat konfigurasi router */
const router = createRouter({
    history: createWebHashHistory(),
    routes
});

/* 6. Membuat aplikasi Vue */
const app = createApp({
    name: 'PerpustakaanApp',
    template: `<router-view></router-view>`
});

/* 7. Mengaktifkan Vue Router */
app.use(router);

/* 8. Memasang aplikasi ke HTML */
app.mount('#app');