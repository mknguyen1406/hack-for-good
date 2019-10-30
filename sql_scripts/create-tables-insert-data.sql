CREATE TABLE ksritter.test (
	id varchar(30),
    fellow varchar(30),
    program_manager varchar(30)
);

insert into ksritter.test (id, fellow, program_manager)
values (1,'manu', 'isa');

# Evaluations
drop table ksritter.evaluations;
CREATE TABLE IF NOT EXISTS ksritter.evaluations(
   Fellow_ID                  VARCHAR(50) 
  ,Student_ID                 INTEGER  
  ,Time                       INTEGER  
  ,Mathe                      INTEGER  
  ,Englisch                   INTEGER  
  ,Deutsch                    INTEGER  
  ,Weiteres_Fach              INTEGER  
  ,Hoeren                      INTEGER  
  ,Sprechen                   INTEGER  
  ,Schreiben                  INTEGER  
  ,Lesen                      INTEGER  
  ,Selbstvertrauen            INTEGER  
  ,Teamdenken                 INTEGER  
  ,Reflexionsfaehigkeit        INTEGER  
  ,Regeleinhaltung            INTEGER  
  ,Hilfsbereitschaft          INTEGER  
  ,Konfliktverhalten          INTEGER  
  ,Motivation                 INTEGER  
  ,Lernziele                  INTEGER  
  ,Elternkontakt_Date         VARCHAR(50)
  ,Elternkontakt_Comment      VARCHAR(50)
  ,Fehlzeiten                 INTEGER  
  ,Berufsorientierung_State   INTEGER  
  ,Berufsorientierung_Comment VARCHAR(50) 
  ,Uebergangsprognose          VARCHAR(1) 
);
INSERT INTO ksritter.evaluations(Fellow_ID,Student_ID,Time,Mathe,Englisch,Deutsch,Weiteres_Fach,Hören,Sprechen,Schreiben,Lesen,Selbstvertrauen,Teamdenken,Reflexionsfähigkeit,Regeleinhaltung,Hilfsbereitschaft,Konfliktverhalten,Motivation,Lernziele,Elternkontakt_Date,Elternkontakt_Comment,Fehlzeiten,Berufsorientierung_State,Berufsorientierung_Comment,Übergangsprognose) VALUES ('1',1,1,4,3,3,4,2,3,2,2,2,3,2,3,3,3,1,1,'07.05.2019','Eltern wirken sehr desinteressiert',18,0,'zeigt kein Interesse','A');
INSERT INTO ksritter.evaluations(Fellow_ID,Student_ID,Time,Mathe,Englisch,Deutsch,Weiteres_Fach,Hören,Sprechen,Schreiben,Lesen,Selbstvertrauen,Teamdenken,Reflexionsfähigkeit,Regeleinhaltung,Hilfsbereitschaft,Konfliktverhalten,Motivation,Lernziele,Elternkontakt_Date,Elternkontakt_Comment,Fehlzeiten,Berufsorientierung_State,Berufsorientierung_Comment,Übergangsprognose) VALUES ('1',2,1,4,2,3,2,3,4,4,3,2,3,2,3,4,3,2,1,NULL,'',12,1,'Bebwerbungsgespräch bei der Polizei','B');
INSERT INTO ksritter.evaluations(Fellow_ID,Student_ID,Time,Mathe,Englisch,Deutsch,Weiteres_Fach,Hören,Sprechen,Schreiben,Lesen,Selbstvertrauen,Teamdenken,Reflexionsfähigkeit,Regeleinhaltung,Hilfsbereitschaft,Konfliktverhalten,Motivation,Lernziele,Elternkontakt_Date,Elternkontakt_Comment,Fehlzeiten,Berufsorientierung_State,Berufsorientierung_Comment,Übergangsprognose) VALUES ('1',3,1,4,3,3,4,2,3,2,2,2,3,2,3,3,3,1,1,'07.05.2019','Eltern wirken sehr desinteressiert',18,0,'zeigt kein Interesse','B');
INSERT INTO ksritter.evaluations(Fellow_ID,Student_ID,Time,Mathe,Englisch,Deutsch,Weiteres_Fach,Hören,Sprechen,Schreiben,Lesen,Selbstvertrauen,Teamdenken,Reflexionsfähigkeit,Regeleinhaltung,Hilfsbereitschaft,Konfliktverhalten,Motivation,Lernziele,Elternkontakt_Date,Elternkontakt_Comment,Fehlzeiten,Berufsorientierung_State,Berufsorientierung_Comment,Übergangsprognose) VALUES ('1',3,2,4,3,3,4,2,3,2,2,2,3,2,3,3,3,1,1,'07.05.2019','Eltern wirken sehr desinteressiert',18,0,'zeigt kein Interesse','B');
INSERT INTO ksritter.evaluations(Fellow_ID,Student_ID,Time,Mathe,Englisch,Deutsch,Weiteres_Fach,Hören,Sprechen,Schreiben,Lesen,Selbstvertrauen,Teamdenken,Reflexionsfähigkeit,Regeleinhaltung,Hilfsbereitschaft,Konfliktverhalten,Motivation,Lernziele,Elternkontakt_Date,Elternkontakt_Comment,Fehlzeiten,Berufsorientierung_State,Berufsorientierung_Comment,Übergangsprognose) VALUES ('1',2,2,4,3,3,4,2,3,2,2,2,3,2,3,3,3,1,1,'07.05.2019','Eltern wirken sehr desinteressiert',18,0,'zeigt kein Interesse','C');
INSERT INTO ksritter.evaluations(Fellow_ID,Student_ID,Time,Mathe,Englisch,Deutsch,Weiteres_Fach,Hören,Sprechen,Schreiben,Lesen,Selbstvertrauen,Teamdenken,Reflexionsfähigkeit,Regeleinhaltung,Hilfsbereitschaft,Konfliktverhalten,Motivation,Lernziele,Elternkontakt_Date,Elternkontakt_Comment,Fehlzeiten,Berufsorientierung_State,Berufsorientierung_Comment,Übergangsprognose) VALUES ('1',1,3,4,3,3,4,2,3,2,2,2,3,2,3,3,3,1,1,'07.05.2019','Eltern wirken sehr desinteressiert',18,0,'zeigt kein Interesse','A');
INSERT INTO ksritter.evaluations(Fellow_ID,Student_ID,Time,Mathe,Englisch,Deutsch,Weiteres_Fach,Hören,Sprechen,Schreiben,Lesen,Selbstvertrauen,Teamdenken,Reflexionsfähigkeit,Regeleinhaltung,Hilfsbereitschaft,Konfliktverhalten,Motivation,Lernziele,Elternkontakt_Date,Elternkontakt_Comment,Fehlzeiten,Berufsorientierung_State,Berufsorientierung_Comment,Übergangsprognose) VALUES ('1',2,3,4,2,3,2,3,4,4,3,2,3,2,3,4,3,2,1,NULL,'',12,1,'Bebwerbungsgespräch bei der Polizei','B');
INSERT INTO ksritter.evaluations(Fellow_ID,Student_ID,Time,Mathe,Englisch,Deutsch,Weiteres_Fach,Hören,Sprechen,Schreiben,Lesen,Selbstvertrauen,Teamdenken,Reflexionsfähigkeit,Regeleinhaltung,Hilfsbereitschaft,Konfliktverhalten,Motivation,Lernziele,Elternkontakt_Date,Elternkontakt_Comment,Fehlzeiten,Berufsorientierung_State,Berufsorientierung_Comment,Übergangsprognose) VALUES ('1',3,3,4,3,3,4,2,3,2,2,2,3,2,3,3,3,1,1,'07.05.2019','Eltern wirken sehr desinteressiert',18,0,'zeigt kein Interesse','B');

