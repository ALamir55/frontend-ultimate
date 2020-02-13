$(function () {
  'user strict';
  // Toogle Sidebar (open and close)
  $('.toggle-sidebar').on('click', function () {
    $('.content-area, .sidebar').toggleClass('no-sidebar');
  });
  // Toggle Submenu (open and close)
  $('.toggle-submenu').on('click', function () {
    $(this).children('.fa-angle-right').toggleClass('down');
    $(this).next('.child-links').slideToggle();
  });
  // Fullscreen Toggle (open and close)
  $('.toggle-fullscreen').on('click', function () {
    $(this).toggleClass('fullscreen');
    if ($(this).hasClass('fullscreen')) {
      openFullscreen();
    } else {
      closeFullscreen();
    }
  });
});


// Fullscreen Functions
let elem = document.documentElement;
// Fullscreen Open Function
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullscreen) {
    elem.mozRequestFullscreen();
  } else if (elem.webkitRequestFullscreen) {
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    elem.msRequestFullscreen();
  }
}
// Fullscreen Close Function
function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullscreen) {
    document.mozCancelFullscreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }
}