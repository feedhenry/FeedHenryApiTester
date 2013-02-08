function openWebview(site_name){
  var site_url_map = {
    'google': 'http://google.ie',
    'wit': 'http://www.wit.ie'
  } 
  var url = site_url_map[site_name];
  //$fh.webview({url:url, title:site_name, titleBarColor: "#CC66CC", showControls: false, showTitleBar: true, setupBridge: true, x:0, y:200, width:400, height:400}, function(result){
  $fh.webview({url:url, title:site_name, titleBarColor: "#CC66CC", showControls: false, showTitleBar: true, setupBridge: true}, function(result){
   //alert("Page " + result); 
    console.log("Webview open callback called: status - " + result);
	setTimeout(function(){
	  
      //$fh.webview({act:"close"});
	}, 5000)
  }, function(err){
    //alert("Error: " + err); 
  })
}

document.addEventListener('webviewUrlChange', function(e){
  console.log("weburl changed, new url is " + e.data);
})
