describe("Matrix methods", function () {
    // TODO: Write this test
    it("Matrix.add - matrix", function() {
        var matrix1 = new Savage.Matrix(1, 2, 3, 4, 5, 6);
        var matrix2 = new Savage.Matrix(1, 2, 3, 4, 5, 6);
        var result = matrix1.add(matrix2);
        console.log('result', result);
    });
    // TODO: Write this test
    it("Matrix.add - numbers", function() {
        var matrix1 = new Savage.Matrix(1, 2, 3, 4, 5, 6);
        var result = matrix1.add(1, 2, 3, 4, 5, 6);
        console.log('result', result);
    });
    it("Matrix.clone", function() {
        var matrix1 = new Savage.Matrix(1, 2, 3, 4, 5, 6);
        var clone = matrix1.clone();
        expect(clone).to.not.be(matrix1);
        expect(clone).to.eql({
            a: 1,
            b: 2,
            c: 3,
            d: 4,
            e: 5,
            f: 6
        });
    });
    it("Matrix.invert", function() {
        var matrix1 = new Savage.Matrix(1, 2, 3, 4, 5, 6);
        var inverse = matrix1.invert();
        expect(inverse).to.eql({
            a: -2,
            b: 1,
            c: 1.5,
            d: -0.5,
            e: 1,
            f: -2
        });
        console.log('inverse', inverse);
    });
    // TODO: Write this test
    it("Matrix.rotate", function() {
        var matrix1 = new Savage.Matrix(1, 0, 0, 1, 0, 0);
        matrix1.rotate(90, 0, 0);
        console.log('m1', matrix1);
    });
    it("Matrix.scale - x", function() {
        var matrix = new Savage.Matrix(1, 0, 0, 1, 20, 30);
        matrix.scale(2);
        expect(matrix).to.eql({
            a: 2,
            b: 0,
            c: 0,
            d: 2,
            e: 20,
            f: 30
        });
        matrix.scale(0.5);
        expect(matrix).to.eql({
            a: 1,
            b: 0,
            c: 0,
            d: 1,
            e: 20,
            f: 30
        });
    });
    it("Matrix.scale - x, y", function() {
        var matrix = new Savage.Matrix(1, 0, 0, 1, 20, 30);
        matrix.scale(2, 3);
        expect(matrix).to.eql({
            a: 2,
            b: 0,
            c: 0,
            d: 3,
            e: 20,
            f: 30
        });
        matrix.scale(0.5, 1);
        expect(matrix).to.eql({
            a: 1,
            b: 0,
            c: 0,
            d: 3,
            e: 20,
            f: 30
        });
    });
    it("Matrix.scale - x, y, cx, cy", function() {
        var matrix = new Savage.Matrix(1, 0, 0, 1, 20, 30);
        matrix.scale(2, 3, 5, -5);
        expect(matrix).to.eql({
            a: 2,
            b: 0,
            c: 0,
            d: 3,
            e: 15,
            f: 40
        });
    });
    it("Matrix.split", function() {
        var matrix = new Savage.Matrix(1, 0, 0, 1, 0, 0);
        var result = matrix.split();
        expect(result.dx).to.be(0);
        expect(result.dy).to.be(0);
        expect(result.scalex).to.be(1);
        expect(result.scaley).to.be(1);
        expect(result.shear).to.be(0);
        expect(result.rotate).to.be(0);
        expect(result.isSimple).to.be(true);
        
        matrix = new Savage.Matrix(1.5, 0, 0, 0.5, 20, 25);
        result = matrix.split();
        expect(result.dx).to.be(20);
        expect(result.dy).to.be(25);
        expect(result.scalex).to.be(1.5);
        expect(result.scaley).to.be(0.5);
        expect(result.shear).to.be(0);
        expect(result.rotate).to.be(0);
        expect(result.isSimple).to.be(true);
    });
    it("Matrix.toTransformString", function() {
        var matrix = new Savage.Matrix(1.5, 0, 0, 0.5, 20, 25);
        console.log(matrix.toTransformString());
        
        var transformArrs = Savage.parseTransformString(
            "matrix(1, 2, 3, 4, 5, 6) " +
            "translate(7) " +
            "translate(8 9) " +
            "scale(10) " +
            "scale(11, 12) " +
            "rotate(13) " +
            "rotate(14 15 16) " +
            "skewX(17) " +
            "skewY(18) "
        );
        console.log(transformArrs.toString());

    });
    it("Matrix.translate", function() {
        var matrix = new Savage.Matrix(1, 0, 0, 1, 20, 30);
        matrix.translate(10, -10);
        expect(matrix).to.eql({
            a: 1,
            b: 0,
            c: 0,
            d: 1,
            e: 30,
            f: 20
        });
        matrix.translate(-1, -2);
        expect(matrix).to.eql({
            a: 1,
            b: 0,
            c: 0,
            d: 1,
            e: 29,
            f: 18
        });
    });
    it("Matrix.x", function() {
        var matrix = new Savage.Matrix(1, 0, 0, 1, 20, 30);
        var result = matrix.x(10, -10);
        expect(result).to.be(30);
    });
    it("Matrix.y", function() {
        var matrix = new Savage.Matrix(1, 0, 0, 1, 20, 30);
        var result = matrix.y(10, -10);
        expect(result).to.be(20);
    });
       
});