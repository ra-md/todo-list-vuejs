<template>
	<div>
		<TodoItem v-for="td in todosData" 
			:key="td.id" 
			:todo="td" 
			@isCompleted="$emit('isCompleted', td.id)"
			@delete-todo="$emit('delete-todo', td.id)"
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