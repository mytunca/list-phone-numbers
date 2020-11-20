function myFunction() {
  const ws = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var contacts = ContactsApp.getContacts();
  var array = [];
  
  //Let's read all our contacts stored in Google Contacts which contain one or more telephone number
  if(contacts.length>0){
    
    var isThereANumber = false;
    
    contacts.forEach(function(person){
      
      if(person.getPhones().length > 0){
        
        isThereANumber = true;
        
        for(var i = 0;i<person.getPhones().length;i++){
          
          array.push([person.getFullName(),person.getPhones()[i].getPhoneNumber()])
        
        }    
      }
      
    })
    
    //if there are contacts but none of them has a phone number
    if(!isThereANumber){
  
      array.push(["No contact has a number",""])
    
    }
  
  // if there is no contact
  }else{
    
    array.push(["No contact found",""])
    
  }
  
  //Let's write the data to the spreadsheet
  ws.getRange("B:C").clear()
  ws.getRange(1, 2, 1, 2).setValues([["Name","Number"]]).setBackground("orange").setFontWeight("bold").setHorizontalAlignment("center")
  ws.getRange(2, 2, array.length, 2).setValues(array).setBackgroundRGB(255,242,204).setHorizontalAlignment("left");
  ws.autoResizeColumns(2, 2)
}
