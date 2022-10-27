<?php

class ControllerScores extends ControllerTwig {
    public static function allScores() {
        $loader = new Twig\Loader\FilesystemLoader('./views');
        $twig = ControllerTwig::twigControl();
        $manager = new ModelScores();
        $score = $manager->humain_scores($manager);
         echo $twig->render('templates\oreille.twig'); 
    }
    // public static function allScore() {
    //     $loader = new Twig\Loader\FilesystemLoader('./views');
    //     $twig = ControllerTwig::twigControl();
    //     $manager = new ModelScores();
    //     $scores = $manager->humain_score();
    //     echo $twig->render('templates\allScores.twig', ); 
    // }
}