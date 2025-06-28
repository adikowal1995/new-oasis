import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Award, Users, Calendar } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const AboutSection = () => {
  const { t } = useLanguage();
  
  const teamMembers = [{
    name: t('team.adrian.name'),
    role: t('team.adrian.role'),
    image: "https://media.licdn.com/dms/image/v2/D4E03AQFGhIV3g9eo3g/profile-displayphoto-shrink_800_800/B4EZd4hxVxGcAo-/0/1750073808804?e=1755734400&v=beta&t=ItrsdipI5LYWOkSzR6EDr5HJ1UA63oaLGJtkShUNbho",
    experience: t('team.adrian.experience')
  }, {
    name: t('team.weronika.name'),
    role: t('team.weronika.role'),
    image: "https://images.unsplash.com/photo-1664575602554-2087b04935a5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    experience: t('team.weronika.experience')
  }, {
    name: t('team.omar.name'),
    role: t('team.omar.role'),
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    experience: t('team.omar.experience')
  }];
  
  return <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-brand-teal text-white">{t('about.badge')}</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-brand-navy mb-6">
            {t('about.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t('about.description')}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-brand-navy mb-4">{t('about.mission.title')}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t('about.mission.description')}
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-brand-navy mb-4">{t('about.vision.title')}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t('about.vision.description')}
              </p>
            </div>

            
          </div>

          <div className="relative">
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Our team collaborating" className="rounded-2xl shadow-xl w-full" />
            <div className="absolute -bottom-6 -right-6 bg-brand-teal rounded-xl p-6 text-white">
              <div className="text-2xl font-bold">50+</div>
              <div className="text-sm">{t('about.projects')}</div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-brand-navy text-center mb-12">{t('about.team.title')}</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <img src={member.image} alt={member.name} className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
                  <h4 className="text-xl font-bold text-brand-navy mb-2">{member.name}</h4>
                  <p className="text-brand-teal font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-gray-600">{member.experience}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>

        
      </div>
    </section>;
};
export default AboutSection;