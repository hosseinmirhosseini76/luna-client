// https://docs.cypress.io/api/introduction/api.html

describe("My First Test", () => {
  it("Visits the app root url", () => {
    cy.visit("/");
    cy.contains("h1", "Welcome to Your Vue.js + TypeScript App");
    cy.contains("h3", "Installed CLI Plugins");
  });
});

describe("My Second Test", () => {
  it("Visits the /about url", () => {
    cy.visit("/about");
    cy.contains("h1", "This is an about page");
  });
});
