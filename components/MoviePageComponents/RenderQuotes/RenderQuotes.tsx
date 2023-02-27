import { useTranslation } from 'next-i18next';
import { QuoteMap } from 'types';
import { QuoteCard } from 'components';
import { useSelector } from 'react-redux';
import { getQuotes } from 'slices/quotesSlice';

export const RenderQuotes = () => {
  const { i18n } = useTranslation('movies');
  const getQuotesHere = useSelector(getQuotes);
  const displayQuotes = getQuotesHere?.map((quote: QuoteMap, index: number) => {
    return (
      <QuoteCard
        key={index}
        id={quote.id}
        quote={quote.quote[i18n.language === 'en' ? 'en' : 'ka']}
        thumbnail={quote.thumbnail}
      />
    );
  });

  return displayQuotes;
};
export default RenderQuotes;
