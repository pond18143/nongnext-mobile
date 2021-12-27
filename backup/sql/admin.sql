CREATE TABLE nongnext.dbo.admin (
	id int IDENTITY(1,1) NOT NULL,
	id_linebot varchar(100) COLLATE SQL_Latin1_General_CP1_CI_AS NULL,
	name varchar(50) COLLATE SQL_Latin1_General_CP1_CI_AS NULL,
	phone varchar(10) COLLATE SQL_Latin1_General_CP1_CI_AS NULL,
	address varchar(200) COLLATE Thai_CI_AS NULL,
	role_id int NULL
);
