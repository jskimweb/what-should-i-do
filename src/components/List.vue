<template>
	<div>
		<ul>
			<li v-for="(item, index) in items" :key="index" class="list-box shadow">
				<i @click="toggleComplete(item)" :class="{checkBtnCompleted: item.completed}" class="fas fa-check check-btn"></i>
				<span :class="{textCompleted: item.completed}">{{ item.item }}</span>
				<span @click="removeItem(item, index)" class="remove-btn">
					<i class="fas fa-trash-alt"></i>
				</span>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'List',
		data() {
			return {
				items: []
			}
		},
		methods: {
			removeItem(item, index) {
				localStorage.removeItem(item);
				this.items.splice(index, 1);
			},
			toggleComplete(item) {
				item.completed = !item.completed;
				localStorage.removeItem(item.item);
				localStorage.setItem(item.item, JSON.stringify(item));
			}
		},
		created() {
			if (localStorage.length > 0) {
				for (let i = 0; i < localStorage.length; i++) {
					if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
						this.items.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
					}
				}
			}
		}
	}
</script>

<style scoped>
	.list-box {
		display: block;
		width: 30rem;
		height: 5rem;
		font-size: 1.6rem;
		line-height: 5rem;
		text-align: left;
		background-color: white;
		border-radius: .5rem;
		padding: 0 2rem;
		margin: 1rem auto;
	}

	.list-box .check-btn {
		color: seagreen;
		margin-right: 1rem;
		cursor: pointer;
	}

	.list-box .checkBtnCompleted {
		opacity: .5;
	}

	.list-box .textCompleted {
		text-decoration: line-through;
		opacity: .5;
	}


	.list-box .remove-btn {
		float: right;
		color: crimson;
		cursor: pointer;
	}
</style>