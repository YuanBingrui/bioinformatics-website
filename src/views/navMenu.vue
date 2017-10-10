<template>
    <div class="navMenuBox">
        <Dropdown type="primary" class="dropDown" v-for="menuItem in menuListArr">
            <a href="javascript:void(0)">
                <Button type="primary">
                    {{menuItem.title}}
                    <Icon type="ios-arrow-down" v-if="menuItem.isSubmenu"></Icon>
                </Button>
            </a>
            <DropdownMenu slot="list" v-if="menuItem.isSubmenu">
                <div v-for="submenuItem in menuItem.submenuListArr">
                    <DropdownItem v-if="!submenuItem.isSubmenu">{{submenuItem.title}}</DropdownItem>
                    <Dropdown placement="right-start" class="dropDown" v-if="submenuItem.isSubmenu">
                        <DropdownItem>
                            {{submenuItem.title}}
                        <Icon type="ios-arrow-right"></Icon>
                        </DropdownItem>
                        <DropdownMenu slot="list">
                            <DropdownItem v-for="ssubmenuItem in submenuItem.submenuListArr">{{ssubmenuItem.title}}</DropdownItem>
                        </DropdownMenu>
                    </Dropdown> 
                </div>
            </DropdownMenu>
        </Dropdown>
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
    .navMenuBox{
        margin-top: 2%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }
    .dropDown{
        margin-left: 2%;
    }
</style>