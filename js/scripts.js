function getAkanName () {
  let yearOfBirth=document.getElementById("year input").value;
  let monthOfBirth=Number(document.getElementById("month input").value);
  let dayOfBirth=Number(document.getElementById("day input").value);
  let genders=document.getElementById("gender");
  
  // function to get gender
  function getGender () {
     for (let gender of genders) {
       if(gender.checked){
         return gender.value;
        }
     }
  }
  
  let myGenderValue=getGender();
  console.log("myGenderValue");
  
  // validation functions
  function monthValidator () {
    if (monthOfBirth<1 || monthOfBirth>12) {
      return false;
  }else {
     return true;
   }
  }
  
  function dayValidator() {
    if (monthOfBirth===2 && Number(yearOfBirth)%4===0){
      if (dayOfBirth>28 || dayOfBirth<1) {
         return false;
  } else if(monthOfBirth === 2 || dayOfBirth >29){
         return false;
  }else if(monthOfBirth===2 || dayOfBirth <1){
         return false;
  }else{
         return true;
  }
  
  }else if(dateofBirth <1 || dateOfBirth>31){
         return false;
  }else{
         return true;
  }
  }
  // validation variables
  let monthValid=monthValidator();
  let dayValid=dayValidator ();
  
  // formulae to determine day of birth (sunday=1, monday=2)etc..
  let dayOfWeekNumber=math.floor((((Number(yearOfBirth.slice (0,2))/4)-2*Number(yearOfBirth.slice(0,2))-1)+((5*Number(yearOfBirth.slice(2,4))/4))+((26*(monthOfBirth+1)/10))+dayOfBirth)%7);
  
  // creating arrays of Akan names for males and females & days of the week
  let daysOfTheWeek = [
      "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
  ];
  
  let maleAkanNames = [
      "Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"
  ];
  
  let femaleAkanNames = [
      "Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"
  ];
  
  
  // generating an index value to select items on arrays
  let index;
  // fix formulae bug
      if (dayOfWeekNumber == 0){
         index = 6 ;
  } else {
      index = dayOfWeekNumber = -1 ;
  }
  
  console.log(index);
  
  if (myGenderValue=="male" && monthValid && dayValid) {
     document.getElementById('result').textContent="You were born on a"+ daysOfTheWeek[index] + ",Your Akan name is" + maleAkanNames[index];
     document.ElementById('display-name').textContent="Here is your Akan name:" ;
     document.getElementById('result').style.fontSize = "20px" ;
     document.querySelector('h1').textContext= 'Hello' + " " + maleAkanNames[index];
         return false;
  } else if(myGenderValue == "female" && monthValid && dayValid) {
     document.getElementById('result').textContent = "You were born on a" + daysOfTheWeek[index] + "Your Akan name is" + femaleAkanNames[index];
     document.getElementById('display-name').textContent =  "Here is your Akan name:";
     document.getElementById('result').style.fontSize = "20px";
     document.getElementById('h1').textContext = 'Hello' + " " + femaleAkanNames[index];
         return false;
  }else {
    alert("You entered an invalid day or month, please try again");
  }
  }