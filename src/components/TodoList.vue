<template>
	<div>
		<TodoItem v-for="td in todosData" 
			:key="td.id" 
			:todo="td" 
			@toggleMarkTodo="$emit('toggleMarkTodo', td.id)"
			@deleteTodo="$emit('deleteTodo', td.id)"
		/>
	</div>
</template>

<script>
	import TodoItem from './TodoItem.vue'

	export default {
		props: {
			todosData: Array
		},
		components: {
			TodoItem
		}
	}
</script>