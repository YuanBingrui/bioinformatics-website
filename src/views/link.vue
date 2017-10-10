<template>
    <div class="linkBox">
        <div class="linkLeftBox linkborder linksize">
            
        </div>
        <div class="linkMiddleBox linksize">
            
        </div>
        <div class="linkRightBox linkborder linksize">
            <Row type="flex" justify="space-around">
                <Col span="6" class="colmargin">
                    <img src="../assets/ncbi.png">
                </Col>
                <Col span="6" class="colmargin">
                    <img src="../assets/ebi.png">
                </Col>
            </Row>
            <Row type="flex" justify="space-around">
                <Col span="6" class="colmargin">
                    <img src="../assets/kegg.png">
                </Col>
                <Col span="6" class="colmargin">
                    <img src="../assets/uniprot.png">
                </Col>
            </Row>
        </div>
    </div>
</template>
<script>
    export default {
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
        padding: 1% 5% 0 5%;
        height: 100px;
    }
    .linkBox img{
        width: 75px;
        height: 25px;
    }
    .linkborder{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-left: 1px #336699 solid;
        border-right: 1px #336699 solid;
    }
    .linksize{
        width: 30%;
        height: 100px;
    }
    .colmargin{
        margin: 10px 15px;
    }
    .linkLeftBox{
        
    }
    .linkMiddleBox{
        
    }
    .linkRightBox{
        
    }
</style>