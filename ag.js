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

/*
 * Timer class.
 * Similar to BGT's timer object.
 */
class Timer {
  constructor() {
    this.elapsed; // The time (in MS) the timer has been running for.
    this.paused = false;
    this.lastTime = 0;
    this.pauseWhen = 0;
    this.started = true;
  }

  isActive() {
    // Determines if the timer is currently active (unpaused and started). If both of these are true, it returns true. Else, it returns false.
    return !paused & started;
  }

  // Something similar to Python properties.
  get elapsed() {
    if (this.paused) {
      return this.pauseWhen - this.lastTime;
    }
    return performance.now() - this.lastTime;
  }

  pause() {
    this.paused = true;
    this.pauseWhen = performance.now();
  }

  reset() {
    this.lastTime = performance.now();
    this.pauseWhen = 0;
    this.paused = false;
    this.started = true;
  }

  restart() {
    this.lastTime = performance.now();
    this.pauseWhen = 0;
    this.paused = false;
    this.started = true;
  }

  resume() {
    this.paused = false;
    this.started = true;
    this.lastTime += performance.now() - this.pauseWhen;
  }
}
