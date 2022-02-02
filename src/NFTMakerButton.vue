<template>
  <a>
    <img :src="imgSrc" @click="openPaymentWindow" />
  </a>
</template>
<script>
import { inject } from "vue";
export default {
  props: {
    btnColor: {
      type: String,
      default: "green",
    },
    btnStyle: { default: "round", type: String },
  },
  setup(props) {
    const projectID = inject("projectID");

    const btnColor =
      props.btnColor == "black" 
        ? "3" 
        : props.btnColor == "white" 
        ? "2" 
        : "1";
    const btnStyle =
      props.btnStyle == "corners"
        ? "3"
        : props.btnStyle == "square"
        ? "2"
        : "1";
    const imgSrc =
      "https://pro.nft-maker.io/images/buttons/paybutton_" +
      btnStyle +
      "_" +
      btnColor +
      ".svg";

    console.log(projectID);
    function openPaymentWindow() {
      const paymentUrl =
        "https://payment-testnet.nft-maker.io/?p=" + projectID + "&c=1";
      // Specify the popup width and height
      const popupWidth = 500;
      const popupHeight = 700;

      // Calculate the center of the screen
      const left =
        window.top.outerWidth / 2 + window.top.screenX - popupWidth / 2;
      const top =
        window.top.outerHeight / 2 + window.top.screenY - popupHeight / 2;

      const popup = window.open(
        paymentUrl,
        "NFT-MAKER PRO Payment Gateway",
        `popup=1, location=1, width=${popupWidth}, height=${popupHeight}, left=${left}, top=${top}`
      );

      // Show dim background
      document.body.style = "background: rgba(0, 0, 0, 0.5)";

      // Continuously check whether the popup has been closed
      const backgroundCheck = setInterval(function () {
        if (popup.closed) {
          clearInterval(backgroundCheck);

          console.log("Popup closed");

          // Remove dim background
          document.body.style = "";
        }
      }, 1000);
    }
    return {
      openPaymentWindow,
      imgSrc,
    };
  },
};
</script>
