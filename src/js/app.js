const columns = document.querySelectorAll(".column");

columns.forEach((col) => {
  const addNewCard = () => {
    const card = col.querySelector(".cards");
    const btn = col.querySelector(".add-btn");
    const addBtn = col.querySelector(".add-card-btn");
    const closeBtn = col.querySelector(".close-card-btn");
    const textarea = col.querySelector("textarea");
    const form = col.querySelector(".form");

    btn.addEventListener("click", () => {
      form.style.display = "block";
      btn.style.display = "none";
    });

    closeBtn.addEventListener("click", () => {
      textarea.value = "";
      form.style.display = "none";
      btn.style.display = "block";
    });

    addBtn.addEventListener("click", () => {
      const newCard = document.createElement("div");
      newCard.classList.add("cards-item");
      newCard.draggable = "true";
      newCard.textContent = textarea.value;
      if (card.style.display === "none" && textarea.value !== "") {
        card.style.display = "block";
      }
      if (textarea.value === "") return;
      card.append(newCard);

      textarea.value = "";
      form.style.display = "none";
      btn.style.display = "block";

      dragNdrop();
    });
  };

  addNewCard();
});

let draggedItem = null;

const dragNdrop = () => {
  const cardsElems = document.querySelectorAll(".cards");
  const cardsItems = document.querySelectorAll(".cards-item");

  for (let i = 0; i < cardsItems.length; i++) {
    const item = cardsItems[i];

    item.addEventListener("dragstart", () => {
      draggedItem = item;
      setTimeout(() => {
        item.style.display = "none";
      }, 0);
    });

    item.addEventListener("dragend", () => {
      setTimeout(() => {
        item.style.display = "block";
        draggedItem = null;
      }, 0);
    });

    item.addEventListener("mouseover", () => {
      const removeBtn = document.createElement("button");
      removeBtn.classList.add("remove-btn");
      item.append(removeBtn);

      item.style.backgroundColor = "#eee";
    });

    item.addEventListener("mouseout", () => {
      const removeBtn = item.querySelector(".remove-btn");
      removeBtn.remove();
      item.style.backgroundColor = "#fff";
    });

    for (let j = 0; j < cardsElems.length; j++) {
      const card = cardsElems[j];

      card.addEventListener("dragover", (e) => e.preventDefault());

      card.addEventListener("dragenter", function (e) {
        e.preventDefault();

        this.style.backgroundColor = "rgba(0, 0, 0, 0.3)";
        this.style.margin = "5px";
        this.style.borderRadius = "5px";
      });

      card.addEventListener("dragleave", function () {
        this.style.backgroundColor = "rgba(0, 0, 0, 0)";
      });

      card.addEventListener("drop", function (e) {
        this.style.backgroundColor = "rgba(0, 0, 0, 0)";

        // не работает проверка!
        if (!e.target.children) {
          this.append(draggedItem);
        } else {
          this.insertBefore(draggedItem, e.target);
        }
      });
    }
  }
};

dragNdrop();
