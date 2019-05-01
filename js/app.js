

// const image1path = "url(img/louie-martinez-447964-unsplash.jpg)";
// const image2path = "url(img/louie-martinez-482218-unsplash.jpg)";
// const image3path = "url(img/steven-su-1192303-unsplash.jpg)";
// const image4path = "url(img/yu-kato-663865-unsplash.jpg)";

// document.body.style.backgroundImage = image4path;

function slide() {
    var speed = 5000;
    var interval = 8000; 
    var slide = $('.wrapper div');
   
    var count = 0;
    var length = slide.length-1;
    console.log(length);
    setInterval(function(){
      $(slide[count]).fadeOut(speed);
      if ( count >= length ) {
        count = 0;
      } else {
        count++;
      }
      $(slide[count]).fadeIn(speed);
    }, interval);
  }

  slide();