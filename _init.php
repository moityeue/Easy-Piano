<?php
session_start();
$dossier_server_path = '/php/Easy-Piano';

$bdd = new PDO('mysql:host=localhost;dbname=stage2022;charset=utf8','root', '');


function trouve_outil_id($dossier) {
    $position1=strpos($dossier,"/cdi/"); 
    $position2=strrpos($dossier,'/');
    $outil_id=substr($dossier,$position1+5,$position2-$position1-5);
    return $outil_id;
}
