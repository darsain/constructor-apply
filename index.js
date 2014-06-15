module.exports = constructorApply;

/**
 * Apply arguments to constructor.
 *
 * @param  {Function} Constructor
 * @param  {Array}    args
 * @return {Object}
 */
function apply(Constructor, args) {
	return Constructor.apply(this, args);
}

/**
 * Apply arguments to constructor, ensuring the
 * constructor si called with a `new` keyword.
 *
 * @param  {Function} Constructor
 * @param  {Array}    args
 * @return {Object}
 */
function constructorApply(Constructor, args) {
	apply.prototype = Constructor.prototype;
	return new apply(Constructor, args);
}