console.log("Hi!")


getUsers();

function renderListItem(userData) {
  const li = document.createElement("li");
  li.innerText = `${userData.lname} ${userData.fname} ${userData.Mphone} ${userData.street} ${userData.number} ${userData.City} ${userData.Country}`;
  const ol = document.getElementById("fname","lname","Mphone","street","number","City","Country");
  ol.appendChild(li);

  const deleteElement = document.createElement("span");
  deleteElement.innerText = " x ";
  li.appendChild(deleteElement);

  deleteElement.addEventListener("click", function() {
    deleteUser(userData.id);
  })
}

function renderUsers(data) {
  
  for (const user of data) {
    renderListItem(user);
  }
}


function processResponse(response) {
  return response.json();
}


function getUsers() {
  fetch("https://contact-agenda-rest-api.herokuapp.com/users")
  .then(processResponse)
  .then(renderUsers);
}


function getNewUserData(data){
  
  renderListItem(data);
}


function sendNewUser() {
  const newUser = {
    fname: document.getElementById("fname").value,
    lname: document.getElementById("lname").value,
    Mphone : document.getElementById("Mphone").value,
    Street : document.getElementById("street").value,
    Number : document.getElementById("number").value,
    City : document.getElementById("City").value,
    Country: document.getElementById("Country").value,
  };

console.log(newUser, JSON.stringify(newUser));




document.getElementById("btn1").addEventListener("click", sendNewUser);



function deleteUser(userId) {
  console.log(userId);
  fetch("https://contact-agenda-rest-api.herokuapp.com/users/" + userId, {
    
    method: "DELETE",
    
})
  
}



