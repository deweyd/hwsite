fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response => response.json())
    .then((function (json) {
        var box = document.querySelector('.box');


       json.forEach(function (photo,idx) {
           if(idx>20)return;

           var div = document.createElement('div');
           div.classList.add('card');
           div.innerHTML = `      <div class="card-image">
                    <img src=${photo.url}>
                    <span class="card-title">${photo.title}</span>
                    <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">airplay</i></a>
                </div>
                <div class="card-content">
                    <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                </div>`


          box.appendChild(div);
       })
    }))