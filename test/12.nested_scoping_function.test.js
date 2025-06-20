beforeAll(() => console.info("Before All Outer"));
afterAll(() => console.info("After All Outer"));
beforeEach(() => console.info("Before Each Outer"));
afterEach(() => console.info("After Each Outer"));

test("Test Outer", () => console.info("Test Outer"));

describe("Inner", () => {

    beforeAll(() => console.info("Before All Inner"));
    afterAll(() => console.info("After All Inner"));
    beforeEach(() => console.info("Before Each Inner"));
    afterEach(() => console.info("After Each Inner"));

    test("Test Inner", () => console.info("Test Inner"));
    
    describe("inner inner", () => {
        beforeAll(() => console.info("Before All Inner inner"));
        afterAll(() => console.info("After All Inner inner"));
        beforeEach(() => console.info("Before Each Inner inner"));
        afterEach(() => console.info("After Each Inner inner"));
    
        test("Test Inner", () => console.info("Test Inner inner"));

    })

});