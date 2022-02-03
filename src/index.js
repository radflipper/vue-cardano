import NFTMakerButton from './NFTMakerButton.vue'

const vueCardano = {
  install: (Vue, options) => {
    /* declare global component */
    const projectID = options.projectID
    Vue.provide("projectID", projectID)
    Vue.component("NFTMakerButton", NFTMakerButton );
  },
};

export default vueCardano
