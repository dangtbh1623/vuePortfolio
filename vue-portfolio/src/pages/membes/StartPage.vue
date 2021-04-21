<template>
    <section>
        <the-landing></the-landing>       
        <the-about></the-about>
        <the-projects></the-projects>

    </section>
</template>

<script>
import TheLanding from '../../components/layout/TheLanding.vue'
import TheAbout from '../../components/layout/TheAbout'
import TheProjects from '../../components/layout/TheProjects'
export default {
    components: {
        TheLanding,
        TheAbout,
        TheProjects,
    },
}
</script>

