<?php
echo"Welcome to our website";


?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Login</title>
</head>
<body>

<form action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>" method="post">
    <label>Username:</label>
    <input type="text" name="username">

    <label>Password:</label>
    <input type="password" name="password">

    <button type="submit" name="login">Login</button>
</form>

<?php
if (isset($_POST['login'])) {
    echo "Form submitted!";
}
?>

</body>
</html>

