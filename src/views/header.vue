<template>
    <div class="header">
        <div class="headerTop">
            <Button type="ghost" size="small" @click="switchLanguage">{{language}}</Button>
        </div>
        <div class="headerBottom">
            <div class="leftBox">
                <a href="/"><img :src="logoUrl"></a>
            </div>
            <div class="rightBox">{{introWord}}</div>
        </div>
    </div>
</template>
<script>
    import parameterService from '../libs/parameterService';
    export default {
        data () {
            return {
                language: '中文',
                logoUrl: '',
                introWord: ''
            }
        },
        created: function(){
            parameterService.getHeaderParameter().then((data) => {
                console.log(data);
                this.href = data.href;
                this.logoUrl = data.logoUrl;
                this.introWord = data.introWord;
            }).catch((error) => {
                console.log(error);
            });
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
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }
    .leftBox{
        width: 20%;
        padding: 0 0 0 5%;
    }
    .rightBox{
        padding-left: 4%;
        width: 70%;
        font-size: 1rem;
        font-family: serif;
    }
    .wordDes{
        height: 100px;
        font-size: 30px;
        display: flex;
        align-items: flex-end;
        padding: 0 15px;
    }
</style>