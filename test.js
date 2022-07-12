const stringLength = require('./string');
const reverseString = require('./reverseString');
const calculator = require('./calculator');
const capitalize = require('./capitalize');

test('# stringLength', () => {
    expect(stringLength('test')).toBe(4);
}); 

test('# emptyString', () => {
    expect(stringLength('')).toBe('This string is empty');
});

test('# longString', () => {
    expect(stringLength('this is long string')).toBe('This string is too long');
});

test('# reverseString', () => {
    expect(reverseString('zoom')).toBe('mooz');
});

describe('# Addition', () => {
    const  math = new calculator();

test('Add 1 + 1 = 2', () => {
    expect(math.add(1,1)).toBe(2);
});

test('Add 10 + 20 = 30', () => {
    expect(math.add(10,20)).toBe(30);
});

test('Add 15 + (-15) = 0', () => {
    expect(math.add(15,-15)).toBe(0);
});
    
});

describe('# subtract', () => {
    const  math = new calculator();

    test('Subtract 18 - 10 = 8', () => {
    expect(math.subtract(18,10)).toBe(8);
    });
    
    test('Subtract 10 - 10 = 0', () => {
    expect(math.subtract(10,10)).toBe(0);
    });
    
    test('Subtract 15 - (-15) = 30', () => {
    expect(math.subtract(15,-15)).toBe(30);
    });

});

describe('# divide', () => {
    const  math = new calculator();

    test('Divide 15 / 3 = 5', () => {
    expect(math.divide(15,3)).toBe(5);
    });

    test('Divide 30 / 3 = 10', () => {
    expect(math.divide(30,3)).toBe(10);
    });

    test('Divide -15 / 5 = -3', () => {
    expect(math.divide(-15,5)).toBe(-3);
    });
    
});

describe('# multiply', () => {
    const  math = new calculator();

    test('Multiply 5 * 3 = 15', () => {
    expect(math.multiply(5,3)).toBe(15);
    });

    test('Multiply 10 * -7 = -70', () => {
    expect(math.multiply(10,-7)).toBe(-70);
    });

    test('Multiply 7 * 0 = 0', () => {
    expect(math.multiply(7,0)).toBe(0);
    });

});

test('Capitalize alan => Alan', () => {
    expect(capitalize('alan')).toBe('Alan');
});
