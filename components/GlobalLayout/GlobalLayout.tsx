import { AuthNavBar } from 'components';

export default function GlobalLayout(props: { children: JSX.Element }) {
  return (
    <div className='w-full bg-global-layout-bg min-h-screen'>
      <AuthNavBar />
      {props.children}
    </div>
  );
}
