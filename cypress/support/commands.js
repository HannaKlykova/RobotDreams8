Cypress.Commands.add('sendRequest', (method, url, payload) => {
    return cy.request({
        method: method,
        url: url,
        body: payload,
        failOnStatusCode: false,
        headers: {
            Authorization: 'pk_2144452523_XWBOQCMLNN5HVAAN3IWLU7SJW1I2YGJF',
            'Content-Type': 'application/json'
        }
    });
});