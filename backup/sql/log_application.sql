CREATE TABLE nongnext.dbo.log_application (
	id int IDENTITY(1,1) NOT NULL,
	login_id int NULL,
	service varchar(30) COLLATE Thai_CI_AS NULL,
	isSend varchar(30) COLLATE Thai_CI_AS NULL,
	texts varchar(300) COLLATE Thai_CI_AS NULL
);
