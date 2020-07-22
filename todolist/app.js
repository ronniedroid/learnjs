const app = () => {
  const currentDate = new Date().toISOString().slice(0, 10);

  window.onload = function setfocus() {
    document.getElementById("listinput").focus();
  };

  const setDate = () => {
    const date = document.querySelector(".date");
    date.textContent = currentDate;
  };

  const selectItem = () => {
    const list = document.querySelector(".list");

    list.addEventListener("click", (event) => {
      if (event.target.tagName.toLowerCase() === "li") {
        event.target.classList.toggle("highlight");
      }
    });
  };

  const mSelUp = () => {
    const listItems = document.querySelectorAll(".list li");
    const list = document.querySelector(".list");
    let filteredList = Array.from(listItems);
    const originalList = Array.from(listItems);

    filteredList = filteredList.filter((elm) =>
      elm.classList.contains("highlight")
    );
    const selected = filteredList[0];
    const current = originalList.indexOf(selected);
    const prev = current - 1;

    if (filteredList.length > 1 || current === 0) {
      return;
    }
    originalList[current].classList.remove("highlight");
    originalList[prev].classList.add("highlight");

    let child = list.lastElementChild;
    while (child) {
      list.removeChild(child);
      child = list.lastElementChild;
    }

    originalList.forEach((item) => {
      list.appendChild(item);
    });
  };

  const mSelDown = () => {
    const listItems = document.querySelectorAll(".list li");
    const list = document.querySelector(".list");
    let filteredList = Array.from(listItems);
    const originalList = Array.from(listItems);

    filteredList = filteredList.filter((elm) =>
      elm.classList.contains("highlight")
    );
    const selected = filteredList[0];
    const current = originalList.indexOf(selected);
    const next = current + 1;

    if (filteredList.length > 1 || current === originalList.length - 1) {
      return;
    }
    originalList[current].classList.remove("highlight");
    originalList[next].classList.add("highlight");

    let child = list.lastElementChild;
    while (child) {
      list.removeChild(child);
      child = list.lastElementChild;
    }

    originalList.forEach((item) => {
      list.appendChild(item);
    });
  };

  const deSelectAll = () => {
    const listItems = document.querySelectorAll(".list li");

    listItems.forEach((item) => {
      if (item.classList.contains("highlight")) {
        item.classList.remove("highlight");
      }
    });
  };

  const selectAll = () => {
    const listItems = document.querySelectorAll(".list li");

    listItems.forEach((item) => {
      item.classList.add("highlight");
    });
  };

  const add = () => {
    const listInput = document.querySelector(".list-input");
    const list = document.querySelector(".list");
    const message = document.querySelector(".message");
    const newLi = document.createElement("LI");
    const liContent = document.createTextNode(listInput.value);
    if (liContent.length === 0) {
      listInput.placeholder = "Type something to add";
    } else {
      newLi.appendChild(liContent);
      list.appendChild(newLi);
      listInput.value = "";
      message.classList.add("hiden");
      listInput.placeholder = "Enter Todo....";
    }
  };

  const del = () => {
    const listItems = document.querySelectorAll(".list li");
    const list = document.querySelector(".list");
    let filteredList = Array.from(listItems);
    const message = document.querySelector(".message");
    // DELETE BTN: onClick cycle through the LIs and grab all the ones highlighted currently
    // filter the array based on classList using classList.contains('className')
    //  NOTE: classList.contains return a boolean value of true or false only

    filteredList = filteredList.filter(
      (elm) => !elm.classList.contains("highlight")
    );

    // 1. now that we have a way to filter our list....how can we grab the UL from the DOM?
    //    we need to completely delte ALL the LI's that sit in the UL currently.
    let child = list.lastElementChild;
    while (child) {
      list.removeChild(child);
      child = list.lastElementChild; // I don't understand why we need this BTW
      // the while loop will only stop once child variable is of falsy type. The way its written
      // is while(true){
      // do stuff
      // }
      // in js we have truthy and falsy values which are true or false
      // in JS if we try to access soemthing that does not exist, it will return
      // undefined, which is a falsy value
      // so when we have no more li's it will assign undefined to child, it will be evaluated
      // and break our while loop :)
    }
    // 2. append the li's from the **filteredList** to the UL
    filteredList.forEach((item) => {
      list.appendChild(item);
    });

    if (filteredList.length === 0) {
      message.classList.remove("hiden");
    }
  };

  const mUp = () => {
    const listItems = document.querySelectorAll(".list li");
    const list = document.querySelector(".list");
    let filteredList = Array.from(listItems);
    const originalList = Array.from(listItems);

    filteredList = filteredList.filter((elm) =>
      elm.classList.contains("highlight")
    );
    const selected = filteredList[0];
    const pos = originalList.indexOf(selected);

    function swapElement(array, indexA, indexB) {
      const tmp = array[indexA];
      array[indexA] = array[indexB];
      array[indexB] = tmp;
    }
    if (filteredList.length > 1 || pos === 0) {
      return;
    }
    swapElement(originalList, pos, pos - 1);

    let child = list.lastElementChild;
    while (child) {
      list.removeChild(child);
      child = list.lastElementChild;
    }

    originalList.forEach((item) => {
      list.appendChild(item);
    });
  };

  const mDown = () => {
    const listItems = document.querySelectorAll(".list li");
    const list = document.querySelector(".list");
    let filteredList = Array.from(listItems);
    const originalList = Array.from(listItems);
    const { length } = originalList;

    filteredList = filteredList.filter((elm) =>
      elm.classList.contains("highlight")
    );
    const selected = filteredList[0];
    const pos = originalList.indexOf(selected);

    function swapElement(array, indexA, indexB) {
      const tmp = array[indexA];
      array[indexA] = array[indexB];
      array[indexB] = tmp;
    }
    if (filteredList.length > 1 || pos === length - 1) {
      return;
    }
    swapElement(originalList, pos, pos + 1);

    let child = list.lastElementChild;
    while (child) {
      list.removeChild(child);
      child = list.lastElementChild;
    }

    originalList.forEach((item) => {
      list.appendChild(item);
    });
  };

  const addToList = () => {
    const addBtn = document.querySelector(".add");

    addBtn.addEventListener("click", add);
  };

  const rmFromList = () => {
    // TASK
    // here is where we will do the filter
    // for the delete button: on click, we want to grab the itemList
    //    turn it into an array, and then filter out
    //    where we do NOT have the class highlighted :)
    // const listItems = document.querySelectorAll('.list li')
    const rmBtn = document.querySelector(".delete");
    // turn the liteItems node list into an array

    rmBtn.addEventListener("click", del);
  };

  const moveUp = () => {
    const upBtn = document.querySelector(".up");
    // turn the liteItems node list into an array

    upBtn.addEventListener("click", mUp);
  };

  const moveDown = () => {
    const downBtn = document.querySelector(".down");
    // turn the liteItems node list into an array

    downBtn.addEventListener("click", mDown);
  };

  const markCompleted = () => {
    const listItems = document.querySelectorAll(".list li");

    listItems.forEach((item) => {
      if (item.classList.contains("highlight")) {
        item.classList.toggle("completed");
      }
    });
  };

  const selAll = () => {
    const selBtn = document.querySelector(".sel-all");
    // turn the liteItems node list into an array

    selBtn.addEventListener("click", selectAll);
  };

  const deSelAll = () => {
    const deSelBtn = document.querySelector(".desel-all");
    // turn the liteItems node list into an array

    deSelBtn.addEventListener("click", deSelectAll);
  };

  const completed = () => {
    const completedBtn = document.querySelector(".completed");
    // turn the liteItems node list into an array

    completedBtn.addEventListener("click", markCompleted);
  };

  document.onkeyup = function shortcuts(e) {
    if (e.which === 46) {
      del();
    } else if (e.which === 13) {
      add();
    } else if (e.which === 40) {
      mSelDown();
    } else if (e.which === 38) {
      mSelUp();
    } else if (e.which === 27) {
      deSelectAll();
    } else if (e.which === 34) {
      mDown();
    } else if (e.which === 33) {
      mUp();
    } else if (e.ctrlKey && e.which === 190) {
      selectAll();
    } else if (e.ctrlKey && e.which === 188) {
      markCompleted();
    }
  };

  // Calling all the finctions
  setDate();
  addToList();
  selectItem();
  rmFromList();
  moveUp();
  moveDown();
  selAll();
  deSelAll();
  completed();
};

app();
