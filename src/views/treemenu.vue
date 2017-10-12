<template>
    <div class="treemenuBox">
    	 <el-menu default-active="1" @select="handleOpen" theme="light">
    	 	<div v-for="onemenu in baseData">
    	 		<tree-menu :onemenu="onemenu"></tree-menu>	
    	 	</div>
    	</el-menu>
    </div>
</template>
<script>
	import Vue from 'vue';
	Vue.component('tree-menu', {
  		template: '<div><el-menu-item :index="onemenu.index" v-if="!onemenu.children">{{onemenu.title}}</el-menu-item><el-submenu :index="onemenu.index" v-if="onemenu.children"><template slot="title">{{onemenu.title}}</template><tree-menu v-for="onemenu in onemenu.children" :onemenu="onemenu"></tree-menu></el-submenu></div>',
  		props: ['onemenu']
	})
    export default {  	
        data () {
            return {
                baseData: [{
                    index: '1',
                    title: 'menu01',
                    children: [{
                    	index: '1-01',
                        title: 'menu01-01',
                        children: [{
                        	index: '1-01-01',
                            title: 'menu01-01-01'
                        }, {
                        	index: '1-01-02',
                            title: 'menu01-01-02',
                            children: [{
                        		index: '1-01-02-01',
                            	title: 'menu01-01-02-01'
                        	},
                        	{
                        		index: '1-01-02-02',
                            	title: 'menu01-01-02-02'
                        	}]
                        }]
                    }, {
                    	index: '1-02',
                        title: 'menu01-02',
                        children: [{
                        	index: '1-02-01',
                            title: 'menu01-02-01'
                        },
                        {
                        	index: '1-02-02',
                            title: 'menu01-02-02'
                        }]
                    }]
                },
                {	
                	index: '2',
                	title: 'menu02'
                },
                {
                	index: '3',
                	title: 'menu03'
                },
                {
                	index: '4',
                	title: 'menu04'
                }]
            }
        },
        methods: {
      		handleOpen(key, keyPath) {
        		console.log(key, keyPath);
      		},
      		handleClose(key, keyPath) {
        		console.log(key, keyPath);
      		}
        }
    };
</script>
<style scoped>
   	.treemenuBox{

   	}
   	/*.treemenuBox ul{
   		width: 100% !important;	
   	}*/
</style>