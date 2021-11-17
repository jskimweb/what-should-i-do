import { createStore } from 'vuex'
import modules from '@/store/modules/modules.js'

const store = createStore({
	modules: {
		modules
	}
});

export default store