export interface commentData {
    questionId: string;
  email: string;
  comment: string;
}

export interface problemData {
    _id: string;
  email: string;
  questionHeader: string;
  question: string;
  answer: string;
  isPublic: boolean;
}
