const init = {
    todos: [
        {
            id: 1,
            todo: "Do something nice for someone I care about",
            completed: true
        },
        {
            id: 2,
            todo: "Memorize the fifty states and their capitals",
            completed: false
        },
        {
            id: 3,
            todo: "Watch a classic movie",
            completed: false
        },
        {
            id: 4,
            todo: "Contribute code or a monetary donation to an open-source software project",
            completed: false
        },
        {
            id: 5,
            todo: "Solve a Rubik's cube",
            completed: false
        },
        {
            id: 6,
            todo: "Bake pastries for me and neighbor",
            completed: false
        },
        {
            id: 7,
            todo: "Go see a Broadway production",
            completed: false
        },
        {
            id: 8,
            todo: "Write a thank you letter to an influential person in my life",
            completed: true
        },
        {
            id: 9,
            todo: "Invite some friends over for a game night",
            completed: false
        },
        {
            id: 10,
            todo: "Have a football scrimmage with some friends",
            completed: false
        },
        {
            id: 11,
            todo: "Text a friend I haven't talked to in a long time",
            completed: false
        },
        {
            id: 12,
            todo: "Organize pantry",
            completed: true
        },
        {
            id: 13,
            todo: "Buy a new house decoration",
            completed: false
        },
        {
            id: 14,
            todo: "Plan a vacation I've always wanted to take",
            completed: false
        },
        {
            id: 15,
            todo: "Clean out car",
            completed: false
        },
        {
            id: 16,
            todo: "Draw and color a Mandala",
            completed: true
        },
        {
            id: 17,
            todo: "Create a cookbook with favorite recipes",
            completed: false
        },
        {
            id: 18,
            todo: "Bake a pie with some friends",
            completed: false
        },
        {
            id: 19,
            todo: "Create a compost pile",
            completed: true
        },
        {
            id: 20,
            todo: "Take a hike at a local park",
            completed: true
        }
    ],
    total: 20
};

const crudReducer = (state = init, action) => {
    switch (action.type) {
        case "updateTodo":

            return {
                todos: state.todos.map(item => item.id == action.id ? { ...item, completed: !item.completed } : item),
                total: state.total
            };
        case 'addTodo':
            const todo = {
                id: 20 + Math.floor(Math.random() * 10000),
                todo: action.todo,
                completed: false
            }
            return {
                todos: [todo, ...state.todos],
                total: state.total + 1
            };
        case 'deleteTodo':
            return {
                todos: [...state.todos.filter((item) => item.id != action.id)],
                total: state.total - 1
            }
        default:
            return state
    }
};

export default crudReducer;
