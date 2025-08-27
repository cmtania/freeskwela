export interface Training {
  id: number;
  header: string;
  subheader: string;
  company: string;
  context: string;
  description: string;
  registrationDeadline: string;
  submissionDeadline: string;
  eventDate: string;
  link: string;
  duration: string;
  category: string;
  capacity?: number;
  isNewlyAdded: boolean;
}