const darkWhite = document.getElementById('darkWhite');
 
if (localStorage.getItem('theme') === 'light') {
  document.body.classList.add('light');
}
 
darkWhite.addEventListener('click', function () {
  document.body.classList.toggle('light');
 
  if (document.body.classList.contains('light')) {
    localStorage.setItem('theme', 'light');
  } else {
    localStorage.setItem('theme', 'dark');
  }
});