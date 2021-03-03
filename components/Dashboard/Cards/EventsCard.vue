<template>
 <div class="card bg-default shadow">
        <div class="card-header bg-transparent border-0">
            <h3 class="mb-0 text-white">Eventos en Bitácora</h3>
        </div>

        <el-table class="table-responsive table-dark"
                  header-row-class-name="thead-dark"
                  :data="events">
            
            <el-table-column label="Tipo"
                    min-width="80px"
                    sortable>
                <template v-slot="{row}">
                  <small><strong class="text-muted">{{row.type}}</strong></small>
                </template>
            </el-table-column>

            <el-table-column
              label="Descripción"
              prop="description"
              min-width="190px"
              sortable/>

            <el-table-column label="Tipo"
                    min-width="80px"
                    sortable>
                <template v-slot="{row}">
                  <small><em class="text-muted">{{row.date}}</em></small>
                </template>
            </el-table-column>

        </el-table>
    </div>
</template>
<script>
import BaseInput from "~/components/argon-core/Inputs/BaseInput.vue";
import BaseButton from "~/components/argon-core/BaseButton.vue";
import formMixin from "@/mixins/form-mixin";
import ValidationError from "~/components/ValidationError.vue";
import events from '../../tables/events';
import { Table, TableColumn, DropdownMenu, DropdownItem, Dropdown} from 'element-ui'

export default {
  name: "EventsCard",

  components: {
    [Table.name]: Table,
    [TableColumn.name]: TableColumn,
    [Dropdown.name]: Dropdown,
    [DropdownItem.name]: DropdownItem,
    [DropdownMenu.name]: DropdownMenu,
    BaseInput,
    BaseButton,
    ValidationError,
  },

  mixins: [formMixin],

  props: {
    user: Object,
  },

  data() {
    return {
      events,
      password: null,
      password_new: null,
      password_confirmation: null,
    };
  }
};
</script>