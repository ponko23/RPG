$ ->
  $('.pc').on 'click', ->
    $('#status').text $(@).children('ul').children('li:first').text()
    $('#layer-30').removeClass 'hidden'

  $('#layer-30, #layer-40').on 'click', ->
    $(@).addClass 'hidden'

  @