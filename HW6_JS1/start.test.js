'use strict';
//begin string training test block
let string = 'Vashchenko Oleksandr GeekHub student';

test('test_string', () => {
    expect(string.charAt(5)).toEqual('h');
    expect(string.charAt(35)).toEqual('t');
    expect(string[35]).toEqual('t');
    expect(string.charCodeAt(5)).toEqual(104);
    expect(string.length).toEqual(36);
    expect(string.split(' ', 3)).toEqual(["Vashchenko", "Oleksandr", "GeekHub"]);
    expect([1, 2, 3].join('+')).toEqual('1+2+3');
    expect([1, 2, 3].join(' + ')).toEqual('1 + 2 + 3');
    expect('Hello I am ' + string.concat('! ', 'Now I learning JS.')).toEqual('Hello I am Vashchenko Oleksandr GeekHub student! Now I learning JS.');
    expect(string.endsWith('ent')).toEqual(true);

    //!!! Why don't works? Don't understand how methods works. I try the different inputs.
    // let regexp = /e+/g;
    // expect(regexp.exec(string)).toEqual(["e"]);

    expect('Name it is the name'.replace(/name/g, "not only you name")).toEqual('Name it is the not only you name');
    expect('geekhub'.toUpperCase()).toEqual('GEEKHUB');
    expect('GEEKHUB'.toLowerCase()).toEqual('geekhub');
    // expect().toEqual();

});

//begin numbers training test block
let num1 = 1;
let num2 = 2;
let num3 = 3;
let num4 = 5;
let num5 = 8;
let num6 = 13;
// It is the mystery Fibonacci numbers
function fib(n){
    let first = 1;
    let fibonacci = 1;
    for (var i = 3; i <= n; i++) {
        let summ = first + fibonacci;
        first = fibonacci;
        fibonacci = summ;
    }
    return fibonacci;
}

test('test_numbers', () => {
    expect(num1 + fib(3)).toEqual(3);
    expect(((num6 + fib(3))/7).toFixed(2)).toEqual('2.14');
    expect((num2 + (num6 + fib(num4)) / num5 / num3 / 2.25).toFixed(2)).toEqual('2.33');
    expect((2.125).toPrecision(3)).toEqual('2.13');
    expect((num1 + fib(7)).toString()).toEqual('14');
    expect((num1 + fib(7)).valueOf()).toEqual(14);
    expect("String" * 5).toEqual(NaN);
    expect(Number.MAX_VALUE).toEqual(1.7976931348623157e+308);

    expect(Number.MAX_VALUE + num6).toEqual(1.7976931348623157e+308);
    //It is maybe bag because test is pass and process finishing with exit code 0

    expect(Number.MIN_VALUE).toEqual(5e-324);
    expect(num3/0).toEqual(Infinity);
    // expect().toEqual();

});

//begin array training test block
let BiG_LaTeRs = ['BiG', 'laTeRs'];
let long_string = ['string1', 'string2', 'string3', 'string4', 'string5', 'string6', 'string7'];
let numeric = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let Poped = numeric.pop();

test('test_arrays', () => {
    expect(long_string.toString()).toEqual('string1,string2,string3,string4,string5,string6,string7');
    expect((long_string.join(' ')).indexOf('string3')).toEqual(16);

    expect(Poped).toEqual(9);
    //Ok!!! Why then
    expect(numeric.pop()).toEqual(8);
    //Because the first operation Poped delete last element in the numeric array (9) and
    // next operation delete from the numeric array new last element (8) and output this value
    //If we delete the element in the numeric array need back them to place. Use the .push()
    expect(numeric).toEqual([1, 2, 3, 4, 5, 6, 7]);
    expect(numeric.push(8, 9)).toEqual(numeric.length);
    expect(numeric).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    //It is the my self comment *Vashchenko Oleksandr "NOT COPY PASS"

    expect(BiG_LaTeRs.join(' ')).toEqual('BiG laTeRs');
    expect(long_string.shift()).toEqual('string1');
    expect(long_string).toEqual(['string2', 'string3', 'string4', 'string5', 'string6', 'string7']);
    expect(long_string.unshift('string1')).toEqual(7);
    // expect().toEqual();

});

//begin compare-operators training test block
let compare1 = num1;
let compare2 = num5;
let compare_10_fib = fib(10);

test('test_compare_operators', () => {
    expect(compare_10_fib).toEqual(55);
    expect(compare1).toEqual(1);
    expect(compare2).toEqual(8);
    expect(compare1 == 1).toEqual(true);
    expect(compare1 == '1').toEqual(true);
    expect(compare1 === '1').toEqual(false);
    expect(compare1 === compare2).toEqual(false);
    expect(compare1 < compare2).toEqual(true);
    expect(compare1 > compare2).toEqual(false);
    expect(compare1 !== compare2).toEqual(true);
    expect(compare_10_fib + compare2 > compare_10_fib + compare1).toEqual(true);
    expect(compare_10_fib + compare2 <= compare_10_fib + compare2).toEqual(true);
    expect(1 / 0).toEqual(Infinity);
    // expect().toEqual();

});

//begin equality comparison algorithm training test block

test('test_equality_comparison_algorithm', () => {
    expect(long_string + numeric).toEqual('string1,string2,string3,string4,string5,string6,string71,2,3,4,5,6,7,8,9');
    expect(long_string + ', ' + num1).toEqual('string1,string2,string3,string4,string5,string6,string7, 1');
    expect(long_string - numeric).toEqual(NaN);
    expect(numeric - 1).toEqual(NaN);
    expect(numeric / 2).toEqual(NaN);
    expect(numeric * 3).toEqual(NaN);
    expect(numeric / 0).toEqual(NaN);
    expect('a' / 'a').toEqual(NaN);
    expect([20] / 2).toEqual(10);
    expect('a'.charCodeAt()).toEqual(97);
    expect(('a'.charCodeAt()) / 97).toEqual(1);
    expect(String([])).toEqual('');
    expect(String(function () {})).toEqual('function () {}');
    expect(Number([])).toEqual(0);
    expect(Number([num1])).toEqual(1);
    expect(Number(['1'])).toEqual(1);
    // expect().toEqual();

});
