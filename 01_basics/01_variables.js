const accountId= 154263
let accountEmail= "contactyuvrajanand@gmail.com"
var accountPass= "56426"
accountCity= "Delhi" //Also a method of variable declaration but not a good practice
let accountState;

// accountId= 3251 // Not allowed since it is declared as a constant

/* Prefer not to use var
because of issue in block scope and functional scope
*/

accountEmail= "contact@gmail.com"
accountCity= "Jaipur"
accountPass= "56483"

console.table ([accountId, accountEmail, accountPass, accountCity, accountState]);