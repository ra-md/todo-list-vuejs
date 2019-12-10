<template>
	<div>
		<div v-for="(item, index) in 10" :key="index">
			<TodoItem/>
		</div>
	</div>
</template>

<script>
	import TodoItem from './TodoItem.vue'

	export default {
		components: {
			TodoItem
		}
	}
</script>