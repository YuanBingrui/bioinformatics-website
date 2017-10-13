<template>
    <div class="container">
        <header-component></header-component> 
        <navMenu-component @showdata="showdata"></navMenu-component>
        <content-component :current-menu="currentView"></content-component>
        <link-component></link-component>
        <footer-component></footer-component>
    </div>
</template>
<script>
    import Header from './header';
    import NavMenu from './navMenu';
    import Content from './content';
    import Link from './link';
    import Footer from './footer';
    export default {
        data () {
            return {
                currentView: '0'
            }
        },
        components: {
            'header-component': Header,
            'navMenu-component': NavMenu,
            'content-component': Content,
            'link-component': Link,
            'footer-component': Footer
        },
        methods: {
            showdata(data) {
                this.currentView = data;
                console.log(data);
            }
        }
    };
</script>
<style scoped>
   .container{
        margin: 0 4%;
   }
</style>