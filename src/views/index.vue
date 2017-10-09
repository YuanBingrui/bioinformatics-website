<template>
    <div class="container">
        <header-component></header-component> 
        <navMenu-component></navMenu-component>
    </div>
</template>
<script>
    import Header from './header';
    import NavMenu from './navMenu';
    export default {
        components: {
            'header-component': Header,
            'navMenu-component': NavMenu
        },
        methods: {
            handleStart() {}
        }
    };
</script>
<style scoped>
   
</style>