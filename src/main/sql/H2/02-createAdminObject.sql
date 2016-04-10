---
-- Example Schema
--
CREATE TABLE APP_TRANSLATION (
    id                  int not null  IDENTITY,
    language				varchar(10) not null,
    key                varchar(1000) not null,
    value          varchar(4000),
    primary key (id)
);

CREATE TABLE APP_PARAMETER (
    id                  int not null  IDENTITY,
    domain				varchar(250) not null,
    key                varchar(1000) not null,
    value          varchar(4000),
    primary key (id)
);

INSERT INTO APP_TRANSLATION  VALUES (1, 'fr_FR', 'TITLE', 'le titre en français.');
INSERT INTO APP_TRANSLATION  VALUES (2, 'en', 'TITLE', 'le titre en anglais.');

INSERT INTO APP_PARAMETER VALUES (1, 'SETTINGS', 'defaultDateFormat', 'dd/MM/yyyy');