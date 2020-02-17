Vue.component('todo-header', {
	template: `	<header class="header">
	<h1>todos</h1>
	<input
		class="new-todo"
		placeholder="What needs to be done?"
		autofocus
		v-model="todoname"
		@keyup.enter="addTodo"
	/>
</header>`,
	data() {
		return {
			todoname: ''
		}
	},
	methods: {
		// 添加任务(子传父)
		addTodo() {
			if (this.todoname.trim() === '') {
				this.todoname = ''
				return
			}
			this.$emit('addtodo', this.todoname)
			this.todoname = ''
		}
	}
})
