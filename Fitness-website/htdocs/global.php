<?php

session_start();
$_SESSION['user']['fname'] = "Murtaza";
$_SESSION['user']['lang'] = "de";
$_SESSION['loggedIn'] = "true";
setcookie("user", $_SESSION['user']['fname'], time() + (86400 * 30), '/');
setcookie("test");
$mySalary=4000;
$myTaxes=3000;
/*
print("<pre>");
print_r($_GET);
print("</pre>");
*/
//calculateRest();// just called
echo ($rest);
function calculateRest(){
    /*
    global $mySalary;
    global $myTaxes;
    $rest=$mySalary-$myTaxes;*/
    $GLOBALS["rest"]=$GLOBALS["mySalary"]-$GLOBALS["myTaxes"];

}

print("<pre>");
print_r($_REQUEST);
print("</pre>");


$lang =$_GET["lang"];

$text="en";
if(isset($_GET["lang"])){
    $lang=$_GET["lang"];
}
switch($lang){
    case "en":
    default:
    $text='This is my text in English';
    break;
    case "de":
    $text='Das ist mein deutscher Text';
    break;
    case "lt":
    $text='Lorem spum is the best';
    break;

}
foreach($_POST as $key =>$value){
    echo $key .": ".$value."<br>";
}

?>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>HTML Form</title>
</head>
<body>
<nav>
<ul>
    <li><a href="?lang=en">english</a></li>
    <li><a href="?lang=de">german</a></li>
    <li><a href="?lang=lt">latin</a></li>
    
</ul>
</nav>
<form action="upload_file.php" method="post"
    enctype="multipart/form-data">
      <label for="file">Filename:
      <input type="file" name="file" id="file">
      <br />
      <input type="submit" name="uploadBtn" value="Upload">
    </form>
<p><?php echo $text?></p>
<form method="post">
  <label for="user">Username: </label>
  <input type="text" name="user" id="user"><br>
  <label for="pwd">Password: </label>
  <input type="password" name="pwd" id="pwd"><br>
  <input type="submit" name="submit" value="Login">
</form>
</body>
</html>