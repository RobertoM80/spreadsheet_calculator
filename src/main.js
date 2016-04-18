var debts,
	max_pay,
	child,
	provisions,
	result

var questions = {
	ageOfChildren: 0,
	childsNumber: 0,
	amountOwed: 0,
	amountCredit: 0,
	amountPay: 0,
	partnerPay: 0,
	lifeCover: 0,
	lifeCover2: 0,
	savings: 0
};

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

	if (questions[id] !== questions[id]) {
		$('.' + id + 'Error').html('Please insert a numeric value');
	} else {
		$('.' + id + 'Error').empty();
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

	if (Object.keys(questions)[0] === 'yes') {
		questions.hasChilds = 'Yes'
	} else if (Object.keys(questions)[0] === 'no') {
		questions.hasChilds = 'No'
	}

	debts = parseInt(questions.amountOwed + questions.amountCredit);
	max_pay = returnMax(questions.amountPay, questions.partnerPay);
	child = parseInt(questions.ageOfChildren - questions.childsNumber);
	provisions = parseInt(questions.lifeCover + questions.lifeCover2 + questions.savings);	
	if (isNaN(debts) === true) {
		debts = 0
	} 
	if (isNaN(max_pay) === true) {
		max_pay = 0
	}
	if (isNaN(child) === true) {
		child = 0
	}
	if (isNaN(provisions) === true) {
		provisions = 0
	}

	result = debts + max_pay * 12 * child - provisions;

	$('span.sum').html(result);
});

$("form").submit(function (e) {
    e.preventDefault();
});














