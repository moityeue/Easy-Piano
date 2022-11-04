<?php
class ControllerNotes extends   ControllerTwig{
    public static function humain_note(){
        $loader = new Twig\Loader\FilesystemLoader('./views');
        $twig = ControllerTwig::twigControl();
        $manager = new ModelNotes();
        $note = $manager->humain_notes();
         echo $twig->render('templates\theorie.twig', ['note' => $note[0], 'base' => self::$_base ] );
    }
}
