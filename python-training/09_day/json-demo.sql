create table orders(
    id serial not null primary key,
    info json not null
);

-- inserts

insert into orders(info) values(' 
    { 
        "customer" : "abc", 
        "items" : { "product" : "a11",  "qty" : 1}
    } 
');

insert into orders(info) values(' 
    { 
        "customer" : "pqr", 
        "items" : { "product" : "b11",  "qty" : 10}
    } 
');

insert into orders(info) values(' 
    { 
        "customer" : "xyz", 
        "items" : { "product" : "c11",  "qty" : 8 }
    } 
');

-- select
select info ->> 'items' as Customer from orders;

select info -> 'items' -> 'qty' as Quantity  from orders;

-- where claus
select info ->> 'customer' as Customer, info -> 'items' ->> 'product' as Product
from orders
where cast (info -> 'items' ->> 'qty' as integer ) > 3;