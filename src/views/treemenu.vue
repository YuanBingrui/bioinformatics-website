<template>
    <div class="treemenuBox">
    	 <el-menu :default-active="currentMenu" @select="selectedMenu" theme="light">
    	 	<div v-for="onemenu in baseData">
    	 		<tree-menu :onemenu="onemenu" :key="onemenu.index"></tree-menu>	
    	 	</div>
    	</el-menu>
    </div>
</template>
<script>
	import Vue from 'vue';
	Vue.component('tree-menu', {
  		template: '<div><el-menu-item :index="onemenu.index" v-if="!onemenu.isSubmenu">{{onemenu.title}}</el-menu-item><el-submenu :index="onemenu.index" v-if="onemenu.isSubmenu"><template slot="title">{{onemenu.title}}</template><tree-menu v-for="onemenu in onemenu.submenuListArr" :onemenu="onemenu" :key="onemenu.index"></tree-menu></el-submenu></div>',
  		props: ['onemenu']
	});
    import parameterService from '../libs/parameterService';
    export default {
        props: ['currentMenu'],
        data () {
            return {
            	baseData: []
            }
        },
        created: function(){
            this.getMenuList(this.currentMenu);
            //console.log(this.currentMenu+'tree');
        },
        watch: {
            currentMenu: function(){
                this.getMenuList(this.currentMenu);
                //console.log(this.currentMenu+'tree');
            }
        },
        methods: {
            getMenuList(currentmenu) {
                parameterService.getTreeMenu(currentmenu).then((data) => {
                    this.baseData = data;
                    //console.log(this.baseData);
                }).catch((error) => {
                    this.$Modal.error({
                        content: error
                    });
                });
            },
      		selectedMenu(key) {
                this.$emit('selectedkey',key);
      		}
        }
    };
</script>
<style scoped>
   	.treemenuBox{

    }
</style>