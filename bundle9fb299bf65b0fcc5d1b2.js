/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modalStart.js":
/*!******************************!*\
  !*** ./src/js/modalStart.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   modal: () => (/* binding */ modal)
/* harmony export */ });
var modal = "\n   <div class=\"modal_start-content\">\n        <div class=\"modal_start-clouds\">\n          <img id=\"cloudsIMG\" alt=\"clouds image\" />\n        </div>\n        <div class=\"modal_start-text\">\n          <h1 class=\"modal_start-h1\">Guess <span class=\"modal_start-span\">that</span> Word!?</h1>\n          <p class=\"modal_start-p\">Before the <span>shark </span>eats the <span>corgi</span></p>\n        </div>\n        <div class=\"modal_start-corgi\">\n          <img id=\"startCorgiIMG\" alt=\"corgi swimming\" class=\"corgiStart\" />\n        </div>\n        <div class=\"modal_start-selectContainer\">\n          <fieldset>\n            <legend>\n              select your level\n            </legend>\n          </fieldset>\n          <div class=\"modal_start-inputWrapper\">\n            <input type=\"radio\" id=\"levelOne\" name=\"radio_group\" class=\"radio_group\">\n            <label for=\"levelOne\" class=\"label\">level one</label>\n          </div>\n          <div class=\"modal_start-inputWrapper\">\n            <input type=\"radio\" id=\"levelTwo\" name=\"radio_group\" class=\"radio_group\">\n            <label for=\"levelTwo\" class=\"label\">level two</label>\n          </div>\n          <div class=\"modal_start-inputWrapper\">\n            <input type=\"radio\" id=\"levelThree\" name=\"radio_group\" class=\"radio_group\">\n            <label for=\"levelThree\" class=\"label\">level three</label>\n          </div>\n        </div>\n        <div class=\"modal_start-button\">\n          <button class=\"button\" id=\"startButton\">start</button>\n        </div>\n\n\n";

/***/ }),

/***/ "./src/js/words.js":
/*!*************************!*\
  !*** ./src/js/words.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   advancedWordArray: () => (/* binding */ advancedWordArray),
