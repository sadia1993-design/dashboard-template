<?php
session_start();
if (isset($_SESSION['user_id'])) { ?>
    <script>
        window.location.href = "dashboard.php";
    </script>

<?php
}

$root = (isset($_SERVER['HTTPS']) ? 'https://' : 'http://') . $_SERVER['HTTP_HOST'] .
    str_replace(basename($_SERVER['SCRIPT_NAME']), '', $_SERVER['SCRIPT_NAME']);

require_once('db_config.php');
$selectTable = $conn->query("select * from admin");

error_reporting(0);


?>

<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">

    <link rel="stylesheet" type="text/css" href="<?php echo $root; ?>assets/css/style.css">

    <title>Login Form</title>
</head>

<body>
    <div class="container">

        <div class="form-title text-center mb-5">
            <h1>Login Form</h1>
        </div>
        <form method="post" action="" class="mb-5">
            <label for="user" class="fw-bold mb-3">Enter Email</label>
            <input class="form-control random mb-4 btn-lg" type="email" name="user" id="user" placeholder="E-mail Address" required>
            <label for="password" class="fw-bold mb-3">Enter Password</label>
            <input class="form-control mb-4 btn-lg" type="password" id="password" name="passwd" placeholder="Password" required>
            <div class="form-button text-center">
                <button type="submit" name="submit" class="btn btn-navy submit  " id="submit">Login</button>
            </div>
        </form>


        <?php
        if (isset($_POST['user'])) {
            $email = $_POST['user'];
            $password = $_POST['passwd'];
            $status = "error";


            while ($row = $selectTable->fetch_assoc()) {
                if ($row['email'] == $email && $row['password'] == $password) {
                    $status = "success";
                    $_SESSION['name'] = $row['name'];
                    $_SESSION['email'] = $row['email'];
                    $_SESSION['password'] = $row['password'];
                    $_SESSION['user_id'] = $row['id'];
                    break;
                }
            }

            if ($status == "success") { ?>

                <script>
                    window.location.href = "dashboard.php";
                </script>
        <?php
            } else {
                echo "<div class='alert alert-danger alert-dismissible fade show'>
								<strong>Error!</strong> Invalid email or Password.
								<button type='button' class='close' data-dismiss='alert' aria-label='Close'>
									<span aria-hidden='true'>&times;</span>
								</button>
							</div>";
            }
        }
        ?>



        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
</body>

</html>