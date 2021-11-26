const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((result, number) => {
  return result + number;
}, 0);

console.log(sum);

const average = numbers.reduce((result, number, index, { length }) => {
  const sum = result + number;

  if (index === length - 1) {
    return sum / length;
  }

  return sum;
}, 0);

console.log(average);

const result = numbers.reduce((result, number) => {
  return [...result, number + 1];
}, [] as number[]);

console.log(result);

interface ITodo {
  id: number;
  text: string;
  isDone: boolean;
}

const todos: ITodo[] = [
  { id: 1, text: 'JavaScript', isDone: true },
  { id: 2, text: 'TypeScript', isDone: true },
  { id: 3, text: 'NodeJS', isDone: false },
  { id: 4, text: 'Express', isDone: false },
];

const filteredTodos = todos.reduce((result, todo) => {
  if (!todo.isDone) {
    return [...result, todo];
  }

  return result;
}, [] as ITodo[]);

console.log(filteredTodos);
