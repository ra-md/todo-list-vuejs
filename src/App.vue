<template>
  <div class="container">
    <header class="site-header">
      <div class="site-input container">
        <input type="text" v-model="text" @keyup.enter="addTodo" placeholder="type your todo...">
        <button class="btn site-input-btn" @click="addTodo"><i class="fas fa-plus"></i></button>
      </div>
    </header>
    <main>
      <TodoList 
        :todosData="sortedTodo" 
        @toggleMarkTodo="toggleMarkTodo" 
        @deleteTodo="deleteTodo"
      />
    </main>
  </div>
</template>

<script>
  import { v4 as uuidv4 } from 'uuid'
  import TodoList from './components/TodoList.vue'
  import todoDB from '@/utils/indexedDB.service'

  export default {
    name: 'app',
    components: {
      TodoList
    },
    data() {
      return {
        todos: [],
        text: '',
        message: ''
      }
    },
    async mounted() {
      if (!window.indexedDB) {
       window.alert("Your browser doesn't support a stable version of IndexedDB.")
      } else {
        this.getTodos()
      }
    },
    computed: {
      sortedTodo() {
        const todo = this.todos.slice()
        return todo.sort((a, b) => b.date - a.date)
      }
    },
    methods: {
      async getTodos() {
        const result = await todoDB.get()
        this.todos = result
      },
      addTodo() {
        const newtodo = {
          id: uuidv4(),
          text: this.text,
          date: Date.now(),
          completed: false
        }

        const regex = /\S/

        if(regex.test(this.text)) {
          todoDB.set(newtodo)
          this.getTodos()
        } 

        this.text = ''
      },
      toggleMarkTodo(id) {
        this.todos.map(todo => {
          if(todo.id === id) {
            todo.completed = !todo.completed
            todoDB.update(todo)
          }
          return todo
        })
      },
      deleteTodo(id) {
        todoDB.delete(id)
        this.getTodos()
      }
    },
  }
</script>

<style>
  body {
    padding: 0;
    margin: 0;
  }

  .container {
    width: 95%;
    margin: 0 auto;
  }

  main {
    position: relative;
    top: 3.7em;
  }

  .btn {
    border: none;
    background: none;
    outline: none;
    padding: 0;
    cursor: pointer;
  }

  .site-header {
    border-bottom: 1px solid #efefef;
    padding: 10px 0;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: white;
    z-index: 10;
  }

  .site-input {
    border-radius: 5px;
    outline: none;
    display: flex;
    align-items: center;
    background-color: #efefef;
    position: relative;
  }

  .site-input input {
    background: #e0e0e0;
    border-radius: 5px 0 0 5px;
    border: none;
    width: 100%;
    height: 100%;
    padding: 10px;
    outline: none;
  }

  .site-input input:focus {
    border-radius: 5px 0 0 5px;
    background-color: #d6d6d6;
  }

  .site-input-btn {
    background-color: #efefef;
    padding: 10px;
    border-radius: 0 5px 5px 0;
  }

  .site-input-btn:hover {
    background-color: #d6d6d6;
    border-radius: 0 5px 5px 0;
  }

  @media (min-width: 685px) {
    .container {
      width: 50%;
    }
  }

</style>
