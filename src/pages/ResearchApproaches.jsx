import React from 'react';
import { motion } from 'framer-motion';
import { FlaskConical, BrainCircuit, Share2, CheckCircle, FileCode, BarChart, Clock } from 'lucide-react';

const ResearchApproaches = () => {
  const approaches = [
    {
      title: 'Pendekatan Eksperimental',
      icon: FlaskConical,
      color: 'bg-blue-500',
      borderColor: 'border-blue-200',
      description: 'Fokus pada pengujian hipotesis melalui eksperimen terkontrol untuk mengukur kinerja, efisiensi, atau akurasi suatu sistem atau algoritma.',
      characteristics: [
        'Lingkungan yang terkontrol dan terukur',
        'Manipulasi variabel independen (misal: ukuran input, konfigurasi sistem)',
        'Pengukuran variabel dependen (misal: waktu eksekusi, penggunaan memori, akurasi)',
        'Penggunaan metrik kuantitatif yang jelas',
        'Analisis statistik untuk validasi hasil (misal: T-test, ANOVA)'
      ],
      whenToUse: [
        'Membandingkan performa beberapa algoritma',
        'Menguji efisiensi sistem di bawah beban kerja yang berbeda',
        'Mengevaluasi dampak perubahan parameter terhadap hasil',
        'Memvalidasi sebuah teknik atau metode baru dengan bukti empiris'
      ],
      example: {
        title: 'Analisis Perbandingan Kinerja Algoritma Sorting (Quick Sort vs. Merge Sort)',
        details: 'Melakukan eksperimen dengan dataset bervariasi (ukuran kecil, sedang, besar; data acak, terurut, terurut terbalik). Variabel yang diukur adalah waktu eksekusi (time complexity) dan penggunaan memori (space complexity). Hasil dianalisis untuk menentukan algoritma mana yang lebih unggul pada kondisi tertentu.'
      }
    },
    {
      title: 'Pemodelan & Analisis Algoritma',
      icon: BrainCircuit,
      color: 'bg-green-500',
      borderColor: 'border-green-200',
      description: 'Pendekatan teoretis yang berfokus pada perancangan, analisis matematis, dan pembuktian kebenaran serta efisiensi suatu algoritma.',
      characteristics: [
        'Fokus pada logika, matematika, dan pembuktian formal',
        'Analisis kompleksitas menggunakan notasi Big O (O, Ω, Θ)',
        'Representasi solusi dalam bentuk pseudocode',
        'Pembuktian kebenaran algoritma (misal: dengan induksi matematis, loop invariants)',
        'Desain struktur data yang efisien untuk mendukung algoritma'
      ],
      whenToUse: [
        'Mengembangkan solusi baru untuk masalah komputasi yang kompleks',
        'Meningkatkan efisiensi dari solusi yang sudah ada secara fundamental',
        'Penelitian dalam bidang teoretis seperti kriptografi, bioinformatika, atau optimisasi',
        'Saat bukti empiris sulit atau tidak mungkin didapatkan'
      ],
      example: {
        title: 'Desain Algoritma Heuristik untuk Optimasi Rute Kurir (Vehicle Routing Problem)',
        details: 'Merancang algoritma baru yang dapat menemukan solusi mendekati optimal dalam waktu yang wajar. Analisis difokuskan pada kompleksitas waktu algoritma (misal: O(n^2)) dan pembuktian bahwa algoritma dapat memberikan solusi yang lebih baik dari metode yang ada dalam skenario tertentu.'
      }
    },
    {
      title: 'Perancangan Perangkat Lunak (UML)',
      icon: Share2,
      color: 'bg-purple-500',
      borderColor: 'border-purple-200',
      description: 'Pendekatan rekayasa yang menggunakan Unified Modeling Language (UML) untuk memodelkan, merancang, dan mendokumentasikan arsitektur dan perilaku sistem perangkat lunak.',
      characteristics: [
        'Representasi visual dari arsitektur, proses, dan struktur sistem',
        'Menggunakan notasi standar yang dipahami secara universal',
        'Mencakup aspek struktural (Class Diagram, Component Diagram) dan behavioral (Use Case, Sequence, Activity Diagram)',
        'Menjadi blueprint atau cetak biru untuk tim pengembang',
        'Memfasilitasi komunikasi antara analis, desainer, developer, dan klien'
      ],
      whenToUse: [
        'Merancang sistem perangkat lunak yang kompleks dari awal',
        'Mendokumentasikan dan menganalisis sistem yang sudah ada (reverse engineering)',
        'Merencanakan arsitektur microservices atau sistem terdistribusi',
        'Mengkomunikasikan desain sistem kepada tim pengembang secara jelas'
      ],
      example: {
        title: 'Perancangan Arsitektur Sistem E-Learning Menggunakan UML',
        details: 'Membuat serangkaian diagram UML untuk memodelkan sistem. Use Case Diagram untuk mendefinisikan interaksi pengguna (mahasiswa, dosen). Class Diagram untuk merancang struktur data (Course, User, Module). Sequence Diagram untuk menggambarkan alur proses pendaftaran kelas. Activity Diagram untuk memodelkan alur pengerjaan kuis.'
      }
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
            Pendekatan Penelitian Ilmu Komputer
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Pahami pendekatan utama dalam penelitian Informatika dan Ilmu Komputer yang berfokus pada eksperimen, analisis teoretis, dan rekayasa sistem.
          </p>
        </motion.div>

        {/* Approaches Cards */}
        <div className="space-y-8">
          {approaches.map((approach, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`bg-white rounded-xl shadow-lg border-l-4 ${approach.borderColor} overflow-hidden`}
            >
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className={`p-3 ${approach.color} rounded-lg mr-4`}>
                    <approach.icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">{approach.title}</h2>
                    <p className="text-gray-600 mt-1">{approach.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Karakteristik Utama:</h3>
                    <ul className="space-y-2">
                      {approach.characteristics.map((char, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-1 mr-2 flex-shrink-0" />
                          <span className="text-gray-700">{char}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Kapan Digunakan:</h3>
                    <ul className="space-y-2">
                      {approach.whenToUse.map((when, idx) => (
                        <li key={idx} className="flex items-start">
                           <CheckCircle className="h-4 w-4 text-blue-500 mt-1 mr-2 flex-shrink-0" />
                          <span className="text-gray-700">{when}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Contoh Kasus Penelitian:</h4>
                  <p className="font-medium text-gray-800 mb-2">{approach.example.title}</p>
                  <p className="text-gray-700 leading-relaxed">{approach.example.details}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-white rounded-xl shadow-lg overflow-hidden"
        >
          <div className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Perbandingan Pendekatan</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-4 px-4 font-semibold text-gray-900">Aspek</th>
                    <th className="text-left py-4 px-4 font-semibold text-gray-900">Eksperimental</th>
                    <th className="text-left py-4 px-4 font-semibold text-gray-900">Analisis Algoritma</th>
                    <th className="text-left py-4 px-4 font-semibold text-gray-900">Perancangan (UML)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 font-medium text-gray-900">Fokus Utama</td>
                    <td className="py-3 px-4 text-gray-700">Pengukuran & Perbandingan</td>
                    <td className="py-3 px-4 text-gray-700">Logika & Efisiensi Teoretis</td>
                    <td className="py-3 px-4 text-gray-700">Struktur & Perilaku Sistem</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 font-medium text-gray-900">Output Utama</td>
                    <td className="py-3 px-4 text-gray-700">Data Kinerja (Grafik, Tabel)</td>
                    <td className="py-3 px-4 text-gray-700">Pseudocode & Analisis Big O</td>
                    <td className="py-3 px-4 text-gray-700">Diagram UML</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 font-medium text-gray-900">Sifat</td>
                    <td className="py-3 px-4 text-gray-700">Empiris, Kuantitatif</td>
                    <td className="py-3 px-4 text-gray-700">Teoretis, Matematis</td>
                    <td className="py-3 px-4 text-gray-700">Rekayasa, Desain</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 font-medium text-gray-900">Contoh Artefak</td>
                    <td className="py-3 px-4 text-gray-700"><BarChart className="h-5 w-5 inline-block mr-1 text-blue-500"/>Hasil Uji Statistik</td>
                    <td className="py-3 px-4 text-gray-700"><FileCode className="h-5 w-5 inline-block mr-1 text-green-500"/>Bukti Kompleksitas</td>
                    <td className="py-3 px-4 text-gray-700"><Share2 className="h-5 w-5 inline-block mr-1 text-purple-500"/>Class & Sequence Diagram</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ResearchApproaches;
