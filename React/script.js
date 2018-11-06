function creatNode(element){
  return document.createElement(element);
}

function append(parent, el){
  return parent.appendChild(el);
}

const ul = document.getElementById("authors");

const url = 'https://randomuser.me/api/?results=10';

fetch(url).then((resp)=> resp.json())
          .then(function(data){
            let authours = data.results;

            return authors.map(function(authours){

              let li = createNode('li'),
              img = createNode('img'),
              span = creatNode('span');

              img.src=author.picture.medium

              span.innerHTML=`${authour.name.first}${author.name.last}`;

              append(li, img);
              append(li, span);
              append(ul,li);
            })
})

.catch(functin(error){

  console.log(JSON.stringify(error));

});
