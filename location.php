<?php
session_start();

$error = "";
$success = "";

if (isset($_POST["register"])) {

    $fname    = trim($_POST["firstname"]);
    $sname    = trim($_POST["secondname"]);
    $email    = trim($_POST["email"]);
    $username = trim($_POST["username"]);
    $password = trim($_POST["password"]);

    if (!empty($fname) && !empty($sname) && !empty($email) && !empty($username) && !empty($password)) {

        $_SESSION["Username"] = $fname;
        $success = "Registration submitted successfully (no data saved)";
        header("location:project.php");
    } else {
        $error = "Please input all fields";
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Register</title>
    <link rel="stylesheet" href="animation.css">
    <link href="https://cdn.boxicons.com/3.0.5/fonts/basic/boxicons.min.css" rel="stylesheet">
</head>

<body>
    <h1>Welcome <i class="bx bx-user"></i></h1>

    <div class="wrapper">
        <form action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>" method="post">

            <legend><h1>Register</h1></legend>

            <div class="inputp">
                <label>Firstname:</label>
                <input type="text" name="firstname" placeholder="firstname">
                <i class="bx bx-user"></i>
            </div>

            <div class="inputp">
                <label>Lastname:</label>
                <input type="text" name="secondname" placeholder="lastname">
                <i class="bx bx-user"></i>
            </div>

            <div class="inputp">
                <label>Email:</label>
                <input type="text" name="email" placeholder="email">
                <i class="bx bx-mail-open"></i>
            </div>

            <div class="inputp">
                <label>Username:</label>
                <input type="text" name="username" placeholder="username">
                <i class="bx bx-user"></i>
            </div>

            <div class="inputp">
                <label>Password:</label>
                <input type="password" name="password" placeholder="password">
                <i class="bx bx-lock"></i>
            </div>

            <button type="submit" name="register">Register</button>

            <div class="register">
                <a href="about.php">Already have an Account?</a>
            </div>

            <p style="color:red;"><?php echo $error; ?></p>
            <p style="color:green;"><?php echo $success; ?></p>

        </form>
    </div>
</body>
</html>
