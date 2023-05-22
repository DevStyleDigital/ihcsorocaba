import type { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { useRef, useState } from 'react';
import { useAuthContext } from '@contexts/Auth/useAuthContext';
import { getCookie } from '@services/cookies';

import { AdminPageCSS } from '@stylesPages/admin';
import { AdminButtonCSS } from '@stylesComponents/AdminButton';

const EMAIL_INPUT_ID = 'admin-email';
const PASSWORD_INPUT_ID = 'admin-password';

const Admin = () => {
  const router = useRouter();
  const { authenticateUser } = useAuthContext();
  const [isLoading, setIsLoading] = useState(false);

  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const adminButtonRef = useRef<HTMLButtonElement>(null);

  function callbackSuccess() {
    router.push('/admin/dashboard');
  }
  function callbackError() {
    if (emailInputRef.current && passwordInputRef.current) {
      emailInputRef.current.style.borderColor = 'var(--color-error)';
      passwordInputRef.current.style.borderColor = 'var(--color-error)';
    }
    alert('Senha ou Email incorretos. Por favor insira os dados novamente');
    adminButtonRef.current!.disabled = false;
    setIsLoading(false);
  }

  async function handleSubmitForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
    adminButtonRef.current!.disabled = true;
    const credentials = {
      email: emailInputRef.current!.value,
      password: passwordInputRef.current!.value,
    };

    await authenticateUser(credentials)
      .then(callbackSuccess)
      .catch(callbackError);
  }

  return (
    <AdminPageCSS>
      <h2>Administração</h2>
      <form onSubmit={handleSubmitForm}>
        <label htmlFor={EMAIL_INPUT_ID}>
          Insira o email administrativo:
          <input
            id={EMAIL_INPUT_ID}
            ref={emailInputRef}
            type="email"
            name={EMAIL_INPUT_ID}
            className="text-field"
            placeholder="Email"
            required
            onInput={(e) => {
              e.currentTarget.style.borderColor = 'var(--color-text)';
            }}
          />
        </label>
        <label htmlFor={PASSWORD_INPUT_ID}>
          Insira a senha administrativa:
          <input
            id={PASSWORD_INPUT_ID}
            ref={passwordInputRef}
            type="password"
            name={PASSWORD_INPUT_ID}
            className="text-field"
            placeholder="Password"
            required
            onInput={(e) => {
              e.currentTarget.style.borderColor = 'var(--color-text)';
            }}
          />
        </label>

        <AdminButtonCSS type="submit" ref={adminButtonRef}>
          {isLoading ? 'Carregando...' : 'Entrar'}
        </AdminButtonCSS>
      </form>
    </AdminPageCSS>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  if (getCookie(ctx, process.env.NEXT_PUBLIC_ADMIN_COOKIE!)) {
    return {
      redirect: {
        destination: '/admin/dashboard',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

export default Admin;
