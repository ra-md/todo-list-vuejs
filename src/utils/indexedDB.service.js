function indexedDBStore(transactionType) {
	return new Promise((resolve, reject) => {
		let db
		const dbReq = indexedDB.open('todoList')	

		dbReq.onupgradeneeded = event => {
			db = event.target.result
			db.createObjectStore('todos', { keyPath: 'id' })
		}

		dbReq.onsuccess = event => {
			db = event.target.result
			const transaction = db.transaction(['todos'], transactionType)
			const store = transaction.objectStore('todos')
			resolve({ store, transaction })
		}

		dbReq.onerror = event => {
			reject(event.target.errorCode)
		}

	})
}

async function getTodos() {
	const { store } = await indexedDBStore('readonly');
	const todos = [];
	const req = store.openCursor()

	req.onsuccess = event => {
		const cursor = event.target.result
		if(cursor) {
			todos.unshift(cursor.value)
			cursor.continue()
		} else {
			return todos
		}
	}

	return todos
}

async function addTodo(todo) {
	const { store } = await indexedDBStore('readwrite')
	store.add(todo)
}

async function deleteTodo(id) {
	const { store } = await indexedDBStore('readwrite')
	store.delete(id)
}

async function toggleMarkTodo(id, completed) {
	const { store } = await indexedDBStore('readwrite')
	const request = store.get(id)

	request.onsuccess = event => {
		const data = event.target.result
		data.completed = completed
		store.put(data)
	}
}

export default { getTodos, addTodo, deleteTodo, toggleMarkTodo }