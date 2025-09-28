let state = {
  repository: [],
  oddNumbers: [],
  evenNumbers: [],
};

// main app container area
function inputForm() {
  const form = document.createElement("div");
  app.append(createForm());
  app.append(createControls());
  app.append(createDisplay());
  document.body.append(app);
}

//creating the input area for the number bank.
function createForm() {
  const form = document.createElement("form");
  const input = document.createElement("input");
  input.type = "number";
  input.id = "numberInput";

  const addButton = document.createElement("button");
  addButton.textContent = "Add Number";
  addButton.type = "submit";

  form.append(input);
  form.append(addButton);

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const value = parseInt(input.value);
    if (!isNaN(value)) {
      addNumber(value);
      input.value = "";
    }
  });
  return form;
}

// creating buttons for the number bank.
function createControls() {
  const controls = document.createElement("div");

  const sortOne = document.createElement("button");
  sortOne.innerText = "Sort One";
  sortOne.addEventListener("click", () => {
    sortOnenumber();
  });

  const sortAll = document.createElement("button");
  sortAll.innerText = "Sort All";
  sortAll.addEventListener("click", () => {
    sortAllnumbers();
  });
  controls.append(sortOne);
  controls.append(sortAll);
  return controls;
}

// creating the display area.
function createDisplay() {
  const display = document.createElement("div");
  display.id = "display";
  return display;
}

function placeNumber(number) {
  if (number % 2 === 0) {
    state.evenNumbers.push(number);
  } else {
    state.oddNumbers.push(number);
  }
}

function addNumber(value) {
  state.repository.push(value);
  render();
}

function sortOnenumber() {
  if (state.repository.length > 0) {
    const number = state.repository.shift();
    placeNumber(number);
    render();
  }
}

function sortAllnumbers() {
  while (state.repository.length > 0) {
    const number = state.repository.shift();
    placeNumber(number);
  }
  render();
}

// rendering the numbers in the display
function render() {
  const display = document.getElementById("display");
  display.innerText = "";

  const repository = document.createElement("div");
  repository.innerText = `Number Bank: ${state.repository.join(", ")}`;

  const oddNumbers = document.createElement("div");
  oddNumbers.innerText = `Odd Numbers: ${state.oddNumbers.join(", ")}`;

  const evenNumbers = document.createElement("div");
  evenNumbers.innerText = `Even Numbers: ${state.evenNumbers.join(", ")}`;

  display.append(repository);
  display.append(oddNumbers);
  display.append(evenNumbers);
}

inputForm();
render();
