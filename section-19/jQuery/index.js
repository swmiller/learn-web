$(document).ready(function () {
  $("h1").addClass("red-text");

  // Animate h1 font size on hover
  let growInterval, shrinkInterval;
  const $h1 = $("h1");
  const originalFontSize = parseInt($h1.css("font-size"), 10);

  $h1.hover(
    function () {
      clearInterval(shrinkInterval);
      growInterval = setInterval(function () {
        let currentSize = parseInt($h1.css("font-size"), 10);
        $h1.css("font-size", currentSize + 5 + "px");
      }, 1000);
    },
    function () {
      clearInterval(growInterval);
      shrinkInterval = setInterval(function () {
        let currentSize = parseInt($h1.css("font-size"), 10);
        if (currentSize > originalFontSize) {
          $h1.css("font-size", currentSize - 5 + "px");
        } else {
          $h1.css("font-size", originalFontSize + "px");
          clearInterval(shrinkInterval);
        }
      }, 1000);
    }
  );

  // Set random background color and high-contrast text for each button
  $("button").each(function (index) {
    // Generate random RGB color
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const randomColor = `rgb(${r}, ${g}, ${b})`;
    $(this).css("background-color", randomColor);

    // Calculate luminance for contrast
    const luminance = 0.299 * r + 0.587 * g + 0.114 * b;
    const textColor = luminance > 128 ? "#000" : "#fff";
    $(this).css("color", textColor);

    // Set button text to a random lorem ipsum word
    const loremWords = [
      "lorem",
      "ipsum",
      "dolor",
      "sit",
      "amet",
      "consectetur",
      "adipiscing",
      "elit",
      "sed",
      "do",
      "eiusmod",
      "tempor",
      "incididunt",
      "ut",
      "labore",
      "et",
      "dolore",
      "magna",
      "aliqua",
      "enim",
    ];
    const randomWord =
      loremWords[Math.floor(Math.random() * loremWords.length)];
    $(this).text(randomWord);

    // Add click event listener to alert the button's text
    $(this).on("click", function () {
      alert($(this).text());
    });
  });
});
