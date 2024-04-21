<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Praca Asi</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <br>
    <div id="info">
        <a id="month_label"></a>
        <a id="money_made">Łączny Zarobek:</a><br>
        <a id="time_at_work">Czas Pracy:</a><br>
        <a id="days_at_work">Dni pracy:</a><br>
        <select id="select" onchange="updateHiddenInputMonth()"></select>
    </div>
    <br>
    <div id="parent_div">
    </div>

    <div id="add_div"> 
        <form id="form" method="post" action="send_data.php">
            <div id="column">
            <label for="start_time" >Godzina startu:</label>
                <input type="time" id="start_time" name="start_time">
            </div>
            <div id="column">
            <label for="end_time">Godzina zakończenia:</label>
                <input type="time" id="end_time" name="end_time">
            </div>
                <!-- schowany inpout z aktalnym miesiacem -->
                <input type="hidden" id="selected_month" name="selected_month">
                <!-- schowany inpout z aktalnym dniem -->
                <input type="hidden" id="selected_day" name="selected_day">
            <button type="button" onclick="submitForm('POST')" id="button_submit">Dodaj mnie!</button>
        </form>
    </div>
    <script src="script.js"></script>
    <script src="data_handler.js">
        
    </script>
</body>
</html>
