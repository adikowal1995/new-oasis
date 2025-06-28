import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, TrendingUp, Clock, Users } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const CaseStudiesSection = () => {
  const { t } = useLanguage();
  const caseStudies = [{
    title: t('case-studies.ecommerce.title'),
    client: t('case-studies.ecommerce.client'),
    description: t('case-studies.ecommerce.description'),
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    industry: t('industries.retail'),
    results: [{
      icon: <TrendingUp className="h-4 w-4" />,
      metric: t('case-studies.ecommerce.sales')
    }, {
      icon: <Users className="h-4 w-4" />,
      metric: t('case-studies.ecommerce.customers')
    }, {
      icon: <Clock className="h-4 w-4" />,
      metric: t('case-studies.ecommerce.delivery')
    }],
    technologies: ["React", "Node.js", "AWS", "MongoDB"]
  }, {
    title: t('case-studies.banking.title'),
    client: t('case-studies.banking.client'),
    description: t('case-studies.banking.description'),
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    industry: t('industries.fintech'),
    results: [{
      icon: <Users className="h-4 w-4" />,
      metric: t('case-studies.banking.users')
    }, {
      icon: <TrendingUp className="h-4 w-4" />,
      metric: t('case-studies.banking.transactions')
    }, {
      icon: <Clock className="h-4 w-4" />,
      metric: t('case-studies.banking.development')
    }],
    technologies: ["Flutter", "Firebase", "Node.js", "PostgreSQL"]
  }, {
    title: t('case-studies.healthcare.title'),
    client: t('case-studies.healthcare.client'),
    description: t('case-studies.healthcare.description'),
    image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    industry: t('industries.healthcare'),
    results: [{
      icon: <TrendingUp className="h-4 w-4" />,
      metric: t('case-studies.healthcare.processing')
    }, {
      icon: <Users className="h-4 w-4" />,
      metric: t('case-studies.healthcare.patients')
    }, {
      icon: <Clock className="h-4 w-4" />,
      metric: t('case-studies.healthcare.implementation')
    }],
    technologies: [".NET", "React", "Azure", "SQL Server"]
  }];
  return <section id="case-studies" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-brand-teal text-white">{t('case-studies.badge')}</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-brand-navy mb-6">
            {t('case-studies.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('case-studies.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {caseStudies.map((study, index) => <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white">
              <div className="relative overflow-hidden rounded-t-lg">
                <img src={study.image} alt={study.title} className="w-full h-48 object-cover" />
                <Badge className="absolute top-4 left-4 bg-brand-teal text-white">
                  {study.industry}
                </Badge>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl text-brand-navy">{study.title}</CardTitle>
                <CardDescription className="text-brand-gray font-medium">
                  {study.client}
                </CardDescription>
                <p className="text-gray-600 text-sm">
                  {study.description}
                </p>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="space-y-2">
                  {study.results.map((result, idx) => <div key={idx} className="flex items-center space-x-2 text-sm">
                      <div className="text-brand-teal">{result.icon}</div>
                      <span className="text-gray-700">{result.metric}</span>
                    </div>)}
                </div>

                <div className="flex flex-wrap gap-2">
                  {study.technologies.map(tech => <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>)}
                </div>

                <Button variant="outline" className="w-full border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  {t('case-studies.view-details')}
                </Button>
              </CardContent>
            </Card>)}
        </div>

        <div className="text-center">
          
        </div>
      </div>
    </section>;
};
export default CaseStudiesSection;