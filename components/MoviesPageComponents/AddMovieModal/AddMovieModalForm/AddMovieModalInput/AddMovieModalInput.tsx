/* eslint-disable @next/next/no-img-element */

import { AddMovieModalInputType } from './AddMovieModalInputType';
import {
  AddMovieModalGenres,
  AddMovieModalFormFile,
  AddMovieModalFormInput,
  AddMovieModalFormTextarea,
  AddMovieModalFormDate,
} from 'components';

export const AddMovieModalInput: React.FC<AddMovieModalInputType> = (props) => {
  return (
    <div>
      {(props.type === 'text' || props.type === 'number') && (
        <AddMovieModalFormInput
          name={props.name}
          type={props.type}
          placeholder={props.placeholder}
          language={props.language}
        />
      )}
      {props.type === 'textarea' && (
        <AddMovieModalFormTextarea
          name={props.name}
          type={props.type}
          placeholder={props.placeholder}
          language={props.language}
        />
      )}
      {props.type === 'genre' && (
        <AddMovieModalGenres placeholder={props.placeholder} />
      )}
      {props.type === 'file' && (
        <AddMovieModalFormFile
          name={props.name}
          type={props.type}
          placeholder={props.placeholder}
        />
      )}
      {props.type === 'date' && (
        <AddMovieModalFormDate
          name={props.name}
          type={props.type}
          placeholder={props.placeholder}
        />
      )}
    </div>
  );
};

export default AddMovieModalInput;
