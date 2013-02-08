function showCurrentLocationInMap(){
  $fh.geo({interval: 0}, function(res){
      $fh.map({target: '#maps_div', lat: res.lat, lon: res.lon, zoom: 15}, function(res){
      }, function(error){
       alert(error);
      });
    })
}
