const Employee = require("../library/Employee");


describe('Employee', () => {

    describe('instantation', () => {
        it('should pass and instantiate object correctly', () => {
            // Arrange 
            // Act 
            let testEmployee = new Employee('Jason', 1, 'jason@gmail.com')
            // Assert 
            expect(testEmployee.name).toBe("Jason")
            expect(testEmployee.id).toEqual(1)
            expect(testEmployee.email).toBe("jason@gmail.com")
        })
    });

    describe('getEmail', () => {
        it('should return email correctly', () => {
            // Arrange 
            let testEmployee = new Employee('Jason', 1, 'jason@gmail.com')
            // Act
            let email = testEmployee.getEmail()
            // Assert 
            expect(email).toBe("jason@gmail.com")
        })
    });

    describe('getId', () => {
        it('should return id correctly', () => {
            // Arrange 
            let testEmployee = new Employee('Jason', 1, 'jason@gmail.com')
            // Act 
            let id = testEmployee.getId()
            // Assert 
            expect(id).toEqual(1)
        })
    });

    describe('getName', () => {
        it('should return name correctly', () => {
            // Arrange 
            let testEmployee = new Employee('Jason', 1, 'jason@gmail.com')
            // Act 
            let name = testEmployee.getName()
            // Assert 
            expect(name).toBe("Jason")
        })
    });

    describe('getRole', () => {
        it('should ', () => {
            // Arrange 
            // Act 
            // Assert 
        })
    });

})