let i = 1;
const changePicture = () => {
  const backgroundSlideDiv = document.querySelector(".background-slide");
  backgroundSlideDiv.style.backgroundImage = `url(resources/img${i}_.jpg)`;
  if (i < 3) {
      i++;
  } else {
      i = 1;
  }

  setTimeout(() => changePicture(), 2000);
}

window.onload = changePicture();