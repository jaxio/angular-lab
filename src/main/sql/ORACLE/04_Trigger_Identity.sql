CREATE OR REPLACE TRIGGER BOOK_READER_identity 
BEFORE INSERT ON BOOK_READER
FOR EACH ROW
WHEN (new.id IS NULL)
BEGIN
  :new.id := hibernate_sequence.NEXTVAL;
END;

CREATE OR REPLACE TRIGGER BOOK_STORE_identity 
BEFORE INSERT ON BOOK_STORE
FOR EACH ROW
WHEN (new.id IS NULL)
BEGIN
  :new.id := hibernate_sequence.NEXTVAL;
END;