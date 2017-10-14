<template>
    <div class="navMenuBox">
        <Dropdown type="primary" class="dropDown" v-for="menuItem in menuListArr" :key="menuItem.index" @on-click="onclickMenu">
            <a v-if="menuItem.url" :href="menuItem.url" target="_blank">
                <span class="ivu-btn ivu-btn-primary">
                    {{menuItem.title}}
                    <Icon type="ios-arrow-down" v-if="menuItem.isSubmenu"></Icon>
                </span>
            </a>
            <span v-else="!menuItem.url" class="ivu-btn ivu-btn-primary" @click="clickMenu" :id="menuItem.index">
                {{menuItem.title}}
                <Icon type="ios-arrow-down" v-if="menuItem.isSubmenu"></Icon>
            </span>
            <DropdownMenu slot="list" v-if="menuItem.isSubmenu">
                <div v-for="submenuItem in menuItem.submenuListArr" :key="submenuItem.index">
                    <div v-if="!submenuItem.isSubmenu">
                        <a v-if="submenuItem.url" :href="submenuItem.url" target="_blank">
                            <li class="ivu-dropdown-item">{{submenuItem.title}}</li>
                        </a>
                        <DropdownItem :name="submenuItem.index" v-else="!submenuItem.url">{{submenuItem.title}}</DropdownItem>
                    </div>
                    <Dropdown placement="right-start" class="dropDown" v-if="submenuItem.isSubmenu">
                        <DropdownItem>
                            <span @click="clickMenu" :id="submenuItem.index">
                                {{submenuItem.title}}
                                <Icon type="ios-arrow-right"></Icon>
                            </span>
                        </DropdownItem>
                        <DropdownMenu slot="list">
                            <div v-for="ssubmenuItem in submenuItem.submenuListArr">
                                <a v-if="ssubmenuItem.url" :href="ssubmenuItem.url" target="_blank">
                                    <li class="ivu-dropdown-item">{{ssubmenuItem.title}}</li>
                                </a>
                                <DropdownItem v-else="!ssubmenuItem.url" :name="ssubmenuItem.index"  :key="ssubmenuItem.index">{{ssubmenuItem.title}}</DropdownItem>
                            </div>
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
        	onclickMenu(name) {
                this.$emit('showdata',name);
        	},
            clickMenu() {
                this.$emit('showdata',event.target.id);
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
    .btnspan{
        padding: 2%;
    }
</style>