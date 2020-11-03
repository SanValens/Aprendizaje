<?php
use function PHPSTORM_META\map;
require_once("car.php");
class UberVan extends Car{
        public $seatsMaterial;
        public $typeCarAccepted;
        public function __construct($license, $driver, $seatsMaterial, $typeCarAccepted){
            parent::__construct($license, $driver);
            $this->seatsMaterial = $seatsMaterial;
            $this->typeCarAccepted = $typeCarAccepted;
        }
    }
?>