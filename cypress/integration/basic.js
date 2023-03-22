describe('Google search', () => {
    const url = 'https://www.google.com/';
    const searchValue = 'Zebrunner';

    it('Should pass', {'owner': 'asukhodolova'}, () => {
      // cy.zebrunnerTestCaseKey(undefined, 'ANNAS-1', 'ANNAS-5', 'ANNAS-6', null, "unexisting");
  
      cy.visit(url).contains('Google');
  
      console.log(`Performing search with value Zebrunner`);
      cy.xpath("//input[@name='q']").click().type(searchValue).type('{enter}');
  
      console.log(`Verify first search result contains search value`);
      cy.xpath("//*[@id='search']//a").should('contain.text', searchValue);
    });
  
    it('Should fail', {'owner': 'szagriychuk'}, () => {
      // cy.zebrunnerTestCaseKey('ANNAS-2', 'ANNAS-4');
      // cy.zebrunnerTestCaseStatus('ANNAS-2', 'RETEST');

      cy.visit(url).contains('Google');
  
      console.log(`Performing search with value Zebrunner`);
      cy.xpath("//input[@name='q']").click().type(searchValue).type('{enter}');
  
      console.log(`Verify first search result contains search value`);
      cy.xpath("//*[@id='search']//a").should('contain.text', "asdalsdjalskdjlaksjdlkajsd");
    });
  
    it('Empty test', () => {
        // cy.zebrunnerTestCaseKey('ANNAS-3');
    });
  });
  