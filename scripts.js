let grantPoints = 10;
let userPoints = 40;

let userWins = 0;




function getDamage() {  
    return Math.floor(Math.random() *5) + 1;
}



let game = prompt('Would you like to play?', 'yes/no');


if(game == 'yes') {
    let user = prompt('what is your name', 'Enter name here');

    
while(userWins < 3 && userPoints > 0) {
    grantPoints -= getDamage();
    userPoints -= getDamage();
  
    if(grantPoints <= 0){
        userWins++;
        grantPoints = 10;
    } 
    console.log(user + ' has ' + userPoints + ' points');
    console.log('Grant has ' + grantPoints + ' points ');
}


if(userWins == 3) {
    console.log(user + ' wins! ')
}


} else {
    document.write('Loser! LOL! Have a Great day!');
}



// let Grant = 'Grant'

// let grantHealth = Math.floor(Math.random(grantPoints + -min + +min) * (10));
    // let userHealth = Math.floor(Math.random(userPoints + -min + +min) * (10));
    // console.log(user + ' has ' + userHealth + ' points left');
    // console.log(Grant + ' has ' + grantHealth + ' points left');
    


// getDamage();
    

    
    
// if(user = '') {
//     prompt("Let's Go!")
 

   

// while (Grant >= 0 && Grant >= 10) {
//     console.log(Grant);
//     Grant++