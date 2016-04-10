---
-- Example Schema
--
DROP TABLE APP_TRANSLATION;

CREATE TABLE APP_TRANSLATION (
    id                  int not null,
	language			varchar(10) not null,
    key                varchar(1000) not null,
    value          varchar2(4000),
    primary key (id)
);

DROP TABLE APP_PARAMETER;

CREATE TABLE APP_PARAMETER (
    id                  int not null,
    domain				varchar(250) not null,
    key                varchar(1000) not null,
    value          varchar(4000),
    primary key (id)
);

INSERT INTO APP_TRANSLATION  VALUES (1, 'fr_FR', 'TITLE', 'le titre en français.');
INSERT INTO APP_TRANSLATION  VALUES (2, 'en', 'TITLE', 'le titre en anglais.');

INSERT INTO APP_PARAMETER VALUES (1, 'SETTINGS', 'defaultDateFormat', 'dd/MM/yyyy');