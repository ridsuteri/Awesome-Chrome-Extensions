$('#leetcode').css('box-shadow',"0px 0px 50px -20px")

$.ajax({
    url: "https://leetcode.com/graphql/",
    method: "GET",
    data: {query:"query questionOfToday{activeDailyCodingChallengeQuestion{date userStatus link question {acRate difficulty freqBar frontendQuestionId: questionFrontendId isFavor paidOnly: isPaidOnly status title titleSlug hasVideoSolution hasSolution topicTags {name id slug} }}}"},
    success: function(data){
        $('#date').html(data.data.activeDailyCodingChallengeQuestion.date)
        $('#daily-con').append(
            `<a class="link-dec" target="_blank" href="https://leetcode.com${data.data.activeDailyCodingChallengeQuestion.link}">${data.data.activeDailyCodingChallengeQuestion.question.title}</a>
            <span class="difficulty .${data.data.activeDailyCodingChallengeQuestion.question.difficulty}">${data.data.activeDailyCodingChallengeQuestion.question.difficulty}</span>`
        )
    },
    error: function(error){
        console.log(error)
    }
})