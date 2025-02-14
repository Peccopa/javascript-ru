const tasks = ['Задача №1'];

const addTask = (task, tasks) => tasks.push(task);
addTask('Задача №2', tasks);
addTask('Задача №3', tasks);
addTask('Задача №4', tasks);
console.log(tasks);

const delTask = (task, tasks) => {
  const index = tasks.indexOf(task);
  return index >= 0 ? tasks.splice(index, 1) : false;
};

delTask('Задача №2', tasks);
console.log(tasks);

const movTask = (task, tasks) => tasks.unshift(delTask(task, tasks)[0]);
movTask('Задача №4', tasks);
console.log(tasks);
