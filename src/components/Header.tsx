import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

interface HeaderProps {
  onLoginClick?: () => void;
  onRegisterClick?: () => void;
}

export default function Header({ onLoginClick, onRegisterClick }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Главная', href: '#home' },
    { name: 'Услуги', href: '#services' },
    { name: 'О компании', href: '#about' },
    { name: 'Заявки', href: '#requests' },
    { name: 'Контакты', href: '#contacts' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Icon name="Building2" className="text-primary" size={32} />
          <div>
            <h1 className="text-xl font-bold text-primary">КадастрПро</h1>
            <p className="text-xs text-muted-foreground">Экспертность и надёжность</p>
          </div>
        </div>

        <nav className="hidden lg:flex items-center gap-8">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              {item.name}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Button variant="ghost" onClick={onLoginClick}>
            Вход
          </Button>
          <Button onClick={onRegisterClick} className="bg-primary hover:bg-primary/90">
            Регистрация
          </Button>
        </div>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon">
              <Icon name="Menu" size={24} />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px]">
            <nav className="flex flex-col gap-4 mt-8">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-foreground hover:text-primary transition-colors py-2"
                >
                  {item.name}
                </a>
              ))}
              <div className="flex flex-col gap-2 mt-4">
                <Button variant="outline" onClick={onLoginClick} className="w-full">
                  Вход
                </Button>
                <Button onClick={onRegisterClick} className="w-full bg-primary">
                  Регистрация
                </Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
