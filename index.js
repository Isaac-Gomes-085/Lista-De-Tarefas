const input = document.querySelector(".text");
const btn = document.querySelector("#btn-add");
const btnIcon = document.querySelector("#btn-icon");
const container_ul = document.querySelector('.to-do-list')


let list = [];

function addInList() {
  const taskValue = input.value.trim();

  if(!taskValue) return;

  list.push({
    task: taskValue,
    conclude: false
  });
  input.value = "";
  showTasks();
}

function showTasks() {
  let li = ''
  // tasks = tarefas
  list.forEach((item, index) => {
    console.log(item, index);
    li += `    
    <li class="list ${item.conclude && 'done'}">${item.task}
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
      </lord-icon></li>
      </div>`;

      container_ul.innerHTML = li

      localStorage.setItem('lista', JSON.stringify(list))

    })
}

function concludeTask(index) {
  list[index].conclude = !list[index].conclude

  showTasks()
}

function deleteItem(index) {
  list.splice(index, 1)
  showTasks()
}

function loadTasks () {
  const tasksLocalStorage = localStorage.getItem('lista')
  if (tasksLocalStorage) return list = JSON.parse(tasksLocalStorage);
  else list = [];

  showTasks()
}


loadTasks()
showTasks()
btnIcon.addEventListener("click", addInList);
btn.addEventListener("click", addInList);
