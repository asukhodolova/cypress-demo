describe('Google search', () => {
    const url = 'https://www.google.com/';

    it('should pass with correct results', () => {
        performSearch('Zebrunner');
        performSearch('Nightwatch');
        performSearch('Zebrunner');
    });

    it('should fail with incorrect results', () => {
        const searchValue = "Zebrunner";
        cy.visit(url).contains('Google');
        cy.wait(30000);
        cy.xpath("//*[@name='q']").click().type(searchValue).type('{enter}');
        cy.xpath("//*[@id='search']//a").should('contain.text', "hello-hello");
    });

    function performSearch(searchValue) {
        cy.visit(url).contains('Google');
        cy.xpath("//*[@name='q']").click().type(searchValue).type('{enter}');
        cy.xpath("//*[@id='search']//a").should('contain.text', searchValue);
        cy.wait(30000);
    }
});
