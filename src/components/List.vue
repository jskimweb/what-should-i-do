<template>
	<div>
		<ul>
			<li v-for="(item, index) in propsdata" :key="index" class="list-box shadow">
				<i @click="toggleItem(item, index)" :class="{checkBtnCompleted: item.completed}" class="fas fa-check check-btn"></i>
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
		props: ['propsdata'],
		methods: {
			removeItem(item, index) {
				this.$emit('removeItem', item, index);
			},
			toggleItem(item, index) {
				this.$emit('toggleItem', item, index);
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