/* eslint-disable @next/next/no-img-element */
import { FormProvider } from 'react-hook-form';
import { useWriteComment } from 'hooks';

export const WriteComment: React.FC<{ quoteId?: number; refetch: any }> = (
  props
) => {
  const { user, submit, methods, t } = useWriteComment(
    props.refetch,
    props.quoteId
  );
  return (
    <div className='w-full pt-1'>
      <div className='w-full flex items-center gap-3'>
        <img
          className='w-10 h-10 rounded-[50%] object-cover bg-center'
          src={
            user?.profile_picture != undefined
              ? user?.profile_picture
              : '/assets/images/tlotr.png'
          }
          alt='profile picture'
        />
        <FormProvider {...methods}>
          <form className='w-full' onSubmit={methods.handleSubmit(submit)}>
            <input
              {...methods.register('comment')}
              className='placeholder-[#CED4DA] outline-none w-full bg-[#24222F] rounded-[0.625rem] py-2 px-4 text-white'
              placeholder={`${t('write-comment')}`}
            />
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default WriteComment;
