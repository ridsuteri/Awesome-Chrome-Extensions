$('#competitiveTrainer #codeforces').css('box-shadow',"0px 0px 50px -20px")

const arr = ['binary search','brute force','data structures','combinatorics','dfs and similar','dsu','graph matchings','greedy','math','graphs','shortest paths','implementation','constructive algorithms','dp','sortings','hashing','strings','divide and conquer','trees','geometry','matrices','number theory','bitmasks','two pointers','fft','interactive','2-sat','flows','probabilities','games','string suffix structures','meet-in-the-middle','schedules','ternary search','*special','chinese remainder theorem','expression parsing']

let counter = 0;
for(let i in arr){
    counter = counter+1;
    $('#tags').append(
        `<label class="tagLabel" for="${counter}">${arr[i]}</label>
        <input class="tagCheckbox" type="checkbox" name="tag" id="${counter}" value="${arr[i]}">`
    )
}

$('.tagLabel').on('click',(event)=>{
    $(event.currentTarget).toggleClass('selected');
})

var check = false;

$('#competitiveTrainer #codeForcesRandom').on('mousedown',()=>{
    $('#competitiveTrainer #codeForcesRandom').html(
        `<img class="loader" src="../logos/loader.gif"></img>`
    )
    for(let i = 1;i<=arr.length;i++){
        if($(`#competitiveTrainer #tags #${i}`).prop('checked')){
            check = true;
            break;
        }
    }
    if(!check){
        $('#competitiveTrainer #codeForcesRandom').html(`Go!`);
    }
});

$('#competitiveTrainer #codeForcesRandom').on('click',()=>{
    console.log(check)
    if(check){
        codeForcesRandom();
    }
    else{
        $('#competitiveTrainer #error').html("Select at least 1 tag");
    }
});

function codeForcesRandom(){
    let tagArr = ""
    for(let i = 1;i<=arr.length;i++){
        if($(`#competitiveTrainer #tags #${i}`).prop('checked')){
            tagArr += `;${arr[i-1]}`
        }
    }
    $.ajax({
        url: "https://codeforces.com/api/problemset.problems",
        method: "GET",
        data: {
            tags: tagArr
        },
        success: function(data){
            let length = Object.keys(data.result.problems).length;
            console.log(length)
            if(length==0){
                $('#competitiveTrainer #error').html("No problems found within the given parameters");
                $('#competitiveTrainer #codeForcesRandom').html(`Go!`);
                return;
            }
            let ind = Math.floor(Math.random()*length);
            console.log(ind)
            $('#competitiveTrainer #codeForcesRandom').html(`Loading...`);
            chrome.tabs.create({
                url: "https://codeforces.com/problemset/problem/"+data.result.problems[ind]["contestId"]+"/"+data.result.problems[ind]["index"]
            })
        }
    })
}