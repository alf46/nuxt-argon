<template>
  <base-nav
    container-classes="container-fluid"
    class="navbar-top border-bottom navbar-expand"
    :class="{ 'bg-success navbar-dark': type === 'default' }"
  >
    <!-- Search form -->
    <form
      class="navbar-search form-inline mr-sm-3"
      :class="{
        'navbar-search-light': type === 'default',
        'navbar-search-dark': type === 'light',
      }"
      id="navbar-search-main"
    >
      <div class="form-group mb-0">
        <div class="input-group input-group-alternative input-group-merge">
          <div class="input-group-prepend">
            <span class="input-group-text"><i class="fas fa-search"></i></span>
          </div>
          <input class="form-control" placeholder="Buscar" type="text" />
        </div>
      </div>
      <button
        type="button"
        class="close"
        data-action="search-close"
        data-target="#navbar-search-main"
        aria-label="Close"
      >
        <span aria-hidden="true">×</span>
      </button>
    </form>
    <!-- Navbar links -->
    <ul class="navbar-nav align-items-center ml-md-auto">
      <li class="nav-item d-xl-none">
        <!-- Sidenav toggler -->
        <div
          class="pr-3 sidenav-toggler"
          :class="{
            active: $sidebar.showSidebar,
            'sidenav-toggler-dark': type === 'default',
            'sidenav-toggler-light': type === 'light',
          }"
          @click="toggleSidebar"
        >
          <div class="sidenav-toggler-inner">
            <i class="sidenav-toggler-line"></i>
            <i class="sidenav-toggler-line"></i>
            <i class="sidenav-toggler-line"></i>
          </div>
        </div>
      </li>
      <li class="nav-item d-sm-none">
        <a
          class="nav-link"
          href="#"
          data-action="search-show"
          data-target="#navbar-search-main"
        >
          <i class="ni ni-zoom-split-in"></i>
        </a>
      </li>
      <base-dropdown
        class="nav-item"
        tag="li"
        title-classes="nav-link"
        title-tag="a"
        icon="ni ni-bell-55"
        menu-classes="dropdown-menu-xl dropdown-menu-right py-0 overflow-hidden"
      >
        <template>
          <!-- Dropdown header -->
          <div class="px-3 py-3">
            <h6 class="text-sm text-muted m-0">
              Usted tiene <strong class="text-primary">13</strong> Notificaciones.
            </h6>
          </div>
          <!-- List group -->
          <div class="list-group list-group-flush">
            <a href="#!" class="list-group-item list-group-item-action">
              <div class="row align-items-center">
                <div class="col-auto">
                  <!-- Avatar -->
                  <img
                    alt="Image placeholder"
                    src="/img/theme/ima03.jpg"
                    class="avatar rounded-circle"
                  />
                </div>
                <div class="col ml--2">
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <div>
                      <h4 class="mb-0 text-sm">Carmen Contreras</h4>
                    </div>
                    <div class="text-right text-muted">
                      <small>2 hrs ago</small>
                    </div>
                  </div>
                  <p class="text-sm mb-0">
                   Una asignatura fue retira
                  </p>
                </div>
              </div>
            </a>
            <a href="#!" class="list-group-item list-group-item-action">
              <div class="row align-items-center">
                <div class="col-auto">
                  <!-- Avatar -->
                  <img
                    alt="Image placeholder"
                    src="/img/theme/team-1.jpg"
                    class="avatar rounded-circle"
                  />
                </div>
                <div class="col ml--2">
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <div>
                      <h4 class="mb-0 text-sm">Pedro Vargas</h4>
                    </div>
                    <div class="text-right text-muted">
                      <small>3 hrs ago</small>
                    </div>
                  </div>
                  <p class="text-sm mb-0">
                   Se reportó una medida disciplinaria
                  </p>
                </div>
              </div>
            </a>
            <a href="#!" class="list-group-item list-group-item-action">
              <div class="row align-items-center">
                <div class="col-auto">
                  <!-- Avatar -->
                  <img
                    alt="Image placeholder"
                    src="/img/theme/team-3.jpg"
                    class="avatar rounded-circle"
                  />
                </div>
                <div class="col ml--2">
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <div>
                      <h4 class="mb-0 text-sm">Erida Pacheco</h4>
                    </div>
                    <div class="text-right text-muted">
                      <small>5 hrs ago</small>
                    </div>
                  </div>
                  <p class="text-sm mb-0">Asignatura reprobada.</p>
                </div>
              </div>
            </a>
            <a href="#!" class="list-group-item list-group-item-action">
              <div class="row align-items-center">
                <div class="col-auto">
                  <!-- Avatar -->
                  <img
                    alt="Image placeholder"
                    src="/img/theme/team-4.jpg"
                    class="avatar rounded-circle"
                  />
                </div>
                <div class="col ml--2">
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <div>
                      <h4 class="mb-0 text-sm">Adamilca Rodriguez</h4>
                    </div>
                    <div class="text-right text-muted">
                      <small>2 hrs ago</small>
                    </div>
                  </div>
                  <p class="text-sm mb-0">
                    Cambio de índice académico
                  </p>
                </div>
              </div>
            </a>
            <a href="#!" class="list-group-item list-group-item-action">
              <div class="row align-items-center">
                <div class="col-auto">
                  <!-- Avatar -->
                  <img
                    alt="Image placeholder"
                    src="/img/theme/ima06.jpg"
                    class="avatar rounded-circle"
                  />
                </div>
                <div class="col ml--2">
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <div>
                      <h4 class="mb-0 text-sm">Maria Berroa</h4>
                    </div>
                    <div class="text-right text-muted">
                      <small>3 hrs ago</small>
                    </div>
                  </div>
                  <p class="text-sm mb-0">
                    Cambio de índice académico
                  </p>
                </div>
              </div>
            </a>
          </div>
          <!-- View all -->
          <a
            href="#!"
            class="dropdown-item text-center text-primary font-weight-bold py-3"
            >View all</a
          >
        </template>
      </base-dropdown>
    </ul>
    <ul class="navbar-nav align-items-center ml-auto ml-md-0">
      <base-dropdown
        menu-on-right
        class="nav-item"
        tag="li"
        title-tag="a"
        title-classes="nav-link pr-0"
      >
        <a href="#" class="nav-link pr-0" @click.prevent slot="title-container">
          <div class="media align-items-center">
            <span
              class="avatar avatar-sm rounded-circle avatar-image"
              :style="{
                'background-image': `url('${profileImage}')`,
              }"
            >
            </span>
            <div class="media-body ml-2 d-none d-lg-block">
              <span class="mb-0 text-sm font-weight-bold">{{
               'Juan Pérez'
              }}</span>
            </div>
          </div>
        </a>

        <template>
          <div class="dropdown-header noti-title">
            <h6 class="text-overflow m-0">juan.perez@intec.edu.do</h6>
            <div class="text-left text-muted"><small>5 hrs ago</small></div>
          </div>
          <nuxt-link
            :to="{ name: 'examples-user-profile' }"
            class="dropdown-item">
            <i class="ni ni-sound-wave"></i>
            <span>Ajustes</span>
          </nuxt-link>
           <nuxt-link
            :to="{ name: 'examples-user-profile' }"
            class="dropdown-item"
          >
            <i class="ni ni-bullet-list-67"></i>
            <span>Editar</span>
          </nuxt-link>
            <div class="text-center text-muted">
                    <badge class="badge-dot mr-4" type="">
                        <i class="bg-success"></i>
                        <small>profesor-consejero</small>
                    </badge>
              </div>
          <div class="dropdown-divider"></div>
          <a @click.prevent="logout()" to="" class="dropdown-item">
            <i class="ni ni-user-run"></i>
          <base-button size="sm" type="neutral">Salir</base-button>
          </a>
        </template>
      </base-dropdown>
    </ul>
  </base-nav>
