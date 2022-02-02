import NFTMakerButton from './NFTMakerButton.vue'

const nftmaker = {
  install: (app, options) => {
    /* declare global component */
    const projectID = options.projectID
    app.provide("projectID", projectID)
    app.component("NFTMakerButton", NFTMakerButton );
  },
};

export default nftmaker