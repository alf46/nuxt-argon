<template>
    <div class="card bg-default shadow">
        <div class="card-header bg-transparent border-0">
            <h3 class="mb-0 text-white">TOP 5</h3>
        </div>

        <el-table class="table-responsive table-dark"
                  header-row-class-name="thead-dark"
                  :data="students">
            <el-table-column label="Nombre"
                             min-width="250px"
                             prop="name"
                             sortable>
                <template v-slot="{row}">
                    <div class="media align-items-center">
                            <div class="avatar rounded-circle mr-3">
                                <img alt="Image placeholder" :src="row.img">
                            </div>
                            <nuxt-link :to="`/estudiantes/${row.id}`">
                                <div class="media-body text-white">
                                    <span class="font-weight-600 name mb-0 text-sm">{{row.title}}</span>
                                </div>
                            </nuxt-link>
                    </div>
                </template>
            </el-table-column>
            <el-table-column label="Alerta"
                             min-width="170px"
                             prop="status"
                             sortable>
                <template v-slot="{row}">
                    <badge class="badge-dot mr-4">
                        <i :class="`bg-${row.statusType}`"></i>
                        <span class="status">{{row.status}}</span>
                    </badge>
                </template>
            </el-table-column>
            <el-table-column label="Cursos Aprobados"
                             prop="completion"
                             min-width="205px"
                             sortable>
                <template v-slot="{row}">
                    <div class="d-flex align-items-center">
                        <span class="completion mr-2">{{row.completion}}%</span>
                        <div>
                            <base-progress :type="row.statusType2" :value="row.completion"/>
                        </div>
                    </div>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
  import projects from './../projects'
  import { Table, TableColumn, DropdownMenu, DropdownItem, Dropdown} from 'element-ui'
  export default {
    name: 'light-table',
    components: {
      [Table.name]: Table,
      [TableColumn.name]: TableColumn,
      [Dropdown.name]: Dropdown,
      [DropdownItem.name]: DropdownItem,
      [DropdownMenu.name]: DropdownMenu,
    },
    data() {
      const students = projects.slice(0, 5);
      return {
        students,
        currentPage: 1
      };
    }
  }
</script>

<style scoped>
.cap {
    text-transform: capitalize;
}
</style>
