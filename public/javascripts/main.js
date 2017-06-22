$(document).ready(function() {

setTimeout(animate, 1000)
setTimeout(span1, 400)
setTimeout(span2, 800)
setTimeout(span3, 1200)
setTimeout(adj, 1600)

$('#advanced').click(function() {
  $('#advanced').css('opacity', 0)
  $('.advanced').css('opacity', 1)
  $('#superAdvanced').css('opacity', 1)
})

$('#superAdvanced').click(function() {
  $('#superAdvanced').css('opacity', 0)
  $('.superAdvanced').css('opacity', 1)
  $('#submit').css('opacity', 1)
})

})

function animate() {
    $('.stackAnimate').ready(function(){
        $(".lang1").fadeIn("slow")
          $(".lang2").delay(1400).fadeIn("slow")
            $(".lang3").delay(2600).fadeIn("slow")
              $(".lang4").delay(3800).fadeIn("slow")
        })
      }

function span1() {
  $('.span1').css('opacity', '1')
}
function span2() {
  $('.span2').css('opacity', '1')
}
function span3() {
  $('.span3').delay(2000).css('opacity', '1')
}

function adj() {
  $('#adj').delay(3000).css('opacity', '1')
}
