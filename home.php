
<?php 
session_start();
 ?>
 <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<link rel="stylesheet" href="home.css">
<body>
    <nav class="navbar">
        <div class="navdiv">
            <div class="logo"><a href="#">    <p>
                        <?php echo isset($_SESSION["Username"]) ? $_SESSION["Username"] : "Guest"; ?>
                    </p></a></div>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
         <button><a href="#">SignIn</a></button>
           <button><a href="about.php">SignOut</a></button>
            </ul>
        </div>
    </nav>
           <div class="card"><p> <h3> Welcome to Tenuel</h3><br>
This homepage gives you easy access to everything on our site.<br>
The logo sits on the left, and the links Home, About, and Contact are on the right for quick navigation.<br>
You can also Sign In or Sign Out easily.<br>
The design is simple, clear, and easy to use.</p></div>
</body>
</html>