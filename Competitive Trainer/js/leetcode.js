$('#leetcode').css('box-shadow',"0px 0px 50px -20px")

$.ajax({
    url: "https://leetcode.com/graphql/",
    method: "GET",
    data: {query:"query questionOfToday{activeDailyCodingChallengeQuestion{date userStatus link question {acRate difficulty freqBar frontendQuestionId: questionFrontendId isFavor paidOnly: isPaidOnly status title titleSlug hasVideoSolution hasSolution topicTags {name id slug} }}}"},
    success: function(data){
        $('#date').html(data.data.activeDailyCodingChallengeQuestion.date)
        $('#daily-con').append(
            `<a class="link-dec" target="_blank" href="https://leetcode.com${data.data.activeDailyCodingChallengeQuestion.link}">${data.data.activeDailyCodingChallengeQuestion.question.title}</a>
            <span class="difficulty ${data.data.activeDailyCodingChallengeQuestion.question.difficulty}">${data.data.activeDailyCodingChallengeQuestion.question.difficulty}</span>
            <span class="status">${(data.data.activeDailyCodingChallengeQuestion.question.status=="ac")?"Solved":"Unsolved"}</span>`
        )
    },
    error: function(error){
        console.log(error)
    }
})

function getter(diff){
    $.ajax({
        url: "https://leetcode.com/graphql/",
        method: "GET",
        data: {
            query : `    query {  problemsetQuestionList: questionList(    categorySlug:""    limit: 1    skip: 0    filters: {difficulty:${diff}}  ) {    total: totalNum    questions: data {      acRate      difficulty      freqBar      frontendQuestionId: questionFrontendId      isFavor      paidOnly: isPaidOnly      status      title      titleSlug      topicTags {        name        id        slug      }      hasSolution      hasVideoSolution    }  }}    `
        },
        success: function(data){
            let total = data.data.problemsetQuestionList.total;
            total = 3
            $.ajax({
                url: "https://leetcode.com/graphql/",
                method: "GET",
                data: {
                    query : `    query {  problemsetQuestionList: questionList(    categorySlug:""    limit: 1    skip: 0    filters: {difficulty:${diff}}  ) {    total: totalNum    questions: data {      acRate      difficulty      freqBar      frontendQuestionId: questionFrontendId      isFavor      paidOnly: isPaidOnly      status      title      titleSlug      topicTags {        name        id        slug      }      hasSolution      hasVideoSolution    }  }}    `
                },
                success: function(data){
                    let ques = []
                    for(let i in data.data.problemsetQuestionList.questions){
                        ques.push(i)
                    }
                    console.log(ques)
                }
            })
        }
    })
}

$('#leetCodeRandom').on('click',leetCodeRandom);

function leetCodeRandom(){
    var arr = []
    if($('#competitiveTrainer #easy').prop('checked')){
        getter("EASY");
    }
}