$fh.ready(function(){
  $fh.ori({}, function(ori){
    $('#current_orientation').html("Current Orientation: " + ori).show();
  }) 
})

function setOrientation(ori){
    alert("set ori to " + ori);
    var orientaion = ori == "p" ? "portrait" : "landscape";
    $fh.ori({act:'set', value: orientaion}, function(orien){
            alert("orientation set to " + orien);
            }, function(err){
            alert(err);
            })
}