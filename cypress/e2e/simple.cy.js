describe('Simple suite', () => {
  const url = 'https://www.google.com/';
  const searchValue = 'Zebrunner';

  it('simple test', () => {
    cy.visit(url).contains('Google');

    console.log(`Performing search with value Zebrunner`);
    cy.xpath("//*[@name='q']").click().type(searchValue).type('{enter}');

    console.log(`Verify first search result contains search value`);
    cy.xpath("//*[@id='search']//a").should('contain.text', searchValue);
  });
});
