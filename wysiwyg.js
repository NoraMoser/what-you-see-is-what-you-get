console.log("hi");

let famousPeople = [
  {
  name: "Haruki Murakami",
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



for (let i = 0; i < famousPeople.length; i++) {

  // Give each person element a unique identifier
  output.innerHTML += `<div class="wholeCard" id="[i]">
                      <h1 class="nameOfPeople">${famousPeople[i].name}</h1>
                      <p class="description">${famousPeople[i].bio}</p>
                      <img class="image" src="${famousPeople[i].image}">
                      <p class="birth">Birth Year: ${famousPeople[i].birth}</p>
                       </div>`;
}

let containerEl = document.getElementsByClassName("wholeCard");
// let even = famousPeople.filter((people, index) => index % 2 === 0);
let input = document.getElementById("textInput");
let titles = document.getElementsByClassName("nameOfPeople");
let bio = document.getElementsByClassName("description");

// function removeHandler() {
//     containerEl[0].removeEventListener("click", function(event));
// }
// console.log(even);

for (let j = 0; j < containerEl.length; j++) {
  containerEl[0].addEventListener("click", function(event) {
    bio[0].classList.add("active"); 
    containerEl[0].classList.toggle("background");
    input.focus();
    input.addEventListener("keyup", function(event) {
      if (bio[0].classList.contains("active") === true) {
        bio[0].innerHTML = event.target.value;
      } 
    if (event.which === 13) {
      bio[0].classList.remove("active");
      input.value = "";
      
    }
  });
  });
  containerEl[1].addEventListener("click", function(event) {
    containerEl[1].classList.toggle("background");
    bio[1].classList.add("active");
    input.focus();
    input.addEventListener("keyup", function(event) {
      if (bio[1].classList.contains("active") === true) {
        bio[1].innerHTML = event.target.value;
      } 
    if (event.which === 13) {
      bio[1].classList.remove("active");
      input.value = "";
      
    }
  });
  });
  containerEl[2].addEventListener("click", function(event) {
    containerEl[2].classList.toggle("background");
    bio[2].classList.add("active");
    input.focus();
    input.addEventListener("keyup", function(event) {
      if (bio[2].classList.contains("active") === true) {
        bio[2].innerHTML = event.target.value;
      }
    if (event.which === 13) {
      bio[1].classList.remove("active");
      input.value = "";
    }
  });
  });
};