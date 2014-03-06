function notify(method){
 var methods = ['vibrate', 'beep'];
  $fh.notify({type: methods[method]}, function(){}, function(msg){
    alert("Error : " + msg);
  })
}
