<template>
    <div class="navMenuBox">
        <Dropdown type="primary" class="dropDown" v-for="menuItem in menuListArr" :key="menuItem.name">
            <a href="javascript:void(0)">
                <Button type="primary">
                    {{menuItem.title}}
                    <Icon type="ios-arrow-down" v-if="menuItem.isSubmenu"></Icon>
                </Button>
            </a>
            <DropdownMenu slot="list" v-if="menuItem.isSubmenu">
                <div v-for="submenuItem in menuItem.submenuListArr" :key="submenuItem.name">
                    <DropdownItem v-if="!submenuItem.isSubmenu">{{submenuItem.title}}</DropdownItem>
                    <Dropdown placement="right-start" class="dropDown" v-if="submenuItem.isSubmenu">
                        <DropdownItem>
                            {{submenuItem.title}}
                        <Icon type="ios-arrow-right"></Icon>
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
                console.log(data);
                this.menuListArr = data.data;
            }).catch((error) => {
                console.log(error);
            });
        },
        methods: {
        	switchLanguage() {
        		
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