import { defineAsyncComponent } from 'vue'

export const layoutComponents = {
  "404": defineAsyncComponent(() => import("/home/radflipper721/cardano-cardz-dir/vue-cardano/node_modules/@vuepress/theme-default/lib/client/layouts/404.vue")),
  "Layout": defineAsyncComponent(() => import("/home/radflipper721/cardano-cardz-dir/vue-cardano/node_modules/@vuepress/theme-default/lib/client/layouts/Layout.vue")),
}