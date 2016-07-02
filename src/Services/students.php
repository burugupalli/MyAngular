<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$conn = new mysqli("localhost:3308", "root", "", "myDB");
if (mysqli_connect_errno())
  {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }

$result = $conn->query("SELECT s_id, s_name, s_dob, s_phone FROM students");

$outp = "";
while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
    if ($outp != "") {$outp .= ",";}
    $outp .= '{"id":"'  . $rs["s_id"] . '",';
    $outp .= '"Name":"'  . $rs["s_name"] . '",';
    $outp .= '"Dob":"'   . $rs["s_dob"]  . '",';
    $outp .= '"Phone":"'. $rs["s_phone"]     . '"}'; 
}
$outp ='{"records":['.$outp.']}';
$conn->close();

echo($outp);
?>