<?php

class ControllerSihumain extends ControllerTwig {

    public static function humain_accueil(){
        $loader = new Twig\Loader\FilesystemLoader('./views');
        $twig = ControllerTwig::twigControl();

        $manager = new ModelSihumain();

        $hum = $manager->humain_login();
        $humain = $_POST;
        echo $twig->render('templates/homepage.twig', ['humain' => $hum[0], 'scores' => $hum[1],'base' => self::$_base]);
    }
    public static function humain_piano(){
        $loader = new Twig\Loader\FilesystemLoader('./views');
        $twig = ControllerTwig::twigControl();
        $manager = new ModelSihumain();
        $hum = $manager->humain_login();
        echo $twig->render('templates\piano.twig', ['humain' => $hum[0], 'scores' => $hum[1],'base' => self::$_base]);
    }

    public static function humain_ecoute(){
        $loader = new Twig\Loader\FilesystemLoader('./views');
        $twig = ControllerTwig::twigControl();
        $manager = new ModelSihumain();
        $humain = $manager->humain_login();
        echo $twig->render('templates\ecoute.twig', ['humain' => $humain[0], 'scores' => $humain[1], 'base' => self::$_base]);
    }
        
    public static function humains_login(){
        $loader = new Twig\Loader\FilesystemLoader('./views');
        $twig = ControllerTwig::twigControl();
        $manager = new ModelSihumain();
        $humain = $manager->humain_login();
        echo $twig->render('templates/login.twig', ['humain' => $humain]);
    }

    public static function allHumains_register(){
        $loader = new Twig\Loader\FilesystemLoader('./views');
        $twig = ControllerTwig::twigControl();
        $manager = new ModelSihumain();
        $humain = $manager->humain_login();
        echo $twig->render('templates\register.twig', ['humain' => $humain]);
    }
}