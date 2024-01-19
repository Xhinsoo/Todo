const userInput = document.querySelector("#userInput");
const submitBtn = document.querySelector("#submitBtn");
const clearBtn = document.querySelector("#clearBtn");
const ul = document.querySelector("#todoList");
const errorMsg = document.createElement("H3");
document.body.appendChild(errorMsg);


submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  addToList();
});

clearBtn.addEventListener("click", (e) => {
  e.preventDefault();
  ul.innerText = "";
  userInput.value = "";
  errorMsg.innerText= "";
});

const addToList = function () {
  if (!!userInput.value === true) {
    const span = document.createElement('span')
    const newLi = document.createElement("LI");
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "X";
    deleteBtn.addEventListener('click', ()=>{
       span.remove();
    })
    newLi.innerText = `${userInput.value}`;
    span.appendChild(newLi);
    newLi.insertAdjacentElement("afterend",deleteBtn)
    ul.appendChild(span)
  } else {
      errorMsg.innerText = "Enter something";
      return errorMsg;
    }
};

