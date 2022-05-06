CREATE TABLE nongnext.dbo.brand (
	id int IDENTITY(1,1) NOT NULL,
	name varchar(50) COLLATE Thai_CI_AS NULL,
	describtion varchar(100) COLLATE Thai_CI_AS NULL,
	picture_url varchar(200) COLLATE SQL_Latin1_General_CP1_CI_AS NULL
);

