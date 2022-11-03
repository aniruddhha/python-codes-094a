db.items.find({ 
    $and: [
        { 
            price: { $lt: 100 } 
        }, 
        { 
            qty: { $gt: 10 } 
        }
    ] 
})

db.items.insertMany([
    { price : 20, qty : 99, name : 'lmn' },
    { price : 30, qty : 56, name : 'xyz' },
    { price : 10, qty : 1056, name : 'ghn' },
])

db.items.insertOne({
    _id : 67,
    price : 45, 
    qty : 19, 
    name : 'zzz'
})

db.items.find({ name : { '$regex' : /^lm/ } })
db.items.find({ name : /lm/ } )

db.items.find({ 
    _id : 67
 })

db.items.find({
    _id : ObjectId("63620309a37a09d0505b937f")
}, { 
    _id : 0,
    sales : 1, 
    dept : 1
})

db.items.updateOne(
    { _id : ObjectId("63620309a37a09d0505b937f") },
    { 
        $set : { 
            dept : 'marketing' 
        },
        $currentDate : {
            lastModified : true
        }
    }
)

db.items.deleteOne(
    { _id : 67}
)

db.items.deleteMany(
    { 
        price : { 
            $gte : 20 
        } 
    }
)