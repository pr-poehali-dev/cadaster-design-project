import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/ChatWidget';
import AuthDialog from '@/components/AuthDialog';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const contactInfo = [
  {
    icon: 'Phone',
    title: 'Телефон',
    value: '+7 (495) 123-45-67',
    subtitle: 'Звонки принимаются 24/7',
    link: 'tel:+74951234567'
  },
  {
    icon: 'Mail',
    title: 'Email',
    value: 'info@kadastrpro.ru',
    subtitle: 'Ответим в течение 2 часов',
    link: 'mailto:info@kadastrpro.ru'
  },
  {
    icon: 'MapPin',
    title: 'Адрес офиса',
    value: 'г. Москва, ул. Примерная, д. 10, офис 305',
    subtitle: 'Прием по предварительной записи',
    link: '#'
  },
  {
    icon: 'Clock',
    title: 'График работы',
    value: 'Пн-Пт: 9:00 - 19:00',
    subtitle: 'Сб: 10:00 - 16:00, Вс: выходной',
    link: '#'
  }
];

const socialLinks = [
  { icon: 'MessageCircle', name: 'Telegram', link: '#', color: 'bg-blue-500' },
  { icon: 'Phone', name: 'WhatsApp', link: '#', color: 'bg-green-500' },
  { icon: 'MessageCircle', name: 'Viber', link: '#', color: 'bg-purple-500' }
];

const offices = [
  { city: 'Москва', address: 'ул. Примерная, д. 10, офис 305', phone: '+7 (495) 123-45-67' },
  { city: 'Санкт-Петербург', address: 'Невский пр., д. 100, офис 12', phone: '+7 (812) 987-65-43' },
  { city: 'Казань', address: 'ул. Баумана, д. 25, офис 8', phone: '+7 (843) 456-78-90' }
];

export default function ContactsPage() {
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

  return (
    <div className="min-h-screen">
      <Header onLoginClick={handleLoginClick} onRegisterClick={handleRegisterClick} />
      
      <main className="pt-24 pb-20">
        <section className="px-4 py-12 bg-gradient-to-br from-primary/5 to-white">
          <div className="container mx-auto text-center max-w-3xl">
            <Icon name="MapPin" size={64} className="text-primary mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Контакты</h1>
            <p className="text-lg text-muted-foreground">
              Свяжитесь с нами удобным для вас способом. Мы всегда рады помочь!
            </p>
          </div>
        </section>

        <section className="px-4 py-12">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {contactInfo.map((item, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6 flex gap-4">
                    <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name={item.icon as any} size={28} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm text-muted-foreground mb-1">{item.title}</h3>
                      <p className="text-lg font-semibold mb-1">{item.value}</p>
                      <p className="text-sm text-muted-foreground">{item.subtitle}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-gradient-to-br from-primary to-primary/80 text-white border-none mb-12">
              <CardContent className="pt-8 pb-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Свяжитесь с нами в мессенджерах</h3>
                <p className="text-white/90 mb-6 max-w-xl mx-auto">
                  Получите быструю консультацию от наших специалистов в удобном для вас мессенджере
                </p>
                <div className="flex flex-wrap gap-3 justify-center">
                  {socialLinks.map((social, index) => (
                    <Button
                      key={index}
                      variant="secondary"
                      size="lg"
                      className="gap-2"
                      asChild
                    >
                      <a href={social.link}>
                        <Icon name={social.icon as any} size={20} />
                        {social.name}
                      </a>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div>
              <h2 className="text-3xl font-bold text-center mb-8">Наши офисы</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {offices.map((office, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-4">
                        <Icon name="Building2" size={24} className="text-secondary" />
                      </div>
                      <h3 className="text-xl font-bold mb-3">{office.city}</h3>
                      <div className="space-y-2 text-sm">
                        <p className="flex items-start gap-2">
                          <Icon name="MapPin" size={16} className="flex-shrink-0 mt-1 text-muted-foreground" />
                          <span>{office.address}</span>
                        </p>
                        <p className="flex items-center gap-2">
                          <Icon name="Phone" size={16} className="flex-shrink-0 text-muted-foreground" />
                          <span>{office.phone}</span>
                        </p>
                      </div>
                      <Button variant="outline" className="w-full mt-4">
                        <Icon name="Navigation" size={16} className="mr-2" />
                        Показать на карте
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-12 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <Card>
              <CardContent className="pt-8">
                <div className="text-center mb-8">
                  <Icon name="Clock" size={48} className="text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Как нас найти</h3>
                  <p className="text-muted-foreground">
                    Главный офис находится в центре Москвы, в 5 минутах от метро
                  </p>
                </div>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  {[
                    { icon: 'Train', title: 'Метро', desc: 'Станция "Площадь Революции"' },
                    { icon: 'Car', title: 'Парковка', desc: 'Подземная парковка' },
                    { icon: 'Clock', title: 'Режим работы', desc: 'Пн-Пт: 9:00 - 19:00' }
                  ].map((item, idx) => (
                    <div key={idx}>
                      <Icon name={item.icon as any} size={32} className="text-primary mx-auto mb-2" />
                      <h4 className="font-semibold mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
      <ChatWidget />
      <AuthDialog open={isAuthOpen} onOpenChange={setIsAuthOpen} defaultTab={authTab} />
    </div>
  );
}
