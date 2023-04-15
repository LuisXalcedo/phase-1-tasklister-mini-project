document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    buildToDO(e.target.querySelector("#new-task-description").value);
  });
});

function buildToDO(todo) {
  let p = document.createElement("li");
  let btn = document.createElement("button");
  btn.addEventListener("click", handleDelete);
  btn.textContent = "X";
  p.textContent = `${todo} `;
  p.appendChild(btn);
  let list = document.querySelector("#list");
  list.querySelector("ul").appendChild(p);
}

function handleDelete(e) {
  e.target.parentNode.remove();
}
