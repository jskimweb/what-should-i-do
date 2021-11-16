<template>
  <Header></Header>
  <Input @addItem="addItem"></Input>
  <List :propsdata="items" @removeItem="removeItem" @toggleItem="toggleItem"></List>
  <Footer @clearItems="clearItems"></Footer>
</template>

<script>
  import Header from '@/components/Header.vue';
  import Input from '@/components/Input.vue';
  import List from '@/components/List.vue';
  import Footer from '@/components/Footer.vue';

  export default {
    name: 'App',
    data() {
      return {
        items: []
      }
    },
    methods: {
      addItem(inputText) {
        const obj = { completed: false, item: inputText };
        localStorage.setItem(inputText, JSON.stringify(obj));
        this.items.push(obj);
      },
      removeItem(item, index) {
				localStorage.removeItem(item.item);
				this.items.splice(index, 1);
      },
      toggleItem(item, index) {
        this.items[index].completed = !this.items[index].completed;
				localStorage.removeItem(item.item);
				localStorage.setItem(item.item, JSON.stringify(item));
      },
      clearItems() {
        localStorage.clear();
        this.items = [];
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
		},
    components: {
      Header,
      Input,
      List,
      Footer
    },
  }
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline-style: none;
  }

  img {
    vertical-align: middle;
    border: 0;
  }

  ul,
  li {
    list-style: none;
  }

  input {
    padding: 0;
  }

  button {
    background-color: transparent;
    border: none;
  }

  html {
    font-size: 10px;
  }

  body {
    font-family: 'Ubuntu', sans-serif;
    background-color: #f6f6f6;
		text-align: center;
    padding: 0;
    margin: 0;
  }

  .shadow {
    box-shadow: .5rem 1rem 1rem rgba(0, 0, 0, .03);
  }
</style>