// Generated by CoffeeScript 1.6.3
$(function() {
  $('.pc').on('click', function() {
    $('#status').text($(this).children('ul').children('li:first').text());
    return $('#layer-30').removeClass('hidden');
  });
  $('#layer-30, #layer-40').on('click', function() {
    return $(this).addClass('hidden');
  });
  return this;
});
