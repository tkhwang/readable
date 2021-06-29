describe('ui: Profile component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=profile--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to ui!');
    });
});
