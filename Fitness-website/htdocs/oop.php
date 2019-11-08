<?php
 class fruits
{
    public $name;
    public $color;
    
    public function set_name($name){
        $this->name=$name;
        
    }
    public function get_name(){
        return $this->name;

    }
    function set_color($color) {
        $this->color = $color;
      }
    function get_color() {
        return $this->color;
    }
}

$app =new fruits();
$banana=new fruits();

var_dump($app instanceof fruits);
$app->set_name('Apple');
$app->set_color('Red');
echo $app->get_name()."<br>";
echo $app->get_color();
$banana->set_name('Banan');
$banana->set_color('yellow');
echo "<br>";
echo $banana->get_name()."<br>";
echo $banana->get_color();

?>