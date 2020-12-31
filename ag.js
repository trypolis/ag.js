/*
 * ag.js.
 * Audiogame library for the modern web.
 * 
 * Copyright (C) 2020, Ty Gillespie. All rights reserved.
 * MIT License.
 */

"use strict";

/*
 * Speech class.
 * Text to speech functions.
 */
class Speech {
  constructor() {
    // We want the ARIA text going to a <div>
    this.aria = document.createElement("div");
    this.aria.id = "speech";
    this.aria.setAttribute("aria-live", "assertive");
    document.body.appendChild(this.aria);
  }

  speak(text) {
    // Speak a string of text.
    this.aria.innerHTML = "";
    const para = document.createElement("p");
    para.appendChild(document.createTextNode(text));
    this.aria.appendChild(para);
  }
}

let speech = new Speech();
