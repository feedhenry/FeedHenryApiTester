function getCamera(type, url){
  var sources = ['camera', 'photo'];
  $fh.cam({act:'picture', source:sources[type], uri: url}, function(picdata){
          if(url){
            $('#cam .result').html(picdata.uri).show();
            var resultHtml = "<img src='"+picdata.uri+"' width='300px' height='300px' ></img>";
            $('#cam .result').append(resultHtml);
          } else{
            var resultHtml = "<img src='data:image/"+picdata.format+";base64,"+picdata.b64+"' width='300px' height='300px' ></img>";
            $('#cam .result').html(resultHtml).show();
          }
  }, function(msg){
    alert('Error: ' + msg); 
  })
}
