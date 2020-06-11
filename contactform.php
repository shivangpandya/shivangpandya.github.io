<?php 

if(isset($_POST['submit']))
{
	$name = $_POST['name'];
	$subject = $_POST['subject'];
	$mailfrom = $_POST['email'];
	$message = $_POST['message'];
	
	$mailTo = "hy1713@nyu.edu";
	$headers= "From: ".$mailfrom;
	$txt = "You have recieved an e-mail from ".$name.".\n\n".$message;


	mail($mailTo,$subject,$txt,$headers);
}


?>