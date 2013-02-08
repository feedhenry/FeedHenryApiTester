function createNewRecord() {
  $('.data_subview').hide();
  $('#new_record').show();
  $('#create_record_btn').unbind().bind('click', saveRecord);
}

function getRecord() {
  $('.data_subview').hide();
  $('#read_record').show();
  $('#read_record_btn').unbind().bind('click', readRecord);
}

function saveRecord() {
  var key = $('#new_record_key').val();
  var value = $('#new_record_value').val();
  if (key == "") {
    alert("The key value can not be empty");
    return;
  }
  //$fhclient.data.save(key, value);
  $fh.data({act:'save', key:key, val:value}, function(){
    alert("saved!");
  })
}

function readRecord() {
  var key = $('#read_record_key').val();
  if (key == "") {
    alert("The key value can not be empty");
    return;
  }
  //$fhclient.data.load(key, loadRecordCallback);
  $fh.data({act:'load', key:key}, loadRecordCallback, function(){});
}

function loadRecordCallback(value) {
  if (value.val) {
    alert("The value is " + value.val);
  } else {
    alert("No value saved");
  }
}
