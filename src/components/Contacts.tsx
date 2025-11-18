import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const contactInfo = [
  {
    icon: 'Phone',
    title: 'Телефон',
    value: '+7 (495) 123-45-67',
    subtitle: 'Звонки принимаются 24/7'
  },
  {
    icon: 'Mail',
    title: 'Email',
    value: 'info@kadastrpro.ru',
    subtitle: 'Ответим в течение 2 часов'
  },
  {
    icon: 'MapPin',
    title: 'Адрес',
    value: 'г. Москва, ул. Примерная, д. 10',
    subtitle: 'Прием по предварительной записи'
  },
  {
    icon: 'Clock',
    title: 'График работы',
    value: 'Пн-Пт: 9:00 - 19:00',
    subtitle: 'Сб: 10:00 - 16:00, Вс: выходной'
  }
];

const socialLinks = [
  { icon: 'MessageCircle', name: 'Telegram', link: '#' },
  { icon: 'MessageCircle', name: 'WhatsApp', link: '#' },
  { icon: 'Phone', name: 'Viber', link: '#' }
];

export default function Contacts() {
  return (
    <section id="contacts" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Контакты</h2>
          <p className="text-lg text-muted-foreground">
            Свяжитесь с нами удобным для вас способом
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {contactInfo.map((item, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name={item.icon as any} size={24} className="text-primary" />
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

        <Card className="bg-gradient-to-br from-primary to-primary/80 text-white border-none">
          <CardContent className="pt-8 pb-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Остались вопросы?</h3>
            <p className="text-white/90 mb-6 max-w-xl mx-auto">
              Свяжитесь с нами в мессенджерах для быстрой консультации
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="secondary"
                  className="gap-2"
                  asChild
                >
                  <a href={social.link}>
                    <Icon name={social.icon as any} size={18} />
                    {social.name}
                  </a>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
