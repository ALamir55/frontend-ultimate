$(function () {
  'user strict';
  // Toogle Sidebar (open and close)
  $('.toggle-sidebar').on('click', function () {
    $('.content-area, .sidebar').toggleClass('no-sidebar');
  });
  $('.toggle-submenu').on('click', function () {
    $('.fa-angle-right').toggleClass('down');
    $(this).next('.child-links').slideToggle();
  });
});