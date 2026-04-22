class Tutor
  {
    constructor(name = "", url = "", major = "", gpa = 0.0, specialties= [], pay = 0.0, reviews = [], email = ""){
      this.name = name;
      this.url = url;
      this.major = major;
      this.gpa = gpa;
      this.specialties = specialties;
      this.pay = pay;
      this.reviews = reviews;
      this.email = email;
    }
    getData() {
      return this;
    }
  }

let tutors = [
  new Tutor("Alice Chen", "https://www.csulb.edu/sites/default/files/images/2025-10/profile-college-corps-christine.jpg", "Actuarial Science", 3.9, ["Java", "Python", "C++"], 25.00, [5, 4, 5, 5], "alice.chen@email.com"),
  new Tutor("Marcus Rivera", "https://www.csulb.edu/sites/default/files/images/2025-10/profile-college-corps-nicolas.jpg", "Software Engineering", 3.7, ["Python", "R", "JavaScript"], 22.00, [4, 5, 4], "marcus.rivera@email.com"),
  new Tutor("Gabi Bateman", "https://www.csulb.edu/sites/default/files/images/2025-10/profile-college-corps-gabi.jpg", "Computer Science", 4.0, ["C++", "C", "Java"], 28.00, [5, 5, 5, 4, 5], "gabi.bateman@email.com"),
  new Tutor("Daniela Cohen", "https://www.csulb.edu/sites/default/files/images/2025-10/profile-college-corps-danielle.jpg", "Information Technology", 3.5, ["Bash", "PowerShell", "Go"], 20.00, [4, 3, 4], "daniela.cohen@email.com"),
  new Tutor("Sofia Nguyen", "https://www.csulb.edu/sites/default/files/images/2025-10/profile-college-corps-josephine.jpg", "Computer Science", 3.8, ["JavaScript", "TypeScript", "HTML"], 24.00, [5, 4, 5], "sofia.nguyen@email.com"),
  new Tutor("Ethan Brooks", "https://www.csulb.edu/sites/default/files/images/2025-10/profile-college-corps-jorman.jpg", "Mathematics", 3.6, ["Python", "MATLAB", "R"], 21.00, [4, 4, 3, 5], "ethan.brooks@email.com"),
  new Tutor("Aisha Williams", "https://www.csulb.edu/sites/default/files/images/2025-10/profile-college-corps-claire.jpg", "Software Engineering", 3.9, ["SQL", "Java", "Python"], 26.00, [5, 5, 4, 5], "aisha.williams@email.com"),
  new Tutor("Liya OBrien", "https://www.csulb.edu/sites/default/files/images/2025-10/profile-college-corps-genesis.jpg", "Computer Science", 3.4, ["HTML", "CSS", "JavaScript"], 18.00, [3, 4, 4], "liya.obrien@email.com"),
  new Tutor("Mei Zhang", "https://www.csulb.edu/sites/default/files/images/2025-10/profile-college-corps-jennie.jpg", "Data Science", 4.0, ["Python", "R", "Julia"], 30.00, [5, 5, 5, 5], "mei.zhang@email.com"),
  new Tutor("Carlos Mendez", "https://www.csulb.edu/sites/default/files/images/2025-10/profile-college-corps-eduardo.jpg", "Computer Engineering", 3.7, ["C", "Assembly", "Rust"], 23.00, [4, 5, 4, 3], "carlos.mendez@email.com"),
  new Tutor("Zoe Kim", "https://www.csulb.edu/sites/default/files/images/2025-10/profile-college-corps-janelle.jpg", "Computer Science", 3.8, ["Swift", "Kotlin", "Objective-C"], 27.00, [5, 4, 5], "zoe.kim@email.com"),
  new Tutor("Nola Thompson", "https://www.csulb.edu/sites/default/files/images/2025-10/profile-college-corps-kimberly.jpg", "Information Systems", 3.3, ["SQL", "Python", "Java"], 19.00, [3, 3, 4], "nola.thompson@email.com"),
  new Tutor("Isabella Garcia", "https://www.csulb.edu/sites/default/files/images/2025-10/profile-college-corps-daniela.jpg", "Computer Science", 3.9, ["Python", "Java", "Haskell"], 25.00, [5, 5, 4, 5], "isabella.garcia@email.com"),
  new Tutor("Jaylen Harris", "https://www.csulb.edu/sites/default/files/images/2025-10/profile-college-corps-khamira.jpg", "Cybersecurity", 3.6, ["Python", "C", "Bash"], 29.00, [4, 5, 5], "jaylen.harris@email.com"),
  new Tutor("Ava Moreau", "https://www.csulb.edu/sites/default/files/images/2025-10/profile-college-corps-amber.jpg", "Software Engineering", 3.7, ["JavaScript", "TypeScript", "Python"], 24.00, [4, 4, 5, 4], "ava.moreau@email.com"),
  new Tutor("Daniel Garabay", "https://www.csulb.edu/sites/default/files/images/2025-10/profile-college-corps-john.jpg", "Computer Science", 3.5, ["Java", "Kotlin", "Swift"], 22.00, [4, 3, 4], "daniel.garabay@email.com"),
  new Tutor("Layla Edwards", "https://www.csulb.edu/sites/default/files/images/2025-10/profile-college-corps-ariana-m.jpg", "Data Science", 3.8, ["Python", "SQL", "R"], 26.00, [5, 4, 5, 4], "layla.edwards@email.com"),
  new Tutor("Ryan Aguilar", "https://www.csulb.edu/sites/default/files/images/2025-10/profile-college-corps-delfino.jpg", "Computer Engineering", 3.4, ["C", "VHDL", "Assembly"], 20.00, [3, 4, 3], "ryan.aguilar@email.com"),
  new Tutor("Nadia Bowman", "https://www.csulb.edu/sites/default/files/images/2025-10/profile-college-corps-kiana.jpg", "Computer Science", 4.0, ["Haskell", "Scala", "Rust"], 32.00, [5, 5, 5], "nadia.bowman@email.com"),
  new Tutor("Tyler Nguyen", "https://media.licdn.com/dms/image/v2/D4E22AQGTZ1sQMSVgfw/feedshare-shrink_1280/B4EZj3PUgIIUA0-/0/1756494646869?e=2147483647&v=beta&t=zq1dw7C7HVFbyZ2eFY_l4_BraWzy75sZ3fM_fTB5H2o", "Information Technology", 3.6, ["Go", "Python", "Bash"], 28.00, [4, 5, 4, 5], "tyler.nguyen@email.com")
];


