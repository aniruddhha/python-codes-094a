
create table artists(
    art_id serial primary key,
    art_nm varchar(30) not null
);

insert into artists values(1, 'art-abc2');
insert into artists values(2, 'art-pqr1');
insert into artists values(3, 'art-xyz2');

create table collectors(
    col_id serial primary key,
    col_house varchar(30)
);
insert into collectors values(1, 'col-abc2');
insert into collectors values(2, 'col-pqr1');
insert into collectors values(3, 'col-xyz2');


create table paintings(
    pt_id serial primary key,
    pt_nm varchar(30),
    pt_price decimal,
    artist_id integer not null,

    constraint fk_artists 
    foreign key(artist_id)
    references artists(art_id)
);
insert into paintings values(1, 'pt-abc', 67, 1);
insert into paintings values(2, 'pt-pqr', 90, 2);
insert into paintings values(3, 'pt-lmn', 90, 1);

create table sales(
    sl_id serial primary key,
    sl_dt date,
    sl_price decimal,
    pt_id integer not null,
    art_id integer not null,
    col_id integer not null,

    constraint fk_pt_sales 
    foreign key(pt_id)
    references paintings(pt_id),

    constraint fk_art_sales 
    foreign key(art_id)
    references artists(art_id),

    constraint fk_col_sales 
    foreign key(col_id)
    references collectors(col_id)

);

insert into sales values(1, '2022-01-01', 67, 1, 1, 2);
insert into sales values(2, '2000-01-01', 90, 2, 1, 2);
insert into sales values(3, '2015-01-01', 110, 3, 2, 1);

-- 👉 scalar sub query
-- list all the painting whose price is greater than avarage price 
select pt_nm, pt_price 
from paintings 
where pt_price > (
    select avg(pt_price) 
    from paintings
);

-- 👉  multi row subquery
-- list all collectors who purchased paintings from our gallery. 
-- in other words, find out all the collectors which are present in sales table

select * 
from collectors
where col_id in (
    select col_id -- multi row -> single column
    from sales
);

-- we want to see the total amount of sales for each artist 
-- who has sold at least one painting in our gallery

select a.art_nm, art_jn.art_sales
from artists a
join (
    select art_id, sum(sl_price) as art_sales -- multi row -> multi column
    from sales
    group by art_id
) as art_jn
on a.art_id = art_jn.art_id;

-- 👉 correlated subquery
-- we want to calculate the number of paintings purchased through our gallery. 

select 
c.col_house,  
(
    select count(*) as Paintings -- query in select clause
    from sales s
    where c.col_id = s.sl_id
)
from collectors c;

-- we want to show the names of the artists 
-- who had zero sales with our gallery. 

-- give me all the artists which are not available in sales table

select a.art_nm
from artists a
where not exists ( -- query in where clause
    select * 
    from sales s
    where s.art_id = a.art_id
);