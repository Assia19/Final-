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
    alert ("You are in la casa de papel ");

}
if(ans1.clicked == true && ans4.clicked == true){
    alert ("You are in Narcos");

}
if(ans3.clicked == true && ans5.clicked == true){
    alert ("You are in Elite");

}
if(ans6.clicked == true && ans8.clicked == true){
    alert ("You are in Prison Break");

}
if(ans1.clicked == true && ans8.clicked == true){
    alert ("You are in Breaking Bad");

}
if(ans1.clicked == true && ans10.clicked == true){
    alert ("You are in Riverdale");

}
    

}
submitButton.addEventListener('click', showResults);