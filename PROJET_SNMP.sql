-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le : lun. 30 nov. 2020 à 20:44
-- Version du serveur :  10.3.17-MariaDB
-- Version de PHP : 7.2.24

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `PROJET_SNMP`
--

-- --------------------------------------------------------

--
-- Structure de la table `Equipement`
--

CREATE TABLE `Equipement` (
  `Id_Equipement` int(11) NOT NULL,
  `Nom_Equipement` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `IP` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `MAC` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `Communaute` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `Version_SNMP` varchar(100) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Déchargement des données de la table `Equipement`
--

INSERT INTO `Equipement` (`Id_Equipement`, `Nom_Equipement`, `IP`, `MAC`, `Communaute`, `Version_SNMP`) VALUES
(1, 'is25sw01a.local.univ-savoie.fr', '192.168.140.143', 'INCONNU', 'univ-1', '2c'),
(2, 'mau-nas1-176-2.local.univ-savoie.fr', '192.168.140.143', 'INCONNU2', 'univ-1', '2c');

-- --------------------------------------------------------

--
-- Structure de la table `Log`
--

CREATE TABLE `Log` (
  `Id_Log` int(11) NOT NULL,
  `Date_Log` timestamp NOT NULL DEFAULT current_timestamp(),
  `Message_Log` text COLLATE utf8_unicode_ci NOT NULL,
  `fk_Id_OID` int(11) NOT NULL,
  `fk_Id_Equipement` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Déchargement des données de la table `Log`
--

INSERT INTO `Log` (`Id_Log`, `Date_Log`, `Message_Log`, `fk_Id_OID`, `fk_Id_Equipement`) VALUES
(378, '2020-11-30 17:29:56', '292139', 1, 1),
(379, '2020-11-30 17:29:56', '185520', 2, 1),
(380, '2020-11-30 17:29:56', '88222', 4, 1),
(381, '2020-11-30 17:29:56', '0', 3, 1),
(382, '2020-11-30 17:29:56', '88225', 4, 2),
(383, '2020-11-30 17:29:56', '185520', 2, 2),
(384, '2020-11-30 17:34:56', '292175', 1, 1),
(385, '2020-11-30 17:34:56', '185526', 2, 1),
(386, '2020-11-30 17:34:56', '88237', 4, 1),
(387, '2020-11-30 17:34:56', '0', 3, 1),
(388, '2020-11-30 17:34:56', '88237', 4, 2),
(389, '2020-11-30 17:34:56', '185526', 2, 2),
(390, '2020-11-30 17:40:01', '292215', 1, 1),
(391, '2020-11-30 17:40:01', '185547', 2, 1),
(392, '2020-11-30 17:40:01', '88261', 4, 1),
(393, '2020-11-30 17:40:01', '0', 3, 1),
(394, '2020-11-30 17:40:01', '88261', 4, 2),
(395, '2020-11-30 17:40:01', '185547', 2, 2),
(402, '2020-11-30 17:54:34', '292299', 1, 1),
(403, '2020-11-30 17:54:34', '185577', 2, 1),
(404, '2020-11-30 17:54:34', '88299', 4, 1),
(405, '2020-11-30 17:54:34', '0', 3, 1),
(406, '2020-11-30 17:54:34', '88299', 4, 2),
(407, '2020-11-30 17:54:34', '185577', 2, 2),
(408, '2020-11-30 17:59:34', '292317', 1, 1),
(409, '2020-11-30 17:59:34', '185584', 2, 1),
(410, '2020-11-30 17:59:34', '88304', 4, 1),
(411, '2020-11-30 17:59:34', '0', 3, 1),
(412, '2020-11-30 17:59:34', '88304', 4, 2),
(413, '2020-11-30 17:59:34', '185584', 2, 2),
(414, '2020-11-30 18:04:34', '292344', 1, 1),
(415, '2020-11-30 18:04:34', '185593', 2, 1),
(416, '2020-11-30 18:04:34', '88311', 4, 1),
(417, '2020-11-30 18:04:34', '0', 3, 1),
(418, '2020-11-30 18:04:34', '88311', 4, 2),
(419, '2020-11-30 18:04:34', '185593', 2, 2),
(420, '2020-11-30 18:09:34', '294255', 1, 1),
(421, '2020-11-30 18:09:34', '187493', 2, 1),
(422, '2020-11-30 18:09:34', '88317', 4, 1),
(423, '2020-11-30 18:09:34', '0', 3, 1),
(424, '2020-11-30 18:09:34', '88317', 4, 2),
(425, '2020-11-30 18:09:34', '187493', 2, 2),
(432, '2020-11-30 18:19:34', '294296', 1, 1),
(433, '2020-11-30 18:19:34', '187505', 2, 1),
(434, '2020-11-30 18:19:34', '88329', 4, 1),
(435, '2020-11-30 18:19:34', '0', 3, 1),
(436, '2020-11-30 18:19:34', '88332', 4, 2),
(437, '2020-11-30 18:19:34', '187505', 2, 2),
(438, '2020-11-30 19:49:32', '296588', 1, 1),
(439, '2020-11-30 19:49:32', '189589', 2, 1),
(440, '2020-11-30 19:49:32', '88501', 4, 1),
(441, '2020-11-30 19:49:32', '0', 3, 1),
(442, '2020-11-30 19:49:32', '88501', 4, 2),
(443, '2020-11-30 19:49:32', '189589', 2, 2),
(444, '2020-11-30 19:54:32', '296690', 1, 1),
(445, '2020-11-30 19:54:32', '189607', 2, 1),
(446, '2020-11-30 19:54:32', '88590', 4, 1),
(447, '2020-11-30 19:54:32', '0', 3, 1),
(448, '2020-11-30 19:54:32', '88590', 4, 2),
(449, '2020-11-30 19:54:32', '189607', 2, 2),
(450, '2020-11-30 19:59:32', '296788', 1, 1),
(451, '2020-11-30 19:59:32', '189614', 2, 1),
(452, '2020-11-30 19:59:32', '88675', 4, 1),
(453, '2020-11-30 19:59:32', '0', 3, 1),
(454, '2020-11-30 19:59:32', '88675', 4, 2),
(455, '2020-11-30 19:59:32', '189614', 2, 2),
(456, '2020-11-30 20:04:32', '296828', 1, 1),
(457, '2020-11-30 20:04:32', '189620', 2, 1),
(458, '2020-11-30 20:04:32', '88703', 4, 1),
(459, '2020-11-30 20:04:32', '0', 3, 1),
(460, '2020-11-30 20:04:32', '88703', 4, 2),
(461, '2020-11-30 20:04:32', '189620', 2, 2),
(462, '2020-11-30 20:09:32', '298749', 1, 1),
(463, '2020-11-30 20:09:32', '191508', 2, 1),
(464, '2020-11-30 20:09:32', '88726', 4, 1),
(465, '2020-11-30 20:09:32', '0', 3, 1),
(466, '2020-11-30 20:09:32', '88726', 4, 2),
(467, '2020-11-30 20:09:32', '191508', 2, 2),
(468, '2020-11-30 20:14:32', '298797', 1, 1),
(469, '2020-11-30 20:14:32', '191530', 2, 1),
(470, '2020-11-30 20:14:32', '88745', 4, 1),
(471, '2020-11-30 20:14:32', '0', 3, 1),
(472, '2020-11-30 20:14:32', '88745', 4, 2),
(473, '2020-11-30 20:14:32', '191530', 2, 2);

-- --------------------------------------------------------

--
-- Structure de la table `Monitoring`
--

CREATE TABLE `Monitoring` (
  `fk_Id_OID` int(11) NOT NULL,
  `fk_Id_Equipement` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Déchargement des données de la table `Monitoring`
--

INSERT INTO `Monitoring` (`fk_Id_OID`, `fk_Id_Equipement`) VALUES
(3, 1),
(4, 1),
(2, 2),
(2, 1),
(1, 1),
(4, 2);

-- --------------------------------------------------------

--
-- Structure de la table `OID`
--

CREATE TABLE `OID` (
  `Id_OID` int(11) NOT NULL,
  `Numero` varchar(100) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Déchargement des données de la table `OID`
--

INSERT INTO `OID` (`Id_OID`, `Numero`) VALUES
(1, '1.3.6.1.2.1.7.1.0'),
(2, '1.3.6.1.2.1.7.2.0'),
(3, '1.3.6.1.2.1.7.3.0'),
(4, '1.3.6.1.2.1.7.4.0');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `Equipement`
--
ALTER TABLE `Equipement`
  ADD PRIMARY KEY (`Id_Equipement`),
  ADD UNIQUE KEY `Id_Equipement` (`Id_Equipement`),
  ADD UNIQUE KEY `MAC` (`MAC`);

--
-- Index pour la table `Log`
--
ALTER TABLE `Log`
  ADD PRIMARY KEY (`Id_Log`),
  ADD KEY `fk_Id_OID2` (`fk_Id_OID`),
  ADD KEY `fk_Id_Equipement2` (`fk_Id_Equipement`);

--
-- Index pour la table `Monitoring`
--
ALTER TABLE `Monitoring`
  ADD KEY `fk_Id_OID` (`fk_Id_OID`),
  ADD KEY `fk_Id_Equipement` (`fk_Id_Equipement`);

--
-- Index pour la table `OID`
--
ALTER TABLE `OID`
  ADD PRIMARY KEY (`Id_OID`),
  ADD UNIQUE KEY `Id_OID` (`Id_OID`),
  ADD UNIQUE KEY `Numero` (`Numero`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `Equipement`
--
ALTER TABLE `Equipement`
  MODIFY `Id_Equipement` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT pour la table `Log`
--
ALTER TABLE `Log`
  MODIFY `Id_Log` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=474;

--
-- AUTO_INCREMENT pour la table `OID`
--
ALTER TABLE `OID`
  MODIFY `Id_OID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `Log`
--
ALTER TABLE `Log`
  ADD CONSTRAINT `fk_Id_Equipement2` FOREIGN KEY (`fk_Id_Equipement`) REFERENCES `Equipement` (`Id_Equipement`),
  ADD CONSTRAINT `fk_Id_OID2` FOREIGN KEY (`fk_Id_OID`) REFERENCES `OID` (`Id_OID`);

--
-- Contraintes pour la table `Monitoring`
--
ALTER TABLE `Monitoring`
  ADD CONSTRAINT `fk_Id_Equipement` FOREIGN KEY (`fk_Id_Equipement`) REFERENCES `Equipement` (`Id_Equipement`),
  ADD CONSTRAINT `fk_Id_OID` FOREIGN KEY (`fk_Id_OID`) REFERENCES `OID` (`Id_OID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
