
/************* MUSTACHE pętla *****************/
var listItems = '';
var templateItem = document.getElementById('template-product-item').innerHTML;
//Mustache.parse(templateItem);

for(var i = 0; i < carouselData.length; i++){
		console.log(carouselData);
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

var progressBar = document.querySelector('.progress-bar')

flkty.on( 'scroll', function( progress ) {
  progress = Math.max( 0, Math.min( 1, progress ) );
  progressBar.style.width = progress * 100 + '%';
});

/***************** MAPA **********************/
window.initMap = function() {
  
 
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 4, center: carouselData[1].coords});

 var markerOne = new google.maps.Marker({
      position: carouselData[1].coords,
      map: map
    });

/*for(var i = 0; i < carouselData.length; i++){
    var markerOne = new google.maps.Marker({
      position: carouselData[i].coords,
      map: map


    //listItems += Mustache.render(templateItem, carouselData[i]);
    
  };*/


}

