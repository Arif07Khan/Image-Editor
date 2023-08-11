let img = document.getElementById("Image_Upload");
let profile = document.getElementById("profile_pic");
let updated_profile = "";
let border = document.getElementById("border");
let bright = document.getElementById("bright");
let contract = document.getElementById("contract");

Open_Upload = () => {
  img.click();
};

Image_Change = (e) => {
    let img_value = document.getElementById("Image_Upload").files[0];
    profile.setAttribute("src", URL.createObjectURL(img_value));
};
function updateProfile() {
  let canvas = document.createElement("canvas");
  let context = canvas.getContext("2d");

  // Set canvas dimensions to match the image
  canvas.width = profile.width;
  canvas.height = profile.height;

  // Draw the image onto the canvas
  context.drawImage(profile, 0, 0, canvas.width, canvas.height);

  // Convert the canvas to a data URL
  updated_profile = canvas.toDataURL("image/jpeg");
  // updated_profile="";
};

border.onmousemove = () => {
  profile.style.borderRadius = border.value + "px";
  updateProfile();
};

bright.onmousemove = () => {
  profile.style.filter = "brightness(" + bright.value + "%)";
  updateProfile();
};

contract.onmousemove = () => {
  profile.style.opacity = contract.value / 100;
  updateProfile();
};


Download_Profile = () => {
  let link = document.createElement("a");
  link.href = updated_profile;
  link.download = "profile.jpg";
  link.click();
};

