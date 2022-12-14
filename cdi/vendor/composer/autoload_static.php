<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit17f64e5c17013a1a9b1e13d9beae7dee
{
    public static $files = array (
        '320cde22f66dd4f5d3fd621d3e88b98f' => __DIR__ . '/..' . '/symfony/polyfill-ctype/bootstrap.php',
        '0e6d7bf4a5811bfa5cf40c5ccd6fae6a' => __DIR__ . '/..' . '/symfony/polyfill-mbstring/bootstrap.php',
    );

    public static $prefixLengthsPsr4 = array (
        'T' => 
        array (
            'Twig\\' => 5,
        ),
        'S' => 
        array (
            'Symfony\\Polyfill\\Mbstring\\' => 26,
            'Symfony\\Polyfill\\Ctype\\' => 23,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Twig\\' => 
        array (
            0 => __DIR__ . '/..' . '/twig/twig/src',
        ),
        'Symfony\\Polyfill\\Mbstring\\' => 
        array (
            0 => __DIR__ . '/..' . '/symfony/polyfill-mbstring',
        ),
        'Symfony\\Polyfill\\Ctype\\' => 
        array (
            0 => __DIR__ . '/..' . '/symfony/polyfill-ctype',
        ),
    );

    public static $classMap = array (
        'AltoRouter' => __DIR__ . '/..' . '/altorouter/altorouter/AltoRouter.php',
        'Arbustes_outil' => __DIR__ . '/../..' . '/SPIAN/Classes/Arbustes_outil.php',
        'Classes' => __DIR__ . '/../..' . '/SPIAN/Classes/Classes.php',
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
        'ControllerDescription' => __DIR__ . '/../..' . '/SPIAN/Controllers/ControllerDescription.php',
        'ControllerMusique' => __DIR__ . '/../..' . '/SPIAN/Controllers/ControllerMusique.php',
        'ControllerNotes' => __DIR__ . '/../..' . '/SPIAN/Controllers/ControllerNotes.php',
        'ControllerScores' => __DIR__ . '/../..' . '/SPIAN/Controllers/ControllerScores.php',
        'ControllerSihumain' => __DIR__ . '/../..' . '/SPIAN/Controllers/ControllerSihumain.php',
        'ControllerTwig' => __DIR__ . '/../..' . '/SPIAN/Controllers/Controller.php',
        'Description_spian' => __DIR__ . '/../..' . '/SPIAN/Classes/Description_spian.php',
        'Model' => __DIR__ . '/../..' . '/SPIAN/Models/Model.php',
        'ModelDescription' => __DIR__ . '/../..' . '/SPIAN/Models/ModelDescription.php',
        'ModelMusique' => __DIR__ . '/../..' . '/SPIAN/Models/ModelMusique.php',
        'ModelNotes' => __DIR__ . '/../..' . '/SPIAN/Models/ModelNotes.php',
        'ModelScores' => __DIR__ . '/../..' . '/SPIAN/Models/ModelScores.php',
        'ModelSihumain' => __DIR__ . '/../..' . '/SPIAN/Models/ModelSihumain.php',
        'Musique' => __DIR__ . '/../..' . '/SPIAN/Classes/Musique.php',
        'Notes_spian' => __DIR__ . '/../..' . '/SPIAN/Classes/Notes_spian.php',
        'Scores' => __DIR__ . '/../..' . '/SPIAN/Classes/Scores_spian.php',
        'Sihumain' => __DIR__ . '/../..' . '/SPIAN/Classes/Sihumain.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit17f64e5c17013a1a9b1e13d9beae7dee::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit17f64e5c17013a1a9b1e13d9beae7dee::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit17f64e5c17013a1a9b1e13d9beae7dee::$classMap;

        }, null, ClassLoader::class);
    }
}
