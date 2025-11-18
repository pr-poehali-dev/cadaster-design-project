import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const services = [
  {
    icon: 'MapPin',
    title: 'Межевание земельных участков',
    description: 'Установление границ земельного участка на местности с последующим оформлением межевого плана',
    features: ['Топосъемка', 'Вынос границ', 'Межевой план']
  },
  {
    icon: 'Home',
    title: 'Технический план',
    description: 'Подготовка технического плана для регистрации права собственности на объекты недвижимости',
    features: ['Обмеры помещений', 'Техплан здания', 'Узаконивание']
  },
  {
    icon: 'Calculator',
    title: 'Оценка недвижимости',
    description: 'Независимая оценка рыночной стоимости недвижимого имущества для различных целей',
    features: ['Рыночная оценка', 'Для залога', 'Для суда']
  },
  {
    icon: 'FileCheck',
    title: 'Кадастровые работы',
    description: 'Комплекс работ по подготовке документов для государственного кадастрового учета',
    features: ['Акт обследования', 'ГПЗУ', 'Кадастровый учет']
  },
  {
    icon: 'Landmark',
    title: 'Земельно-правовой консалтинг',
    description: 'Юридическое сопровождение сделок с недвижимостью и земельными участками',
    features: ['Правовая экспертиза', 'Сопровождение сделок', 'Консультации']
  },
  {
    icon: 'Map',
    title: 'Топографическая съемка',
    description: 'Создание топографических планов для проектирования и строительства объектов',
    features: ['Геодезия', 'Топоплан', 'Исполнительная съемка']
  }
];

export default function Services() {
  const navigate = useNavigate();

  return (
    <section id="services" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши услуги</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Полный спектр кадастровых работ и оценки недвижимости от профессионалов с многолетним опытом
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in-up border-l-4 border-l-primary"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name={service.icon as any} size={28} className="text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <Icon name="CheckCircle2" size={16} className="text-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full group" onClick={() => navigate('/services')}>
                  Подробнее
                  <Icon name="ArrowRight" size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}