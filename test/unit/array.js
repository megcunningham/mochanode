	var should = require("chai").should();

	describe('Array', function () {
		describe('#filter()', function () {
			it('should return an array of items that return truthy in the inner fn', function () {
				var array = [1,2,3,4,5];

				var output = array.filter(function (item) {
					return item % 2;
				});

				output.should.eql([1,3,5]);
			});
		});
	});


describe('Array', function () {
	describe('#map()', function () {
		it('should return an array with the return value of the inner fn', function() {
			var array = [1,2,3,4,5];

			var output = array.map(function (item) {
				return item * item;
			});

			output.should.eql([1,4,9,16,25]);
		});


		it('should keep the same length', function () {
			var array = [1,2,3,4,5];

			var length = array.map(function () {
				return false;
			}) .length;

			length.should.eql(array.length);
		});

		it('should not mutate the original array', function () {
			var array = [1,2,3,4,5];

			array.map(function () {
				return false;
			});

			array.should.eql([1,2,3,4,5]);
		});
	});
});