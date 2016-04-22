---
-- Example Schema
--

DROP ALL OBJECTS;

CREATE SEQUENCE hibernate_sequence START WITH 1000;

CREATE TABLE CATEGORY  (
    PAR_CAT_IDE VARCHAR(50) NOT NULL,
    PAR_CAT_DES VARCHAR(255),
    
    PRIMARY KEY (PAR_CAT_IDE)
);   

CREATE TABLE PARAMETER (
   	PAR_CAT_IDE VARCHAR(50) NOT NULL,
    KEY VARCHAR(50) NOT NULL,
    VAL VARCHAR(4000) NOT NULL,
    DESCR VARCHAR(200),

	PRIMARY KEY (PAR_CAT_IDE, KEY),          
	CONSTRAINT FK_PARAMETER_RELATIONS_CATEGORY FOREIGN KEY (PAR_CAT_IDE) REFERENCES CATEGORY(PAR_CAT_IDE)
   );

 

INSERT INTO CATEGORY  VALUES ('VBS', 'partie VBS');

INSERT INTO PARAMETER  VALUES ('VBS', 'key1', 'val1', 'desc1');

CREATE TABLE AUTHOR (
    id                  int not null IDENTITY,
    name                varchar(100),
    birth_date          timestamp,
    primary key (id)
);

CREATE TABLE BAR_CODE (
    id                          int not null identity,
    code                        varchar(100) not null,
    image						varchar(100),

    primary key (id)
);

CREATE TABLE BOOK (
    id                          char(36) not null,
    title                       varchar(100) not null,
    description                 varchar(255) not null,
    publication_date            timestamp,
    author_id                   int,
    price                       decimal(20, 2) not null,
	previousBookId				char(36),
	barCodeId					int,
	
    constraint book_fk_1 foreign key (author_id) references AUTHOR,
    constraint book_fk_2 foreign key (previousBookId) references BOOK(id),
    constraint book_fk_3 foreign key (barCodeId) references BAR_CODE(id),
    primary key (id)
);
ALTER TABLE BOOK ADD CONSTRAINT BAR_CODE_UNIQUE UNIQUE(barCodeId);

-- book reader
CREATE TABLE READER (
    id                          int not null identity,
    firstName                   varchar(100) not null,
    lastName                   varchar(100) not null,

    primary key (id)
);

-- store where to buy books
CREATE TABLE STORE (
    id                          int not null identity,
    name                        varchar(100) not null,
    address						varchar(100) not null,
    zipCode						varchar(100) not null,
    city						varchar(100) not null,

    primary key (id)
);

-- relation table between book and reader
CREATE TABLE BOOK_READER (
	id  						int not null identity,
	book_id						char(36) not null,
	reader_id					int,
	
	constraint book_reader_fk_1 foreign key (book_id) references BOOK,
	constraint book_reader_fk_2 foreign key (reader_id) references READER,
	primary key (id)
);

-- relation table between book and store
CREATE TABLE BOOK_STORE (
	id  						int not null identity,
	book_id 					char(36) not null,
	store_id 					int,
	
	constraint book_store_fk_1 foreign key (book_id) references BOOK,
	constraint book_store_fk_2 foreign key (store_id) references STORE,
	primary key (id)
);

CREATE TABLE SCR (	
	SCR_IDE int8 not null,
	SCR_CAT VARCHAR(50), 
	SCR_TXT CLOB, 
	SCR_AVL int, 
	SCR_NME VARCHAR(50), 
	SCR_DESCR VARCHAR(200), 
	SCR_CODE VARCHAR(50),
	
	primary key (SCR_IDE)
);

INSERT INTO AUTHOR  VALUES (1, 'John Doe',null);
INSERT INTO AUTHOR  VALUES (2, 'Camus albert',null);
INSERT INTO AUTHOR  VALUES (3, 'Hugo victor',null);
INSERT INTO AUTHOR  VALUES (4, 'Proust marcel',null);
INSERT INTO AUTHOR  VALUES (5, 'Zola émile',null);
INSERT INTO AUTHOR  VALUES (6, 'Baudelaire charles',null);
INSERT INTO AUTHOR  VALUES (7, 'Sartre jean paul',null);
INSERT INTO AUTHOR  VALUES (8, 'Flaubert gustave',null);
INSERT INTO AUTHOR  VALUES (9, 'Rousseau jean-jacques',null);
INSERT INTO AUTHOR  VALUES (10, 'Racine jean',null);
INSERT INTO AUTHOR  VALUES (11, 'Daudet alphonse',null);
INSERT INTO AUTHOR  VALUES (12, 'Diderot denis',null);
INSERT INTO AUTHOR  VALUES (13, 'Aragon louis',null);
INSERT INTO AUTHOR  VALUES (14, 'jk Rowling',null);

