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

  // Settings Box Toggle
  $('.settings-toggle').on('click', function () {
    $(this).find('i').toggleClass('fa-spin');
    $(this).parent().toggleClass('hide-settings');
  });
  // Swtich Colors Themes
  var themeClasses = [];
  $('.color-option li').each(function () {
    themeClasses.push($(this).data('theme'));
  });
  $('.color-option li').on('click', function () {
    $(this).addClass('active').siblings().removeClass('active');
    $('body')
      .removeClass(themeClasses)
      .addClass($(this).data('theme'));
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