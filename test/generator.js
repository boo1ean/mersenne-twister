var MersenneTwister = require('../');
var g = new MersenneTwister();

describe('Generator', function() {
	it('Should repeat random sequence on same seed', function() {
		var seed = 123;

		g.init_seed(seed);
		var first_1 = g.random();
		var first_2 = g.random();

		g.init_seed(seed);
		var second_1 = g.random();
		var second_2 = g.random();

		first_1.should.be.exactly(second_1);
		first_2.should.be.exactly(second_2);
	});

	it('Should allow seeding via constructor', function() {
		var seed = 325;
		var g1 = new MersenneTwister(seed);
		var g2 = new MersenneTwister(seed);

		for (var i = 0; i < 5; ++i) {
			g1.random().should.be.exactly(g2.random());
		}
	})
});
