<template>
  <div>
    <base-header class="pb-6">
      <div class="row align-items-center py-4">
        <div class="col-lg-6 col-7">
          <h6 class="h2 text-white d-inline-block mb-0">Default</h6>
          <nav aria-label="breadcrumb" class="d-none d-md-inline-block ml-md-4">
            <route-breadcrumb></route-breadcrumb>
          </nav>
        </div>
        <div class="col-lg-6 col-5 text-right">
          <base-button size="sm" type="neutral">Cita</base-button>
          <base-button size="sm" type="neutral">Email</base-button>
        </div>
      </div>
      <!-- Card stats -->
      <div class="row">

        <div class="col-xl-3 col-md-6">
          <stats-card title="Asignados"
                      type="gradient-green2"
                      sub-title="147"
                      icon="ni ni-books">

            <template slot="footer">
               <div class="text-left text-muted"><small>46.00%</small></div>
               <div class="progress" style="height: 3px;">
                  <div role="progressbar" aria-valuenow="100" aria-valuemin="0"
                   aria-valuemax="100" class="progress-bar bg-info" style="width: 46%;"></div></div>
            </template>
          </stats-card>
        </div> 

        <div class="col-xl-3 col-md-6">
          <stats-card title="Alerta roja"
                      type="gradient-success"
                      sub-title="3"
                      color="text-green"
                      bg="bg-default"
                      subcolor="text-white"
                      icon="ni ni-sound-wave">

            <template slot="footer">
              <div class="text-left text-muted"><small>10.29% en peligro</small></div>
               <div class="progress" style="height: 3px;">
                  <div role="progressbar" aria-valuenow="100" aria-valuemin="0"
                   aria-valuemax="100" class="progress-bar bg-success" style="width: 10.29%;"></div></div>
            </template>
          </stats-card>
        </div>

        <div class="col-xl-3 col-md-6">
          <stats-card title="Citas"
                      type="gradient-info"
                      sub-title="17"
                      icon="ni ni-collection">

            <template slot="footer">
              <span class="text-green2 mr-2"><i class="ni ni-check-bold"></i>21</span>
              <span class="text-nowrap">Cerradas</span>
            </template>
          </stats-card>
        </div>

        <div class="col-xl-3 col-md-6">
          <stats-card title="Actividad"
                      type="gradient-green"
                      icon="ni ni-send">

            <template slot="footer">
                <badge class="badge-dot mr-4" type="">
                        <i class="bg-success"></i>
                        <small>emails</small>
                         <i class="bg-info"></i>
                        <small>comentario</small>
                          <i class="bg-green2"></i>
                        <small>cita</small>
                    </badge>
            </template>
          </stats-card>
        </div>
      </div>

    </base-header>

    <!--Charts-->
    <div class="container-fluid mt--6">
      <div class="row">
        <div class="col-xl-8">
         <dark-table></dark-table>
        </div>
        <div class="col-xl-4">
          <card header-classes="bg-transparent">
            <div slot="header" class="row align-items-right">
              <div class="col">
                <h6 class="text-light text-uppercase ls-1 mb-1">Resumen general, 2021</h6>
                <h5 class="h3 text-muted mb-0">Seguimiento</h5>
              </div>
             
            </div>
            <line-chart
              :height="300"
              ref="bigChart"
              :chart-data="bigLineChart.chartData"
              :extra-options="bigLineChart.extraOptions"
            >
            </line-chart>

          </card>
        </div>
      </div>
    </div>

  </div>
</template>
<script>

  // Charts
  import * as chartConfigs from '@/components/argon-core/Charts/config';
  import LineChart from '@/components/argon-core/Charts/LineChart';
  import BarChart from '@/components/argon-core/Charts/BarChart';

  import RouteBreadCrumb from '@/components/argon-core/Breadcrumb/RouteBreadcrumb';
  import StatsCard from '@/components/argon-core/Cards/StatsCard';
  import SocialTrafficTable from '@/components/pages/dashboard/SocialTrafficTable.vue';
  import PageVisitsTable from '@/components/pages/dashboard/PageVisitsTable.vue';
  import { Table, TableColumn, DropdownMenu, DropdownItem, Dropdown} from 'element-ui';
  import DarkTable from "~/components/tables/RegularTables/DarkTable";

  export default {
    layout: 'DashboardLayout',
    components: {
      LineChart,
      BarChart,
      RouteBreadCrumb,
      StatsCard,
      DarkTable,
      PageVisitsTable,
      SocialTrafficTable,
      [Dropdown.name]: Dropdown,
      [DropdownItem.name]: DropdownItem,
      [DropdownMenu.name]: DropdownMenu,
    },
    data() {
      return {
        bigLineChart: {
          allData: [
            [0, 20, 10, 30, 15, 40, 20, 60, 60],
            [0, 20, 5, 25, 10, 30, 15, 40, 40]
          ],
          activeIndex: 0,
          chartData: {
            datasets: [
              {
                label: 'Performance',
                data: [0, 20, 10, 30, 15, 40, 20, 60, 60],
              }
            ],
            labels: ['May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dec'],
          },
          extraOptions: chartConfigs.blueChartOptions,
        },
        redBarChart: {
          chartData: {
            labels: ['May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [{
              label: 'Sales',
              data: [25, 20, 30, 22, 17, 29]
            }]
          }
        }
      };
    },
    methods: {
      initBigChart(index) {
        let chartData = {
          datasets: [
            {
              label: 'Performance',
              data: this.bigLineChart.allData[index]
            }
          ],
            labels: ['May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dec'],
        };
        this.bigLineChart.chartData = chartData;
        this.bigLineChart.activeIndex = index;
      }
    },
    mounted() {
      this.initBigChart(0);
    }
  };
</script>