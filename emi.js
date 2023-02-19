function calculateMonthlyExpendeture(){
    
    let salary = parseInt(document.getElementById("salary").value);
    let rentI = parseInt(document.getElementById("rentI").value);
    let interest = parseInt(document.getElementById("interest").value);
    let savings = parseInt(document.getElementById("savings").value);
    let otherinc = parseInt(document.getElementById("otherinc").value);
    let rentboard = parseInt(document.getElementById("rentboard").value);
    let travel = parseInt(document.getElementById("travel").value);
    let Entertainment = parseInt(document.getElementById("Entertainment").value);
    let children = parseInt(document.getElementById("children").value);
    let food = parseInt(document.getElementById("food").value);
    let householditems = parseInt(document.getElementById("householditems").value);
    let healthcare = parseInt(document.getElementById("healthcare").value);
    let clothing = parseInt(document.getElementById("clothing").value);
    let electricity = parseInt(document.getElementById("electricity").value);
    let phone = parseInt(document.getElementById("phone").value);
    let loan = parseInt(document.getElementById("loan").value);
    total = salary+rentI+interest+savings+otherinc+rentboard+travel+Entertainment+
    children+food+householditems+healthcare+clothing+electricity+phone+loan;
alert(total); 
   }