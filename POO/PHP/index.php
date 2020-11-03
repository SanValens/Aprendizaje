<?php
require_once("account.php");
require_once("car.php"); //Se usa para importar los otros archivos
require_once("uberX.php"); //Se escriben todos los que se usan
$primerCarro = new UberX('UUZ936', new Account("Andrés Joaquín", "1027280924"), "Chevrolet", "Spark");
$primerCarro->printDataCar();
?>