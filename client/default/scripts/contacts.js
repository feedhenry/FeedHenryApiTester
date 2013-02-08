var contactTemplate = "<div class='item' onclick='onContactClick(CONTACTID);'><div>First Name : <strong>FNAME</strong></div><div>Last Name : <strong>LNAME</strong></div></div>";
var detailedContactTemplate = "<div class='item' onclick='onContactClick(CONTACTID);'><div>First Name : <strong>FNAME</strong></div><div>Last Name : <strong>LNAME</strong></div>";

function listAllContacts() {
  $('.contact_subview').hide();
  //$fhclient.contacts.list(onGetAllContacts, {});
  $fh.contacts({act:'list'}, onGetAllContacts, function(){
  
  });
}

function onGetAllContacts(res) {
  var listMarkup = "";
  res = res.list;
  for (var n = 0; n < res.length; n++) {
    listMarkup += getContactMarkup(res[n], false);
  }
  $('#existingContacts').show();
  $('#contactList').html(listMarkup).show();
  $('#contactDetail').hide();
}

function getContactMarkup(contact, fullDetail) {
  var defaultContactTemplate = fullDetail ? detailedContactTemplate : contactTemplate;
  defaultContactTemplate = defaultContactTemplate.replace(/FNAME/g, contact.first);
  defaultContactTemplate = defaultContactTemplate.replace(/LNAME/g, contact.last);
  var contactId = contact.id ? contact.id : contact.name;
  defaultContactTemplate = defaultContactTemplate.replace(/CONTACTID/g, "\"" + contactId + "\"");

  if (fullDetail && contact.email) {
  for(var type in contact.email){
   defaultContactTemplate  += "<div> " + type + " email : " + contact.email[type] + "</div>";  
  }
  
  }

  if (fullDetail && contact.phone) {
    for(var type in contact.phone){
      defaultContactTemplate += "<div> " + type + " phone : " + contact.phone[type] + "</div>";
    }
  }

  if(fullDetail){
    defaultContactTemplate += "</div>";
        defaultContactTemplate += "<div class='item' onClick=\"deleteContact(\'"+contactId+"\')\"><h2>Delete this contact</h2></div>";  
  }

  return defaultContactTemplate;
}

function onContactClick(id) {
  $('.contact_subview').hide();
  //$fhclient.contacts.get(contactData, showContactDetail, showContactDetailError);
  $fh.contacts({act:'find', by:'id', val:id}, showContactDetail, function(msg, errors, p){
    $fh.contacts({act:'find', by:'name', val:id}, showContactDetail,  showContactDetailError);
  });
}

function deleteContact(id){
  $fh.contacts({act:'remove', contact:{id:id}}, function(){
    alert('Contact has been deleted. Id =' + id);
  }, function(msg, params){
    alert(msg);
  })
}

function showContactDetail(res) {
  res = res.list;
  var contactHtml = "";
  for(var i=0;i<res.length;i++){
    contactHtml += getContactMarkup(res[i], true);
  }
  $('#existingContacts').show();
  $('#contactList').hide();
  $("#contactDetail").show().html(contactHtml);
}

function showContactDetailError(res, p) {
  alert(res);
}

function newContact() {
  $('.contact_subview').hide();
  $('#newContact').show();
  $('#create_contact_btn').unbind().bind('click', createNewContact)
}

function newContactGui(){
  $fh.contacts({act:'add', gui:true}, function(){}, function(msg, p){alert(msg)});
}

function createNewContact() {
  var firstName = $('#contact_firstname').val();
  var lastName = $('#contact_lastname').val();
  var phone = $('#contact_phone').val();
  if (firstName == "" && lastName == "") {
    alert("Please enter contact name!");
    return;
  }
  //var contactData = {
  //  'firstName': firstName,
  //  'lastName': lastName,
  //  'phoneNumber': phone
  //};
  //$fhclient.contacts.add(contactData, addContactSuccess, {});
  $fh.contacts({act:'add', contact:{first:firstName, last:lastName, phone:{'main':phone} } }, addContactSuccess, function(){});
}

function addContactSuccess(res) {
  alert("New Contact created, contact id = " + res.id);
}

function chooseContact(){
  $fh.contacts({act:'choose'}, showContactDetail, function(msg){
    alert(msg);
  });
}

