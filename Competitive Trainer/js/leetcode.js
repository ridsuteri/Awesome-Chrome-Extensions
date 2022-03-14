$('#competitiveTrainer #leetcode').css('box-shadow',"0px 0px 50px -20px")

$.ajax({
    url: "https://leetcode.com/graphql/",
    method: "GET",
    data: {query:"query questionOfToday{activeDailyCodingChallengeQuestion{date userStatus link question {acRate difficulty freqBar frontendQuestionId: questionFrontendId isFavor paidOnly: isPaidOnly status title titleSlug hasVideoSolution hasSolution topicTags {name id slug} }}}"},
    success: function(data){
        $('#competitiveTrainer #date').html(data.data.activeDailyCodingChallengeQuestion.date)
        $('#competitiveTrainer #daily-con').html(
            `<a class="link-dec" target="_blank" href="https://leetcode.com${data.data.activeDailyCodingChallengeQuestion.link}">${data.data.activeDailyCodingChallengeQuestion.question.title}</a>
            <span class="difficulty ${data.data.activeDailyCodingChallengeQuestion.question.difficulty}">${data.data.activeDailyCodingChallengeQuestion.question.difficulty}</span>
            <span class="status">${(data.data.activeDailyCodingChallengeQuestion.question.status=="ac")?"Solved":"Unsolved"}</span>`
        )
    },
    error: function(error){
        console.log(error)
    }
})

$('#competitiveTrainer #leetCodeRandom').on('mousedown',()=>{
    $('#competitiveTrainer #leetCodeRandom').html(
        `<img class="loader" src="../logos/loader.gif"></img>`
    )
    if(!($('#competitiveTrainer #easy').prop('checked') || $('#competitiveTrainer #medium').prop('checked') || $('#competitiveTrainer #hard').prop('checked'))){
        $('#competitiveTrainer #leetCodeRandom').html(`Go!`);
    }
});

$('#competitiveTrainer #leetCodeRandom').on('click',()=>{
    if(!($('#competitiveTrainer #easy').prop('checked') || $('#competitiveTrainer #medium').prop('checked') || $('#competitiveTrainer #hard').prop('checked'))){
        $('#competitiveTrainer #easy').toggleClass('invalidInp')
        $('#competitiveTrainer #medium').toggleClass('invalidInp')
        $('#competitiveTrainer #hard').toggleClass('invalidInp')
    }
    else{
        $('#competitiveTrainer #leetCodeRandom').html(`Loading...`);
        leetCodeRandom();
    }
});

