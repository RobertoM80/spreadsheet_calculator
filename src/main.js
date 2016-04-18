var hasChilds,
	childsNumber,
	ageOfChildren,
	amountOwed,
	amountCredit,
	amountPay,
	partnerPay,
	lifCover,
	lifeCover2,
	savings,
	debts,
	max_pay,
	child,
	provisions,
	result

var questions = {};


function returnMax(val1, val2) {
	if (parseInt(val1) > parseInt(val2)) {
		return parseInt(val1)
	} else {
		return parseInt(val2)
	}
}
 
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
	questions[id] = parseInt($('#' + id).val());

	if(questions.ageOfChildren === undefined)  {
		questions.ageOfChildren = '0';
	} else if (questions.childsNumber === undefined) {
		questions.childsNumber = '0'
	} else if (questions.amountOwed === undefined) {
		questions.amountOwed = '0'
	} else if (questions.amountCredit === undefined) {
		questions.amountCredit = '0'
	} else if (questions.amountPay === undefined) {
		questions.amountPay = '0'
	} else if (questions.partnerPay === undefined) {
		questions.partnerPay = '0'
	} else if (questions.lifeCover === undefined) {
		questions.lifeCover = '0'
	} else if (questions.lifeCover2 === undefined) {
		questions.lifeCover2 = '0'
	} else if (questions.savings === undefined) {
		questions.savings = '0'
	};

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
	console.log(questions.ageOfChildren, questions.childsNumber);
	debts = parseInt(questions.amountOwed + questions.amountCredit);
	max_pay = returnMax(questions.amountPay, questions.partnerPay);
	child = parseInt(questions.ageOfChildren - questions.childsNumber);
	provisions = parseInt(questions.lifeCover + questions.lifeCover2 + questions.savings);	
	result = debts + max_pay * 12 * child - provisions;

	$('span.sum').html(result);
});

$("form").submit(function (e) {
    e.preventDefault();
});














