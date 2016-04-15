var hasChilds,
	childsNumber,
	ageOfChildren,
	amountOwed,
	amountCredit,
	amountPay,
	partnerPay,
	lifCover,
	lifeCover2,
	savings
var questions = {};


Reveal.initialize({
	 // Display controls in the bottom right corner
    controls: true,
    // Display a presentation progress bar
    progress: true,
    // Display the page number of the current slide
    slideNumber: false
});

$("#range").ionRangeSlider({
	type: "double",
    min: 0,
    max: 2000000,
    from: 0,
    from_max: 2000,
    grid: true
});


$('button').on('click', function(e){
	var id = e.target.className.split(' ')[0];
	questions[id] = $('#' + id).val();
	console.log(Object.keys(questions)[0]);
	$('td.hasChild').html(questions.hasChilds);
	$('td.childsNumber').html(questions.childsNumber);
	$('td.ageOfChildren').html(questions.ageOfChildren);
	$('td.amountOwed').html(questions.amountOwed);
	$('td.amountCredit').html(questions.amountCredit);
	$('td.amountPay').html(questions.amountPay);
	$('td.partnerPay').html(questions.partnerPay);
	$('td.lifeCover').html(questions.lifeCover);
	$('td.lifeCover2').html(questions.lifeCover2);
	$('td.savings').html(questions.savings);
	if (Object.keys(questions)[0] == 'yes') {
		questions.hasChilds = 'Yes'
	} else if (Object.keys(questions)[0] == 'no') {
		questions.hasChilds = 'No'
	}
});

$("form").submit(function (e) {
    e.preventDefault();
    // alert("call some function here");
});










