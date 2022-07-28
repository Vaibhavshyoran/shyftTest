export const addressValidator = (address) => {
    let adressWithoutBlankSpace = address.trim();
    if(adressWithoutBlankSpace.length> 0){
      const addressRegex = /^[ A-Za-z0-9_@./#,-]*$/;
      if (addressRegex.test(address)) {
        return true;
      }
      return 'Please entre valid characters in the address fields';
    }
    return 'Address Required';
  }
  
  
  function nameValidator(name) {
    const nameRegex = /^[a-zA-Z ]+$/;
    if (nameRegex.test(name)) {
      return true;
    }
    return false;
  }
  
  function phoneNumberValidator(mobile) {
    const mobileRegex = /[6789]\d{9}/;
    if (mobileRegex.test(mobile)) {
      return true;
    }
    return false;
  }
  
  function emailValidator(email) {
    const emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    if (emailRegex.test(email)) {
      return true;
    }
    return false;
  }

  export const isValidateDate = (date) =>{
    const dateRegex =  /^(((0[1-9]|[12]\d|3[01])\/(0[13578]|1[02])\/((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\/(0[13456789]|1[012])\/((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\/02\/((19|[2-9]\d)\d{2}))|(29\/02\/((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|(([1][26]|[2468][048]|[3579][26])00))))$/;
    if(dateRegex.test(date)){
      return true;
    }
    return false
  }

  function validatePincode(pincode){
    const pinRegex = /[123456789]\d{5}/;
    if (pinRegex.test(pincode)) {
      return true;
    }
    return false;
  }

  function validateNumberField(value){
    if(/^\d*$/.test(value)){
        return true
    }
    return false
  }
  

const isValidate = (inputKey,inputField) => {
    switch(inputKey){
      case 'FirstName': {
        if(!inputField || nameValidator(inputField)===false) {
          return "Please enter First Name"
        }
        break;
      }

      case 'LastName': {
        if(!inputField || nameValidator(inputField)===false) {
          return "Please enter Last Name"
        }
        break;
      }
      case 'ApartmentNumber': {
        if(!inputField || validateNumberField(inputField)===false) {
          return "Please enter Apartment"
        }
        break;
      }
      case 'DateOfBirth': {
        if(!inputField || isValidateDate(inputField)===false) {
          return "Please enter valid DOB"
        }
        break;
      }
  
      case 'PhoneNumber' : {
        if(!inputField || phoneNumberValidator(inputField)===false) {
          return "Please enter valid Phone Number"
        }
        break;
      }
      
      case 'EmailAddress': {
        if(!inputField || emailValidator(inputField)===false) {
          return "Please enter valid email"
        }
        break;
      }
  
      case 'ZipCode' : {
        if(!inputField || validatePincode(inputField)===false) {
          return "Please enter valid zipcode"
        }
        break;
      }
  
      case 'StreetAddress': {
        if(!inputField || addressValidator(inputField)===false) {
          return "Please enter valid street"
        }
        break;
      }
      case 'State': {
        if(!inputField || nameValidator(inputField)===false){
          return "Please enter valid State"
        }
        break;
      }
      case 'IdNumber': {
        if(!inputField || validateNumberField(inputField)===false) {
          return "Please enter valid ID Number"
        }
        break;
      }
      case 'IdState': {
        if(!inputField || nameValidator(inputField)===false){
          return "Please enter valid ID State "
        }
        break;
      }
     
      default : return '';
    }
  
  }

  export default isValidate;