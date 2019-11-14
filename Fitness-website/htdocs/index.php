<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
<?php

/*
define(Name, "Murtaza");
$name="Jennifer Lopez";
echo "<h1>Hello World!</h1>";
$text="This is the second text";
$newtext="This is the new Text";

$str ="10";
$number =20;
$sum=$str +$number;
echo $sum;

function getName(){
    global $name;
    echo $name;
}

getName();


$cars= array("Volvo","BMW","Toyota");
var_dump($cars ." ");



$woman = array(
    "name" => "Susanne",
    "age" => 38, 
    "country" => "Germany"
  );
  print("<pre>");
  print_r($woman);
  print("</pre>");





<p><?php echo Name ?></p>
<p><?php echo $text; ?></p>
<p><?php echo $text . " " . $newtext; ?></p>
<p><?php echo "$text - I mix variable and string. $newtext"; ?></p>
?>
*/

for($i=0;$i<10;$i++){
    echo "Hello World!" ."<br>";
}
$i=0;
while($i<=10){
    echo "while loop". "<br>";
    $i++;
}


$today="Wednes";
switch($today){
    case "Mon":
    echo "today is monday";
    break;
    case "Tues":
    echo "Today is Tuesday";
    break;
    case "Wednes":
    echo "Today is wednesday";
    break;
    case "thurs":
    echo "today is thursday";
    break;
    default:
    echo "invalid day";
    break;

}

?>
</body>
</html>

