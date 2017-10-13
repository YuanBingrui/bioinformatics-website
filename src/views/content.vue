<template>
    <div>
        <div class="content-home" v-if="currentMenu === '0'">
            <div class="contentLeft-home">
                <Carousel autoplay v-model="index">
                    <CarouselItem v-for=" oneImg in slideImgArr" :key="oneImg.name">
                        <img :src="oneImg.src">
                    </CarouselItem>
                </Carousel>
            </div>
            <div class="contentRight-home">
                <Card class="cardBox-home">
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
        <div class="content" v-if="currentMenu !=='0'">
            <div class="contentLeft">
                <treeMenu-component :currentMenu="currentMenu"></treeMenu-component>
            </div>
            <div class="contentRight">
                <menuContent-component :currentContent="currentMenu"></menuContent-component>
            </div>
        </div>
    </div>
</template>
<script>
    import parameterService from '../libs/parameterService';
    import TreeMenu from './treemenu';
    import MenuContent from './menucontent';
    export default {
        components: {
            'treeMenu-component': TreeMenu,
            'menuContent-component': MenuContent
        },
        props: ['currentMenu'],
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
        watch: {
            currentMenu: function(){
                console.log(this.currentMenu);
            }
        },
        methods: {
            handleStart() {
                console.log(this.currentMenu);
            }
        }
    };
</script>
<style scoped>
    .content-home{
        margin: 2% 2%;
        padding-bottom: 2%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        border-bottom: 1px #ccc solid;
    }
    .contentLeft-home{
        width: 65%;
        padding: 0 4%;
    }
    .contentLeft-home img{
        border-radius: 4px;
        width: 100%;
        height: 400px;
    }
    .contentRight-home{
        width: 30%;
        height: 400px;
    }
    .cardBox-home{
        height: 400px;
    }
    .content-home ul li{
        padding: 5px 0;
    }
    .content{
        margin: 2% 2%;
        padding-bottom: 2%;
        border-bottom: 1px #ccc solid;
        display: flex;
        flex-direction: row;
        min-height: 800px;
    }
    .contentLeft{
        width: 200px;
        border-right: 1px #ccc solid;
        min-height: 800px;
        background-color: #eef1f6;
    }
    .contentRight{
        width: 75%;
        margin-left: 3%;
    }
</style>