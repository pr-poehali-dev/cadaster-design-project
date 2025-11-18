import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeroProps {
  onRequestClick?: () => void;
}

export default function Hero({ onRequestClick }: HeroProps) {
  return (
    <section id="home" className="relative pt-32 pb-20 px-4 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://cdn.poehali.dev/projects/9ae477ed-932b-4c19-a138-deabb64ba6c6/files/78c24518-80e0-4107-840d-bf561c6ac315.jpg" 
          alt="Background"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-white/90 to-secondary/5"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6 animate-scale-in">
            <Icon name="Award" size={20} className="text-primary" />
            <span className="text-sm font-medium text-primary">Лицензированная организация</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Кадастровые работы и оценка недвижимости
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Профессиональные услуги по межеванию земельных участков, технической инвентаризации и независимой оценке недвижимости
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-lg px-8"
              onClick={onRequestClick}
            >
              <Icon name="FileText" size={20} className="mr-2" />
              Оставить заявку
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              <Icon name="Phone" size={20} className="mr-2" />
              Консультация
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[
              { icon: 'Clock', label: 'Работаем с 2010 года' },
              { icon: 'Users', label: '5000+ клиентов' },
              { icon: 'CheckCircle2', label: 'Гарантия качества' },
              { icon: 'Shield', label: 'Полная безопасность' }
            ].map((item, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center gap-2 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Icon name={item.icon as any} size={28} className="text-primary" />
                <span className="text-sm font-medium text-center">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}