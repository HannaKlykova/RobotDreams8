const faker = require('faker');

describe('API Tests', () => {

  it('getGoals', () => {
    const team_id = '9012323965';
    cy.sendRequest('GET', `https://api.clickup.com/api/v2/team/${team_id}/goal?include_completed=true`).then((response) => {
      cy.log(`Response Status: ${response.status}`);
      expect(response.status).to.eq(200);
    });
  });

  it('createGoal', () => {
    const team_id = '9012323965';
    const body = {
      "name": faker.internet.userName(),
      "due_date": 1568036964079,
      "description": "Goal Description",
      "multiple_owners": true,
      "owners": [183],
      "color": "#32a852"
    };

    cy.sendRequest('POST', `https://api.clickup.com/api/v2/team/${team_id}/goal`, body).then((response) => {
      cy.log(`Response Status: ${response.status}`);
      expect(response.status).to.eq(200);
    });
  });

  it('updateGoal', () => {
    const team_id = '9012323965';
    const body = {
      "name": faker.internet.userName(),
      "due_date": 1568036964079,
      "description": "Goal Description",
      "multiple_owners": true,
      "owners": [183],
      "color": "#32a852"
    };

    cy.sendRequest('POST', `https://api.clickup.com/api/v2/team/${team_id}/goal`, body).then((response) => {
      const id = response.body.id;
      const newBody = { "name": faker.internet.userName() };

      cy.sendRequest('PUT', `https://api.clickup.com/api/v2/team/${team_id}/goal/${id}`, newBody).then((updateResponse) => {
        expect(updateResponse.status).to.eq(200);
      });

      cy.sendRequest('DELETE', `https://api.clickup.com/api/v2/team/${team_id}/goal/${id}`).then((deleteResponse) => {
        expect(deleteResponse.status).to.eq(200);
      });
    });
  });
});