/* harmony export */   beginnerWordArray: () => (/* binding */ beginnerWordArray),
/* harmony export */   letters: () => (/* binding */ letters),
/* harmony export */   mediumWordArray: () => (/* binding */ mediumWordArray)
/* harmony export */ });
var beginnerWordArray = ['Apple', 'Bounce', 'Colorful', 'Dizzy', 'Explore', 'Fast', 'Giggle', 'Happy', 'Imagine', 'Jumpy', 'Kick', 'Lively', 'Magic', 'Nap', 'Open', 'Playful', 'Quick', 'Run', 'Silly', 'Tasty', 'Up', 'Visit', 'Wiggle', 'Excitedly', 'Yawn', 'Zoom', 'Ant', 'Brave', 'Climb', 'Dance', 'Exciting', 'Fly', 'Grow', 'Hug', 'Interesting', 'Joke', 'Kind', 'Laugh', 'Move', 'Nice', 'Outdoors', 'Paint', 'Quiet', 'Read', 'Swim', 'Talk', 'Understand', 'Vast', 'Wonderful', 'Yellow', 'Zigzag', 'Acorn', 'Bake', 'Cute', 'Draw', 'Eat', 'Friendly', 'Gentle', 'Hop', 'Jump', 'Know', 'Love', 'Music', 'Nose', 'Outside', 'Proud', 'Question', 'Roll', 'Sleep', 'Touch', 'Unique', 'View', 'Wonder', 'Young', 'Zoo', 'Admire', 'Buzz', 'Curious', 'Daydream', 'Excellent', 'Fun', 'Gaze', 'Help', 'Inspire', 'Joyful', 'Kiss', 'Listen', 'Make', 'Nibble', 'Observe', 'Patient', 'Ride', 'Sing', 'Try', 'Unite', 'Vibrate', 'Wish', 'Yearn', 'Zestful', 'Abundant', 'Balance', 'Creative'];
var mediumWordArray = ['Analyze', 'Articulate', 'Assess', 'Authentic', 'Calculate', 'Coherent', 'Compose', 'Context', 'Critique', 'Deduce', 'Define', 'Demonstrate', 'Depict', 'Detect', 'Diverse', 'Evaluate', 'Evidence', 'Examine', 'Explain', 'Extract', 'Factor', 'Formulate', 'Hypothesis', 'Identify', 'Illustrate', 'Impact', 'Infer', 'Innovate', 'Interpret', 'Investigate', 'Justify', 'Logic', 'Method', 'Modify', 'Objective', 'Optimize', 'Outline', 'Paradox', 'Pattern', 'Perspective', 'Predict', 'Principle', 'Probe', 'Proof', 'Reason', 'Reflect', 'Relevant', 'Research', 'Revise', 'Simulate', 'Source', 'Speculate', 'Structure', 'Study', 'Summarize', 'Synthesize', 'System', 'Theory', 'Validate', 'Verify', 'Visualize', 'Acquire', 'Adapt', 'Adequate', 'Analytic', 'Cite', 'Conclude', 'Contrast', 'Deductive', 'Discern', 'Efficacy', 'Elaborate', 'Ethical', 'Extract', 'Facilitate', 'Genre', 'Imply', 'Indicate', 'Integrity', 'Integrate', 'Intuitive', 'Irrelevant', 'Just', 'Logical', 'Modify', 'Objective', 'Paradigm', 'Passive', 'Perception', 'Precise', 'Rational', 'Reveal', 'Signify', 'Subtle', 'Supplement', 'Synonym', 'Underlie', 'Validate', 'Viable', 'Yield'];
var advancedWordArray = ['Acquiesce', 'Acronym', 'Ambiguity', 'Analogy', 'Andragogy', 'Antithesis', 'Antonym', 'Articulate', 'Assonance', 'Circumspect', 'Clandestine', 'Cognition', 'Collaborate', 'Colloquial', 'Connotation', 'Contrived', 'Conundrum', 'Correlation', 'Criterion', 'Cumulative', 'Curriculum', 'Deference', 'Dialect', 'Diction', 'Didactic', 'Dissertation', 'Divergent', 'Egregious', 'Eloquence', 'Emergent', 'Empathy', 'Enigma', 'Epitome', 'Epiphany', 'Epitaph', 'Erudite', 'Existential', 'Exponential', 'Formative', 'Holistic', 'Homonym', 'Hubris', 'Hyperbole', 'Incongruous', 'Infamy', 'Initiation', 'Innate', 'Intellectual', 'Interactive', 'Irony', 'Jargon', 'Malapropism', 'Magnanimous', 'Mentor', 'Metaphor', 'Meticulous', 'Mnemonic', 'Monologue', 'Motif', 'Myriad', 'Nemesis', 'Nominal', 'Norms', 'Obfuscate', 'Obtuse', 'Onomatopoeia', 'Ostentatious', 'Oxymoron', 'Paradox', 'Paraphrase', 'Pedantic', 'Pedagogy', 'Perusal', 'Phonemes', 'Phonological', 'Plagiarism', 'Plethora', 'Posthumously', 'Preposition', 'Pretentious', 'Pseudonym', 'References', 'Reflection', 'Rubric', 'Sardonic', 'Satire', 'Simile', 'Soliloquy', 'Superfluous', 'Syntax', 'Thesis', 'Validity', 'Vernacular', 'Virtual', 'Vocational'];
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Nosifer&family=Poppins:wght@300;400;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::after,\n*::before {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nhtml {\n  font-size: 62.5%;\n  scroll-behavior: smooth;\n}\n\nbody {\n  font-size: var(--font-size-base);\n  line-height: 1.2;\n  box-sizing: inherit;\n}\n\nhtml,\nbody {\n  min-height: 100vh;\n  min-height: 100dvh;\n  overflow-x: hidden;\n}\n\nli {\n  list-style: none;\n}\n\na {\n  text-decoration: none;\n}\n\n:root {\n  --ff-primary: \"Poppins\", sans-serif;\n  --ff-secondary: \"Nosifer\", cursive;\n  --fc-primary: rgba(112, 112, 112, 100%);\n  --fc-secondary: rgba(222, 80, 80, 100%);\n  --fc-black: rgba(45, 39, 39, 100%);\n  --fc-white: rgba(251, 251, 251, 100%);\n  --clr-background: #f9f9f9;\n  --clr-blue-1: rgba(225, 239, 245, 100%);\n  --clr-blue-2: rgba(138, 211, 239, 60%);\n  --clr-blue-3: rgba(0, 159, 232, 100%);\n  --clr-blue-4: rgba(166, 208, 226, 100%);\n  --clr-white: rgba(251, 251, 251, 100%);\n  --clr-blue-border: rgba(52, 98, 137, 100%);\n  --border-radius: 2rem;\n  --fs-sm: clamp(1.28rem, 0.17vw + 1.21rem, 1.43rem);\n  --fs-base: clamp(1.6rem, 0.34vw + 1.46rem, 1.9rem);\n  --fs-md: clamp(2rem, 0.61vw + 1.76rem, 2.53rem);\n  --fs-lg: clamp(2.5rem, 1vw + 2.1rem, 3.38rem);\n  --fs-xl: clamp(3.5rem, 5rem, 6rem);\n  --letter_count: 26;\n  --word_count: 3;\n}\n\nbody {\n  background-color: var(--clr-background);\n  font-family: var(--ff-primary);\n  color: var(--font-color-primary);\n  position: relative;\n}\n\n.shark {\n  display: none;\n  position: absolute;\n  width: 170px;\n  height: 100px !important;\n  right: 5px;\n  bottom: -14px !important;\n  opacity: 0;\n}\n\n.corgi {\n  display: none;\n  position: absolute;\n  width: 70px;\n  height: 70px !important;\n  left: 5px;\n  bottom: -22px !important;\n  opacity: 0;\n}\n\n.add {\n  display: block;\n  animation: appear 300ms ease-in forwards 800ms;\n}\n\n@keyframes appear {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.modal_start-inputWrapper {\n  position: relative;\n  height: 30px;\n  margin: 10px 25px;\n  display: flex;\n}\n\ninput {\n  background: none;\n  border: solid 2px var(--clr-blue-border);\n  color: var(--fc-secondary);\n  padding: 15px 40px;\n  font-size: 18px;\n  display: inline-block;\n  transition: all 300ms ease-in-out;\n}\n\n[type=radio]:checked,\n[type=radio]:not(:checked) {\n  position: absolute;\n  left: -999px;\n}\n\n[type=radio]:checked + label,\n[type=radio]:not(:checked) + label {\n  height: 100%;\n  display: flex;\n  align-items: center;\n  position: relative;\n  padding-left: 45px;\n  cursor: pointer;\n  line-height: 20px;\n  font-size: var(--fs-base);\n  color: var(--fc-white);\n  font-family: var(--ff-primary);\n}\n\n[type=radio]:checked + label:before,\n[type=radio]:not(:checked) + label:before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 32px;\n  height: 32px;\n  border: 2px solid var(--clr-blue-border);\n  border-radius: 100%;\n  background: #fff;\n}\n\n[type=radio]:checked + label:after,\n[type=radio]:not(:checked) + label:after {\n  content: \"\";\n  width: 20px;\n  height: 20px;\n  background: var(--fc-secondary);\n  position: absolute;\n  top: 6px;\n  left: 6px;\n  border-radius: 100%;\n  transition: all 0.3s ease-in-out;\n}\n\n[type=radio]:not(:checked) + label:after {\n  opacity: 0;\n  transform: scale(0);\n}\n\n[type=radio]:checked + label:after {\n  opacity: 1;\n  transform: scale(1);\n}\n\n[type=radio]:checked ~ label {\n  transform: scale(1.2);\n  transition: all 300ms ease;\n}\n\n.word_wrapper {\n  display: none;\n}\n.word_wrapper.word_active {\n  display: flex;\n}\n\n.letters_wrapper {\n  display: none;\n}\n.letters_wrapper.letters_active {\n  display: flex;\n}\n\n.modal_start {\n  display: none;\n}\n.modal_start.start_active {\n  display: flex;\n}\n\n.animate-up {\n  animation: popUp 1000ms ease-out forwards;\n}\n\n.animate-up-2 {\n  animation: popUpSlow 800ms ease-out forwards 500ms;\n}\n\n.animate-fade-out {\n  animation: fadeOut 800ms ease-out forwards 600ms;\n}\n\n.animate-fade-in {\n  animation: fadeIn 800ms ease-in forwards 300ms;\n}\n\n@keyframes fadeIn {\n  0% {\n    opacity: 0;\n    transform: scale(0);\n  }\n  50% {\n    opacity: 1;\n    transform: scale(1.2);\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n@keyframes popUp {\n  0% {\n    transform: translate3d(0, 0, 0);\n  }\n  50% {\n    transform: translate3d(0, 200px, 0);\n  }\n  100% {\n    transform: translate3d(0, -100vh, 0);\n  }\n}\n@keyframes popUpSlow {\n  0% {\n    transform: translate3d(0, 0, 0);\n  }\n  50% {\n    transform: translate3d(0, 50px, 0);\n  }\n  100% {\n    transform: translate3d(0, -100vh, 0);\n  }\n}\n@keyframes fadeOut {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n.animate-in {\n  opacity: 0;\n  will-change: transform;\n}\n\n.animate-in:nth-child(1) {\n  animation: pop-in 100ms ease-in-out 0ms forwards;\n}\n\n.animate-in:nth-child(2) {\n  animation: pop-in 100ms ease-in-out 50ms forwards;\n}\n\n.animate-in:nth-child(3) {\n  animation: pop-in 100ms ease-in-out 100ms forwards;\n}\n\n.animate-in:nth-child(4) {\n  animation: pop-in 100ms ease-in-out 150ms forwards;\n}\n\n.animate-in:nth-child(5) {\n  animation: pop-in 100ms ease-in-out 200ms forwards;\n}\n\n.animate-in:nth-child(6) {\n  animation: pop-in 100ms ease-in-out 250ms forwards;\n}\n\n.animate-in:nth-child(7) {\n  animation: pop-in 100ms ease-in-out 300ms forwards;\n}\n\n.animate-in:nth-child(8) {\n  animation: pop-in 100ms ease-in-out 350ms forwards;\n}\n\n.animate-in:nth-child(9) {\n  animation: pop-in 100ms ease-in-out 400ms forwards;\n}\n\n.animate-in:nth-child(10) {\n  animation: pop-in 100ms ease-in-out 450ms forwards;\n}\n\n.animate-in:nth-child(11) {\n  animation: pop-in 100ms ease-in-out 500ms forwards;\n}\n\n.animate-in:nth-child(12) {\n  animation: pop-in 100ms ease-in-out 550ms forwards;\n}\n\n.animate-in:nth-child(13) {\n  animation: pop-in 100ms ease-in-out 600ms forwards;\n}\n\n.animate-in:nth-child(14) {\n  animation: pop-in 100ms ease-in-out 650ms forwards;\n}\n\n.animate-in:nth-child(15) {\n  animation: pop-in 100ms ease-in-out 700ms forwards;\n}\n\n.animate-in:nth-child(16) {\n  animation: pop-in 100ms ease-in-out 750ms forwards;\n}\n\n.animate-in:nth-child(17) {\n  animation: pop-in 100ms ease-in-out 800ms forwards;\n}\n\n.animate-in:nth-child(18) {\n  animation: pop-in 100ms ease-in-out 850ms forwards;\n}\n\n.animate-in:nth-child(19) {\n  animation: pop-in 100ms ease-in-out 900ms forwards;\n}\n\n.animate-in:nth-child(20) {\n  animation: pop-in 100ms ease-in-out 950ms forwards;\n}\n\n.animate-in:nth-child(21) {\n  animation: pop-in 100ms ease-in-out 1000ms forwards;\n}\n\n.animate-in:nth-child(22) {\n  animation: pop-in 100ms ease-in-out 1050ms forwards;\n}\n\n.animate-in:nth-child(23) {\n  animation: pop-in 100ms ease-in-out 1100ms forwards;\n}\n\n.animate-in:nth-child(24) {\n  animation: pop-in 100ms ease-in-out 1150ms forwards;\n}\n\n.animate-in:nth-child(25) {\n  animation: pop-in 100ms ease-in-out 1200ms forwards;\n}\n\n.animate-in:nth-child(26) {\n  animation: pop-in 100ms ease-in-out 1250ms forwards;\n}\n\n@keyframes pop-in {\n  0% {\n    transform: scale(0);\n    opacity: 0;\n  }\n  10% {\n    opacity: 1;\n  }\n  50% {\n    transform: scale(1.1);\n    opacity: 1;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n.letters_wrapper {\n  height: 90%;\n  margin: 1rem auto;\n  padding: 2rem;\n  justify-content: center;\n  align-items: center;\n}\n@media (min-width: 600px) {\n  .letters_wrapper {\n    width: 95%;\n  }\n}\n.letters_wrapper-container {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  max-width: 800px;\n  margin: 0 auto;\n}\n.letters_wrapper-span {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: var(--fs-lg);\n  color: var(--fc-primary);\n  border: 1px solid var(--fc-primary);\n  padding: 1rem;\n  background-color: var(--clr-white);\n  width: 40px;\n  height: 40px;\n  margin: 3px;\n  cursor: pointer;\n  box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.2);\n  border-radius: 10px;\n  transform: scale(1);\n  will-change: transform;\n  transition: transform 600ms ease-in-out, box-shadow 300ms ease-in-out;\n  transition: all 600ms ease !important;\n}\n@media (min-width: 600px) {\n  .letters_wrapper-span {\n    width: 75px;\n    height: 75px;\n    border-radius: 100%;\n    margin: 5px;\n  }\n}\n@media (min-width: 860px) {\n  .letters_wrapper-span {\n    width: 95px;\n    height: 95px;\n  }\n}\n.letters_wrapper-span:hover {\n  transform: scale(0.9);\n  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);\n}\n\n.letters_wrapper-span.match {\n  transform: scale(0.8) !important;\n  border: 2px solid #fff;\n  background-color: #31393c;\n  color: #ccc;\n}\n\n.letters_wrapper-span.no-match {\n  transform: scale(0.8) !important;\n  text-decoration: line-through;\n  background-color: #d1495b;\n  color: #fff;\n  border: 2px solid #fff;\n}\n\n.word_wrapper {\n  height: 100%;\n  justify-content: center;\n  align-items: center;\n}\n.word_wrapper-char {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: var(--fs-lg);\n  color: var(--fc-primary);\n  border: 1px solid var(--fc-primary);\n  padding: 1rem;\n  background-color: var(--clr-white);\n  font-size: var(--fs-base);\n  border-radius: 10px;\n  margin: 1px;\n  width: 28px;\n  height: 28px;\n  max-width: 80px;\n  max-height: 80px;\n}\n@media (max-width: 330px) {\n  .word_wrapper-char {\n    margin: 1px;\n    width: 23px;\n    height: 28px;\n  }\n}\n@media (min-width: 400px) and (max-width: 490px) {\n  .word_wrapper-char {\n    font-size: var(--fs-base);\n    margin: 2px;\n    width: 30px;\n    height: 30px;\n  }\n}\n@media (min-width: 491px) and (max-width: 599px) {\n  .word_wrapper-char {\n    font-size: var(--fs-md);\n    margin: 2px;\n    width: 8vw;\n    height: 8vw;\n  }\n}\n@media (min-width: 600px) {\n  .word_wrapper-char {\n    font-size: var(--fs-md);\n    margin: 3px;\n    width: 8vw;\n    height: 8vw;\n  }\n}\n\n/* //// CARD STYLES ///////////// */\n.card-wrapper {\n  display: flex;\n  perspective: 1000px;\n  transform-style: preserve-3d;\n  opacity: 0;\n  animation: popIn 500ms ease-in-out forwards 100ms;\n}\n\n.card {\n  position: relative;\n  width: 28px;\n  height: 28px;\n  max-width: 80px;\n  max-height: 80px;\n  margin: 3px;\n  background: #f6f6f6;\n  border-radius: 5px;\n  border: 1px solid #333;\n  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.2);\n  transition: all 1000ms ease-in-out;\n}\n@media (max-width: 330px) {\n  .card {\n    margin: 1px;\n    width: 23px;\n    height: 28px;\n  }\n}\n@media (min-width: 400px) and (max-width: 490px) {\n  .card {\n    font-size: var(--fs-base);\n    margin: 2px;\n    width: 30px;\n    height: 30px;\n  }\n}\n@media (min-width: 491px) and (max-width: 599px) {\n  .card {\n    font-size: var(--fs-md);\n    margin: 2px;\n    width: 8vw;\n    height: 8vw;\n  }\n}\n@media (min-width: 600px) {\n  .card {\n    font-size: var(--fs-md);\n    margin: 3px;\n    width: 8vw;\n    height: 8vw;\n  }\n}\n\n.card-front {\n  z-index: 2;\n}\n\n.flip {\n  transform: rotateX(180deg) !important;\n  transition: all 300ms ease-in-out;\n}\n\n.card {\n  backface-visibility: hidden;\n}\n\n.card-wrapper .card-front,\n.card-wrapper .card-back {\n  backface-visibility: hidden;\n  transform: rotateX(0deg);\n}\n\n.card-back {\n  color: #293241;\n}\n\n.card-front,\n.card-back {\n  border-radius: 5px;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  padding: 5px;\n  transition: all 1000ms ease-in-out;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.card-front {\n  transform: rotateX(180deg);\n  background-color: #f6f6f6;\n}\n\n@keyframes popIn {\n  0% {\n    opacity: 0;\n    transform: scale(0) translateY(-100%);\n  }\n  50% {\n    opacity: 1;\n    transform: scale(1) translateY(50%);\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n  }\n}\n.modal_start {\n  content: \"\";\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n  bottom: 1rem;\n  left: 1rem;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: calc(100vw - 2rem);\n  height: calc(100vh - 2rem);\n  border-radius: var(--border-radius);\n  background-color: transparent;\n}\n.modal_start-content {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  height: 80%;\n  align-items: center;\n  justify-content: space-around;\n  position: relative;\n}\n.modal_start-text {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 1rem 2rem;\n  position: relative;\n  z-index: 2;\n}\n.modal_start-h1 {\n  color: var(--fc-secondary);\n  font-size: var(--fs-lg);\n  margin: 1rem 2rem;\n}\n.modal_start-span {\n  color: var(--fc-black);\n  font-size: var(--fs-xl);\n}\n@media (max-width: 399px) {\n  .modal_start-span {\n    font-size: var(--fs-lg);\n  }\n}\n@media (max-width: 325px) {\n  .modal_start-span {\n    font-size: var(--fs-sm);\n  }\n}\n.modal_start-p {\n  color: var(--fc-secondary);\n  font-size: var(--fs-base);\n}\n.modal_start-p span {\n  color: var(--fc-black);\n}\n.modal_start-selectContainer {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin-top: 18vh;\n}\n@media (max-width: 399px) {\n  .modal_start-selectContainer {\n    margin-top: 21vh;\n  }\n}\n@media (max-width: 325px) {\n  .modal_start-selectContainer {\n    margin-top: 7vh;\n  }\n}\n.modal_start-selectContainer fieldset {\n  border: transparent;\n  margin-top: 1rem;\n}\n.modal_start-selectContainer legend {\n  color: var(--fc-white);\n  font-size: var(--fs-md);\n  font-family: var(--ff-primary);\n  font-weight: bold;\n  text-align: center;\n  margin: 3rem 0;\n}\n.modal_start-button {\n  margin: 10vh 0;\n  text-align: center;\n}\n.modal_start-button button {\n  width: 200px;\n  height: 50px;\n  background: var(--fc-secondary);\n  border: 1px solid transparent;\n  outline: none;\n  border-radius: 2rem;\n  color: var(--clr-white);\n  font-size: var(--fs-base);\n  cursor: pointer;\n  transition: all 300ms ease-out;\n}\n.modal_start-button button:hover {\n  color: var(--fc-secondary);\n  background: var(--clr-white);\n  border: 1px solid var(--fc-secondary);\n  transform: scale(1.2);\n  box-shadow: 10px 20px 20px rgba(0, 0, 0, 0.2);\n  font-weight: bold;\n}\n.modal_start-clouds {\n  position: absolute;\n  top: -6rem;\n  z-index: 1;\n  left: 50%;\n}\n@media (min-width: 600px) {\n  .modal_start-clouds {\n    left: 59%;\n    top: -8rem;\n  }\n}\n.modal_start-clouds img {\n  width: 150px;\n}\n@media (min-width: 600px) {\n  .modal_start-clouds img {\n    width: 200px;\n  }\n}\n\n.active_start {\n  display: flex;\n}\n\n.modal_definition {\n  content: \"\";\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n  bottom: 1rem;\n  left: 1rem;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  z-index: 2;\n  background-color: var(--clr-blue-4);\n  border-radius: var(--border-radius);\n  display: none;\n}\n.modal_inner {\n  position: relative;\n  z-index: 3;\n  background-color: var(--clr-white);\n  border-radius: var(--border-radius);\n  border: 1.5px solid var(--clr-blue-border);\n  width: 80%;\n  height: 80%;\n  max-width: 800px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  text-align: center;\n  box-shadow: 10px 10px 25px rgba(0, 0, 0, 0.3);\n  opacity: 0;\n}\n.modal_buttonClose {\n  position: absolute;\n  z-index: 5;\n  top: -5px;\n  right: -5px;\n  border: none;\n  outline: none;\n  border-radius: 100%;\n  background-color: #333;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 30px;\n  height: 30px;\n  cursor: pointer;\n  transition: all 300ms ease-in-out;\n}\n.modal_buttonClose span {\n  color: var(--clr-blue-border);\n  color: #fff;\n  display: block;\n  padding: 5px;\n  transition: all 300ms ease-in-out;\n}\n.modal_buttonClose:hover {\n  transform: scale(1.1);\n}\n.modal_buttonClose:hover span {\n  transform: rotate(-180deg);\n}\n.modal_content {\n  position: relative;\n  z-index: 2;\n  color: var(--fc-primary);\n  padding: 1rem 2rem;\n}\n.modal_content p {\n  margin: 1rem auto;\n}\n.modal_content-h2 {\n  font-size: var(--fs-xl);\n}\n.modal_content-partOfspeech {\n  color: var(--fc-secondary);\n  font-size: var(--fs-md);\n  font-weight: bold;\n}\n.modal_content-p {\n  font-size: var(--fs-base);\n}\n.modal_content-definition {\n  font-size: var(--fs-md);\n  width: 70%;\n  margin: 0 auto;\n}\n.modal_content-apiInfo {\n  font-size: var(--fs-sm);\n  padding-top: 2rem;\n}\n.modal_content-apiInfo span {\n  color: var(--fc-secondary);\n}\n\n.showDefinition {\n  display: flex;\n  animation: animateInDefinition 300ms ease-in;\n}\n\n.modal_gameOver {\n  display: none;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  bottom: 25%;\n  left: 0;\n  align-items: center;\n  justify-content: center;\n}\n.modal_gameOver-h2 {\n  font-family: var(--ff-secondary);\n  font-size: var(--fs-xl);\n  color: var(--fc-secondary);\n  animation: animateOut 400ms ease-out forwards;\n}\n\n.showModal {\n  display: flex;\n}\n\n.fadeInDef {\n  animation: show 1200ms ease-out forwards;\n}\n\n@keyframes show {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes animateOut {\n  0% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(2.5);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@keyframes animateIn {\n  0% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n@keyframes animateInDefinition {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n.corgiStart {\n  width: 75px;\n  height: auto;\n  animation: corgiStart linear 5300ms infinite both;\n}\n@media (max-width: 399px) {\n  .corgiStart {\n    width: 60px;\n  }\n}\n\n.modal_start-corgi {\n  position: absolute;\n  left: 0;\n}\n@media (min-height: 600px) and (max-height: 700px) {\n  .modal_start-corgi {\n    height: 32vh;\n  }\n}\n@media (min-height: 701px) and (max-height: 800px) {\n  .modal_start-corgi {\n    height: 31vh;\n  }\n}\n@media (min-height: 801px) and (max-height: 900px) {\n  .modal_start-corgi {\n    height: 30vh;\n  }\n}\n@media (min-height: 901px) and (max-height: 1100px) {\n  .modal_start-corgi {\n    height: 29vh;\n  }\n}\n@media (min-height: 1101px) and (max-height: 1200px) {\n  .modal_start-corgi {\n    height: 28vh;\n  }\n}\n@media (min-height: 1201px) and (max-height: 1300px) {\n  .modal_start-corgi {\n    height: 27vh;\n  }\n}\n@media (min-height: 1301px) {\n  .modal_start-corgi {\n    height: 26vh;\n  }\n}\n@media (max-width: 325px) {\n  .modal_start-corgi {\n    display: none;\n  }\n}\n\n.level-alert {\n  height: 50px;\n  width: 125%;\n  background: var(--clr-white);\n  border-radius: 25px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n}\n.level-alert p {\n  color: var(--fc-secondary);\n  font-size: var(--fs-base);\n}\n.level-alert::after {\n  content: \"\";\n  position: absolute;\n  background: var(--clr-white);\n  width: 0;\n  height: 0;\n  border-left: 2vh solid transparent;\n  border-right: 2vh solid transparent;\n  border-top: 10vh solid var(--clr-white);\n  position: absolute;\n  top: 45%;\n  left: -10%;\n  transform: rotate(60deg);\n}\n\n@keyframes moveRight {\n  0% {\n    transform: translate3d(0, 0, 0) rotate(15deg);\n  }\n  100% {\n    transform: translate3d(-600px, -150px, 0) rotate(15deg);\n  }\n}\n@keyframes moveLeft {\n  0% {\n    transform: translate3d(0, 0, 0) scale(0.6) scaleX(-1) rotate(-15deg);\n  }\n  100% {\n    transform: translate3d(600px, -50px, 0) scale(0.6) scaleX(-1) rotate(15deg);\n  }\n}\n.main {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-color: var(--clr-blue-1);\n  min-height: calc(100vh - 2rem);\n  min-width: calc(100vw - 2rem);\n  padding: 1rem;\n  margin: 1rem;\n  border: 1px solid var(--clr-blue-border);\n  border-radius: var(--border-radius);\n}\n\n.content {\n  display: grid;\n  grid-template-rows: 20vh 15vh 55vh;\n  background-color: var(--clr-blue-2);\n  border: 3px solid var(--clr-white);\n  border-radius: var(--border-radius);\n  width: 100%;\n  max-width: 1200px;\n  grid-template-columns: auto;\n}\n.content_top {\n  grid-column: 1/-1;\n  grid-row: 1;\n  position: relative;\n  z-index: 2;\n}\n.content_img {\n  grid-row: 2;\n  position: relative;\n}\n.content_img img {\n  width: 100%;\n  position: absolute;\n  right: 0;\n  bottom: -2px;\n  left: 0;\n}\n.content_bottom {\n  position: relative;\n  grid-row: 3;\n  grid-column: 1/-1;\n  background-color: var(--clr-blue-3);\n  width: 100%;\n  height: 100%;\n  border-bottom-left-radius: var(--border-radius);\n  border-bottom-right-radius: var(--border-radius);\n}\n\n.new_game_wrapper {\n  position: absolute;\n  z-index: 1;\n  bottom: 2rem;\n  right: 3rem;\n}\n.new_game_wrapper button {\n  background-color: transparent;\n  font-family: inherit;\n  border: none;\n  outline: none;\n  color: var(--clr-white);\n  font-weight: bold;\n  transition: all 300ms ease-in-out;\n  cursor: pointer;\n}\n.new_game_wrapper button:hover {\n  transform: scale(1.1);\n}\n\n.animation_container {\n  position: relative;\n  z-index: 2;\n  width: 100%;\n  height: 100%;\n  margin: 0 auto;\n}", "",{"version":3,"sources":["webpack://./src/styles/_resets.scss","webpack://./src/styles/main.scss","webpack://./src/styles/_variables.scss","webpack://./src/styles/_base.scss","webpack://./src/styles/_inputs.scss","webpack://./src/styles/_animations.scss","webpack://./src/styles/_letters.scss","webpack://./src/styles/_mixins.scss","webpack://./src/styles/_modals.scss","webpack://./src/styles/_layout.scss"],"names":[],"mappings":"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","sourcesContent":["//RESETS\n*,\n*::after,\n*::before {\n\tmargin: 0;\n\tpadding: 0;\n\tbox-sizing: border-box;\n}\n\nhtml {\n\tfont-size: 62.5%; //1 rem = 10px; 10px/16px = 62.5%\n\tscroll-behavior: smooth;\n}\n\nbody {\n\tfont-size: var(--font-size-base);\n\tline-height: 1.2;\n\tbox-sizing: inherit;\n}\n\nhtml,\nbody {\n\tmin-height: 100vh;\n\tmin-height: 100dvh;\n\toverflow-x: hidden;\n}\n\nli {\n\tlist-style: none;\n}\n\na {\n\ttext-decoration: none;\n}\n","@import url(\"https://fonts.googleapis.com/css2?family=Nosifer&family=Poppins:wght@300;400;700&display=swap\");\n*,\n*::after,\n*::before {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nhtml {\n  font-size: 62.5%;\n  scroll-behavior: smooth;\n}\n\nbody {\n  font-size: var(--font-size-base);\n  line-height: 1.2;\n  box-sizing: inherit;\n}\n\nhtml,\nbody {\n  min-height: 100vh;\n  min-height: 100dvh;\n  overflow-x: hidden;\n}\n\nli {\n  list-style: none;\n}\n\na {\n  text-decoration: none;\n}\n\n:root {\n  --ff-primary: \"Poppins\", sans-serif;\n  --ff-secondary: \"Nosifer\", cursive;\n  --fc-primary: rgba(112, 112, 112, 100%);\n  --fc-secondary: rgba(222, 80, 80, 100%);\n  --fc-black: rgba(45, 39, 39, 100%);\n  --fc-white: rgba(251, 251, 251, 100%);\n  --clr-background: #f9f9f9;\n  --clr-blue-1: rgba(225, 239, 245, 100%);\n  --clr-blue-2: rgba(138, 211, 239, 60%);\n  --clr-blue-3: rgba(0, 159, 232, 100%);\n  --clr-blue-4: rgba(166, 208, 226, 100%);\n  --clr-white: rgba(251, 251, 251, 100%);\n  --clr-blue-border: rgba(52, 98, 137, 100%);\n  --border-radius: 2rem;\n  --fs-sm: clamp(1.28rem, 0.17vw + 1.21rem, 1.43rem);\n  --fs-base: clamp(1.6rem, 0.34vw + 1.46rem, 1.9rem);\n  --fs-md: clamp(2rem, 0.61vw + 1.76rem, 2.53rem);\n  --fs-lg: clamp(2.5rem, 1vw + 2.1rem, 3.38rem);\n  --fs-xl: clamp(3.5rem, 5rem, 6rem);\n  --letter_count: 26;\n  --word_count: 3;\n}\n\nbody {\n  background-color: var(--clr-background);\n  font-family: var(--ff-primary);\n  color: var(--font-color-primary);\n  position: relative;\n}\n\n.shark {\n  display: none;\n  position: absolute;\n  width: 170px;\n  height: 100px !important;\n  right: 5px;\n  bottom: -14px !important;\n  opacity: 0;\n}\n\n.corgi {\n  display: none;\n  position: absolute;\n  width: 70px;\n  height: 70px !important;\n  left: 5px;\n  bottom: -22px !important;\n  opacity: 0;\n}\n\n.add {\n  display: block;\n  animation: appear 300ms ease-in forwards 800ms;\n}\n\n@keyframes appear {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.modal_start-inputWrapper {\n  position: relative;\n  height: 30px;\n  margin: 10px 25px;\n  display: flex;\n}\n\ninput {\n  background: none;\n  border: solid 2px var(--clr-blue-border);\n  color: var(--fc-secondary);\n  padding: 15px 40px;\n  font-size: 18px;\n  display: inline-block;\n  transition: all 300ms ease-in-out;\n}\n\n[type=radio]:checked,\n[type=radio]:not(:checked) {\n  position: absolute;\n  left: -999px;\n}\n\n[type=radio]:checked + label,\n[type=radio]:not(:checked) + label {\n  height: 100%;\n  display: flex;\n  align-items: center;\n  position: relative;\n  padding-left: 45px;\n  cursor: pointer;\n  line-height: 20px;\n  font-size: var(--fs-base);\n  color: var(--fc-white);\n  font-family: var(--ff-primary);\n}\n\n[type=radio]:checked + label:before,\n[type=radio]:not(:checked) + label:before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 32px;\n  height: 32px;\n  border: 2px solid var(--clr-blue-border);\n  border-radius: 100%;\n  background: #fff;\n}\n\n[type=radio]:checked + label:after,\n[type=radio]:not(:checked) + label:after {\n  content: \"\";\n  width: 20px;\n  height: 20px;\n  background: var(--fc-secondary);\n  position: absolute;\n  top: 6px;\n  left: 6px;\n  border-radius: 100%;\n  transition: all 0.3s ease-in-out;\n}\n\n[type=radio]:not(:checked) + label:after {\n  opacity: 0;\n  transform: scale(0);\n}\n\n[type=radio]:checked + label:after {\n  opacity: 1;\n  transform: scale(1);\n}\n\n[type=radio]:checked ~ label {\n  transform: scale(1.2);\n  transition: all 300ms ease;\n}\n\n.word_wrapper {\n  display: none;\n}\n.word_wrapper.word_active {\n  display: flex;\n}\n\n.letters_wrapper {\n  display: none;\n}\n.letters_wrapper.letters_active {\n  display: flex;\n}\n\n.modal_start {\n  display: none;\n}\n.modal_start.start_active {\n  display: flex;\n}\n\n.animate-up {\n  animation: popUp 1000ms ease-out forwards;\n}\n\n.animate-up-2 {\n  animation: popUpSlow 800ms ease-out forwards 500ms;\n}\n\n.animate-fade-out {\n  animation: fadeOut 800ms ease-out forwards 600ms;\n}\n\n.animate-fade-in {\n  animation: fadeIn 800ms ease-in forwards 300ms;\n}\n\n@keyframes fadeIn {\n  0% {\n    opacity: 0;\n    transform: scale(0);\n  }\n  50% {\n    opacity: 1;\n    transform: scale(1.2);\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n@keyframes popUp {\n  0% {\n    transform: translate3d(0, 0, 0);\n  }\n  50% {\n    transform: translate3d(0, 200px, 0);\n  }\n  100% {\n    transform: translate3d(0, -100vh, 0);\n  }\n}\n@keyframes popUpSlow {\n  0% {\n    transform: translate3d(0, 0, 0);\n  }\n  50% {\n    transform: translate3d(0, 50px, 0);\n  }\n  100% {\n    transform: translate3d(0, -100vh, 0);\n  }\n}\n@keyframes fadeOut {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n.animate-in {\n  opacity: 0;\n  will-change: transform;\n}\n\n.animate-in:nth-child(1) {\n  animation: pop-in 100ms ease-in-out 0ms forwards;\n}\n\n.animate-in:nth-child(2) {\n  animation: pop-in 100ms ease-in-out 50ms forwards;\n}\n\n.animate-in:nth-child(3) {\n  animation: pop-in 100ms ease-in-out 100ms forwards;\n}\n\n.animate-in:nth-child(4) {\n  animation: pop-in 100ms ease-in-out 150ms forwards;\n}\n\n.animate-in:nth-child(5) {\n  animation: pop-in 100ms ease-in-out 200ms forwards;\n}\n\n.animate-in:nth-child(6) {\n  animation: pop-in 100ms ease-in-out 250ms forwards;\n}\n\n.animate-in:nth-child(7) {\n  animation: pop-in 100ms ease-in-out 300ms forwards;\n}\n\n.animate-in:nth-child(8) {\n  animation: pop-in 100ms ease-in-out 350ms forwards;\n}\n\n.animate-in:nth-child(9) {\n  animation: pop-in 100ms ease-in-out 400ms forwards;\n}\n\n.animate-in:nth-child(10) {\n  animation: pop-in 100ms ease-in-out 450ms forwards;\n}\n\n.animate-in:nth-child(11) {\n  animation: pop-in 100ms ease-in-out 500ms forwards;\n}\n\n.animate-in:nth-child(12) {\n  animation: pop-in 100ms ease-in-out 550ms forwards;\n}\n\n.animate-in:nth-child(13) {\n  animation: pop-in 100ms ease-in-out 600ms forwards;\n}\n\n.animate-in:nth-child(14) {\n  animation: pop-in 100ms ease-in-out 650ms forwards;\n}\n\n.animate-in:nth-child(15) {\n  animation: pop-in 100ms ease-in-out 700ms forwards;\n}\n\n.animate-in:nth-child(16) {\n  animation: pop-in 100ms ease-in-out 750ms forwards;\n}\n\n.animate-in:nth-child(17) {\n  animation: pop-in 100ms ease-in-out 800ms forwards;\n}\n\n.animate-in:nth-child(18) {\n  animation: pop-in 100ms ease-in-out 850ms forwards;\n}\n\n.animate-in:nth-child(19) {\n  animation: pop-in 100ms ease-in-out 900ms forwards;\n}\n\n.animate-in:nth-child(20) {\n  animation: pop-in 100ms ease-in-out 950ms forwards;\n}\n\n.animate-in:nth-child(21) {\n  animation: pop-in 100ms ease-in-out 1000ms forwards;\n}\n\n.animate-in:nth-child(22) {\n  animation: pop-in 100ms ease-in-out 1050ms forwards;\n}\n\n.animate-in:nth-child(23) {\n  animation: pop-in 100ms ease-in-out 1100ms forwards;\n}\n\n.animate-in:nth-child(24) {\n  animation: pop-in 100ms ease-in-out 1150ms forwards;\n}\n\n.animate-in:nth-child(25) {\n  animation: pop-in 100ms ease-in-out 1200ms forwards;\n}\n\n.animate-in:nth-child(26) {\n  animation: pop-in 100ms ease-in-out 1250ms forwards;\n}\n\n@keyframes pop-in {\n  0% {\n    transform: scale(0);\n    opacity: 0;\n  }\n  10% {\n    opacity: 1;\n  }\n  50% {\n    transform: scale(1.1);\n    opacity: 1;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n.letters_wrapper {\n  height: 90%;\n  margin: 1rem auto;\n  padding: 2rem;\n  justify-content: center;\n  align-items: center;\n}\n@media (min-width: 600px) {\n  .letters_wrapper {\n    width: 95%;\n  }\n}\n.letters_wrapper-container {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  max-width: 800px;\n  margin: 0 auto;\n}\n.letters_wrapper-span {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: var(--fs-lg);\n  color: var(--fc-primary);\n  border: 1px solid var(--fc-primary);\n  padding: 1rem;\n  background-color: var(--clr-white);\n  width: 40px;\n  height: 40px;\n  margin: 3px;\n  cursor: pointer;\n  box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.2);\n  border-radius: 10px;\n  transform: scale(1);\n  will-change: transform;\n  transition: transform 600ms ease-in-out, box-shadow 300ms ease-in-out;\n  transition: all 600ms ease !important;\n}\n@media (min-width: 600px) {\n  .letters_wrapper-span {\n    width: 75px;\n    height: 75px;\n    border-radius: 100%;\n    margin: 5px;\n  }\n}\n@media (min-width: 860px) {\n  .letters_wrapper-span {\n    width: 95px;\n    height: 95px;\n  }\n}\n.letters_wrapper-span:hover {\n  transform: scale(0.9);\n  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);\n}\n\n.letters_wrapper-span.match {\n  transform: scale(0.8) !important;\n  border: 2px solid #fff;\n  background-color: #31393c;\n  color: #ccc;\n}\n\n.letters_wrapper-span.no-match {\n  transform: scale(0.8) !important;\n  text-decoration: line-through;\n  background-color: #d1495b;\n  color: #fff;\n  border: 2px solid #fff;\n}\n\n.word_wrapper {\n  height: 100%;\n  justify-content: center;\n  align-items: center;\n}\n.word_wrapper-char {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: var(--fs-lg);\n  color: var(--fc-primary);\n  border: 1px solid var(--fc-primary);\n  padding: 1rem;\n  background-color: var(--clr-white);\n  font-size: var(--fs-base);\n  border-radius: 10px;\n  margin: 1px;\n  width: 28px;\n  height: 28px;\n  max-width: 80px;\n  max-height: 80px;\n}\n@media (max-width: 330px) {\n  .word_wrapper-char {\n    margin: 1px;\n    width: 23px;\n    height: 28px;\n  }\n}\n@media (min-width: 400px) and (max-width: 490px) {\n  .word_wrapper-char {\n    font-size: var(--fs-base);\n    margin: 2px;\n    width: 30px;\n    height: 30px;\n  }\n}\n@media (min-width: 491px) and (max-width: 599px) {\n  .word_wrapper-char {\n    font-size: var(--fs-md);\n    margin: 2px;\n    width: 8vw;\n    height: 8vw;\n  }\n}\n@media (min-width: 600px) {\n  .word_wrapper-char {\n    font-size: var(--fs-md);\n    margin: 3px;\n    width: 8vw;\n    height: 8vw;\n  }\n}\n\n/* //// CARD STYLES ///////////// */\n.card-wrapper {\n  display: flex;\n  perspective: 1000px;\n  transform-style: preserve-3d;\n  opacity: 0;\n  animation: popIn 500ms ease-in-out forwards 100ms;\n}\n\n.card {\n  position: relative;\n  width: 28px;\n  height: 28px;\n  max-width: 80px;\n  max-height: 80px;\n  margin: 3px;\n  background: #f6f6f6;\n  border-radius: 5px;\n  border: 1px solid #333;\n  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.2);\n  transition: all 1000ms ease-in-out;\n}\n@media (max-width: 330px) {\n  .card {\n    margin: 1px;\n    width: 23px;\n    height: 28px;\n  }\n}\n@media (min-width: 400px) and (max-width: 490px) {\n  .card {\n    font-size: var(--fs-base);\n    margin: 2px;\n    width: 30px;\n    height: 30px;\n  }\n}\n@media (min-width: 491px) and (max-width: 599px) {\n  .card {\n    font-size: var(--fs-md);\n    margin: 2px;\n    width: 8vw;\n    height: 8vw;\n  }\n}\n@media (min-width: 600px) {\n  .card {\n    font-size: var(--fs-md);\n    margin: 3px;\n    width: 8vw;\n    height: 8vw;\n  }\n}\n\n.card-front {\n  z-index: 2;\n}\n\n.flip {\n  transform: rotateX(180deg) !important;\n  transition: all 300ms ease-in-out;\n}\n\n.card {\n  backface-visibility: hidden;\n}\n\n.card-wrapper .card-front,\n.card-wrapper .card-back {\n  backface-visibility: hidden;\n  transform: rotateX(0deg);\n}\n\n.card-back {\n  color: #293241;\n}\n\n.card-front,\n.card-back {\n  border-radius: 5px;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  padding: 5px;\n  transition: all 1000ms ease-in-out;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.card-front {\n  transform: rotateX(180deg);\n  background-color: #f6f6f6;\n}\n\n@keyframes popIn {\n  0% {\n    opacity: 0;\n    transform: scale(0) translateY(-100%);\n  }\n  50% {\n    opacity: 1;\n    transform: scale(1) translateY(50%);\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n  }\n}\n.modal_start {\n  content: \"\";\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n  bottom: 1rem;\n  left: 1rem;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: calc(100vw - 2rem);\n  height: calc(100vh - 2rem);\n  border-radius: var(--border-radius);\n  background-color: transparent;\n}\n.modal_start-content {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  height: 80%;\n  align-items: center;\n  justify-content: space-around;\n  position: relative;\n}\n.modal_start-text {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 1rem 2rem;\n  position: relative;\n  z-index: 2;\n}\n.modal_start-h1 {\n  color: var(--fc-secondary);\n  font-size: var(--fs-lg);\n  margin: 1rem 2rem;\n}\n.modal_start-span {\n  color: var(--fc-black);\n  font-size: var(--fs-xl);\n}\n@media (max-width: 399px) {\n  .modal_start-span {\n    font-size: var(--fs-lg);\n  }\n}\n@media (max-width: 325px) {\n  .modal_start-span {\n    font-size: var(--fs-sm);\n  }\n}\n.modal_start-p {\n  color: var(--fc-secondary);\n  font-size: var(--fs-base);\n}\n.modal_start-p span {\n  color: var(--fc-black);\n}\n.modal_start-selectContainer {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin-top: 18vh;\n}\n@media (max-width: 399px) {\n  .modal_start-selectContainer {\n    margin-top: 21vh;\n  }\n}\n@media (max-width: 325px) {\n  .modal_start-selectContainer {\n    margin-top: 7vh;\n  }\n}\n.modal_start-selectContainer fieldset {\n  border: transparent;\n  margin-top: 1rem;\n}\n.modal_start-selectContainer legend {\n  color: var(--fc-white);\n  font-size: var(--fs-md);\n  font-family: var(--ff-primary);\n  font-weight: bold;\n  text-align: center;\n  margin: 3rem 0;\n}\n.modal_start-button {\n  margin: 10vh 0;\n  text-align: center;\n}\n.modal_start-button button {\n  width: 200px;\n  height: 50px;\n  background: var(--fc-secondary);\n  border: 1px solid transparent;\n  outline: none;\n  border-radius: 2rem;\n  color: var(--clr-white);\n  font-size: var(--fs-base);\n  cursor: pointer;\n  transition: all 300ms ease-out;\n}\n.modal_start-button button:hover {\n  color: var(--fc-secondary);\n  background: var(--clr-white);\n  border: 1px solid var(--fc-secondary);\n  transform: scale(1.2);\n  box-shadow: 10px 20px 20px rgba(0, 0, 0, 0.2);\n  font-weight: bold;\n}\n.modal_start-clouds {\n  position: absolute;\n  top: -6rem;\n  z-index: 1;\n  left: 50%;\n}\n@media (min-width: 600px) {\n  .modal_start-clouds {\n    left: 59%;\n    top: -8rem;\n  }\n}\n.modal_start-clouds img {\n  width: 150px;\n}\n@media (min-width: 600px) {\n  .modal_start-clouds img {\n    width: 200px;\n  }\n}\n\n.active_start {\n  display: flex;\n}\n\n.modal_definition {\n  content: \"\";\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n  bottom: 1rem;\n  left: 1rem;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  z-index: 2;\n  background-color: var(--clr-blue-4);\n  border-radius: var(--border-radius);\n  display: none;\n}\n.modal_inner {\n  position: relative;\n  z-index: 3;\n  background-color: var(--clr-white);\n  border-radius: var(--border-radius);\n  border: 1.5px solid var(--clr-blue-border);\n  width: 80%;\n  height: 80%;\n  max-width: 800px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  text-align: center;\n  box-shadow: 10px 10px 25px rgba(0, 0, 0, 0.3);\n  opacity: 0;\n}\n.modal_buttonClose {\n  position: absolute;\n  z-index: 5;\n  top: -5px;\n  right: -5px;\n  border: none;\n  outline: none;\n  border-radius: 100%;\n  background-color: #333;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 30px;\n  height: 30px;\n  cursor: pointer;\n  transition: all 300ms ease-in-out;\n}\n.modal_buttonClose span {\n  color: var(--clr-blue-border);\n  color: #fff;\n  display: block;\n  padding: 5px;\n  transition: all 300ms ease-in-out;\n}\n.modal_buttonClose:hover {\n  transform: scale(1.1);\n}\n.modal_buttonClose:hover span {\n  transform: rotate(-180deg);\n}\n.modal_content {\n  position: relative;\n  z-index: 2;\n  color: var(--fc-primary);\n  padding: 1rem 2rem;\n}\n.modal_content p {\n  margin: 1rem auto;\n}\n.modal_content-h2 {\n  font-size: var(--fs-xl);\n}\n.modal_content-partOfspeech {\n  color: var(--fc-secondary);\n  font-size: var(--fs-md);\n  font-weight: bold;\n}\n.modal_content-p {\n  font-size: var(--fs-base);\n}\n.modal_content-definition {\n  font-size: var(--fs-md);\n  width: 70%;\n  margin: 0 auto;\n}\n.modal_content-apiInfo {\n  font-size: var(--fs-sm);\n  padding-top: 2rem;\n}\n.modal_content-apiInfo span {\n  color: var(--fc-secondary);\n}\n\n.showDefinition {\n  display: flex;\n  animation: animateInDefinition 300ms ease-in;\n}\n\n.modal_gameOver {\n  display: none;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  bottom: 25%;\n  left: 0;\n  align-items: center;\n  justify-content: center;\n}\n.modal_gameOver-h2 {\n  font-family: var(--ff-secondary);\n  font-size: var(--fs-xl);\n  color: var(--fc-secondary);\n  animation: animateOut 400ms ease-out forwards;\n}\n\n.showModal {\n  display: flex;\n}\n\n.fadeInDef {\n  animation: show 1200ms ease-out forwards;\n}\n\n@keyframes show {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes animateOut {\n  0% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(2.5);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@keyframes animateIn {\n  0% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n@keyframes animateInDefinition {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n.corgiStart {\n  width: 75px;\n  height: auto;\n  animation: corgiStart linear 5300ms infinite both;\n}\n@media (max-width: 399px) {\n  .corgiStart {\n    width: 60px;\n  }\n}\n\n.modal_start-corgi {\n  position: absolute;\n  left: 0;\n}\n@media (min-height: 600px) and (max-height: 700px) {\n  .modal_start-corgi {\n    height: 32vh;\n  }\n}\n@media (min-height: 701px) and (max-height: 800px) {\n  .modal_start-corgi {\n    height: 31vh;\n  }\n}\n@media (min-height: 801px) and (max-height: 900px) {\n  .modal_start-corgi {\n    height: 30vh;\n  }\n}\n@media (min-height: 901px) and (max-height: 1100px) {\n  .modal_start-corgi {\n    height: 29vh;\n  }\n}\n@media (min-height: 1101px) and (max-height: 1200px) {\n  .modal_start-corgi {\n    height: 28vh;\n  }\n}\n@media (min-height: 1201px) and (max-height: 1300px) {\n  .modal_start-corgi {\n    height: 27vh;\n  }\n}\n@media (min-height: 1301px) {\n  .modal_start-corgi {\n    height: 26vh;\n  }\n}\n@media (max-width: 325px) {\n  .modal_start-corgi {\n    display: none;\n  }\n}\n\n.level-alert {\n  height: 50px;\n  width: 125%;\n  background: var(--clr-white);\n  border-radius: 25px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n}\n.level-alert p {\n  color: var(--fc-secondary);\n  font-size: var(--fs-base);\n}\n.level-alert::after {\n  content: \"\";\n  position: absolute;\n  background: var(--clr-white);\n  width: 0;\n  height: 0;\n  border-left: 2vh solid transparent;\n  border-right: 2vh solid transparent;\n  border-top: 10vh solid var(--clr-white);\n  position: absolute;\n  top: 45%;\n  left: -10%;\n  transform: rotate(60deg);\n}\n\n@keyframes moveRight {\n  0% {\n    transform: translate3d(0, 0, 0) rotate(15deg);\n  }\n  100% {\n    transform: translate3d(-600px, -150px, 0) rotate(15deg);\n  }\n}\n@keyframes moveLeft {\n  0% {\n    transform: translate3d(0, 0, 0) scale(0.6) scaleX(-1) rotate(-15deg);\n  }\n  100% {\n    transform: translate3d(600px, -50px, 0) scale(0.6) scaleX(-1) rotate(15deg);\n  }\n}\n.main {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-color: var(--clr-blue-1);\n  min-height: calc(100vh - 2rem);\n  min-width: calc(100vw - 2rem);\n  padding: 1rem;\n  margin: 1rem;\n  border: 1px solid var(--clr-blue-border);\n  border-radius: var(--border-radius);\n}\n\n.content {\n  display: grid;\n  grid-template-rows: 20vh 15vh 55vh;\n  background-color: var(--clr-blue-2);\n  border: 3px solid var(--clr-white);\n  border-radius: var(--border-radius);\n  width: 100%;\n  max-width: 1200px;\n  grid-template-columns: auto;\n}\n.content_top {\n  grid-column: 1/-1;\n  grid-row: 1;\n  position: relative;\n  z-index: 2;\n}\n.content_img {\n  grid-row: 2;\n  position: relative;\n}\n.content_img img {\n  width: 100%;\n  position: absolute;\n  right: 0;\n  bottom: -2px;\n  left: 0;\n}\n.content_bottom {\n  position: relative;\n  grid-row: 3;\n  grid-column: 1/-1;\n  background-color: var(--clr-blue-3);\n  width: 100%;\n  height: 100%;\n  border-bottom-left-radius: var(--border-radius);\n  border-bottom-right-radius: var(--border-radius);\n}\n\n.new_game_wrapper {\n  position: absolute;\n  z-index: 1;\n  bottom: 2rem;\n  right: 3rem;\n}\n.new_game_wrapper button {\n  background-color: transparent;\n  font-family: inherit;\n  border: none;\n  outline: none;\n  color: var(--clr-white);\n  font-weight: bold;\n  transition: all 300ms ease-in-out;\n  cursor: pointer;\n}\n.new_game_wrapper button:hover {\n  transform: scale(1.1);\n}\n\n.animation_container {\n  position: relative;\n  z-index: 2;\n  width: 100%;\n  height: 100%;\n  margin: 0 auto;\n}","@import url('https://fonts.googleapis.com/css2?family=Nosifer&family=Poppins:wght@300;400;700&display=swap');\n\n:root {\n\t//FONTS\n\t--ff-primary: 'Poppins', sans-serif;\n\t--ff-secondary: 'Nosifer', cursive;\n\t//FONT COLORS\n\t--fc-primary: rgba(112, 112, 112, 100%);\n\t--fc-secondary: rgba(222, 80, 80, 100%);\n\t--fc-black: rgba(45, 39, 39, 100%);\n\t--fc-white: rgba(251, 251, 251, 100%);\n\t//COLORS\n\t--clr-background: #f9f9f9;\n\t--clr-blue-1: rgba(225, 239, 245, 100%);\n\t--clr-blue-2: rgba(138, 211, 239, 60%);\n\t--clr-blue-3: rgba(0, 159, 232, 100%);\n\t--clr-blue-4: rgba(166, 208, 226, 100%);\n\t--clr-white: rgba(251, 251, 251, 100%);\n\t--clr-blue-border: rgba(52, 98, 137, 100%);\n\n\t//RADIUS\n\t--border-radius: 2rem;\n\n\t//FONT SIZES\n\t--fs-sm: clamp(1.28rem, 0.17vw + 1.21rem, 1.43rem);\n\t--fs-base: clamp(1.6rem, 0.34vw + 1.46rem, 1.9rem);\n\t--fs-md: clamp(2rem, 0.61vw + 1.76rem, 2.53rem);\n\t--fs-lg: clamp(2.5rem, 1vw + 2.1rem, 3.38rem);\n\t--fs-xl: clamp(3.5rem, 5rem, 6rem);\n\t//ANIMATIONS\n\t--letter_count: 26;\n\t--word_count: 3;\n}\n","body {\n\tbackground-color: var(--clr-background);\n\tfont-family: var(--ff-primary);\n\tcolor: var(--font-color-primary);\n\tposition: relative;\n}\n\n.shark {\n\tdisplay: none;\n\tposition: absolute;\n\twidth: 170px;\n\theight: 100px !important;\n\tright: 5px;\n\tbottom: -14px !important;\n\topacity: 0;\n}\n.corgi {\n\tdisplay: none;\n\tposition: absolute;\n\twidth: 70px;\n\theight: 70px !important;\n\tleft: 5px;\n\tbottom: -22px !important;\n\topacity: 0;\n}\n.add {\n\tdisplay: block;\n\tanimation: appear 300ms ease-in forwards 800ms;\n}\n\n@keyframes appear {\n\tfrom {\n\t\topacity: 0;\n\t}\n\tto {\n\t\topacity: 1;\n\t}\n}\n","@import './mixins';\n//RADIO BUTTON STYLES\n\n.modal_start-inputWrapper {\n\tposition: relative;\n\theight: 30px;\n\tmargin: 10px 25px;\n\tdisplay: flex;\n}\ninput {\n\tbackground: none;\n\tborder: solid 2px var(--clr-blue-border);\n\tcolor: var(--fc-secondary);\n\tpadding: 15px 40px;\n\tfont-size: 18px;\n\tdisplay: inline-block;\n\ttransition: all 300ms ease-in-out;\n}\n[type='radio']:checked,\n[type='radio']:not(:checked) {\n\tposition: absolute;\n\tleft: -999px;\n}\n\n[type='radio']:checked + label,\n[type='radio']:not(:checked) + label {\n\theight: 100%;\n\tdisplay: flex;\n\talign-items: center;\n\tposition: relative;\n\tpadding-left: 45px;\n\tcursor: pointer;\n\tline-height: 20px;\n\tfont-size: var(--fs-base);\n\tcolor: var(--fc-white);\n\tfont-family: var(--ff-primary);\n}\n\n[type='radio']:checked + label:before,\n[type='radio']:not(:checked) + label:before {\n\tcontent: '';\n\tposition: absolute;\n\tleft: 0;\n\ttop: 0;\n\twidth: 32px;\n\theight: 32px;\n\tborder: 2px solid var(--clr-blue-border);\n\tborder-radius: 100%;\n\tbackground: #fff;\n}\n\n[type='radio']:checked + label:after,\n[type='radio']:not(:checked) + label:after {\n\tcontent: '';\n\twidth: 20px;\n\theight: 20px;\n\tbackground: var(--fc-secondary);\n\t// background: #21a1e1;\n\tposition: absolute;\n\ttop: 6px;\n\tleft: 6px;\n\tborder-radius: 100%;\n\ttransition: all 0.3s ease-in-out;\n}\n\n[type='radio']:not(:checked) + label:after {\n\topacity: 0;\n\ttransform: scale(0);\n}\n\n[type='radio']:checked + label:after {\n\topacity: 1;\n\ttransform: scale(1);\n}\n\n[type='radio']:checked ~ label {\n\ttransform: scale(1.2);\n\ttransition: all 300ms ease;\n}\n",".word_wrapper {\n\tdisplay: none;\n\n\t&.word_active {\n\t\tdisplay: flex;\n\t}\n}\n\n.letters_wrapper {\n\tdisplay: none;\n\t&.letters_active {\n\t\tdisplay: flex;\n\t}\n}\n\n.modal_start {\n\tdisplay: none;\n\t&.start_active {\n\t\tdisplay: flex;\n\t}\n}\n\n.animate-up {\n\tanimation: popUp 1000ms ease-out forwards;\n}\n.animate-up-2 {\n\tanimation: popUpSlow 800ms ease-out forwards 500ms;\n}\n\n.animate-fade-out {\n\tanimation: fadeOut 800ms ease-out forwards 600ms;\n}\n\n.animate-fade-in {\n\tanimation: fadeIn 800ms ease-in forwards 300ms;\n}\n\n@keyframes fadeIn {\n\t0% {\n\t\topacity: 0;\n\t\ttransform: scale(0);\n\t}\n\t50% {\n\t\topacity: 1;\n\t\ttransform: scale(1.2);\n\t}\n\t100% {\n\t\topacity: 1;\n\t\ttransform: scale(1);\n\t}\n}\n\n@keyframes popUp {\n\t0% {\n\t\ttransform: translate3d(0, 0, 0);\n\t}\n\t50% {\n\t\ttransform: translate3d(0, 200px, 0);\n\t}\n\n\t100% {\n\t\ttransform: translate3d(0, -100vh, 0);\n\t}\n}\n\n@keyframes popUpSlow {\n\t0% {\n\t\ttransform: translate3d(0, 0, 0);\n\t}\n\t50% {\n\t\ttransform: translate3d(0, 50px, 0);\n\t}\n\n\t100% {\n\t\ttransform: translate3d(0, -100vh, 0);\n\t}\n}\n@keyframes fadeOut {\n\t0% {\n\t\topacity: 1;\n\t}\n\t100% {\n\t\topacity: 0;\n\t}\n}\n","@import './mixins';\n//ANIMATIONS FOR LETTERS ON LOAD\n.animate-in {\n\topacity: 0;\n\twill-change: transform;\n}\n\n$duration: 100ms;\n$easing: ease-in-out;\n\n@for $i from 1 through 26 {\n\t$delay: ($i - 1) * 50ms;\n\t.animate-in:nth-child(#{$i}) {\n\t\tanimation: pop-in #{$duration} #{$easing} #{$delay} forwards;\n\t}\n}\n\n@keyframes pop-in {\n\t0% {\n\t\ttransform: scale(0);\n\t\topacity: 0;\n\t}\n\t10% {\n\t\topacity: 1;\n\t}\n\t50% {\n\t\ttransform: scale(1.1);\n\t\topacity: 1;\n\t}\n\n\t100% {\n\t\topacity: 1;\n\t}\n}\n//LETTERS\n.letters_wrapper {\n\theight: 90%;\n\tmargin: 1rem auto;\n\tpadding: 2rem;\n\tjustify-content: center;\n\talign-items: center;\n\t@include desktop {\n\t\twidth: 95%;\n\t}\n\n\t&-container {\n\t\tdisplay: flex;\n\t\tflex-wrap: wrap;\n\t\tjustify-content: center;\n\t\tmax-width: 800px;\n\t\tmargin: 0 auto;\n\t}\n\t&-span {\n\t\t@include letterStyle;\n\t\twidth: 40px;\n\t\theight: 40px;\n\t\tmargin: 3px;\n\t\tcursor: pointer;\n\t\tbox-shadow: 10px 10px 15px rgba(0, 0, 0, 0.2);\n\t\tborder-radius: 10px;\n\t\ttransform: scale(1);\n\t\twill-change: transform;\n\t\ttransition: transform 600ms ease-in-out, box-shadow 300ms ease-in-out;\n\t\ttransition: all 600ms ease !important;\n\t\t@include desktop {\n\t\t\twidth: 75px;\n\t\t\theight: 75px;\n\t\t\tborder-radius: 100%;\n\t\t\tmargin: 5px;\n\t\t}\n\t\t@include largeDesktop {\n\t\t\twidth: 95px;\n\t\t\theight: 95px;\n\t\t}\n\t\t&:hover {\n\t\t\ttransform: scale(0.9);\n\t\t\tbox-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);\n\t\t}\n\t}\n}\n\n.letters_wrapper-span.match {\n\ttransform: scale(0.8) !important;\n\tborder: 2px solid #fff;\n\tbackground-color: #31393c;\n\tcolor: #ccc;\n}\n.letters_wrapper-span.no-match {\n\ttransform: scale(0.8) !important;\n\ttext-decoration: line-through;\n\tbackground-color: #d1495b;\n\tcolor: #fff;\n\tborder: 2px solid #fff;\n}\n//WORD\n.word_wrapper {\n\theight: 100%;\n\tjustify-content: center;\n\talign-items: center;\n\n\t&-char {\n\t\t@include letterStyle;\n\t\tfont-size: var(--fs-base);\n\t\tborder-radius: 10px;\n\t\tmargin: 1px;\n\t\twidth: 28px;\n\t\theight: 28px;\n\t\tmax-width: 80px;\n\t\tmax-height: 80px;\n\t\t@include smallScreen {\n\t\t\tmargin: 1px;\n\t\t\twidth: 23px;\n\t\t\theight: 28px;\n\t\t}\n\t\t@include mediumScreen {\n\t\t\tfont-size: var(--fs-base);\n\t\t\tmargin: 2px;\n\t\t\twidth: 30px;\n\t\t\theight: 30px;\n\t\t}\n\t\t@include largeScreen {\n\t\t\tfont-size: var(--fs-md);\n\t\t\tmargin: 2px;\n\t\t\twidth: 8vw;\n\t\t\theight: 8vw;\n\t\t}\n\t\t@include desktop {\n\t\t\tfont-size: var(--fs-md);\n\t\t\tmargin: 3px;\n\t\t\twidth: 8vw;\n\t\t\theight: 8vw;\n\t\t}\n\t}\n}\n\n/* //// CARD STYLES ///////////// */\n.card-wrapper {\n\tdisplay: flex;\n\tperspective: 1000px;\n\ttransform-style: preserve-3d;\n\topacity: 0;\n\tanimation: popIn 500ms ease-in-out forwards 100ms;\n}\n.card {\n\tposition: relative;\n\twidth: 28px;\n\theight: 28px;\n\tmax-width: 80px;\n\tmax-height: 80px;\n\tmargin: 3px;\n\tbackground: #f6f6f6;\n\tborder-radius: 5px;\n\tborder: 1px solid #333;\n\tbox-shadow: 10px 10px 20px rgba(0, 0, 0, 0.2);\n\ttransition: all 1000ms ease-in-out;\n\t@include smallScreen {\n\t\tmargin: 1px;\n\t\twidth: 23px;\n\t\theight: 28px;\n\t}\n\t@include mediumScreen {\n\t\tfont-size: var(--fs-base);\n\t\tmargin: 2px;\n\t\twidth: 30px;\n\t\theight: 30px;\n\t}\n\t@include largeScreen {\n\t\tfont-size: var(--fs-md);\n\t\tmargin: 2px;\n\t\twidth: 8vw;\n\t\theight: 8vw;\n\t}\n\t@include desktop {\n\t\tfont-size: var(--fs-md);\n\t\tmargin: 3px;\n\t\twidth: 8vw;\n\t\theight: 8vw;\n\t}\n}\n.card-front {\n\tz-index: 2;\n}\n.flip {\n\ttransform: rotateX(180deg) !important;\n\ttransition: all 300ms ease-in-out;\n}\n.card {\n\tbackface-visibility: hidden;\n}\n.card-wrapper .card-front,\n.card-wrapper .card-back {\n\tbackface-visibility: hidden;\n\ttransform: rotateX(0deg);\n}\n.card-back {\n\tcolor: #293241;\n}\n.card-front,\n.card-back {\n\tborder-radius: 5px;\n\tposition: absolute;\n\ttop: 0;\n\tright: 0;\n\tbottom: 0;\n\tleft: 0;\n\twidth: 100%;\n\theight: 100%;\n\tpadding: 5px;\n\ttransition: all 1000ms ease-in-out;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n}\n.card-front {\n\ttransform: rotateX(180deg);\n\tbackground-color: #f6f6f6;\n}\n\n/////ANIMATIONS\n\n@keyframes popIn {\n\t0% {\n\t\topacity: 0;\n\t\ttransform: scale(0) translateY(-100%);\n\t}\n\n\t50% {\n\t\topacity: 1;\n\t\ttransform: scale(1) translateY(50%);\n\t}\n\n\t100% {\n\t\topacity: 1;\n\t\ttransform: scale(1) translateY(0);\n\t}\n}\n","@mixin modalStyles {\n\tcontent: '';\n\tposition: absolute;\n\ttop: 1rem;\n\tright: 1rem;\n\tbottom: 1rem;\n\tleft: 1rem;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n}\n@mixin flexColumn {\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n}\n@mixin flexCenter {\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n}\n\n@mixin letterStyle {\n\t@include flexCenter;\n\tfont-size: var(--fs-lg);\n\tcolor: var(--fc-primary);\n\tborder: 1px solid var(--fc-primary);\n\tpadding: 1rem;\n\tbackground-color: var(--clr-white);\n}\n@mixin windowSize {\n\twidth: calc(100vw - 2rem);\n\theight: calc(100vh - 2rem);\n}\n//MEDIA QUERIES\n@mixin smallScreen {\n\t@media (max-width: 330px) {\n\t\t@content;\n\t}\n}\n@mixin verySmallScreen {\n\t@media (max-width: 325px) {\n\t\t@content;\n\t}\n}\n@mixin phoneSmallScreen {\n\t@media (max-width: 399px) {\n\t\t@content;\n\t}\n}\n@mixin mediumScreen {\n\t@media (min-width: 400px) and (max-width: 490px) {\n\t\t@content;\n\t}\n}\n@mixin largeScreen {\n\t@media (min-width: 491px) and (max-width: 599px) {\n\t\t@content;\n\t}\n}\n@mixin desktop {\n\t@media (min-width: 600px) {\n\t\t@content;\n\t}\n}\n\n@mixin largeDesktop {\n\t@media (min-width: 860px) {\n\t\t@content;\n\t}\n}\n\n@mixin sharkAndDogHeight {\n\t@media (min-height: 600px) and (max-height: 700px) {\n\t\theight: 32vh;\n\t}\n\t@media (min-height: 701px) and (max-height: 800px) {\n\t\theight: 31vh;\n\t}\n\t@media (min-height: 801px) and (max-height: 900px) {\n\t\theight: 30vh;\n\t}\n\t@media (min-height: 901px) and (max-height: 1100px) {\n\t\theight: 29vh;\n\t}\n\t@media (min-height: 1101px) and (max-height: 1200px) {\n\t\theight: 28vh;\n\t}\n\t@media (min-height: 1201px) and (max-height: 1300px) {\n\t\theight: 27vh;\n\t}\n\t@media (min-height: 1301px) {\n\t\theight: 26vh;\n\t}\n}\n","@import './mixins';\n//START MODAL\n.modal_start {\n\t@include modalStyles;\n\t@include windowSize;\n\tborder-radius: var(--border-radius);\n\tbackground-color: transparent;\n\n\t&-content {\n\t\t@include flexColumn;\n\t\theight: 80%;\n\t\talign-items: center;\n\t\tjustify-content: space-around;\n\t\tposition: relative;\n\t}\n\t&-text {\n\t\t@include flexColumn;\n\t\talign-items: center;\n\t\tpadding: 1rem 2rem;\n\t\tposition: relative;\n\t\tz-index: 2;\n\t}\n\t&-h1 {\n\t\tcolor: var(--fc-secondary);\n\t\tfont-size: var(--fs-lg);\n\t\tmargin: 1rem 2rem;\n\t}\n\t&-span {\n\t\tcolor: var(--fc-black);\n\t\tfont-size: var(--fs-xl);\n\t\t@include phoneSmallScreen {\n\t\t\tfont-size: var(--fs-lg);\n\t\t}\n\t\t@include verySmallScreen {\n\t\t\tfont-size: var(--fs-sm);\n\t\t}\n\t}\n\t&-p {\n\t\tcolor: var(--fc-secondary);\n\t\tfont-size: var(--fs-base);\n\t\tspan {\n\t\t\tcolor: var(--fc-black);\n\t\t}\n\t}\n\t&-selectContainer {\n\t\t@include flexColumn;\n\t\tmargin-top: 18vh;\n\t\t@include phoneSmallScreen {\n\t\t\tmargin-top: 21vh;\n\t\t}\n\t\t@include verySmallScreen {\n\t\t\tmargin-top: 7vh;\n\t\t}\n\t\tfieldset {\n\t\t\tborder: transparent;\n\t\t\tmargin-top: 1rem;\n\t\t}\n\t\tlegend {\n\t\t\tcolor: var(--fc-white);\n\t\t\tfont-size: var(--fs-md);\n\t\t\tfont-family: var(--ff-primary);\n\t\t\tfont-weight: bold;\n\t\t\ttext-align: center;\n\t\t\tmargin: 3rem 0;\n\t\t}\n\t}\n\t&-button {\n\t\tmargin: 10vh 0;\n\t\ttext-align: center;\n\t\t& button {\n\t\t\twidth: 200px;\n\t\t\theight: 50px;\n\t\t\tbackground: var(--fc-secondary);\n\t\t\tborder: 1px solid transparent;\n\t\t\toutline: none;\n\t\t\tborder-radius: 2rem;\n\t\t\tcolor: var(--clr-white);\n\t\t\tfont-size: var(--fs-base);\n\t\t\tcursor: pointer;\n\t\t\ttransition: all 300ms ease-out;\n\t\t\t&:hover {\n\t\t\t\tcolor: var(--fc-secondary);\n\t\t\t\tbackground: var(--clr-white);\n\t\t\t\tborder: 1px solid var(--fc-secondary);\n\t\t\t\ttransform: scale(1.2);\n\t\t\t\tbox-shadow: 10px 20px 20px rgba(0, 0, 0, 0.2);\n\t\t\t\tfont-weight: bold;\n\t\t\t}\n\t\t}\n\t}\n\t&-clouds {\n\t\tposition: absolute;\n\t\ttop: -6rem;\n\t\tz-index: 1;\n\t\tleft: 50%;\n\t\t@include desktop {\n\t\t\tleft: 59%;\n\t\t\ttop: -8rem;\n\t\t}\n\n\t\timg {\n\t\t\twidth: 150px;\n\t\t\t@include desktop {\n\t\t\t\twidth: 200px;\n\t\t\t}\n\t\t}\n\t}\n}\n\n.active_start {\n\tdisplay: flex;\n}\n//MW API DEFINITION MODAL\n.modal {\n\t&_definition {\n\t\t@include modalStyles;\n\t\tz-index: 2;\n\t\tbackground-color: var(--clr-blue-4);\n\t\tborder-radius: var(--border-radius);\n\t\tdisplay: none;\n\t}\n\n\t&_inner {\n\t\tposition: relative;\n\t\tz-index: 3;\n\t\tbackground-color: var(--clr-white);\n\t\tborder-radius: var(--border-radius);\n\t\tborder: 1.5px solid var(--clr-blue-border);\n\t\twidth: 80%;\n\t\theight: 80%;\n\t\tmax-width: 800px;\n\t\t@include flexColumn;\n\t\ttext-align: center;\n\t\tbox-shadow: 10px 10px 25px rgba(0, 0, 0, 0.3);\n\t\topacity: 0;\n\t}\n\t&_buttonClose {\n\t\tposition: absolute;\n\t\tz-index: 5;\n\t\ttop: -5px;\n\t\tright: -5px;\n\t\tborder: none;\n\t\toutline: none;\n\t\tborder-radius: 100%;\n\t\tbackground-color: #333;\n\t\t@include flexColumn;\n\t\talign-items: center;\n\t\twidth: 30px;\n\t\theight: 30px;\n\t\tcursor: pointer;\n\t\ttransition: all 300ms ease-in-out;\n\n\t\tspan {\n\t\t\tcolor: var(--clr-blue-border);\n\t\t\tcolor: #fff;\n\t\t\tdisplay: block;\n\t\t\tpadding: 5px;\n\t\t\ttransition: all 300ms ease-in-out;\n\t\t}\n\t\t&:hover {\n\t\t\ttransform: scale(1.1);\n\n\t\t\tspan {\n\t\t\t\ttransform: rotate(-180deg);\n\t\t\t}\n\t\t}\n\t}\n\t&_content {\n\t\tposition: relative;\n\t\tz-index: 2;\n\t\tcolor: var(--fc-primary);\n\t\tpadding: 1rem 2rem;\n\t\tp {\n\t\t\tmargin: 1rem auto;\n\t\t}\n\n\t\t&-h2 {\n\t\t\tfont-size: var(--fs-xl);\n\t\t}\n\t\t&-partOfspeech {\n\t\t\tcolor: var(--fc-secondary);\n\t\t\tfont-size: var(--fs-md);\n\t\t\tfont-weight: bold;\n\t\t}\n\t\t&-p {\n\t\t\tfont-size: var(--fs-base);\n\t\t}\n\t\t&-definition {\n\t\t\tfont-size: var(--fs-md);\n\t\t\twidth: 70%;\n\t\t\tmargin: 0 auto;\n\t\t}\n\t\t&-apiInfo {\n\t\t\tfont-size: var(--fs-sm);\n\t\t\tpadding-top: 2rem;\n\n\t\t\tspan {\n\t\t\t\tcolor: var(--fc-secondary);\n\t\t\t}\n\t\t}\n\t}\n}\n\n.showDefinition {\n\tdisplay: flex;\n\tanimation: animateInDefinition 300ms ease-in;\n}\n.modal_gameOver {\n\tdisplay: none;\n\twidth: 100%;\n\theight: 100%;\n\tposition: absolute;\n\tbottom: 25%;\n\tleft: 0;\n\talign-items: center;\n\tjustify-content: center;\n\n\t&-h2 {\n\t\tfont-family: var(--ff-secondary);\n\t\tfont-size: var(--fs-xl);\n\t\tcolor: var(--fc-secondary);\n\t\tanimation: animateOut 400ms ease-out forwards;\n\t}\n}\n.showModal {\n\tdisplay: flex;\n}\n\n.fadeInDef {\n\tanimation: show 1200ms ease-out forwards;\n}\n\n@keyframes show {\n\tfrom {\n\t\topacity: 0;\n\t}\n\tto {\n\t\topacity: 1;\n\t}\n}\n\n@keyframes animateOut {\n\t0% {\n\t\ttransform: scale(1);\n\t}\n\t50% {\n\t\ttransform: scale(2.5);\n\t}\n\t100% {\n\t\ttransform: scale(1);\n\t\t// opacity: 0;\n\t}\n}\n@keyframes animateIn {\n\t0% {\n\t\topacity: 0;\n\t}\n\t50% {\n\t\topacity: 0;\n\t}\n\t100% {\n\t\topacity: 0;\n\t}\n}\n\n@keyframes animateInDefinition {\n\t0% {\n\t\topacity: 0;\n\t}\n\n\t100% {\n\t\topacity: 1;\n\t}\n}\n\n.corgiStart {\n\twidth: 75px;\n\theight: auto;\n\tanimation: corgiStart linear 5300ms infinite both;\n\t@include phoneSmallScreen {\n\t\twidth: 60px;\n\t}\n}\n.modal_start-corgi {\n\tposition: absolute;\n\tleft: 0;\n\t@include sharkAndDogHeight;\n\t@include verySmallScreen {\n\t\tdisplay: none;\n\t}\n}\n//GAME LEVEL START ALERT\n.level-alert {\n\theight: 50px;\n\twidth: 125%;\n\tbackground: var(--clr-white);\n\tborder-radius: 25px;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tposition: relative;\n\n\tp {\n\t\tcolor: var(--fc-secondary);\n\t\tfont-size: var(--fs-base);\n\t}\n\n\t&::after {\n\t\tcontent: '';\n\t\tposition: absolute;\n\t\tbackground: var(--clr-white);\n\t\twidth: 0;\n\t\theight: 0;\n\t\tborder-left: 2vh solid transparent;\n\t\tborder-right: 2vh solid transparent;\n\t\tborder-top: 10vh solid var(--clr-white);\n\t\tposition: absolute;\n\t\ttop: 45%;\n\t\tleft: -10%;\n\t\ttransform: rotate(60deg);\n\t}\n}\n\n@keyframes moveRight {\n\t0% {\n\t\ttransform: translate3d(0, 0, 0) rotate(15deg);\n\t}\n\t100% {\n\t\ttransform: translate3d(-600px, -150px, 0) rotate(15deg);\n\t}\n}\n\n@keyframes moveLeft {\n\t0% {\n\t\ttransform: translate3d(0, 0, 0) scale(0.6) scaleX(-1) rotate(-15deg);\n\t}\n\t100% {\n\t\ttransform: translate3d(600px, -50px, 0) scale(0.6) scaleX(-1) rotate(15deg);\n\t}\n}\n","@import './mixins';\n.main {\n\t@include flexColumn;\n\talign-items: center;\n\tbackground-color: var(--clr-blue-1);\n\tmin-height: calc(100vh - 2rem);\n\tmin-width: calc(100vw - 2rem);\n\tpadding: 1rem;\n\tmargin: 1rem;\n\tborder: 1px solid var(--clr-blue-border);\n\tborder-radius: var(--border-radius);\n}\n.content {\n\tdisplay: grid;\n\tgrid-template-rows: 20vh 15vh 55vh;\n\tbackground-color: var(--clr-blue-2);\n\tborder: 3px solid var(--clr-white);\n\tborder-radius: var(--border-radius);\n\twidth: 100%;\n\tmax-width: 1200px;\n\tgrid-template-columns: auto;\n\t&_top {\n\t\tgrid-column: 1 / -1;\n\t\tgrid-row: 1;\n\t\tposition: relative;\n\t\tz-index: 2;\n\t}\n\t&_img {\n\t\tgrid-row: 2;\n\t\tposition: relative;\n\t\timg {\n\t\t\twidth: 100%;\n\t\t\tposition: absolute;\n\t\t\tright: 0;\n\t\t\tbottom: -2px;\n\t\t\tleft: 0;\n\t\t}\n\t}\n\n\t&_bottom {\n\t\tposition: relative;\n\t\tgrid-row: 3;\n\t\tgrid-column: 1 / -1;\n\t\tbackground-color: var(--clr-blue-3);\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\tborder-bottom-left-radius: var(--border-radius);\n\t\tborder-bottom-right-radius: var(--border-radius);\n\t}\n}\n\n.new_game_wrapper {\n\tposition: absolute;\n\tz-index: 1;\n\tbottom: 2rem;\n\tright: 3rem;\n\n\tbutton {\n\t\tbackground-color: transparent;\n\t\tfont-family: inherit;\n\t\tborder: none;\n\t\toutline: none;\n\t\tcolor: var(--clr-white);\n\t\tfont-weight: bold;\n\t\ttransition: all 300ms ease-in-out;\n\t\tcursor: pointer;\n\n\t\t&:hover {\n\t\t\ttransform: scale(1.1);\n\t\t}\n\t}\n}\n.animation_container {\n\tposition: relative;\n\tz-index: 2;\n\twidth: 100%;\n\theight: 100%;\n\tmargin: 0 auto;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/clouds.png":
/*!*******************************!*\
  !*** ./src/assets/clouds.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "clouds.png";

/***/ }),

/***/ "./src/assets/corgi.gif":
/*!******************************!*\
  !*** ./src/assets/corgi.gif ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "corgi.gif";

/***/ }),

