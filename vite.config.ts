import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
// import nes from "nes.css";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  // build : {
  //   rollupOptions : {
  //     output : {
  //       globals : {
  //         'nes.css' : nes
  //       }
  //     }
  //   }
  // }
})
