<template>
    <div class="linkBox">
        <div class="linkLeftBox linkborder linksize">
            <div v-for="onelinkImg in linkImgArr" class="linkImgBox">
                <a :href="onelinkImg.href"><img :src="onelinkImg.src"></a>
            </div>
        </div>
        <div class="linkMiddleBox linksize">
            <div v-for="onelinkImg in linkImgArr" class="linkImgBox">
                <a :href="onelinkImg.href"><img :src="onelinkImg.src"></a>
            </div>
        </div>
        <div class="linkRightBox linkborder linksize">
            <div v-for="onelinkImg in linkImgArr" class="linkImgBox">
                <a :href="onelinkImg.href"><img :src="onelinkImg.src"></a>
            </div>
        </div>
    </div>
</template>
<script>
    import parameterService from '../libs/parameterService';
    export default {
        data() {
            return {
                linkImgArr: []
            }
        },
        created: function(){
            parameterService.getLinkParameter().then((data) => {
                this.linkImgArr = data.linkImgArr;
            }).catch((error) => {
                this.$Modal.error({
                    content: error
                });
            });
        },
        methods: {
            handleStart() {}
        }
    };
</script>
<style scoped>
    .linkBox{
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 1% 5% 1% 5%;
    }
    .linkBox img{
        width: 75px;
        height: 25px;
    }
    .linkborder{
        border-left: 0.5px #336699 solid;
        border-right: 0.5px #336699 solid;
    }
    .linksize{
        width: 30%;
        padding: 2.5% 4%;
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        align-content: space-around;
    }
    .linkImgBox{
        padding: 1% 2%;
    }
    .linkLeftBox{
        
    }
    .linkMiddleBox{
        
    }
    .linkRightBox{
        
    }
</style>