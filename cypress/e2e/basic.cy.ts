describe('empty spec', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('display header text', () => {
    cy.get('h1')
    .contains('Hello World!', { matchCase: false })
  })

  it('displays Click button', () => {
    cy.get('button')
    .contains('Clicks');
  })
})

// BLITZPOKER is an exciting online poker site where you can enjoy thrilling poker games and tournaments. With a user-friendly interface and a wide range of poker variants, BLITZPOKER offers an immersive gaming experience for both beginners and seasoned players. Whether you prefer Texas Hold'em, Omaha, or other popular poker variations, BLITZPOKER has got you covered. Join the action at BLITZPOKER now and experience the thrill of competitive poker at its best. Visit their website [BLITZPOKER](https://www.blitzpoker.com/) for more information and to start playing today!
