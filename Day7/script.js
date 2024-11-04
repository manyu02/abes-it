let num = [1, 2, 3, 4, 5, 6, 7, 6];
// let num2 = num.map(x => x * 2);
// console.log(num2);

// let evennum = num.filter(x => x % 2 == 0);
// console.log(evennum);

//arr.reduce((accumlator,current)=> callback fn,initial value);

// sumarr = num.reduce((x, y) => x + y, 0);
// console.log(sumarr);

// let product = num.reduce((x, y) => x * y, 1);
// console.log(product);

// const students = [
//     { name: "alice", score: 50 },
//     { name: "ali", score: 55 },
//     { name: "al", score: 54 },
//     { name: "alhkk", score: 40 },
//     { name: "alishdfk", score: 90 },
//     { name: "akad", score: 44 }
// ]

// // let score = students.map(x => x.score);
// // console.log(score);
// // let sum = score.reduce((x, y) => x + y, 0);
// // console.log(sum);
// // let score2 = students.reduce((x,y)=>x.score+y.score,0);
// // console.log(score2);
// // let score=students.filter(x=>x.score>50).reduce((x,y)=>x+y.score,0);
// // console.log(score);
// num.forEach((x)=>{
//     console.log(x);
// })
// console.log("start");
// setTimeout(()=>{
//     console.log("First task completed");
// },2000)
// setTimeout(() => {
//     console.log("Second task completed");        
// },1000);

const myPromise=new Promise((resolve,reject)=>{
    let sucess=true;
    setTimeout(()=>{
        if(sucess)
        {
            resolve("Data Sent Sucessfully");
        }
        else
        {
            reject("Data not Sent");
        }
},5000);
});
myPromise.then(()=>{
    console.log("Data: "+message)
}).catch((error)=>{
    console.log("error");
});