const storage = {
	fetch() {
		const arr = [];
		if (localStorage.length > 0) {
			for (let i = 0; i < localStorage.length; i++) {
				if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
					arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
				}
			}
		}
		return arr;
	}
};

const state = {
	items: storage.fetch()
};

const getters = {
	getItems(state) {
		return state.items;
	}
};

const mutations = {
	addItem(state, inputText) {
		const obj = {
			completed: false,
			item: inputText
		};
		localStorage.setItem(inputText, JSON.stringify(obj));
		state.items.push(obj);
	},
	removeItem(state, payload) {
		localStorage.removeItem(payload.item.item);
		state.items.splice(payload.index, 1);
	},
	toggleItem(state, payload) {
		state.items[payload.index].completed = !state.items[payload.index].completed;
		localStorage.removeItem(payload.item.item);
		localStorage.setItem(payload.item.item, JSON.stringify(payload.item));
	},
	clearItems(state) {
		localStorage.clear();
		state.items = [];
	}
};

export default {
	state,
	getters,
	mutations
}