import useFetchComments from 'hooks/useFetchComments';
import { useSelector } from 'react-redux';
import { getComments, getLikes } from 'slices/newsFeedQuotesSlice';
import { getQuotes, getViewQuote } from 'slices/quotesSlice';
import usePostCardSectionConfig from './usePostCardSectionConfig';

export default function useViewQuoteModalConfig() {
  const quoteId = useSelector(getViewQuote);
  const refetch = useFetchComments();
  const quote = useSelector(getQuotes)?.filter(
    (quote: { id: number }) => quoteId == quote.id
  )[0];
  const comments = useSelector(getComments)?.filter(
    (comment) => comment.quote_id == quoteId
  );
  const likesLength = useSelector(getLikes)?.filter(
    (like) => like.quote_id == quoteId
  ).length;

  const { like, isLiked } = usePostCardSectionConfig(quoteId);
  return { refetch, quote, comments, likesLength, quoteId, like, isLiked };
}
