import { defineStore } from "pinia";

export const useImgStore = defineStore("img", {
  state: () => {
    return {
      case: "" as string,
      knob: "" as string,
      knobModule: "" as string,
      weight: "" as string,
      doubleKey: "" as string,
      screen: "" as string,
    };
  },
  getters: {},
  actions: {},
});
