CREATE TABLE nongnext.dbo.items (
	id int IDENTITY(1,1) NOT NULL,
	uuid varchar(100) COLLATE SQL_Latin1_General_CP1_CI_AS NULL,
	name varchar(50) COLLATE Thai_CI_AS NULL,
	capacity int NULL,
	unit varchar(10) COLLATE SQL_Latin1_General_CP1_CI_AS NULL,
	color varchar(20) COLLATE SQL_Latin1_General_CP1_CI_AS NULL,
	price int NULL,
	quantity int NULL,
	id_brand int NULL,
	describtion varchar(100) COLLATE Thai_CI_AS NULL,
	picture_url varchar(200) COLLATE SQL_Latin1_General_CP1_CI_AS NULL
);
