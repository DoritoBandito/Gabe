function GabesMath() {

}

//Function to check if the parse value is an integer.
GabesMath.prototype.isInt = function(value) {
	return !isNaN(value) && (function(x) { return (x | 0) === x; })(parseFloat(value))
}

module.exports = GabesMath;