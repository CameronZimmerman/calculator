// IMPORT MODULES under test here:
import { getDiff, getSum, getMult, getDiv } from '../utils.js';

const test = QUnit.test;

//getSum test
test('it should return 10 when given 5 and 5', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 10;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getSum(5, 5);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

//getSum test 2
test('it should return 20 when given 10 and 10', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 20;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getSum(10, 10);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

//getDiff test
test('it should return 0 when given 5 and 5', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 0;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getDiff(5, 5);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

//getDiff test 2
test('it should return 0 when given 10 and 10', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 0;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getDiff(10, 10);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

//getMult test
test('it should return 25 when given 5 and 5', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 25;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getMult(5, 5);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

//getMult test 2
test('it should return 100 when given 10 and 10', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 100;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getMult(10, 10);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

//getDiv test
test('it should return 1 when given 10 and 10', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 1;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getDiv(10, 10);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
