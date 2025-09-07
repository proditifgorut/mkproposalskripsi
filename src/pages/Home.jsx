import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Users, Target, CheckCircle } from 'lucide-react';

const Home = () => {
  const featuredArticles = [
    {
      title: 'Memilih Metode Penelitian yang Tepat',
      description: 'Panduan lengkap untuk menentukan metode penelitian yang sesuai dengan topik skripsi Anda.',
      link: '/jenis-penelitian',
      icon: Target,
      color: 'bg-blue-500'
    },
    {
      title: 'Perbedaan Penelitian Kualitatif vs. Kuantitatif',
      description: 'Memahami kapan dan bagaimana menggunakan pendekatan kualitatif atau kuantitatif.',
      link: '/pendekatan-penelitian',
      icon: Users,
      color: 'bg-green-500'
    },
    {
      title: 'Contoh Metodologi untuk Proyek Pengembangan Sistem',
      description: 'Template dan contoh nyata metodologi penelitian untuk pengembangan sistem informasi.',
      link: '/contoh-metodologi',
      icon: BookOpen,
      color: 'bg-purple-500'
    }
  ];

  const features = [
    'Panduan step-by-step yang mudah diikuti',
    'Contoh metodologi dari berbagai topik IT',
    'Template yang siap digunakan',
    'Tools dan software penelitian',
    'Tips penulisan proposal dan skripsi',
    'Validasi dari dosen dan ahli'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Panduan Lengkap Metodologi Penelitian
              <span className="text-blue-200 block">Informatika & Ilmu Komputer</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
              Dari Konsep Hingga Penulisan: Langkah Demi Langkah Menyusun Proposal dan Skripsi yang Solid
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/jenis-penelitian"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors flex items-center justify-center space-x-2"
              >
                <span>Mulai Pelajari</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/contoh-metodologi"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
              >
                Lihat Contoh
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Mengapa Memilih Platform Ini?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kami menyediakan panduan komprehensif yang telah membantu ribuan mahasiswa menyelesaikan penelitian mereka
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-3 p-6 bg-gray-50 rounded-lg"
              >
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Panduan Populer
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Artikel dan panduan yang paling sering dibaca oleh mahasiswa
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredArticles.map((article, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="p-6">
                  <div className={`w-12 h-12 ${article.color} rounded-lg flex items-center justify-center mb-4`}>
                    <article.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{article.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{article.description}</p>
                  <Link
                    to={article.link}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
                  >
                    Pelajari Selengkapnya
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Siap Memulai Penelitian Anda?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Bergabunglah dengan ribuan mahasiswa yang telah berhasil menyelesaikan skripsi mereka dengan panduan kami
            </p>
            <Link
              to="/jenis-penelitian"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors inline-flex items-center space-x-2"
            >
              <span>Mulai Sekarang</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
