<template>
  <div
    id="header"
    class="row d-flex align-items-center justify-content-between"
  >
    <div v-show="ToggleStatus" class="col-4">
      <input
        type="text"
        class="form-control form-control-sm"
        placeholder="FullName...."
        name="name"
        v-model="newUser.name"
        @change="handleUpdate"
      />
    </div>
    <div v-show="ToggleStatus" class="col-4">
      <input
        type="text"
        class="form-control form-control-sm"
        placeholder="Email address...."
        name="email"
        :v-model="newUser.email"
        @change.prevent="handleUpdate"
      />
    </div>
    <div v-show="ToggleStatus" class="col-1 mx-2">
      <button
        type="submit"
        class="btn btn-sm rounded-pill text-white"
        @click.prevent="handleSave"
      >
        <i class="fas fa-save fa-fw"></i>
      </button>
    </div>
    <div v-show="editedToggle" class="col-4">
      <input
        type="text"
        class="form-control form-control-sm"
        placeholder="FullName...."
        name="name"
        v-model="user.name"
        @change="handleUpdate"
      />
    </div>
    <div v-show="editedToggle" class="col-4">
      <input
        type="text"
        class="form-control form-control-sm"
        placeholder="Email address...."
        name="email"
        v-model="user.email"
        @change.prevent="handleUpdate"
      />
    </div>
    <div v-show="editedToggle" class="col-1 mx-2">
      <button
        type="submit"
        class="btn btn-sm rounded-pill text-white"
        @click.prevent="handleSave"
      >
        <i class="fas fa-save fa-fw"></i>
      </button>
    </div>
    <div id="addUserBtn" class="col-1">
      <button
        type="button"
        class="btn btn-sm rounded-pill text-white"
        @click.prevent="handleAddToggle"
        :disabled="editedToggle"
      >
        <i class="fas fa-user-plus fa-fw"></i>
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "headerList",
  propos: {},
  data() {
    return {
      newUser: { name: "", email: "" },
    };
  },
  computed: {
    ...mapGetters(["allContacts", "user", "editedToggle", "ToggleStatus"]),
  },

  methods: {
    ...mapActions(["addContact", "updateToggle", "addToggle", "updateContact"]),
    handleAddToggle() {
      this.newUser.name = "";
      this.newUser.email = "";
      this.addToggle();
    },
    handleUpdate(e) {
      this.newUser = { ...this.newUser, [e.target.name]: e.target.value };
    },
    handleSave() {
      if (this.ToggleStatus) {
        this.addContact(this.newUser);
        this.addToggle();
      } else if (this.editedToggle) {
        this.updateContact(this.newUser);
        this.updateToggle(this.newUser);
      }
    },
  },
};
</script>

<style scoped>
#header {
  max-width: 100%;
  height: 8%;
  margin: 0px;
  padding: 0px 15px;
  background: rgb(89, 22, 96);
  background: rgb(29, 29, 66);
  background: linear-gradient(
    319deg,
    rgba(29, 29, 66, 1) 20%,
    rgba(100, 181, 182, 1) 39%,
    rgba(20, 20, 50, 1) 71%
  );
}

#addUserBtn {
  max-width: auto;
  height: auto;
  margin: auto 0px;
  box-sizing: content-box;
  display: flex;
  justify-content: space-around;
  border-radius: 10px;
  border-color: 1px solid white;
}
.fa-user-plus,
.fa-save {
  font-size: 1.33em;
}

button:hover {
  background-color: #725885;
}
@media (min-width: 767px) {
  #header {
    max-width: 100%;
    height: 12%;
  }
  .fa-save,
  .fa-user-plus {
    font-size: 1.33em;
  }
  .form-control {
    font-size: 1em;
  }
}
@media (min-width: 1024px) {
  #header {
    max-width: 100%;
    height: 20%;
  }
  .fa-save,
  .fa-user-plus {
    font-size: 2em;
  }
  .form-control-sm {
    font-size: 1.33em;
  }
}
</style>
