<template>
    <div class="menuContentBox">
        
    </div>
</template>
<script>
    export default {
        props: ['currentContent'],
        created: function(){
            console.log(this.currentMenu+'menucontent');
        },
        watch: {
            currentContent: function(){
                console.log(this.currentContent+'menucontent');
            }
        },
        methods: {
            handleStart() {}
        }
    };
</script>
<style scoped>
   	.menuContentBox{
        margin: 0 4%;
   	}
</style>