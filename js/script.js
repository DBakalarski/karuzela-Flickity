
/************* MUSTACHE pętla *****************/
var listItems = '';
var templateItem = document.getElementById('template-product-item').innerHTML;
//Mustache.parse(templateItem);

for(var i = 0; i < carouselData.length; i++){
		//console.log(carouselData[i]);
		listItems += Mustache.render(templateItem, carouselData[i]);
    
	};

//var fullList = Mustache.render(listItems);

results.insertAdjacentHTML('beforeend', listItems);



/************ CAROUSEL **********/
var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true,
  pageDots: false,
  hash: true

});
/*********** PROGRESS BAR *******************/
var progressBar = document.querySelector('.progress-bar')

flkty.on( 'scroll', function( progress ) {
  progress = Math.max( 0, Math.min( 1, progress ) );
  progressBar.style.width = progress * 100 + '%';
});

/***************** MAPA **********************/

window.initMap = function() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 3,
    center: carouselData[0].coords
  });
  
  for(var i = 0; i < carouselData.length; i++) {
    var marker = new google.maps.Marker({
      position: carouselData[i].coords,
      map: map     
    });
    marker.addListener('click', function(){

     location.href = "#carousel-cell1";
      
    });
  }

};

