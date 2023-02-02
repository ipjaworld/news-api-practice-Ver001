let news = [];
const getLatestNews = async() => {
    let url = new URL(`https://api.newscatcherapi.com/v2/latest_headlines?countries=US&topic=business&page_size=5`);
    
    let header = new Headers({'x-api-key':'KNTEcJ2lJbd1ypOeBtW3tRdv2Ua0smwcfHsp8WllmFs'});

    let response = await fetch(url,{headers:header});
    let data = await response.json();
    news = data.articles;
    console.log(news);

    render()
};
getLatestNews()

const render = () => {
    let newsHTML = ''
    newsHTML = news.map((item)=>{
        return `<div class="row news">
        <div class="col-lg-4">
            <img class="news-item" src="${item.media}"/>
        </div>
        <div class="col-lg-8">
            <h2 class="news-title">${item.title}</h2>
            <p>${item.summary}</p>
            <div>${item.rights} * ${item.published_date}</div>
        </div>        
    </div>`
    }).join('');


    document.getElementById("news-board").innerHTML = newsHTML;
}