<?php

    use Twig\Loader\FilesystemLoader;
    use Twig\Environment;

    abstract class ControllerTwig{
        private static $_twig;
        protected static $_base = 'php/Easy-Piano/';
    
        public static function twigControl(){
            $loader = new FilesystemLoader('./views/');
            
            $twig = new Environment($loader, ['cache' => false, 'debug' => true, 'auto_reload' => true]);
            $twig->addExtension(new \Twig\Extension\DebugExtension());

            return $twig;
        }
    }
