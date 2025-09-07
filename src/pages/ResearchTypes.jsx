import React from 'react';
import { motion } from 'framer-motion';
import { Code, FlaskConical, FileSearch, BarChart3, ArrowRight } from 'lucide-react';

const ResearchTypes = () => {
  const researchTypes = [
    {
      title: 'Penelitian Pengembangan (R&D)',
      icon: Code,
      description: 'Penelitian yang bertujuan untuk mengembangkan atau memperbaiki produk, sistem, atau aplikasi teknologi.',
      details: [
        'Model Waterfall: Pendekatan sequential dengan fase yang jelas',
        'Model Agile: Pengembangan iteratif dengan feedback berkelanjutan',
        'SDLC (System Development Life Cycle): Metodologi komprehensif',
        'Prototype: Pengembangan model awal untuk validasi konsep'
      ],
      examples: [
        'Pengembangan aplikasi mobile untuk e-commerce',
        'Sistem informasi manajemen perpustakaan',
        'Platform pembelajaran online berbasis web'
      ],
      color: 'bg-blue-500',
      borderColor: 'border-blue-200'
    },
    {
      title: 'Penelitian Eksperimental',
      icon: FlaskConical,
      description: 'Penelitian yang menguji hipotesis melalui eksperimen terkontrol dengan variabel yang dapat diukur.',
      details: [
        'Desain eksperimen: Menentukan variabel bebas dan terikat',
        'Kontrol variabel: Mengidentifikasi dan mengontrol faktor eksternal',
        'Pengukuran hasil: Metrik performa yang objektif dan terukur',
        'Analisis statistik: Uji signifikansi dan validitas hasil'
      ],
      examples: [
        'Perbandingan performa algoritma machine learning',
        'Pengujian efektivitas metode kompresi data',
        'Analisis performa jaringan dengan protokol berbeda'
      ],
      color: 'bg-green-500',
      borderColor: 'border-green-200'
    },
    {
      title: 'Studi Kasus (Case Study)',
      icon: FileSearch,
      description: 'Penelitian mendalam terhadap satu atau beberapa kasus spesifik untuk memahami fenomena secara komprehensif.',
      details: [
        'Pemilihan kasus: Kriteria purposive sampling',
        'Pengumpulan data: Multiple sources untuk triangulasi',
        'Analisis mendalam: Memahami konteks dan kompleksitas',
        'Generalisasi teoretis: Lesson learned untuk kasus serupa'
      ],
      examples: [
        'Implementasi sistem ERP di perusahaan manufaktur',
        'Adopsi teknologi cloud computing di startup',
        'Transformasi digital pada institusi pendidikan'
      ],
      color: 'bg-purple-500',
      borderColor: 'border-purple-200'
    },
    {
      title: 'Penelitian Survei',
      icon: BarChart3,
      description: 'Penelitian yang mengumpulkan data dari sampel populasi untuk menggeneralisasi temuan ke populasi yang lebih besar.',
      details: [
        'Desain kuesioner: Pertanyaan valid dan reliabel',
        'Sampling: Teknik pengambilan sampel yang representatif',
        'Distribusi: Online survey, interview, atau paper-based',
        'Analisis data: Statistik deskriptif dan inferensial'
      ],
      examples: [
        'Survei kepuasan pengguna aplikasi mobile banking',
        'Analisis adopsi teknologi AI di kalangan mahasiswa',
        'Persepsi cybersecurity awareness di perusahaan'
      ],
      color: 'bg-orange-500',
      borderColor: 'border-orange-200'
    }
  ];

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
            Jenis-Jenis Penelitian
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Pahami berbagai jenis penelitian yang umum digunakan dalam bidang Informatika dan Ilmu Komputer, 
            lengkap dengan contoh implementasi dan panduan praktis.
          </p>
        </motion.div>

        {/* Research Types Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {researchTypes.map((type, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`bg-white rounded-xl shadow-lg border-l-4 ${type.borderColor} overflow-hidden hover:shadow-xl transition-shadow`}
            >
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className={`p-3 ${type.color} rounded-lg mr-4`}>
                    <type.icon className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">{type.title}</h2>
                </div>

                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                  {type.description}
                </p>

                {/* Details */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Karakteristik Utama:</h3>
                  <ul className="space-y-2">
                    {type.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start">
                        <ArrowRight className="h-4 w-4 text-blue-500 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Examples */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Contoh Topik Penelitian:</h3>
                  <div className="space-y-2">
                    {type.examples.map((example, idx) => (
                      <div key={idx} className="bg-gray-50 p-3 rounded-lg">
                        <span className="text-gray-700 font-medium">{example}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Selection Guide */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-blue-50 rounded-xl p-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Panduan Memilih Jenis Penelitian</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Pertanyaan Panduan:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Apakah Anda ingin membangun/mengembangkan sesuatu yang baru?</li>
                <li>• Apakah Anda ingin menguji hipotesis atau teori tertentu?</li>
                <li>• Apakah Anda ingin memahami fenomena secara mendalam?</li>
                <li>• Apakah Anda ingin mengumpulkan data dari banyak responden?</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Tips Pemilihan:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Sesuaikan dengan tujuan penelitian Anda</li>
                <li>• Pertimbangkan sumber daya yang tersedia</li>
                <li>• Konsultasikan dengan dosen pembimbing</li>
                <li>• Lihat contoh penelitian sejenis</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ResearchTypes;
