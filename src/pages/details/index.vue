<template>
    <div class="details">
        社团详情
    </div>
</template>
<script>
export default {
    data() {
        return {
            id: ""
        };
    },
    methods: {},
    onShow() {
        console.log(this.$root.$mp.query);
    }
};
</script>
<style scoped>

</style>

