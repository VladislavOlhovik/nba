'use client';

import { useCallback, useRef, useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { Container, StyledButton } from '@/components';
import { Clip } from '@/components/icons';
import { formSchema, FormSchemaType } from '@/lib/schemas';
import { sendEmail } from '@/lib/actions';
import { FormDataType } from '@/lib/definitions';

import { Input } from './input';
import { FormMessage } from './form-message';

export const Form = () => {
  const submitButtonRef = useRef<HTMLButtonElement>(null);
  const [showMessage, setShowMessage] = useState(false);
  const [buttonPosition, setButtonPosition] = useState({
    x: 0,
    y: 0,
  });
  const [pending, setPending] = useState(false);
  const [{ message, isSent }, setResponse] = useState({
    message: '',
    isSent: false,
  });

  const {
    resetField,
    watch,
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormSchemaType) => {
    setPending(true);
    if (submitButtonRef.current) {
      const rect =
        submitButtonRef.current.getBoundingClientRect();
      setButtonPosition({
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
      });
    }

    const formData = new FormData();
    (
      Object.keys(data) as Array<keyof FormDataType>
    ).forEach(key => {
      if (key === 'file') {
        if (
          data[key] &&
          data[key]!.length > 0 &&
          data[key]![0] instanceof File
        ) {
          formData.append('file', data[key]![0]);
        }
      } else {
        formData.append(key, data[key] as string);
      }
    });

    const result = await sendEmail(formData);
    if (result?.isSent) {
      setResponse(result);
      reset();
    } else {
      setResponse(result);
    }
    setPending(false);
    setShowMessage(true);
  };

  const handleCloseMessage = useCallback(() => {
    setShowMessage(false);
  }, []);
  return (
    <section id="contacts">
      <Container className="min-h-screen flex flex-col justify-center">
        <div className="w-full mb-[40px]">
          <h2 className="text-h2">Get In Touch</h2>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-[764px] relative"
        >
          <div className="grid grid-cols-2 gap-6 mb-6">
            <Input
              name="fullName"
              autoComplete="name"
              type="text"
              placeholder="Full name"
              register={register}
              error={errors.fullName?.message}
            />
            <Input
              name="email"
              type="text"
              autoComplete="email"
              placeholder="Email"
              register={register}
              error={errors.email?.message}
            />
            <Input
              name="phone"
              type="number"
              autoComplete="tel"
              placeholder="Phone number"
              register={register}
              error={errors.phone?.message}
            />
            <Input
              name="company"
              type="text"
              autoComplete="company"
              placeholder="Company"
              register={register}
              error={errors.company?.message}
            />
          </div>
          <div className="relative">
            <label
              htmlFor="file"
              className="cursor-pointer absolute right-[20px] top-[18px] group"
            >
              <Clip className="group-hover:stroke-purple-100 group-active:stroke-purple-200" />
            </label>
            <input
              type="file"
              id="file"
              className="absolute invisible"
              {...register('file')}
            />
            <Input
              name="message"
              type="text"
              placeholder="Message"
              register={register}
              error={errors.message?.message}
            />
          </div>
          {!!watch()?.file?.length && (
            <span className="absolute right-0">
              {watch().file[0].name}
              <button
                onClick={() => resetField('file')}
                className="ml-4 mr-2 pointer"
              >
                x
              </button>
            </span>
          )}
          <div className="flex justify-end mt-6">
            <StyledButton
              ref={submitButtonRef}
              pending={pending}
              title="Send Message"
              className="bg-purple-300"
              type="submit"
            />
          </div>
        </form>
        <FormMessage
          isSent={isSent}
          startPosition={buttonPosition}
          message={message}
          isVisible={showMessage}
          onClose={handleCloseMessage}
        />
      </Container>
    </section>
  );
};
