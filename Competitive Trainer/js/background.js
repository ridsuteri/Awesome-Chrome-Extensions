let timer = setInterval(()=>{
    console.log("going")
},1000)
setTimeout(()=>{
    clearInterval(timer);
    console.log("OVER")
},10000)