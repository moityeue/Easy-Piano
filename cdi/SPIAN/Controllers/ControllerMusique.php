<?php
class ControllerMusique extends ControllerTwig {
    public static function musique_lecteur(){
    $loader = new Twig\Loader\FilesystemLoader('./views');
    $twig = ControllerTwig::twigControl();
    $manager = new ModelMusique();
    $mus = $manager->musique_quiz();
    $musique = $_POST;
    echo $twig->render('templates\lecteur.twig', ['musique' => $mus,' base' => self::$_base]);
    }
}
