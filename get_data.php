<?php
#$conn = mysqli_connect("localhost", "id22059274_root", "Kochamasie123!", "id22059274_mydatabase");
$conn = mysqli_connect("localhost", "root", "", "mydatabase");

$miesiac = isset($_GET['miesiac']) ? $_GET['miesiac'] : 4; 

$sql = "SELECT * FROM dni_pracy WHERE miesiac = '" . mysqli_real_escape_string($conn, $miesiac) . "'";

$result = mysqli_query($conn, $sql);


if ($result) {
    $data = array();
    while ($row = mysqli_fetch_assoc($result)) {
        $data[] = $row;
    }
    echo json_encode($data);
}

mysqli_close($conn);
?>
