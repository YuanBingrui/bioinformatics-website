<?php
header("Content-Type: text/html; charset=utf-8");
$currentmenu = $_POST["currentmenu"];
//var_dump($currentmenu);
//echo $currentmenu;
//$currentmenu = 'Menu06';
// 从文件中读取数据到PHP变量
$json_string = file_get_contents('treeMenu-parameter.json');

// 把JSON字符串转成PHP数组
$data = json_decode($json_string, true);

//输出
$getterMenu = scanMenuJson($data['data'], $currentmenu);
echo json_encode(array($getterMenu));
// var_dump($currentMenu); 

function scanMenuJson($data, $currentmenu) {
  $arrlength = count($data);
  for($y=0; $y<$arrlength; $y++) {
    if($data[$y]['index'] === $currentmenu){
      return $data[$y];
    }else if(getCurrent($data[$y]['submenuListArr'], $currentmenu)){
      return $data[$y];
    }else{
      continue;
    }
  }
}

function getCurrent($onedata, $currentmenu){
  $arrlength = count($onedata);
  for($y=0; $y<$arrlength; $y++) {
    if($onedata[$y]['index'] === $currentmenu){
      return $onedata[$y];
    }else if(getCurrent($onedata[$y]['submenuListArr'], $currentmenu)){
      return getCurrent($onedata[$y]['submenuListArr'], $currentmenu);
    }else{
      continue;
    }
  }
}
?>