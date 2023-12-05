

// Initial Data Coming
const initialLoad = async (value) =>{

    try{
        if(value === ""){

        }
        else{
            const res = await fetch(`https://newsapi.org/v2/everything?q=${value}&from=2023-11-05&sortBy=publishedAt&apiKey=ed8a59a4c56045ce8fd03ac9f10fcfd2`);
            const data = await res.json();
            var cardsContainer = document.querySelector('.cards-container');
            for(let i=0; i<9; i=i+1){
                const htmlData = `
                    <div class="card">
                            <a class="news-link" target="_blank" href="${data.articles[i].url}"></a>
                            <div class="card-header">
                                <img src="${data.articles[i].urlToImage}" alt="News Image" class="image card-image" loading="lazy">
                            </div>
                            <div class="card-content flex">
                                <h2 class="headline" id="headline">${data.articles[i].title}</h2>
                                <p class="source" id="source">${data.articles[i].source.name} ${data.articles[i].publishedAt}</p>
                                <h3 class="news-detail" id="news-detail">${data.articles[i].description}</h3>
                            </div>
                    </div>
                    `;
                cardsContainer.insertAdjacentHTML('afterbegin',htmlData);
            }
        }
    }
    catch(error){
        console.log(error);
    }

} 


// Clearing Data
const clearLoad = () =>{
    document.querySelector('.cards-container').innerHTML = "";
}



const enterPressed = () =>{
    var search = document.querySelector('.search-input').value;
    clearLoad();
    initialLoad(search);
}


window.addEventListener('load',initialLoad('all'));


// Fetching data for AI
document.querySelector('.ai').addEventListener("click",()=>{
    clearLoad();
    initialLoad('ai');
}); 


// Fetching data for FINANCE
document.querySelector('.finance').addEventListener("click",()=>{
    clearLoad();
    initialLoad('finance');
}); 


// Fetching data for POLITICS
document.querySelector('.politics').addEventListener("click",()=>{
    clearLoad();
    initialLoad('politics');
}); 


// Fetching data according to SEARCH
document.querySelector('.search-btn').addEventListener("click",()=>{
    var search = document.querySelector('.search-input').value;
    clearLoad();
    initialLoad(search);
}); 

/*==================
    For Mobile
==================*/

// Fetching data for AI
document.querySelector('.ai').addEventListener("pressed",()=>{
    clearLoad();
    initialLoad('ai');
}); 


// Fetching data for FINANCE
document.querySelector('.finance').addEventListener("pressed",()=>{
    clearLoad();
    initialLoad('finance');
}); 


// Fetching data for POLITICS
document.querySelector('.politics').addEventListener("pressed",()=>{
    clearLoad();
    initialLoad('politics');
}); 


// Fetching data according to SEARCH
document.querySelector('.search-btn').addEventListener("pressed",()=>{
    var search = document.querySelector('.search-input').value;
    clearLoad();
    initialLoad(search);
}); 