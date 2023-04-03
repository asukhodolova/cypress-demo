describe('Nested file', () => {
    const url = 'https://www.google.com/';
    const searchValue = 'Zebrunner';
  
    it('Should pass', { 'owner': 'asukhodolova' }, () => {
      cy.visit(url).contains('Google');
  
      console.log(`Performing search with value Zebrunner`);
      cy.xpath("//input[@name='q']").click().type(searchValue).type('{enter}');
  
      console.log(`Verify first search result contains search value`);
      cy.xpath("//*[@id='search']//a").should('contain.text', searchValue);
    });
  
    it('Should fail', () => {
      cy.visit(url).contains('Google');
  
      console.log(`Performing search with value Zebrunner`);
      cy.xpath("//input[@name='q']").click().type(searchValue).type('{enter}');
  
      console.log(`Verify first search result contains search value`);
      cy.xpath("//*[@id='search']//a").should('contain.text', "asdalsdjalskdjlaksjdlkajsd");
    });
  
    it('Empty test', () => {
    });
  
  });
  