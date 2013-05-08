function openWebview(site_name){
  var site_url_map = {
    'google': 'http://www.google.ie',
    'wit': 'http://www.wit.ie'
  } 
  var url = site_url_map[site_name];
    console.log("Open webview with url " + url);
    document.addEventListener("webviewUrlChange", function (e){
                              var url = e.data;
                              console.log("url to load is " + url);
                              //alert(url);
    })
    $fh.webview({url:url, title:site_name,  showTitleBar: true}, function(result){
   console.log("Page " + result);
                //setTimeout(function(){
                           //$fh.webview({act: "close"});
                //           }, 5000);
  }, function(err){
    alert("Error: " + err);
  })
}
