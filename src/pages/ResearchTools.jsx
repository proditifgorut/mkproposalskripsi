import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, BarChart3, MessageSquare, Globe, Download, ExternalLink, Star } from 'lucide-react';

const ResearchTools = () => {
  const [activeCategory, setActiveCategory] = useState('reference');

  const toolCategories = [
    { id: 'reference', name: 'Manajemen Referensi', icon: BookOpen },
    { id: 'statistics', name: 'Analisis Statistik', icon: BarChart3 },
    { id: 'qualitative', name: 'Analisis Kualitatif', icon: MessageSquare },
    { id: 'survey', name: 'Survei Online', icon: Globe }
  ];

  const tools = {
    reference: [
      {
        name: 'Mendeley',
        type: 'Freemium',
        rating: 4.5,
        description: 'Reference manager yang populer dengan fitur kolaborasi dan PDF annotation.',
        features: [
          'Automatic metadata extraction dari PDF',
          'Kolaborasi tim dengan shared folders',
          'Citation plugin untuk Word dan LibreOffice',
          'Social network untuk peneliti',
          'Storage cloud 2GB (free tier)'
        ],
        platforms: ['Windows', 'Mac', 'Linux', 'Web', 'Mobile'],
        pricing: 'Free (2GB), Premium ($55/year)',
        best_for: 'Mahasiswa dan peneliti yang butuh kolaborasi',
        link: 'https://www.mendeley.com',
        pros: ['User-friendly', 'Integrasi dengan MS Word', 'Community features'],
        cons: ['Storage terbatas di free tier', 'Sinkronisasi kadang lambat']
      },
      {
        name: 'Zotero',
        type: 'Free & Open Source',
        rating: 4.7,
        description: 'Reference manager open source yang powerful dengan plugin ecosystem yang kaya.',
        features: [
          'Web browser integration untuk capture otomatis',
          'Plugin ecosystem yang ekstensif',
          'Group libraries untuk kolaborasi',
          'Support berbagai citation style (9000+)',
          'Backup dan sync lintas device'
        ],
        platforms: ['Windows', 'Mac', 'Linux', 'Web'],
        pricing: 'Free (300MB), Storage plans mulai $20/year',
        best_for: 'Peneliti yang butuh customization dan fleksibilitas',
        link: 'https://www.zotero.org',
        pros: ['Completely free', 'Open source', 'Highly customizable'],
        cons: ['Learning curve', 'Interface kurang modern']
      },
      {
        name: 'EndNote',
        type: 'Commercial',
        rating: 4.2,
        description: 'Reference manager professional dengan fitur advanced untuk institusi besar.',
        features: [
          'Advanced search dalam database akademik',
          'Institutional subscription dengan unlimited storage',
          'Find Full Text feature yang powerful',
          'Advanced formatting options',
          'Integration dengan Web of Science'
        ],
        platforms: ['Windows', 'Mac', 'Web'],
        pricing: '$249.95 (student), $399.95 (individual)',
        best_for: 'Institusi besar dan peneliti professional',
        link: 'https://endnote.com',
        pros: ['Professional features', 'Institution support', 'Powerful search'],
        cons: ['Expensive', 'Complex interface', 'Steep learning curve']
      }
    ],
    statistics: [
      {
        name: 'SPSS',
        type: 'Commercial',
        rating: 4.3,
        description: 'Software statistik yang user-friendly, ideal untuk peneliti tanpa background programming.',
        features: [
          'Point-and-click interface yang intuitive',
          'Comprehensive statistical procedures',
          'Advanced charts dan visualization',
          'Syntax editor untuk otomatisasi',
          'Integration dengan Python dan R'
        ],
        platforms: ['Windows', 'Mac', 'Linux'],
        pricing: '$99/month (Standard), Student discount available',
        best_for: 'Peneliti kuantitatif tanpa programming background',
        link: 'https://www.ibm.com/spss',
        pros: ['User-friendly', 'Comprehensive features', 'Good documentation'],
        cons: ['Expensive', 'Limited customization', 'Proprietary format']
      },
      {
        name: 'R',
        type: 'Free & Open Source',
        rating: 4.8,
        description: 'Bahasa pemrograman dan environment untuk statistical computing dan graphics.',
        features: [
          'Comprehensive statistical analysis capabilities',
          'Thousands of packages (CRAN)',
          'Advanced data visualization (ggplot2)',
          'Machine learning libraries',
          'Reproducible research dengan R Markdown'
        ],
        platforms: ['Windows', 'Mac', 'Linux'],
        pricing: 'Completely free',
        best_for: 'Statistician dan data scientist',
        link: 'https://www.r-project.org',
        pros: ['Free', 'Highly extensible', 'Active community', 'Cutting-edge methods'],
        cons: ['Programming required', 'Steep learning curve', 'Memory intensive']
      },
      {
        name: 'Python (Pandas, SciPy, Statsmodels)',
        type: 'Free & Open Source',
        rating: 4.6,
        description: 'Python ecosystem untuk data analysis dan statistical modeling.',
        features: [
          'Pandas untuk data manipulation',
          'SciPy untuk scientific computing',
          'Statsmodels untuk statistical modeling',
          'Scikit-learn untuk machine learning',
          'Matplotlib/Seaborn untuk visualization'
        ],
        platforms: ['Windows', 'Mac', 'Linux'],
        pricing: 'Free',
        best_for: 'Data scientist dan programmer',
        link: 'https://www.python.org',
        pros: ['Versatile', 'Large ecosystem', 'Industry standard', 'Good performance'],
        cons: ['Programming required', 'Package management complexity']
      },
      {
        name: 'JASP',
        type: 'Free & Open Source',
        rating: 4.4,
        description: 'Fresh alternative to SPSS dengan interface modern dan Bayesian statistics.',
        features: [
          'Modern, intuitive interface',
          'Bayesian dan frequentist statistics',
          'Real-time hasil saat input data',
          'Automatic assumption checking',
          'Integration dengan R di background'
        ],
        platforms: ['Windows', 'Mac', 'Linux'],
        pricing: 'Completely free',
        best_for: 'Students dan educators yang ingin SPSS alternative',
        link: 'https://jasp-stats.org',
        pros: ['Free', 'Modern interface', 'Bayesian methods', 'Easy to learn'],
        cons: ['Fewer features than SPSS', 'Smaller community']
      }
    ],
    qualitative: [
      {
        name: 'NVivo',
        type: 'Commercial',
        rating: 4.1,
        description: 'Leading qualitative data analysis software dengan fitur comprehensive.',
        features: [
          'Support multiple data types (text, audio, video)',
          'Advanced coding dan theme development',
          'Query tools untuk pattern discovery',
          'Collaboration features untuk team research',
          'Export ke berbagai format'
        ],
        platforms: ['Windows', 'Mac'],
        pricing: '$1,245/year (Starter), Student discount 50%',
        best_for: 'Professional qualitative researchers',
        link: 'https://www.qsrinternational.com/nvivo',
        pros: ['Comprehensive features', 'Handles large datasets', 'Good support'],
        cons: ['Expensive', 'Complex interface', 'Steep learning curve']
      },
      {
        name: 'ATLAS.ti',
        type: 'Commercial',
        rating: 4.3,
        description: 'Powerful qualitative analysis software dengan focus pada visualization.',
        features: [
          'Intuitive coding system',
          'Network views untuk relationship mapping',
          'Support untuk multimedia data',
          'Team collaboration features',
          'Export ke berbagai academic formats'
        ],
        platforms: ['Windows', 'Mac', 'Web'],
        pricing: '$669 (individual), Student license $99',
        best_for: 'Researchers yang focus pada relationship mapping',
        link: 'https://atlasti.com',
        pros: ['Great visualization', 'Intuitive interface', 'Strong methodology'],
        cons: ['Limited free version', 'Price point', 'Learning curve']
      },
      {
        name: 'MAXQDA',
        type: 'Commercial',
        rating: 4.2,
        description: 'User-friendly qualitative analysis software dengan mixed methods support.',
        features: [
          'Easy-to-use interface',
          'Mixed methods analysis',
          'Social media analysis tools',
          'Survey integration',
          'Mobile app untuk field research'
        ],
        platforms: ['Windows', 'Mac'],
        pricing: '$670 (Standard), Student price $178',
        best_for: 'Mixed methods researchers',
        link: 'https://www.maxqda.com',
        pros: ['User-friendly', 'Mixed methods', 'Good customer support'],
        cons: ['Less powerful than NVivo', 'Limited free features']
      },
      {
        name: 'Python (NLTK, spaCy)',
        type: 'Free & Open Source',
        rating: 4.5,
        description: 'Python libraries untuk natural language processing dan text analysis.',
        features: [
          'NLTK untuk basic NLP tasks',
          'spaCy untuk advanced NLP dan named entity recognition',
          'Sentiment analysis libraries',
          'Topic modeling dengan Gensim',
          'Custom analysis scripts'
        ],
        platforms: ['Windows', 'Mac', 'Linux'],
        pricing: 'Free',
        best_for: 'Programmers dan large-scale text analysis',
        link: 'https://nltk.org',
        pros: ['Free', 'Highly customizable', 'Scalable', 'Automated analysis'],
        cons: ['Programming required', 'Setup complexity', 'Learning curve']
      }
    ],
    survey: [
      {
        name: 'Google Forms',
        type: 'Free',
        rating: 4.4,
        description: 'Simple dan free survey tool yang terintegrasi dengan Google ecosystem.',
        features: [
          'Drag-and-drop form builder',
          'Real-time response tracking',
          'Automatic data collection ke Google Sheets',
          'Basic analytics dan charts',
          'Mobile-responsive design'
        ],
        platforms: ['Web', 'Mobile app'],
        pricing: 'Completely free',
        best_for: 'Simple surveys dan academic research',
        link: 'https://forms.google.com',
        pros: ['Completely free', 'Easy to use', 'Google integration', 'Unlimited responses'],
        cons: ['Limited customization', 'Basic features only', 'No advanced analytics']
      },
      {
        name: 'SurveyMonkey',
        type: 'Freemium',
        rating: 4.3,
        description: 'Popular survey platform dengan fitur advanced dan analytics.',
        features: [
          'Professional survey templates',
          'Advanced question types',
          'Real-time analytics dashboard',
          'Data export ke multiple formats',
          'Integration dengan tools lain'
        ],
        platforms: ['Web', 'Mobile app'],
        pricing: 'Free (10 questions, 100 responses), Paid plans dari $25/month',
        best_for: 'Professional surveys dengan analytics needs',
        link: 'https://www.surveymonkey.com',
        pros: ['Professional features', 'Good analytics', 'Templates available'],
        cons: ['Expensive untuk unlimited features', 'Free version sangat terbatas']
      },
      {
        name: 'Qualtrics',
        type: 'Commercial',
        rating: 4.5,
        description: 'Enterprise-grade survey platform dengan advanced features.',
        features: [
          'Advanced survey logic dan branching',
          'Sophisticated analytics dan reporting',
          'Panel management untuk research',
          'Academic research features',
          'API untuk custom integration'
        ],
        platforms: ['Web'],
        pricing: 'Contact for pricing, Free academic licenses available',
        best_for: 'Academic research dan enterprise surveys',
        link: 'https://www.qualtrics.com',
        pros: ['Very powerful', 'Academic support', 'Advanced analytics'],
        cons: ['Expensive', 'Complex interface', 'Overkill untuk simple surveys']
      },
      {
        name: 'LimeSurvey',
        type: 'Free & Open Source',
        rating: 4.2,
        description: 'Open source survey application dengan self-hosting option.',
        features: [
          'Unlimited surveys dan responses',
          'Advanced question types',
          'Multi-language support',
          'Self-hosting option',
          'Data export ke multiple formats'
        ],
        platforms: ['Web (self-hosted or cloud)'],
        pricing: 'Free (self-hosted), Cloud plans dari €25/month',
        best_for: 'Organizations yang butuh control atas data',
        link: 'https://www.limesurvey.org',
        pros: ['Open source', 'Self-hosting option', 'No response limits'],
        cons: ['Technical setup required', 'Interface kurang modern']
      }
    ]
  };

  const currentTools = tools[activeCategory];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Tools Penelitian
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Kumpulan software dan tools terbaik untuk mendukung penelitian Informatika dan Ilmu Komputer, 
            dari manajemen referensi hingga analisis data.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center mb-12">
          <div className="bg-white rounded-lg p-2 shadow-lg">
            {toolCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-3 rounded-md font-semibold transition-colors flex items-center space-x-2 ${
                  activeCategory === category.id
                    ? 'bg-blue-500 text-white'
                    : 'text-gray-600 hover:text-blue-500 hover:bg-blue-50'
                }`}
              >
                <category.icon className="h-5 w-5" />
                <span className="hidden sm:inline">{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Tools Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {currentTools.map((tool, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="p-8">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-xl font-bold text-gray-900">{tool.name}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        tool.type === 'Free' || tool.type === 'Free & Open Source' 
                          ? 'bg-green-100 text-green-800'
                          : tool.type === 'Freemium'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-orange-100 text-orange-800'
                      }`}>
                        {tool.type}
                      </span>
                    </div>
                    <div className="flex items-center space-x-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(tool.rating)
                              ? 'text-yellow-400 fill-current'
                              : i < tool.rating
                              ? 'text-yellow-400 fill-current opacity-50'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                      <span className="text-sm text-gray-600 ml-2">{tool.rating}</span>
                    </div>
                  </div>
                  <a
                    href={tool.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-700 transition-colors"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-4 leading-relaxed">{tool.description}</p>

                {/* Best For */}
                <div className="bg-blue-50 p-3 rounded-lg mb-4">
                  <span className="text-sm font-medium text-blue-900">Best for: </span>
                  <span className="text-sm text-blue-800">{tool.best_for}</span>
                </div>

                {/* Pricing */}
                <div className="flex items-center justify-between mb-4 p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm font-medium text-gray-700">Pricing:</span>
                  <span className="text-sm text-gray-600">{tool.pricing}</span>
                </div>

                {/* Platforms */}
                <div className="mb-4">
                  <span className="text-sm font-medium text-gray-700 block mb-2">Platforms:</span>
                  <div className="flex flex-wrap gap-1">
                    {tool.platforms.map((platform, platformIndex) => (
                      <span
                        key={platformIndex}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                      >
                        {platform}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {tool.features.slice(0, 3).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  {tool.features.length > 3 && (
                    <span className="text-xs text-gray-500">+{tool.features.length - 3} more features</span>
                  )}
                </div>

                {/* Pros & Cons */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm font-medium text-green-700 mb-2">Pros:</h4>
                    <ul className="space-y-1">
                      {tool.pros.map((pro, proIndex) => (
                        <li key={proIndex} className="text-xs text-green-600 flex items-start">
                          <span className="text-green-500 mr-1">+</span>
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-red-700 mb-2">Cons:</h4>
                    <ul className="space-y-1">
                      {tool.cons.map((con, conIndex) => (
                        <li key={conIndex} className="text-xs text-red-600 flex items-start">
                          <span className="text-red-500 mr-1">-</span>
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Recommendation Guide */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-gradient-to-r from-purple-600 to-indigo-700 rounded-xl text-white p-8"
        >
          <h2 className="text-2xl font-bold mb-6">Panduan Memilih Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Budget Terbatas</h3>
              <ul className="space-y-1 text-sm text-purple-100">
                <li>• Zotero (References)</li>
                <li>• R/Python (Statistics)</li>
                <li>• Google Forms (Survey)</li>
                <li>• Manual coding (Qualitative)</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Pemula</h3>
              <ul className="space-y-1 text-sm text-purple-100">
                <li>• Mendeley (References)</li>
                <li>• JASP/SPSS (Statistics)</li>
                <li>• SurveyMonkey (Survey)</li>
                <li>• MAXQDA (Qualitative)</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Advanced User</h3>
              <ul className="space-y-1 text-sm text-purple-100">
                <li>• Zotero (References)</li>
                <li>• R/Python (Statistics)</li>
                <li>• Qualtrics (Survey)</li>
                <li>• NVivo/Python (Qualitative)</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Team Research</h3>
              <ul className="space-y-1 text-sm text-purple-100">
                <li>• Mendeley (References)</li>
                <li>• SPSS/R (Statistics)</li>
                <li>• Qualtrics (Survey)</li>
                <li>• NVivo/ATLAS.ti (Qualitative)</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ResearchTools;
