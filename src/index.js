import NFTMakerButton from './NFTMakerButton.vue'

const vueCardano = {
  install: (Vue, options) => {
    /* declare global component */
    const projectID = options.projectID
    const network = options.network
    const paymentUrl
    try {
      paymentUrl = network == "testnet" ? "https://payment-testnet.nft-maker.io/?p=" + projectID + "&c=1" 
        : network == "mainnet" ? "https://payment.nft-maker.io/?p=" + projectID + "&c=1";
    } catch (error) {
      return "No network provided"  
    }

    Vue.provide("network", network)
    Vue.provide("projectID", projectID)
    Vue.component("NFTMakerButton", NFTMakerButton );
  },
};

export default vueCardano
