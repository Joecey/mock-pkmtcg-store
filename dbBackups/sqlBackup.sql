-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: g00438816
-- ------------------------------------------------------
-- Server version	8.0.36

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int DEFAULT NULL,
  `product` text,
  `description` text,
  `type` text,
  `price` int DEFAULT NULL,
  `imagepath` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Bulbasaur','Bulbasaur, known as the Seed Pokemon, is a small, dinosaur-like creature with a plant bulb on its back. It is a loyal companion, with the bulb growing into a large plant as it evolves. Bulbasaur is gentle and friendly but will fiercely protect its friends when needed. It?s known for its ability to harness the power of nature, using moves like Vine Whip and Leech Seed.','Grass',5,'\\assets\\cards\\bulbasaur.jpg'),(2,'Charizard','Charizard, the Flame Pokemon, resembles a large dragon with fiery orange scales and powerful wings. With its immense strength and ability to breathe intense fire, Charizard is both a fearsome fighter and a majestic creature. It?s the final evolution of Charmander, evolving from a small lizard into a mighty force of nature, capable of reaching extreme altitudes during flight and unleashing devastating flames.','Fire',100,'\\assets\\cards\\charizard-ex.jpg'),(3,'Lapras','Lapras, the Transport Pokemon, is a gentle and intelligent water and ice-type Pokemon resembling a large, aquatic dinosaur. Known for its soothing song, Lapras is a caring companion often seen ferrying people across bodies of water. Its serene presence is contrasted by its power to summon blizzards with moves like Ice Beam, making it both a trusted partner and a capable fighter in battle.','Water',7,'\\assets\\cards\\lapras-ex.jpg'),(4,'Magikarp','Magikarp, the Fish Pokemon, is infamous for being weak and nearly helpless. With its floppy, underwhelming appearance, it is often seen as useless, but it can surprise many by evolving into the powerful Gyarados. Though its strength is limited, Magikarp still serves as a reminder that even the most unassuming Pokemon can possess hidden potential.','Water',64,'\\assets\\cards\\magikarp.jpg'),(5,'Pikachu','Pikachu, the Mouse Pokemon, is small, yellow, and full of energy. With its distinctive long ears and lightning bolt-shaped tail, Pikachu is not only the mascot of the Pokemon franchise but also a beloved companion. Pikachu can release powerful electric attacks, like Thunderbolt, and forms a deep bond with its trainer, often serving as a symbol of friendship and determination.','Electric',80,'\\assets\\cards\\pikachu-ex.jpg'),(6,'Reshiram','Reshiram, the Vast White Pokemon, is a majestic dragon with brilliant white scales and a fiery tail. It represents the concept of truth in the Pokemon world and is known for its ability to control fire and heat, capable of creating intense flames from its mouth. As a powerful Legendary Pokemon, Reshiram is often depicted as a protector of truth and a fierce adversary in battle.','Fire',200,'\\assets\\cards\\reshiram-ex.jpg'),(7,'Snivy','Snivy, the Grass Snake Pokemon, is a sleek, green reptilian Pokemon with a calm and composed demeanor. Despite its elegant appearance, Snivy is highly intelligent and quick to outsmart opponents in battle. It is the first evolution of its line, and as it grows, it becomes even more agile and tactical. Snivy?s proud nature makes it a formidable opponent when it fights.','Grass',2,'\\assets\\cards\\snivy.jpg'),(8,'Zekrom','Zekrom, the Deep Black Pokemon, is a Legendary creature resembling a dragon with a striking black body and electric abilities. Zekrom represents the concept of ideals and is known for its immense power, capable of generating electricity from its body to unleash devastating electric attacks like Fusion Flare. Zekrom is a force of nature, and it plays a key role in the mythology of the Unova region.','Electric',10,'\\assets\\cards\\zekrom.jpg');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-05-07 21:32:33
