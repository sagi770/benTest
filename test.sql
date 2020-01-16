CREATE TABLE `tbl_test` (
	`id` INT(11) NOT NULL AUTO_INCREMENT,
    `product_id` INT(11),
	`name` VARCHAR(50) NOT NULL,
	`material` VARCHAR(50) NOT NULL,
	`price` FLOAT NOT NULL,
	`initials`  VARCHAR(10) NOT NULL,
	PRIMARY KEY (`id`)
)
COLLATE='latin1_swedish_ci'
ENGINE=MyISAM
AUTO_INCREMENT=2
;