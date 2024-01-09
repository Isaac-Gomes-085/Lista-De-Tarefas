const input = document.querySelector("#input");
const btn = document.querySelector("#btn-add");
const container_ul = document.querySelector(".to-do-list");

let list = [];

function addInList() {
  list.push({
    task: input.value,
    conclude: false,
  });

  input.value = "";

  showTasks();
}

function showTasks() {
  let li = "";
  // tasks = tarefas
  list.forEach((item, index, all_Tasks) => {
    console.log(item, index, all_Tasks);
    li += `  
    <li class="list ${item.conclude && "done"}">${item.task}
      <div class="conclude-delete">
        <i class="bi bi-check-circle-fill" id="conclude" onclick="concludeTask(${index})"></i>
          <lord-icon
                id="delete"
                src="https://cdn.lordicon.com/jmkrnisz.json"
                trigger="morph"
                colors="primary:green"
                state="morph-fill"
                style="width: 30px; height: 30px; cursor: pointer"
              onclick="deleteItem(${index})">
          </lord-icon>
        </div>
      </li>`;

    container_ul.innerHTML = li;

    localStorage.setItem("lista", JSON.stringify(list));
  });
}

function concludeTask(index) {
  list[index].conclude = !list[index].conclude;

  showTasks();
}

function deleteItem(index) {
  list.splice(index, 1);

  showTasks();
}

function loadTasks() {
  const tasksLocalStorage = localStorage.getItem("lista");

  list = tasksLocalStorage ? JSON.parse(tasksLocalStorage) : [];

  
  if (!Array.isArray(list)) {
    list = [];
  }
  
  showTasks();
}

loadTasks();

btn.addEventListener("click", addInList);
