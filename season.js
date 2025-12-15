const month = new Date().getMonth();
const body = document.body;

if ([11, 0, 1].includes(month)) {
  body.classList.add("winter");
} else if ([2, 3, 4].includes(month)) {
  body.classList.add("spring");
} else if ([5, 6, 7].includes(month)) {
  body.classList.add("summer");
} else {
  body.classList.add("fall");
}
