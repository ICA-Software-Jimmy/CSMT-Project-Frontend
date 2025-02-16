import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap";
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'datatables.net-bs5/css/dataTables.bootstrap5.min.css';
import 'datatables.net-bs5';
import PrimeVue from 'primevue/config';


const app = createApp(App);

app.use(router);
app.use(PrimeVue);


app.mount('#app'); 
