CREATE TABLE nongnext.dbo.transactions (
	id int IDENTITY(1,1) NOT NULL,
	uuid varchar(100) COLLATE SQL_Latin1_General_CP1_CI_AS NULL,
	id_linebot varchar(100) COLLATE SQL_Latin1_General_CP1_CI_AS NULL,
	total int NULL,
	status int NULL,
	track int NULL,
	[timeStamp] datetime NULL
);
