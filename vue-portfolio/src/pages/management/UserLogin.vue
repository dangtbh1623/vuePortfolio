<template>
    <section>
        <the-landing></the-landing>
        USER LOGIN
        <text-writting></text-writting>
    </section>
</template>

<script>
import TextWritting from '../../components/ui/TextWritting'
import TheLanding from '../../components/layout/TheLanding.vue'
export default {
    components: {
        TheLanding,
        TextWritting
    },
}
</script>