//use emp ;

db.createCollection('employee')

db.employee.insertMany([
    { nm : 'abc', sal : 34, isPerm : true, role : 'admin', jd : ISODate('2022-01-01') },
    { nm : 'pqr', sal : 54, isPerm : false, role : 'manager', jd : ISODate('2002-01-01') },
    { nm : 'lmn', sal : 14, isPerm : true, role : 'staff', jd : ISODate('2000-01-01') },
    { nm : 'xyz', sal : 89, isPerm : false, role : 'admin', jd : ISODate('2022-01-01') },
    { nm : 'tuv', sal : 12, isPerm : false, role : 'staff', jd : ISODate('2016-01-01') },
    { nm : 'ytu', sal : 45, isPerm : false, role : 'manager', jd : ISODate('2018-01-01') },
    { nm : 'wqe', sal : 55, isPerm : true, role : 'admin', jd : ISODate('2019-01-01') },
    { nm : 'qaz', sal : 78, isPerm : true, role : 'staff', jd : ISODate('2010-01-01') },
    { nm : 'qsc', sal : 98, isPerm : false, role : 'manager', jd : ISODate('2011-01-01') },
    { nm : 'eft', sal : 89, isPerm : true, role : 'guard', jd : ISODate('1998-01-01') },
])

// to find all the employees, who joined after 2012-01-01
db.employee.find({ jd : { $gte : ISODate('2012-01-01')  } })

// find all the employees,who are working for company more than 5 years and less than 10 years 
db.employee.aggregate([
    {
        $addFields : {
            yrs : { 
                $dateDiff : { startDate : '$jd', endDate : '$$NOW', unit : 'year' } 
            } 
        }
    },
    {
        $match :  {
            yrs : { $gte : 5, $lt : 10 }
        }
    }
])


// role wise salary

db.employee.aggregate([
   { 
        $group : { 
            _id : '$role',
            count : { 
                $sum : '$sal'
            }  
        }  
    }
])

db.employee.find().sort( { 'role' : 1 }).limit(1)

db.employee.aggregate([
    { 
        //stage 2
         $group : { 
             _id : '$role',
             count : { 
                 $sum : '$sal'
             }  
         }  
    },
    {
        // stage 1
        $match : { count : { $gte : 90 } }
    },
    {
        $sort: { count : -1 }
    }
 ])