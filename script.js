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
genBar()

function genBar(){
document.getElementById('parent').innerHTML=''
inp=document.querySelector("input").value;
console.log(inp)
for(i=1;i<=inp;i++){
    bar=document.createElement("div")
    bar.classList.add('d');
    h=Math.floor(Math.random()*50)
    bar.style.height=h+"px"
    bar.style.width=5+"px"
    bar.style.margin="4px"
    bar.style.backgroundColor="cyan"
    document.getElementById('parent').appendChild(bar);
}
}
function Wait(milisec) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("");
      }, milisec);
    });
}
async function bbsort(){
    bars=document.querySelectorAll('.d')
    console.log(bars[0])
    for(i=0;i<bars.length;i++){
        for(j=0;j<bars.length-i-1;j++){
            bars[j].style.backgroundColor = "blue";
            bars[j + 1].style.backgroundColor = "blue";
            a=parseInt(bars[j].style.height)
            b=parseInt(bars[j+1].style.height)
            if(a>b){
                await Wait(document.querySelector('input').value)
                k=bars[j].style.height
                bars[j].style.height=bars[j+1].style.height
                bars[j+1].style.height=k            
            }
            bars[j].style.backgroundColor = "cyan";
            bars[j + 1].style.backgroundColor = "cyan";
        }
        bars[bars.length - i - 1].style.backgroundColor = "green";
    }
    bars[0].style.backgroundColor = "green";
}


async function insort(){
    bars=document.querySelectorAll('.d')
    console.log(bars[0])
    for(i=1;i<bars.length;i++){
        j=i-1;
        k=bars[i].style.height
        bars[i].style.backgroundColor = "blue";
        while(j>=0 && parseInt(bars[j].style.height)>parseInt(k)){
            bars[j].style.backgroundColor = "blue";
            bars[j+1].style.height=bars[j].style.height
            j-=1;
            await Wait(document.querySelector('input').value)
            for (let k = i; k >= 0; k--) {
                bars[k].style.background = "green";
            }
        }
        bars[j+1].style.height=k;
        bars[bars.length - i - 1].style.backgroundColor = "green";
    }
}