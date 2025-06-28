import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { MapPin, Phone, Mail, Linkedin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
const Footer = () => {
  const { t } = useLanguage();
  const services = [
    t('services.development'),
    t('services.consulting'),
    t('services.cloud'),
    t('services.support'),
  ];
  const industries = [
    t('industries.ecommerce'),
    t('industries.banking'),
    t('industries.healthcare'),
    t('industries.education'),
    t('industries.government'),
    t('industries.manufacturing')
  ];
  return <footer className="bg-brand-navy text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <span className="text-xl font-bold">Oasis Solutions</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">{t('about.description')}</p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-brand-teal" />
                <span className="text-sm text-gray-300">{t('footer.phone')}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-brand-teal" />
                <span className="text-sm text-gray-300">{t('footer.email')}</span>
              </div>
            </div>
          </div>
          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6">{t('services.badge')}</h3>
            <ul className="space-y-3">
              {services.map(service => <li key={service}>
                  <a href="#" className="text-gray-300 hover:text-brand-teal transition-colors text-sm">
                    {service}
                  </a>
                </li>)}
            </ul>
          </div>
          {/* Industries */}
          <div>
            <h3 className="text-lg font-bold mb-6">{t('case-studies.industry')}</h3>
            <ul className="space-y-3">
              {industries.map(industry => <li key={industry}>
                  <a href="#" className="text-gray-300 hover:text-brand-teal transition-colors text-sm">
                    {industry}
                  </a>
                </li>)}
            </ul>
          </div>
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-6">{t('footer.newsletter.title')}</h3>
            <p className="text-gray-300 mb-4 text-sm">
              {t('footer.newsletter.description')}
            </p>
            <div className="space-y-3">
              <input type="email" placeholder={t('footer.newsletter.placeholder')} className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder:text-gray-400 focus:outline-none focus:border-brand-teal" />
              <Button className="w-full bg-brand-teal hover:bg-brand-teal-light">
                {t('footer.newsletter.subscribe')}
              </Button>
            </div>
          </div>
        </div>
        <Separator className="my-12 bg-gray-700" />
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8">
            <p className="text-sm text-gray-400">{t('footer.copyright')}</p>
            <div className="flex space-x-6">
              <a href="#" className="text-sm text-gray-400 hover:text-brand-teal transition-colors">
                {t('footer.privacy')}
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-brand-teal transition-colors">
                {t('footer.terms')}
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-400">{t('footer.follow')}</span>
            <a href="#" className="text-gray-400 hover:text-brand-teal transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;