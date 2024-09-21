export const sendEmail = async (formData: FormData) => {
  try {
    const response = await fetch('/api/send-email', {
      method: 'POST',
      body: formData,
    });
    const result = await response.json();
    if (response.ok) {
      return {
        message: result.message,
        isSent: response.ok,
      };
    } else {
      return { message: result.error, isSent: response.ok };
    }
  } catch (error) {
    console.error('Failed to submit form', error);
    return {
      message: 'Failed to submit form',
      isSent: false,
    };
  }
};
