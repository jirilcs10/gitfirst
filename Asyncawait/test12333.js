var i=0;
const user={name:"user1",
lasactime:"1-11-2023"};
const posts = [{title: 'POST1'}];

const postupdate=async()=>{
const createPost= new Promise((resolve,reject)=>{
       posts.push({title:'POST2'})
       resolve(posts);
    })


const updateLastUserActivityTime=new Promise((resolve,reject)=>{
        setTimeout( () => {
          user.lasactime =new Date();
          console.log(i++);
            resolve(user)
        }, 1000)  
    })
    const deletePost= new Promise((resolve, reject) => {
        setTimeout( () => {
            if(posts.length > 0){
                posts.pop();
                resolve(posts);
            } else {
                reject("ERROR: NO MORE POSTS")
            }
        }, 1000)
    })

// let createdposts=await createPost;

// let updateacttime=await updateLastUserActivityTime;
let [post,time]=await Promise.all([createPost,updateLastUserActivityTime])
for(const k in post)
{
   console.log(post[k].title)
}
console.log(time.lasactime);

let uppost=await deletePost;
for(const k in uppost)
{
   console.log(uppost[k].title)
}

}


// Promise.all([createPost(),updateLastUserActivityTime()])
// .then(([res1,res2])=>{
//     console.log(res1);
//     console.log(res2);
//     deletePost().then((res3)=>{
//        console.log(res3)
//        deletePost().then((res3)=>{
//         console.log(res3)
//      }).catch((err)=>{
//        console.log(err)
//     })
// })
// })

    postupdate();
  