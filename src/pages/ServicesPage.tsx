import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/ChatWidget';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useState } from 'react';
import AuthDialog from '@/components/AuthDialog';
import { useNavigate } from 'react-router-dom';

const services = [
  {
    icon: 'MapPin',
    title: 'Межевание земельных участков',
    description: 'Установление границ земельного участка на местности с последующим оформлением межевого плана',
    features: ['Топосъемка', 'Вынос границ', 'Межевой план', 'Согласование границ', 'Акт согласования'],
    price: 'от 15 000 ₽',
    slug: 'mezhevanie'
  },
  {
    icon: 'Home',
    title: 'Технический план',
    description: 'Подготовка технического плана для регистрации права собственности на объекты недвижимости',
    features: ['Обмеры помещений', 'Техплан здания', 'Узаконивание', 'Перепланировка', 'Ввод в эксплуатацию'],
    price: 'от 12 000 ₽',
    slug: 'techplan'
  },
  {
    icon: 'Calculator',
    title: 'Оценка недвижимости',
    description: 'Независимая оценка рыночной стоимости недвижимого имущества для различных целей',
    features: ['Рыночная оценка', 'Для залога', 'Для суда', 'Для нотариуса', 'Экспресс-оценка'],
    price: 'от 5 000 ₽',
    slug: 'ocenka'
  },
  {
    icon: 'FileCheck',
    title: 'Кадастровые работы',
    description: 'Комплекс работ по подготовке документов для государственного кадастрового учета',
    features: ['Акт обследования', 'ГПЗУ', 'Кадастровый учет', 'Исправление ошибок', 'Уточнение площади'],
    price: 'от 10 000 ₽',
    slug: 'kadastr'
  },
  {
    icon: 'Landmark',
    title: 'Земельно-правовой консалтинг',
    description: 'Юридическое сопровождение сделок с недвижимостью и земельными участками',
    features: ['Правовая экспертиза', 'Сопровождение сделок', 'Консультации', 'Разрешение споров', 'Досудебное урегулирование'],
    price: 'от 3 000 ₽',
    slug: 'consult'
  },
  {
    icon: 'Map',
    title: 'Топографическая съемка',
    description: 'Создание топографических планов для проектирования и строительства объектов',
    features: ['Геодезия', 'Топоплан', 'Исполнительная съемка', 'Вынос в натуру', 'Контроль высот'],
    price: 'от 20 000 ₽',
    slug: 'topo'
  }
];

export default function ServicesPage() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authTab, setAuthTab] = useState<'login' | 'register'>('login');
  const navigate = useNavigate();

  const handleLoginClick = () => {
    setAuthTab('login');
    setIsAuthOpen(true);
  };

  const handleRegisterClick = () => {
    setAuthTab('register');
    setIsAuthOpen(true);
  };

  const handleRequestClick = () => {
    navigate('/requests');
  };

  return (
    <div className="min-h-screen">
      <Header onLoginClick={handleLoginClick} onRegisterClick={handleRegisterClick} />
      
      <main className="pt-24 pb-20">
        <section className="px-4 py-12 bg-gradient-to-br from-primary/5 to-white">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Наши услуги</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Полный спектр кадастровых работ и оценки недвижимости от профессионалов с многолетним опытом
            </p>
          </div>
        </section>

        <section className="px-4 py-12">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <Card 
                  key={index} 
                  className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-primary"
                >
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon name={service.icon as any} size={32} className="text-primary" />
                    </div>
                    <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm">
                          <Icon name="CheckCircle2" size={16} className="text-primary flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-primary">{service.price}</span>
                    </div>
                    <Button 
                      className="w-full bg-primary hover:bg-primary/90"
                      onClick={handleRequestClick}
                    >
                      <Icon name="FileText" size={18} className="mr-2" />
                      Заказать услугу
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-12 bg-muted/30">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-6">Почему выбирают нас?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: 'Clock', title: 'Быстро', desc: 'Соблюдаем сроки' },
                { icon: 'Shield', title: 'Надежно', desc: 'Гарантия качества' },
                { icon: 'Award', title: 'Профессионально', desc: 'Опыт 15+ лет' }
              ].map((item, idx) => (
                <Card key={idx} className="text-center">
                  <CardContent className="pt-6">
                    <Icon name={item.icon as any} size={40} className="text-primary mx-auto mb-3" />
                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
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
