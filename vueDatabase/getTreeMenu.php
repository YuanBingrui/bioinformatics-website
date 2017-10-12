
<?php
header("Content-Type: text/html; charset=utf-8");
$currentmenu = $_POST["currentmenu"];
//echo $currentmenu;
// $currentmenu = 'Menu01';
// // 从文件中读取数据到PHP变量
$json_string = file_get_contents('menu-parameter.json');

// // 把JSON字符串转成PHP数组
$data = json_decode($json_string, true);

// //输出
$currentMenu = getCurrent($data['data'], $currentmenu);
echo json_encode($currentMenu);
// var_dump($currentMenu); 

function getCurrent($data, $currentmenu) {
  $arrlength = count($data);
  for($x=0; $x<$arrlength; $x++) {
    if($data[$x]['title'] === $currentmenu){
      return $data[$x];
      break;
    }else if($data[$x]['isSubmenu']){
      getCurrent($data[$x]['submenuListArr'], $currentmenu);
    }else{
      continue;
    }
  }
}
?>