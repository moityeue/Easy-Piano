<?php
class ControllerDescription extends ControllerTwig {
    public static function description() {
        $loader = new Twig\Loader\FilesystemLoader('./views');
        $twig = ControllerTwig::twigControl();
        $manager = new ModelDescription();
        $desc = $manager->humain_descriptions();
         echo $twig->render('templates\theorie.twig' , ['description' => $desc, 'base' => self::$_base]); 
    }
}