$('#competitiveTrainer #codechef').css('box-shadow',"0px 0px 50px -20px")

$('#competitiveTrainer #codeChefRandom').on('mousedown',()=>{
    $('#competitiveTrainer #codeChefRandom').html(
        `<img class="loader" src="../logos/loader.gif"></img>`
    )
    if($('#competitiveTrainer #begin').val().trim()=="" || $('#competitiveTrainer #end').val().trim()==""){
        $('#competitiveTrainer #codeChefRandom').html(`Go!`);
    }
});

$('#competitiveTrainer #codeChefRandom').on('click',()=>{
    if($('#competitiveTrainer #begin').val().trim()=="" || $('#competitiveTrainer #end').val().trim()==""){
        $('#competitiveTrainer #codeChefRandom').html(`Go!`);
        $('#competitiveTrainer #begin').toggleClass("invalidInp")
        $('#competitiveTrainer #end').toggleClass("invalidInp")
    }
    else{
        codeChefRandom();
    }
});

var counter = 0;
function increment(){
    counter++;
    console.log(counter)
    if(counter>5){
        $('#competitiveTrainer #error').append(`<p>The more the difference between begin rating and end rating, the more time it can take to navigate to a random problem. Be patient.</p>`)
        clearInterval(timer);
        counter = 0;
    }
}

var timer;

function codeChefRandom(){
    counter = 0;
    timer = setInterval(increment,1000)
    let begin = $('#competitiveTrainer #begin').val();
    let end = $('#competitiveTrainer #end').val();
    $.ajax({
        url: "https://www.codechef.com/api/list/problems",
        method: "GET",
        data: {
            limit: 1,
            start_rating: begin,
            end_rating: end
        },
        success: function(data){
            let count = data.count;
            console.log(count)
            if(count>0){
                $.ajax({
                    url: "https://www.codechef.com/api/list/problems",
                    method: "GET",
                    data: {
                        limit: count,
                        start_rating: begin,
                        end_rating: end
                    },
                    success: function(data){
                        console.log(data)
                        $('#competitiveTrainer #codeChefRandom').html(`Loading...`);
                        chrome.tabs.create({
                            url: "https://www.codechef.com/problems/"+data.data[Math.floor(Math.random()*count)]["code"]
                        })
                        clearInterval(timer);
                    }
                })
            }
            else{
                $('#competitiveTrainer #error').html("No problems found within the given parameters");
                $('#competitiveTrainer #codeChefRandom').html(`Go!`);
            }
        }
    })
}