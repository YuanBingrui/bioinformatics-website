<template>
    <div class="header">
		<div class="headerTop">
			<Button type="ghost" size="small" @click="switchLanguage">{{language}}</Button>
		</div>
		<div class="headerBottom">
			<Row>
        		<Col span="4">
        			<img src="https://raw.githubusercontent.com/iview/iview/master/assets/logo.png">
        		</Col>
        		<Col span="20" class="wordDes">iview</Col>
    		</Row>
		</div>
    </div>	
</template>
<script>
    export default {
    	data () {
    		return {
      			language: '中文'
    		}
  		},
        methods: {
        	switchLanguage() {
        		if(this.language === 'EN'){
        			this.language = '中文';
        		}else{
        			this.language = 'EN';
        		}
        	}
        }
    };
</script>
<style scoped>
    .headerTop{
   		display: flex;
		justify-content: flex-end;
		align-items: center;
		padding: 10px 50px 5px 50px;
   	}
   	.headerBottom{
		padding: 0 50px;
   	}
   	.headerBottom img{
		width: 100px;
		height: 100px;
   	}
   	.wordDes{
   		height: 100px;
   		font-size: 30px;
   		display: flex;
		align-items: flex-end;
		padding: 0 15px;
   	}
</style>