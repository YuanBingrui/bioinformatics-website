<template>
    <div class="content">
        <div class="contentLeft">
            <Carousel autoplay v-model="index">
                <CarouselItem v-for=" oneImg in slideImgArr" :key="oneImg.name">
                    <img :src="oneImg.src">
                </CarouselItem>
            </Carousel>
        </div>
        <div class="contentRight">
            <Card class="cardBox">
                <p slot="title">
                <Icon type="ios-bookmarks"></Icon>
                {{newsTitle}}
                </p>
                <a href="#" slot="extra">
                {{newsBtn}}
                <Icon type="ios-arrow-right"></Icon>
                </a>
                <ul>
                    <li v-for="item in list">
                        <a :href="item.href">{{ item.name }}</a>
                    </li>
                </ul>
            </Card>
        </div>
    </div>
</template>
<script>
    import parameterService from '../libs/parameterService';
    export default {
        data() {
            return {
                value1: '1',
                index: 0,
                list: [],
                slideImgArr:[],
                newsTitle: '新闻播报',
                newsBtn: '更多'
            }
        },
        created: function(){
            parameterService.getContentParameter().then((data) => {
                console.log(data);
                this.list = data.list;
                this.slideImgArr = data.slideImgArr;
            }).catch((error) => {
                console.log(error);
            });
        },
        methods: {
            handleStart() {}
        }
    };
</script>
<style scoped>
    .content{
        margin: 2% 2%;
        padding-bottom: 2%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        border-bottom: 1px #ccc solid;
    }
    .contentLeft{
        width: 65%;
        padding: 0 4%;
    }
    .contentLeft img{
        border-radius: 4px;
        width: 100%;
        height: 400px;
    }
    .contentRight{
        width: 30%;
        height: 400px;
    }
    .cardBox{
        height: 400px;
    }
    ul li{
        padding: 5px 0;
    }
</style>