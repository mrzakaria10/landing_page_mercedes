-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : mer. 26 fév. 2025 à 13:01
-- Version du serveur : 10.4.32-MariaDB
-- Version de PHP : 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `gestion_commandes`
--

-- --------------------------------------------------------

--
-- Structure de la table `articles`
--

CREATE TABLE `articles` (
  `id_article` int(11) NOT NULL,
  `nom_article` varchar(100) DEFAULT NULL,
  `prix` decimal(10,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `articles`
--

INSERT INTO `articles` (`id_article`, `nom_article`, `prix`) VALUES
(1, 'Clavier mécanique', 60.25),
(2, 'Souris gaming', 30.00),
(3, 'Écran 27 pouces', 250.75),
(4, 'Casque audio', 90.00),
(5, 'Webcam HD', 75.00),
(6, 'Imprimante laser', 150.00),
(7, 'Ordinateur portable', 450.90),
(8, 'Clavier Bluetooth', 45.99),
(9, 'Station de charge', 70.45),
(10, 'Caméra de surveillance', 250.75),
(11, 'Casque sans fil', 160.00),
(12, 'Chargeur rapide', 60.00);

-- --------------------------------------------------------

--
-- Structure de la table `clients`
--

CREATE TABLE `clients` (
  `id_client` int(11) NOT NULL,
  `nom_client` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `ville` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `clients`
--

INSERT INTO `clients` (`id_client`, `nom_client`, `email`, `ville`) VALUES
(1, 'Alice Dupont', 'alice@example.com', 'Paris'),
(2, 'Bob Martin', 'bob@example.com', 'Lyon'),
(3, 'Charlie Durand', 'charlie@example.com', 'Marseille'),
(4, 'David Morel', 'david@example.com', 'Toulouse'),
(5, 'Emma Bernard', 'emma@example.com', 'Lille'),
(6, 'François Petit', 'francois@example.com', 'Bordeaux'),
(7, 'Gabrielle Leroy', 'gabrielle@example.com', 'Nice'),
(8, 'Hugo Fontaine', 'hugo@example.com', 'Strasbourg'),
(9, 'Isabelle Richard', 'isabelle@example.com', 'Rennes'),
(10, 'Jean Rousseau', 'jean@example.com', 'Nantes'),
(11, 'Patrick Yonson', 'patrick.yonson@gmail.com', 'New York');

-- --------------------------------------------------------

--
-- Structure de la table `commandes`
--

CREATE TABLE `commandes` (
  `id_commande` int(11) NOT NULL,
  `id_client` int(11) DEFAULT NULL,
  `date_commande` date DEFAULT NULL,
  `montant` decimal(10,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `commandes`
--

INSERT INTO `commandes` (`id_commande`, `id_client`, `date_commande`, `montant`) VALUES
(101, 1, '2024-02-10', 120.50),
(102, 2, '2024-02-12', 250.75),
(103, 1, '2024-02-15', 90.00),
(104, 3, '2024-02-16', 150.30),
(105, 5, '2024-02-17', 300.00),
(106, 6, '2024-02-18', 450.90),
(107, 7, '2024-02-19', 89.99),
(108, 8, '2024-02-20', 210.45),
(109, 9, '2024-02-21', 500.75),
(110, 10, '2024-02-22', 320.00),
(111, NULL, '2025-02-22', 200.00);

-- --------------------------------------------------------

--
-- Structure de la table `lignecommande`
--

CREATE TABLE `lignecommande` (
  `id_ligne` int(11) NOT NULL,
  `id_commande` int(11) DEFAULT NULL,
  `id_article` int(11) DEFAULT NULL,
  `quantite` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `lignecommande`
--

INSERT INTO `lignecommande` (`id_ligne`, `id_commande`, `id_article`, `quantite`) VALUES
(1, 101, 1, 2),
(2, 101, 2, 1),
(3, 102, 3, 1),
(4, 103, 4, 1),
(5, 104, 5, 2),
(6, 105, 6, 2),
(7, 106, 7, 1),
(8, 107, 8, 1),
(9, 108, 9, 3),
(10, 109, 10, 2),
(11, 110, 11, 2),
(12, 110, 12, 1);

-- --------------------------------------------------------

--
-- Structure de la table `livraison`
--

CREATE TABLE `livraison` (
  `id_livraison` int(11) NOT NULL,
  `id_commande` int(11) DEFAULT NULL,
  `id_livreur` int(11) DEFAULT NULL,
  `date_livraison` date DEFAULT NULL,
  `statut` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `livraison`
--

INSERT INTO `livraison` (`id_livraison`, `id_commande`, `id_livreur`, `date_livraison`, `statut`) VALUES
(1, 101, 1, '2024-02-11', 'Livré'),
(2, 102, 2, '2024-02-13', 'En cours'),
(3, 103, 1, '2024-02-16', 'Livré'),
(4, 104, 3, '2024-02-18', 'Prévu'),
(5, 105, 4, '2024-02-19', 'Expédié'),
(6, 106, 5, '2024-02-20', 'En attente'),
(7, 107, 2, '2024-02-21', 'Livré'),
(8, 108, 3, '2024-02-22', 'Livré'),
(9, 109, 1, '2024-02-23', 'Livré'),
(10, 110, 4, '2024-02-24', 'Prévu');

-- --------------------------------------------------------

--
-- Structure de la table `livreurs`
--

CREATE TABLE `livreurs` (
  `id_livreur` int(11) NOT NULL,
  `nom_livreur` varchar(100) DEFAULT NULL,
  `ville` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `livreurs`
--

INSERT INTO `livreurs` (`id_livreur`, `nom_livreur`, `ville`) VALUES
(1, 'Express Deliver', 'Paris'),
(2, 'Rapide Transport', 'Lyon'),
(3, 'Super Fast', 'Marseille'),
(4, 'Speedy Post', 'Toulouse'),
(5, 'Jet Express', 'Lille');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `articles`
--
ALTER TABLE `articles`
  ADD PRIMARY KEY (`id_article`);

--
-- Index pour la table `clients`
--
ALTER TABLE `clients`
  ADD PRIMARY KEY (`id_client`);

--
-- Index pour la table `commandes`
--
ALTER TABLE `commandes`
  ADD PRIMARY KEY (`id_commande`),
  ADD KEY `id_client` (`id_client`);

--
-- Index pour la table `lignecommande`
--
ALTER TABLE `lignecommande`
  ADD PRIMARY KEY (`id_ligne`),
  ADD KEY `id_commande` (`id_commande`),
  ADD KEY `id_article` (`id_article`);

--
-- Index pour la table `livraison`
--
ALTER TABLE `livraison`
  ADD PRIMARY KEY (`id_livraison`),
  ADD KEY `id_commande` (`id_commande`),
  ADD KEY `id_livreur` (`id_livreur`);

--
-- Index pour la table `livreurs`
--
ALTER TABLE `livreurs`
  ADD PRIMARY KEY (`id_livreur`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `lignecommande`
--
ALTER TABLE `lignecommande`
  MODIFY `id_ligne` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `commandes`
--
ALTER TABLE `commandes`
  ADD CONSTRAINT `commandes_ibfk_1` FOREIGN KEY (`id_client`) REFERENCES `clients` (`id_client`);

--
-- Contraintes pour la table `lignecommande`
--
ALTER TABLE `lignecommande`
  ADD CONSTRAINT `lignecommande_ibfk_1` FOREIGN KEY (`id_commande`) REFERENCES `commandes` (`id_commande`),
  ADD CONSTRAINT `lignecommande_ibfk_2` FOREIGN KEY (`id_article`) REFERENCES `articles` (`id_article`);

--
-- Contraintes pour la table `livraison`
--
ALTER TABLE `livraison`
  ADD CONSTRAINT `livraison_ibfk_1` FOREIGN KEY (`id_commande`) REFERENCES `commandes` (`id_commande`),
  ADD CONSTRAINT `livraison_ibfk_2` FOREIGN KEY (`id_livreur`) REFERENCES `livreurs` (`id_livreur`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
