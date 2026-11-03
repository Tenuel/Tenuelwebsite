<?php
session_start();
$error = "";
if (isset($_POST["login"])) {
    $pass2 =trim( $_POST["password"]);
    $username = trim($_POST["username"]);
    if (!empty($username) && !empty($pass2)) {
        MYSQLI_REPORT(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
        try {
            $sql = "SELECT password FROM tenuelwebsite WHERE FNames='$username'";
            $results = mysqli_query($_conn, $sql);
            if (mysqli_num_rows($results)>0) {
                $row = mysqli_fetch_assoc($results);
                $pass1 = $row["password"];
           
            if (password_verify($pass2, $pass1)) {
                   $_SESSION["Username"] = $username;
                header("location:project.php");
                exit();
            } 
             else {
                $error = "Invalid username or password";
            } }
            else{
             
                $error = "Invalid password";   
            }
            
        } catch (mysqli_sql_exception $e) {
            $error = "SQL ERROR: " . $e->getMessage();
        }
    } else {
        $error = "Please fill in all fields";
    }
     
}

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <link rel="stylesheet" href="animation.css">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href='https://cdn.boxicons.com/3.0.5/fonts/basic/boxicons.min.css' rel='stylesheet'>
</head>

<body>
    <h1>Welcome
        <i class='bx  bx-user'></i>
    </h1>
    <br>
    <br>
    <div class="wrapper">

        <form action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>" method="post">
            <legend>
                <h1>Login</h1>
            </legend>

            <div class="inputp">
                <label for="username">Username:</label>
                <input type="text" placeholder="Username" name="username">
                <i class="bx bx-user"></i>
            </div>
            <br>
            <div class="inputp">
                <label for="password">password:</label>
                <input type="password" placeholder="Password" name="password">
                <i class="bx bx-lock"></i>
            </div>
            <br>
            <div class="remfor">
                <label for="">
                    <input type="checkbox">Remember Me
                </label>
                <br>
                <a href="forgot.php">Forgot Password</a><br>
            </div><br>
            <button type="submit" name="login">Login</button>
            <div class="register">
                <p>Don't have an account? <a href="location.php">
                        Register here</a></p>
                <p style="color:red;">
                    <?php echo $error; ?>
                </p>

            </div>

        </form>
    </div>
</body>
<script src="animation.js"></script>

</html>