

let eyeball_left = document.querySelector(".eyeball_left"),
  pupil_left = document.querySelector(".pupil_left"),
  eyeArea_left = eyeball_left.getBoundingClientRect(),
  pupil_leftArea = pupil_left.getBoundingClientRect(),
  R_left = eyeArea_left.width / 2,
  r_left = pupil_leftArea.width / 2,
  centerX_left = eyeArea_left.left + R_left,
  centerY_left = eyeArea_left.top + R_left;

let eyeball_right = document.querySelector(".eyeball_right"),
  pupil_right = document.querySelector(".pupil_right"),
  eyeArea_right = eyeball_right.getBoundingClientRect(),
  pupil_rightArea = pupil_right.getBoundingClientRect(),
  R_right = eyeArea_right.width / 2,
  r_right = pupil_rightArea.width / 2,
  centerX_right = eyeArea_right.left + R_right,
  centerY_right = eyeArea_right.top + R_right;

document.addEventListener("mousemove", (e) => {
  let x_left = e.clientX - centerX_left,
    y_left = e.clientY - centerY_left,
    theta_left = Math.atan2(y_left, x_left),
    angle_left = (theta_left * 180) / Math.PI + 360;

  let x_right = e.clientX - centerX_right,
    y_right = e.clientY - centerY_right,
    theta_right = Math.atan2(y_right, x_right),
    angle_right = (theta_right * 180) / Math.PI + 360;

  pupil_left.style.transform = `translateX(${R_left - r_left + "px"}) rotate(${
    angle_left + "deg"
  })`;
  pupil_left.style.transformOrigin = `${r_left + "px"} center`;

  pupil_right.style.transform = `translateX(${
    R_right - r_right + "px"
  }) rotate(${angle_right + "deg"})`;
  pupil_right.style.transformOrigin = `${r_right + "px"} center`;
});

