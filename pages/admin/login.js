import { Button, TextInput } from 'flowbite-react';
import { useRouter } from 'next/router';

import React from 'react';

const login = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    router.push('/admin/dashboard');
  };
  return (
    <div className="w-screen h-screen  flex justify-center items-center">
      <form className="space-y-2 w-[300px] p-4" onSubmit={handleLogin}>
        <p>Login as admin</p>
        <TextInput placeholder="Enter email" type="email" />
        <TextInput placeholder="Enter password" type="password" />
        <Button className="w-full" type="submit">
          Login
        </Button>
      </form>
    </div>
  );
};

export default login;
