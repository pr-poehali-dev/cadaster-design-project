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

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-br from-primary/5 to-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">О компании</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            КадастрПро — это команда профессионалов, специализирующаяся на кадастровых работах и оценке недвижимости. 
            Мы помогаем нашим клиентам решать самые сложные задачи в сфере земельно-имущественных отношений.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card 
              key={index}
              className="text-center border-none shadow-lg bg-white hover:shadow-xl transition-shadow"
            >
              <CardContent className="pt-8 pb-6">
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((item, index) => (
            <Card 
              key={index}
              className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-secondary"
            >
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-4">
                  <Icon name={item.icon as any} size={24} className="text-secondary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
