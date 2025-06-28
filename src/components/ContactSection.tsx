import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";

const ContactSection = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    budget: "",
    timeline: "",
    description: ""
  });
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.description) {
      toast({
        title: t('contact.error'),
        description: t('contact.required'),
        variant: "destructive",
      });
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: t('contact.error'),
        description: t('contact.invalidEmail'),
        variant: "destructive",
      });
      return;
    }
    try {
      console.log('Form submitted:', formData);
      toast({
        title: t('contact.success'),
        description: t('contact.subtitle')
      });
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        budget: "",
        timeline: "",
        description: ""
      });
    } catch (error) {
      toast({
        title: t('contact.error'),
        description: t('contact.error'),
        variant: "destructive",
      });
    }
  };
  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };
  return <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-brand-teal text-white">{t('contact.badge')}</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-brand-navy mb-6">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-brand-navy">{t('contact.badge')}</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name">{t('contact.name')} *</Label>
                      <Input id="name" value={formData.name} onChange={e => handleInputChange('name', e.target.value)} placeholder={t('contact.name')} required />
                    </div>
                    <div>
                      <Label htmlFor="company">Company</Label>
                      <Input id="company" value={formData.company} onChange={e => handleInputChange('company', e.target.value)} placeholder="Company" />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="email">{t('contact.email')} *</Label>
                      <Input id="email" type="email" value={formData.email} onChange={e => handleInputChange('email', e.target.value)} placeholder={t('contact.email')} required />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" value={formData.phone} onChange={e => handleInputChange('phone', e.target.value)} placeholder="+971 50 xxx xxxx" />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="budget">Estimated Budget</Label>
                      <Select onValueChange={value => handleInputChange('budget', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="10k-25k">$10K - $25K</SelectItem>
                          <SelectItem value="25k-50k">$25K - $50K</SelectItem>
                          <SelectItem value="50k-100k">$50K - $100K</SelectItem>
                          <SelectItem value="100k+">$100K+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="timeline">Preferred Timeline</Label>
                      <Select onValueChange={value => handleInputChange('timeline', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select timeline" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="asap">ASAP</SelectItem>
                          <SelectItem value="1-3months">1-3 months</SelectItem>
                          <SelectItem value="3-6months">3-6 months</SelectItem>
                          <SelectItem value="6months+">6+ months</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="description">{t('contact.message')} *</Label>
                    <Textarea id="description" value={formData.description} onChange={e => handleInputChange('description', e.target.value)} placeholder={t('contact.message')} rows={5} required />
                  </div>
                  <Button type="submit" size="lg" className="w-full bg-brand-teal hover:bg-brand-teal-light text-white">
                    {t('contact.send')}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
          <div className="space-y-8">
            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-brand-navy">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-brand-teal mt-1" />
                  <div>
                    <div className="font-semibold text-brand-navy">Phone</div>
                    <div className="text-gray-600">+971 4 xxx xxxx</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-brand-teal mt-1" />
                  <div>
                    <div className="font-semibold text-brand-navy">Email</div>
                    <div className="text-gray-600">hello@techflow.ae</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-brand-teal mt-1" />
                  <div>
                    <div className="font-semibold text-brand-navy">Business Hours</div>
                    <div className="text-gray-600">
                      Sun - Thu: 9:00 AM - 6:00 PM<br />
                      Fri - Sat: Closed
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>;
};
export default ContactSection;