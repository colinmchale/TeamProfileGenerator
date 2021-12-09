const Intern = require("../library/Intern");

describe('Intern', () => {

    describe('instantation', () => {
        it('should pass and instantiate object correctly', () => {
            // Arrange 
            // Act 
            let testIntern = new Intern('Jason', 1, 'jason@gmail.com', 'SMU')
            // Assert 
            expect(testIntern.name).toBe('Jason')
            expect(testIntern.id).toEqual(1)
            expect(testIntern.email).toBe('jason@gmail.com')
            expect(testIntern.school).toBe('SMU')
        })
    });

    describe('getSchool', () => {
        it('should return school correctly', () => {
            // Arrange 
            let testIntern = new Intern('Jason', 1, 'jason@gmail.com', 'SMU')
            // Act
            let school = testIntern.getSchool()
            // Assert 
            expect(school).toBe('SMU')
        })
    });

    describe('getRole', () => {
        it('should return the correct role', () => {
             // Arrange 
             let testIntern = new Intern('Jason', 1, 'jason@gmail.com', 'SMU')
             // Act 
             let role = testIntern.getRole()
             // Assert 
             expect(role).toBe('Intern')
        })
    });
})