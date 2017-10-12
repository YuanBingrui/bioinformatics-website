<template>
    <div class="container">
        <header-component></header-component> 
        <navMenu-component :currentView.sync="currentView"></navMenu-component>
        <keep-alive>
            <component :is="currentView"></component>
        </keep-alive>
        <link-component></link-component>
        <footer-component></footer-component>
    </div>
</template>
<script>
    import Header from './header';
    import NavMenu from './navMenu';
    import Content from './content';
    import SecondaryPage from './secondarypage';
    import Link from './link';
    import Footer from './footer';
    export default {
        data () {
            return {
                currentView: Content
            }
        },
        components: {
            'header-component': Header,
            'navMenu-component': NavMenu,
            'link-component': Link,
            'footer-component': Footer
        },
        methods: {
            handleStart() {

            }
        }
    };
</script>
<style scoped>
   .container{
        margin: 0 4%;
   }
</style>