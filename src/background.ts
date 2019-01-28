/// <reference types="chrome" />
import axios from "axios";

function handle(message: any) {
  switch (message.type) {
    case "REQUEST":
      return axios(message.payload).then(
        res => {
          return {
            payload: res
          };
        },
        err => {
          return {
            error: true,
            payload: err
          };
        }
      );
    default:
      return undefined;
  }
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (sender.tab) {
    const handled = handle(message);

    if (handled) {
      if (typeof handled.then === "function") {
        handled.then(sendResponse, sendResponse);
        return true;
      } else {
        sendResponse(handled);
      }
    }
  }
});
