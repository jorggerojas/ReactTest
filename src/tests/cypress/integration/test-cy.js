it("App component", () => {
  cy.visit("http://localhost:3000/");
  cy.get(".greetings").contains("Hello");
  cy.get("a")
    .click()
    .then(() => {
      cy.get("p").should("have.text", "Clicked!");
      cy.get("a")
        .click()
        .then(() => {
          cy.get("p").should("have.text", "");
        });
    });
});
