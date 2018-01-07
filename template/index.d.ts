import Vue from 'vue'
import { Store } from 'vuex'
import Toasted from 'vue-toasted'

declare module 'vue/types/vue' {
  interface Vue {
    $toast: Toasted
    $store: Store<any>
  }
}

declare module '*.vue' {
  const _default: Vue;
  export default _default;
}
