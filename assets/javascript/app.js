/* - create variabes for questions inside html
    - create start button to initiate the questions and countdown timer
    - create function for a countdown timer (maybe a setTimeout)
    - create if statements to check work after timer expires (maybe a setTimeout)
    - if time allows create backrounds and fancy it up*/
   
// setTimeout(sixtySeconds, 10000 * 6);
var timer = document.getElementById('#displayTimer')
var counter = 60;
var correctAns
var wrongAns

$('.button').on('click',function(event) {
    event.preventDefault()
    //onclick="startCounting( )"
    // timer = document.setTimeout(function () {
    //     //stuff that happend when time runs out
    // },1000);
   // window.status = counter;    // show the initial value


    var countDown = setInterval(function() {
        if (counter === 1) {
            clearInterval(countDown);
        } 
        counter--
        $('#displayTimer').text(counter+'sec');
    },1000);

    //on click fuction that check if the answer attribute is correct
    //jquery empty or add classes 
});

function checkAns(params) {
    
    
}
