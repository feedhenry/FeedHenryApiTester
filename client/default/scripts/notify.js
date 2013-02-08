function notify(method){
 var methods = ['vibrate', 'beep', 'blink'];
  $fh.notify({type: methods[method]}, function(){}, function(msg){
    alert("Error : " + msg);
  })
}
