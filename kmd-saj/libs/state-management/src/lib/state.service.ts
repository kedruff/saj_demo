import { Injectable } from '@angular/core';
import { ApplicantSummaryApiResponse } from '@kmd-saj/summary-results';
import { BehaviorSubject, Observable, of } from 'rxjs';

export const summaryResults = [
  {
    id: 0,
    name: 'Brandi Muller',
    position: 'International Solutions Designer',
    applied: 'Wed Sep 15 2020 21:34:56 GMT-0400 (Eastern Daylight Time)',
    experience: 14,
    availability: { M: 1, T: 1, W: 1, Th: 0, F: 1, S: 2, Su: 1 },
    questions: [
      { text: 'Eaque fugit quia consequuntur rem illum quas.', answer: 'no' },
    ],
  },
  {
    id: 1,
    name: 'Antonina McCullough',
    position: 'National Paradigm Consultant',
    applied: 'Fri Aug 06 2019 20:14:41 GMT-0400 (Eastern Daylight Time)',
    experience: 2,
    availability: { M: 2, T: 2, W: 2, Th: 2, F: 0, S: 0, Su: 1 },
    questions: [
      { text: 'Corporis quasi nemo doloribus quis recusandae.', answer: 'yes' },
    ],
  },
  {
    id: 2,
    name: 'Loy Balistreri',
    position: 'Product Division Representative',
    applied: 'Mon Nov 22 2012 04:15:17 GMT-0500 (Eastern Standard Time)',
    experience: 14,
    availability: { M: 2, T: 2, W: 2, Th: 0, F: 1, S: 2, Su: 2 },
    questions: [
      {
        text: 'Quisquam autem et deserunt aut odio consequuntur.',
        answer: 'no',
      },
    ],
  },
  {
    id: 3,
    name: 'Abe Bogan',
    position: 'District Markets Agent',
    applied: 'Tue May 04 2016 03:27:02 GMT-0400 (Eastern Daylight Time)',
    experience: 6,
    availability: { M: 1, T: 1, W: 1, Th: 0, F: 2, S: 0, Su: 0 },
    questions: [
      {
        text: 'Aspernatur commodi enim qui libero deleniti corrupti omnis sit aliquid.',
        answer: 'no',
      },
    ],
  },
  {
    id: 4,
    name: 'Giovanna Carroll',
    position: 'Legacy Solutions Producer',
    applied: 'Sat Feb 19 2014 06:44:51 GMT-0500 (Eastern Standard Time)',
    experience: 18,
    availability: { M: 2, T: 1, W: 0, Th: 1, F: 2, S: 1, Su: 0 },
    questions: [{ text: 'Possimus odio quas.', answer: 'no' }],
  },
  {
    id: 5,
    name: 'Rhiannon Hills',
    position: 'Investor Markets Manager',
    applied: 'Mon Feb 14 2020 12:51:51 GMT-0500 (Eastern Standard Time)',
    experience: 14,
    availability: { M: 2, T: 2, W: 2, Th: 2, F: 1, S: 0, Su: 1 },
    questions: [
      { text: 'Possimus odio qui non vitae quidem harum at.', answer: 'yes' },
    ],
  },
  {
    id: 6,
    name: 'Marisol Bayer',
    position: 'Senior Identity Liaison',
    applied: 'Fri Dec 17 2019 14:43:03 GMT-0500 (Eastern Standard Time)',
    experience: 16,
    availability: { M: 1, T: 1, W: 0, Th: 2, F: 2, S: 1, Su: 2 },
    questions: [
      {
        text: 'Aut perferendis beatae iste incidunt ullam vel et.',
        answer: 'no',
      },
    ],
  },
  {
    id: 7,
    name: 'Billie Reichert',
    position: 'Corporate Communications Facilitator',
    applied: 'Thu Nov 04 2018 19:54:35 GMT-0400 (Eastern Daylight Time)',
    experience: 12,
    availability: { M: 1, T: 0, W: 0, Th: 0, F: 0, S: 0, Su: 1 },
    questions: [
      {
        text: 'Cupiditate necessitatibus veritatis nihil pariatur libero qui.',
        answer: 'no',
      },
    ],
  },
  {
    id: 8,
    name: 'Rhea Kutch',
    position: 'Principal Optimization Manager',
    applied: 'Thu Jun 10 2013 16:12:04 GMT-0400 (Eastern Daylight Time)',
    experience: 14,
    availability: { M: 0, T: 1, W: 2, Th: 0, F: 0, S: 2, Su: 0 },
    questions: [
      {
        text: 'Voluptatem dolores modi autem illum sint eos molestias nam.',
        answer: 'no',
      },
    ],
  },
  {
    id: 9,
    name: 'Maybell Kshlerin',
    position: 'Future Creative Technician',
    applied: 'Wed Sep 22 2017 13:49:04 GMT-0400 (Eastern Daylight Time)',
    experience: 20,
    availability: { M: 1, T: 0, W: 1, Th: 0, F: 2, S: 0, Su: 0 },
    questions: [
      {
        text: 'Ipsa enim necessitatibus facere sit fugit numquam.',
        answer: 'yes',
      },
    ],
  },
  {
    id: 10,
    name: 'Jade Fadel',
    position: 'Legacy Solutions Strategist',
    applied: 'Wed Sep 15 2016 03:34:20 GMT-0400 (Eastern Daylight Time)',
    experience: 20,
    availability: { M: 0, T: 2, W: 0, Th: 2, F: 2, S: 0, Su: 0 },
    questions: [
      {
        text: 'Optio magnam deleniti quo explicabo quisquam voluptate aliquid mollitia.',
        answer: 'no',
      },
    ],
  },
  {
    id: 11,
    name: 'Stacy Bartell',
    position: 'District Applications Strategist',
    applied: 'Sat Mar 12 2020 17:59:22 GMT-0500 (Eastern Standard Time)',
    experience: 16,
    availability: { M: 2, T: 2, W: 1, Th: 0, F: 2, S: 1, Su: 1 },
    questions: [{ text: 'Magni optio voluptatem dolorem.', answer: 'no' }],
  },
  {
    id: 12,
    name: 'Caleigh Steuber',
    position: 'Lead Accounts Analyst',
    applied: 'Tue Apr 20 2021 08:34:00 GMT-0400 (Eastern Daylight Time)',
    experience: 6,
    availability: { M: 1, T: 0, W: 0, Th: 2, F: 0, S: 2, Su: 1 },
    questions: [
      {
        text: 'Iusto est quae quidem omnis consectetur consequatur eos.',
        answer: 'yes',
      },
    ],
  },
  {
    id: 13,
    name: 'Zechariah Hermann',
    position: 'Chief Usability Representative',
    applied: 'Sat May 08 2020 00:54:29 GMT-0400 (Eastern Daylight Time)',
    experience: 0,
    availability: { M: 1, T: 2, W: 1, Th: 1, F: 2, S: 1, Su: 0 },
    questions: [
      { text: 'Eveniet veritatis sed consectetur sit.', answer: 'yes' },
    ],
  },
  {
    id: 14,
    name: 'Hester Kemmer',
    position: 'Dynamic Interactions Officer',
    applied: 'Sat Nov 06 2020 23:14:29 GMT-0400 (Eastern Daylight Time)',
    experience: 16,
    availability: { M: 1, T: 0, W: 1, Th: 2, F: 1, S: 1, Su: 0 },
    questions: [
      {
        text: 'Rerum molestiae ut corrupti minima consectetur.',
        answer: 'yes',
      },
    ],
  },
  {
    id: 15,
    name: 'Ray Macejkovic',
    position: 'Internal Solutions Engineer',
    applied: 'Tue Jul 06 2018 18:08:21 GMT-0400 (Eastern Daylight Time)',
    experience: 2,
    availability: { M: 0, T: 1, W: 0, Th: 0, F: 2, S: 2, Su: 1 },
    questions: [{ text: 'Asperiores minus ipsam.', answer: 'yes' }],
  },
  {
    id: 16,
    name: 'Eleonore Wuckert',
    position: 'National Integration Developer',
    applied: 'Wed Aug 25 2019 12:52:38 GMT-0400 (Eastern Daylight Time)',
    experience: 4,
    availability: { M: 1, T: 2, W: 2, Th: 0, F: 0, S: 1, Su: 2 },
    questions: [
      { text: 'Quos placeat nihil cumque voluptates.', answer: 'yes' },
    ],
  },
  {
    id: 17,
    name: 'Ila Wunsch',
    position: 'Product Marketing Strategist',
    applied: 'Tue Sep 07 2021 13:54:53 GMT-0400 (Eastern Daylight Time)',
    experience: 10,
    availability: { M: 2, T: 1, W: 0, Th: 2, F: 1, S: 1, Su: 0 },
    questions: [
      {
        text: 'Odit porro illum molestiae dolorem maxime doloribus labore inventore.',
        answer: 'yes',
      },
      {
        text: 'Wait, is this an actual question in English?',
        answer: 'Why, yes; yes, it is.',
      },
    ],
  },
  {
    id: 18,
    name: 'Carmella Wuckert',
    position: 'Forward Applications Administrator',
    applied: 'Mon Nov 29 2020 15:49:35 GMT-0500 (Eastern Standard Time)',
    experience: 8,
    availability: { M: 1, T: 0, W: 2, Th: 0, F: 1, S: 2, Su: 1 },
    questions: [
      {
        text: 'Itaque impedit maiores neque similique iste laboriosam eius deserunt debitis.',
        answer: 'no',
      },
    ],
  },
  {
    id: 19,
    name: 'Malinda Goyette',
    position: 'Global Metrics Agent',
    applied: 'Sat Oct 23 2017 19:33:13 GMT-0400 (Eastern Daylight Time)',
    experience: 6,
    availability: { M: 1, T: 2, W: 1, Th: 2, F: 2, S: 2, Su: 1 },
    questions: [
      {
        text: 'Quos ipsum cumque itaque impedit dolore officia similique.',
        answer: 'yes',
      },
    ],
  },
];

