const Math = require('../js/math.js');
const expect = require('chai').expect;
const sinon = require('sinon');

let valor = 0;

describe('Math class' , function() {
    beforeEach(function(){
        let valor = 10;
    });

    it('Multiplies two numbers',function(done){
        const math = new Math();
        this.timeout(3000);

        valor = 2;

        math.mult(5,valor, value => {
            expect(value).to.equal(10);
            done();
        })
    });

    it('Divide two numbers',function(){
        const math = new Math();
        valor = 10;
        expect(math.div(20,valor)).to.equal(2);
    });

    it('Validates obj',function() {
        const obj = {
            name : 'Luke Skywalker'
        };

        const obj2 = {...obj};

        expect(obj.name).to.equal(obj2.name);
    });

    it('Validates if function was called',function(){
        const req = {};
        const res = {
            load: sinon.spy()
        };
        const math = new Math();

        math.printDiv(req,res,5,5);

        expect(res.load.calledOnce).to.be.true;
    });
});
