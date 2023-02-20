import { useFetchLikes } from 'hooks';
import { useEffect, useState } from 'react';
import { useMutation } from 'react-query';
import { useSelector } from 'react-redux';
import { postLike, postUnlike } from 'services';
import { getLikes } from 'slices/newsFeedQuotesSlice';
import { selectValue } from 'slices/userInfoSlice';

export default function usePostCardSectionConfig(quoteId?: number) {
  const [isLiked, setIsLiked] = useState(0);
  const [likesCount, setLikesCount] = useState(0);
  const refetch = useFetchLikes();
  const user = useSelector(selectValue);
  const likes = useSelector(getLikes);

  const likeMutation = useMutation(
    (data: any) => {
      return postLike({ quote_id: data });
    },
    {
      onSuccess: (response) => {
        setIsLiked(response.data.likeId);
        refetch();
      },
    }
  );
  const unlikeMutation = useMutation(
    (data: number) => {
      return postUnlike({ id: data });
    },
    {
      onSuccess: () => {
        setIsLiked(0);
        refetch();
      },
    }
  );
  const like = () => {
    if (isLiked) {
      unlikeMutation.mutate(isLiked);
    } else {
      likeMutation.mutate(quoteId);
    }
  };
  useEffect(() => {
    if (likes !== undefined) {
      for (let i = 0; i < likes.length; i++) {
        if (likes[i].quote_id == quoteId) {
          if (likes[i].user_id == user?.id) {
            setIsLiked(likes[i].id);
          }
        }
      }
    }
  }, [likes]);

  useEffect(() => {
    setLikesCount(() => {
      return likes?.filter((like: any) => quoteId === like.quote_id).length;
    });
  }, [likes]);

  return {
    likesCount,
    like,
    isLiked,
  };
}
