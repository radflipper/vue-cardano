import NFTMakerButton from './NFTMakerButton.vue'

const nftmaker = {
  install: (Vue, options) => {
    /* declare global component */
    const projectID = options.projectID
    Vue.provide("projectID", projectID)
    Vue.component("NFTMakerButton", NFTMakerButton );
  },
};

export default nftmaker
