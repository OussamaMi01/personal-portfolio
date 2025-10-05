// pages/services.js
import React from 'react';
import { motion } from 'framer-motion';
import { servicesData } from '../../data/servicesData';
import Head from 'next/head';
import Link from 'next/link';

const index = () => {
  return (
    <>
      <Head>
        <title>Services | Oussama Missaoui </title>
        <meta name="description" content="Explore my full range of technical and creative services designed to solve your business challenges" />
      </Head>

      <section className="container mx-auto px-4 py-16 sm:py-24">
        {/* Page Header */}
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-4xl sm:text-5xl font-bold text-primary-dark dark:text-primary-light mb-4"
          >
            Comprehensive Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Technical solutions and creative services designed to solve your business challenges
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {servicesData.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
                whileHover={{ 
                  y: -10,
                  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                }}
                className="bg-gradient-to-br from-white to-gray-50 dark:from-ternary-dark dark:to-gray-800 rounded-2xl shadow-lg p-8 border border-gray-100 dark:border-gray-700 flex flex-col transition-all duration-300"
              >
                {/* Service Header */}
                <div className="flex items-start mb-6">
                  <div className={`text-5xl p-3 rounded-xl ${service.colorClass} bg-opacity-10 mr-4`}>
                    {IconComponent && <IconComponent />}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-primary-dark dark:text-primary-light mb-1">
                      {service.title}
                    </h3>
                    <div className="w-16 h-1 bg-indigo-500 rounded-full"></div>
                  </div>
                </div>
                
                {/* Service Description */}
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 flex-grow">
                  {service.description}
                </p>
                
                {/* Client Benefits */}
                <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                  <h4 className="font-semibold text-lg mb-3 text-primary-dark dark:text-primary-light">
                    Client Impact:
                  </h4>
                  <ul className="space-y-2">
                    {service.clientBenefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="flex-shrink-0 mt-1 mr-2">
                          <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                        </span>
                        <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Service Delivery */}
                <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <h4 className="font-semibold text-lg mb-3 text-primary-dark dark:text-primary-light">
                    How I Deliver:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {service.deliveryMethods.map((method, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                      >
                        {method}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <div className="mt-8 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <Link href="/contact" passHref>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-block w-full text-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg shadow-md transition-colors"
                    >
                      Discuss This Service
                    </motion.a>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Process Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-24 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-ternary-dark rounded-2xl p-8 sm:p-12"
        >
          <h2 className="text-3xl font-bold text-center mb-10 text-primary-dark dark:text-primary-light">
            My Service Process
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: 1, title: 'Discovery', desc: 'Understanding your goals and requirements' },
              { step: 2, title: 'Planning', desc: 'Creating a roadmap and defining deliverables' },
              { step: 3, title: 'Execution', desc: 'Developing solutions with regular updates' },
              { step: 4, title: 'Delivery', desc: 'Final implementation and support' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-indigo-500 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-primary-dark dark:text-primary-light">
                  {item.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Final CTA */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold mb-6 text-primary-dark dark:text-primary-light">
            Ready to Transform Your Vision into Reality?
          </h2>
          <Link href="/contact" passHref>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white text-lg font-medium rounded-full shadow-lg transition-all duration-300"
            >
              Get in Touch Today
            </motion.a>
          </Link>
        </div>
      </section>
    </>
  );
};

export default index;