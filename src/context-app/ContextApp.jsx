import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { HomePage } from './HomePage';
import { AboutPage } from './AboutPage';
import { LoginPage } from './LoginPage';
import { NavBar } from './components/NavBar';
import { UserProvider } from './context/UserProvider';

export const ContextApp = () => {
  return (
    <UserProvider>
      <header className="mb-5">
        <NavBar />

        <hr />
      </header>
      <main className="px-5 mx-auto max-w-6xl">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </main>
    </UserProvider>
  );
};
