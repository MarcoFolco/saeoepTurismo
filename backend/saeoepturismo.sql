-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 27-11-2022 a las 20:32:24
-- Versión del servidor: 8.0.27
-- Versión de PHP: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `saeoepturismo`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `discounts`
--

DROP TABLE IF EXISTS `discounts`;
CREATE TABLE IF NOT EXISTS `discounts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `enterprise_fk` int NOT NULL,
  `places` text NOT NULL,
  `value` float NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_enterprise` (`enterprise_fk`)
) ENGINE=MyISAM AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb3;

--
-- Volcado de datos para la tabla `discounts`
--

INSERT INTO `discounts` (`id`, `enterprise_fk`, `places`, `value`) VALUES
(1, 1, 'Misiones - Bariloche', 15),
(2, 2, 'Miramar - Gesell - Mar del Plata - Pinamar', 15),
(3, 3, 'Rosario - Tucumán - Santiago del Estero', 15),
(4, 4, 'Salta - Jujuy - La Quiaca - Córdoba', 15),
(5, 5, 'Bahía Blanca - Costa Atlántica', 15),
(6, 6, 'R.O. Uruguay', 10),
(7, 7, 'A todo el territorio nacional', 15),
(8, 8, 'A varios puntos del territorio nacional', 20);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `enterprises`
--

DROP TABLE IF EXISTS `enterprises`;
CREATE TABLE IF NOT EXISTS `enterprises` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb3;

--
-- Volcado de datos para la tabla `enterprises`
--

INSERT INTO `enterprises` (`id`, `name`) VALUES
(1, 'Vía Bariloche'),
(2, 'Micromar'),
(3, 'Almirante Brown'),
(4, 'General Urquiza'),
(5, 'Plusmar'),
(6, 'Colonia Express'),
(7, 'Flecha Bus, rápido - El Tata, San José'),
(8, 'Tte. Nueva Chevallier');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pages`
--

DROP TABLE IF EXISTS `pages`;
CREATE TABLE IF NOT EXISTS `pages` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(250) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3;

--
-- Volcado de datos para la tabla `pages`
--

INSERT INTO `pages` (`id`, `name`) VALUES
(1, 'Cordoba'),
(2, 'Patagonia');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `travels`
--

DROP TABLE IF EXISTS `travels`;
CREATE TABLE IF NOT EXISTS `travels` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `img_id` varchar(250) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `page_fk` int NOT NULL,
  `dates` varchar(255) NOT NULL,
  `assets` text NOT NULL,
  `extras` text,
  `hotel` varchar(255) NOT NULL,
  `price` float NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_page` (`page_fk`) USING BTREE
) ENGINE=MyISAM AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb3;

--
-- Volcado de datos para la tabla `travels`
--

INSERT INTO `travels` (`id`, `title`, `img_id`, `page_fk`, `dates`, `assets`, `extras`, `hotel`, `price`) VALUES
(1, 'Villa Carlos Paz', 'dgoldxahhe7btaxi9su9', 1, '18 de Noviembre y 07 de Diciembre', 'Bus semicama - Traslados - 02 Noches de alojamiento en destino', 'Excursiones opcionales - Asistencia al viajero', 'Hotel Bahía Norte 2* C/Des', 35000),
(2, 'Capilla del Monte', 'xoewh6ejbq73ab9f9vz4', 1, '20 de Octubre y 15 de Noviembre', 'Bus semicama - Traslados - 05 Noches de alojamiento en destino', 'Excursiones opcionales - Asistencia al viajero', 'Hotel Posada del Inifinito C/Des', 24000),
(3, 'Mina Clavero', 'm84a3yll0suadjmbudhs', 1, '18 de Noviembre y 07 de Diciembre', 'Bus semicama - Traslados - 04 Noches de alojamiento en destino', 'Excursiones opcionales - Asistencia al viajero', 'Cabañas La Catalana', 30000),
(4, 'Calafate', 'vau2fvcf9z8415ijpvrl', 2, '15 de Octubre y 23 de Diciembre', 'Pasaje aéreo - Traslado ida y vuelta en destino - 03 Noches de alojamiento', 'Full Day Glaciar Perito Moreno', 'Hotel Desing Suites 4*', 40000),
(5, 'Ushuaia', 'krq27k6pytmyotqb3s3d', 2, '19 de Septiembre y 30 de Noviembre', 'Pasaje aéreo - Traslados - 04 Noches de alojamiento', 'Excursión medio día Parque Nacional Tierra del Fuego', 'Hostal del Bosque 3* con desayuno buffet', 30000),
(6, 'Bariloche', 'n16lyfae8tkqm2x0hssv', 2, '10 y 25 de Octubre', 'Bus desde terminal - 05 Noches de alojamiento', 'Excursiones opcionales - Asistencia al viajero', 'Hotel Aguas del Sur', 25000);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(250) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(250) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb3;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `username`, `password`) VALUES
(1, 'mfolco', '0192023a7bbd73250516f069df18b500');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
