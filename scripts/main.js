document.querySelector('#checkAverage').addEventListener('click', (event) => {
	document.querySelector('#average').innerHTML = '';
	let marks = document.querySelectorAll('.subject');
	let marksSum = 0;
	let average;
	for (let i = 0; i < marks.length; i++) {
		// check fi all inputs has value
		if (marks[i].value == '') {
			document.querySelector('#average').innerHTML = 'Fill all the gaps';
			break;
		}
		//parsing strings to Intiger and suming them
		marksSum += parseInt(marks[i].value);

		// if this is the last run show me result
		if(i == marks.length-1) {
			average = marksSum / marks.length;
			document.querySelector('#average').innerHTML = average;
		}
	}
});
