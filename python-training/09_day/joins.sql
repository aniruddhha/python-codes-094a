create table department(
    dep_id serial primary key,
    dep_nm varchar(30)
);

insert into department values(1, 'sales');
insert into department values(2, 'eng');
insert into department values(3, 'marketing');
insert into department values(4, 'rnd');
insert into department values(5, 'hr');

create table employee (
    emp_id serial primary key,
    emp_nm varchar(30),
    sal decimal,
    dep_id integer not null
);

alter table employee
add constraint Fk_emp 
foreign key(dep_id)  references department(dep_id);

insert into employee values (1, 'abc', 89, 2);
insert into employee values (2, 'pqr', 78, 1);
insert into employee values (3, 'lmn', 56, 3);
insert into employee values (4, 'xyz', 46, 2);
insert into employee values (5, 'ttr', 36, 1);
insert into employee values (6, 'eer', 96, 2);


select d.dep_nm, e.emp_nm from employee e
left join department d
on e.dep_id = d.dep_id;

select d.dep_nm, e.emp_nm from employee e
right join department d
on e.dep_id = d.dep_id;

select d.dep_nm, e.emp_nm from employee e
inner join department d
on e.dep_id = d.dep_id;

select d.dep_nm, e.emp_nm from employee e
full outer join department d
on e.dep_id = d.dep_id;

select e.emp_nm, d.dep_nm from employee e cross join department d;