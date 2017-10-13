-- phpMyAdmin SQL Dump
-- version phpStudy 2014
-- http://www.phpmyadmin.net
--
-- 主机: localhost
-- 生成日期: 2017 年 04 月 19 日 07:19
-- 服务器版本: 5.5.53
-- PHP 版本: 5.4.45

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- 数据库: `chat`
--

-- --------------------------------------------------------

--
-- 表的结构 `message`
--

CREATE TABLE IF NOT EXISTS `message` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user` varchar(255) DEFAULT NULL,
  `msg` text NOT NULL,
  `msgtime` time NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=23 ;

--
-- 转存表中的数据 `message`
--

INSERT INTO `message` (`id`, `user`, `msg`, `msgtime`) VALUES
(1, 'ww', '好坏vb', '09:46:00'),
(2, 'ww', '好坏vb', '09:46:00'),
(3, 'ww', 'xd', '09:46:00'),
(4, 'ww', 'xd', '09:46:00'),
(5, 'ww', 'uu', '09:48:00'),
(6, 'ww', 'jk', '09:49:00'),
(7, '', 'eee', '11:22:00'),
(8, '', 'eee', '11:22:00'),
(9, 'ww', 'eee', '11:22:00'),
(10, 'ww', 'jj', '11:23:00'),
(11, 'ww', 'ee', '11:42:00'),
(12, 'ww', 'ee', '11:42:00'),
(13, 'ww', 'rr', '11:45:00'),
(14, 'ww', 'hfu', '11:47:00'),
(15, 'ww', 'fcgf', '11:54:00'),
(16, 'ww', 'eee', '12:00:00'),
(17, 'ww', 'eee', '12:01:00'),
(18, 'ww', 'rr', '12:01:00'),
(19, 'ww', 'dfdf', '12:02:00'),
(20, '', 'dd', '14:27:00'),
(21, '%E7%8E%8B%E5%B0%91%E5%AE%9B', 'xs', '11:24:00'),
(22, '111111', '中午好！', '11:37:00');

-- --------------------------------------------------------

--
-- 表的结构 `person`
--

CREATE TABLE IF NOT EXISTS `person` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=4 ;

--
-- 转存表中的数据 `person`
--

INSERT INTO `person` (`id`, `user`, `password`) VALUES
(1, '111111', '111111'),
(2, 'ww', '1'),
(3, '王少宛', '271111');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
