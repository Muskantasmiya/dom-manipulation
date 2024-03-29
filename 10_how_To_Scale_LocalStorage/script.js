let form = document.querySelector("#form");
let submit = document.querySelector("#btn");

submit.addEventListener("click", function (e) {
  e.preventDefault();
  const usernameInput = document.getElementById("username").value;
  const emailInput = document.getElementById("email").value;
  const phoneInput = document.getElementById("phone").value;

  const obj = {
    username: usernameInput,
    email: emailInput,
    phone: phoneInput,
  };

  localStorage.setItem(obj.email, JSON.stringify(obj));

  displayData(obj);
  form.reset();
});

const ul = document.createElement("ul");
body.insertBefore(ul, body.childNodes[5]);

function displayData(obj) {
  const li = document.createElement("li");
  li.textContent = `${obj.username} - ${obj.email} - ${obj.phone}`;
  ul.appendChild(li);
}
