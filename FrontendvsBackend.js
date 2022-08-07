console.log("Server");       

function reverseString(str){
    var splitString = str.split("");                //String Objeckt wird aufgeteilt und in Array gesetzt
   

    var reverseArray = splitString.reverse();      //Array wird umgedreht
    

    var joinArray = reverseArray.join("");          //Array wird in/als String ausgegeben 
    console.log(joinArray);               
}

reverseString("Server")

const z = "Server";
console.log(z.length);



const x = "Server";
console.log(x.length*3);



const y = "Server";
console.log(y.length%5);

