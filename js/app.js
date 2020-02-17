;(function(window) {
	'use strict'

	const vm = new Vue({
		el: '#app',
		data: {
			list: []
		},
		watch: {
			// list: {
			// 	deep: true,
			// 	handler(newval) {
			// 		console.log(newval)
			// 		localStorage.setItem('list', JSON.stringify(newval))
			// 	}
			// }
		},
		created() {
			// this.list = JSON.parse(localStorage.getItem('list') || '[]')
			this.render()
		},
		methods: {
			// 加载列表数据
			render() {
				axios.get('http://localhost:3000/list').then(res => {
					console.log(res)
					this.list = res.data
				})
			},
			// 添加任务(子传父)
			pAddTodo(name) {
				// let id =
				// 	this.list.length === 0 ? 1 : this.list[this.list.length - 1].id + 1
				// this.list.push({ id, name, done: false })
				axios
					.post('http://localhost:3000/list', {
						name,
						done: false
					})
					.then(res => {
						console.log(res)
						this.render()
					})
			},
			// 删除任务(子传父)
			pDeleteTodo(id) {
				// this.list = this.list.filter(item => item.id != id)
				axios.delete('http://localhost:3000/list/' + id).then(res => {
					console.log(res)
					this.render()
				})
			},
			// 编辑任务(子传父)
			pEditTodo(id, name) {
				// let obj = this.list.find(item => item.id === id)
				// console.log(obj)
				// obj.name = name
				axios
					.patch('http://localhost:3000/list/' + id, {
						name
					})
					.then(res => {
						console.log(res)
						this.render()
					})
			},
			// 清除已经完成任务的
			pClearCompleted() {
				// 这个暂时使用axios做不了
				this.list = this.list.filter(item => !item.done)
			},
			// 修改状态
			pChangeStatus(id,done) {
				// let obj = this.list.find(item => item.id === id)
				// obj.done = !obj.done
				axios
					.patch('http://localhost:3000/list/' + id, {
						done: !done
					})
					.then(res => {
						console.log(res)
						this.render()
					})
			}
		},
		computed: {
			isFooterShow() {
				return this.list.length > 0
			},
			leftCount() {
				return this.list.filter(item => !item.done).length
			},
			isClearCompleted() {
				return this.list.some(item => item.done)
			}
		}
	})
})(window)
