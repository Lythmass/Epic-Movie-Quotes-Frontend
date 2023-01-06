import { Button } from 'components';

export default function NavBar() {
  return (
    <div className='w-full flex justify-between items-center px-10'>
      <h1 className='text-skin-color'>MOVIE QUOTES</h1>
      <div className='flex justify-center items-center gap-5'>
        <Button text='Log in' color='none' />
      </div>
    </div>
  );
}
