// https://docs.cypress.io/api/introduction/api.html

describe("My First Test", () => {
  it("has 'carousel' text", () => {
    cy.visit("/");
    cy.contains("div", "carousel");
  });
});
