const users=[
    {userId:1,userName:"Ahsan",gender:"male"},
    {userId:2,userName:"AH",gender:"male"},
    {userId:3,userName:"habib",gender:"male"}
];

// for(let user of users){
//     console.log(user);
// }

//nested destructuring

const [{userName:user1Name,userId: user1Id ,gender: user1Gen},,{gender:user3Gen}]=users;

console.log(user1Name,user1Id,user1Gen,user3Gen);