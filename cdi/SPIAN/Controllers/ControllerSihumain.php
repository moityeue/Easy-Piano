<?php

class ControllerSihumain extends ControllerTwig {
    
    // public static function allHumains_login(){
    //     $loader = new Twig\Loader\FilesystemLoader('./views');
    //     $twig = ControllerTwig::twigControl();
    //     $manager = new ModelSihumain();
    //     $humain = $manager->humain_login();
    //     echo $twig->render('templates\login.twig', ['humain' => $humain, 'base' => self::$_base]);
    // }

    // public static function allHumains_register(){
    //     $loader = new Twig\Loader\FilesystemLoader('./views');
    //     $twig = ControllerTwig::twigControl();
    //     $manager = new ModelSihumain();
    //     $humain = $manager->humain_login();
    //     echo $twig->render('templates\register.twig', ['humain' => $humain]);
    // }
    
    public static function allHumain(){
        $loader = new Twig\Loader\FilesystemLoader('./views');
        $twig = ControllerTwig::twigControl();
        $manager = new ModelSihumain();
        $hum = $_POST;
        $hum = $manager->humain_login();
        echo $twig->render('templates\homepage.twig', ['humain' => $hum[0], 'scores' => $hum[1],'base' => self::$_base]);
    }
    public static function allHumain3(){
        $loader = new Twig\Loader\FilesystemLoader('./views');
        $twig = ControllerTwig::twigControl();
        $manager = new ModelSihumain();
        $hum = $manager->humain_login();
        echo $twig->render('templates\piano.twig', ['humain' => $hum[0], 'scores' => $hum[1],'base' => self::$_base]);
    }

    public static function allHuma(){
        $loader = new Twig\Loader\FilesystemLoader('./views');
        $twig = ControllerTwig::twigControl();
        $manager = new ModelSihumain();
        $humain = $manager->humain_login();
        echo $twig->render('templates\ecoute.twig', ['humain_login' => $humain]);
    }
}