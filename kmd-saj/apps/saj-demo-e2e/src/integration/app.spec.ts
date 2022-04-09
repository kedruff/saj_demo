import { getGreeting } from '../support/app.po';
import { faker } from '@faker-js/faker';
import { ApplicantSummaryApiResponse } from '@kmd-saj/summary-results';

function defaultData(): ApplicantSummaryApiResponse[] {
  const fakeData = [];
  for (let i = 0; i < 20; i++) {
    const answer =
      faker.random.number({
        min: 0,
        max: 1,
      }) === 0
        ? `yes`
        : `no`;

    const fakeUser = {
      id: i,
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      position: `${faker.name.jobTitle()}`,
      applied: `${faker.date.past()}`,
      experience: faker.datatype.number({
        min: 0,
        max: 20,
        precision: 2,
      }),
      availability: {
        M: faker.datatype.number({
          min: 0,
          max: 2,
        }),
        T: faker.datatype.number({
          min: 0,
          max: 2,
        }),
        W: faker.datatype.number({
          min: 0,
          max: 2,
        }),
        Th: faker.datatype.number({
          min: 0,
          max: 2,
        }),
        F: faker.datatype.number({
          min: 0,
          max: 2,
        }),
        S: faker.datatype.number({
          min: 0,
          max: 2,
        }),
        Su: faker.datatype.number({
          min: 0,
          max: 2,
        }),
      },
      questions: [
        {
          text: faker.lorem.sentence(),
          answer: answer,
        },
      ],
    };
    fakeData.push(fakeUser);
  }
  console.log(`fakeData`, fakeData);
  return fakeData;
}

describe('saj-demo', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.intercept(`/summary-results`, defaultData());
  });

  it('should display welcome message', () => {
    // Custom command example, see `../support/commands.ts` file
    cy.login('my-email@something.com', 'myPassword');

    // Function helper example, see `../support/app.po.ts` file
    getGreeting().contains('Welcome saj-demo');
  });
});
