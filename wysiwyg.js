console.log("hi");

let famousPeople = [
  {
  name: "Haruto Murakami",
  bio: "Haruki Murakami is a Japanese writer. His books and stories have been bestsellers in Japan as well as internationally, with his work being translated into 50 languages and selling millions of copies outside his native country.",
  image: "https://static01.nyt.com/images/2011/10/23/magazine/23murakami1_span/23murakami1_span-jumbo.jpg",
  birth: 1949
  },
  {
  name: "John Scalzi",
  bio: "John Michael Scalzi II is an American science fiction author and former president of the Science Fiction and Fantasy Writers of America.",
  image: "http://nerdreactor.com/wp-content/uploads/2015/05/Scalzi.jpeg",
  birth: 1969
  },
  {
  name: "Brandon Sanderson",
  bio: "Brandon Sanderson is an American fantasy and science fiction writer. He is best known for the Cosmere universe.",
  image: "https://images-na.ssl-images-amazon.com/images/I/71dsJtQHmpL._UX250_.jpg",
  birth: 1975
  }
  ]; 

let output = document.getElementById("output");
let people = '';

famousPeople.forEach(function(item){
  people += `<div class="objectNumberOne">${item.name}</div>`;

});

output.innerHTML = people;
// var counter = 0;
// var outputEl = document.getElementById("output");
// for (; counter < 4; counter++) {
//   // Give each person element a unique identifier
//   outputEl.innerHTML += `<div class="objectNumberOne" id="object1 ${famousPeople.name}"></div>`;
// }
