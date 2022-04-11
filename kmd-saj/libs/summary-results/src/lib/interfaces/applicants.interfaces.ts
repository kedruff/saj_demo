export interface ApplicantSummaryApiResponse extends ApplicantDetails {
  id: number;
}

export interface ApplicantDetails {
  name: string;
  position: string;
  applied: string;
  experience: number;
  availability: ApplicantAvailability;
  questions: ApplicantQuestions[];
}

export interface ApplicantAvailability {
  M: number;
  T: number;
  W: number;
  Th: number;
  F: number;
  S: number;
  Su: number;
}

export interface ApplicantQuestions {
  text: string;
  answer: string;
}
