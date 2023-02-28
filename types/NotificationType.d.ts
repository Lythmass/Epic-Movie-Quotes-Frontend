import { QuoteCardType } from 'components/MoviePageComponents/QuoteCard';

export type NotificationType = {
  quote_id: number;
  author_profile_picture: string;
  author: string;
  is_read: boolean;
  is_comment: boolean;
  created_at: string;
  quote: QuoteCardType;
};
