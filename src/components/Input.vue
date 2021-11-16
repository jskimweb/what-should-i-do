<template>
	<div class="input-box shadow">
		<input type="text" v-model="inputText" @keyup.enter="addItem">
		<span @click="addItem" class="add-btn">
			<i class="fas fa-plus"></i>
		</span>

		<Modal v-if="showModal">
			<template v-slot:header>
				<h3>경고!</h3>
				<i @click="showModal = false" class="fas fa-times closeModalBtn"></i>
			</template>
			<template v-slot:body>
				<p>무언가를 입력하세요.</p>
			</template>
		</Modal>
	</div>
</template>

<script>
	import Modal from './common/Modal.vue';

	export default {
		name: 'Input',
		data() {
			return {
				inputText: '',
				showModal: false
			}
		},
		methods: {
			addItem() {
				if (this.inputText !== '') {
					this.$emit('addItem', this.inputText);
					this.clearInput();
				} else {
					this.showModal = !this.showModal;
				}
			},
			clearInput() {
				this.inputText = '';
			}
		},
		components: {
			Modal
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

	.closeModalBtn {
		font-size: 17.5px;
		color: #42b983;
		cursor: pointer;
	}
</style>