export const PHONE = '+12159008642';
export const FORMATTED_PHONE = '+1 (215) 900-8642';
export const EMAIL = 'sba@sba.com';
export const ADDRESS =
  '2655 Philmont Ave # 201, Huntingdon Valley, PA 19006';
export const ADDRESS_LINK = 'https://maps.app.goo.gl';
export const FACEBOOK_LINK = 'https://www.facebook.com';
export const INSTAGRAM_LINK = 'https://www.instagram.com';

export type FormDataType = {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  message: string;
  file?: {
    name: string;
    data: Buffer;
    type: string;
  };
};
