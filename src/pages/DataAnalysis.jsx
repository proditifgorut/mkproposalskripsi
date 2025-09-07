import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BarChart3, MessageSquare, Zap, TrendingUp, Code, Database } from 'lucide-react';

const DataAnalysis = () => {
  const [activeTab, setActiveTab] = useState('quantitative');

  const quantitativeAnalysis = {
    title: 'Analisis Data Kuantitatif',
    icon: BarChart3,
    color: 'bg-blue-500',
    description: 'Teknik analisis statistik untuk data numerik dan terukur',
    methods: [
      {
        category: 'Statistik Deskriptif',
        description: 'Menggambarkan karakteristik dasar dari dataset',
        techniques: [
          {
            name: 'Measures of Central Tendency',
            items: ['Mean (rata-rata)', 'Median (nilai tengah)', 'Modus (nilai yang sering muncul)'],
            example: 'Rata-rata waktu response time aplikasi = 2.3 detik'
          },
          {
            name: 'Measures of Variability',
            items: ['Range (rentang)', 'Standar Deviasi', 'Variance (varians)'],
            example: 'Standar deviasi kepuasan pengguna = 0.8 (skala 1-5)'
          },
          {
            name: 'Distribution Analysis',
            items: ['Histogram', 'Box Plot', 'Scatter Plot'],
            example: 'Distribusi skor usability testing mengikuti kurva normal'
          }
        ]
      },
      {
        category: 'Statistik Inferensial',
        description: 'Mengeneralisasi temuan dari sampel ke populasi',
        techniques: [
          {
            name: 'Uji Hipotesis',
            items: ['T-test (perbandingan 2 grup)', 'ANOVA (perbandingan >2 grup)', 'Chi-square (hubungan kategorial)'],
            example: 'T-test menunjukkan perbedaan signifikan performa algoritma A vs B (p<0.05)'
          },
          {
            name: 'Analisis Korelasi',
            items: ['Pearson Correlation', 'Spearman Correlation', 'Kendall Tau'],
            example: 'Korelasi positif kuat antara RAM dan kecepatan processing (r=0.87)'
          },
          {
            name: 'Analisis Regresi',
            items: ['Linear Regression', 'Multiple Regression', 'Logistic Regression'],
            example: 'Model regresi: Kepuasan = 2.1 + 0.8(Usability) + 0.6(Performance)'
          }
        ]
      }
    ],
    tools: [
      { name: 'SPSS', description: 'User-friendly untuk analisis statistik dasar', best_for: 'Pemula, survei' },
      { name: 'R', description: 'Open source, sangat powerful untuk statistik', best_for: 'Advanced analysis, customization' },
      { name: 'Python (Pandas, NumPy)', description: 'Versatile, integrasi dengan ML', best_for: 'Data science, automation' },
      { name: 'Excel', description: 'Mudah digunakan, statistik dasar', best_for: 'Analisis sederhana, visualisasi' }
    ]
  };

  const qualitativeAnalysis = {
    title: 'Analisis Data Kualitatif',
    icon: MessageSquare,
    color: 'bg-green-500',
    description: 'Teknik analisis untuk data non-numerik seperti teks, gambar, dan audio',
    methods: [
      {
        category: 'Analisis Tematik',
        description: 'Mengidentifikasi, menganalisis, dan melaporkan pola (tema) dalam data',
        techniques: [
          {
            name: 'Coding Process',
            items: ['Open Coding (coding awal)', 'Axial Coding (menghubungkan kode)', 'Selective Coding (tema utama)'],
            example: 'Dari 15 wawancara, ditemukan 5 tema utama: usability, security, performance, cost, training'
          },
          {
            name: 'Theme Development',
            items: ['Pattern Recognition', 'Theme Refinement', 'Theme Validation'],
            example: 'Tema "Resistance to Change" muncul dalam 80% transkrip interview'
          },
          {
            name: 'Reporting',
            items: ['Theme Description', 'Supporting Quotes', 'Interpretation'],
            example: 'Pengguna melaporkan: "Sistem baru membutuhkan waktu adaptasi yang lama"'
          }
        ]
      },
      {
        category: 'Analisis Naratif',
        description: 'Menganalisis cerita dan pengalaman individu secara mendalam',
        techniques: [
          {
            name: 'Story Structure Analysis',
            items: ['Beginning-Middle-End', 'Turning Points', 'Resolution'],
            example: 'Perjalanan adopsi teknologi: resistensi → trial → acceptance → mastery'
          },
          {
            name: 'Character Analysis',
            items: ['Protagonist/Antagonist', 'Supporting Characters', 'Relationships'],
            example: 'IT Manager sebagai change agent, end-users sebagai adopters'
          },
          {
            name: 'Context Analysis',
            items: ['Temporal Setting', 'Spatial Setting', 'Cultural Context'],
            example: 'Implementasi sistem terjadi selama pandemi, mempengaruhi penerimaan WFH'
          }
        ]
      },
      {
        category: 'Analisis Sentimen',
        description: 'Menganalisis emosi dan opini dari teks (manual atau otomatis)',
        techniques: [
          {
            name: 'Manual Sentiment Analysis',
            items: ['Positive/Negative/Neutral', 'Emotion Detection', 'Intensity Rating'],
            example: 'Review aplikasi: 60% positif, 25% neutral, 15% negatif'
          },
          {
            name: 'Automated Sentiment Analysis',
            items: ['NLP Libraries', 'Machine Learning Models', 'Deep Learning'],
            example: 'Analisis 10,000 tweet menggunakan VADER sentiment analyzer'
          },
          {
            name: 'Aspect-based Sentiment',
            items: ['Feature-specific sentiment', 'Multi-aspect analysis', 'Granular insights'],
            example: 'UI Design: positif (4.2/5), Performance: negatif (2.1/5)'
          }
        ]
      }
    ],
    tools: [
      { name: 'NVivo', description: 'Comprehensive qualitative analysis', best_for: 'Large datasets, multiple data types' },
      { name: 'ATLAS.ti', description: 'Powerful coding and visualization', best_for: 'Complex analysis, theory building' },
      { name: 'Python (NLTK, spaCy)', description: 'Text processing dan NLP', best_for: 'Automated analysis, large scale' },
      { name: 'Excel/Google Sheets', description: 'Simple coding dan categorization', best_for: 'Small datasets, basic analysis' }
    ]
  };

  const analysisSteps = [
    {
      step: 1,
      title: 'Persiapan Data',
      description: 'Membersihkan dan menyiapkan data untuk analisis',
      tasks: ['Data cleaning', 'Missing value handling', 'Outlier detection', 'Data transformation']
    },
    {
      step: 2,
      title: 'Eksplorasi Data',
      description: 'Memahami karakteristik dan pola data',
      tasks: ['Descriptive statistics', 'Data visualization', 'Pattern identification', 'Assumption checking']
    },
    {
      step: 3,
      title: 'Analisis Utama',
      description: 'Menerapkan teknik analisis sesuai tujuan penelitian',
      tasks: ['Hypothesis testing', 'Model building', 'Statistical inference', 'Effect size calculation']
    },
    {
      step: 4,
      title: 'Interpretasi',
      description: 'Menafsirkan hasil analisis dalam konteks penelitian',
      tasks: ['Result interpretation', 'Practical significance', 'Limitation discussion', 'Conclusion drawing']
    }
  ];

  const currentAnalysis = activeTab === 'quantitative' ? quantitativeAnalysis : qualitativeAnalysis;

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
            Metode Analisis Data
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Pelajari teknik analisis data kuantitatif dan kualitatif yang tepat untuk penelitian Informatika dan Ilmu Komputer, 
            lengkap dengan tools dan contoh implementasi.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-lg p-2 shadow-lg">
            <button
              onClick={() => setActiveTab('quantitative')}
              className={`px-6 py-3 rounded-md font-semibold transition-colors ${
                activeTab === 'quantitative'
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-600 hover:text-blue-500'
              }`}
            >
              <BarChart3 className="h-5 w-5 inline mr-2" />
              Analisis Kuantitatif
            </button>
            <button
              onClick={() => setActiveTab('qualitative')}
              className={`px-6 py-3 rounded-md font-semibold transition-colors ${
                activeTab === 'qualitative'
                  ? 'bg-green-500 text-white'
                  : 'text-gray-600 hover:text-green-500'
              }`}
            >
              <MessageSquare className="h-5 w-5 inline mr-2" />
              Analisis Kualitatif
            </button>
          </div>
        </div>

        {/* Analysis Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white rounded-xl shadow-lg overflow-hidden mb-12"
        >
          <div className="p-8">
            <div className="flex items-center mb-6">
              <div className={`p-3 ${currentAnalysis.color} rounded-lg mr-4`}>
                <currentAnalysis.icon className="h-8 w-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">{currentAnalysis.title}</h2>
                <p className="text-gray-600 mt-1">{currentAnalysis.description}</p>
              </div>
            </div>

            {/* Methods */}
            <div className="space-y-8">
              {currentAnalysis.methods.map((method, index) => (
                <div key={index} className="border-l-4 border-blue-200 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{method.category}</h3>
                  <p className="text-gray-600 mb-4">{method.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {method.techniques.map((technique, techIndex) => (
                      <div key={techIndex} className="bg-gray-50 rounded-lg p-4">
                        <h4 className="font-semibold text-gray-900 mb-2">{technique.name}</h4>
                        <ul className="text-sm text-gray-700 mb-3 space-y-1">
                          {technique.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start">
                              <TrendingUp className="h-3 w-3 text-blue-500 mt-1 mr-2 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                        <div className="bg-blue-50 p-2 rounded text-xs text-blue-800">
                          <strong>Contoh:</strong> {technique.example}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Tools */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Software dan Tools:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentAnalysis.tools.map((tool, index) => (
                  <div key={index} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                    <Code className="h-6 w-6 text-blue-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">{tool.name}</h4>
                      <p className="text-sm text-gray-600 mb-1">{tool.description}</p>
                      <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                        Best for: {tool.best_for}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Analysis Process */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-xl shadow-lg overflow-hidden"
        >
          <div className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Langkah-langkah Analisis Data</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {analysisSteps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                      {step.step}
                    </div>
                    {index < analysisSteps.length - 1 && (
                      <div className="hidden lg:block absolute top-5 left-10 w-full h-0.5 bg-gray-300"></div>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{step.description}</p>
                  <ul className="space-y-1">
                    {step.tasks.map((task, taskIndex) => (
                      <li key={taskIndex} className="flex items-start text-sm text-gray-700">
                        <Zap className="h-3 w-3 text-yellow-500 mt-1 mr-2 flex-shrink-0" />
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Best Practices */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 bg-gradient-to-r from-indigo-600 to-purple-700 rounded-xl text-white p-8"
        >
          <h2 className="text-2xl font-bold mb-6">Best Practices Analisis Data</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Prinsip Umum:</h3>
              <ul className="space-y-2">
                <li>• Pahami data Anda sebelum menganalisis</li>
                <li>• Pilih teknik analisis yang sesuai dengan tujuan penelitian</li>
                <li>• Validasi asumsi sebelum menerapkan teknik statistik</li>
                <li>• Dokumentasikan setiap langkah analisis</li>
                <li>• Interpretasi hasil dalam konteks domain</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Tips Praktis:</h3>
              <ul className="space-y-2">
                <li>• Backup data sebelum melakukan transformasi</li>
                <li>• Gunakan visualisasi untuk eksplorasi data</li>
                <li>• Lakukan peer review untuk validasi analisis</li>
                <li>• Simpan script/syntax untuk reproducibility</li>
                <li>• Diskusikan limitasi dan bias dalam analisis</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DataAnalysis;
