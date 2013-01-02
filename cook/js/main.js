$(document).ready(function() {
    var saved = $.cookie('selected-thing');
    if (saved !== null)
	$('.sel').val(saved);

    console.log(saved);
    $('.sel').on('change', function() {
	console.log($(this).val());
	$.cookie('selected-thing', $(this).val(), {path:'/'});
    });
});
