/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function validate()
            {
                var name = document.forms["form1"]["Name"].value;
                var num = document.forms["form1"]["num"].value;
                var email = document.forms["form1"]["email"].value;
                var atposition = email.indexOf("@");  
                var dotposition = email.lastIndexOf(".");
                var cname = document.forms["form1"]["cname"].value;
                
                if (name===null || name==="")
                {  
                    document.getElementById('error-name').innerHTML = "Name can't be blank";  
                    
                }
                else if (isNaN(num) || num.length!==10 || num===null)
                {  
                    document.getElementById('error-num').innerHTML = "Enter Number correctly";  
                     
                }
                else if (atposition<1 || dotposition<atposition+2 || dotposition+2>=email.length || email===null)
                {  
                    document.getElementById('error-email').innerHTML = "Please enter a valid e-mail address";  
                    document.myForm.EMail.focus() ;
                     
                }
            }
