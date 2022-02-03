# Vue Components for Cardano

This project is a simple Vue3 wrapper plugin for Cardano relevant components.

### Installation

```bash
$ npm install @radflipper/vue-cardano
```
### Component Registration

```js
import { createApp } from 'vue'
import App from './App.vue'
import vueCardano from '@radflipper/vue-cardano'

createApp(App)
  .use(vueCardano, { projectID: "<your-project-id>"})
  .mount('#app')
```