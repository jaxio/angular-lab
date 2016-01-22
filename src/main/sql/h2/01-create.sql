---
-- Example Schema
--

DROP ALL OBJECTS;

CREATE SEQUENCE hibernate_sequence START WITH 1000;

CREATE TABLE AUTHOR (
    id                  int not null IDENTITY,
    name                varchar(100),
    birth_date          timestamp,
    primary key (id)
);

CREATE TABLE BOOK (
    id                          char(36) not null,
    title                       varchar(100) not null,
    description                 varchar(255) not null,
    publication_date            timestamp,
    author_id                   int,
    price                       decimal(20, 2) not null,

    constraint book_fk_1 foreign key (author_id) references AUTHOR,
    primary key (id)
);

INSERT INTO AUTHOR  VALUES (1, 'John Doe',null);
INSERT INTO AUTHOR  VALUES (2, 'Albert Camus',null);
INSERT INTO AUTHOR  VALUES (3, 'Delavega',null);
INSERT INTO BOOK  VALUES ('serial_1', 'Mon livre', 'ma descr', null, 1, 12.25);
INSERT INTO BOOK  VALUES ('serial_2', 'Bible', 'ma descr', null, 1, 12.25);
INSERT INTO BOOK  VALUES ('serial_3', 'another livre', 'ma descr', null, 1, 12.25);