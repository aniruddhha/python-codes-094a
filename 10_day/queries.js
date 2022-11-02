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
