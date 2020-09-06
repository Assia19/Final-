var submitButton = document.getElementById('submit');
var ans1 = document.getElementsById('answer1')
var ans2 = document.getElementsById('answer2')
var ans3 = document.getElementsById('answer3')
var ans4 = document.getElementsById('answer4')
var ans5 = document.getElementsById('answer5')
var ans6 = document.getElementsById('answer6')
var ans7 = document.getElementsById('answer7')
var ans8 = document.getElementsById('answer8')
var ans9 = document.getElementsById('answer9')
var ans10 = document.getElementsById('answer10')
var ans11 = document.getElementsById('answer11')
var ans12 = document.getElementsById('answer12')




function showResults(){
    if(ans1.clicked == true && ans3.clicked == true ){
    alert ("You are sboui");

}
if(ans1.clicked == true && ans4.clicked == true){
    alert ("You are azza");

}
if(ans3.clicked == true && ans5.clicked == true){
    alert ("You are beji");

}
if(ans6.clicked == true && ans8.clicked == true){
    alert ("You are Dalenda");

}
if(ans1.clicked == true && ans8.clicked == true){
    alert ("You are fouchika");

}
if(ans1.clicked == true && ans10.clicked == true){
    alert ("You are Ameni");

}
    

}
submitButton.addEventListener('click', showResults);