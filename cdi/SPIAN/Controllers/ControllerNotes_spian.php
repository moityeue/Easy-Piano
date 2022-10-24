<?php
class ControllerNotes_spian extends   ControllerTwig{
    public static function humain_note(){
        $loader = new Twig\Loader\FilesystemLoader('./views');
        $twig = ControllerTwig::twigControl();
        $manager = new ModelNotes_spian();
        $notes = $manager->humain_notes($manager);
         echo $twig->render('templates\theorie.twig' ); 
    }
}