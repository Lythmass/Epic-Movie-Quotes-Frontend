import { useEffect } from 'react';
import { getUserData } from 'services';
import { useDispatch } from 'react-redux';
import { getData } from 'slices/userInfoSlice';

export default function useFetchUserInfo() {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      const data = await getUserData();
      const result = data.data['user-data'];
      dispatch(getData(result));
    };
    fetchData();
  }, [dispatch]);
}