/***/ "./src/assets/shark.gif":
/*!******************************!*\
  !*** ./src/assets/shark.gif ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "shark.gif";

/***/ }),

/***/ "./src/assets/waves-4.svg":
/*!********************************!*\
  !*** ./src/assets/waves-4.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "waves-4.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_words_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/words.js */ "./src/js/words.js");
/* harmony import */ var _js_modalStart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/modalStart.js */ "./src/js/modalStart.js");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/main.scss */ "./src/styles/main.scss");
/* harmony import */ var _assets_waves_4_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/waves-4.svg */ "./src/assets/waves-4.svg");
/* harmony import */ var _assets_clouds_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/clouds.png */ "./src/assets/clouds.png");
/* harmony import */ var _assets_corgi_gif__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/corgi.gif */ "./src/assets/corgi.gif");
/* harmony import */ var _assets_shark_gif__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/shark.gif */ "./src/assets/shark.gif");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }








console.log(_assets_clouds_png__WEBPACK_IMPORTED_MODULE_4__);
document.addEventListener('DOMContentLoaded', function () {
  //IMPORT FOR WAVES
  var wavesIMG = document.getElementById('wavesIMG');
  wavesIMG.src = _assets_waves_4_svg__WEBPACK_IMPORTED_MODULE_3__;
  var modalContainer = document.getElementById('modalStart');
  modalContainer.innerHTML = _js_modalStart_js__WEBPACK_IMPORTED_MODULE_1__.modal;
  //IMPORT FOR CLOUDS
  var cloudsIMG = document.getElementById('cloudsIMG');
  cloudsIMG.src = _assets_clouds_png__WEBPACK_IMPORTED_MODULE_4__;
  //IMPORT CORGI ON START MODAL
  var startCorgiIMG = document.getElementById('startCorgiIMG');
  startCorgiIMG.src = _assets_corgi_gif__WEBPACK_IMPORTED_MODULE_5__;
  //IMPORT CORGI
  var corgiIMG = document.getElementById('corgi');
  corgiIMG.src = _assets_corgi_gif__WEBPACK_IMPORTED_MODULE_5__;
  //SHARK
  var sharkIMG = document.getElementById('shark');
  sharkIMG.src = _assets_shark_gif__WEBPACK_IMPORTED_MODULE_6__;
});
var word_wrapper = document.querySelector('.word_wrapper');
//LETTERS WRAPPER
var letters_wrapper = document.querySelector('.letters_wrapper');
//LETTERS
var lettersContainer = document.getElementById('lettersContainer');
//LETTER

