

let form = document.querySelector(".site-form");
let usersList = document.querySelector(".list");

// Create elements
let nameInput = document.createElement("input");
let ageInput = document.createElement("input");
let emailInput = document.createElement("input");
let submitBtn = document.createElement("button");


nameInput.id = "name";
nameInput.type = "text";
nameInput.placeholder = "Name";
nameInput.required = true;

ageInput.id = "age";
ageInput.type = "number";
ageInput.placeholder = "Age";
ageInput.required = true;

emailInput.id = "email";
emailInput.type = "email";
emailInput.placeholder = "Email";
emailInput.required = true;


submitBtn.textContent = "Submit";


form.append(nameInput);
form.append(ageInput);
form.append(emailInput);
form.append(submitBtn);


let users = [];


function handleSubmit(e) {
  e.preventDefault();


  let user = {
    name: nameInput.value,
    ageInput: ageInput.value,
    emailInput: emailInput.value,
  };


  users.push(user);


  nameInput.value = "";
  ageInput.value = "";
  emailInput.value = "";

  console.log(users);

  renderUsers();
}


form.addEventListener("submit", handleSubmit);


function renderUsers() {
  usersList.innerHTML = null;
  for (let i = 0; i < users.length; i++) {

    let li = document.createElement("li");
    li.className = "list-item";


    let h3 = document.createElement("h3");
 
    h3.textContent = users[i].name;
    li.appendChild(h3);


    let ageTextP = document.createElement("p");

    ageTextP.textContent = users[i].ageInput;
    li.appendChild(ageTextP);


    let emailTextP = document.createElement("p");

    emailTextP.textContent = users[i].emailInput;
    li.appendChild(emailTextP);

    usersList.appendChild(li);
  }
}
