import { createApp } from 'vue';
import App from './App.vue';
import components from './components/ui/';
import PrimeVue from 'primevue/config';
const app = createApp(App);

components.forEach((component) => {
  app.component(component.name, component);
});

app.use(PrimeVue).mount('#app');