</template>
<script>
import { CollapseTransition } from "vue2-transitions";
import BaseNav from "@/components/argon-core/Navbar/BaseNav.vue";
import Modal from "@/components/argon-core/Modal.vue";
import { pick, merge } from "lodash";

export default {
  components: {
    CollapseTransition,
    BaseNav,
    Modal,
  },
  props: {
    type: {
      type: String,
      default: "default", // default|light
      description:
        "Look of the dashboard navbar. Default (Green) or light (gray)",
    },
  },
  computed: {
    routeName() {
      const { name } = this.$route;
      return this.capitalizeFirstLetter(name);
    },
    profileImage() {
      return "/img/profesor.jpg";
    },
  },
  data() {
    return {
      activeNotifications: false,
      showMenu: false,
      searchModalVisible: false,
      searchQuery: "",
    };
  },
  methods: {
    capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
    toggleNotificationDropDown() {
      this.activeNotifications = !this.activeNotifications;
    },
    closeDropDown() {
      this.activeNotifications = false;
    },
    toggleSidebar() {
      this.$sidebar.displaySidebar(!this.$sidebar.showSidebar);
    },
    hideSidebar() {
      this.$sidebar.displaySidebar(false);
    },
    async logout() {
      try {
      } catch (error) {
        this.$toast.error(error.response.message);
      }
    },
  },
};
</script>
