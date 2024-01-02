document.getElementById('screenshotBtn').addEventListener('click', function () {
  // Hide screenshots button from captured screenshot
  this.classList.add('hidden');

  // Take the screenshot
  html2canvas(document.documentElement, {
    scale: window.devicePixelRatio,
    logging: true,
    useCORS: true,
    windowHeight: window.innerHeight,
    windowWidth: window.innerWidth,
  }).then((canvas) => {
    // Create an image
    const image = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream');

    // Create a link to download the image
    const link = document.createElement('a');
    link.download = 'screenshot.png';
    link.href = image;
    link.click();

    // Show the button again
    this.classList.remove('hidden');
  });
});
