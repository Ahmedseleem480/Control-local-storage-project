// Select elements
let buttons = document.querySelectorAll(".buttons span");
let results = document.querySelector(".results span");
let theInput = document.querySelector(".the_input");

buttons.forEach((span) => {
  span.addEventListener("click", (e) => {
    if (e.target.classList.contains("Check")) {
      console.log("check");
      checkItem();
    }
    if (e.target.classList.contains("Add")) {
      console.log("add");
      addItem();
    }
    if (e.target.classList.contains("Delete")) {
      console.log("delete");
      DeleteItem();
    }
    if (e.target.classList.contains("Show")) {
      console.log("show");
      showItems();
    }
    if (e.target.classList.contains("Clear")) {
      console.log("Clear");
      clearItems();
    }
  });
});

function showMessage() {
  results.innerHTML = "the Input is empty";
}

function checkItem() {
  if (theInput.value !== "") {
    if (localStorage.getItem(theInput.value)) {
      results.innerHTML = `Item <span>${theInput.value}</span> found`;
    } else {
      results.innerHTML = `Item <span>${theInput.value}</span> not found`;
    }
  } else {
    showMessage();
  }
}
function addItem() {
  if (theInput.value !== "") {
    if (!localStorage.getItem(theInput.value)) {
      localStorage.setItem(theInput.value, "test");
      results.innerHTML = `Item <span>${theInput.value}</span> added`;
    }
  } else {
    showMessage();
  }
}

function DeleteItem() {
  if (theInput.value !== "") {
    if (localStorage.getItem(theInput.value)) {
      localStorage.removeItem(theInput.value);
      results.innerHTML = `Item <span>${theInput.value}</span> found and deleted`;
    } else {
      results.innerHTML = `No Local Storage Item With The Name <span>${theInput.value}</span>`;
    }
  } else {
    showMessage();
  }
}

function showItems() {
  if (localStorage.length) {
    results.innerHTML = "";
    for (let [key, value] of Object.entries(localStorage)) {
      console.log(key, `value=> ${value}`);
      results.innerHTML += `<span class="keys">${key}</span>`;
    }
  } else {
    console.log("No Items");
  }
}

function clearItems() {
  if (localStorage.length !== 0) {
    let localLength = localStorage.length;
    localStorage.clear();
    results.innerHTML = `${localLength} Items Cleared`;
  } else {
    results.innerHTML = "No Elements to be cleared";
  }
}
