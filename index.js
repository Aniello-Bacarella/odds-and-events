inputForm();
render();

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

//creatiung the display area for the number bank.
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

    controls.append(sortOne);
    controls.append(sortAll);
  });
}