//DOM ELEMENTS FOR START MODAL
var modal_start = document.querySelector('.modal_start');
var modalStart = document.getElementById('modalStart');
//DOM ELEMENTS FOR MODAL START TEXT
var modalStartH1 = document.getElementsByClassName('modal_start-h1');
var modalStartP = document.getElementsByClassName('modal_start-p');
// const modalStartClouds = document.querySelector('.modal_start-clouds');
var modalStartContent = document.getElementsByClassName('modal_start-content');
//DOM ELEMENTS FOR CORGI & SHARK
var modalStartCorgi = document.getElementsByClassName('modal_start-corgi');

//DOM ELEMENTS FOR GAME OVER MODAL
var gameOverModal = document.getElementById('gameOver');
//DOM ELEMENTS FOR DEFINITION MODAL
// const modalDefinition = document.getElementById('modalDefiition');
// const definitionInnerContainer = getElementsByClassName('modal_inner');
//DOM ELEMENTS FOR CORGI & SHARK

var corgiGIF = document.querySelector('.corgi');
var sharkGIF = document.querySelector('.shark');

//DOM ELEMENT FOR RESET BUTTON
var new_game = document.getElementById('newGame');
//GLOBAL VARAIBLS
var newWord;
var chosenWord;
var newArray = [];
var lettersArray = [];
var selectedLettersArray = [];
var incorrectLettersArray = [];
var correctWords = [];
var allWords = [];
var wrongWords = [];
var level;
window.onload = function () {
  modalStartDOM();
  startGame();
  radioCheck();
};
var modalStartDOM = function modalStartDOM() {
  // modalStart.insertAdjacentHTML('beforeend', modal);
  modal_start.classList.add('start_active');
};
//#2 arrray() runs then selects random word from list of words in array
var array = function array(arr) {
  newArray = [];
  if (arr) {
    arr.map(function (words) {
      newArray.push(words);
    });
    randomWord();
    console.log('array', newArray);
  }
};
// #3 randomWord() is chosen from array of words
var randomWord = function randomWord() {
  chosenWord = newArray[Math.floor(Math.random() * newArray.length)];
  console.log('chosen word:', chosenWord);
  return chosenWord;
};
/// #1 - selecting level runs array()
var radioCheck = function radioCheck() {
  var checked = Array.from(document.getElementsByClassName('radio_group'));
  if (checked) {
    checked.map(function (radio) {
      radio.addEventListener('click', function (e) {
        var input = e.target.id;
        switch (input) {
          case 'levelOne':
            array(_js_words_js__WEBPACK_IMPORTED_MODULE_0__.beginnerWordArray);
            level = 'beginner';
            levelSelect = true;
            break;
          case 'levelTwo':
            array(_js_words_js__WEBPACK_IMPORTED_MODULE_0__.mediumWordArray);
            level = 'medium';
            levelSelect = true;
            break;
          case 'levelThree':
            array(_js_words_js__WEBPACK_IMPORTED_MODULE_0__.advancedWordArray);
            level = 'hard';
            levelSelect = true;
            break;
          default:
            array(_js_words_js__WEBPACK_IMPORTED_MODULE_0__.beginnerWordArray);
        }
        console.log('level', level);
      });
    });
  }
};
var levelSelect = false;

