<template>
    <div class="header">
        <div class="headerTop">
            <Button type="ghost" size="small" @click="switchLanguage">{{language}}</Button>
        </div>
        <div class="headerBottom">
            <div class="leftBox">
                <img :src="logoUrl">
            </div>
            <div class="rightBox">{{introWord}}</div>
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                language: '中文',
                logoUrl: require('../assets/logo.png'),
                introWord: '生物信息学(Bioinformatics)是研究生物信息的采集、处理、存储、传播，分析和解释等各方面的学科，也是随着生命科学和计算机科学的迅猛发展，生命科学和计算机科学相结合形成的一门新学科。'
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