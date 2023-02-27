import Echo from 'laravel-echo';
import Pusher from 'pusher-js';
import { useEffect } from 'react';
import { echoAuthorize } from 'services';
import { useDispatch, useSelector } from 'react-redux';
import { selectValue } from 'slices/userInfoSlice';
import {
  getNotificationValues,
  setNotifications,
} from 'slices/newsFeedQuotesSlice';
import useFetchLikes from './useFetchLikes';
import useFetchComments from './useFetchComments';

declare global {
  interface Window {
    Pusher: any;
  }
}

export default function useSocket() {
  const user = useSelector(selectValue);
  const dispatch = useDispatch();
  const oldNotifications = useSelector(getNotificationValues);
  const refetchLikes = useFetchLikes();
  const refetchComments = useFetchComments();
  useEffect(() => {
    if (user != undefined) {
      window.Pusher = Pusher;
      const echo = new Echo({
        broadcaster: 'pusher',
        cluster: 'eu',
        key: 'a43fe81dfe2a6ac9a5e6',
        wsHost: true,
        encrypted: true,
        authorizer: (channel: any) => {
          return {
            authorize: async (socketId: number, callback: any) => {
              const response = await echoAuthorize(socketId, channel.name);
              callback(null, response.data);
            },
          };
        },
      });
      echo
        .private(`notification.${user?.id}`)
        .listen('SendNotification', (e: any) => {
          if (oldNotifications != undefined) {
            dispatch(setNotifications([e, ...oldNotifications]));
            refetchLikes();
            refetchComments();
          }
        });
      echo.channel('refetch').listen('Refetch', (e: any) => {
        if (e.refetch == 'refetch-likes') {
          refetchLikes();
        }
        if (e.refetch == 'refetch-comments') {
          refetchComments();
        }
      });
      return () => {
        echo.disconnect();
      };
    }
  }, [user, oldNotifications]);
}
