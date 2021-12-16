CREATE TABLE nongnext.dbo.model (
	id int IDENTITY(1,1) NOT NULL,
	name varchar(50) COLLATE Thai_CI_AS NULL,
	id_brand int NULL,
	describtion varchar(100) COLLATE Thai_CI_AS NULL,
	picture_url varchar(200) COLLATE Thai_CI_AS NULL
);
