import { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import RequestForm from '@/components/RequestForm';
import Contacts from '@/components/Contacts';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/ChatWidget';
import AuthDialog from '@/components/AuthDialog';

export default function Index() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authTab, setAuthTab] = useState<'login' | 'register'>('login');

  const handleLoginClick = () => {
    setAuthTab('login');
    setIsAuthOpen(true);
  };

  const handleRegisterClick = () => {
    setAuthTab('register');
    setIsAuthOpen(true);
  };

  const handleRequestClick = () => {
    document.getElementById('requests')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <Header onLoginClick={handleLoginClick} onRegisterClick={handleRegisterClick} />
      <main>
        <Hero onRequestClick={handleRequestClick} />
        <Services />
        <About />
        <RequestForm />
        <Contacts />
      </main>
      <Footer />
      <ChatWidget />
      <AuthDialog open={isAuthOpen} onOpenChange={setIsAuthOpen} defaultTab={authTab} />
    </div>
  );
}