-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th8 31, 2022 lúc 12:33 PM
-- Phiên bản máy phục vụ: 10.4.24-MariaDB
-- Phiên bản PHP: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `datatest`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `customer`
--

CREATE TABLE `customer` (
  `id` int(11) NOT NULL,
  `city` varchar(255) DEFAULT NULL,
  `first_name` varchar(255) NOT NULL,
  `id_no` int(11) NOT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `postal_code` varchar(255) DEFAULT NULL,
  `street` varchar(255) DEFAULT NULL,
  `is_active` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Đang đổ dữ liệu cho bảng `customer`
--

INSERT INTO `customer` (`id`, `city`, `first_name`, `id_no`, `last_name`, `postal_code`, `street`, `is_active`) VALUES
(3, 'Hai Duong', 'Thanh', 13, 'Nam', '2000', 'Ha dong', 1),
(4, 'Hai Duong', 'Duc', 14, 'Hoang', '2000', 'Ha Dong', 1),
(5, 'Ha Noi', 'Duc', 15, 'Hoang', '2000', 'Ha Dong', 1),
(6, 'Ha Noi', 'Cuong', 16, 'Hoang', '2000', 'Ha Dong', 1),
(14, 'Ha Noi', 'Cuong', 17, 'Hoang', '2000', 'Ha Dong', 1),
(15, 'Ha Noi', 'Cuong', 18, 'Hoang', '2000', 'Ha Dong', 1),
(63, 'Ha Noi', 'Cuong', 19, 'Hoang', '2000000', 'Ha Dong', 1),
(69, 'Ha Noi', 'Tuan', 20, 'Anh', '20000', 'Trieu Khuc', 1),
(76, 'hai duong', 'Nam', 21, 'Thanh ', '2000', 'Ha dong', 1),
(77, 'hai duong', 'Nam', 22, 'Thanh ', '2000', 'Ha dong', 1),
(78, 'hai duong', 'Nam', 23, 'Thanh ', '2000', 'Ha dong', 1),
(79, 'hai duong', 'Nam', 24, 'Thanh ', '2000', 'Ha dong', 1),
(80, 'hai duong', 'Nam', 25, 'Thanh ', '2000', 'Ha dong', 1),
(81, 'hai duong', 'Nam', 26, 'Thanh ', '2000', 'Ha dong', 1),
(93, 'hai duong', 'Nam', 27, 'Thanh ', '2000', 'Ha dong', 1),
(94, 'hai duong', 'Nam', 28, 'Thanh ', '2000', 'Ha dong', 1),
(95, 'hai duong', 'Nam', 29, 'Thanh ', '2000', 'Ha dong', 1),
(96, 'hai duong', 'Nam', 30, 'Thanh ', '2000', 'Ha dong', 1),
(97, 'hai duong', 'Nam', 31, 'Thanh ', '2000', 'Ha dong', 1),
(98, 'hai duong', 'Nam', 32, 'Thanh ', '2000', 'Ha dong', 1),
(99, 'hai duong', 'Nam', 33, 'Thanh ', '2000', 'Ha dong', 1),
(100, 'hai duong', 'Nam', 34, 'Thanh ', '2000', 'Ha dong', 1),
(101, 'hai duong', 'Nam', 35, 'Thanh ', '2000', 'Ha dong', 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `hibernate_sequence`
--

CREATE TABLE `hibernate_sequence` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Đang đổ dữ liệu cho bảng `hibernate_sequence`
--

INSERT INTO `hibernate_sequence` (`next_val`) VALUES
(102);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `invoice`
--

CREATE TABLE `invoice` (
  `id` int(11) NOT NULL,
  `customer_id` int(11) NOT NULL,
  `invoice_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Đang đổ dữ liệu cho bảng `invoice`
--

INSERT INTO `invoice` (`id`, `customer_id`, `invoice_date`) VALUES
(56, 15, '2023-05-08 07:00:00'),
(57, 15, '2023-05-08 07:00:00'),
(58, 15, '2022-08-17 07:00:00'),
(59, 15, '2022-08-17 07:00:00'),
(60, 15, '2022-08-17 07:00:00'),
(61, 14, '2022-08-18 07:00:00'),
(62, 14, '2022-08-18 07:00:00');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `item`
--

CREATE TABLE `item` (
  `invoice_id` int(11) NOT NULL,
  `item` varchar(255) DEFAULT NULL,
  `product_id` int(11) DEFAULT NULL,
  `quantity` int(11) NOT NULL,
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Đang đổ dữ liệu cho bảng `item`
--

INSERT INTO `item` (`invoice_id`, `item`, `product_id`, `quantity`, `id`) VALUES
(56, 'item 20', 7, 1, 70),
(56, 'item 21', 7, 1, 71),
(56, 'item 22', 7, 1, 72),
(56, 'item 22', 7, 1, 73),
(56, 'item 22', 7, 1, 74),
(57, 'item 20', 7, 1, 75),
(57, 'item 21', 7, 1, 76),
(57, 'item 22', 7, 1, 77),
(57, 'item 22', 7, 1, 78),
(57, 'item 22', 7, 1, 79),
(58, 'item 20', 7, 1, 80),
(58, 'item 21', 7, 1, 81),
(58, 'item 22', 7, 1, 82),
(58, 'item 22', 7, 1, 83),
(58, 'item 22', 7, 1, 84),
(59, 'item 20', 7, 1, 85),
(59, 'item 21', 7, 1, 86),
(59, 'item 22', 7, 1, 87),
(59, 'item 22', 7, 1, 88),
(59, 'item 22', 7, 1, 89),
(62, 'item 20', 7, 3, 90),
(62, 'item 21', 7, 1, 91),
(62, 'item 22', 7, 4, 92),
(62, 'item 22', 7, 1, 93),
(62, 'item 22', 7, 1, 94);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `price` double DEFAULT NULL,
  `vat` double DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Đang đổ dữ liệu cho bảng `product`
--

INSERT INTO `product` (`id`, `name`, `price`, `vat`) VALUES
(7, 'product Update 7', 123465, 6),
(8, 'product2', 20000, 5),
(9, 'product3', 22000, 5);

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `invoice`
--
ALTER TABLE `invoice`
  ADD PRIMARY KEY (`id`),
  ADD KEY `customer_id` (`customer_id`);

--
-- Chỉ mục cho bảng `item`
--
ALTER TABLE `item`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_id` (`product_id`),
  ADD KEY `invoice_id` (`invoice_id`);

--
-- Chỉ mục cho bảng `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `item`
--
ALTER TABLE `item`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=95;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `invoice`
--
ALTER TABLE `invoice`
  ADD CONSTRAINT `invoice_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `item`
--
ALTER TABLE `item`
  ADD CONSTRAINT `item_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `item_ibfk_2` FOREIGN KEY (`invoice_id`) REFERENCES `invoice` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
