create table person(
    id serial primary key,
    person_name varchar(20),
    mobiles text[]
);

insert into person values(
    1, 'abc', ARRAY[ '1234567', '89654', '456789']
); 

insert into person values(
    2, 'pqr', ARRAY[ '64589798', '64324320' ,'89654', '248900']
); 

insert into person values(
    3, 'lmn', ARRAY[ '1324', '09896' ,'432432', '432321']
); 

select person_name, mobiles[1] 
from person;

update person 
set mobiles [1] = '111111'
where id = 1;

select person_name, unnest(mobiles)
from person; 

select person_name 
from person
where '89654' = any(mobiles)