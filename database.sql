CREATE DATABASE "giphy_search_favorites";

-- You'll need a table for storing each giphy image favorite
-- Each favorite image can be assigned 1 of the following categories as a Foreign Key

-- Category table
CREATE TABLE "category" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (100) NOT NULL
   
);

-- Default categories. You may change them :)
INSERT INTO "category" ("name")
VALUES ('funky'), ('cool'), ('cute') ;

CREATE TABLE "gifs"(
    "id" SERIAL PRIMARY KEY,
    "url" VARCHAR (500) NOT NULL,
    "category_id" INT REFERENCES "category" NOT NULL
);

INSERT INTO "gifs" ("url", "category_id")
VALUES ('https://static.wikia.nocookie.net/monster/images/6/6e/DragonRed.jpg/revision/latest?cb=20160809235604', 2), ('https://www.equilter.com/images/products/RULBUBBK.jpg', 1),
 ('47
https://www.rd.com/wp-content/uploads/2021/03/GettyImages-1133605325-scaled-e1617227898456.jpg', 3) ;