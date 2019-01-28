export const addTodo = (array, object) => [...array, object];

export const genID = () => Math.floor(Math.random() * 100000);

export const findToDo = (array, id) => {
  return array.find(element => element.id === id);
};

export const toggleToDo = object => ({ ...object, checked: !object.checked });

export const updateToDo = (array, updater) => {
  const index = array.findIndex(item => item.id === updater.id);
  return [...array.slice(0, index), updater, ...array.slice(index + 1)];
};

export const removeToDo = (array, id) => array.filter(item => item.id !== id);
