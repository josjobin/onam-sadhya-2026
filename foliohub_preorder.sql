-- phpMyAdmin SQL Dump
-- version 5.2.3
-- https://www.phpmyadmin.net/
--
-- Host: dedivirt4003.your-server.de
-- Generation Time: Jul 11, 2026 at 11:50 AM
-- Server version: 10.11.14-MariaDB-0+deb12u2
-- PHP Version: 8.4.23

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `foliohub_preorder`
--

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `public_order_id` varchar(15) DEFAULT NULL,
  `customer_type` enum('retail','wholesale') NOT NULL,
  `contact_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(50) NOT NULL,
  `city` enum('Gothenburg','Halmstad','Jönköping','Borås','Helsingborg','Trollhättan') NOT NULL,
  `quantity` int(11) NOT NULL,
  `company_name` varchar(255) DEFAULT NULL,
  `org_number` varchar(100) DEFAULT NULL,
  `vat_id` varchar(100) DEFAULT NULL,
  `payment_method` varchar(50) DEFAULT 'unspecified',
  `payment_status` enum('pending','paid','failed') DEFAULT 'pending',
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `public_order_id`, `customer_type`, `contact_name`, `email`, `phone`, `city`, `quantity`, `company_name`, `org_number`, `vat_id`, `payment_method`, `payment_status`, `created_at`, `updated_at`) VALUES
(1, NULL, 'retail', 'Jobin Jose', 'brownbagab@gmail.com', '+46760955565', 'Gothenburg', 1, NULL, NULL, NULL, 'unspecified', 'paid', '2026-07-06 22:36:52', '2026-07-06 23:30:50'),
(2, NULL, 'retail', 'Jobin Jose', 'brownbagab@gmail.com', '+46760955565', 'Gothenburg', 1, NULL, NULL, NULL, 'unspecified', 'paid', '2026-07-06 23:17:04', '2026-07-06 23:30:48'),
(3, NULL, 'retail', 'Jobin Jose', 'brownbagab@gmail.com', '+46724381561', 'Halmstad', 3, NULL, NULL, NULL, 'unspecified', 'paid', '2026-07-07 00:24:29', '2026-07-07 00:25:09'),
(4, NULL, 'retail', 'Jobin Jose', 'brownbagab@gmail.com', '+46724381561', 'Jönköping', 1, NULL, NULL, NULL, 'unspecified', 'paid', '2026-07-07 09:22:19', '2026-07-07 09:22:43'),
(5, NULL, 'retail', 'Jobin Jose', 'brownbagab@gmail.com', '+46724381561', 'Borås', 4, NULL, NULL, NULL, 'unspecified', 'paid', '2026-07-07 09:40:59', '2026-07-07 10:34:16'),
(6, 'ORD-91EAC9', 'retail', 'Jobin Jose', 'brownbagab@gmail.com', '+46724381561', 'Borås', 3, NULL, NULL, NULL, 'unspecified', 'paid', '2026-07-07 10:33:34', '2026-07-07 10:34:15'),
(7, 'ORD-ADE8D0', 'retail', 'Jobin Jose', 'adarshkindrajith@gmail.com', '+46760955565', 'Gothenburg', 1, NULL, NULL, NULL, 'unspecified', 'paid', '2026-07-07 12:39:35', '2026-07-08 22:25:17'),
(8, 'ORD-B18679', 'retail', 'Jobin Jose', 'brownbagab@gmail.com', '+46724381561', 'Halmstad', 1, NULL, NULL, NULL, 'unspecified', 'paid', '2026-07-07 12:39:57', '2026-07-08 22:25:16'),
(9, 'ORD-E8F2FA', 'retail', 'Jobin Jose', 'brownbagab@gmail.com', '+46724381561', 'Halmstad', 1, NULL, NULL, NULL, 'unspecified', 'paid', '2026-07-07 14:04:13', '2026-07-08 22:25:15'),
(10, 'ORD-EBF826', 'retail', 'Jobin Jose', 'brownbagab@gmail.com', '+46724381561', 'Jönköping', 1, NULL, NULL, NULL, 'unspecified', 'paid', '2026-07-07 14:05:50', '2026-07-08 22:25:13'),
(11, 'ORD-8AA96F', 'retail', 'Jobin Jose', 'josjobin@hotmail.com', '+46727824213', 'Trollhättan', 1, NULL, NULL, NULL, 'unspecified', 'pending', '2026-07-08 22:34:01', '2026-07-08 22:34:01'),
(12, 'ORD-C0FB3C', 'retail', 'NITHIN KALANGODUMMAL', 'nithinkuttu29@gmail.com', '+46709186322 ', 'Gothenburg', 2, NULL, NULL, NULL, 'unspecified', 'pending', '2026-07-08 23:36:50', '2026-07-08 23:36:50'),
(13, 'ORD-BE631E', 'retail', 'Joseph Antony', 'josephedappady@gmail.com', '0720425537', 'Gothenburg', 100, NULL, NULL, NULL, 'unspecified', 'pending', '2026-07-10 16:04:37', '2026-07-10 16:04:37'),
(14, 'ORD-C8963C', 'retail', 'Joseph Antony', 'josephedappady@gmail.com', '0720425537', 'Gothenburg', 1, NULL, NULL, NULL, 'unspecified', 'pending', '2026-07-10 16:05:09', '2026-07-10 16:05:09'),
(15, 'ORD-075560', 'retail', 'Jobin Jose', 'josjobin@hotmail.com', '+46727824213', 'Halmstad', 1, NULL, NULL, NULL, 'unspecified', 'pending', '2026-07-10 16:47:30', '2026-07-10 16:47:30');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `public_order_id` (`public_order_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
