function writeCards (namesArray){
    let Cards = []
    for (let i = 0; i <namesArray.length; i++){
        Cards.push(`Thank you, ${namesArray[i]}, for the wonderful surprise gift!`)
    }
    return Cards
}
function countDown(number){
    while (number>0){
        console.log(number);
        number -=1
    }
    console.log(number);
}