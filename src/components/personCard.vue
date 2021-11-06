<template>
  <div id="cardContainer">
    <div class="identifiant">{{ contact.id }}</div>
    <div class="details">
      <h5>{{ contact.name }}</h5>
      <h6>{{ contact.email }}</h6>
    </div>
    <div class="actions">
      <button
        type="button"
        class="btn btn-sm rounded-pill text-white"
        @click.prevent="updateToggle(contact)"
        :disabled="ToggleStatus"
      >
        <i class="fas fa-user-edit fa-sm"></i>
      </button>
      <button
        type="button"
        class="btn btn-sm rounded-pill text-white"
        @click.prevent="deleteContact(contact.id)"
      >
        <i class="fas fa-user-minus fa-sm"></i>
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "personCard",

  props: {
    contact: Object,
  },
  data() {
    return {
      editToggle: false,
    };
  },
  computed: { ...mapGetters(["ToggleStatus"]) },
  methods: { ...mapActions(["deleteContact", "updateToggle"]) },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Mochiy+Pop+One&display=swap");
#cardContainer {
  width: 95%;
  height: 100px;
  margin: 5px auto;
  box-sizing: content-box;
  background-color: #524eee;
  color: #ffffff;
  border-radius: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-family: "Mochiy Pop One", sans-serif;
}
.identifiant {
  height: auto;
  width: auto;
  border-radius: 50%;
  color: #e4a56e;
  /* display: none; */
}
.details {
  height: auto;
  width: 60%;
  overflow-x: hidden;
  overflow-wrap: break-word;
}

.actions {
  height: auto;
  width: auto;
  display: flex;
  justify-content: flex-end;
  align-content: center;
  align-items: center;
}
.fa-user-edit,
.fa-user-minus {
  color: #f2994a;
}
@media (min-width: 768px) {
  #cardContainer {
    display: flex;
    justify-content: space-evenly;
  }
  .photoProfile {
    height: 80%;
    width: 10%;
    border-radius: 50%;
    border: 2px solid yellow;
  }
  .details {
    height: 70%;
    width: 60%;
    overflow: hidden;
    justify-content: space-evenly;
  }
  .actions {
    height: auto;
    width: auto;
    display: flex;
    justify-content: flex-end;
    align-content: center;
    align-items: center;
  }
  .fa-user-edit,
  .fa-user-minus {
    font-size: 1.5em;
  }
}
@media (min-width: 1024px) {
  #cardContainer {
    border-color: 1px solid white;
    justify-content: space-evenly;
  }
  .details {
    display: flex;
    justify-content: space-evenly;
    align-content: center;
    align-items: center;
    box-sizing: content-box;
    overflow: auto;
  }
  .fa-user-edit,
  .fa-user-minus {
    font-size: 1.5em;
  }
  .actions {
    display: flex;
    justify-content: space-evenly;
  }
}
</style>
