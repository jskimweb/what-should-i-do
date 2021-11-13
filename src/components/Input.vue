<template>
	<div class="input-box shadow">
		<input type="text" v-model="inputText" @keyup.enter="addItem">
		<span @click="addItem" class="add-btn">
			<i class="fas fa-plus"></i>
		</span>
	</div>
</template>

<script>
	export default {
		name: 'Input',
		data() {
			return {
				inputText: ''
			}
		},
		methods: {
			addItem() {
				if (this. inputText !== '') {
					let obj = { completed: false, item: this.inputText };
					localStorage.setItem(this.inputText, JSON.stringify(obj));
					this.clearInput();
				}
			},
			clearInput() {
				this.inputText = '';
			}
		}
	}
</script>

<style scoped>
	input:focus {
		outline: none;
	}

	.input-box {
		display: block;
		width: 30rem;
		height: 5rem;
		line-height: 5rem;
		margin: 0 auto;
	}

	.input-box input {
		float: left;
		width: 25rem;
		font-size: 1.6rem;
		border-style: none;
		border-radius: .5rem 0 0 .5rem;
		padding: 0 2rem;
	}

	.input-box .add-btn {
		float: right;
		width: 5rem;
		background: linear-gradient(to right, #FDC830, #F37335);
		border-radius: 0 .5rem .5rem 0;
		cursor: pointer;
	}

	.input-box .add-btn i {
		font-size: 1.6rem;
		vertical-align: middle;
		color: white;
	}
</style>