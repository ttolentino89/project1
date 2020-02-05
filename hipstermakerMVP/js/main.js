
//API
const personAPI = 'https://uinames.com/api/?ext';
const musicAPI = 'https://binaryjazz.us/wp-json/genrenator/v1/story/1/'
const genreAPI = ''


//DOM queries
const button = document.querySelector('button');
// const genderInput = document.querySelector('gender');
const result = document.querySelector(".show-content");

button.addEventListener('click', async () => {
//   const gender = genderInput.value;
  let response = await axios.get(personAPI)
    .then(response => {
            let photo = response.data.photo;
            let first = response.data.name;
            let last = response.data.surname;
            let age = response.data.age;
            let country = response.data.region;
            result.innerHTML += `<div class="card">
                            <img src="${photo}"> <br />
                            <h4>${first} ${last}</h4>
							<h3>Age ${age} from ${country}</h3>
							<br>
			                </div>`;
			// console.log(first, last, age, country)
     });
});


  







function hideInstructions() {
  let x = document.getElementById("intro");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}


//modal functions
// 1. Get the modal
let modal = document.getElementById("myModal");

// 2. Get the button that opens the modal
let btn = document.getElementById("about");

// 3. Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// 4. When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// 5. When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// 6. When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// /* Background/Text Color Toggle */
// let mode = document.querySelector("color-mode");
// let darkMode = false;

// mode.addEventListener("click", function() {
// 	if(darkMode = true) {
// 		document.body.style.background = "white";
// 		document.body.style.color = "black";
// 		//reset boolean to false
// 		darkMode = false;
// 	} else {
// 		document.body.style.background = "black";
// 		document.body.style.color = "white";
// 		darkMode = true;
// 	}
// } 