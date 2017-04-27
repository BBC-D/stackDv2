$(document).ready(() => {

$('.blue').click(function() {
  $('.input').toggleClass('hidden')
  $('.blue').hide()
})

$('.green').click(function() {
  $('.input').toggleClass('hidden')
  $('.green').hide()
  $('form').toggleClass('hidden')
})

$('.language1').click(function() {
  $('.t-1').toggleClass('hidden')
})

$('.language2').click(function() {
  $('.t-2').toggleClass('hidden')
})

$('.language3').click(function() {
  $('.t-3').toggleClass('hidden')
})

$('.language4').click(function() {
  $('.t-4').toggleClass('hidden')
})

$('.project-title').click(function() {
  $('.tutorial').toggleClass('hidden')
})

var reddit = $.get('https://galvanize-cors.herokuapp.com/https://www.reddit.com/r/quotes.json')
  reddit.done((data) => {
    var rando = Math.floor(Math.random() * 25) + 1
    var redditContent = data.data.children[rando]
    var quote = redditContent.data.title;

    function displayContent(){
      $('.profile-pic-wrapper').append("<h4 class='quote'>"+quote+"</h4>")
      console.log('its working!')
    }
    displayContent()
  })

})
