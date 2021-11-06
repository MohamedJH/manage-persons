const state = {
  personsList: [],
  searchList: [],
  toggleEdit: false,
  toggleAdd: false,
  userSelected: {
    name: "",
    email: "",
  },
};

const getters = {
  loading: (state) => state.loading,
  allContacts: (state) => state.personsList,
  editedToggle: (state) => state.toggleEdit,
  ToggleStatus: (state) => state.toggleAdd,
  user: (state) => state.userSelected,
  currentList: (state) => {
    if (!state.searchList.length) {
      return state.personsList;
    } else {
      return state.searchList;
    }
  },
};

const actions = {
  // get all contacts
  async fetchContacts({ commit }) {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
        { method: "GET" }
      );
      const Data = await response.json();
      // commit change to state
      commit("setContacts", Data);
    } catch (error) {
      console.error(error);
    }
  },
  // display form to update contact
  updateToggle({ commit }, contact) {
    console.log(contact.name);
    commit("selectContact", contact);
    commit("editToggle");
  },
  // display form to add contact
  addToggle({ commit }) {
    commit("addToggle");
  },
  /*  Add new user 
    NB: server is not really updated 
   */
  async addContact({ commit }, newUser) {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
        {
          method: "POST",
          body: JSON.stringify({ name: newUser.name, email: newUser.email }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
      const newContact = await response.json();
      commit("addNewContact", newContact);
    } catch (error) {
      console.error(error);
    }
  },
  // DELETE contact
  async deleteContact({ commit }, id) {
    try {
      await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
        method: "DELETE",
      });
      commit("removeContact", id);
    } catch (error) {
      console.log(error);
    }
  },
  // Edit contact
  async updateContact({ commit }, updatedContact) {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${updatedContact.id}`,
        {
          method: "PUT",
          body: JSON.stringify({
            name: updatedContact.name,
            email: updatedContact.email,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
      const newContact = await response.json();
      // commit change to state
      commit("updatContact", newContact);
    } catch (error) {
      console.log(error);
    }
  },
  // filter by address email
  searchByMail({ commit, state }, input) {
    const SearchList = state.personsList.filter((per) => {
      return per.email.toLowerCase().includes(input.toLowerCase());
    });
    // commit change to state
    commit("currentListByMail", SearchList);
  },
  // filter by First name and last name
  searchByName({ commit, state }, input) {
    const SearchList = state.personsList.filter((per) => {
      return per.name.toLowerCase().includes(input.toLowerCase());
    });
    // commit change to state
    commit("currentListByMail", SearchList);
  },
  // filter by ID
  searchById({ commit, state }, id) {
    if (id === "All") {
      const SearchList = state.personsList;
      commit("currentListById", SearchList);
    } else {
      const SearchList = state.personsList.filter((per) => per.id == id);
      // commit change to state
      commit("currentListById", SearchList);
      console.log(SearchList);
    }
  },
};

const mutations = {
  setContacts: (state, contactsList) => (state.personsList = contactsList),
  editToggle: (state) => (state.toggleEdit = !state.toggleEdit),
  addToggle: (state) => (state.toggleAdd = !state.toggleAdd),
  selectContact: (state, contact) => (state.userSelected = contact),
  addNewContact: (state, newContact) =>
    (state.personsList = [
      ...state.personsList,
      { ...newContact, id: state.personsList.length + 1 },
    ]),
  removeContact: (state, id) =>
    (state.personsList = state.personsList.filter(
      (contact) => contact.id !== id
    )),

  updatContact: (state, updatedContact) => {
    const index = state.personsList.findIndex(
      (person) => person.id === updatedContact.id
    );
    if (index !== -1) {
      state.personsList.splice(index, 1, updatedContact);
    }
  },
  currentListByMail: (state, upload) => (state.searchList = upload),
  currentListByName: (state, upload) => (state.searchList = upload),
  currentListById: (state, upload) => (state.searchList = upload),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
