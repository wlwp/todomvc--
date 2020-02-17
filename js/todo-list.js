Vue.component('todo-list', {
	template: `<section class="main">
	<input id="toggle-all" class="toggle-all" type="checkbox" />
	<label for="toggle-all">Mark all as complete</label>
	<ul class="todo-list">
		<li v-for="item in list" :key="item.id" :class="{completed: item.done, editing: item.id == editId}">
			<div class="view">
				<input class="toggle" type="checkbox" :checked="item.done" @input="changeStatus(item.id,item.done)" />
				<label @dblclick="showEdit(item.id)">{{ item.name }}</label>
				<button class="destroy" @click="deleteTodo(item.id)"></button>
			</div>
			<input class="edit" :value="item.name" @keyup.enter="editTodo"/>
		</li>
	</ul>
</section>`,
	data() {
		return {
			editId: -1
		}
	},
	props: ['list'],
	methods: {
		// 删除任务(子传父)
		deleteTodo(id) {
			this.$emit('deletetodo', id)
		},
		// 显示编辑状态
		showEdit(id) {
			this.editId = id
		},
		// 编辑任务
		editTodo(e) {
			let id = this.editId
			let name = e.target.value
			this.$emit('edittodo', id,name)
			this.editId = -1

		},
		// 修改状态
		changeStatus(id,done) {
       this.$emit('changestatus', id,done)
		}

	}
})
