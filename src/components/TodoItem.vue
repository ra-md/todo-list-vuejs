<template>
	<div class="item">
		<input @click="$emit('toggleMarkTodo', todo.id)" type="checkbox" :checked="todo.completed">
		<p :class="{ 'line-through': todo.completed }">{{ todo.text }}</p>
		<button class="btn" @click="$emit('deleteTodo', todo.id)"><i class="fas fa-trash"></i></button>
	</div>
</template>

<script>
	export default {
		props: {
			todo: Object
		}
	}
</script>


<style scoped>
	.line-through {
		text-decoration: line-through;
	}

	.item {
		display: flex;
		align-items: center;
		position: relative;
		margin: 0 10px;
	}

	.item p {
		width: 100%;
		word-break: break-all;
		margin: 0 1em;
	}

	.item input {
		margin: 1em 0;
	}
</style>