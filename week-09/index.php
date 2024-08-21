<?php
	session_start();
	if (isset($_POST['login']))
	{
		if ($_POST['username'] == 'Jirasit' && $_POST['password'] == '1234')
		{
			$_SESSION['session_name'] = 'Jirasit';
			header('location: show.php'); exit();
		}
		else if ($_POST['username'] == 'Tong' && $_POST['password'] == '1234')
		{
			$_SESSION['session_name'] = 'Tong';
			header('location: show.php'); exit();
		}
		else
			unset($_SESSION['session_name']);
	}
?>

<!DOCTYPE html>
<html>
	<body>
		<?php
			if (isset($_POST['name']))
				echo $_POST['name'].'<br>';
			if (isset($_POST['lname']))
				echo $_POST['lname'].'<br>';
		?>
		<form action="index.php" method='post'>
			Name: <input type="text" name="name"><br>
			Lname: <input type="text" name="lname"><br>
			<input type="submit" name="Send" value="Send">
		</form>
		<?php for($i = 0; i < 5, $i++) ?>
			<div style='color:green'> Hello Computer Engineer </div>
	</body>
</html>
