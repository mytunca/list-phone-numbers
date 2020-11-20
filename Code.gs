function myFunction() {
  const ws = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var contacts = ContactsApp.getContacts();
  var array = [];
  
  //Let's read all our contacts stored in Google Contacts which contain one or more telephone number
  contacts.forEach(function(person){
  
    if(person.getPhones().length > 0){ //if the contact has a number
      
      for(var i = 0;i<person.getPhones().length;i++){
        
        dizi.push([person.getFullName(),person.getPhones()[i].getPhoneNumber()]) //push name of the contact and phone number into the array
      
      }
      
    };
  })
 
  ws.getRange("B:C").clear()
  ws.getRange(1, 2, 1, 2).setValues([["Name","Number"]]).setBackground("orange").setFontWeight("bold").setHorizontalAlignment("center")
  ws.getRange(2, 2, array.length, 2).setValues(array).setBackgroundRGB(255,242,204).setHorizontalAlignment("left");
  ws.autoResizeColumns(2, 2)
}