// #4 chosen randomWord is sepearated into letters and then inserted into DOM & individual letteres in pushed into letteresArray
//INSERT WORD INTO DOM
var insertWordToDom = function insertWordToDom() {
  for (var i = 0; i < chosenWord.length; i++) {
    var _char = chosenWord[i].toLowerCase();
    newWord = " <div class=\"card-wrapper\">\n                  <div class=\"card\">\n                    <div class=\"card-front\"></div>\n                    <div class=\"card-back\">".concat(_char, "</div>\n                  </div>\n                </div>");
    lettersArray.push(_char);
    word_wrapper.insertAdjacentHTML('beforeend', newWord);
  }
};
console.log('letters', lettersArray);

// #5 on button click, insertWordToDom() is run
///START GAME

var startGame = function startGame() {
  newArray = [];
  var start_button = document.getElementById('startButton');
  if (start_button) {
    start_button.addEventListener('click', function () {
      console.log('start clicked & level select', levelSelect);
      if (levelSelect) {
        // reset();
        array();
        insertWordToDom();
        modalStartAnimateClasses();
        setTimeout(function () {
          modal_start.classList.remove('start_active');
          word_wrapper.classList.add('word_active');
          letters_wrapper.classList.add('letters_active');
          corgiGIF.classList.add('add');
          sharkGIF.classList.add('add');
          keyboard();
        }, 1300);
      } else {
        alert('select level');
      }
    });
  }
};
var modalStartAnimateClasses = function modalStartAnimateClasses() {
  for (var i = 0; i < modalStartH1.length; i++) {
    modalStartH1[i].classList.add('animate-up');
  }
  for (var _i = 0; _i < modalStartP.length; _i++) {
    modalStartP[_i].classList.add('animate-up-2');
  }
  for (var _i2 = 0; _i2 < modalStartCorgi.length; _i2++) {
    modalStartCorgi[_i2].classList.add('animate-up-2');
  }
  for (var _i3 = 0; _i3 < modalStartContent.length; _i3++) {
    modalStartContent[_i3].classList.add('animate-fade-out');
  }
};
var removeAnimateClasses = function removeAnimateClasses() {
  for (var i = 0; i < modalStartH1.length; i++) {
    modalStartH1[i].classList.remove('animate-up');
  }
  for (var _i4 = 0; _i4 < modalStartP.length; _i4++) {
    modalStartP[_i4].classList.remove('animate-up-2');
  }
  for (var _i5 = 0; _i5 < modalStartCorgi.length; _i5++) {
    modalStartCorgi[_i5].classList.remove('animate-up-2');
  }
  for (var _i6 = 0; _i6 < modalStartContent.length; _i6++) {
    modalStartContent[_i6].classList.remove('animate-fade-out');
  }
};

