function randomizeElementColor(element) {
  const colors = [
    "red",
    "blue",
    "green",
    "purple",
    "orange",
    "pink",
    "yellow",
    "brown",
    "teal",
    "black",
  ];
  const sarcasticTexts = [
    "Wow, that's... a choice.",
    "Did you pick this color with your eyes closed?",
    "Bold move. Let's see how it plays out.",
    "This color really brings out the... nothing.",
    "If only colors could apologize.",
    "A color only a mother could love.",
    "This is a statement. Not sure what it says.",
    "Perfect for hiding in plain sight.",
    "My retinas thank you. Not really.",
    "This color is... something else.",
  ];

  // Helper to get RGB values for named colors
  const colorToRGB = {
    red: [255, 0, 0],
    blue: [0, 0, 255],
    green: [0, 128, 0],
    purple: [128, 0, 128],
    orange: [255, 165, 0],
    pink: [255, 192, 203],
    yellow: [255, 255, 0],
    brown: [165, 42, 42],
    teal: [0, 128, 128],
    black: [0, 0, 0],
    white: [255, 255, 255],
  };

  // Calculate luminance for contrast
  function luminance(rgb) {
    // sRGB luminance(Y) values
    return 0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2];
  }

  setInterval(() => {
    const colorIndex = Math.floor(Math.random() * colors.length);
    const textIndex = Math.floor(Math.random() * sarcasticTexts.length);
    const bgColor = colors[colorIndex];
    element.style.backgroundColor = bgColor;
    element.textContent = sarcasticTexts[textIndex];

    // Get background color RGB
    const bgRGB = colorToRGB[bgColor] || [0, 0, 0];
    // Get current text color (default to black if not set)
    let textColor = window.getComputedStyle(element).color;
    let textRGB = [0, 0, 0];
    if (textColor.startsWith("rgb")) {
      textRGB = textColor.match(/\d+/g).map(Number).slice(0, 3);
    }
    // If text color and bg color are the same or contrast is low, fix it
    const bgLum = luminance(bgRGB);
    const textLum = luminance(textRGB);
    const contrast = Math.abs(bgLum - textLum);
    // Use 128 as a rough threshold for contrast
    if (contrast < 128) {
      // Pick black or white for best contrast
      const whiteLum = luminance([255, 255, 255]);
      const blackLum = luminance([0, 0, 0]);
      const contrastWithWhite = Math.abs(bgLum - whiteLum);
      const contrastWithBlack = Math.abs(bgLum - blackLum);
      element.style.color =
        contrastWithWhite > contrastWithBlack ? "white" : "black";
    } else {
      // Reset to default if contrast is fine
      element.style.color = "";
    }
  }, 2000);
}

// Example usage: randomize the first h1 on the page
document.addEventListener("DOMContentLoaded", function () {
  const h1 = document.querySelector("h1");
  if (h1) {
    randomizeElementColor(h1);
  }
});
