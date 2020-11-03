<?php
require_once("car.php");
    class UberPool extends Car{
        public $model;
        public $brand;
        public function __construct($license, $driver, $brand, $model){
            parent::__construct($license, $driver);
            $this->model = $model;
            $this->brand = $brand;
        }
    }
?>