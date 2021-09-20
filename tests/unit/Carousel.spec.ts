import { shallowMount } from "@vue/test-utils";
import Carousel from "@/components/Carousel.vue";

describe("Carousel.vue", () => {
  it("has 'carousel' text", () => {
    const wrapper = shallowMount(Carousel);
    expect(wrapper.text()).toMatch("carousel");
  });
});
