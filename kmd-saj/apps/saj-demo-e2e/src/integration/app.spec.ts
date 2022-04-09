import { getGreeting } from '../support/app.po';
import { faker } from '@faker-js/faker';
import {
  SummaryResults,
  ApplicantSummaryApiResponse,
} from '@kmd-saj/summary-results';

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
  return fakeData;
}

describe('saj-demo', () => {
  beforeEach(() => {
    cy.visit('/');
    /**
     * If we wanted to use fake data for sets of tests, we could
     */
    // cy.intercept(`/summary-results`, defaultData());
  });

  it('should filter the table', () => {
    cy.get(`tbody tr`).should((el) => {
      expect(el.length).to.eq(20);
    });
    cy.getTestHook(`filterInput`).type('abc');
    cy.getTestHook(`filterSubmit`).click();
    cy.get(`tbody tr`).should((el) => {
      expect(el.length).to.eq(0);
    });
    cy.getTestHook(`filterReset`).click();
    cy.get(`tbody tr`).should((el) => {
      expect(el.length).to.eq(20);
    });
    cy.getTestHook(`filterInput`).type('agent');
    cy.getTestHook(`filterSubmit`).click();
    cy.get(`tbody tr`).should((el) => {
      expect(el.length).to.eq(2);
    });
    cy.getTestHook(`filterReset`).click();
    cy.getTestHook(`filterInput`).type('Wu');
    cy.getTestHook(`filterSubmit`).click();
    cy.get(`tbody tr`).should((el) => {
      expect(el.length).to.eq(3);
    });
  });

  it('should add and remove favorites', () => {
    cy.getTestHook(`managerFavoritesTable`).should(`not.exist`);
    cy.getTestHook(`link-17`).click();
    cy.getTestHook(`saveFavorite`).should((el: JQuery<HTMLButtonElement>) =>
      el.text().includes(`Add Favorite`)
    );
    cy.getTestHook(`saveFavorite`).click();
    cy.getTestHook(`saveFavorite`).should((el: JQuery<HTMLButtonElement>) =>
      el.text().includes(`Remove Favorite`)
    );

    cy.go(-1);
    cy.getTestHook(`managerFavoritesTable`).then(
      (el: JQuery<HTMLTableElement>) => {
        cy.wrap(el)
          .find(`tbody tr`)
          .should((el) => {
            expect(el.length).to.eq(1);
          });
      }
    );

    cy.getTestHook(`link-8`).click();
    cy.getTestHook(`saveFavorite`).click();
    cy.go(-1);
    cy.getTestHook(`managerFavoritesTable`).then(
      (el: JQuery<HTMLTableElement>) => {
        cy.wrap(el)
          .find(`tbody tr`)
          .should((el) => {
            expect(el.length).to.eq(2);
          });
      }
    );
  });

  it('should remove favorites from the summary page', () => {
    cy.getTestHook(`managerFavoritesTable`).should(`not.exist`);
    cy.getTestHook(`link-17`).click();
    cy.getTestHook(`saveFavorite`).click();
    cy.go(-1);
    cy.getTestHook(`managerFavoritesTable`).then(
      (el: JQuery<HTMLTableElement>) => {
        cy.wrap(el)
          .find(`tbody tr`)
          .should((el) => {
            expect(el.length).to.eq(1);
          });
      }
    );
    cy.getTestHook(`removeFavorite-17`).click();
    cy.getTestHook(`managerFavoritesTable`).should(`not.exist`);
  });

  it('should show Applicant details page', () => {
    const expectedValues = ['2', '1', '0', '2', '1', '1', '0'];
    const qa = {
      text: 'Wait, is this an actual question in English?',
      answer: 'Why, yes; yes, it is.',
    };
    cy.getTestHook(`link-17`).click();
    cy.url().should((url) => expect(url).to.match(/applicant\/17/));

    cy.get(`dd`).should((el: JQuery<HTMLElement>) => {
      expect(el.length).to.eq(7);
      Array.from(el).forEach((el, i) => {
        expect(el.textContent).to.eq(expectedValues[i]);
      });
    });

    cy.getTestHook(`applicant-question-1`).should(
      (el: JQuery<HTMLHeadingElement>) =>
        expect(el.text().trim()).to.eq(`Q: ${qa.text}`)
    );

    cy.getTestHook(`applicant-answer-1`).should(
      (el: JQuery<HTMLHeadingElement>) =>
        expect(el.text().trim()).to.eq(`A: ${qa.answer}`)
    );
  });
});
