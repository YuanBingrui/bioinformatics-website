<template>
    <div class="content">
        <div class="contentLeft">
            <Carousel autoplay v-model="index">
                <CarouselItem v-for=" oneImg in slideImgArr">
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
                        <a :href="item.href" target="_blank">{{ item.name }}</a>
                    </li>
                </ul>
            </Card>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                value1: '1',
                index: 0,
                list: [ {href: '#', name: '生物信息学发发生大事啦！'},
                        {href: '#', name: '生物信息学发发生大事啦！'},
                        {href: '#', name: '生物信息学发发生大事啦！'},
                        {href: '#', name: '生物信息学发发生大事啦！'},
                        {href: '#', name: '生物信息学发发生大事啦！'}],
                slideImgArr:[{src: require('../assets/slide01.jpg'),name: 'slide01.jpg'},
                            {src: require('../assets/slide02.jpg'), name: 'slide02.jpg'},
                            {src: require('../assets/slide03.jpg'), name: 'slide03.jpg'}],
                newsTitle: '新闻播报',
                newsBtn: '更多'
            }
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