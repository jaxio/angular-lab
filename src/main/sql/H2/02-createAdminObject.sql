---
-- Example Schema
--
CREATE TABLE APPLI_TRANSLATIONS (
    id                  int not null  IDENTITY,
    language				varchar(10) not null,
    key                varchar(1000) not null,
    value          varchar(4000),
    primary key (id)
);

CREATE TABLE APPLI_PARAMETERS (
    id                  int not null  IDENTITY,
    domain				varchar(250) not null,
    key                varchar(1000) not null,
    value          varchar(4000),
    primary key (id)
);

INSERT INTO APPLI_TRANSLATIONS  VALUES (1, 'fr_FR', 'TITLE', 'le titre en français.');
INSERT INTO APPLI_TRANSLATIONS  VALUES (2, 'en', 'TITLE', 'le titre en anglais.');

INSERT INTO APPLI_PARAMETERS VALUES (1, 'SETTINGS', 'defaultDateFormat', 'dd/MM/yyyy');