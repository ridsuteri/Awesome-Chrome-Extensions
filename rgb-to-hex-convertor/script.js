let rgb= document.getElementById("rgb");
let hex= document.getElementById("hex");

// set value to zero
function invalidInput(input){
    input.value=0;
}

// function to convert hex into rgb value
hex.oninput = function toRgb(){
    let hex_value= hex.value;
    let resultRgb= [];

    // Checking for valid hexcode input
    if(/^#?[A-Fa-f0-9]{6}$/.test(hex_value)){
        hex_value= hex_value.split("#")[1] || hex_value;

        // copying value of hexcode into an array
        for(let x=0;x<hex_value.length;x+=2){
            resultRgb.push(parseInt(hex_value[x]+hex_value[x+1],16));
        }
        rgb.value="rgb("+resultRgb+")";
        document.getElementById("color").style.backgroundColor= "#"+hex_value;
    }
    else{
        invalidInput(rgb);
    }
};

// function to convert rgb into hexcode
rgb.oninput = function toHex(){
    let rgb_value= rgb.value;
    let resultHex="#";

    // variables to check valid rgb input 
    let rgbRegex1= /^rgb\([0-9]{1,3},[0-9]{1,3},[0-9]{1,3}\)$/;
    let rgbRegex2= /^[0-9]{1,3},[0-9]{1,3},[0-9]{1,3}$/;

    // checking valid rgb input
    if(rgbRegex1.test(rgb_value) || rgbRegex2.test(rgb_value)){
        rgb_value=rgb_value.replace(/[rgb()]+/g,"") || rgb_value;
        rgb_value=rgb_value.split(",");
        let condition = rgb_value.every((value)=>{
            return parseInt(value)<=255;
        });

        if(condition){
            rgb_value.forEach(value=>{
                value= parseInt(value).toString(16);
                resultHex+=value.length==1?"0"+value : value;
            });
            hex.value=resultHex;
            document.getElementById("color").style.backgroundColor= resultHex;
        }
        else{
            invalidInput(hex);
        }
    }
    else{
        invalidInput(hex);
    }
};