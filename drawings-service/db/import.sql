# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 127.0.0.1 (MySQL 5.7.23)
# Database: drawings
# Generation Time: 2018-10-03 18:51:35 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table drawing
# ------------------------------------------------------------

CREATE DATABASE `drawings`;

USE `drawings`;

CREATE TABLE `drawing` (
  `id` int(8) NOT NULL AUTO_INCREMENT,
  `image_url` varchar(255) DEFAULT '',
  `description` varchar(255) DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `drawing` WRITE;
/*!40000 ALTER TABLE `drawing` DISABLE KEYS */;

INSERT INTO `drawing` (`id`, `image_url`, `description`)
VALUES
	(1,'https://docs.google.com/drawings/d/e/2PACX-1vQhXrOIzMOfviWqH9XP2S9APoLdzmVycTQu_7caDVSs768iTgXkWo1Xx3vkMlcJJj0zkV0Kn3SeF73K/pub?w=232&h=480','test');

/*!40000 ALTER TABLE `drawing` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table interpretation
# ------------------------------------------------------------

CREATE TABLE `interpretation` (
  `id` int(8) NOT NULL AUTO_INCREMENT,
  `user_id` int(8) DEFAULT NULL,
  `drawing_id` int(8) DEFAULT NULL,
  `text` varchar(255) DEFAULT '',
  PRIMARY KEY (`id`),
  UNIQUE KEY `user_id` (`user_id`),
  KEY `drawing_id` (`drawing_id`),
  CONSTRAINT `interpretation_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  CONSTRAINT `interpretation_ibfk_2` FOREIGN KEY (`drawing_id`) REFERENCES `drawing` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `interpretation` WRITE;
/*!40000 ALTER TABLE `interpretation` DISABLE KEYS */;

INSERT INTO `interpretation` (`id`, `user_id`, `drawing_id`, `text`)
VALUES
	(2,1,1,'test');

/*!40000 ALTER TABLE `interpretation` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table user
# ------------------------------------------------------------

CREATE TABLE `user` (
  `id` int(8) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;

INSERT INTO `user` (`id`, `username`)
VALUES
	(1,'Chris');

/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
