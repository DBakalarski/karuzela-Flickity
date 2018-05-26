
/************* MUSTACHE pętla *****************/
for(var i = 0; i < carouselData.length; i++){
		console.log(carouselData);
		listItems += Mustache.render(templateItem, carouselData[i]);
	}

/************ CAROUSEL **********/
var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true,
  pageDots: false,
  hash: true

});


var flkty = new Flickity( '.main-carousel', {
  
});

var progressBar = document.querySelector('.progress-bar')

flkty.on( 'scroll', function( progress ) {
  progress = Math.max( 0, Math.min( 1, progress ) );
  progressBar.style.width = progress * 100 + '%';
});

/********* MUSTACHE **********/

var templateItem = document.getElementById('template-product-item').innerHTML;

Mustache.parse(templateItem);

var listItems = '';

var fullProductList = Mustache.render(templateList);

results.insertAdjacentHTML('beforeend', fullProductList);

////////////////////