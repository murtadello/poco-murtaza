<?php
$host = 'localhost';
$db   = 'test_store';
$user = 'root';
$pass = '';
$port = '3306';
$charset = 'utf8mb4';
$dsn = "mysql:host=$host;dbname=$db;charset=$charset;port=$port";
$options = [
  PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
  PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
  PDO::ATTR_EMULATE_PREPARES   => false,
];
try {
  $pdo = new PDO($dsn, $user, $pass, $options);
} catch (\PDOException $e) {
  throw new \PDOException($e->getMessage(), (int)$e->getCode());
}
$stmt = $pdo->query('SELECT product_id,name,category, price FROM products');
   while ($row = $stmt->fetch())
   {
       echo $row['product_id'] . "<br>";
       echo $row['name'] . "<br>";
       echo $row['price'] . "<br>";
       echo $row['category'] . "<br>";
  }
?>