CREATE TABLE nongnext.dbo.call_center (
	id int IDENTITY(1,1) NOT NULL,
	id_linebot varchar(100) COLLATE SQL_Latin1_General_CP1_CI_AS NULL,
	talk_bot int NULL,
	user_status varchar(100) COLLATE Thai_CI_AS NULL
);
