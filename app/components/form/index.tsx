'use client';

import { useCallback, useRef, useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { Container, SubmitButton } from '@/components';
import { Clip } from '@/components/icons';
import { formSchema, FormSchemaType } from '@/lib/schemas';

import { Input } from './input';

export const Form = () => {
  const submitButtonRef = useRef<HTMLDivElement>(null);
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
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormSchemaType) => {
    console.log(data);
    setPending(true);
    if (submitButtonRef.current) {
      const rect =
        submitButtonRef.current.getBoundingClientRect();
      setButtonPosition({
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
      });
    }

    // const result = await sendEmail(data);
    // if (result?.isSent) {
    //   setResponse(result);
    //   reset();
    // } else {
    //   setResponse(result);
    // }
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
          className="max-w-[664px]"
        >
          <div className="grid grid-cols-2 gap-4 mb-4">
            <Input
              name="fullName"
              autoComplete="name"
              type="text"
              placeholder="Full name"
              register={register}
            />
            <Input
              name="email"
              type="text"
              autoComplete="email"
              placeholder="Email"
              register={register}
            />
            <Input
              name="phone"
              type="text"
              autoComplete="tel"
              placeholder="Phone number"
              register={register}
            />
            <Input
              name="company"
              type="text"
              autoComplete="company"
              placeholder="Company"
              register={register}
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
            />
          </div>
          <div className="flex justify-end mt-4">
            <SubmitButton
              title="Send Message"
              className="bg-purple-300"
            />
          </div>
        </form>
      </Container>
    </section>
  );
};
