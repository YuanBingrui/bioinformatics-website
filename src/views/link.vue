<template>
    <div class="linkBox">
        <div class="linkLeftBox linkborder linksize">
            <div v-for="onelinkImg in linkImgArr" class="linkImgBox">
                <img :src="onelinkImg.src">
            </div>
        </div>
        <div class="linkMiddleBox linksize">
            <div v-for="onelinkImg in linkImgArr" class="linkImgBox">
                <img :src="onelinkImg.src">
            </div>
        </div>
        <div class="linkRightBox linkborder linksize">
            <div v-for="onelinkImg in linkImgArr" class="linkImgBox">
                <img :src="onelinkImg.src">
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                linkImgArr: [{src: require('../assets/ncbi.png'), name: 'ncbi'},
                            {src: require('../assets/ebi.png'), name: 'ebi'},
                            {src: require('../assets/kegg.png'), name: 'kegg'},
                            {src: require('../assets/uniprot.png'), name: 'uniprot'}]
            }
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