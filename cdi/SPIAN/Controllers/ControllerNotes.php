<?php
class ControllerNotes extends   ControllerTwig{
    public static function humain_theorie(){
        $loader = new Twig\Loader\FilesystemLoader('./views');
        $twig = ControllerTwig::twigControl();
        $manager = new ModelNotes();
        $no = $manager->humain_notes();
        $note = $_POST;
         echo $twig->render('templates\theorie.twig', ['note' => $no ,'base' => self::$_base ] );
         
    }
}
