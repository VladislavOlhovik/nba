'use client';

import { useEffect, useState } from 'react';

import { StyledButton } from '@/components';

type FormMessageProps = {
  message: string;
  startPosition: {
    x: number;
    y: number;
  };
  isSent: boolean;
  isVisible: boolean;
  onClose: () => void;
};

export const FormMessage = ({
  startPosition,
  message,
  isSent,
  isVisible,
  onClose,
}: FormMessageProps) => {
  const [shouldRender, setShouldRender] = useState(false);
  useEffect(() => {
    if (isVisible) setShouldRender(true);
  }, [isVisible]);

  const handleAnimationEnd = () => {
    if (!isVisible) setShouldRender(false);
  };

  if (!shouldRender) return null;
  return (
    <div
      style={{
        transformOrigin: `${startPosition.x}px ${startPosition.y}px`,
        opacity: isVisible ? 1 : 0,
      }}
      className={`fixed inset-0 
        ${isVisible ? 'animate-expand ' : 'animate-collapse'}
        flex items-center justify-center z-50`}
      onAnimationEnd={handleAnimationEnd}
    >
      <div className="mx-auto max-w-[664px] flex flex-col gap-6 items-center bg-gradient-to-b from-[#151618] to-[#0A0B0D] border border-purple-300 p-12 rounded-[66px] shadow-lg">
        {isSent ? (
          <>
            <p className="font-playfair text-h3 font-semibold">
              Thank you!
            </p>
            <p className="text-h6 font-medium text-center">
              We have received your message. Our team will
              get back to you within 2 business days to
              schedule your consultation or provide any
              additional information needed.
            </p>
          </>
        ) : (
          <>
            <p className="font-playfair text-h3 font-semibold">
              Sorry
            </p>
            <p className="text-h6 font-medium text-center text-red-400">
              {message}
            </p>
          </>
        )}
        <StyledButton
          onClick={onClose}
          title="Back to contact form"
          className="bg-purple-300"
        />
      </div>
    </div>
  );
};
