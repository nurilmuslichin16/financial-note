-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               8.0.30 - MySQL Community Server - GPL
-- Server OS:                    Win64
-- HeidiSQL Version:             12.1.0.6537
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for db_financial_note
CREATE DATABASE IF NOT EXISTS `db_financial_note` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `db_financial_note`;

-- Dumping structure for table db_financial_note.tb_hutang_piutang
CREATE TABLE IF NOT EXISTS `tb_hutang_piutang` (
  `id_hutang_piutang` int NOT NULL AUTO_INCREMENT,
  `nama_orang` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `jenis` enum('HUTANG','PIUTANG') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'HUTANG',
  `nominal` bigint NOT NULL DEFAULT '0',
  `keterangan` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `tanggal` date DEFAULT NULL,
  `status` enum('LUNAS','BELUM LUNAS') COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'BELUM LUNAS',
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL,
  `safe_delete` enum('T','F') COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'F',
  PRIMARY KEY (`id_hutang_piutang`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table db_financial_note.tb_hutang_piutang: ~0 rows (approximately)

-- Dumping structure for table db_financial_note.tb_kategori
CREATE TABLE IF NOT EXISTS `tb_kategori` (
  `id_kategori` int NOT NULL AUTO_INCREMENT,
  `nama` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `jenis` enum('PEMASUKAN','PENGELUARAN') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'PEMASUKAN',
  `warna` varchar(50) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `icon` varchar(50) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `by_user` int DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL,
  `safe_delete` enum('T','F') COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'F',
  PRIMARY KEY (`id_kategori`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table db_financial_note.tb_kategori: ~0 rows (approximately)

-- Dumping structure for table db_financial_note.tb_pemasukan
CREATE TABLE IF NOT EXISTS `tb_pemasukan` (
  `id_pemasukan` int NOT NULL AUTO_INCREMENT,
  `id_kategori` int NOT NULL,
  `id_user` int NOT NULL,
  `tanggal` date DEFAULT NULL,
  `nominal` bigint NOT NULL DEFAULT '0',
  `keterangan` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL,
  `safe_delete` enum('T','F') COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'F',
  PRIMARY KEY (`id_pemasukan`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table db_financial_note.tb_pemasukan: ~0 rows (approximately)

-- Dumping structure for table db_financial_note.tb_pengeluaran
CREATE TABLE IF NOT EXISTS `tb_pengeluaran` (
  `id_pengeluaran` int NOT NULL AUTO_INCREMENT,
  `id_kategori` int NOT NULL,
  `id_user` int NOT NULL,
  `tanggal` date DEFAULT NULL,
  `nominal` bigint NOT NULL DEFAULT '0',
  `keterangan` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL,
  `safe_delete` enum('T','F') COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'F',
  PRIMARY KEY (`id_pengeluaran`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table db_financial_note.tb_pengeluaran: ~0 rows (approximately)

-- Dumping structure for table db_financial_note.tb_planning
CREATE TABLE IF NOT EXISTS `tb_planning` (
  `id_planning` int NOT NULL AUTO_INCREMENT,
  `id_user` int NOT NULL,
  `nama` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `kategori` varchar(50) COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT 'Belanja, Investasi, Nabung, Dan Lainnya',
  `nominal` bigint NOT NULL DEFAULT '0',
  `tanggal` date DEFAULT NULL,
  `keterangan` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL,
  `safe_delete` enum('T','F') COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'F',
  PRIMARY KEY (`id_planning`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table db_financial_note.tb_planning: ~0 rows (approximately)

-- Dumping structure for table db_financial_note.tb_portofolio_investasi
CREATE TABLE IF NOT EXISTS `tb_portofolio_investasi` (
  `id_portofolio_investasi` int NOT NULL AUTO_INCREMENT,
  `nama` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `kategori` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT 'Saham, Reksadana, Emas, Obligasi, Properti, Dan Lainnya',
  `platform` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT 'IPOT, Pegadaian, Peluang',
  `nominal` bigint NOT NULL DEFAULT '0',
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL,
  `safe_delete` enum('T','F') COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'F',
  PRIMARY KEY (`id_portofolio_investasi`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table db_financial_note.tb_portofolio_investasi: ~0 rows (approximately)

-- Dumping structure for table db_financial_note.tb_users
CREATE TABLE IF NOT EXISTS `tb_users` (
  `id_user` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `nama` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `saldo` bigint NOT NULL DEFAULT '0',
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL,
  `safe_delete` enum('T','F') COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'F',
  PRIMARY KEY (`id_user`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table db_financial_note.tb_users: ~1 rows (approximately)
INSERT INTO `tb_users` (`id_user`, `username`, `password`, `nama`, `email`, `saldo`, `created_at`, `updated_at`, `deleted_at`, `safe_delete`) VALUES
	(1, 'nurilmuslichin', '$2b$10$E.cFkOr/GrMwm6F3lEKczu3QtI4V3ApCQsFBzRxZCnQgjQp1PWs52', 'Nuril Muslichin', 'nurilmuslichin16@gmail.com', 0, '2023-07-10 06:48:34', '2023-07-10 06:48:34', NULL, 'F');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
