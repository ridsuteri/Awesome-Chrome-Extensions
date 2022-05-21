fetch('https://inshortsapi.vercel.app/news?category=sports')
    .then(data => data.json())
    .then(newsData => {
        const newsImg = newsData.data[0].imageUrl;
        const imgElement = document.getElementById('pic');
        const newsTitle = newsData.data[0].title;
        const titleElement = document.getElementById('title');
        const newsUrl = newsData.data[0].url;
        const urlElement = document.getElementById('link')

        imgElement.src = newsImg;
        titleElement.innerHTML = newsTitle;
        urlElement.href = newsUrl;
    })