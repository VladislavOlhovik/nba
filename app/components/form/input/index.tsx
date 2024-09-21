import { UseFormRegister } from 'react-hook-form';

import { FormSchemaType } from '@/lib/schemas';

interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  name: keyof FormSchemaType;
  register: UseFormRegister<FormSchemaType>;
  error?: string;
}

export const Input = ({
  register,
  name,
  error,
  ...props
}: InputProps) => {
  return (
    <div>
      <input
        className={`text-body2 px-6 py-3 rounded-[28px] bg-gray-300 focus:outline-none
            hover:placeholder-purple-100 hover:text-purple-100
            focus:text-purple-200 
            `}
        style={{ width: '-webkit-fill-available' }}
        {...props}
        {...register(name)}
      />
      {error && (
        <p className="absolute text-error text-[#C92F2F]">
          {error}
        </p>
      )}
    </div>
  );
};
