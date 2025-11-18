import { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

interface AuthDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  defaultTab?: 'login' | 'register';
}

export default function AuthDialog({ open, onOpenChange, defaultTab = 'login' }: AuthDialogProps) {
  const [activeTab, setActiveTab] = useState(defaultTab);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[450px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            {activeTab === 'login' ? 'Вход в личный кабинет' : 'Регистрация'}
          </DialogTitle>
          <DialogDescription>
            {activeTab === 'login' 
              ? 'Войдите в систему для управления заявками'
              : 'Создайте аккаунт для доступа ко всем возможностям'}
          </DialogDescription>
        </DialogHeader>

        <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as any)} className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Вход</TabsTrigger>
            <TabsTrigger value="register">Регистрация</TabsTrigger>
          </TabsList>

          <TabsContent value="login" className="space-y-4 mt-6">
            <div className="space-y-2">
              <Label htmlFor="login-email">Email</Label>
              <Input id="login-email" type="email" placeholder="your@email.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="login-password">Пароль</Label>
              <Input id="login-password" type="password" placeholder="••••••••" />
            </div>
            <Button className="w-full bg-primary hover:bg-primary/90">
              <Icon name="LogIn" size={18} className="mr-2" />
              Войти
            </Button>
            <Button variant="link" className="w-full text-sm text-muted-foreground">
              Забыли пароль?
            </Button>
          </TabsContent>

          <TabsContent value="register" className="space-y-4 mt-6">
            <div className="space-y-2">
              <Label htmlFor="register-name">ФИО</Label>
              <Input id="register-name" placeholder="Иванов Иван Иванович" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="register-email">Email</Label>
              <Input id="register-email" type="email" placeholder="your@email.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="register-phone">Телефон</Label>
              <Input id="register-phone" type="tel" placeholder="+7 (___) ___-__-__" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="register-password">Пароль</Label>
              <Input id="register-password" type="password" placeholder="••••••••" />
            </div>
            <Button className="w-full bg-primary hover:bg-primary/90">
              <Icon name="UserPlus" size={18} className="mr-2" />
              Зарегистрироваться
            </Button>
            <p className="text-xs text-muted-foreground text-center">
              Регистрируясь, вы соглашаетесь с условиями использования и политикой конфиденциальности
            </p>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
