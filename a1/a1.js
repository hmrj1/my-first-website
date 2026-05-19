console.log("hii")
const accountid=144553
let accountemail="hemraj@.com"
var accountpassword="1234"
accountcity="jaipur"
let accountstate;
//accountid=2
console.log(accountid);

accountemail="hemraj@1234.com"
accountpassword="12345"
accountcity="jaipur kota"
/*prefer not to use var
because issue of block scope and functional scope
Variable Type	Can change?	Scope	Recommended?
const	❌ No	Block	✅ Yes (for fixed values)
let	✅ Yes	Block	✅ Yes (preferred)
var	✅ Yes	Function	❌ No (avoid)
Without keyword	✅ Yes	Global	❌ Never
*/

console.table([accountid,accountemail,accountpassword,accountcity,accountstate])