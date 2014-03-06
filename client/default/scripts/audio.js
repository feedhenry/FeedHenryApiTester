function playAudioStream(act, station){
  var station_map = {
    'tipp':'http://streaming.totalbroadcast.net:8018'
  }

  var path;
  if(act == "play"){
   path = station_map[station];
   $fh.audio({act:'play', path: path}, function(){
     alert('Audio played');
   }, function(){
      alert('Error');
   })
  } else if(act == 'pause') {
      $fh.audio({act:'pause'}, function(){
        alert('Audio paused');
      }, function(){
        alert('Pause failed');
      })
  } else if(act == 'stop'){
      $fh.audio({act:'stop'}, function(){
       alert('audio stopped');
    }, function(){
       alert('Stop failed');
    })
  }
}

/*function changeVol(dir){
      $fh.audio({act:'getvolume'}, function(vol_value){
        var current_vol =  parseFloat(vol_value);
        alert("current volume:" + vol_value);
        if(dir == "up"){
          var new_vol = (current_vol + 0.1) >= 1.0 ? 1.0 : (current_vol + 0.1);
          $fh.audio({act:'setvolume', level: new_vol}, function(){
            alert("new volume: " + new_vol);
          }, function(){
            alert("error turn vol up")
          })
        } else {
            var new_vol = (current_vol - 0.1) <= 0.0 ? 0.0 : (current_vol - 0.1);
            $fh.audio({act:'setvolume', level: new_vol}, function(){
              alert("new volume: " + new_vol);
            }, function(){
              alert("error turn vol down");
            });
        }
      }, function(){
        alert("Error get current volume");
      })
}*/
