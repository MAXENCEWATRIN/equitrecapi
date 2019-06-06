-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le :  jeu. 06 juin 2019 à 09:49
-- Version du serveur :  5.7.17
-- Version de PHP :  5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `equitrecapi`
--

-- --------------------------------------------------------

--
-- Structure de la table `allures`
--

CREATE TABLE `allures` (
  `id` int(11) NOT NULL,
  `score` int(11) DEFAULT NULL,
  `idutilisateur` int(11) NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `UpdatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `contrats`
--

CREATE TABLE `contrats` (
  `id` int(11) NOT NULL,
  `score` int(11) DEFAULT NULL,
  `idutilisateur` int(11) NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `UpdatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `dispositifs`
--

CREATE TABLE `dispositifs` (
  `id` int(11) NOT NULL,
  `label` varchar(255) NOT NULL,
  `numero` int(11) NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `UpdatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `dossards`
--

CREATE TABLE `dossards` (
  `id` int(11) NOT NULL,
  `numero` int(11) NOT NULL,
  `idniveau` int(11) NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `UpdatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `epreuves`
--

CREATE TABLE `epreuves` (
  `id` int(11) NOT NULL,
  `label` varchar(255) NOT NULL,
  `iddispositif` int(11) NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `UpdatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `niveaus`
--

CREATE TABLE `niveaus` (
  `id` int(11) NOT NULL,
  `label` varchar(255) NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `UpdatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `notes`
--

CREATE TABLE `notes` (
  `id` int(11) NOT NULL,
  `idepreuve` int(11) NOT NULL,
  `iddossard` int(11) NOT NULL,
  `idcontrat` int(11) NOT NULL,
  `idallure` int(11) NOT NULL,
  `idstyle` int(11) NOT NULL,
  `idpenalite` int(11) NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `UpdatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `penalites`
--

CREATE TABLE `penalites` (
  `id` int(11) NOT NULL,
  `score` int(11) DEFAULT NULL,
  `idutilisateur` int(11) NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `UpdatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `label` varchar(255) NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `UpdatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `roles`
--

INSERT INTO `roles` (`id`, `label`, `createdAt`, `UpdatedAt`) VALUES
(1, 'juge', NULL, NULL);

-- --------------------------------------------------------

--
-- Structure de la table `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Déchargement des données de la table `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('0-create_dispositifs_table.js'),
('1-create_epreuves_table.js'),
('2-create_roles_table.js'),
('3-create_utilisateurs_table.js'),
('4-create_contrats_table.js'),
('5-create_allures_table.js'),
('6-create_styles_table.js'),
('7-create_penalites_table.js'),
('8-create_niveaus_table.js'),
('9-create_dossards_table.js'),
('90-create_notes_table.js');

-- --------------------------------------------------------

--
-- Structure de la table `styles`
--

CREATE TABLE `styles` (
  `id` int(11) NOT NULL,
  `score` int(11) DEFAULT NULL,
  `idutilisateur` int(11) NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `UpdatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `utilisateurs`
--

CREATE TABLE `utilisateurs` (
  `id` int(11) NOT NULL,
  `identifiant` varchar(255) NOT NULL,
  `motdepasse` varchar(255) NOT NULL,
  `idrole` int(11) NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `UpdatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `allures`
--
ALTER TABLE `allures`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idutilisateur` (`idutilisateur`);

--
-- Index pour la table `contrats`
--
ALTER TABLE `contrats`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idutilisateur` (`idutilisateur`);

--
-- Index pour la table `dispositifs`
--
ALTER TABLE `dispositifs`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `dossards`
--
ALTER TABLE `dossards`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `numero` (`numero`),
  ADD KEY `idniveau` (`idniveau`);

--
-- Index pour la table `epreuves`
--
ALTER TABLE `epreuves`
  ADD PRIMARY KEY (`id`),
  ADD KEY `iddispositif` (`iddispositif`);

--
-- Index pour la table `niveaus`
--
ALTER TABLE `niveaus`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `label` (`label`);

--
-- Index pour la table `notes`
--
ALTER TABLE `notes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idepreuve` (`idepreuve`),
  ADD KEY `iddossard` (`iddossard`),
  ADD KEY `idcontrat` (`idcontrat`),
  ADD KEY `idallure` (`idallure`),
  ADD KEY `idstyle` (`idstyle`),
  ADD KEY `idpenalite` (`idpenalite`);

--
-- Index pour la table `penalites`
--
ALTER TABLE `penalites`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idutilisateur` (`idutilisateur`);

--
-- Index pour la table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Index pour la table `styles`
--
ALTER TABLE `styles`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idutilisateur` (`idutilisateur`);

--
-- Index pour la table `utilisateurs`
--
ALTER TABLE `utilisateurs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `identifiant` (`identifiant`),
  ADD KEY `idrole` (`idrole`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `allures`
--
ALTER TABLE `allures`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `contrats`
--
ALTER TABLE `contrats`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `dispositifs`
--
ALTER TABLE `dispositifs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `dossards`
--
ALTER TABLE `dossards`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `epreuves`
--
ALTER TABLE `epreuves`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `niveaus`
--
ALTER TABLE `niveaus`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `notes`
--
ALTER TABLE `notes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `penalites`
--
ALTER TABLE `penalites`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT pour la table `styles`
--
ALTER TABLE `styles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `utilisateurs`
--
ALTER TABLE `utilisateurs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `allures`
--
ALTER TABLE `allures`
  ADD CONSTRAINT `allures_ibfk_1` FOREIGN KEY (`idutilisateur`) REFERENCES `utilisateurs` (`id`);

--
-- Contraintes pour la table `contrats`
--
ALTER TABLE `contrats`
  ADD CONSTRAINT `contrats_ibfk_1` FOREIGN KEY (`idutilisateur`) REFERENCES `utilisateurs` (`id`);

--
-- Contraintes pour la table `dossards`
--
ALTER TABLE `dossards`
  ADD CONSTRAINT `dossards_ibfk_1` FOREIGN KEY (`idniveau`) REFERENCES `niveaus` (`id`);

--
-- Contraintes pour la table `epreuves`
--
ALTER TABLE `epreuves`
  ADD CONSTRAINT `epreuves_ibfk_1` FOREIGN KEY (`iddispositif`) REFERENCES `dispositifs` (`id`);

--
-- Contraintes pour la table `notes`
--
ALTER TABLE `notes`
  ADD CONSTRAINT `notes_ibfk_1` FOREIGN KEY (`idepreuve`) REFERENCES `epreuves` (`id`),
  ADD CONSTRAINT `notes_ibfk_2` FOREIGN KEY (`iddossard`) REFERENCES `dossards` (`id`),
  ADD CONSTRAINT `notes_ibfk_3` FOREIGN KEY (`idcontrat`) REFERENCES `contrats` (`id`),
  ADD CONSTRAINT `notes_ibfk_4` FOREIGN KEY (`idallure`) REFERENCES `allures` (`id`),
  ADD CONSTRAINT `notes_ibfk_5` FOREIGN KEY (`idstyle`) REFERENCES `styles` (`id`),
  ADD CONSTRAINT `notes_ibfk_6` FOREIGN KEY (`idpenalite`) REFERENCES `penalites` (`id`);

--
-- Contraintes pour la table `penalites`
--
ALTER TABLE `penalites`
  ADD CONSTRAINT `penalites_ibfk_1` FOREIGN KEY (`idutilisateur`) REFERENCES `utilisateurs` (`id`);

--
-- Contraintes pour la table `styles`
--
ALTER TABLE `styles`
  ADD CONSTRAINT `styles_ibfk_1` FOREIGN KEY (`idutilisateur`) REFERENCES `utilisateurs` (`id`);

--
-- Contraintes pour la table `utilisateurs`
--
ALTER TABLE `utilisateurs`
  ADD CONSTRAINT `utilisateurs_ibfk_1` FOREIGN KEY (`idrole`) REFERENCES `roles` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