//INSERTS LETTERS INTO DOM AT GAME START animate-in
var keyboard = function keyboard() {
  var letter;
  _js_words_js__WEBPACK_IMPORTED_MODULE_0__.letters.map(function (_char2) {
    letter = "<span class=\"letters_wrapper-span\">".concat(_char2, "</span>");
    lettersContainer.insertAdjacentHTML('beforeend', letter);
  });
  var lettersWrapperSpans = document.querySelectorAll('.letters_wrapper-span');
  for (var i = 0; i < lettersWrapperSpans.length; i++) {
    lettersWrapperSpans[i].classList.add('animate-in');
  }
  var _loop = function _loop() {
    var key = lettersWrapperSpans[_i7];
    key.addEventListener('click', function (e) {
      var item = e.target.innerText;
      var nw = chosenWord.toLowerCase();
      var foundMatch = false;
      for (var _i8 = 0; _i8 < nw.length; _i8++) {
        if (nw[_i8] === item) {
          selectedLettersArray.push(item);
          console.log('sla', selectedLettersArray);
          switchCard(_i8);
          key.classList.add('match');
          foundMatch = true;
        }
      }
      if (!foundMatch) {
        incorrectLettersArray.push(item);
        key.classList.add('no-match');
        move();
        setTimeout(function () {
          collisionAlert(corgiGIF, sharkGIF);
        }, 300);
        console.log('icl', incorrectLettersArray);
      }
      compareArrays(lettersArray, selectedLettersArray);
    });
  };
  for (var _i7 = 0; _i7 < lettersWrapperSpans.length; _i7++) {
    _loop();
  }
};
var switchCard = function switchCard(i) {
  var cardFront = document.querySelectorAll('.card-front');
  cardFront[i].classList.add('flip');
};

