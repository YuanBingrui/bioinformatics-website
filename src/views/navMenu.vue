<template>
    <div class="navMenuBox">
		<!-- <Menu mode="horizontal" theme="light" active-name="home">
            <div v-for="menuItem in menuListArr">
                <MenuItem :name="menuItem.name" v-if="!menuItem.isSubmenu">
                    {{menuItem.title}}
                </MenuItem>
                <Submenu :name="menuItem.name" v-else="!menuItem.isSubmenu">
                    <template slot="title">
                        {{menuItem.title}}
                    </template>
                    <div v-for="submenuItem in menuItem.submenuListArr">
                        <MenuItem :name="submenuItem.name">
                            {{submenuItem.title}}
                        </MenuItem>       
                    </div>
                </Submenu>  
            </div>
        </Menu> -->
        <div v-for="menuItem in menuListArr" class="menuItemBox">
            <Dropdown v-if="!menuItem.isSubmenu">
                <a href="javascript:void(0)">
                    {{menuItem.title}}
                </a>
            </Dropdown>
            <Dropdown v-else="!menuItem.isSubmenu">
                <a href="javascript:void(0)">
                    {{menuItem.title}}
                    <Icon type="ios-arrow-down"></Icon>
                </a>
                <DropdownMenu slot="list" v-for="submenuItem in menuItem.submenuListArr">
                    <DropdownItem v-if="!submenuItem.isSubmenu">{{submenuItem.title}}</DropdownItem>
                    <Dropdown v-else="!submenuItem.isSubmenu">
                        <a href="javascript:void(0)">
                            {{submenuItem.title}}
                            <Icon type="ios-arrow-right"></Icon>
                        </a>
                        <DropdownMenu slot="list" v-for="ssubmenuItem in submenuItem.submenuListArr">
                            <DropdownItem v-if="!menuItem.isSubmenu">{{ssubmenuItem.title}}</DropdownItem>
                        </DropdownMenu>       
                    </Dropdown>
                </DropdownMenu>       
            </Dropdown>
        </div>
    </div>	
</template>
<script>
    export default {
    	data () {
    		return {
      			menuListArr: [
                    {name: 'home', title: '首页', isSubmenu: false},
                    {name: 'menu01', title: 'Menu01', isSubmenu: true, submenuListArr: [
                        {name: 'menu01-01', title: 'Menu01-01', isSubmenu: false},
                        {name: 'menu01-02', title: 'Menu01-02', isSubmenu: true, submenuListArr: [
                            {name: 'menu01-02-01', title: 'Menu01-02-01'},
                            {name: 'menu01-02-02', title: 'Menu01-02-02'},
                            {name: 'menu01-02-03', title: 'Menu01-02-03'}
                        ]},
                        {name: 'menu01-03', title: 'Menu01-03', isSubmenu: false},
                        {name: 'menu01-04', title: 'Menu01-04', isSubmenu: false},
                        {name: 'menu01-05', title: 'Menu01-05', isSubmenu: false}
                    ]},
                    {name: 'menu02', title: 'Menu02', isSubmenu: false},
                    {name: 'menu03', title: 'Menu03', isSubmenu: false},
                    {name: 'menu04', title: 'Menu04', isSubmenu: false}
                ]
    		}
  		},
        methods: {
        	switchLanguage() {
        		
        	}
        }
    };
</script>
<style scoped>
    .menuItemBox{
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }
</style>