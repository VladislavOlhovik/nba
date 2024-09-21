export const CONTACT_INFO = {
  PHONE: '+16508805109',
  FORMATTED_PHONE: '+1 (650) 880-5109',
  EMAIL: 'sba@sba.com',
  ADDRESS: '20 Nottingham Ln, Horsham, PA 19044',
  ADDRESS_LINK: 'https://maps.app.goo.gl/hdL9MooDEMCwRYcz9',
  FACEBOOK_LINK: 'https://www.facebook.com',
  INSTAGRAM_LINK: 'https://www.instagram.com',
  TWITTER_LINK: 'https://twitter.com/',
  LINKEDIN_LIMK: 'https://www.linkedin.com/',
};

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
