<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $miesiac = $_POST['selected_month'];
    $dzien = $_POST['selected_day'];
    $godzina_startu = $_POST['start_time'];
    $godzina_zakonczenia = $_POST['end_time'];

    #$conn = mysqli_connect("localhost", "id22059274_root", "Kochamasie123!", "id22059274_mydatabase");
    $conn = mysqli_connect("localhost", "root", "", "mydatabase");

    $sql = "INSERT INTO dni_pracy (miesiac, dzien, godzina_startu, godzina_zakonczenia) VALUES ('$miesiac', '$dzien', '$godzina_startu', '$godzina_zakonczenia')";

    mysqli_query($conn, $sql);

    mysqli_close($conn);
} 
header("Location: index.php");
exit();

?>
