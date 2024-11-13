const mongoose = require('mongoose');

main()
.then((res)=>{
    console.log("succesful");
})
.catch((err)=>{
    console.log(err);
})

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

let userSchema = new mongoose.Schema({
    name:String,
    email:String,
    age:Number,
});


const User = mongoose.model("User",userSchema);

// let user1 = new User({name:"deep joshi",email:"deep@gmail.com",age:22});

// let user2 = new User({name:"jay kaba",email:"jay@gmail.com", age:22});
// user2.save()
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });

// let user3 = new User({name:"jaydeep",email:"jaydeep@gmail.com", age:30})
// user3.save();


// User.insertMany([
//     {name:"amit", email:"amit@getMaxListeners.com",age:22},
//     {name:"meet", email:"meet@getMaxListeners.com",age:22},
//     {name:"vijay", email:"vijay@getMaxListeners.com",age:22}
// ]).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })



// User.find({}).then(
//     (res)=>{
//         console.log(res);
//     }).catch(
//         (err)=>{
//             console.log(err);
//     });



// User.find({age:{$gt:25}})
// .then((res)=>{
//     // console.log(res);
//     // console.log(res[0]);
//     console.log(res[0].name);
// })
// .catch((err)=>{
//     console.log(err);
// })

// User.findOne({age:{$eq:22}})
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// })

// User.findById("672af8b61d7f9fe4c1889057")
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// })


// User.updateOne({name:"deep joshi"},{age:21}).then((res)=>{
//     console.log(res);
// })

// User.updateOne({name:"jay kaba"},{age:21}).then((res)=>{
//     console.log(res);
// },)

// User.findOneAndUpdate({name:"amit"},{age:21},{new:true}).then((res)=>{
//     console.log(res);
// });