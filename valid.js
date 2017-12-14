
 function validation() {

           	console.log('hi');
           	alert('mounika');
           
            
        
        var lastname=document.getElementById('lname').value;
         if (lastname == ""){ // == is comparison... = is assignment
            document.getElementById('errors1').innerHTML = "The First Name field is required";
            document.getElementById('errors1').style.color="Red";
            return false;

       
}
}