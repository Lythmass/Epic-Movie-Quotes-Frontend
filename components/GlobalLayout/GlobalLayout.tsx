import { AuthNavBar } from 'components';
import { useSelector } from 'react-redux';
import { showNewEmailModal } from 'slices/newEmailModalSlice';

export default function GlobalLayout(props: { children: JSX.Element }) {
  const showNewEmailModalHere = useSelector(showNewEmailModal);
  return (
    <div
      className={` ${
        showNewEmailModalHere && 'overflow-hidden h-screen'
      } w-full bg-global-layout-bg min-h-screen`}
    >
      <AuthNavBar />
      {props.children}
    </div>
  );
}
