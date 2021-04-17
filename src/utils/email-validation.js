export const emailValidate = (emails) => {
  const values = emails.split(',').map((email) => email.trim());
  const isValids = values.map((email) => /^\S+@\S+\.\S+$/.test(email));
  const isValid = isValids.reduce(
    (prevValid, valid) => prevValid && valid,
    true,
  );

  if (!isValid) {
    return 'Emails are not valid. Please check and try again!';
  }
  return;
};
