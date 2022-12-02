describe("Form App Test", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/")
    })
    const nameInput = () => cy.get("input[name=username]");
    const passwordInput = () => cy.get("input[name=password]");
    const emailInput = () => cy.get("input[name=email]");
    const termsBox = () => cy.get('[type="checkbox"]')
    const createBtn = () => cy.get("input[name=create-button]");

    it("Name input", () => {
        nameInput().should("exist");
        nameInput().type("asdf").should("have.value", "asdf");
    })
    it("Password input", () => {
        passwordInput().should("exist");
        passwordInput().type("asdfgh").should("have.value", "asdfgh");
    })
    it("Email input", () => {
        emailInput().should("exist");
        emailInput().type("asdf@abc.com").should("have.value", "asdf@abc.com");
    })
    it("Terms input", () => {
        termsBox().should("exist");
        termsBox().check();
    })
    it("Create Button", () => {
        createBtn().should("exist");
    })
    it("Form Input", () => {
        nameInput().type("asdf");
        emailInput().type("asdf@abc.com");
        passwordInput().type("asdfgh");
        termsBox().check();
        createBtn().click();
    })
})