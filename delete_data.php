<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $dzien = $_POST['day'];
    #$conn = mysqli_connect("localhost", "id22059274_root", "Kochamasie123!", "id22059274_mydatabase");
    $conn = mysqli_connect("localhost", "root", "", "mydatabase");

    $sql = "DELETE FROM dni_pracy where dni_pracy.dzien = '$dzien';";

    mysqli_query($conn, $sql);

    mysqli_close($conn);
} 
header("Location: index.php");
exit();
?>