// DrumKit class encapsulates all logic for the interactive drum kit
class DrumKit {
  constructor() {
    // Array of valid drum keys that trigger sounds and animations
    this.DRUM_KEYS = ["w", "a", "s", "d", "j", "k", "l"];
    // Event type constants for clarity and maintainability
    this.EVENT_CLICK = "click";
    this.EVENT_KEYDOWN = "keydown";
    // CSS selector for drum buttons
    this.DRUM_BUTTON_CLASS = ".drum";
    // Mapping of keys to their corresponding sound file paths
    this.SOUNDS = {
      w: "sounds/tom-1.mp3",
      a: "sounds/tom-2.mp3",
      s: "sounds/tom-3.mp3",
      d: "sounds/tom-4.mp3",
      j: "sounds/snare.mp3",
      k: "sounds/crash.mp3",
      l: "sounds/kick-bass.mp3",
    };
    // Set up all event listeners when the class is instantiated
    this.addEventListeners();
  }

  // Plays the sound associated with the given key, if it exists
  playSound(key) {
    const soundPath = this.SOUNDS[key];
    if (soundPath) {
      new Audio(soundPath).play();
    }
  }

  // Adds a visual animation to the button corresponding to the key
  // The animation is achieved by adding a CSS class and removing it after 100ms
  animateButton(key) {
    const button = document.querySelector(`${this.DRUM_BUTTON_CLASS}.${key}`);
    if (button) {
      button.classList.add("pressed");
      setTimeout(() => button.classList.remove("pressed"), 100);
    }
  }

  // Handles both click and keypress events
  // Triggers the button animation and plays the corresponding sound
  handleDrumInput(key) {
    this.animateButton(key);
    this.playSound(key);
  }

  // Adds event listeners to all drum buttons and the document
  // - Click: triggers handleDrumInput with the button's label
  // - Keydown: triggers handleDrumInput if the key is valid
  addEventListeners() {
    const drumButtons = document.querySelectorAll(this.DRUM_BUTTON_CLASS);
    drumButtons.forEach((button) => {
      button.addEventListener(this.EVENT_CLICK, () => {
        this.handleDrumInput(button.innerText.toLowerCase());
      });
    });

    document.addEventListener(this.EVENT_KEYDOWN, (event) => {
      const key = event.key.toLowerCase();
      if (this.DRUM_KEYS.includes(key)) {
        this.handleDrumInput(key);
      }
    });
  }
}

// Initialize the DrumKit class to activate the drum kit functionality
new DrumKit();
