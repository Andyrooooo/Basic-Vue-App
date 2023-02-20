const app = Vue.createApp({

    data() {
        return{
            showTitle: 'Todos',
            todoTitle: 'List of todos',
            newTodos: '',
            idForTodo: 3,
            todos: [
                {
                    'id': 1,
                    'title': 'Go to school',
                    'todoCompletion': false,
                },

                {
                    'id': 2,
                    'title': 'Do homework',
                    'todoCompletion': false,
                },
            ]
        }
    },
    methods: {
        addTodo() {
            this.todos.push({
                id: this.idForTodo,
                title: this.newTodos,
                todoCompletion: false,
            })

            this.newTodos = ''
            this.idForTodo++
        },
        removeTodo(index) {
            this.todos.splice(index, 1)
        }
        // },
        // finishedTodos() {
        //     if (this.todos.todoCompletion != true) {
        //        return 
        //     } else if (this.todos.todoCompletion = true) {
        //         alert('you finished a task!')
        //     }
        // }
    }
})

app.mount('#app')