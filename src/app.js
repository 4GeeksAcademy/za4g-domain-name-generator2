/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");

  let pronounList = ["the", "our"];
  let adjectiveList = ["great", "big"];
  let nounList = ["jogger", "racoon"];

  let domain = [];

  for (let pronoun in pronounList) {
    domain[0] = pronounList[pronoun];
    for (let adjective in adjectiveList) {
      domain[1] = adjectiveList[adjective];
      for (let noun in nounList) {
        domain[2] = nounList[noun];
        console.log(domain[0] + domain[1] + domain[2] + ".com");
      }
    }
  }
};
