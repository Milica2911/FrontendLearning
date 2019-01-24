// alert("hello");


var userElement = document.getElementById("user");

//console.log(userElement);
console.log("Korisnik (id=user) je: " + userElement.innerHTML);

//dohvatanje elemenata pomocu klase
console.log("Element sa klasom dsc: ");
var descElements = document.getElementsByClassName("desc");

//console.log("student 1: ");
//console.log(descElements[0].innerHTML);
//console.log("student 2: ");
//console.log(descElements[1].innerHTML);
//console.log("student 3: ");
//console.log(descElements[2].innerHTML);

console.log("studenti su: " 
        + descElements[0].innerHTML + ", "
        + descElements[1].innerHTML + ", "
        + descElements[2].innerHTML + ". "
        );

//izmena vrednosti elementa

userElement.innerHTML = "Milica";
console.log("Korisnik (id=user) je: " + userElement.innerHTML);

descElements[0].innerHTML = "Marija";
descElements[1].innerHTML = "Milica";
descElements[2].innerHTML = "Maja";

//provera korisnikovih godina tj. da li je punoletan

//onclick nacin 

function ageVerification(){
    //alert(ageInput);
    var ageInput = document.getElementById("age").value;  //ovo hvata vrednost varijable 
    var messageBoxElement = document.getElementById("message-box");
    
    if (ageInput >= 18) {
        messageBoxElement.innerHTML = "Korisnik je punoletan.";
    } else {
        messageBoxElement.innerHTML = "Korisnik nije punoletan.";
    }
}