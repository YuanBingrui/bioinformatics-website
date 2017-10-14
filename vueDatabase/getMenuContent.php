<?php
header("Content-Type: text/html; charset=utf-8");
$currentmenu = $_POST["currentmenu"];
//var_dump($currentmenu);

// 从文件中读取数据到PHP变量
$json_string = file_get_contents('treeMenu-parameter.json');

// 把JSON字符串转成PHP数组
$data = json_decode($json_string, true);

//输出
$getterMenu = getCurrentMenuContent($data['data'], $currentmenu);
echo json_encode(array($getterMenu));
// var_dump($currentMenu);

function getCurrentMenuContent($onedata, $currentmenu){
  $arrlength = count($onedata);
  for($y=0; $y<$arrlength; $y++) {
    if($onedata[$y]['index'] === $currentmenu){
      return $onedata[$y];
    }else if(getCurrentMenuContent($onedata[$y]['submenuListArr'], $currentmenu)){
      return getCurrentMenuContent($onedata[$y]['submenuListArr'], $currentmenu);
    }else{
      continue;
    }
  }
}
?>