<template>
    <div class="navMenuBox">
        <Dropdown type="primary" class="dropDown" v-for="menuItem in menuListArr" :key="menuItem.name" @on-click="selectedMenu">
            <Button type="primary" @click="selectedMenu">
                {{menuItem.title}}
                <Icon type="ios-arrow-down" v-if="menuItem.isSubmenu"></Icon>
            </Button>
            <DropdownMenu slot="list" v-if="menuItem.isSubmenu">
                <div v-for="submenuItem in menuItem.submenuListArr" :key="submenuItem.name">
                    <DropdownItem v-if="!submenuItem.isSubmenu">{{submenuItem.title}}</DropdownItem>
                    <Dropdown placement="right-start" class="dropDown" v-if="submenuItem.isSubmenu">
                        <DropdownItem>
                            <span @click="selectedMenu">
                                {{submenuItem.title}}
                                <Icon type="ios-arrow-right"></Icon>
                            </span>
                        </DropdownItem>
                        <DropdownMenu slot="list">
                            <DropdownItem v-for="ssubmenuItem in submenuItem.submenuListArr" :key="ssubmenuItem.name">{{ssubmenuItem.title}}</DropdownItem>
                        </DropdownMenu>
                    </Dropdown> 
                </div>
            </DropdownMenu>
        </Dropdown>
    </div>	
</template>
<script>
    import parameterService from '../libs/parameterService';
    export default {
    	data () {
    		return {
      			menuListArr: []
    		}
  		},
        created: function(){
            parameterService.getMenuParameter().then((data) => {
                this.menuListArr = data.data;
            }).catch((error) => {
                this.$Modal.error({
                    content: error
                });
            });
        },
        methods: {
        	selectedMenu() {
                // if(event.target.innerText === '首页'){
                //     this.$emit('update:currentView', Content);
                // }else{
                //     this.$emit('update:currentView', SecondaryPage);
                // }
                this.$emit('showdata',event.target.innerText);
        		//console.log(event.target.innerText);
        	}
        }
    };
</script>
<style scoped>
    .navMenuBox{
        margin: 2% 2%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        border-bottom: 1px #ccc solid;
    }
    .dropDown{
        margin-left: 2%;
        margin-bottom: 1%;
    }
</style>