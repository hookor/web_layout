let blank = document.querySelectorAll('h2');
Array.from(blank).forEach(function (space) {
  space.innerHTML = '&nbsp&nbsp&nbsp' + space.textContent;
});
