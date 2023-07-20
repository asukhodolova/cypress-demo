describe('Google search', () => {
  const url = 'https://www.google.com/';
  const searchValue = 'Zebrunner';

  it('Should pass', { 'owner': 'asukhodolova' }, () => {
    cy.zebrunnerTestCaseKey('ZTP-1848', 'ZTP-1849', 'ZTP-1847');

    cy.visit(url).contains('Google');

    console.log(`Performing search with value Zebrunner`);
    cy.xpath("//*[@name='q']").click().type(searchValue).type('{enter}');

    console.log(`Verify first search result contains search value`);
    cy.xpath("//*[@id='search']//a").should('contain.text', searchValue);
  });

  it('Should fail', () => {
    cy.zebrunnerTestCaseKey('ZTP-1854', 'ZTP-1850');

    cy.visit(url).contains('Google');

    console.log(`Performing search with value Zebrunner`);
    cy.xpath("//*[@name='q']").click().type(searchValue).type('{enter}');

    console.log(`Verify first search result contains search value`);
    cy.xpath("//*[@id='search']//a").should('contain.text', "some unexisting text");
  });

});
