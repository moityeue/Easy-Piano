<?php

class ControllerScores extends ControllerTwig {
    public static function allScores() {
        $loader = new Twig\Loader\FilesystemLoader('./views');
        $twig = ControllerTwig::twigControl();
        $manager = new ModelScores();
        $score = $manager->humain_scores();
         echo $twig->render('templates\oreille.twig'); 
    }
}