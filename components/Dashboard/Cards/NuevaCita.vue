<template>
  <div class="card">
    <div class="card-header">
      <h1>Nueva Cita</h1>
    </div>
    <div class="card-body">
      <form ref="profile_form" @submit.prevent="handleProfileUpdate">

        <base-input
          label="Motivo"
          prepend-icon="ni ni-align-left-2"
          placeholder="¿Porque quieres tener una cita con este estudiante?"
          v-model="cita.motivo"/>
        <validation-error :errors="apiValidationErrors.motivo" />
        
        <div class="my-4">
          <base-button type="button"  class="btn btn-sm btn-primary"
                       native-type="submit">Crear
          </base-button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import BaseInput from "~/components/argon-core/Inputs/BaseInput.vue";
import BaseButton from "~/components/argon-core/BaseButton.vue";
import formMixin from "@/mixins/form-mixin";
import ValidationError from "~/components/ValidationError.vue";

export default {
  name: "NuevaCita",
  components: {
    BaseInput,
    BaseButton,
    ValidationError,
  },

  mixins: [formMixin],

  props: {
    cita: { 
      type: Object,
      default: {
        motivo: '',
      }
    }
  },

  methods: {
    async handleProfileUpdate() {
      console.log('cita', this.cita);
    },
  },
};
</script>