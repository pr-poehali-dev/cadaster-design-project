import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

export default function RequestForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    <section id="requests" className="py-20 px-4">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Оставить заявку</h2>
          <p className="text-lg text-muted-foreground">
            Заполните форму, и наш специалист свяжется с вами для уточнения деталей
          </p>
        </div>

        <Card className="border-t-4 border-t-primary">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="FileText" size={24} className="text-primary" />
              Форма обращения
            </CardTitle>
            <CardDescription>
              Все поля обязательны для заполнения
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">ФИО</Label>
                  <Input id="name" placeholder="Иванов Иван Иванович" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Телефон</Label>
                  <Input id="phone" type="tel" placeholder="+7 (___) ___-__-__" required />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your@email.com" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="service">Вид услуги</Label>
                  <Select required>
                    <SelectTrigger>
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
                <Label htmlFor="address">Адрес объекта</Label>
                <Input id="address" placeholder="г. Москва, ул. Примерная, д. 1" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Описание задачи</Label>
                <Textarea 
                  id="description" 
                  placeholder="Опишите подробнее вашу задачу и требования..." 
                  rows={5}
                  required
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90 text-lg py-6"
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
                Нажимая кнопку, вы соглашаетесь на обработку персональных данных
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
