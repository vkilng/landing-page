let i=0;
let bgi=[];
bgi[0]="resources/img1_.jpg";
bgi[1]="resources/img2_.jpg";
bgi[2]="resources/img3_.jpg";

function changePicture() {
  document.getElementById("bgi").style.backgroundImage = "url(" + bgi[i] + ")";
  if (i < bgi.length - 1) {
      i++;
  } else {
      i = 0;
  }

  setTimeout("changePicture()", 2000);
}

window.onload = changePicture;