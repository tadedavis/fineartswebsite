document.getElementById('button').addEventListener('click', onClick);
document.getElementById('buttontwo').addEventListener('click', onClickTwo);
function onClick(e) {
  e.preventDefault();
  document.getElementById("form").textContent =("Thank you for submitting your application");
}
function onClickTwo(e) {
  e.preventDefault();
  console.log("in");
  location.reload();
  return false;
}
