document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("item");
  const addBtn = document.getElementById("addBtn");
  const shoppingList = document.getElementById("shoppingList");
  const purchasedList = document.getElementById("purchasedList");
  const finishBtn = document.getElementById("finishBtn");

  addBtn.addEventListener("click", addItem);
  finishBtn.addEventListener("click", finishList);

  function addItem() {
    const itemText = input.value.trim();
    if (itemText === "") {
      return;
    }

    const listItem = document.createElement("li");
    listItem.textContent = itemText;

    const completeButton = document.createElement("button");
    completeButton.textContent = "Complete";
    completeButton.addEventListener("click", completeItem);

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", removeItem);

    listItem.appendChild(completeButton);
    listItem.appendChild(removeButton);

    shoppingList.appendChild(listItem);

    input.value = "";
  }

  function completeItem() {
    const listItem = this.parentElement;
    const itemText = listItem.textContent;

    if (!listItem.classList.contains("completed")) {
      listItem.classList.add("completed");
      listItem.style.backgroundColor = "black";
      listItem.style.textDecoration = "line-through";

    
      const purchasedItem = document.createElement("li");
      purchasedItem.textContent = itemText;
      purchasedList.appendChild(purchasedItem);
    } else {
      listItem.classList.remove("completed");
      listItem.style.backgroundColor = "";
      listItem.style.textDecoration = "";

      
      const purchasedItems = purchasedList.querySelectorAll("li");
      purchasedItems.forEach((purchasedItem) => {
        if (purchasedItem.textContent === itemText) {
          purchasedItem.remove();
        }
      });
    }

    }

  function removeItem() {
    const listItem = this.parentElement;
    listItem.remove();
  }

  function finishList() {
    purchasedList.innerHTML = "";
  }
});