/////MOVE AND DETECT COLLISION
var move = function move() {
  var ranNum1 = Math.floor(Math.random() * 300);
  var ranNum2 = Math.floor(Math.random() * 800);
  corgiGIF.style.transform = "translate3d(".concat(ranNum1, "px, 0px, 0px)");
  corgiGIF.style.transition = "all 300ms linear";
  sharkGIF.style.transform = "translate3d(-".concat(ranNum2, "px,0px, 0px )");
  sharkGIF.style.transition = "all 300ms linear";
};
var isColliding = function isColliding(a, b) {
  var aRect = a.getBoundingClientRect();
  var bRect = b.getBoundingClientRect();
  return aRect.left < bRect.right && aRect.right > bRect.left && aRect.top < bRect.bottom && aRect.bottom > bRect.top;
};
var collisionAlert = function collisionAlert(a, b) {
  if (isColliding(a, b)) {
    console.log('collide!');
    fetchData(chosenWord);
    gameOverModal.classList.add('showModal');
    setTimeout(function () {
      wordDefinition();
      wrongWords.push(chosenWord);
    }, 1100);
    setTimeout(function () {
      gameOverModal.classList.remove('showModal');
    }, 1300);
  }
};
var compareArrays = function compareArrays(arr1, arr2) {
  if (arr1.length === arr2.length && arr1.every(function (val) {
    return arr2.includes(val);
  })) {
    console.log('game over');
    correctWords.push(chosenWord);
    setTimeout(function () {
      wordDefinition();
    }, 1200);
  } else {
    console.log('keep playing');
  }
};

