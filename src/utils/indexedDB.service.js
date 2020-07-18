import { openDB } from 'idb'

const dbPromise = openDB('todoDB', 1, {
	upgrade(db) {
		const objectStore = db.createObjectStore('todo-list', { keyPath: 'id' })
		objectStore.createIndex('id', 'id', { unique: false })
	}
})

async function todoStore(type) {
	const db = await dbPromise
	const tx = db.transaction('todo-list', type)
	const store = tx.objectStore('todo-list')

	return store
}

const todoDB = {
	async get() {
		const store = await todoStore('readonly')
		return store.getAll()
	},
	async set(todo) {
		const store = await todoStore('readwrite')
		store.add(todo)
	},
	async delete(id) {
		const store = await todoStore('readwrite')
		store.delete(id);
	},
	async update(todo) {
		const store = await todoStore('readwrite')
		store.put(todo)
	}
}

export default todoDB
































// function indexedDBStore(transactionType) {
// 	return new Promise((resolve, reject) => {
// 		let db
// 		const dbReq = indexedDB.open('todoList')	

// 		dbReq.onupgradeneeded = event => {
// 			db = event.target.result
// 			db.createObjectStore('todos', { keyPath: 'id' })
// 		}

// 		dbReq.onsuccess = event => {
// 			db = event.target.result
// 			const transaction = db.transaction(['todos'], transactionType)
// 			const store = transaction.objectStore('todos')
// 			resolve({ store, transaction })
// 		}

// 		dbReq.onerror = event => {
// 			reject(event.target.errorCode)
// 		}

// 	})
// }

// async function getTodos() {
// 	const { store } = await indexedDBStore('readonly');
// 	const todos = [];
// 	const req = store.openCursor()

// 	req.onsuccess = event => {
// 		const cursor = event.target.result
// 		if(cursor) {
// 			todos.unshift(cursor.value)
// 			cursor.continue()
// 		} else {
// 			return todos
// 		}
// 	}

// 	return todos
// }

// async function addTodo(todo) {
// 	const { store } = await indexedDBStore('readwrite')
// 	store.add(todo)
// }

// async function deleteTodo(id) {
// 	const { store } = await indexedDBStore('readwrite')
// 	store.delete(id)
// }

// async function toggleMarkTodo(id, completed) {
// 	const { store } = await indexedDBStore('readwrite')
// 	const request = store.get(id)

// 	request.onsuccess = event => {
// 		const data = event.target.result
// 		data.completed = completed
// 		store.put(data)
// 	}
// }

// export default { getTodos, addTodo, deleteTodo, toggleMarkTodo }