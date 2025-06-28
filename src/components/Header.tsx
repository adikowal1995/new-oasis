import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();
  
  const navItems = [{
    name: t('nav.home'),
    href: "#home"
  }, {
    name: t('nav.services'),
    href: "#services"
  }, {
    name: t('nav.case-studies'),
    href: "#case-studies"
  }, {
    name: t('nav.about'),
    href: "#about"
  }, {
    name: t('nav.contact'),
    href: "#contact"
  }];
  
  return <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="text-xl font-bold text-brand-navy">{t('header.company')}</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map(item => <a key={item.name} href={item.href} className="text-gray-700 hover:text-brand-teal transition-colors duration-200 font-medium">
              {item.name}
            </a>)}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <LanguageSwitcher />
          <Button variant="outline" className="border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white" onClick={() => window.open('https://vt84dvmw.forms.app/influencer-contact-form-1', '_blank')}>
            {t('header.get-quote')}
          </Button>
          <Button className="bg-brand-teal hover:bg-brand-teal-light">
            {t('header.talk-expert')}
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="px-4 py-4 space-y-4">
            {navItems.map(item => <a key={item.name} href={item.href} className="block text-gray-700 hover:text-brand-teal transition-colors duration-200 font-medium" onClick={() => setIsMenuOpen(false)}>
                {item.name}
              </a>)}
            <div className="flex flex-col space-y-2 pt-4">
              <LanguageSwitcher />
              <Button variant="outline" className="border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white" onClick={() => window.open('https://vt84dvmw.forms.app/influencer-contact-form-1', '_blank')}>
                {t('header.get-quote')}
              </Button>
              <Button className="bg-brand-teal hover:bg-brand-teal-light">
                {t('header.talk-expert')}
              </Button>
            </div>
          </nav>
        </div>}
    </header>;
};
export default Header;