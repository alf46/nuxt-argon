<template>
    <div class="container-fluid mt-5">
        <div class="row">
            <div class="col-xl-6 order-xl-1" >
                <div class="mt-5">
                    <nueva-cita />
                </div>
            </div>
            <div class="col-xl-6 order-xl-2">
                <user-card :user="student"/>
            </div>
        </div>
    </div>
</template>
<script>
import NuevaCita from '~/components/Dashboard/Cards/NuevaCita.vue'
import UserCard from '~/components/pages/UserProfile/UserCard.vue';
import projects from '../../../components/tables/projects'

export default {
    layout: 'DashboardLayout',

    components: {
        NuevaCita,
        UserCard,
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