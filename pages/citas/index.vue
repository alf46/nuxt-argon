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
              <h3 class="mb-0">Gestión de citas</h3>
            </div>
            <div class="col-6 text-right">
              <base-button type="primary" size="sm" @click="onProFeature">
                 <i class="fas fa-plus-circle"></i>
                <span class="btn-inner--text">Crear Cita</span>
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

            <el-table-column
              label="Motivo"
              min-width="120px"
              prop="reason"
              sortable/>

            <el-table-column
              label="Fecha"
              prop="date"
              min-width="100px"
              sortable/>

            <el-table-column
                    label="Estudiante"
                    min-width="120px"
                    sortable>
              <template v-slot="{row}">
                    <nuxt-link :to="`/estudiantes/${row.studentId}`">
                      <div class="media-body text-muted">
                          <span class="font-weight-600 name mb-0 text-sm">{{row.studentName}}</span>
                      </div>
                    </nuxt-link>
              </template>
            </el-table-column>

             <el-table-column
                    label="Estado"
                    min-width="120px"
                    sortable>
              <template v-slot="{row}">

                <span v-if="row.status==true" 
                    class="badge badge-info">Completada
                </span>

                <span v-if="row.status==false" 
                    class="badge badge-success">Pendiente 
                </span>

              </template>
            </el-table-column>
           
            <el-table-column
                    min-width="80px">
              <template v-slot="{row}">

                <span v-if="row.virtual==true" 
                    class="badge badge-info">Virtual
                </span>

                <span v-if="row.virtual==false" 
                    class="badge badge-warning">Presencial 
                </span>

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
              Mostrando  {{ from + 1 }} a {{ to }} de {{ total }} citas

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
      users: [],
      sort: "date",

      pagination: {
        perPage: 5,
        currentPage: 1,
        perPageOptions: [5, 10, 25, 50],
      },

      total: 2,
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

  created() {
    this.getList();
  },

  methods: {
    getList() {
      this.users = [
        {
            id: '1',
            reason: 'Ambientación institucional',
            date: 'marzo 2, 2021',
            studentId: '10000232',
            studentName: 'Santa Brioso',
            virtual: true,
            status: false
        },
        {
            id: '2',
            reason: 'Duda de carrera',
            date: 'enero 14, 2021',
            studentId: '10000231',
            studentName: 'Oscar Pellerano',
            virtual: false,
            status: true
        }
      ];
    },
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
      this.getList();
    },
  },
};
</script>
