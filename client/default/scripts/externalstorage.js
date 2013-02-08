function getExternalStorage(){
  navigator.externalstorage.enable(function (ok){
    $('input[name="externalstorage"]').val(ok.path);
  },function (err){
    alert(err.message);
  });
}
