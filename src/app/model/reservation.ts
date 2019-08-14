export interface Reservation {
  id: number;
  bookId: number;
  memberId: number;
  start: string;
  end: string;
  returned: boolean;
}
