$fh.ready({}, function(){
  $fh.push({act:'receive'}, function(notification){
    receive_push(notification);
  }, function(err){
  })
});


/**
 *  Callback function when a notificaton message is received. 
 *  See http://docs.feedhenry.com/reference-docs/api-reference/push-notification/ for the format of the notification message.
 */
var receive_push = function (notification) {
    var msg = '';
    for (var property in notification) {
        msg += property + ' : ' + notification[property] + '<br>';
    }
    $('#push_result').html('notification received:<br><br>' + msg).show();
};

/**
 *  Register the app for push notification service. Based on the platform, the user maybe prompted for the permission to allow the app to use push notification service.
 */
function registerAPN() {
    $('#push_result').html('Registering...').show();
    
    /**
     *  The "params" can be empty object if the app is not going to run on Blackberry
     */
    $fh.push({act:'register', params:{}}, pushsuccessCallback, pusherrorCallback);
}

/**
 * Success callback function when the app has registered for push notification on device. 
 * A unique id will be returned from the device and it should be send to the server to register the device with Urbanairship. 
 */
function pushsuccessCallback(e) {
    alert(e.apid);
  $('#push_result').html("Device registered. Device token:<br>" + (e.deviceToken || e.devicePIN || e.apid) + '.<br><br>').show();
    
}

/**
 * Error callback function is the app failed to register push notification.
 */
function pusherrorCallback(e) {
    alert(e);
    $('#push_result').html('Error during registration: ' + e);
}