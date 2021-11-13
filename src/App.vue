<template>
  <Header></Header>
  <Input></Input>
  <List></List>
  <Footer></Footer>
</template>

<script>
  import Header from '@/components/Header.vue';
  import Input from '@/components/Input.vue';
  import List from '@/components/List.vue';
  import Footer from '@/components/Footer.vue';

  export default {
    name: 'App',
    components: {
      Header,
      Input,
      List,
      Footer
    }
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