# Pupils
CREATE TABLE IF NOT EXISTS ksritter.pupils(
   ID       INTEGER  PRIMARY KEY 
  ,School   VARCHAR(50)
  ,City     VARCHAR(50)
  ,Class    VARCHAR(50)
  ,Nickname VARCHAR(50)
);
INSERT INTO ksritter.pupils(ID,School,City,Class,Nickname) VALUES (1,'Gymnasium1','Berlin','8c','8c.1');
INSERT INTO ksritter.pupils(ID,School,City,Class,Nickname) VALUES (2,'Gymnasium1','Berlin','8c','8c.2');
INSERT INTO ksritter.pupils(ID,School,City,Class,Nickname) VALUES (3,'Gymnasium1','Berlin','8c','8c.3');
INSERT INTO ksritter.pupils(ID,School,City,Class,Nickname) VALUES (4,'Gymnasium1','Berlin','10a','10a.1');
INSERT INTO ksritter.pupils(ID,School,City,Class,Nickname) VALUES (5,'Gymnasium1','Berlin','10a','10a.2');
INSERT INTO ksritter.pupils(ID,School,City,Class,Nickname) VALUES (6,'WRS','Hamburg','8b','8b.1');
INSERT INTO ksritter.pupils(ID,School,City,Class,Nickname) VALUES (7,'WRS','Hamburg','8b','8b.2');
INSERT INTO ksritter.pupils(ID,School,City,Class,Nickname) VALUES (8,'WRS','Hamburg','8b','8b.3');
INSERT INTO ksritter.pupils(ID,School,City,Class,Nickname) VALUES (9,'Hauptschule','Hannover','9a','9a.1');
INSERT INTO ksritter.pupils(ID,School,City,Class,Nickname) VALUES (10,'Hauptschule','Hannover','9a','9a.2');

