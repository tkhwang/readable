describe('ui: Card component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=card--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to ui!');
    });
});
