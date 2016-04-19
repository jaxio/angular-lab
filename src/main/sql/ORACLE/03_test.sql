-- table without FK, it can be linked however inside the metadata config file directly
create table address (
	id                          int not null,
    street                      varchar2(100) not null,
	author_id                   int,
	
	
    primary key (id)
	);
	
-- table with a special id type (char(10))	
create table Sample (
		id                          char(10) not null,
		label						varchar2(50),
		primary key (id)
);

-- style
CREATE TABLE STYLE (
    id                          int not null,
    name                   varchar2(100) not null,

    primary key (id)
);

-- relation table between author and style
CREATE TABLE AUTHOR_STYLE (
	id  						int not null,
	author_id 					int not null,
	style_id 					int not null,
	enable						int not null,
	
	constraint author_style_fk_1 foreign key (author_id) references AUTHOR,
	constraint author_style_fk_2 foreign key (style_id) references STYLE,
	primary key (id)
);

-- table with a date in the primary key
DROP TABLE WRK_SPN_FUL;

CREATE TABLE WRK_SPN_FUL 
   (   "WRK_SPN_IDE" VARCHAR2(255) NOT NULL ENABLE, 
       "WRK_APP_CDE" CHAR(3) NOT NULL ENABLE, 
       "WRK_DFU_DTE" DATE NOT NULL ENABLE, 
       
        CONSTRAINT PK_WRK_SPN_FUL PRIMARY KEY ("WRK_SPN_IDE", "WRK_APP_CDE", "WRK_DFU_DTE") ENABLE
   ) ;