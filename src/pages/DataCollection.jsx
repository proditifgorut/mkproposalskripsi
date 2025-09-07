import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Eye, FileText, BookOpen, Users, CheckCircle, X } from 'lucide-react';

const DataCollection = () => {
  const methods = [
    {
      title: 'Wawancara',
      icon: MessageCircle,
      description: 'Teknik pengumpulan data melalui percakapan langsung dengan responden untuk mendapatkan informasi mendalam.',
      color: 'bg-blue-500',
      types: [
        {
          name: 'Wawancara Terstruktur',
          description: 'Menggunakan daftar pertanyaan yang telah ditetapkan',
          pros: ['Konsisten', 'Mudah dianalisis', 'Dapat dibandingkan'],
          cons: ['Kurang fleksibel', 'Informasi terbatas']
        },
        {
          name: 'Wawancara Semi-terstruktur',
          description: 'Kombinasi pertanyaan tetap dan pertanyaan follow-up',
          pros: ['Fleksibel', 'Informasi mendalam', 'Natural'],
          cons: ['Membutuhkan skill', 'Sulit distandarisasi']
        },
        {
          name: 'Wawancara Tidak Terstruktur',
          description: 'Percakapan bebas sesuai alur yang berkembang',
          pros: ['Sangat mendalam', 'Eksplorasi luas', 'Natural'],
          cons: ['Sulit dianalisis', 'Bias tinggi', 'Waktu lama']
        }
      ],
      tips: [
        'Siapkan pertanyaan panduan yang jelas',
        'Pilih tempat yang nyaman dan tenang',
        'Gunakan alat perekam dengan izin responden',
        'Buat transkrip lengkap setelah wawancara',
        'Validasi informasi dengan follow-up question'
      ]
    },
    {
      title: 'Observasi',
      icon: Eye,
      description: 'Pengamatan langsung terhadap perilaku, interaksi, atau proses untuk memahami fenomena dalam konteks alamiah.',
      color: 'bg-green-500',
      types: [
        {
          name: 'Observasi Partisipatif',
          description: 'Peneliti terlibat langsung dalam aktivitas yang diamati',
          pros: ['Pemahaman mendalam', 'Konteks natural', 'Insight autentik'],
          cons: ['Bias observer', 'Mengubah perilaku subjek']
        },
        {
          name: 'Observasi Non-partisipatif',
          description: 'Peneliti mengamati tanpa terlibat langsung',
          pros: ['Objektif', 'Minimal interference', 'Dapat diulang'],
          cons: ['Pemahaman terbatas', 'Interpretasi subjektif']
        },
        {
          name: 'Observasi Terstruktur',
          description: 'Menggunakan checklist atau form observasi yang sistematis',
          pros: ['Konsisten', 'Mudah dikuantifikasi', 'Reliable'],
          cons: ['Kaku', 'Mungkin melewatkan detail penting']
        }
      ],
      tips: [
        'Buat protokol observasi yang jelas',
        'Tentukan fokus pengamatan sebelumnya',
        'Catat field notes secara detail dan real-time',
        'Gunakan video recording jika memungkinkan',
        'Lakukan observasi di waktu dan kondisi berbeda'
      ]
    },
    {
      title: 'Kuesioner/Survei',
      icon: FileText,
      description: 'Instrumen tertulis dengan pertanyaan terstandar untuk mengumpulkan data dari banyak responden secara efisien.',
      color: 'bg-purple-500',
      types: [
        {
          name: 'Kuesioner Online',
          description: 'Distribusi melalui platform digital (Google Forms, SurveyMonkey)',
          pros: ['Jangkauan luas', 'Cost-effective', 'Real-time data'],
          cons: ['Response rate rendah', 'Digital divide']
        },
        {
          name: 'Kuesioner Paper-based',
          description: 'Kuesioner fisik yang diisi secara manual',
          pros: ['Response rate tinggi', 'Kontrol kualitas', 'Akses universal'],
          cons: ['Mahal', 'Proses lama', 'Error entry data']
        },
        {
          name: 'Hybrid Questionnaire',
          description: 'Kombinasi online dan offline sesuai target responden',
          pros: ['Fleksibel', 'Response rate optimal', 'Inklusif'],
          cons: ['Kompleks', 'Membutuhkan resource lebih']
        }
      ],
      tips: [
        'Desain pertanyaan yang jelas dan tidak bias',
        'Gunakan skala Likert untuk mengukur persepsi',
        'Test pilot dengan sampel kecil terlebih dahulu',
        'Sediakan incentive untuk meningkatkan response rate',
        'Validasi dan reliabilitas instrumen sebelum digunakan'
      ]
    },
    {
      title: 'Studi Literatur',
      icon: BookOpen,
      description: 'Pengumpulan data sekunder dari sumber-sumber publikasi ilmiah, dokumen, dan referensi relevan.',
      color: 'bg-orange-500',
      types: [
        {
          name: 'Systematic Literature Review',
          description: 'Review sistematis dengan protokol yang ketat dan transparan',
          pros: ['Komprehensif', 'Metodologi jelas', 'Reproducible'],
          cons: ['Waktu lama', 'Resource intensive']
        },
        {
          name: 'Narrative Review',
          description: 'Review naratif untuk memberikan overview topik',
          pros: ['Fleksibel', 'Comprehensive coverage', 'Kontekstual'],
          cons: ['Subjektif', 'Sulit direplikasi']
        },
        {
          name: 'Meta-analysis',
          description: 'Analisis statistik dari hasil beberapa studi sejenis',
          pros: ['Statistik robust', 'Evidence-based', 'Power tinggi'],
          cons: ['Heterogenitas studi', 'Publikasi bias']
        }
      ],
      tips: [
        'Gunakan database akademik (IEEE, ACM, Scopus)',
        'Definisikan kata kunci pencarian yang tepat',
        'Buat kriteria inklusi dan eksklusi yang jelas',
        'Gunakan reference manager (Mendeley, Zotero)',
        'Dokumentasikan proses pencarian secara detail'
      ]
    },
    {
      title: 'Focus Group Discussion',
      icon: Users,
      description: 'Diskusi terarah dengan kelompok kecil responden untuk memahami persepsi, opini, dan sikap kolektif.',
      color: 'bg-red-500',
      types: [
        {
          name: 'Traditional FGD',
          description: 'FGD tatap muka di ruang fisik dengan moderator',
          pros: ['Interaksi natural', 'Non-verbal cues', 'Dinamika grup'],
          cons: ['Logistik kompleks', 'Geografis terbatas']
        },
        {
          name: 'Online FGD',
          description: 'FGD virtual menggunakan platform video conference',
          pros: ['Fleksibel', 'Cost-effective', 'Record mudah'],
          cons: ['Technical issues', 'Interaksi terbatas']
        },
        {
          name: 'Mini FGD',
          description: 'FGD dengan peserta 4-6 orang untuk topik spesifik',
          pros: ['Mendalam', 'Mudah dikelola', 'Partisipasi tinggi'],
          cons: ['Representasi terbatas', 'Grupthink']
        }
      ],
      tips: [
        'Rekruit peserta dengan karakteristik homogen',
        'Siapkan panduan diskusi yang terstruktur',
        'Gunakan moderator yang berpengalaman',
        'Ciptakan suasana yang nyaman dan terbuka',
        'Rekam dan transkrip seluruh diskusi'
      ]
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
            Metode Pengumpulan Data
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Pelajari berbagai teknik pengumpulan data yang efektif untuk penelitian Informatika dan Ilmu Komputer, 
            lengkap dengan panduan praktis dan tips implementasi.
          </p>
        </motion.div>

        {/* Methods */}
        <div className="space-y-12">
          {methods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className={`p-3 ${method.color} rounded-lg mr-4`}>
                    <method.icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">{method.title}</h2>
                    <p className="text-gray-600 mt-1">{method.description}</p>
                  </div>
                </div>

                {/* Types */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Jenis-jenis {method.title}:</h3>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {method.types.map((type, typeIndex) => (
                      <div key={typeIndex} className="border border-gray-200 rounded-lg p-6">
                        <h4 className="font-semibold text-gray-900 mb-2">{type.name}</h4>
                        <p className="text-gray-600 text-sm mb-4">{type.description}</p>
                        
                        <div className="space-y-3">
                          <div>
                            <h5 className="text-sm font-medium text-green-700 mb-1">Kelebihan:</h5>
                            <ul className="space-y-1">
                              {type.pros.map((pro, proIndex) => (
                                <li key={proIndex} className="flex items-center text-sm text-gray-700">
                                  <CheckCircle className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                                  {pro}
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h5 className="text-sm font-medium text-red-700 mb-1">Kekurangan:</h5>
                            <ul className="space-y-1">
                              {type.cons.map((con, conIndex) => (
                                <li key={conIndex} className="flex items-center text-sm text-gray-700">
                                  <X className="h-3 w-3 text-red-500 mr-2 flex-shrink-0" />
                                  {con}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tips */}
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Tips Praktis:</h3>
                  <ul className="space-y-2">
                    {method.tips.map((tip, tipIndex) => (
                      <li key={tipIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Selection Guide */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl text-white p-8"
        >
          <h2 className="text-2xl font-bold mb-6">Panduan Memilih Metode Pengumpulan Data</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Berdasarkan Jenis Data:</h3>
              <ul className="space-y-2">
                <li>• <strong>Data Kuantitatif:</strong> Kuesioner, Observasi Terstruktur</li>
                <li>• <strong>Data Kualitatif:</strong> Wawancara, FGD, Observasi Partisipatif</li>
                <li>• <strong>Data Sekunder:</strong> Studi Literatur, Analisis Dokumen</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Berdasarkan Resource:</h3>
              <ul className="space-y-2">
                <li>• <strong>Budget Terbatas:</strong> Kuesioner Online, Studi Literatur</li>
                <li>• <strong>Waktu Terbatas:</strong> Survei, Observasi Non-partisipatif</li>
                <li>• <strong>Akses Terbatas:</strong> Online Survey, Virtual FGD</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DataCollection;
