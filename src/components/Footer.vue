<template>
	<footer>
		<button @click="clearItems" class="clear-btn">Clear All</button>
	</footer>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
	name: 'Footer',
	methods: {
		...mapMutations(['clearItems'])
	}
}
</script>

<style scoped>
	.clear-btn {
		display: block;
		width: 7rem;
		line-height: 3rem;
		font-size: 1.2rem;
		color: white;
		background: linear-gradient(to right, #ff7737, #ff0000);
		border-radius: .5rem;
		margin: 2rem auto 0 auto;
	}
</style>