<template>
    <div class="navMenuBox">
        <Dropdown type="primary" class="dropDown" v-for="menuItem in menuListArr" :key="menuItem.index" @on-click="onclickMenu">
            <Button type="primary" @click="clickMenu" :id="menuItem.index">
                {{menuItem.title}}
                <Icon type="ios-arrow-down" v-if="menuItem.isSubmenu"></Icon>
            </Button>
            <DropdownMenu slot="list" v-if="menuItem.isSubmenu">
                <div v-for="submenuItem in menuItem.submenuListArr" :key="submenuItem.index">
                    <DropdownItem :name="submenuItem.index" v-if="!submenuItem.isSubmenu">{{submenuItem.title}}</DropdownItem>
                    <Dropdown placement="right-start" class="dropDown" v-if="submenuItem.isSubmenu">
                        <DropdownItem>
                            <span @click="clickMenu" :id="submenuItem.index">
                                {{submenuItem.title}}
                                <Icon type="ios-arrow-right"></Icon>
                            </span>
                        </DropdownItem>
                        <DropdownMenu slot="list">
                            <DropdownItem :name="ssubmenuItem.index" v-for="ssubmenuItem in submenuItem.submenuListArr" :key="ssubmenuItem.index">{{ssubmenuItem.title}}</DropdownItem>
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
                //console.log(data);
            }).catch((error) => {
                this.$Modal.error({
                    content: error
                });
            });
        },
        methods: {
        	onclickMenu(name) {
                this.$emit('showdata',name);
        		console.log(name+'on');
        	},
            clickMenu() {
                this.$emit('showdata',event.target.id);
                console.log(event);
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