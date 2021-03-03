<template>
  <div class="card bg-gray-200">
    <div class="card-header">
      <div class="row">
        <div class="col">
          <h1 class="text-green2">Alerta Verde</h1>
          <span class="h2 font-weight-bold text-muted mb-0">Estudiante en Condición Normal</span
          >
        </div>
        <div class="icon icon-shape bg-gradient-green2 text-white rounded-circle shadow mb-4">
          <i class="ni ni-like-2"></i>
        </div>
      </div>
    </div>
    <div class="card-body">
       <ul class="list-unstyled ">
                <li class="py-2">
                  <div class="d-flex align-items-center">
                    <div>
                      <div class="badge badge-circle badge-info mr-3">
                        <i class="ni ni-check-bold"></i>
                      </div>
                    </div>
                    <div>
                      <h4 class="mb-0 text-muted">Índice Académico
                        <strong class="text-green2">2.87</strong>
                      </h4>
                    </div>
                  </div>
                </li>
                 <li class="py-2">
                  <div class="d-flex align-items-center">
                    <div>
                      <div class="badge badge-circle badge-info mr-3">
                        <i class="ni ni-pin-3"></i>
                      </div>
                    </div>
                    <div>
                      <h4 class="mb-0 text-muted"><strong><small>Nuevo ingreso</small></strong></h4>
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
  name: "AlertGreen",

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