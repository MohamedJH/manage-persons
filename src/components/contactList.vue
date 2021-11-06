<template>
  <div id="ContatsContainer">
    <div id="Header">
      <div class="searchfield">ID</div>
      <div class="searchfield">
        <span>FullName</span>
      </div>
      <div class="searchfield">
        <span>Email</span>
      </div>
      <div class="searchfield"></div>
    </div>
    <div id="body">
      <div
        v-show="!currentList"
        class="spinner-border text-danger"
        role="status"
      >
        <span class="visually-hidden">Loading...</span>
      </div>
      <div v-show="currentList">
        <PersonCard
          v-for="contact in currentList"
          :key="contact.id"
          :contact="contact"
        />
      </div>
    </div>
  </div>
</template>

<script>
import PersonCard from "./personCard.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "contactList",
  components: { PersonCard },
  props: {},
  methods: {
    ...mapActions(["fetchContacts", "deleteTodo", "updateTodo"]),
  },
  computed: {
    ...mapGetters(["currentList", "loading"]),
  },
  created() {
    this.fetchContacts();
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Fruktur&display=swap");

#ContatsContainer {
  width: 90%;
  min-height: 80%;
  margin: auto;
  padding: 10px auto;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  background: rgba(29, 29, 66, 1);
  border-radius: 20px;
}
#ContatsContainer::-webkit-scrollbar {
  display: none;
}

#Header {
  height: 15%;
  width: 99%;
  margin: auto;
  padding: auto;
  box-sizing: content-box;
  border-radius: 20px;
  background-color: rgba(29, 29, 66, 1);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  visibility: hidden;
}
#body {
  margin: 1% auto 3% auto;
  padding: auto;
  min-height: 85%;
  row-gap: 20px;
  overflow: auto;
  width: 100%;
  opacity: 0.2;
  border-radius: 20px;
  box-sizing: content-box;
}
#body::-webkit-scrollbar {
  display: none;
}
.searchfield:first-child,
.searchfield:nth-child(0n + 2),
.searchfield:nth-child(0n + 3),
.searchfield:nth-child(0n + 4) {
  height: auto;
  margin: auto;
  padding: auto;
  box-sizing: content-box;
  text-align: center;
  border-radius: 20px;
  font-family: "Fruktur", cursive;
  font-weight: 200;
  font-size: 15px;
  color: #618685;
}
.searchfield:first-child {
  width: auto;
}
.searchfield:nth-child(0n + 2) {
  width: auto;
}
.searchfield:nth-child(0n + 3) {
  width: auto;
}

.searchfield:last-child {
  width: auto;
}

@media (min-width: 767px) {
  .searchfield:first-child,
  .searchfield:nth-child(0n + 2),
  .searchfield:nth-child(0n + 3),
  .searchfield:nth-child(0n + 4) {
    font-weight: 400;
    font-size: 20px;
  }
  #Header {
    visibility: hidden;
  }
}
@media (min-width: 1024px) {
  #Header {
    visibility: visible;
  }
  .searchfield:first-child,
  .searchfield:nth-child(0n + 2),
  .searchfield:nth-child(0n + 3),
  .searchfield:nth-child(0n + 4) {
    font-weight: 600;
    font-size: 25px;
  }
}
</style>
