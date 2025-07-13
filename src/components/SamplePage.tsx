import React from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';

const SamplePage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Welcome Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {t('common.welcome')}
          </h1>
          <p className="text-xl text-gray-600">
            {t('home.description')}
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>{t('home.title')}</CardTitle>
              <CardDescription>{t('home.subtitle')}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                {t('home.description')}
              </p>
              <Button className="w-full">
                {t('navigation.callToAction')}
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>{t('about.title')}</CardTitle>
              <CardDescription>Learn more about our platform</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                {t('about.description')}
              </p>
              <Button variant="outline" className="w-full">
                {t('navigation.contact')}
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Services Section */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-center">{t('services.title')}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">{t('services.startupServices')}</h3>
                <p className="text-gray-600">
                  {t('navigation.startup')}
                </p>
              </div>
              <div className="text-center p-6 bg-green-50 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">{t('services.investorServices')}</h3>
                <p className="text-gray-600">
                  {t('navigation.investor')}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Section */}
        <Card>
          <CardHeader>
            <CardTitle className="text-center">{t('contact.title')}</CardTitle>
            <CardDescription className="text-center">
              {t('contact.getInTouch')}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div>
                <h4 className="font-semibold mb-2">{t('contact.email')}</h4>
                <p className="text-gray-600">contact@example.com</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">{t('contact.phone')}</h4>
                <p className="text-gray-600">+1 (555) 123-4567</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">{t('contact.message')}</h4>
                <Button size="sm">
                  {t('contact.send')}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SamplePage; 