<template>
  <footer class="footer px-4 mx-2">
    <div class="row align-items-center justify-content-lg-between">
      <div class="col-lg-6">
        <ul class="nav nav-footer">
          <li class="nav-item">
            <a
              href="https://www.creative-tim.com"
              class="nav-link"
              target="_blank"
              rel="noopener"
              >Acerca de INTEC</a
            >
          </li>
          <li class="nav-item">
            <a
              href="https://www.updivision.com"
              class="nav-link"
              target="_blank"
              rel="noopener"
              >Admisiones</a
            >
          </li>
          <li class="nav-item">
            <a
              href="https://www.creative-tim.com/presentation"
              class="nav-link"
              target="_blank"
              rel="noopener"
              >Oferta Académica</a
            >
          </li>
          <li class="nav-item">
            <a
              href="http://blog.creative-tim.com"
              class="nav-link"
              target="_blank"
              rel="noopener"
              >Biblioteca</a
            >
          </li>
        </ul>
      </div>

      <div class="col-lg-6">
        <div class="copyright text-center text-lg-right text-muted">
          © {{ year }}, Consejería Académica | <a
            href="https://www.intec.edu.do/"
            class="font-weight-bold ml-1"
            target="_blank"
            rel="noopener" >INTEC</a>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
};
</script>
<style></style>
