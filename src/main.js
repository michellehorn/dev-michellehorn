import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import './assets/style.scss'
import '@fortawesome/fontawesome-free/css/fontawesome.css'
import '@fortawesome/fontawesome-free/css/solid.css'
import '@fortawesome/fontawesome-free/css/brands.css'
import firebase from 'firebase';
import { firebaseConfig } from '../src/firebase.config.js';


firebase.initializeApp(firebaseConfig);

Vue.use(BootstrapVue)
Vue.config.productionTip = false
new Vue({
    router,
    render: h => h(App)
}).$mount('#app')