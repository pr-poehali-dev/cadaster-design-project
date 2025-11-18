import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/ChatWidget';
import AuthDialog from '@/components/AuthDialog';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

export default function RequestsPage() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authTab, setAuthTab] = useState<'login' | 'register'>('login');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleLoginClick = () => {
    setAuthTab('login');
    setIsAuthOpen(true);
  };

  const handleRegisterClick = () => {
    setAuthTab('register');
    setIsAuthOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Заявка отправлена!",
        description: "Мы свяжемся с вами в ближайшее время.",
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen">
      <Header onLoginClick={handleLoginClick} onRegisterClick={handleRegisterClick} />
      
      <main className="pt-24 pb-20">
        <section className="px-4 py-12 bg-gradient-to-br from-primary/5 to-white">
          <div className="container mx-auto text-center max-w-3xl">
            <Icon name="FileText" size={64} className="text-primary mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Оставить заявку</h1>
            <p className="text-lg text-muted-foreground">
              Заполните форму, и наш специалист свяжется с вами для уточнения деталей и расчета стоимости
            </p>
          </div>
        </section>

        <section className="px-4 py-12">
          <div className="container mx-auto max-w-3xl">
            <Card className="border-t-4 border-t-primary shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Icon name="ClipboardList" size={28} className="text-primary" />
                  Форма обращения
                </CardTitle>
                <CardDescription className="text-base">
                  Все поля обязательны для заполнения. Мы гарантируем конфиденциальность ваших данных.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-base">ФИО</Label>
                      <Input id="name" placeholder="Иванов Иван Иванович" required className="h-12" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-base">Телефон</Label>
                      <Input id="phone" type="tel" placeholder="+7 (___) ___-__-__" required className="h-12" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-base">Email</Label>
                      <Input id="email" type="email" placeholder="your@email.com" required className="h-12" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="service" className="text-base">Вид услуги</Label>
                      <Select required>
                        <SelectTrigger className="h-12">
                          <SelectValue placeholder="Выберите услугу" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="mezh">Межевание земельного участка</SelectItem>
                          <SelectItem value="tech">Технический план</SelectItem>
                          <SelectItem value="ocenka">Оценка недвижимости</SelectItem>
                          <SelectItem value="kadast">Кадастровые работы</SelectItem>
                          <SelectItem value="consult">Консалтинг</SelectItem>
                          <SelectItem value="topo">Топографическая съемка</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address" className="text-base">Адрес объекта</Label>
                    <Input id="address" placeholder="г. Москва, ул. Примерная, д. 1" required className="h-12" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description" className="text-base">Описание задачи</Label>
                    <Textarea 
                      id="description" 
                      placeholder="Опишите подробнее вашу задачу и требования..." 
                      rows={6}
                      required
                    />
                  </div>

                  <div className="bg-muted/50 p-4 rounded-lg">
                    <p className="text-sm text-muted-foreground flex items-start gap-2">
                      <Icon name="Info" size={18} className="flex-shrink-0 mt-0.5" />
                      <span>После отправки заявки наш специалист свяжется с вами в течение 30 минут для уточнения деталей и согласования сроков выполнения работ.</span>
                    </p>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90 text-lg py-6 h-14"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Icon name="Loader2" size={20} className="mr-2 animate-spin" />
                        Отправка...
                      </>
                    ) : (
                      <>
                        <Icon name="Send" size={20} className="mr-2" />
                        Отправить заявку
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    Нажимая кнопку, вы соглашаетесь на обработку персональных данных и принимаете условия политики конфиденциальности
                  </p>
                </form>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              {[
                { icon: 'Phone', title: 'Позвоните нам', desc: '+7 (495) 123-45-67', action: 'tel:+74951234567' },
                { icon: 'Mail', title: 'Напишите письмо', desc: 'info@kadastrpro.ru', action: 'mailto:info@kadastrpro.ru' },
                { icon: 'MessageCircle', title: 'Напишите в чат', desc: 'Онлайн-консультант', action: '#' }
              ].map((item, idx) => (
                <Card key={idx} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <Icon name={item.icon as any} size={40} className="text-primary mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{item.desc}</p>
                    <Button variant="outline" size="sm" asChild>
                      <a href={item.action}>Связаться</a>
                    </Button>
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
