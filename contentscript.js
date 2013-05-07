function replace_square_feet() {
    var regexp = /((?:\d+,)?\d+) sq ft/;
    document.body.innerHTML = document.body.innerHTML.replace(regexp, function(match, num, offset, string) {
	var value = num.replace(',','');
	return '<div title="' + (value * 0.092903).toFixed(2) + ' m^2' + '">' + match + '</div>';	
    });

    var regexp = /Sqft\: ((?:\d+,)?\d+)/g;
    document.body.innerHTML = document.body.innerHTML.replace(regexp, function(match, num, offset, string) {
	var value = num.replace(',','');
	return '<div title="' + (value * 0.092903).toFixed(2) + ' m^2' + '">' + match + '</div>';	
    });

}

window.onchange = replace_square_feet();
