<?php

require_once("account.php");

class Car{
    public $id;
    public $license;
    public $driver;
    public $passenger;
    public function __construct($license, Account $driver)
    {
        $this->license   = $license;
        $this->driver    = $driver;
    }

    public function printDataCar(){
        echo "Licencia: $this->license Driver: ".$this->driver; //aquí se concatena con "."; y el '.' en sí se convierte en "->" 
    }
}
?>














}

