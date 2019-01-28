import {
  addTodo,
  findToDo,
  toggleToDo,
  updateToDo,
  removeToDo
} from "./helpers";

test("add a todo", () => {
  const startTodos = [
    { id: 1, name: "Do those", checked: true },
    { id: 2, name: "Do that", checked: true }
  ];
  const newTodo = { id: 3, name: "Do this", checked: true };
  const expected = [
    { id: 1, name: "Do those", checked: true },
    { id: 2, name: "Do that", checked: true },
    { id: 3, name: "Do this", checked: true }
  ];

  const result = addTodo(startTodos, newTodo);

  expect(result).toEqual(expected);
});

test("dont repeat", () => {
  const startTodos = [
    { id: 1, name: "Do this", checked: true },
    { id: 2, name: "Do this", checked: true }
  ];
  const newTodo = { id: 3, name: "Do this", checked: true };

  const result = addTodo(startTodos, newTodo);

  expect(result).not.toBe(startTodos);
});

test("find todo", () => {
  const start = [
    { id: 1, name: "Do this", checked: true },
    { id: 2, name: "Do this", checked: true },
    { id: 3, name: "Do this", checked: true }
  ];
  const expected = { id: 1, name: "Do this", checked: true };
  const result = findToDo(start, 1);

  expect(result).toEqual(expected);
});

test("toggle todo", () => {
  const start = { id: 1, name: "Do this", checked: true };
  const expected = { id: 1, name: "Do this", checked: false };
  const result = toggleToDo(start);

  expect(result).toEqual(expected);
});

test("update todo", () => {
  const startTodos = [
    { id: 1, name: "Do this", checked: true },
    { id: 2, name: "Do that", checked: true },
    { id: 3, name: "Do another", checked: true }
  ];
  const updater = { id: 3, name: "Do another", checked: false };
  const expected = [
    { id: 1, name: "Do this", checked: true },
    { id: 2, name: "Do that", checked: true },
    { id: 3, name: "Do another", checked: false }
  ];

  const result = updateToDo(startTodos, updater);

  expect(result).toEqual(expected);
});

test("remove todo", () => {
  const startTodos = [
    { id: 1, name: "Do those", checked: true },
    { id: 2, name: "Do that", checked: true },
    { id: 3, name: "Do this", checked: true }
  ];
  const removeID = 3;
  const expected = [
    { id: 1, name: "Do those", checked: true },
    { id: 2, name: "Do that", checked: true }
  ];

  const result = removeToDo(startTodos, removeID);

  expect(result).toEqual(expected);
  expect(result).not.toBe(startTodos);
});
