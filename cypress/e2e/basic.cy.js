describe('Google search', () => {
  const url = 'https://www.google.com/';
  const searchValue = 'Zebrunner';

  it('Should pass', { 'owner': 'asukhodolova' }, () => {
    cy.zebrunnerTestCaseKey(undefined, 'ANNAS-1', 'ANNAS-4', null, "unexisting");

    cy.visit(url).contains('Google');

    console.log(`Performing search with value Zebrunner`);
    cy.xpath("//*[@name='q']").click().type(searchValue).type('{enter}');

    console.log(`Verify first search result contains search value`);
    cy.xpath("//*[@id='search']//a").should('contain.text', searchValue);
  });

  it('Should fail', () => {
    cy.zebrunnerTestCaseKey('ANNAS-2', 'ANNAS-6');
    cy.zebrunnerTestCaseStatus('ANNAS-6', 'RETEST');

    cy.screenshot('my-screenshot222');
    cy.visit(url).contains('Google');

    console.log(`Performing search with value Zebrunner`);
    cy.xpath("//*[@name='q']").click().type(searchValue).type('{enter}');

    console.log(`Verify first search result contains search value`);
    cy.xpath("//*[@id='search']//a").should('contain.text', "asdalsdjalskdjlaksjdlkajsd");
  });

  it('Empty test', () => {
    cy.zebrunnerTestCaseKey('ANNAS-3');

    cy.visit(url).contains('Google');
    cy.task('log', 'command result')
    cy.exec('find / -name ffmpeg').then((result) => {
      cy.task('log', result.stdout);
    })
  });

});
