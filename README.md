# Part 2 - Todo App - List, Add, Remove Todos

Create a Todo App that allows users to see, add, edit, and remove todos. It should contain the following components.

- App - this component should render the TodoList component
- TodoList - this component should render the NewTodoForm component and should render the list of Todo components. Place your state that contains all of the todos in this component.
- NewTodoForm - this component should render a form with one text input for the task to be created. When this form is submitted, a new Todo component should be created.
- Todo- this component should display a div with the task of the todo.
For each Todo component, there should also be a button with the text “X” that when clicked, removes the todo.

## Part 3 - Todo App - Editing

It’s time to edit some todos!

- Each Todo component should also display a button with the text “edit” that when clicked, displays a form with the task of the todo as an input and a button to submit the form. When the form is submitted, the task of the text should be updated and the form should be hidden.

- Alongside each Todo, add a button with the text “Mark as completed”. When this button is clicked, add a strike through the text of the todo.
- Instead of a button, refactor your application so that the todo itself can be clicked to mark it as completed. Add a strikethrough style to the Todo if it is completed. A user can toggle it on and off by clicking.
- Save your todos in localStorage and retrieve them when the page loads.