let currentArray = [...tutors];

// This function adds cards the page to display the data in the array
function showCards(array) {
  currentArray = array;
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  for(let i = 0; i < array.length; i++)
    {
      const templateCard = document.querySelector(".card"); 
      const nextCard = templateCard.cloneNode(true); 
      //instead of setting every member of the object, I used getData to return the members
      editCardContent(nextCard, array[i].getData());
      cardContainer.appendChild(nextCard);  
    }
}

function editCardContent(card, tutor) {
  card.style.display = "block";

  const cardHeader = card.querySelector("h2"); 
  cardHeader.textContent = tutor.name; 

  const cardImage = card.querySelector("img"); 
  cardImage.src = tutor.url;
  cardImage.alt = tutor.name + " Profile Photo";
  
  const bulletPts = card.querySelectorAll("li");
  bulletPts[0].textContent = "Email: " + tutor.email;
  bulletPts[1].textContent = "Major: " + tutor.major;
  bulletPts[2].textContent = "GPA: " + tutor.gpa;
  bulletPts[3].textContent = "Specialties: " + tutor.specialties.join(", ");
  
  let rounded = tutor.pay.toFixed(2);
  bulletPts[4].textContent = "Hourly: $" + rounded;
 
  let roundedStars = ((tutor.reviews.reduce((sum, value)=> sum + value))/tutor.reviews.length).toFixed(2);
  bulletPts[5].textContent = "Ratings: " + roundedStars;
 
  
  
  // You can use console.log to help you debug!
  // View the output by right clicking on your website,
  // select "Inspect", then click on the "Console" tab
  console.log("new card:", name, "- html: ", card);
}

document.addEventListener("DOMContentLoaded", () => showCards(tutors));

//restores page to original tutors data
function backToHome() {
  console.log("Home Button Clicked");
  showCards(tutors);
}

// refreshes current page and displays tutors from descending pay
function sortByHourly() {
  console.log("Sort By Hourly Button Clicked");
  showCards(currentArray.toSorted((tutorA,tutorB) => tutorB.pay - tutorA.pay)); 
}

//refreshes current page and displays tutors from descending ratings
function sortByRatings(){
  console.log("Sort By Ratings Button Clicked");
  showCards(currentArray.toSorted((tutorA,tutorB) => ((tutorB.reviews.reduce((sum, value)=> sum + value))/tutorB.reviews.length) - ((tutorA.reviews.reduce((sum, value)=> sum + value))/tutorA.reviews.length)));
}

//searches the original tutors array for results
function searchResults(){
  const form = document.forms.searchBar;
  window.event.preventDefault();
 
  showCards(tutors.filter((tutor) => tutor.specialties.includes(form.specialty.value)));
  document.searchBar.specialty.value = "";
}

//searches within the current results
function filterResults(){
 const form = document.forms.filterBar;
 window.event.preventDefault();
      showCards(currentArray.filter((tutor) =>tutor.specialties.includes(form.fSpecialty.value)));
  document.filterBar.fSpecialty.value = "";
}

//this highlights the stars that the user is thinking of giving as a review
function starRating(n, starOn)
{
  const card = starOn.closest(".card");
  const stars = card.querySelectorAll(".star");
  stars.forEach((star, index) => {
  if (index < n) {
    star.classList.add("yellow");
  } else {
    star.classList.remove("yellow");
  }
});
}

//this function actually stores the star submission within the tutor's ratings
function storeReview(n, starOn)
{
  const card = starOn.closest(".card");
  const tutorName = card.querySelector("h2").textContent;
  const tutorsIndex = tutors.findIndex(tutor => tutor.name === tutorName);
    tutors[tutorsIndex].reviews.push(n);
   alert("Review submitted! Thanks for the feedback!");
  showCards(currentArray);
}