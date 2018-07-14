"use strict";


// PART 1: SHOW A FORTUNE

// function showFortune(fortune) {
// 	$("#fortune-text").html(fortune);
// }

// function getFortune(evt) {
// 	$.get('/fortune', showFortune);
// }

// $('#get-fortune-button').on('click', getFortune);



function getFortune(evt) {
	$("#fortune-text").load('/fortune');
}

$('#get-fortune-button').on('click', getFortune);




// PART 2: SHOW WEATHER

// function showWeather(evt) {
//     evt.preventDefault();

//     let url = "/weather.json";
//     // let formData = {"zipcode": $("#zipcode-field").val()};
//     $.get(url, getWeather);
// }

// function getWeather(result) {
// 	const forecast = result["forecast"];
// 	$("#weather-info").html(forecast);
// }

// $("#weather-form").on('submit', showWeather);

function showWeather(evt) {
    evt.preventDefault();

    $("#weather-info").load("/weather.json");
}

// function getWeather(result) {
// 	const forecast = result["forecast"];
// 	$("#weather-info").html(forecast);
// }


    // TODO: request weather with that URL and show the forecast in #weather-info

$("#weather-form").on('submit', showWeather);




// PART 3: ORDER MELONS

function showOrderedMelons(result) {
	if (result['code'] === 'ERROR') {
		$('#order-status').addClass('order-error');
	} else {
		$('#order-status').removeClass('order-error');
	}
	const message = result['msg'];
	$('#order-status').html(message);
}

function orderMelons(evt) {
    evt.preventDefault();
    let formInputs = {
    	'qty': $('#qty-field').val(),
    	'melon_type': $('#melon-type-field').val(),
    };

    $.post('/order-melons.json', formInputs, showOrderedMelons);

    // TODO: show the result message after your form
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}

$("#order-form").on('submit', orderMelons);


