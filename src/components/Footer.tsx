import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Icon name="Building2" size={28} />
              <span className="text-xl font-bold">КадастрПро</span>
            </Link>
            <p className="text-sm text-white/80">
              Профессиональные кадастровые работы и оценка недвижимости с 2010 года
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Услуги</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><Link to="/services" className="hover:text-white transition-colors">Межевание</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Технический план</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Оценка</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Консалтинг</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Компания</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><Link to="/about" className="hover:text-white transition-colors">О нас</Link></li>
              <li><Link to="/contacts" className="hover:text-white transition-colors">Контакты</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">Лицензии</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">Вакансии</Link></li>
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