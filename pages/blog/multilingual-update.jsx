// pages/blog/multilingual-update.jsx
import { useTranslation } from 'next-i18next';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FiCalendar, FiClock, FiGlobe, FiCode, FiCheck, FiArrowRight, FiGithub } from 'react-icons/fi';
import PagesMetaHead from '../../components/PagesMetaHead';

export default function MultilingualUpdate() {

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <PagesMetaHead 
        title="Multi-Language Support Coming Soon | Portfolio Update"
        description="Exciting news! My portfolio is getting full French and English language support. Learn about the upcoming multilingual features and technical implementation."
      />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        
        {/* Header Section */}
        <header className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 mb-6">
            <FiGlobe className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">Coming Soon • April 2026</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-dark dark:text-primary-light mb-6">
            🌐 Multi-Language Support{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Coming Soon!
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Making my portfolio accessible to a wider audience with full French and English translations.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <FiCalendar className="w-4 h-4" />
              <span>March 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <FiClock className="w-4 h-4" />
              <span>~5 min read</span>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden mb-12 shadow-xl">
          <Image
            src="/images/blog/multilingual-update.jpg"
            alt="Multi-language support illustration"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 text-white">
            <p className="text-sm font-medium">🌍 Breaking language barriers</p>
          </div>
        </div>

        {/* Introduction */}
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-xl text-gray-700 dark:text-gray-300 font-medium leading-relaxed">
            I&apos;m excited to announce that my portfolio is getting a major upgrade! Starting April 2026, 
            the website will be fully available in both English and French, making it accessible to a 
            broader audience across Tunisia, France, Belgium, Switzerland, and the global tech community.
          </p>
        </div>

        {/* Why Multilingual? */}
        <section className="my-12">
          <h2 className="text-3xl font-bold text-primary-dark dark:text-primary-light mb-6">
            🎯 Why Multilingual?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-2xl p-6 border border-indigo-100 dark:border-indigo-800">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-bold text-primary-dark dark:text-primary-light mb-2">
                Global Reach
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                English opens doors to international clients and recruiters worldwide.
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-6 border border-green-100 dark:border-green-800">
              <div className="text-4xl mb-4">🇫🇷</div>
              <h3 className="text-xl font-bold text-primary-dark dark:text-primary-light mb-2">
                Local Connection
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                French serves local Tunisian businesses and French-speaking partners in Africa and Europe.
              </p>
            </div>
          </div>
        </section>

        {/* What's Coming */}
        <section className="my-12">
          <h2 className="text-3xl font-bold text-primary-dark dark:text-primary-light mb-6">
            ✨ What&apos;s Coming
          </h2>
          
          <div className="space-y-4">
            {[
              {
                icon: "🌐",
                title: "Full Site Translation",
                description: "Every page, section, and component will be available in both languages."
              },
              {
                icon: "🔤",
                title: "Language Switcher",
                description: "A beautiful language selector in the header for instant switching."
              },
              {
                icon: "⚡",
                title: "Real-time Switching",
                description: "Change languages without page reloads for a smooth experience."
              },
              {
                icon: "📱",
                title: "Mobile Optimized",
                description: "Language switcher works perfectly on all devices."
              },
              {
                icon: "💾",
                title: "Persistent Preference",
                description: "Your language choice is saved for future visits."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 p-4 rounded-xl bg-white dark:bg-ternary-dark border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow"
              >
                <div className="text-2xl">{feature.icon}</div>
                <div>
                  <h3 className="font-bold text-primary-dark dark:text-primary-light">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Technical Implementation */}
        <section className="my-12">
          <h2 className="text-3xl font-bold text-primary-dark dark:text-primary-light mb-6">
            🛠️ Technical Implementation
          </h2>
          
          <div className="bg-gray-900 rounded-2xl p-6 overflow-x-auto">
            <pre className="text-sm text-gray-300 font-mono">
              <code>{`// Using next-i18next for seamless i18n
import { useTranslation } from 'next-i18next';

function MyComponent() {
  const { t } = useTranslation('common');
  
  return (
    <h1>{t('welcome')}</h1>
    // Displays: "Welcome" in EN, "Bienvenue" in FR
  );
}

// Translation files structure
/locales/
  ├── en/
  │   ├── common.json
  │   ├── home.json
  │   └── about.json
  └── fr/
      ├── common.json
      ├── home.json
      └── about.json`}</code>
            </pre>
          </div>
          
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl">
              <div className="flex items-center gap-2 mb-2">
                <FiCheck className="text-green-500" />
                <span className="font-semibold">Automatic Detection</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Browser language preference detection for first-time visitors.
              </p>
            </div>
            <div className="p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl">
              <div className="flex items-center gap-2 mb-2">
                <FiCheck className="text-green-500" />
                <span className="font-semibold">SEO Optimized</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Proper hreflang tags for better search engine indexing.
              </p>
            </div>
          </div>
        </section>

        {/* Preview Section */}
        <section className="my-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
          <div className="text-center">
            
            <h2 className="text-2xl font-bold mb-4">Want to See It in Action?</h2>
            <p className="text-white/90 mb-6 max-w-md mx-auto">
              The update is currently in development. Check back in April 2026 to experience the bilingual portfolio!
            </p>
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white text-indigo-600 rounded-xl font-semibold hover:shadow-lg transition-shadow">
              <FiGlobe className="w-5 h-5" />
              <span>Coming April 2026</span>
            </div>
          </div>
        </section>

        {/* Impact & Stats */}
        <section className="my-12">
          <h2 className="text-3xl font-bold text-primary-dark dark:text-primary-light mb-6">
            📊 Expected Impact
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl">
              <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">2x</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">More languages</div>
            </div>
            <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl">
              <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">+40%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Potential audience growth</div>
            </div>
            <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl">
              <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">🌍</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Global accessibility</div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="my-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-primary-dark dark:text-primary-light mb-4">
              Stay Updated
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Follow me on GitHub to see the development progress.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://github.com/OussamaMi01"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-900 dark:bg-gray-800 text-white rounded-xl font-semibold hover:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
              >
                <FiGithub className="w-5 h-5" />
                <span>Follow on GitHub</span>
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-indigo-500 text-indigo-600 dark:text-indigo-400 rounded-xl font-semibold hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors"
              >
                <span>Have Questions?</span>
                <FiArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </article>
    </motion.div>
  );
}

