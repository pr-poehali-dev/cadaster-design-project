import Icon from '@/components/ui/icon';

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Icon name="Building2" size={28} />
              <span className="text-xl font-bold">КадастрПро</span>
            </div>
            <p className="text-sm text-white/80">
              Профессиональные кадастровые работы и оценка недвижимости с 2010 года
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Услуги</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><a href="#services" className="hover:text-white transition-colors">Межевание</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Технический план</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Оценка</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Консалтинг</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Компания</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><a href="#about" className="hover:text-white transition-colors">О нас</a></li>
              <li><a href="#contacts" className="hover:text-white transition-colors">Контакты</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Лицензии</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Вакансии</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li className="flex items-center gap-2">
                <Icon name="Phone" size={16} />
                +7 (495) 123-45-67
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Mail" size={16} />
                info@kadastrpro.ru
              </li>
              <li className="flex items-center gap-2">
                <Icon name="MapPin" size={16} />
                Москва, ул. Примерная, 10
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/70">
          <p>© 2024 КадастрПро. Все права защищены.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-white transition-colors">Пользовательское соглашение</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
