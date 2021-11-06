<template>
  <HeaderList />
  <SearchBarComponent />
  <ContactList />
</template>

<script>
import HeaderList from "./components/headerList.vue";
import ContactList from "./components/contactList.vue";
import SearchBarComponent from "./components/searchBarComponent.vue";
export default {
  name: "App",
  components: { HeaderList, ContactList, SearchBarComponent },
};
</script>

<style>
#body {
  max-height: 100vh;
}
#app {
  height: 99vh;
  margin-top: auto;
  border: 1px solid #2c3e50;
  margin: auto;
  display: flex;
  flex-direction: column;
  box-sizing: content-box;
  background-color: #141432;
  box-shadow: 10px 5px 10px rgba(114, 88, 133, 1);
  text-align: center;
  color: #2c3e50;
}
@media (min-width: 767px) {
  #app {
    max-width: 70%;
    margin: auto;
    border-radius: 5px;
    border: 1px solide black;
  }
}
@media (min-width: 1024px) {
  #app {
    max-width: 90%;
    margin: auto;
    border-radius: 5px;
  }
}
</style>
