import { NextRequest } from 'next/server';

import { FormDataType } from './definitions';

async function parseForm(
  req: NextRequest
): Promise<FormDataType> {
  const contentType = req.headers.get('content-type');
  if (
    !contentType ||
    !contentType.includes('multipart/form-data')
  ) {
    throw new Error(
      'Content type must be multipart/form-data'
    );
  }

  const formData = await req.formData();
  const result: FormDataType = {
    fullName: (formData.get('fullName') as string) || '',
    email: (formData.get('email') as string) || '',
    phone: (formData.get('phone') as string) || '',
    company: (formData.get('company') as string) || '',
    message: (formData.get('message') as string) || '',
  };

  const file = formData.get('file') as File | null;

  if (file !== null) {
    const arrayBuffer = await file.arrayBuffer();
    result.file = {
      name: file.name,
      data: Buffer.from(arrayBuffer),
      type: file.type,
    };
  }

  return result;
}

export { parseForm };
