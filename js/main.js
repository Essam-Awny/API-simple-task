// هنحط الاكواد داخل فنكشن عشان هنخلي الداتا متغيرة ف مش عايزينها تظهر اول ما نفتح
//7:35

//576b80386173407d81bb9cc91005c911 => API key


// var newsAPi = []

// function getNews(searchTerm){
//     var request = new XMLHttpRequest()
// request.open('get', `https://newsapi.org/v2/everything?q=${searchTerm}&from=2024-08-05&sortBy=publishedAt&apiKey=576b80386173407d81bb9cc91005c911`)
// request.send()
// request.addEventListener('readystatechange', function(){
//     if(request.readyState == 4 && request.status ==200){
//         newsAPi = JSON.parse(request.response).articles
//         console.log(newsAPi);
        
//         displayNews()
        
//     }
// })
// }

let data = []
// خلينا الداتا جلوبال عشان هنستخدمها في فنكشن تانية

async function getData(meal){
    // الفيتش هنا جايبة معلومات زيادة 
 let response =  await fetch(`https://forkify-api.herokuapp.com/api/search?q=${meal}`)
 let finalResponse =await response.json()
  data = finalResponse.recipes
 //عشان نأكسس الداتا اللي محتاجينها من اللينك json كتبنا 
 // json != JSON خلي بالك دي غير دي 
console.log(data);

    displayNews()
}
getData('pasta')

document.querySelector('input').addEventListener('input' , function(e){
    getData(e.target.value)

})

function displayNews(){
    var cartona= ''
    for( var i = 0  ;i<data.length     ;   i++   ){
        cartona+=`     <div class="col-md-4">
                <div class="post text-center">
                    <img src="${data[i].image_url}" class="w-100 " alt="post">
                    <h3>${data[i].title}</h3>
                    <p>${data[i].title}</p>
                </div>
            </div>`
    }
    document.querySelector('.row').innerHTML = cartona;
}




