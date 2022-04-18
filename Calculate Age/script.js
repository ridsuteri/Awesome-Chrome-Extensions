var calculate = document.getElementById('calculate'),
  calculateAge = document.getElementById('calculateAge');

  calculate.addEventListener('click',function(){
    var birthDate = document.getElementById('birth_date').value;
    birthDate = new Date(birthDate);
    todayDate = new Date()
    totalAge = Date.now() - birthDate.getTime();
    ageYear = new Date(totalAge);
    ageYear = Math.abs(ageYear.getUTCFullYear() - 1970 );
    
    function ageMonth() {
      if(todayDate.getMonth() >= birthDate.getMonth()) {
          if(todayDate.getDate() >= birthDate.getDate()) {
              return todayDate.getMonth() - birthDate.getMonth();
          }
          else {
              if((todayDate.getMonth() - 1) >= birthDate.getMonth()) {
                  return (todayDate.getMonth() - 1) - birthDate.getMonth();
              }
              else {
                  return ((todayDate.getMonth() - 1) + 12) - birthDate.getMonth();
              }
          }
      }
        
    };
    function ageDay() {
        if(todayDate.getDate() > birthDate.getDate()) {
            return todayDate.getDate() - birthDate.getDate();
        }
        else if(todayDate.getDate() == birthDate.getDate()) {
            return todayDate.getDate() - birthDate.getDate();
        }
        else {
            let calDate = new Date(birthDate.getFullYear(), birthDate.getMonth(), 0);
            return (todayDate.getDate() + calDate.getDate()) - birthDate.getDate();
        }
    };
    calculateAge.innerHTML = "Your Age "+ageYear+" Years "+ageMonth()+ " Months "+ageDay()+" Days"

  });