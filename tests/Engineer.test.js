const Engineer = require("../library/Engineer");

describe('Engineer', () => {

    describe('instantation', () => {
        it('should pass and instantiate object correctly', () => {
            // Arrange 
            // Act 
            let testEngineer = new Engineer('Jason', 1, 'jason@gmail.com', 'jasongithub')
            // Assert 
            expect(testEngineer.name).toBe('Jason')
            expect(testEngineer.id).toEqual(1)
            expect(testEngineer.email).toBe('jason@gmail.com')
            expect(testEngineer.github).toBe('jasongithub')
        })
    });

    describe('getGithub', () => {
        it('should return github correctly', () => {
            // Arrange 
            let testEngineer = new Engineer('Jason', 1, 'jason@gmail.com', 'jasongithub')
            // Act
            let github = testEngineer.getGithub()
            // Assert 
            expect(github).toBe('jasongithub')
        })
    });

    describe('getRole', () => {
        it('should return the correct role', () => {
            // Arrange 
            let testEngineer = new Engineer('Jason', 1, 'jason@gmail.com', 'jasongithub')
            // Act 
            let role = testEngineer.getRole()
            // Assert 
            expect(role).toBe('Engineer')
        })
    });
})