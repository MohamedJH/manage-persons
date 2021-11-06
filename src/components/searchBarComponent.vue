<template>
  <div id="SearchBarHeader">
    <select
      class="form-select form-select"
      aria-label=".form-select-lg example"
      @change="searchListByID"
    >
      <option selected>All</option>
      <option
        v-for="contact in allContacts"
        :key="contact.index"
        :value="contact.index"
      >
        {{ contact.id }}
      </option>
    </select>
    <div id="nameFieldSearch">
      <input
        type="text"
        class="form-control-sm"
        id="nameInput"
        name="searchFN_Field"
        v-model="searchFN_Field"
        placeholder=" FullName..."
        @change="searchListByName"
      />
      <button type="button" class="FilterBtn" @click="apllyFilter">
        <i class="fas fa-search"></i>
      </button>
    </div>
    <div id="EmaillFieldSearch">
      <input
        type="text"
        class="form-control-sm"
        id="nameInput"
        name="searchMail_Field"
        v-model="searchMail_Field"
        placeholder="Email...."
      />
      <button type="button" class="FilterBtn" @click="searchListByMail">
        <i class="fas fa-search"></i>
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "searchBarComponent",
  data() {
    return {
      searchFN_Field: "",
      searchMail_Field: "",
    };
  },
  computed: {
    ...mapGetters(["allContacts"]),
  },
  methods: {
    ...mapActions([
      "FilterByName",
      "searchByName",
      "searchByMail",
      "searchById",
    ]),
    searchListByMail() {
      this.searchByMail(this.searchMail_Field);
    },
    searchListByName() {
      this.searchByName(this.searchFN_Field);
    },
    searchListByID(e) {
      this.searchById(e.target.value);
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Fruktur&display=swap");

#SearchBarHeader {
  height: 10%;
  width: 100%;
  margin: 10px;
  padding: 20px auto;
  box-sizing: content-box;
  border-radius: 20px;
  background-color: #1d1d42;
  display: flex;
  justify-content: space-around;
  align-content: center;
  align-items: center;
}
.FilterBtn {
  width: 20%;
  height: auto;
  border-radius: 50%;
  border: none;
  background-color: rgba(20, 20, 50, 1);
  cursor: pointer;
}

/* svg {
  color: white;
   background-color: rgba(20, 20, 50, 1);
} */

.fa-search {
  font-size: 1.33em;
  color: white;
}

#nameFieldSearch,
#EmaillFieldSearch {
  height: auto;
  width: auto;
  margin: auto 10px;
  padding: 0px 5px;
  text-align: center;
  font-family: cursive;
  font-size: 18px;
  color: yellow;
  display: flex;
  justify-content: space-around;
  align-items: center;
  /* border: 1px solid white; */
  background-color: rgba(20, 20, 50, 1);
  border-radius: 20px;
}

#nameFieldSearch input,
#EmaillFieldSearch input {
  width: 100%;
  height: auto;
  margin: ;
  border: none;
  outline: none;
  border-radius: 20px;
  background-color: rgba(20, 20, 50, 1);
  font-family: 15px;
  color: #ffffff;
}
.form-select {
  visibility: hidden;
}

@media (min-width: 768px) {
  #SearchBarHeader {
    margin: 10px auto;
    height: 15%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-content: center;
  }
  #nameFieldSearch,
  #EmaillFieldSearch {
    height: auto;
    width: auto;
  }
  .form-select {
    display: flex;
    align-self: center;
    visibility: visible;
    width: 10%;
    margin: auto 100px auto 70px;
    background-color: rgba(20, 20, 50, 1);
    font-family: 15px;
    color: #ffffff;
    outline: none;
    border-color: rgba(20, 20, 50, 1);
  }
}
@media (min-width: 1024px) {
  #SearchBarHeader {
    margin: 10px auto;
    height: 17%;
    width: 95%;
    display: flex;
    justify-content: flex-start;
  }
  .form-select {
    width: 10%;
    margin: auto 150px auto 70px;
    background-color: rgba(20, 20, 50, 1);
    font-family: 15px;
    color: #ffffff;
    outline: none;
    border-color: rgba(20, 20, 50, 1);
  }
}
</style>
