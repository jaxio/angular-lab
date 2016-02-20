---
-- Example Schema
--
CREATE TABLE APPLI_TRANSLATIONS (
    id                  int not null,
	language			varchar(10) not null,
    key                varchar(1000) not null,
    value          blob,
    primary key (id)
);

