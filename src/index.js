import NFTMakerButton from './NFTMakerButton.vue'

const vueCardano = {
  install: (Vue, options) => {
    /* declare global component */
    const projectID = options.projectID
    const network = options.network
    const paymentUrl
    try {
      if(network == "testnet") {
        paymentUrl = "https://payment-testnet.nft-maker.io/?p=" + projectID + "&c=1" 
      } else if (network == "mainnet") {
        "https://payment.nft-maker.io/?p=" + projectID + "&c=1"

      } else {
        throw new Exception('invalidOptionsException');
      }
    } catch (e) {
      return console.log(e + ": No network or incorrect netowork provided")
    }

    Vue.provide("paymentUrl", paymentUrl)
    Vue.component("NFTMakerButton", NFTMakerButton );
  },
};

export default vueCardano
