<?php
$dir_rel="../../";
$dir_cdi="../";
$fichier="index.php";
include($dir_rel.'_init.php');

if (isset($_SESSION['outil_retour'])) $retour=$_SESSION['outil_retour']; 
else if (isset($_SESSION['retour_page'])) $retour=$_SESSION['retour_page']; else $retour='outil.php';
$_SESSION['outil_id'] = trouve_outil_id($_SERVER["PHP_SELF"]);


require_once __DIR__ . '/../vendor/autoload.php';
require_once  __DIR__ .'/../vendor/altorouter/altorouter/AltoRouter.php';

//start alto router//
$router = new AltoRouter();
$router->setBasePath($dossier_server_path.'/cdi/'.$_SESSION['outil_id']);

$router->map('GET', '/login', 'ControllerSihumain#humains_login', 'login_page');//ok//

$router->map('GET', '/register', 'ControllerSihumain#allhumains_register', 'register_page');//ok//


$router->map('GET', '/', 'ControllerSihumain#humain_accueil', 'home_page');//ok//

$router->map('GET', '/piano', 'ControllerSihumain#humain_piano', 'piano_page');//ok//


 $router->map('GET', '/ecoute', 'ControllerSihumain#humain_ecoute', 'pageEcout');

 $router->map('GET', '/lecteur', 'ControllerMusique#musique_lecteur', 'pageEcoute');

 //$router->map('GET', '/theorie', 'ControllerNotes#humain_theorie', 'pageTheorie');

$router->map('GET', '/theorie', 'ControllerDescription#Description', 'pageTheorique');

  $router->map('GET', '/oreille', 'ControllerScores#allscores', 'scores');

$match = $router->match();
if($match){
    list($controller, $action) = explode('#', $match['target']);
    $obj = new $controller;
    
    if(is_callable(array($obj, $action))){
        call_user_func_array(array($obj, $action), $match['params']);
    }
}
