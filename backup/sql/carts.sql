CREATE TABLE nongnext.dbo.carts (
	id int IDENTITY(1,1) NOT NULL,
	id_transaction int NULL,
	item_id int NULL,
	user_id varchar(100) COLLATE SQL_Latin1_General_CP1_CI_AS NULL
);
