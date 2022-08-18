const historyData = [];
const births = [];
const events = [];
const deaths = [];
const date = null;
const stdmsg = "On this day...";

const birth = document.querySelector(".letter.e-birth");
const even = document.querySelector(".letter.e-event");
const death = document.querySelector(".letter.e-death");

fetch('http://history.muffinlabs.com/date')
    .then(res => res.json())
    .then((data) => {
        //extract history from data object
        this.historyData = data.data;
        this.date = data.date;
    })
    .then((data) => {
        //extract Births, Events and Deaths from data source
        this.births = this.historyData.Births;
        this.events = this.historyData.Events;
        this.deaths = this.historyData.Deaths;

        //compute birth data
        if (birth) {
            const birthText = [];
            const birthYear = [];
            for (i in this.births) {
                //extract names of people born that year
                birthText.push(this.historyData.Births[i].text);
            }

            for (i in this.births) {
                //extract birth year
                birthYear.push(this.historyData.Births[i].year);
            }
            //pick random birth data
            let pick = Math.floor(Math.random() * this.births.length);

            //  export birth data for each history data into DOM
            const birthtemplate = `<h3 class="letter-head">${stdmsg}</h3>
        <p class="letter-date">${this.date + ' ' + birthYear[pick]}</p> 
        <p>${birthText[pick]}</p>
        <p class="footnote">[WORLD HISTORY]</p>`;
            birth.innerHTML = birthtemplate;
        }

        if (even) {
            //compute event data
            const eventText = [];
            const eventYear = [];
            for (i in this.events) {
                //extract names of people born that year
                eventText.push(this.historyData.Events[i].text);
            }

            for (i in this.events) {
                //extract birth year
                eventYear.push(this.historyData.Events[i].year);
            }
            //pick random birth data
            pick = Math.floor(Math.random() * this.events.length);

            //  export birth data for each history data into DOM
            const eventtemplate = `<h3 class="letter-head">${stdmsg}</h3>
        <p class="letter-date">${this.date + ' ' + eventYear[pick]}</p> 
        <p>${eventText[pick]}</p>
        <p class="footnote">[WORLD HISTORY]</p>`;
            even.innerHTML = eventtemplate;
        }

        if (death) {
            //compute event data
            const deathText = [];
            const deathYear = [];
            for (i in this.deaths) {
                //extract names of people born that year
                deathText.push(this.historyData.Deaths[i].text);
            }

            for (i in this.deaths) {
                //extract birth year
                deathYear.push(this.historyData.Deaths[i].year);
            }
            //pick random birth data
            pick = Math.floor(Math.random() * this.deaths.length);

            //  export birth data for each history data into DOM
            const deathtemplate = `<h3 class="letter-head">${stdmsg}</h3>
            <p class="letter-date">${this.date + ' ' + deathYear[pick]}</p> 
            <p>${deathText[pick]}</p>
            <p class="footnote">[WORLD HISTORY]</p>`;
                death.innerHTML = deathtemplate;
        }
    })
    .catch(err => console.log(err));