import { shallowMount } from "@vue/test-utils";
import PersonCard from "../../src/components/personCard.vue";

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
});
