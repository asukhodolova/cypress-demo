describe('Simple', () => {
  const url = 'https://www.google.com/';
  const searchValue = 'Zebrunner';

  it('empty test', () => {
  });

  it('should be failed', () => {
    cy.visit(url).contains('Google');

    console.log(`Performing search with value Zebrunner`);
    cy.xpath("//*[@name='q']").click().type(searchValue).type('{enter}');

    console.log(`Verify first search result contains search value`);
    cy.xpath("//*[@id='search']//a").should('contain.text', 'asdkjahskdjahskdj');
  });
});
