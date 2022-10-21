-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : mar. 18 oct. 2022 à 11:12
-- Version du serveur : 5.7.36
-- Version de PHP : 8.0.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `stage2022`
--

-- --------------------------------------------------------

--
-- Structure de la table `arbustes_outil`
--

DROP TABLE IF EXISTS `arbustes_outil`;
CREATE TABLE IF NOT EXISTS `arbustes_outil` (
  `outil_id` varchar(5) NOT NULL,
  `outil_est_actif` tinyint(4) NOT NULL DEFAULT '1',
  `outil_nom` varchar(255) DEFAULT NULL,
  `outil_type` tinyint(4) DEFAULT NULL COMMENT '0:outil ; 1:entrainement ; 2:activité créative; 3:autre activité',
  KEY `outil_id` (`outil_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `arbustes_outil`
--

INSERT INTO `arbustes_outil` (`outil_id`, `outil_est_actif`, `outil_nom`, `outil_type`) VALUES
('TABLE', 1, NULL, NULL);

-- --------------------------------------------------------

--
-- Structure de la table `scores`
--

DROP TABLE IF EXISTS `scores`;
CREATE TABLE IF NOT EXISTS `scores` (
  `score_id` int(11) NOT NULL AUTO_INCREMENT,
  `score_valeur` decimal(10,0) NOT NULL,
  `score_outil_id` varchar(5) NOT NULL,
  `score_humain_id` mediumint(9) NOT NULL,
  `score_param1` tinyint(4) DEFAULT NULL,
  `score_param2` tinyint(4) DEFAULT NULL,
  `score_param3` tinyint(4) DEFAULT NULL,
  `score_param4` tinyint(4) DEFAULT NULL,
  `score_est_actif` tinyint(4) NOT NULL DEFAULT '1',
  `score_date` datetime DEFAULT NULL,
  `humain_id` int(11) NOT NULL,
  `humain_login` varchar(150) NOT NULL,
  PRIMARY KEY (`score_id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `scores`
--

INSERT INTO `scores` (`score_id`, `score_valeur`, `score_outil_id`, `score_humain_id`, `score_param1`, `score_param2`, `score_param3`, `score_param4`, `score_est_actif`, `score_date`, `humain_id`, `humain_login`) VALUES
(1, '5', '1', 2, 3, 4, 5, 6, 1, '2022-10-16 19:00:03', 2, ''),
(2, '3', '4', 1, 2, 8, 7, 3, 1, '2022-10-17 07:01:28', 1, ''),
(5, '5', '4', 2, 3, 4, 7, 3, 1, '2022-10-18 07:49:23', 3, '');

-- --------------------------------------------------------

--
-- Structure de la table `si_humain`
--

DROP TABLE IF EXISTS `si_humain`;
CREATE TABLE IF NOT EXISTS `si_humain` (
  `humain_id` mediumint(9) NOT NULL AUTO_INCREMENT,
  `humain_login` varchar(255) NOT NULL,
  `humain_password` varchar(150) NOT NULL,
  PRIMARY KEY (`humain_id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `si_humain`
--

INSERT INTO `si_humain` (`humain_id`, `humain_login`, `humain_password`) VALUES
(1, 'Humain1\r\n', 'azerty1'),
(2, 'Humain2', 'azerty2'),
(3, 'humain3', 'azerty3\r\n'),
(4, 'humain4', 'azerty4');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
