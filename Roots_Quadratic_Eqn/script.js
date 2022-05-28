

  document.getElementById("clickme").addEventListener("click",()=>{    const a=document.querySelector(".a").value;
  const b=document.querySelector(".b").value;
  const c=document.querySelector(".c").value;
  const output=document.querySelector(".output");
   const d=(b*b)-(4*a*c);
   console.log(d);
   if(d>0){
     x1= (-b+(Math.sqrt(d)))/(2*a);
     x2= (-b-(Math.sqrt(d)))/(2*a);
     output.textContent="Roots of this equation are distinct and values are "+ x1 + " and " + x2;
   }
   else if(d<0){x1= -b/(2*a);
   x2= Math.sqrt(Math.abs(d))/2*a;
    output.textContent="Roots of this equation are complex and values are "+ x1 +" + i ("+ x2 + ") and "+ x1 +" - i ("+ x2+")";
   }
   else{x1= (-b)/(2*a);
   output.textContent="Roots of this equation are equal and value is "+ x1;
   }
  });

  document.getElementById("reset").addEventListener("click",()=>{  let a=document.querySelector(".a");
  let b=document.querySelector(".b");
  let c=document.querySelector(".c");
  let output=document.querySelector(".output");
    a.value=" ";
    b.value=" ";
    c.value=" ";
  output.textContent= " "; 
    });

