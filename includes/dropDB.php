<?php

$server 	= "localhost";
$username 	= "root";
$password 	= "";

// create connection to MySQL
$conn = new mysqli($server, $username, $password);


// verify connection
if ($conn->connect_error) {
	die("*** Unable to connect to MySQL");
}

// print message if successfull connection
//echo "Successfully connected to MySQL";

// create database
$sql = "DROP DATABASE testDB1";

if (mysqli_query($conn, $sql)) {
	echo "Successfully deleted testDB1 Database";
} else {
	echo "*** Error creating database: " . mysqli_error($conn);
}


// Always close connection...
mysqli_close($conn);


?>