# Fellows
CREATE TABLE IF NOT EXISTS ksritter.fellows(
   ID              INTEGER PRIMARY KEY 
  ,Program_Manager VARCHAR(50)
  ,Fellow_Name            VARCHAR(50)
  ,Program         VARCHAR(50)
);
INSERT INTO ksritter.fellows(ID,Program_Manager,Fellow_Name,Program) VALUES (1,'Isa','Moritz','SÜ');
INSERT INTO ksritter.fellows(ID,Program_Manager,Fellow_Name,Program) VALUES (2,'Isa','Lisa','SÜ');
INSERT INTO ksritter.fellows(ID,Program_Manager,Fellow_Name,Program) VALUES (3,'Isa','Lena','ET');
INSERT INTO ksritter.fellows(ID,Program_Manager,Fellow_Name,Program) VALUES (4,'Isa','Tim','ET');
INSERT INTO ksritter.fellows(ID,Program_Manager,Fellow_Name,Program) VALUES (5,'Isa','Tom','SÜ');
INSERT INTO ksritter.fellows(ID,Program_Manager,Fellow_Name,Program) VALUES (6,'Isa','Max','NP');
INSERT INTO ksritter.fellows(ID,Program_Manager,Fellow_Name,Program) VALUES (7,'Max','Anna','SÜ');
INSERT INTO ksritter.fellows(ID,Program_Manager,Fellow_Name,Program) VALUES (8,'Max','Peter','SÜ');
INSERT INTO ksritter.fellows(ID,Program_Manager,Fellow_Name,Program) VALUES (9,'Max','Hans','NP');
INSERT INTO ksritter.fellows(ID,Program_Manager,Fellow_Name,Program) VALUES (10,'Max','Thomas','ET');

select * from ksritter.evaluations;


CREATE TABLE IF NOT EXISTS ksritter.test1(
   ID              INTEGER PRIMARY KEY 
  ,Program_Manager VARCHAR(50)
  ,Fellow_Name            VARCHAR(50)
  ,Program         VARCHAR(50)
);

LOAD DATA LOCAL INFILE "C:\Users\Minh-Kha\Projects\H4G\hfg\data\Fellow_neu.csv"
INTO TABLE ksritter.test1
FIELDS TERMINATED BY ';' 
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

