import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe, Users, Zap, Trophy, MapPin, Languages } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const WhyChooseUsSection = () => {
  const { t } = useLanguage();
  
  const advantages = [{
    icon: <Globe className="h-12 w-12" />,
    title: t('why-choose-us.regional.title'),
    description: t('why-choose-us.regional.description'),
    stats: t('why-choose-us.regional.stats')
  }, {
    icon: <Languages className="h-12 w-12" />,
    title: t('why-choose-us.multilingual.title'),
    description: t('why-choose-us.multilingual.description'),
    stats: t('why-choose-us.multilingual.stats')
  }, {
    icon: <Zap className="h-12 w-12" />,
    title: t('why-choose-us.rapid.title'),
    description: t('why-choose-us.rapid.description'),
    stats: t('why-choose-us.rapid.stats')
  }, {
    icon: <Trophy className="h-12 w-12" />,
    title: t('why-choose-us.iso.title'),
    description: t('why-choose-us.iso.description'),
    stats: t('why-choose-us.iso.stats')
  }];
  
  return <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-brand-teal text-white">{t('why-choose-us.badge')}</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-brand-navy mb-6">
            {t('why-choose-us.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('why-choose-us.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {advantages.map((advantage, index) => <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 border-gray-100">
              <CardContent className="p-8">
                <div className="text-brand-teal mb-6 flex justify-center">
                  {advantage.icon}
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-4">
                  {advantage.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {advantage.description}
                </p>
                <Badge variant="outline" className="border-brand-teal text-brand-teal">
                  {advantage.stats}
                </Badge>
              </CardContent>
            </Card>)}
        </div>

        <div className="bg-gradient-to-r from-brand-navy to-brand-teal rounded-2xl p-8 md:p-12 text-white text-center">
          <div className="grid md:grid-cols-4 gap-8 items-center">
            <div>
              <div className="text-4xl font-bold text-brand-teal-light mb-2">50+</div>
              <div className="text-gray-300">{t('why-choose-us.stats.projects')}</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-brand-teal-light mb-2">15+</div>
              <div className="text-gray-300">{t('why-choose-us.stats.developers')}</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-brand-teal-light mb-2">98%</div>
              <div className="text-gray-300">{t('why-choose-us.stats.satisfaction')}</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-brand-teal-light mb-2">24/7</div>
              <div className="text-gray-300">{t('why-choose-us.stats.support')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default WhyChooseUsSection;