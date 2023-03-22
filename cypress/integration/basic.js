describe('Google search', () => {
  const url = 'https://www.google.com/';
  const searchValue = 'Zebrunner';

  it('Empty test', () => {
    // cy.zebrunnerTestCaseKey('ANNAS-3');
    cy.log(process.env.REPORTING_RUN_ENVIRONMENT);
    cy.log(process.env.REPORTING_PROJECT_KEY);
    cy.log(process.env);
  });

  it('Should pass', { 'owner': 'asukhodolova' }, () => {
    // cy.zebrunnerTestCaseKey(undefined, 'ANNAS-1', 'ANNAS-5', 'ANNAS-6', null, "unexisting");
    cy.log(process.env.REPORTING_RUN_ENVIRONMENT);
    cy.log(process.env.REPORTING_PROJECT_KEY);
    cy.log(process.env);
    cy.visit(url).contains('Google');

    console.log(`Performing search with value Zebrunner`);
    cy.xpath("//input[@name='q']").click().type(searchValue).type('{enter}');

    console.log(`Verify first search result contains search value`);
    cy.xpath("//*[@id='search']//a").should('contain.text', searchValue);
  });

  it('Should fail', () => {
    // cy.zebrunnerTestCaseKey('ANNAS-2', 'ANNAS-4');
    // cy.zebrunnerTestCaseStatus('ANNAS-2', 'RETEST');

    cy.visit(url).contains('Google');

    console.log(`Performing search with value Zebrunner`);
    cy.xpath("//input[@name='q']").click().type(searchValue).type('{enter}');

    console.log(`Verify first search result contains search value`);
    cy.xpath("//*[@id='search']//a").should('contain.text', "asdalsdjalskdjlaksjdlkajsd");
  });

});
