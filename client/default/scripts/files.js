function uploadFile(){
  $('#file_url_lable').text("Upload File To:");
  $('#file_params').show();
  $('#file_start_btn').unbind().bind("click", function(){
    var server_path = $('#file_url').val();
    if(server_path == ""){
      alert("Server is empty");
      return;
    }
    $fh.cam({act:'picture', source:'camera', uri: true}, function(data){
      var filepath = data.uri;
      alert("Start to upload file from " + filepath + " to " + server_path);
            $fh.file({act:'upload', filepath: filepath, server: server_path, params:{"__cookie":"feedhenry=KL718ZHzC8NGwZJ_SVrxhB7U;", "filePath":"/client/default/", "widget": "tWgFoF9c0XOfyGv7v0sOgOjG", "confirm":true}}, function(res){
        alert("Status : " + res.status + "; response: " + res.res + "; size: " + res.size);
      }, function(err){
        alert("Failed to upload. Error " + err);
      });
    })
  })
}

function downloadFile(){
  $('#file_url_lable').text("Download File From:");
  $('#file_params').show();
  $('#file_start_btn').unbind().bind("click", function(){
    var server_path = $('#file_url').val();
    if(server_path == ""){
      alert("Server is empty");
      return;
    }
    var parts = server_path.split("/");
    var destname = parts[parts.length - 1];
    $fh.file({act:'download', src: server_path, dest: destname}, function(res){
      alert("File downloaded to " + res);
      $fh.file({act:'open', filepath: res}, function(){
        alert("file opened");
      }, function(){
        $fh.webview({url: res});
      })
    }, function(err){
      alert("Failed to download. Error " + err);
    });
  }) 
}

function ftpListFiles(){
    $('#file_url_lable').text("Ftp Path:");
    $('#file_params').show();
    $('#file_start_btn').unbind().bind("click", function(){
      var server_path = $('#file_url').val();
      if(server_path == ""){
        alert("Ftp path is empty");
        return;
      }
      $fh.file({act:'list', url: server_path}, function(res){
        var files = res.list;
        var filesHtml = "<ul>";
        for(var i=0;i<files.length;i++){
          filesHtml += "<li>" + files[i].name + "<li>";
        }
        filesHtml += "</ul>";
        $('#list_result').html(filesHtml).show();
      }, function(err){
        alert("Failed to do ftp list. Error " + err);
      });
    })     
}