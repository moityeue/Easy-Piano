<?php

class ControllerScores extends ControllerTwig {
    public static function allScores() {
        $loader = new Twig\Loader\FilesystemLoader('./views');
        $twig = ControllerTwig::twigControl();

        $manager = new ModelScores();
        $sco = $manager->humain_scores();
        $score = $_POST;
        
         echo $twig->render('templates\oreille.twig', ['scores' => $sco, 'scores' => $score]); 
    }
}