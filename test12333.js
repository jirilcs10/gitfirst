var i=0;
const user={name:"user1",
lasactime:"1-11-2023"};
const posts=[];
function createPost(){
    return new Promise((resolve,reject)=>{
       posts.push(i++)
       resolve(posts);
    })
}

function updateLastUserActivityTime(){
    return new Promise((resolve,reject)=>{
        setTimeout( () => {
          user.lasactime =new Date();
            resolve(user.lasactime)
        }, 1000)  
    })
}
function deletePost(){
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            if(posts.length > 0){
                posts.pop();
                resolve(posts);
            } else {
                reject("ERROR: ARRAY IS EMPTY")
            }
        }, 1000)
})
}
Promise.all([createPost(),updateLastUserActivityTime()])
.then(([res1,res2])=>{
    console.log(res1);
    console.log(res2);
    deletePost().then((res3)=>{
       console.log(res3)
       deletePost().then((res3)=>{
        console.log(res3)
     }).catch((err)=>{
       console.log(err)
    })
})
})

