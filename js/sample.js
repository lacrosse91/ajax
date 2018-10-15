$('form').submit(function( event ) {
  event.preventDefault();

  $.post( 'https://httpbin.org/post', $('form').serialize() )

  .done(function( data ) {

    console.log( data.form );

  })

  //post()の処理をここに記述する
  
})
