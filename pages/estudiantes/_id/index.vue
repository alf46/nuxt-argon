<template>
    <div class="container-fluid mt-5">
        <div class="row">
            <div class="col-xl-6 order-xl-1" >
                <div v-if="student.status=='roja'">
                    <alert-red :user="user"/>
                </div>
                  <div v-if="student.status=='amarilla'">
                    <alert-yellow :user="user"/>
                </div>
                  <div v-if="student.status=='verde'">
                    <alert-green :user="user"/>
                </div>
                <div class="mt-5">
                    <events-card />
                </div>
            </div>
            <div class="col-xl-6 order-xl-2">
                <user-card :user="student"/>
            </div>
        </div>
    </div>
</template>
<script>
import AlertRed from '~/components/Dashboard/Cards/AlertRed.vue'
import AlertYellow from '~/components/Dashboard/Cards/AlertYellow.vue'
import AlertGreen from '~/components/Dashboard/Cards/AlertGreen.vue'
import UserPasswordCard from '~/components/Dashboard/Cards/UserPasswordCard.vue'
import UserCard from '~/components/pages/UserProfile/UserCard.vue';
import projects from '../../../components/tables/projects'
import EventsCard from '../../../components/Dashboard/Cards/EventsCard.vue'
export default {
    layout: 'DashboardLayout',

    components: {
        AlertRed,
        AlertYellow,
        AlertGreen,
        UserPasswordCard,
        UserCard,
        EventsCard,
    },

    data() {
        const id = this.$route.params.id;
        const student = projects.filter( function(data){ return data.id == id })[0];
        return {
            student,
        }
    },
}
</script>