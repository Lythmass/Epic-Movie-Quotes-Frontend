import useFetchComments from 'hooks/useFetchComments';
import { useDispatch, useSelector } from 'react-redux';
import { getComments, getLikes } from 'slices/newsFeedQuotesSlice';
import { getAllQuotes, getViewQuote, setViewQuote } from 'slices/quotesSlice';
import useCloseModal from './useCloseModal';
import usePostCardSectionConfig from './usePostCardSectionConfig';

export default function useViewQuoteModalConfig() {
  const quoteId = useSelector(getViewQuote);
  const refetch = useFetchComments();
  const dispatch = useDispatch();
  const quote = useSelector(getAllQuotes)?.filter(
    (quote: { id: number }) => quoteId == quote.id
  )[0];
  const comments = useSelector(getComments)?.filter(
    (comment) => comment.quote_id == quoteId
  );
  const likesLength = useSelector(getLikes)?.filter(
    (like) => like.quote_id == quoteId
  ).length;
  const { modalRef, closeModal } = useCloseModal(() =>
    dispatch(setViewQuote(0))
  );
  const { like, isLiked } = usePostCardSectionConfig(quoteId);
  return {
    refetch,
    quote,
    comments,
    likesLength,
    quoteId,
    like,
    isLiked,
    modalRef,
    closeModal,
  };
}
