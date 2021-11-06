import { shallowMount } from "@vue/test-utils";
import PersonCard from "@/components/personCard.vue";

describe("PersonCard component unit test", () => {
  test("il est une instance de vue js", () => {
    const wrapper = shallowMount(PersonCard, {
      propsData: {
        contact: {
          id: 1,
          name: "Leanne Graham",
          email: "Sincere@april.biz",
        },
      },
    });
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
  test("renders contact Name", () => {
    const contactName = "Leanne Graham";
    const wrapper = shallowMount(PersonCard, {
      propsData: {
        contact: {
          id: 1,
          name: contactName,
          email: "Sincere@april.biz",
        },
      },
    });
    expect(wrapper.html()).toContain(contactName);
  });
  test("call Delete Contact when delete button is clicked", () => {
    const wrapper = shallowMount(PersonCard, {
      propsData: {
        contact: {
          id: 1,
          name: "Leanne Graham",
          email: "Sincere@april.biz",
        },
      },
    });
    // simulate function in jest
    const deleteContact = jest.fn();
    wrapper.setMethods({
      deleteContact: deleteContact,
    });

    wrapper.find("button").trigger("click");
    expect(deleteContact).toHaveBeenCalled();
  });
});
