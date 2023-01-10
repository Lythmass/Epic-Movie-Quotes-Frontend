import { Button } from 'components';
import { LanguageChanger } from 'components';
import { useWindowWidth } from 'hooks';

export default function NavBar(props: {
  setShowRegistrationModal: (value: boolean) => void;
}) {
  const getWindowWidth = useWindowWidth();
  return (
    <div className='w-full flex justify-between items-center px-10 lg:px-16'>
      <h1 className='text-skin-color'>MOVIE QUOTES</h1>
      <div className='flex justify-center items-center gap-5'>
        {getWindowWidth >= 1024 && <LanguageChanger />}
        {getWindowWidth >= 1024 && (
          <Button
            setShowRegistrationModal={props.setShowRegistrationModal}
            text='Sign up'
            color='red'
          />
        )}
        <Button text='Log in' color='none' />
      </div>
    </div>
  );
}
