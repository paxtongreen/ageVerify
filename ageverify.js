function verify(){
    let userAge = Number(document.getElementById("age").value)
    if(userAge<18){
        console.log("18+ only");
    }
    else{
        console.log("You are old enough to join.");
    }
}