INSERT INTO BOOK  VALUES ('serial_1', 'Les misérables', 'histoire de cozette', null, 3, 12.25, null, null);
INSERT INTO BOOK  VALUES ('serial_2', 'A la recherche de temps perdu', '...', null, 4, 12.25, null, null);
INSERT INTO BOOK  VALUES ('serial_3', 'Sodome et gomorrhe', '...', null, 4, 12.25, null, null);
INSERT INTO BOOK  VALUES ('serial_4', 'Du côté de chez Swann', '...', null, 4, 12.25, null, null);
INSERT INTO BOOK  VALUES ('serial_5', 'Germinal', '...', null, 5, 12.25, null, null);
INSERT INTO BOOK  VALUES ('serial_6', 'Au bonheur des dames', '...', null, 5, 12.25, null, null);
INSERT INTO BOOK  VALUES ('serial_7', 'Les fleurs du mal', '...', null, 6, 12.25, null, null);
INSERT INTO BOOK  VALUES ('serial_8', 'Le spleen de Paris', '...', null, 6, 12.25, null, null);
INSERT INTO BOOK  VALUES ('serial_9', 'La peste', '...', null, 2, 12.25, null, null);
INSERT INTO BOOK  VALUES ('serial_10', 'L''étranger', '...', null, 2, 12.25, null, null);
INSERT INTO BOOK  VALUES ('serial_11', 'La nausée', '...', null, 7, 12.25, null, null);
INSERT INTO BOOK  VALUES ('serial_12', 'Madame Bovary', '...', null, 8, 12.25, null, null);
INSERT INTO BOOK  VALUES ('serial_13', 'L''éducation sentimentale', '...', null, 8, 12.25, null, null);
INSERT INTO BOOK  VALUES ('serial_14', 'Les confessions', '...', null, 9, 12.25, null, null);
INSERT INTO BOOK  VALUES ('serial_15', 'Phèdre', '...', null, 10, 12.25, null, null);
INSERT INTO BOOK  VALUES ('serial_16', 'Andromaque', '...', null, 10, 12.25, null, null);
INSERT INTO BOOK  VALUES ('serial_17', 'Lettres de mon moulin', '...', null, 11, 12.25, null, null);
INSERT INTO BOOK  VALUES ('serial_18', 'Tartarin de Tarascon', '...', null, 11, 12.25, null, null);
INSERT INTO BOOK  VALUES ('serial_19', 'La religieuse', '...', null, 12, 12.25, null, null);
INSERT INTO BOOK  VALUES ('serial_20', 'Le paysan de Paris', '...', null, 13, 12.25, null, null);
INSERT INTO BOOK  VALUES ('serial_21', 'Harry Potter à l''école des sorciers', '...', null, 14, 25.01, null, null);
INSERT INTO BOOK  VALUES ('serial_22', 'Harry Potter et la Chambre des secrets', '...', null, 14, 21, 'serial_21', null);

INSERT INTO READER  VALUES (1, 'John' , 'Johnson');
INSERT INTO READER  VALUES (2, 'Me' , 'Mee');
INSERT INTO READER  VALUES (3, 'Jessia' , 'Denfer');
INSERT INTO READER  VALUES (4, 'Joan' , 'Joe');
INSERT INTO READER  VALUES (5, 'Ryan' , 'Fere');
INSERT INTO READER  VALUES (6, 'Josh' , 'Mercy');
INSERT INTO READER  VALUES (7, 'Jenifer' , 'Bruce');
INSERT INTO READER  VALUES (8, 'Joseph' , 'Boo');
INSERT INTO READER  VALUES (9, 'Bob' , 'Danof');
INSERT INTO READER  VALUES (10, 'Robert' , 'Dano');

INSERT INTO BOOK_READER  VALUES (1, 'serial_1', 1);
INSERT INTO BOOK_READER  VALUES (2, 'serial_2', 1);
INSERT INTO BOOK_READER  VALUES (3, 'serial_3', 1);
INSERT INTO BOOK_READER  VALUES (4, 'serial_1', 2);
INSERT INTO BOOK_READER  VALUES (5, 'serial_1', 3);
INSERT INTO BOOK_READER  VALUES (6, 'serial_1', 4);
INSERT INTO BOOK_READER  VALUES (7, 'serial_1', 5);
INSERT INTO BOOK_READER  VALUES (8, 'serial_1', 6);
INSERT INTO BOOK_READER  VALUES (9, 'serial_1', 7);
INSERT INTO BOOK_READER  VALUES (10, 'serial_1', 8);
INSERT INTO BOOK_READER  VALUES (11, 'serial_1', 9);
INSERT INTO BOOK_READER  VALUES (12, 'serial_1', 10);

INSERT INTO STORE  VALUES (1, 'Fnac', 'rue de Paris', '75000', 'PARIS');
INSERT INTO STORE  VALUES (2, 'Megastore', 'rue de Paris', '75015', 'PARIS');
INSERT INTO STORE  VALUES (3, 'Google', 'rue de Paris', '75016', 'PARIS');


INSERT INTO BOOK_STORE  VALUES (1, 'serial_1', 1);
INSERT INTO BOOK_STORE  VALUES (2, 'serial_2', 1);
INSERT INTO BOOK_STORE  VALUES (3, 'serial_3', 1);


INSERT INTO SCR (SCR_IDE, SCR_CAT) VALUES (-1, 'TEST');