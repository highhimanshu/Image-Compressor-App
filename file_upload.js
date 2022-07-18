"use strict";
function dragNdrop(event) {
  var fileName = URL.createObjectURL(event.target.files[0]);
  var preview = document.getElementById("preview");
  var previewImg = document.createElement("img");
  previewImg.setAttribute("src", fileName);
  preview.innerHTML = "";
  preview.appendChild(previewImg);
  preview.insertAdjacentHTML(
    "afterbegin",
    `<i class='fa fa-times' id='removeImage' onclick='removeimg()'></i>`
  );
}
function drag() {
  document.getElementById("uploadFile").parentNode.className =
    "draging dragBox";
}
function drop() {
  document.getElementById("uploadFile").parentNode.className = "dragBox";
}

function removeimg() {
  console.log("deleted...");
  const myNode = document.getElementById("preview");
  myNode.innerHTML = "";
}
