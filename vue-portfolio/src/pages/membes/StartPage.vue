<template>
    <section>
        <the-landing></the-landing>       
        <the-about></the-about>
        <the-projects></the-projects>
        <the-skills></the-skills>

    </section>
</template>

<script>
import TheLanding from '../../components/layout/TheLanding.vue'
import TheAbout from '../../components/layout/TheAbout'
import TheProjects from '../../components/layout/TheProjects'
import TheSkills from '../../components/layout/TheSkills'
export default {
    components: {
        TheLanding,
        TheAbout,
        TheProjects,
        TheSkills,
    },
}
</script>

