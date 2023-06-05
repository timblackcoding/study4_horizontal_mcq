// Usage:
// Approach 1: F12 -> Open "Console" -> Enter the following code -> Press enter
// Approach 2: Install Tampermonkey - an extension for Google Chrome -> Add a new script -> Enter the following code -> Save it

// ==UserScript==
// @name         Realistic IELTS Study4
// @namespace    http://tampermonkey.net/
// @version      1.0
// @author       Tim Black
// @match        https://study4.com/tests/*listening*/practice/*
// @match        https://study4.com/tests/*listening*/start/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=study4.com
// @grant        none
// ==/UserScript==

function ArrangeMultipleChoiceHorizontally() {
  // Get all elements with the class 'two-cols'
  const twoCols = document.querySelectorAll('.two-cols');

  // Loop through each 'two-cols' element and set the CSS styling
  twoCols.forEach((element) => {
    element.style.display = 'flex';
    element.style.flexWrap = 'wrap';

    // Get all children of the 'two-cols' element with the class 'question-wrapper'
    const questionWrappers = element.querySelectorAll('.question-wrapper');

    // Loop through each 'question-wrapper' element and set the CSS styling
    questionWrappers.forEach((questionWrapper) => {
      questionWrapper.style.width = '50%';
    });
  });
}

(function () {
  ArrangeMultipleChoiceHorizontally();
})();
