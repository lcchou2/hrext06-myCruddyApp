$(document).ready(function(){
  console.log('jQuery loaded');

  var displayfield = []

  // write to local storage from input when button save clicked
  $('.btn-submit').on('click', function(){

    
    if (displayfield.length === 0) {
      $('.list-display-field').text('')
    }
    
    
    
    displayfield.push($('.text-entry').val())

    localStorage.setItem($('.text-entry').val(), 0)



    news = $('<div id="newline"></div>')
    news.text($('.text-entry').val())

    $('.list-display-field').append(news)

    
    
 

    
   


    // localStorage.setItem($('.text-entry').val(), keyo);
    
    // var keyss = localStorage.keys()
    // for (var i = 0; i < keyss.length; i ++) {
    //   $('.list-display-field').text(keyss[i])
    // }
    

  



  });

  // delete from local storage when delete button clicked
  $('.btn-delete').on('click', function(){
    
    localStorage.removeItem($('.text-entry').val());
    displayfield = displayfield.filter(el => el !== $('.text-entry').val())
    
    $('.list-display-field').html('')

    for (var i=0; i < displayfield.length; i ++) {
      
      if (displayfield[i] !== $('.text-entry').val()) {
        news = $('<div id="newline"><img>></div>')
        news.text(displayfield[i])

        $('.list-display-field').append(news)
      }

      
    }



  });

  $('.btn-deleteall').on('click', function() {
    $('.list-display-field').html('')
    localStorage.clear()
  })

});