<template>
    <div class="content">
        <div class="breadcrumbBox">
            <Breadcrumb>
                <BreadcrumbItem>Home</BreadcrumbItem>
                <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
            </Breadcrumb>
        </div>
        <div class="contentBox">
            <div class="contentLeft">
                <treeMenu-component></treeMenu-component>
            </div>
            <div class="contentRight">
                <menuContent-component></menuContent-component>
            </div>
        </div>
    </div>
</template>
<script>
    import TreeMenu from './treemenu';
    import MenuContent from './menucontent';
    export default {
        components: {
            'treeMenu-component': TreeMenu,
            'menuContent-component': MenuContent
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
        border-bottom: 1px #ccc solid;
        min-height: 800px;
    }
    .breadcrumbBox{
        padding-left: 1%;
    }
    .contentBox{
        display: flex;
        flex-direction: row;
    }
    .contentLeft{
        width: 20%;
        border-right: 1px #ccc solid;
        padding-left: 1%;
    }
    .contentRight{
        width: 75%;
        margin-left: 3%;
    }
</style>