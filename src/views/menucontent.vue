<template>
    <div class="menuContentBox" v-html="menuContent"></div>
</template>
<script>
    import parameterService from '../libs/parameterService';
    export default {
        props: ['currentContent'],
        data() {
            return {
                menuContent: ''
            }
        },
        created: function(){
            this.getMenuContent(this.currentContent);
            console.log(this.currentContent+'menucontent');
        },
        watch: {
            currentContent: function(){
                this.getMenuContent(this.currentContent);
                console.log(this.currentContent+'menucontent');
            }
        },
        methods: {
            getMenuContent(currentmenu) {
                parameterService.getMenuContentUrl(currentmenu).then((data) => {
                    parameterService.getMenuContent(data[0].url).then((data) => {
                        this.menuContent = data;
                    }).catch((error) => {
                        this.$Modal.error({
                            content: error
                        });
                    });
                }).catch((error) => {
                    this.$Modal.error({
                        content: error
                    });
                });
            }
        }
    };
</script>
<style scoped>
   	.menuContentBox{
        margin: 0 4%;
   	}
</style>