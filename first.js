hey={
    one:"sdf",
    two:"sdff"
}
let array=[1,5,3,5,7,8,4,3,5,2,22,66,424,57,24,567,-123,35,3,546,657,0,456,4566]
// for(let i in array) console.log(array[i]);
sort=(array)=>{
for(let i=1;i<array.length;i++){
    let k=array[i];
    let j=i-1;
    while(j>=0 && array[j]>k){
        array[j+1]=array[j];
        j-=1;
    }
    array[j+1]=k;
}
}
// sort(array)
// array.forEach((a,b)=>console.log(a*b))
// console.log(array.filter((a,b)=>a>b));
// console.log(array.reduce((a,b)=> a>b?a:b))
// for(let i in array) console.log(array[i]);
// console.log(array.concat(hey))
// n=prompt("entr");
// console.log(n)
n=document.querySelector("#mode");
body=document.querySelector('*');
if(n.innerText=='Dark'){
    body.style.backgroundColor='black'
        body.style.color='white'
}
n.addEventListener("click",()=>{
    if(n.innerText=='Light'){
        body.style.backgroundColor='black'
        body.style.color='white'
        n.innerText='Dark'
    }else{
        body.style.backgroundColor='white'
        body.style.color='black'
        n.innerText='Light'
    }
})



//rock paper scissor
para=document.querySelector('#res')
choice=document.querySelector('#choice')
option=['r','p','s']
r=document.querySelector("#r")
p=document.querySelector("#p")
s=document.querySelector("#s")
let random=''
r.addEventListener("click",()=>{
    random=Math.floor(Math.random()*3)
    console.log("inside rock")
    if(option[random]=='r') para.innerText="DRAW"
    else if(option[random]=='p') para.innerText="LOST"
    else para.innerText='WON'
    choice.innerText=option[random];
})
p.addEventListener("click",()=>{
    random=Math.floor(Math.random()*3)
    console.log("inside paper")
    if(option[random]=='r') para.innerText="WON"
    else if(option[random]=='p') para.innerText="DRAW"
    else para.innerText='LOST'
    choice.innerText=option[random];
})
s.addEventListener("click",()=>{
    random=Math.floor(Math.random()*3)
    console.log("inside scissor")
    if(option[random]=='r') para.innerText="LOST"
    else if(option[random]=='p') para.innerText="WON"
    else para.innerText='DRAW'
    choice.innerText=option[random];
})



getPromise=()=>{
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            // console.log("hel")
            res("skdjf")
            // rej("res")
        },2000)
    })
}

pro=getPromise();
// pro.then((res)=>console.log(res))
// pro.catch((rej)=>console.log(rej))

// getPromise().then(()=>console.log("res")).catch((rej)=>console.log("rej"))
// getPromise().then((res)=>{
//     console.log("get data 1"+res)
//     return getPromise()
// }).then((res)=>{
//     console.log("get data 2"+res)
//     return getPromise()
// }).then((res)=>{
//     console.log("get data 3"+res)
//     return getPromise()
// }).then(()=>console.log("get data 4"+res))


// (async function getAll(){
//     await getPromise()

// })()
// getAll