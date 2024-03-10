const FormEl = document.querySelector("#Form");
const InputEl = document.querySelector("#Input");
const NumberItemsEl = document.querySelector("#NumberItems");
const AllEl = document.querySelector("#All");
const ActiveEl = document.querySelector("#Active");
const MainBtnEl = document.querySelector("#Main-btn");
const DolistEl = document.querySelector(".Dolist");
const NightSwitchEl = document.querySelector("#NightSwitch");
const LightSwitchEl = document.querySelector("#LightSwitch");
const BodyEl = document.querySelector("body");
const NumberItems1El = document.querySelector(".NumberItems1");
const Active1El = document.querySelector(".Active1");
const All1El = document.querySelector(".All1");

NightSwitchEl.addEventListener("click", function(){
    FormEl.style.backgroundColor = "#25273D";
    InputEl.style.backgroundColor = "#25273D";
    InputEl.style.color = "#C8CBE7";
    BodyEl.style.backgroundColor = "#171823";
    DolistEl.style.boxShadow = "0px 35px 50px -15px #00000080";
    FormEl.style.boxShadow = "0px 35px 50px -15px #00000080";
    DolistEl.style.backgroundColor = "#25273D";
    DolistEl.style.color = "#C8CBE7";
    NightSwitchEl.style.display = "none";
    LightSwitchEl.style.display = "flex";
});

LightSwitchEl.addEventListener("click", function(){
    FormEl.style.backgroundColor = "#ffffff";
    InputEl.style.backgroundColor = "#FFFFFF";
    InputEl.style.color = "#393A4B";
    BodyEl.style.backgroundColor = "#FAFAFA";
    DolistEl.style.boxShadow = "0px 35px 50px -15px #C2C3D680";
    FormEl.style.boxShadow = " 0px 35px 50px -15px #C2C3D680";
    DolistEl.style.backgroundColor = "#ffffff";
    DolistEl.style.color = "#393A4B";
    NightSwitchEl.style.display = "flex";
    LightSwitchEl.style.display = "none";
});

function CreateToDo(todoText) {
  const liEl = document.createElement("li");
  
  liEl.textContent = todoText;
  if (todoText) {
    liEl.addEventListener("dblclick", (event) => {
      event.target.remove();
      SetTotals();
    });
    liEl.addEventListener("click", (event) => {
      event.target.classList.toggle("done");
      SetTotals();
    });
    DolistEl.append(liEl);
  }
}

FormEl.addEventListener("submit", (event) => {
  event.preventDefault();
  const inputValue = InputEl.value;
  CreateToDo(inputValue);
  InputEl.value = null;
  SetTotals();
});

function SetTotals(){
  let all = 0;
  let done = 0;
  let doing = 0;
  all = DolistEl.children.length - 1;
  for (let todoEl of DolistEl.children){
    if(todoEl.classList.contains("done")){
      done++;
    }
  }
  doing = all - done;
  NumberItems1El.textContent = all;
  All1El.textContent = done;
  Active1El.textContent = doing;
}