function leetCodeRandom(){
    var arr = [];
    var finQues = [];
    if($('#competitiveTrainer #easy').prop('checked')){
        console.log("Checked")
        let diff = "EASY";
        $.ajax({
            async: false,
            url: "https://leetcode.com/graphql/",
            method: "GET",
            data: {
                query : `    query {  problemsetQuestionList: questionList(    categorySlug:""    limit: 1    skip: 0    filters: {difficulty:${diff}}  ) {    total: totalNum    questions: data {      acRate      difficulty      freqBar      frontendQuestionId: questionFrontendId      isFavor      paidOnly: isPaidOnly      status      title      titleSlug      topicTags {        name        id        slug      }      hasSolution      hasVideoSolution    }}}`
            },
            success: function(data){
                // $('#leetCodeRandom').html(`<img class="loader" src="../logos/loader.gif"></img>`);
                let total = data.data.problemsetQuestionList.total;
                $.ajax({
                    async: false,
                    url: "https://leetcode.com/graphql/",
                    method: "GET",
                    data: {
                        query : `    query {  problemsetQuestionList: questionList(    categorySlug:""    limit: ${total}    skip: 0    filters: {difficulty:${diff}}  ) {    total: totalNum    questions: data {      acRate      difficulty      freqBar      frontendQuestionId: questionFrontendId      isFavor      paidOnly: isPaidOnly      status      title      titleSlug      topicTags {        name        id        slug      }      hasSolution      hasVideoSolution    }  }}`
                    },
                    success: function(data){
                        for(let i in data.data.problemsetQuestionList.questions) {
                            for (let j in data.data.problemsetQuestionList.questions[i]) {
                                if(j == "titleSlug")
                                    arr.push(data.data.problemsetQuestionList.questions[i][j])
                            }
                        }
                        finQues.push(arr[Math.floor(Math.random()*arr.length)]);
                        arr = []
                    }
                })
            }
        })
        
    }
    if($('#competitiveTrainer #medium').prop('checked')){
        let diff = "MEDIUM";
        $.ajax({
            async: false,
            url: "https://leetcode.com/graphql/",
            method: "GET",
            data: {
                query : `    query {  problemsetQuestionList: questionList(    categorySlug:""    limit: 1    skip: 0    filters: {difficulty:${diff}}  ) {    total: totalNum    questions: data {      acRate      difficulty      freqBar      frontendQuestionId: questionFrontendId      isFavor      paidOnly: isPaidOnly      status      title      titleSlug      topicTags {        name        id        slug      }      hasSolution      hasVideoSolution    }  }}    `
            },
            success: function(data){
                // $('#leetCodeRandom').html(`<img class="loader" src="../logos/loader.gif"></img>`);
                let total = data.data.problemsetQuestionList.total;
                $.ajax({
                    async: false,
                    url: "https://leetcode.com/graphql/",
                    method: "GET",
                    data: {
                        query : `    query {  problemsetQuestionList: questionList(    categorySlug:""    limit: ${total}    skip: 0    filters: {difficulty:${diff}}  ) {    total: totalNum    questions: data {      acRate      difficulty      freqBar      frontendQuestionId: questionFrontendId      isFavor      paidOnly: isPaidOnly      status      title      titleSlug      topicTags {        name        id        slug      }      hasSolution      hasVideoSolution    }  }}    `
                    },
                    success: function(data){
                        // console.log(data)
                        for(let i in data.data.problemsetQuestionList.questions) {
                            for (let j in data.data.problemsetQuestionList.questions[i]) {
                                if(j == "titleSlug")
                                    arr.push(data.data.problemsetQuestionList.questions[i][j])
                            }
                        }
                        finQues.push(arr[Math.floor(Math.random()*arr.length)]);
                        arr = []
                    }
                })
            }
        })
    }
    if($('#competitiveTrainer #hard').prop('checked')){
        diff = "HARD"
        $.ajax({
            async: false,
            url: "https://leetcode.com/graphql/",
            method: "GET",
            data: {
                query : `    query {  problemsetQuestionList: questionList(    categorySlug:""    limit: 1    skip: 0    filters: {difficulty:${diff}}  ) {    total: totalNum    questions: data {      acRate      difficulty      freqBar      frontendQuestionId: questionFrontendId      isFavor      paidOnly: isPaidOnly      status      title      titleSlug      topicTags {        name        id        slug      }      hasSolution      hasVideoSolution    }  }}    `
            },
            success: function(data){
                // $('#leetCodeRandom').html(`<img class="loader" src="../logos/loader.gif"></img>`);
                let total = data.data.problemsetQuestionList.total;
                $.ajax({
                    async: false,
                    url: "https://leetcode.com/graphql/",
                    method: "GET",
                    data: {
                        query : `    query {  problemsetQuestionList: questionList(    categorySlug:""    limit: ${total}    skip: 0    filters: {difficulty:${diff}}  ) {    total: totalNum    questions: data {      acRate      difficulty      freqBar      frontendQuestionId: questionFrontendId      isFavor      paidOnly: isPaidOnly      status      title      titleSlug      topicTags {        name        id        slug      }      hasSolution      hasVideoSolution    }  }}    `
                    },
                    success: function(data){
                        for(let i in data.data.problemsetQuestionList.questions) {
                            for (let j in data.data.problemsetQuestionList.questions[i]) {
                                if(j == "titleSlug")
                                    arr.push(data.data.problemsetQuestionList.questions[i][j])
                            }
                        }
                        finQues.push(arr[Math.floor(Math.random()*arr.length)]);
                        arr = []
                    }
                })
            }
        })
    }
    let link = "https://leetcode.com/problems/"+ finQues[Math.floor(finQues.length * Math.random())] +"/"
    finQues = [];
    chrome.tabs.create({
        url: link
    })
}