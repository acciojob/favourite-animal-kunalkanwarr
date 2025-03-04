//your code here
describe('Check if image exists and loads', () => {
  it('loads the panda image', () => {
    cy.visit('http://localhost:3000');
    cy.get('#pandaImage').should(($img) => {
      expect($img[0].naturalWidth).to.be.gt(0);
    });
  });
});
