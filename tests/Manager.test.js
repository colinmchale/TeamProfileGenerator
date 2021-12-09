const Manager = require("../library/Manager");

describe('Manager', () => {

    describe('instantation', () => {
        it('should pass and instantiate object correctly', () => {
            // Arrange 
            // Act 
            let testManager = new Manager('Jason', 1, 'jason@gmail.com', 4)
            // Assert 
            expect(testManager.name).toBe("Jason")
            expect(testManager.id).toEqual(1)
            expect(testManager.email).toBe("jason@gmail.com")
            expect(testManager.officeNum).toEqual(4)
        })
    });

    describe('getOfficeNum', () => {
        it('should return office number correctly', () => {
            // Arrange 
            let testManager = new Manager('Jason', 1, 'jason@gmail.com', 4)
            // Act
            let officeNum = testManager.getOfficeNum()
            // Assert 
            expect(officeNum).toEqual(4)
        })
    });

    describe('getRole', () => {
        it('should return the correct role', () => {
             // Arrange 
             let testManager = new Manager('Jason', 1, 'jason@gmail.com', 4)
             // Act 
             let role = testManager.getRole()
             // Assert 
             expect(role).toBe('Manager')
        })
    });
})