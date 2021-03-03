<template>
  <div class="container-fluid mt-5">
    <div>
      <card
        class="no-border-card"
        body-classes="px-0 pb-1"
        footer-classes="pb-2"
      >
        <template slot="header">
          <div class="row">
            <div class="col-6">
              <h3 class="mb-0">Listado de estudiantes</h3>
            </div>
            <div class="col-6 text-right">
              <base-button type="primary" icon size="sm" @click="onProFeature">
                <span class="btn-inner--icon"
                  ><i class="fas fa-user-edit"></i
                ></span>
                <span class="btn-inner--text">Add User</span>
              </base-button>
            </div>
          </div>
        </template>
        <div>
          <div
            class="col-12 d-flex justify-content-center justify-content-sm-between flex-wrap mb-4"
          >
            <el-select
              class="select-primary pagination-select"
              v-model="pagination.perPage"
              placeholder="Per page"
            >
              <el-option
                class="select-primary"
                v-for="item in pagination.perPageOptions"
                :key="item"
                :label="item"
                :value="item"
              />
            </el-select>
          </div>
          <el-table
            class="table-responsive align-items-center table-flush"
            header-row-class-name="thead-light"
            :data="users"
            @sort-change="sortChange"
          >
            <el-table-column label="Código"
                             min-width="90px"
                             sortable>
                <template v-slot="{row}">
                    <nuxt-link :to="`/estudiantes/${row.id}`">
                      <div class="media-body text-muted">
                          <span class="font-weight-600 name mb-0 text-sm">{{row.id}}</span>
                      </div>
                    </nuxt-link>
                </template>
            </el-table-column>

            <el-table-column label="Nombre"
                             min-width="130px"
                             sortable>
                <template v-slot="{row}">
                    <nuxt-link :to="`/estudiantes/${row.id}`">
                      <div class="media-body text-muted">
                          <span class="font-weight-600 name mb-0 text-sm">{{row.title}}</span>
                      </div>
                    </nuxt-link>
                </template>
            </el-table-column>

            <el-table-column
              label="Carrera"
              prop="program"
              min-width="100px"
              sortable/>

            <el-table-column
                    label="Condición"
                    prop="condicion"
                    min-width="120px"
                    sortable>
              <template v-slot="{row}">

                <span v-if="row.condicion==true" 
                    class="badge badge-info">Normal
                </span>

                <span v-if="row.condicion==false" 
                    class="badge badge-success">Prueba Académica 
                </span>

              </template>
            </el-table-column>

             <el-table-column label="Alerta"
                             min-width="90px"
                             prop="status"
                             sortable>
                <template v-slot="{row}">
                    <badge class="badge-dot mr-4">
                        <i :class="`bg-${row.statusType}`"></i>
                        <span class="status text-dark">{{row.status}}</span>
                    </badge>
                </template>
            </el-table-column>

             <el-table-column label="Cursos Aprobados"
                             prop="completion"
                             min-width="150px"
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
        <div
          slot="footer"
          class="col-12 d-flex justify-content-center justify-content-sm-between flex-wrap"
        >
          <div class="">
            <p class="card-category">
              Mostrando {{ from + 1 }} a {{ to }} de {{ total }} estudiantes

              <span v-if="selectedRows.length">
                &nbsp; &nbsp; {{ selectedRows.length }} rows selected
              </span>
            </p>
          </div>
          <base-pagination
            class="pagination-no-border"
            v-model="pagination.currentPage"
            :per-page="pagination.perPage"
            :total="total"
          />
        </div>
      </card>
    </div>
  </div>
</template>
<script>
import { BasePagination } from "@/components/argon-core";
import projects from '../../components/tables/projects';
import {
  Table,
  TableColumn,
  DropdownMenu,
  DropdownItem,
  Dropdown,
  Tooltip,
  Select,
  Option,
  Button,
} from "element-ui";

export default {
  layout: "DashboardLayout",
  components: {
    BasePagination,
    [Tooltip.name]: Tooltip,
    [Table.name]: Table,
    [TableColumn.name]: TableColumn,
    [Dropdown.name]: Dropdown,
    [DropdownItem.name]: DropdownItem,
    [DropdownMenu.name]: DropdownMenu,
    [Select.name]: Select,
    [Option.name]: Option,
    [Button.name]: Button,
  },

  data() {
    return {
      selectedRows: [],
      users: projects,
      sort: "id",

      pagination: {
        perPage: 5,
        currentPage: 1,
        perPageOptions: [5, 10, 25, 50],
      },

      total: 9,
    };
  },
  computed: {
    from() {
      return this.pagination.perPage * (this.pagination.currentPage - 1);
    },

    to() {
      let highBound = this.from + this.pagination.perPage;
      if (this.total < highBound) {
        highBound = this.total;
      }
      return highBound;
    },
  },

  methods: {
    onProFeature() {
      this.$notify({
        type: "danger",
        message: "This is a PRO feature.",
      });
    },
    sortChange({ prop, order }) {
      if (order === "descending") {
        this.sort = `-${prop}`;
      } else {
        this.sort = `${prop}`;
      }
    },
  },
};
</script>