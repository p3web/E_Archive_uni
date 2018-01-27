-- phpMyAdmin SQL Dump
-- version 4.7.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jan 13, 2018 at 05:49 PM
-- Server version: 5.6.38
-- PHP Version: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `wpacom_users_service`
--

-- --------------------------------------------------------

--
-- Table structure for table `access`
--

CREATE TABLE `access` (
  `id` int(11) NOT NULL,
  `name` varchar(50) COLLATE utf8_persian_ci NOT NULL COMMENT 'نام',
  `created_by` int(11) NOT NULL,
  `creationDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_persian_ci COMMENT='دسترسی';

--
-- Dumping data for table `access`
--

INSERT INTO `access` (`id`, `name`, `created_by`, `creationDate`) VALUES
(1, 'anahita', 12, '2017-09-11 06:53:35');

--
-- Triggers `access`
--
DELIMITER $$
CREATE TRIGGER `log_delete` AFTER DELETE ON `access` FOR EACH ROW INSERT INTO `logs`(`act`,`table`,`log`, `created_by`) VALUES('DELETE','access',old.`name`,@psco_user_id)
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `log_insert` AFTER INSERT ON `access` FOR EACH ROW INSERT INTO `logs`(`act`,`table`,`log`, `created_by`) VALUES('INSERT INTO','access',NEW.`name`,@psco_user_id)
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `log_update` AFTER UPDATE ON `access` FOR EACH ROW INSERT INTO `logs`(`act`,`table`,`log`, `created_by`) VALUES('UPDATE','access',CONCAT(old.`name` , ' to ', NEW.`name` ),@psco_user_id)
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `logs`
--

CREATE TABLE `logs` (
  `id` int(11) NOT NULL,
  `act` varchar(50) COLLATE utf8_persian_ci DEFAULT NULL COMMENT 'عملیات',
  `table` varchar(50) COLLATE utf8_persian_ci DEFAULT NULL COMMENT 'جدول',
  `log` varchar(1000) COLLATE utf8_persian_ci DEFAULT NULL COMMENT 'شرح',
  `created_by` int(11) DEFAULT '0',
  `creationDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_persian_ci COMMENT='ثوابق';

--
-- Dumping data for table `logs`
--

INSERT INTO `logs` (`id`, `act`, `table`, `log`, `created_by`, `creationDate`) VALUES
(1, 'INSERT INTO', 'access', 'anahita', 12, '2017-09-11 06:53:35');

-- --------------------------------------------------------

--
-- Table structure for table `organization`
--

CREATE TABLE `organization` (
  `id` int(11) NOT NULL,
  `name` varchar(50) COLLATE utf8_persian_ci NOT NULL COMMENT 'نام',
  `address` varchar(300) COLLATE utf8_persian_ci NOT NULL COMMENT 'آدرس',
  `tel` varchar(20) COLLATE utf8_persian_ci NOT NULL COMMENT 'تلفن',
  `fax` varchar(20) COLLATE utf8_persian_ci NOT NULL COMMENT 'فکس',
  `email` varchar(50) COLLATE utf8_persian_ci NOT NULL COMMENT 'ایمیل',
  `comment` text COLLATE utf8_persian_ci NOT NULL COMMENT 'شرح',
  `created_by` int(11) NOT NULL,
  `creationDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_persian_ci COMMENT='سازمان';

--
-- Triggers `organization`
--
DELIMITER $$
CREATE TRIGGER `log_delete_organization` AFTER DELETE ON `organization` FOR EACH ROW INSERT INTO `logs`(`act`,`table`,`log`, `created_by`) VALUES('DELETE','organization',old.`id`,@psco_user_id)
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `log_insert_organization` AFTER INSERT ON `organization` FOR EACH ROW INSERT INTO `logs`(`act`,`table`,`log`, `created_by`) VALUES('INSERT INTO','organization',NEW.`id`,@psco_user_id)
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `log_update_organization` AFTER UPDATE ON `organization` FOR EACH ROW INSERT INTO `logs`(`act`,`table`,`log`, `created_by`) VALUES('UPDATE','organization',CONCAT(old.`id` , ' to ', NEW.`id` ),@psco_user_id)
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `profile`
--

CREATE TABLE `profile` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `age` int(11) DEFAULT NULL COMMENT 'سن',
  `sex` varchar(20) COLLATE utf8_persian_ci DEFAULT NULL COMMENT 'جنسیت',
  `father_name` varchar(50) COLLATE utf8_persian_ci DEFAULT NULL COMMENT 'نام پدر',
  `mather_name` varchar(50) COLLATE utf8_persian_ci DEFAULT NULL COMMENT 'نام مادر',
  `is_single` int(11) DEFAULT NULL COMMENT 'آیا مجرد است',
  `national_code` varchar(10) COLLATE utf8_persian_ci DEFAULT NULL COMMENT 'کد ملی',
  `email` varchar(50) COLLATE utf8_persian_ci DEFAULT NULL COMMENT 'ایمیل',
  `tel` varchar(20) COLLATE utf8_persian_ci DEFAULT NULL COMMENT 'تلفن',
  `mobile` varchar(20) COLLATE utf8_persian_ci DEFAULT NULL COMMENT 'موبایل',
  `fax` varchar(20) COLLATE utf8_persian_ci DEFAULT NULL COMMENT 'فکس',
  `address` varchar(300) COLLATE utf8_persian_ci DEFAULT NULL COMMENT 'آدرس',
  `last_modified` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT 'تاریخ آخرین تغییر',
  `created_by` int(11) NOT NULL,
  `creationDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_persian_ci COMMENT='پروفایل';

--
-- Triggers `profile`
--
DELIMITER $$
CREATE TRIGGER `log_delete_profile` AFTER DELETE ON `profile` FOR EACH ROW INSERT INTO `logs`(`act`,`table`,`log`, `created_by`) VALUES('DELETE','profile',old.`id`,@psco_user_id)
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `log_insert_profile` AFTER INSERT ON `profile` FOR EACH ROW INSERT INTO `logs`(`act`,`table`,`log`, `created_by`) VALUES('INSERT INTO','profile',NEW.`id`,@psco_user_id)
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `log_update_profile` AFTER UPDATE ON `profile` FOR EACH ROW INSERT INTO `logs`(`act`,`table`,`log`, `created_by`) VALUES('UPDATE','profile',CONCAT(old.`id` , ' to ', NEW.`id` ),@psco_user_id)
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `system`
--

CREATE TABLE `system` (
  `id` int(11) NOT NULL,
  `name` varchar(50) COLLATE utf8_persian_ci NOT NULL COMMENT 'نام',
  `created_by` int(11) NOT NULL,
  `creationDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_persian_ci COMMENT='سیستم';

--
-- Triggers `system`
--
DELIMITER $$
CREATE TRIGGER `log_delete_system` AFTER DELETE ON `system` FOR EACH ROW INSERT INTO `logs`(`act`,`table`,`log`, `created_by`) VALUES('DELETE','system',old.`id`,@psco_user_id)
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `log_insert_system` AFTER INSERT ON `system` FOR EACH ROW INSERT INTO `logs`(`act`,`table`,`log`, `created_by`) VALUES('INSERT INTO','system',NEW.`id`,@psco_user_id)
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `log_update_system` AFTER UPDATE ON `system` FOR EACH ROW INSERT INTO `logs`(`act`,`table`,`log`, `created_by`) VALUES('UPDATE','system',CONCAT(old.`id` , ' to ', NEW.`id` ),@psco_user_id)
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `type`
--

CREATE TABLE `type` (
  `id` int(11) NOT NULL,
  `name` varchar(50) COLLATE utf8_persian_ci NOT NULL COMMENT 'نام',
  `created_by` int(11) NOT NULL,
  `creationDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_persian_ci COMMENT='نوع';

--
-- Triggers `type`
--
DELIMITER $$
CREATE TRIGGER `log_delete_type` AFTER DELETE ON `type` FOR EACH ROW INSERT INTO `logs`(`act`,`table`,`log`, `created_by`) VALUES('DELETE','type',old.`id`,@psco_user_id)
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `log_insert_type` AFTER INSERT ON `type` FOR EACH ROW INSERT INTO `logs`(`act`,`table`,`log`, `created_by`) VALUES('INSERT INTO','type',NEW.`id`,@psco_user_id)
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `log_update_type` AFTER UPDATE ON `type` FOR EACH ROW INSERT INTO `logs`(`act`,`table`,`log`, `created_by`) VALUES('UPDATE','type',CONCAT(old.`id` , ' to ', NEW.`id` ),@psco_user_id)
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `name` varchar(50) COLLATE utf8_persian_ci DEFAULT NULL COMMENT 'نام',
  `lastname` varchar(50) COLLATE utf8_persian_ci DEFAULT NULL COMMENT 'نام خانوادگی',
  `nik_name` varchar(50) COLLATE utf8_persian_ci DEFAULT NULL COMMENT 'معروف به ',
  `user_name` varchar(50) COLLATE utf8_persian_ci NOT NULL COMMENT 'نام کاربری',
  `pssword` varchar(150) COLLATE utf8_persian_ci NOT NULL COMMENT 'رمز عبور',
  `avatar` varchar(150) COLLATE utf8_persian_ci DEFAULT NULL COMMENT 'تصویر',
  `last_password_failed` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT 'آخرین بار که رمز اشتباه بوده',
  `count_password_failed` int(11) NOT NULL COMMENT 'تعداد رمز اشتباه',
  `last_change_password` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT 'آخرین تغییر رمز',
  `last_modified` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT 'آخرین تغییر',
  `created_by` int(11) NOT NULL,
  `creationDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_persian_ci COMMENT='کاربر';

--
-- Triggers `user`
--
DELIMITER $$
CREATE TRIGGER `log_delete_user` AFTER DELETE ON `user` FOR EACH ROW INSERT INTO `logs`(`act`,`table`,`log`, `created_by`) VALUES('DELETE','user',old.`id`,@psco_user_id)
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `log_insert_user` AFTER INSERT ON `user` FOR EACH ROW INSERT INTO `logs`(`act`,`table`,`log`, `created_by`) VALUES('INSERT INTO','user',NEW.`id`,@psco_user_id)
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `log_update_user` AFTER UPDATE ON `user` FOR EACH ROW INSERT INTO `logs`(`act`,`table`,`log`, `created_by`) VALUES('UPDATE','user',CONCAT(old.`id` , ' to ', NEW.`id` ),@psco_user_id)
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `userAccess`
--

CREATE TABLE `userAccess` (
  `userID` int(11) NOT NULL COMMENT 'شناسه کاربر',
  `accessID` int(11) NOT NULL COMMENT 'شناسه دسترسی',
  `created_by` int(11) NOT NULL,
  `creationDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_persian_ci COMMENT='دسترسی کاربر';

--
-- Triggers `userAccess`
--
DELIMITER $$
CREATE TRIGGER `log_delete_userAccess` AFTER DELETE ON `userAccess` FOR EACH ROW INSERT INTO `logs`(`act`,`table`,`log`, `created_by`) VALUES('DELETE','userAccess',old.`userID`,@psco_user_id)
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `log_insert_userAccess` AFTER INSERT ON `userAccess` FOR EACH ROW INSERT INTO `logs`(`act`,`table`,`log`, `created_by`) VALUES('INSERT INTO','userAccess',NEW.`userID`,@psco_user_id)
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `log_update_userAccess` AFTER UPDATE ON `userAccess` FOR EACH ROW INSERT INTO `logs`(`act`,`table`,`log`, `created_by`) VALUES('UPDATE','userAccess',CONCAT(old.`userID` , ' to ', NEW.`userID` ),@psco_user_id)
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `users_organization`
--

CREATE TABLE `users_organization` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL COMMENT 'شناسه کاریر',
  `org_id` int(11) NOT NULL COMMENT 'شناسه سازمان',
  `rol` varchar(50) COLLATE utf8_persian_ci NOT NULL COMMENT 'نقش',
  `created_by` int(11) NOT NULL,
  `creationDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_persian_ci COMMENT='کاربران سازمان';

--
-- Triggers `users_organization`
--
DELIMITER $$
CREATE TRIGGER `log_delete_users_organization` AFTER DELETE ON `users_organization` FOR EACH ROW INSERT INTO `logs`(`act`,`table`,`log`, `created_by`) VALUES('DELETE','users_organization',old.`id`,@psco_user_id)
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `log_insert_users_organization` AFTER INSERT ON `users_organization` FOR EACH ROW INSERT INTO `logs`(`act`,`table`,`log`, `created_by`) VALUES('INSERT INTO','users_organization',NEW.`id`,@psco_user_id)
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `log_update_users_organization` AFTER UPDATE ON `users_organization` FOR EACH ROW INSERT INTO `logs`(`act`,`table`,`log`, `created_by`) VALUES('UPDATE','users_organization',CONCAT(old.`id` , ' to ', NEW.`id` ),@psco_user_id)
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `users_system`
--

CREATE TABLE `users_system` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL COMMENT 'شناسه کاربر',
  `system_id` int(255) NOT NULL COMMENT 'شناسه سیستم',
  `token` varchar(255) COLLATE utf8_persian_ci NOT NULL COMMENT 'شناسه',
  `expire_date` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT 'تاریخ انقضا',
  `created_by` int(11) NOT NULL,
  `creationDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_persian_ci COMMENT='کاربران سیستم';

--
-- Triggers `users_system`
--
DELIMITER $$
CREATE TRIGGER `log_delete_users_system` AFTER DELETE ON `users_system` FOR EACH ROW INSERT INTO `logs`(`act`,`table`,`log`, `created_by`) VALUES('DELETE','users_system',old.`id`,@psco_user_id)
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `log_insert_users_system` AFTER INSERT ON `users_system` FOR EACH ROW INSERT INTO `logs`(`act`,`table`,`log`, `created_by`) VALUES('INSERT INTO','users_system',NEW.`id`,@psco_user_id)
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `log_update_users_system` AFTER UPDATE ON `users_system` FOR EACH ROW INSERT INTO `logs`(`act`,`table`,`log`, `created_by`) VALUES('UPDATE','users_system',CONCAT(old.`id` , ' to ', NEW.`id` ),@psco_user_id)
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `users_type`
--

CREATE TABLE `users_type` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL COMMENT 'شناسه کاربر',
  `type_id` int(11) NOT NULL COMMENT 'شناسه نوع',
  `created_by` int(11) NOT NULL,
  `creationDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_persian_ci COMMENT='نوع کاربران';

--
-- Triggers `users_type`
--
DELIMITER $$
CREATE TRIGGER `log_delete_users_type` AFTER DELETE ON `users_type` FOR EACH ROW INSERT INTO `logs`(`act`,`table`,`log`, `created_by`) VALUES('DELETE','users_type',old.`id`,@psco_user_id)
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `log_insert_users_type` AFTER INSERT ON `users_type` FOR EACH ROW INSERT INTO `logs`(`act`,`table`,`log`, `created_by`) VALUES('INSERT INTO','users_type',NEW.`id`,@psco_user_id)
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `log_update_users_type` AFTER UPDATE ON `users_type` FOR EACH ROW INSERT INTO `logs`(`act`,`table`,`log`, `created_by`) VALUES('UPDATE','users_type',CONCAT(old.`id` , ' to ', NEW.`id` ),@psco_user_id)
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Stand-in structure for view `view_users_login`
-- (See below for the actual view)
--
CREATE TABLE `view_users_login` (
`id` int(11)
,`user_name` varchar(50)
,`pssword` varchar(150)
,`avatar` varchar(150)
);

-- --------------------------------------------------------

--
-- Stand-in structure for view `view_users_organization_organization`
-- (See below for the actual view)
--
CREATE TABLE `view_users_organization_organization` (
`id` int(11)
,`user_id` int(11)
,`name` varchar(50)
,`address` varchar(300)
,`tel` varchar(20)
,`fax` varchar(20)
,`email` varchar(50)
,`comment` text
,`rol` varchar(50)
,`created_by` int(11)
,`creationDate` timestamp
);

-- --------------------------------------------------------

--
-- Stand-in structure for view `view_users_profile`
-- (See below for the actual view)
--
CREATE TABLE `view_users_profile` (
`id` int(11)
,`name` varchar(50)
,`lastname` varchar(50)
,`nik_name` varchar(50)
,`user_name` varchar(50)
,`pssword` varchar(150)
,`avatar` varchar(150)
,`age` int(11)
,`sex` varchar(20)
,`father_name` varchar(50)
,`mather_name` varchar(50)
,`is_single` int(11)
,`national_code` varchar(10)
,`email` varchar(50)
,`tel` varchar(20)
,`mobile` varchar(20)
,`fax` varchar(20)
,`address` varchar(300)
,`last_password_failed` timestamp
,`count_password_failed` int(11)
,`last_change_password` timestamp
,`last_modified` timestamp
,`created_by` int(11)
,`creationDate` timestamp
);

-- --------------------------------------------------------

--
-- Stand-in structure for view `view_users_system_systemName`
-- (See below for the actual view)
--
CREATE TABLE `view_users_system_systemName` (
`id` int(11)
,`user_id` int(11)
,`system` varchar(50)
,`token` varchar(255)
,`expire_date` timestamp
,`created_by` int(11)
,`creationDate` timestamp
);

-- --------------------------------------------------------

--
-- Stand-in structure for view `view_users_type_typeName`
-- (See below for the actual view)
--
CREATE TABLE `view_users_type_typeName` (
`id` int(11)
,`user_id` int(11)
,`type` varchar(50)
,`created_by` int(11)
,`creationDate` timestamp
);

-- --------------------------------------------------------

--
-- Structure for view `view_users_login`
--
DROP TABLE IF EXISTS `view_users_login`;

CREATE ALGORITHM=UNDEFINED DEFINER=`wpacom`@`localhost` SQL SECURITY DEFINER VIEW `view_users_login`  AS  select `user`.`id` AS `id`,`user`.`user_name` AS `user_name`,`user`.`pssword` AS `pssword`,`user`.`avatar` AS `avatar` from `user` where (`user`.`count_password_failed` < 7) ;

-- --------------------------------------------------------

--
-- Structure for view `view_users_organization_organization`
--
DROP TABLE IF EXISTS `view_users_organization_organization`;

CREATE ALGORITHM=UNDEFINED DEFINER=`wpacom`@`localhost` SQL SECURITY DEFINER VIEW `view_users_organization_organization`  AS  select `users_organization`.`id` AS `id`,`users_organization`.`user_id` AS `user_id`,`organization`.`name` AS `name`,`organization`.`address` AS `address`,`organization`.`tel` AS `tel`,`organization`.`fax` AS `fax`,`organization`.`email` AS `email`,`organization`.`comment` AS `comment`,`users_organization`.`rol` AS `rol`,`users_organization`.`created_by` AS `created_by`,`users_organization`.`creationDate` AS `creationDate` from (`users_organization` join `organization` on((`users_organization`.`org_id` = `organization`.`id`))) ;

-- --------------------------------------------------------

--
-- Structure for view `view_users_profile`
--
DROP TABLE IF EXISTS `view_users_profile`;

CREATE ALGORITHM=UNDEFINED DEFINER=`wpacom`@`localhost` SQL SECURITY DEFINER VIEW `view_users_profile`  AS  select `user`.`id` AS `id`,`user`.`name` AS `name`,`user`.`lastname` AS `lastname`,`user`.`nik_name` AS `nik_name`,`user`.`user_name` AS `user_name`,`user`.`pssword` AS `pssword`,`user`.`avatar` AS `avatar`,`profile`.`age` AS `age`,`profile`.`sex` AS `sex`,`profile`.`father_name` AS `father_name`,`profile`.`mather_name` AS `mather_name`,`profile`.`is_single` AS `is_single`,`profile`.`national_code` AS `national_code`,`profile`.`email` AS `email`,`profile`.`tel` AS `tel`,`profile`.`mobile` AS `mobile`,`profile`.`fax` AS `fax`,`profile`.`address` AS `address`,`user`.`last_password_failed` AS `last_password_failed`,`user`.`count_password_failed` AS `count_password_failed`,`user`.`last_change_password` AS `last_change_password`,`user`.`last_modified` AS `last_modified`,`user`.`created_by` AS `created_by`,`user`.`creationDate` AS `creationDate` from (`user` join `profile` on((`profile`.`user_id` = `user`.`id`))) ;

-- --------------------------------------------------------

--
-- Structure for view `view_users_system_systemName`
--
DROP TABLE IF EXISTS `view_users_system_systemName`;

CREATE ALGORITHM=UNDEFINED DEFINER=`wpacom`@`localhost` SQL SECURITY DEFINER VIEW `view_users_system_systemName`  AS  select `users_system`.`id` AS `id`,`users_system`.`user_id` AS `user_id`,`system`.`name` AS `system`,`users_system`.`token` AS `token`,`users_system`.`expire_date` AS `expire_date`,`users_system`.`created_by` AS `created_by`,`users_system`.`creationDate` AS `creationDate` from (`users_system` join `system` on((`users_system`.`system_id` = `system`.`id`))) ;

-- --------------------------------------------------------

--
-- Structure for view `view_users_type_typeName`
--
DROP TABLE IF EXISTS `view_users_type_typeName`;

CREATE ALGORITHM=UNDEFINED DEFINER=`wpacom`@`localhost` SQL SECURITY DEFINER VIEW `view_users_type_typeName`  AS  select `users_type`.`id` AS `id`,`users_type`.`user_id` AS `user_id`,`type`.`name` AS `type`,`users_type`.`created_by` AS `created_by`,`users_type`.`creationDate` AS `creationDate` from (`users_type` join `type` on((`users_type`.`type_id` = `type`.`id`))) ;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `access`
--
ALTER TABLE `access`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `logs`
--
ALTER TABLE `logs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `organization`
--
ALTER TABLE `organization`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `profile`
--
ALTER TABLE `profile`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `system`
--
ALTER TABLE `system`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `type`
--
ALTER TABLE `type`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `user_name` (`user_name`);

--
-- Indexes for table `userAccess`
--
ALTER TABLE `userAccess`
  ADD PRIMARY KEY (`userID`);

--
-- Indexes for table `users_organization`
--
ALTER TABLE `users_organization`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users_system`
--
ALTER TABLE `users_system`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users_type`
--
ALTER TABLE `users_type`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `access`
--
ALTER TABLE `access`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `logs`
--
ALTER TABLE `logs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `organization`
--
ALTER TABLE `organization`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `profile`
--
ALTER TABLE `profile`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `system`
--
ALTER TABLE `system`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `type`
--
ALTER TABLE `type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `userAccess`
--
ALTER TABLE `userAccess`
  MODIFY `userID` int(11) NOT NULL AUTO_INCREMENT COMMENT 'شناسه کاربر';
--
-- AUTO_INCREMENT for table `users_organization`
--
ALTER TABLE `users_organization`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `users_system`
--
ALTER TABLE `users_system`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `users_type`
--
ALTER TABLE `users_type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
