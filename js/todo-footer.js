Vue.component('todo-footer', {
	template: `	<footer class="footer" v-show="isfootershow">
	<span class="todo-count"><strong>{{ leftcount }}</strong> item left</span>

	<button class="clear-completed" @click="clearCompleted" v-show="isclearcompleted">Clear completed</button>
</footer>`,
	data() {
		return {}
	},
	props: ['isfootershow','leftcount','isclearcompleted'],
	methods: {
		// 清除已完成任务的
		clearCompleted() {
      this.$emit('clearcompleted')
		}
	}
})