/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////MODAL ///////////////////////////////////////////////////////////

var reset = function reset() {
  clear();
  playContinued();
};
var playContinued = function playContinued() {
  switch (level) {
    case 'beginner':
      array(_js_words_js__WEBPACK_IMPORTED_MODULE_0__.beginnerWordArray);
      break;
    case 'medium':
      array(_js_words_js__WEBPACK_IMPORTED_MODULE_0__.mediumWordArray);
      break;
    case 'hard':
      array(_js_words_js__WEBPACK_IMPORTED_MODULE_0__.advancedWordArray);
      break;
    default:
      array(_js_words_js__WEBPACK_IMPORTED_MODULE_0__.beginnerWordArray);
  }
  setTimeout(function () {
    array();
    insertWordToDom(chosenWord);
    allWords.push(chosenWord);
    modal_start.classList.remove('start_active');
    word_wrapper.classList.add('word_active');
    letters_wrapper.classList.add('letters_active');
    corgiGIF.classList.add('add');
    sharkGIF.classList.add('add');
    keyboard();
  }, 300);
};
var clear = function clear() {
  newWord = null;
  chosenWord = null;
  newArray = [];
  lettersArray = [];
  selectedLettersArray = [];
  incorrectLettersArray = [];
  levelSelect = false;
  modalDefinition.innerHTML = '';
  word_wrapper.innerHTML = '';
  lettersContainer.innerHTML = '';
  modal_definition.classList.remove('showDefinition');
  word_wrapper.classList.remove('word_active');
  letters_wrapper.classList.remove('letters_active');
  corgiGIF.style.transform = "translate3d(0px, 0px, 0px)";
  sharkGIF.style.transform = "translate3d(0px, 0px, 0px)";
  corgiGIF.classList.remove('add');
  sharkGIF.classList.remove('add');
};
new_game.addEventListener('click', function () {
  clear();
  removeAnimateClasses();
  modal_start.classList.add('start_active');
});

//////////////////API CALL & WORD DEFINITION MODAL /////////////////////////
///////////////////////////////////////////////////////////////////////////
function fetchData(_x) {
  return _fetchData.apply(this, arguments);
}
function _fetchData() {
  _fetchData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(chosenWord) {
    var apikey, baseURL, url;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          apikey = '67e2898b-2883-45c6-b055-3c8ba071f230';
          baseURL = "https://www.dictionaryapi.com/api/v3/references/collegiate/json/".concat(chosenWord, "?key=").concat(apikey);
          url = baseURL;
          fetch(url).then(function (response) {
            return response.json();
          }).then(function (data) {
            apiDefinition(data);
            console.log('api data', data);
          })["catch"](function (error) {
            console.log('error', error);
          });
        case 4:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _fetchData.apply(this, arguments);
}
var definition;
function apiDefinition(_x2) {
  return _apiDefinition.apply(this, arguments);
} //MODAL DEFINITION
function _apiDefinition() {
  _apiDefinition = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(data) {
    var WORD_DEFINITION, WORD_PART_OF_SPEECH, WORD_PRONUNCIATION, WORD_SHORT_DEFINITION;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          try {
            WORD_DEFINITION = data[0].hwi.hw;
            WORD_PART_OF_SPEECH = data[0].fl;
            WORD_PRONUNCIATION = data[0].hwi.prs[0].mw;
            WORD_SHORT_DEFINITION = data[0].shortdef[0];
            definition = "\n      <div class=\"modal_inner\">\n        <button class=\"modal_buttonClose\" id=\"close\"><span>X</span></button>\n        <div class=\"modal_content\">\n          <h2 class=\"modal_content-h2\">".concat(WORD_DEFINITION, "</h2>\n          <p class=\"modal_content-partOfspeech\">").concat(WORD_PART_OF_SPEECH, "</p>\n          <p class=\"modal_content-p\">").concat(WORD_PRONUNCIATION, "</p>\n          <p class=\"modal_content-definition\">").concat(WORD_SHORT_DEFINITION, "</p>\n          <p class=\"modal_content-apiInfo\">definition provided by: <span><a href=\"https://dictionaryapi.com/\" target=\"_blank\">Merriam-Webster</a></span></p>\n        </div>\n      </div>\n");
          } catch (error) {
            console.log('api error', error);
          }
        case 1:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _apiDefinition.apply(this, arguments);
}
var modal_definition = document.querySelector('.modal_definition');
var modalDefinition = document.getElementById('modalDefinition');
var wordDefinition = function wordDefinition() {
  fetchData(chosenWord);
  setTimeout(function () {
    modalDefinition.insertAdjacentHTML('beforeend', definition);
    var modal_inner = document.querySelector('.modal_inner');
    modal_definition.classList.add('showDefinition');
    modal_inner.classList.add('animate-fade-in');

    //CLOSE MODAL AND REST GAME
    var close = document.getElementById('close');
    if (close) {
      close.addEventListener('click', function () {
        reset();
        console.log('icl', incorrectLettersArray);
        console.log('sla', selectedLettersArray);
        console.log('na', newArray);
        console.log('chosen', chosenWord);
        console.log('level 267', level);
      });
    } else {
      console.log('no close for you');
    }
  }, 200);
};
})();

/******/ })()
;
//# sourceMappingURL=bundle9fb299bf65b0fcc5d1b2.js.map