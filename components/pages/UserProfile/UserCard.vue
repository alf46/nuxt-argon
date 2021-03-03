<template>
  <div class="card card-profile">
    <img src="/img/theme/background3.jpeg" alt="Image placeholder" class="card-img-top">

    <div class="row justify-content-center">
      <div class="col-lg-3 order-lg-2">
        <div class="card-profile-image">
          <a href="#">
            <img :src="`${user.img}`" class="rounded-circle">
          </a>
        </div>
      </div>
    </div>

    <div class="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
      <div class="d-flex justify-content-between">
        <nuxt-link :to="`/citas/${user.id}`" class="btn btn-sm btn-info mr-4">Cita</nuxt-link>
        <a href="#" class="btn btn-sm btn-default float-right">Email</a>
      </div>
    </div>

    <div class="card-body pt-0">
      <div class="row">
        <div class="col">
          <div class="card-profile-stats d-flex justify-content-center">
            <div>
              <span class="heading">1.87</span>
              <span class="description">Índice Trimestral</span>
            </div>
            <div>
              <span class="heading">3.47</span>
              <span class="description">Índice General</span>
            </div>
            <div>
              <span class="heading">4</span>
              <span class="description">Trimestres</span>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center">
        <h5 class="h3">
          {{user.title}}<span class="font-weight-light">, <small>{{user.id}}</small></span>
        </h5>
        <div class="h5 font-weight-300">
          <i class="ni location_pin mr-2"></i>{{user.program}}, INTEC
        </div>
    
        <div class="h5 mt-4">
          <i class="ni business_briefcase-24 mr-2"></i>Ingreso
        </div>
        <div>
          <i class="ni education_hat mr-2"></i>FEBRERO - ABRIL 2010
        </div>
      </div>
      <div class="dropdown-divider"></div>
      <div class="text-left">
         <a href="https://www.intec.edu.do/"
            target="_blank"
            class="btn btn-sm btn-danger btn-icon mx-sm-5 mb-2 d-none d-md-block">
            <span class="btn-inner--icon"><i class="fas fa-download mr-2"></i></span>
            <span class="nav-link-inner--text">Historial Académico según pensum</span>
          </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    user: Object,
  } 
};
</script>