@Injectable({
  providedIn: 'root',
})
export class StateService {
  _favorites: BehaviorSubject<Set<number>>;
  favorites$: Observable<Set<number>>;

  constructor() {
    const savedFavorites = localStorage.getItem(`savedApplicants`)
      ? (localStorage.getItem(`savedApplicants`) as string)
      : ``;

    const set = savedFavorites ? JSON.parse(savedFavorites) : [];
    this._favs = new Set(set);
    this._favorites = new BehaviorSubject<Set<number>>(this._favs);
    this.favorites$ = this._favorites.asObservable();
  }

  get allApplicants() {
    return this._allApplicants;
  }
  // dummy setter ... would be saved by the initial API call in summary-results
  set allApplicants(r) {
    this._allApplicants = summaryResults;
  }

  private _allApplicants = summaryResults;

  get currentFavorites() {
    return this._favs;
  }
  private _favs: Set<number>;

  addFavorite(m: number) {
    this._favs.add(m);
    this._writeFavoritesAndEmit();
  }

  removeFavorite(m: number) {
    console.log(`remove: ${m}`);
    this._favs.delete(m);
    this._writeFavoritesAndEmit();
  }

  private _writeFavoritesAndEmit() {
    this._favorites.next(this._favs);
    localStorage.setItem(`savedApplicants`, `[${[...this._favs].join(`,`)}]`);
  }

  getApplicantById(id: string): ApplicantSummaryApiResponse {
    const applicant = this._allApplicants.filter(
      (applicant) => applicant.id === parseInt(id)
    )[0];
    return applicant;
  }
}
