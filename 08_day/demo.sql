select d.dep_type as Department, sum(e.salary) as Total_Salary
from employee e
right join department d
on e.dep_id = d.dep_id
group by d.dep_type
having  sum(e.salary) > 200
order by d.dep_type desc;

update department 
set dep_name = 'huy'
where dep_id = 1