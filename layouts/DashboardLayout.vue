<template>
  <div class="wrapper">
    <side-bar>
      <template slot="links">
        <sidebar-item
          :link="{
            name: 'Dashboard',
            icon: 'fas fa-home text-primary',
            path: '/dashboard'
          }">
        </sidebar-item>

        <sidebar-item
          :link="{
            name: 'Control de usuario',
            icon: 'ni ni-circle-08',
          }"
        >
          <sidebar-item
            :link="{ name: 'Perfil de Usuario', path: '/examples/user-profile' }" />
          <sidebar-item
            :link="{
              name: 'Usuarios',
              path: '/examples/user-management',
            }"/>
        </sidebar-item>

        <sidebar-item :link="{ name: 'Icons', path: '/components/icons', icon: 'ni ni-planet' }"/>
        <sidebar-item :link="{
                        name: 'Tables',
                        icon: 'ni ni-align-left-2 text-default',
                        path: '/tables/regular'}">
        </sidebar-item>

      <div class="dropdown-divider"></div>
      <a href="https://www.creative-tim.com/product/nuxt-argon-dashboard-pro-laravel"
        target="_blank"
        class="btn btn-sm btn-danger btn-icon mx-sm-5 mb-2 d-none d-md-block">
        <span class="btn-inner--icon"><i class="fas fa-download mr-2"></i></span>
        <span class="nav-link-inner--text">Calendario Académico</span></a>

      <a href="https://nuxt-argon-dashboard-laravel.creative-tim.com/documentation/"
        target="_blank"
        class="btn btn-sm btn-neutral btn-icon mx-sm-5 mb-2 d-none d-md-block"
        ><span class="btn-inner--icon"><i class="fas fa-file-alt"></i></span>
        <span class="nav-link-inner--text">Historial según pensum</span></a>

      <a href="https://www.creative-tim.com/product/nuxt-argon-dashboard-laravel"
        target="_blank" class="btn btn-sm btn-info btn-icon mx-sm-5 mb-2 d-none d-md-block">
        <span class="btn-inner--icon"><i class="ni ni-hat-3"></i></span>
        <span class="nav-link-inner--text">Reglamento Académico</span></a>

      <a href="https://github.com/creativetimofficial/nuxt-argon-dashboard-laravel"
        target="_blank" class="btn btn-sm btn-dark btn-icon mx-sm-5 mb-2 d-none d-md-block">
        <span class="btn-inner--icon"><i class="ni ni-building"></i></span>
        <span class="nav-link-inner--text">Sistema de Apoyo a la Permanencia</span></a>

      </template>
    </side-bar>
    <div class="main-content">
      <dashboard-navbar
        :type="$route.name === 'alternative' ? 'light' : 'default'"
      ></dashboard-navbar>

      <div @click="$sidebar.displaySidebar(false)">
        <nuxt></nuxt>
      </div>
      <content-footer v-if="!$route.meta.hideFooter"></content-footer>
    </div>
  </div>
</template>
<script>
/* eslint-disable no-new */
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";

// function hasElement(className) {
//   return document.getElementsByClassName(className).length > 0;
// }

// function initScrollbar(className) {
//   if (hasElement(className)) {
//     new PerfectScrollbar(`.${className}`);
//   } else {
//     // try to init it later in case this component is loaded async
//     setTimeout(() => {
//       initScrollbar(className);
//     }, 100);
//   }
// }

import DashboardNavbar from "~/components/layouts/argon/DashboardNavbar.vue";
import ContentFooter from "~/components/layouts/argon/ContentFooter.vue";
import DashboardContent from "~/components/layouts/argon/Content.vue";
import Vuex from "vuex";

export default {
  components: {
    DashboardNavbar,
    ContentFooter,
    DashboardContent,
  }}
//   methods: {
//     initScrollbar() {
//       let isWindows = navigator.platform.startsWith("Win");
//       if (isWindows) {
//         initScrollbar("scrollbar-inner");
//       }
//     },
//   },
//   mounted() {
//     this.initScrollbar(), this.$store.dispatch("profile/me");
//   },
// };
</script>
<style lang="scss">
</style>
