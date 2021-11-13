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

</style>
