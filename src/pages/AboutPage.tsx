import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/ChatWidget';
import AuthDialog from '@/components/AuthDialog';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const advantages = [
  {
    icon: 'Award',
    title: 'Лицензии и аккредитации',
    description: 'Наличие всех необходимых лицензий на право ведения кадастровой деятельности'
  },
  {
    icon: 'Users',
    title: 'Опытные специалисты',
    description: 'Команда аттестованных кадастровых инженеров и оценщиков с опытом от 10 лет'
  },
  {
    icon: 'Clock',
    title: 'Оперативность',
    description: 'Соблюдение сроков выполнения работ и оперативное решение возникающих вопросов'
  },
  {
    icon: 'Shield',
    title: 'Страхование ответственности',
    description: 'Профессиональная ответственность застрахована на сумму до 10 млн рублей'
  },
  {
    icon: 'FileCheck',
    title: 'Качество документов',
    description: 'Все документы проходят многоступенчатую проверку перед передачей клиенту'
  },
  {
    icon: 'Headphones',
    title: 'Поддержка 24/7',
    description: 'Круглосуточная консультационная поддержка по всем вопросам наших клиентов'
  }
];

const stats = [
  { value: '15+', label: 'Лет на рынке' },
  { value: '5000+', label: 'Выполненных проектов' },
  { value: '98%', label: 'Довольных клиентов' },
  { value: '24/7', label: 'Поддержка клиентов' }
];

const team = [
  { name: 'Иванов Иван Иванович', position: 'Главный кадастровый инженер', experience: '20 лет опыта' },
  { name: 'Петрова Анна Сергеевна', position: 'Руководитель отдела оценки', experience: '15 лет опыта' },
  { name: 'Сидоров Петр Алексеевич', position: 'Главный геодезист', experience: '18 лет опыта' },
  { name: 'Козлова Мария Дмитриевна', position: 'Юрист-консультант', experience: '12 лет опыта' }
];

export default function AboutPage() {
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
          <div className="container mx-auto text-center max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">О компании КадастрПро</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              КадастрПро — это команда профессионалов, специализирующаяся на кадастровых работах и оценке недвижимости. 
              Мы помогаем нашим клиентам решать самые сложные задачи в сфере земельно-имущественных отношений с 2010 года.
            </p>
          </div>
        </section>

        <section className="px-4 py-12">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {stats.map((stat, index) => (
                <Card 
                  key={index}
                  className="text-center border-none shadow-lg bg-white hover:shadow-xl transition-shadow"
                >
                  <CardContent className="pt-8 pb-6">
                    <div className="text-5xl font-bold text-primary mb-3">{stat.value}</div>
                    <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-12 bg-muted/30">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Наши преимущества</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {advantages.map((item, index) => (
                <Card 
                  key={index}
                  className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-secondary"
                >
                  <CardContent className="pt-6">
                    <div className="w-14 h-14 bg-secondary/20 rounded-lg flex items-center justify-center mb-4">
                      <Icon name={item.icon as any} size={28} className="text-secondary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-12">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold text-center mb-12">Наша команда</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name="User" size={40} className="text-primary" />
                    </div>
                    <h3 className="font-semibold mb-1">{member.name}</h3>
                    <p className="text-sm text-primary mb-2">{member.position}</p>
                    <p className="text-xs text-muted-foreground">{member.experience}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-12 bg-gradient-to-br from-primary to-primary/80 text-white">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-6">Почему нам доверяют?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: 'Award', title: 'Сертифицировано', desc: 'Все специалисты имеют государственные сертификаты' },
                { icon: 'TrendingUp', title: 'Растем вместе', desc: 'Постоянное повышение квалификации сотрудников' },
                { icon: 'Heart', title: 'Любим дело', desc: 'Относимся к каждому проекту с максимальной ответственностью' }
              ].map((item, idx) => (
                <div key={idx} className="text-center">
                  <Icon name={item.icon as any} size={48} className="mx-auto mb-4" />
                  <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
                  <p className="text-white/90 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ChatWidget />
      <AuthDialog open={isAuthOpen} onOpenChange={setIsAuthOpen} defaultTab={authTab} />
    </div>
  );
}
