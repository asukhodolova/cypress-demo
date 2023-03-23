describe('Simple', () => {
  const url = 'https://www.google.com/';
  const searchValue = 'Zebrunner';

  it('should be passed ', () => {
    cy.task('log', 'Env variables:')
    cy.task('log', process.env);

    cy.visit(url).contains('Google');

    console.log(`Performing search with value Zebrunner`);
    cy.xpath("//input[@name='q']").click().type(searchValue).type('{enter}');

    console.log(`Verify first search result contains search value`);
    cy.xpath("//*[@id='search']//a").should('contain.text', searchValue);
  });
});
