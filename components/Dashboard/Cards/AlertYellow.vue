<template>
  <div class="card">
    <div class="card-header">
      <div class="row">
        <div class="col">
          <h1 class="text-yellow">Alerta Amarilla</h1>
          <span class="h2 font-weight-bold text-muted mb-0">Estudiante en Condición de Riesgo</span
          >
        </div>
        <div class="icon icon-shape bg-gradient-yellow text-white rounded-circle shadow mb-4">
          <i class="ni ni-sound-wave"></i>
        </div>
      </div>
    </div>
    <div class="card-body">
       <ul class="list-unstyled ">
                <li class="py-2">
                  <div class="d-flex align-items-center">
                    <div>
                      <div class="badge badge-circle badge-warning mr-3">
                        <i class="ni ni-settings-gear-65"></i>
                      </div>
                    </div>
                    <div>
                      <h4 class="mb-0 text-muted">Condicion Observada
                        <strong class="text-warning">1.87</strong>
                          <small><em class="text-muted">|</em></small>
                        <strong class="text-green2">2.03</strong>
                        <badge class="badge-dot mr-4">
                          <small><em class="text-muted">primera vez</em></small>
                        </badge>
                      </h4>
                    </div>
                  </div>
                </li>
                 <li class="py-2">
                  <div class="d-flex align-items-center">
                    <div>
                      <div class="badge badge-circle badge-warning mr-3">
                        <i class="ni ni-satisfied"></i>
                      </div>
                    </div>
                    <div>
                      <h4 class="mb-0 text-muted"><strong><small>Reprobada: </small></strong> MAT-014</h4>
                    </div> 
                  </div>
                </li>
              </ul>
      <badge class="badge-dot mr-4" type="">
        <i class="bg-green2"></i>
        <small>verde</small>
        <i class="bg-warning"></i>
        <small>amarilla</small>
        <i class="bg-success"></i>
        <small>roja</small>
      </badge>
    </div>
  </div>
</template>
<script>
import BaseInput from "~/components/argon-core/Inputs/BaseInput.vue";
import BaseButton from "~/components/argon-core/BaseButton.vue";
import formMixin from "@/mixins/form-mixin";
import ValidationError from "~/components/ValidationError.vue";

export default {
  name: "AlertYellow",

  components: {
    BaseInput,
    BaseButton,
    ValidationError,
  },
  props:{

  },

  mixins: [formMixin],

  methods: {
    async handleProfileUpdate() {
      if (["1", "2", "3"].includes(this.user.id)) {
        await this.$notify({
          type: "danger",
          message: "You are not allowed not change data of default users.",
        });
        return;
      }
      try {
        await this.$store.dispatch("profile/update", this.user);
        this.unsetApiValidationErrors();

        this.$notify({
          type: "success",
          message: "Profile updated successfully.",
        });
        await this.$store.getters["profile/me"];
      } catch (error) {
        this.$notify({
          type: "danger",
          message: "Oops, something went wrong!",
        });
        this.setApiValidation(error.response.data.errors);
      }
    },
  },
};
</script>