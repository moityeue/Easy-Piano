<?php
class ControllerMusique extends ControllerTwig {
    // public static function musique_quiz(){
    // $twig = ControllerTwig::twigControl();
    // $manager = new ModelMusique();
    // $musique = $_POST;
    // $musique = $manager->musique_quiz();
    // echo $twig->render('templates\ecoute.twig', ['musique' => $musique ,'base' => self::$_base]);
    // }
    public static function musique(){
    $loader = new Twig\Loader\FilesystemLoader('./views');
    $twig = ControllerTwig::twigControl();
    $manager = new ModelMusique();
    $musique = $manager->musique_quiz();
    echo $twig->render('templates\ecoute.twig', ['musique' => $musique ,'base' => self::$_base]);
    }
}
