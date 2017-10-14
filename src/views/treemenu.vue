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
  		template: '<div><div v-if="!onemenu.isSubmenu"><a v-if="onemenu.isExternallink" :href="onemenu.url" target="_blank"><el-menu-item :index="onemenu.linkIndex">{{onemenu.title}}</el-menu-item></a><el-menu-item v-else="!onemenu.isExternallink" :index="onemenu.index">{{onemenu.title}}</el-menu-item></div><el-submenu :index="onemenu.index" v-if="onemenu.isSubmenu"><template slot="title">{{onemenu.title}}</template><tree-menu v-for="onemenu in onemenu.submenuListArr" :onemenu="onemenu" :key="onemenu.index"></tree-menu></el-submenu></div>',
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
        },
        watch: {
            currentMenu: function(){
                this.getMenuList(this.currentMenu);
            }
        },
        methods: {
            getMenuList(currentmenu) {
                parameterService.getTreeMenu(currentmenu).then((data) => {
                    this.baseData = data;
                }).catch((error) => {
                    this.$Modal.error({
                        content: error
                    });
                });
            },
      		selectedMenu(key) {
                if(key.indexOf('Y') === 0){
                    this.$emit('selectedkey',key);
                }
                
      		}
        }
    };
</script>
<style scoped>
   	.treemenuBox{

    }
</style>