const preMovie=async()=>{
const BringingTickets=new Promise((resolve,reject)=>{
 setTimeout(()=>resolve(`tickets`),3000)
});
const getPopcorn=new Promise((resolve,reject)=>{
    resolve(`popcorn`)
});
const addButter=new Promise((resolve,reject)=>{
    resolve(`butter`)
});
const getColdDrinks=new Promise((resolve,reject)=>{
    resolve(`soda`)
});
let ticket=await BringingTickets;
console.log(`brought the ${ticket}`)
console.log('lets go in');
console.log('hungry')

let popcorn=await getPopcorn;
console.log(`got the ${popcorn}`)
console.log('lets go in');
console.log('need butter');

let butter=await addButter;
console.log(`got the ${butter}`)
console.log('anything else');
console.log('cold drink');

let colddrink=await getColdDrinks;
console.log(`got ${colddrink}`)
console.log('lets go in');

return ticket;
}
preMovie().then((m)=>console.log(`person shows ${m}`));
