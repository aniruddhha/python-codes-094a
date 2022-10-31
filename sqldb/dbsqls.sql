-- all queries are required

create table car(
    car_id integer primary key,
    car_name varchar(20) not null,
    car_price decimal default 1
);