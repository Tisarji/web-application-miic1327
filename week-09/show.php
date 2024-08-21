COOKIE<br>
<?php session_start();
	if (!isset($_SESSION['session_name']))
		header('location: index.php') exit();
?>
<?php
	if (isset['session_name'])
		echo $_SESSION['session_name'];
?>
