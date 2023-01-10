describe("template spec", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173");
  });

  it("init view", () => {
    cy.get('[data-cy="product-view"]').should("be.visible");
    cy.get('[data-cy="options-list"]').should("be.not.visible");
  });

  it("check products", () => {
    cy.get('[data-cy="product"]').should("be.visible").should("have.length", 5);
    cy.get('[data-cy="button"]').contains("load more").click();
    cy.get('[data-cy="product"]')
      .should("be.visible")
      .should("have.length", 10);
  });

  it("check left filter", () => {
    cy.get('[data-cy="filter"]').should("be.visible");

    cy.get('[data-cy="filter"]')
      .get('[data-cy="value"]')
      .first()
      .parent()
      .find('[data-cy="options-list"]')
      .should("be.not.visible")
      .parent()
      .click()
      .find('[data-cy="options-list"]')
      .should("be.visible")
      .find('[data-cy="option"]')
      .contains("laptops")
      .click();

    cy.get('[data-cy="filter"]')
      .get('[data-cy="value"]')
      .first()
      .click()
      .should("contain", "categories: 1 selected");

    cy.get('[data-cy="button"]').should("not.exist");

    cy.get('[data-cy="category"]').should(($cat) => {
      expect($cat).to.contain("laptops");
    });

    cy.get('[data-cy="filter"]')
      .get('[data-cy="value"]')
      .first()
      .parent()
      .click()
      .find('[data-cy="options-list"]')
      .find('[data-cy="clear"]')
      .click();

    cy.get('[data-cy="filter"]')
      .get('[data-cy="value"]')
      .first()
      .should("contain", "select categories");

    cy.get('[data-cy="product"]').should("be.visible").should("have.length", 5);
  });

  it("check right filter", () => {
    cy.get('[data-cy="filter"]').should("be.visible");

    cy.get('[data-cy="filter"]')
      .get('[data-cy="value"]')
      .last()
      .parent()
      .find('[data-cy="options-list"]')
      .should("be.not.visible")
      .parent()
      .click()
      .find('[data-cy="options-list"]')
      .should("be.visible")
      .find('[data-cy="option"]')
      .contains("Apple")
      .click();

    cy.get('[data-cy="filter"]')
      .get('[data-cy="value"]')
      .last()
      .click()
      .should("contain", "brands: 1 selected");

    cy.get('[data-cy="button"]').should("not.exist");

    cy.get('[data-cy="brand"]').should(($cat) => {
      expect($cat).to.contain("Apple");
    });

    cy.get('[data-cy="filter"]')
      .get('[data-cy="value"]')
      .last()
      .parent()
      .click()
      .find('[data-cy="options-list"]')
      .find('[data-cy="clear"]')
      .click();

    cy.get('[data-cy="filter"]')
      .get('[data-cy="value"]')
      .last()
      .should("contain", "select brands");

    cy.get('[data-cy="product"]').should("be.visible").should("have.length", 5);
  });
});
