import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Code, FlaskConical, Users, FileText, ChevronDown, ChevronUp } from 'lucide-react';

const MethodologyExamples = () => {
  const [expandedExample, setExpandedExample] = useState(null);

  const examples = [
    {
      title: 'Pengembangan Sistem Informasi Penjualan',
      type: 'Research & Development (R&D)',
      icon: Code,
      color: 'bg-blue-500',
      description: 'Metodologi penelitian untuk pengembangan sistem informasi berbasis web menggunakan metode SDLC Waterfall',
      methodology: {
        research_type: 'Penelitian Pengembangan (R&D)',
        approach: 'Kuantitatif dan Kualitatif (Mixed Methods)',
        model: 'System Development Life Cycle (SDLC) - Model Waterfall',
        phases: [
          {
            phase: 'Analisis Kebutuhan',
            duration: '2 minggu',
            activities: [
              'Wawancara dengan stakeholder (owner, kasir, manager)',
              'Observasi proses bisnis saat ini',
              'Analisis dokumen sistem lama',
              'Identifikasi kebutuhan fungsional dan non-fungsional'
            ],
            deliverables: ['Dokumen Requirement Specification', 'Use Case Diagram', 'Business Process Model']
          },
          {
            phase: 'Desain Sistem',
            duration: '3 minggu',
            activities: [
              'Perancangan arsitektur sistem',
              'Desain database (ERD, Normalisasi)',
              'Desain interface pengguna (UI/UX)',
              'Pembuatan prototype'
            ],
            deliverables: ['System Architecture Diagram', 'Database Design', 'UI/UX Mockup', 'Prototype']
          },
          {
            phase: 'Implementasi',
            duration: '6 minggu',
            activities: [
              'Coding backend menggunakan PHP Laravel',
              'Coding frontend menggunakan React.js',
              'Integrasi database MySQL',
              'Unit testing setiap modul'
            ],
            deliverables: ['Source Code', 'Unit Test Results', 'Technical Documentation']
          },
          {
            phase: 'Testing',
            duration: '2 minggu',
            activities: [
              'Black box testing untuk fungsionalitas',
              'White box testing untuk logic',
              'User Acceptance Testing (UAT)',
              'Performance testing'
            ],
            deliverables: ['Test Case Document', 'Bug Report', 'UAT Results', 'Performance Report']
          },
          {
            phase: 'Deployment',
            duration: '1 minggu',
            activities: [
              'Setup server production',
              'Database migration',
              'User training',
              'Go-live dan monitoring'
            ],
            deliverables: ['Deployment Guide', 'User Manual', 'Training Material', 'System Live']
          }
        ],
        data_collection: [
          'Wawancara terstruktur dengan 5 stakeholder',
          'Observasi proses bisnis selama 1 minggu',
          'Kuesioner kepuasan pengguna (n=30)',
          'Performance metrics (response time, throughput)'
        ],
        analysis_method: [
          'Analisis kebutuhan menggunakan teknik GAP analysis',
          'Evaluasi usability menggunakan System Usability Scale (SUS)',
          'Analisis performa menggunakan stress testing',
          'Analisis ROI (Return on Investment)'
        ],
        evaluation: [
          'Functional testing: 100% test case passed',
          'Usability score: 78.5 (Good)',
          'Performance: response time < 2 detik',
          'User satisfaction: 85% (sangat puas)'
        ]
      }
    },
    {
      title: 'Perbandingan Algoritma Klasifikasi untuk Deteksi Spam Email',
      type: 'Experimental Research',
      icon: FlaskConical,
      color: 'bg-green-500',
      description: 'Penelitian eksperimental untuk membandingkan performa tiga algoritma machine learning dalam mengklasifikasi email spam',
      methodology: {
        research_type: 'Penelitian Eksperimental',
        approach: 'Kuantitatif',
        design: 'Comparative Experimental Design',
        variables: {
          independent: 'Jenis Algoritma (Naive Bayes, SVM, Random Forest)',
          dependent: 'Akurasi Klasifikasi (%)',
          control: 'Dataset yang sama, preprocessing yang sama, evaluation metrics yang sama'
        },
        dataset: {
          name: 'Enron Email Dataset',
          size: '10,000 email (5,000 spam, 5,000 ham)',
          split: '70% training, 15% validation, 15% testing',
          features: 'TF-IDF vectors (10,000 features)'
        },
        experimental_setup: [
          {
            step: 'Data Preprocessing',
            activities: [
              'Text cleaning (remove HTML tags, special characters)',
              'Tokenization dan stopword removal',
              'Stemming menggunakan Porter Stemmer',
              'Feature extraction dengan TF-IDF'
            ]
          },
          {
            step: 'Model Training',
            activities: [
              'Train 3 algoritma dengan hyperparameter tuning',
              'Cross-validation 5-fold untuk model selection',
              'Feature selection menggunakan Chi-square',
              'Model evaluation dengan confusion matrix'
            ]
          },
          {
            step: 'Performance Testing',
            activities: [
              'Testing dengan test set yang terpisah',
              'Perhitungan accuracy, precision, recall, F1-score',
              'ROC curve analysis',
              'Statistical significance testing (ANOVA)'
            ]
          }
        ],
        data_collection: [
          'Menggunakan dataset publik "Enron Email Dataset" yang telah dilabeli.',
          'Data dibagi menjadi set training (70%), validasi (15%), dan testing (15%) untuk evaluasi objektif.'
        ],
        analysis_method: [
          'Perhitungan metrik evaluasi: Accuracy, Precision, Recall, dan F1-Score.',
          'Analisis ROC (Receiver Operating Characteristic) Curve dan perhitungan AUC (Area Under the Curve).',
          'Uji signifikansi statistik (ANOVA) untuk memvalidasi perbedaan performa antar algoritma.'
        ],
        evaluation_metrics: [
          'Accuracy: (TP + TN) / (TP + TN + FP + FN)',
          'Precision: TP / (TP + FP)',
          'Recall: TP / (TP + FN)',
          'F1-Score: 2 * (Precision * Recall) / (Precision + Recall)',
          'AUC-ROC: Area Under the ROC Curve'
        ],
        results: {
          naive_bayes: { accuracy: '92.5%', precision: '91.2%', recall: '93.8%', f1: '92.5%' },
          svm: { accuracy: '94.8%', precision: '95.1%', recall: '94.5%', f1: '94.8%' },
          random_forest: { accuracy: '96.2%', precision: '96.8%', recall: '95.6%', f1: '96.2%' }
        },
        statistical_test: 'ANOVA menunjukkan perbedaan signifikan (p < 0.001) antar algoritma'
      }
    },
    {
      title: 'Evaluasi Usability Aplikasi Mobile Banking',
      type: 'Survey Research',
      icon: Users,
      color: 'bg-purple-500',
      description: 'Penelitian survei untuk mengevaluasi tingkat usability aplikasi mobile banking menggunakan kuesioner SUS (System Usability Scale)',
      methodology: {
        research_type: 'Penelitian Survei',
        approach: 'Kuantitatif',
        design: 'Cross-sectional Survey Design',
        population: 'Pengguna aplikasi mobile banking di Indonesia (usia 18-65 tahun)',
        sampling: {
          method: 'Stratified Random Sampling',
          size: '384 responden (margin of error 5%, confidence level 95%)',
          strata: 'Berdasarkan usia (18-25, 26-35, 36-45, 46-55, 56-65)',
          distribution: 'Proporsional sesuai demografi pengguna'
        },
        instrument: {
          name: 'System Usability Scale (SUS) Questionnaire',
          items: '10 pertanyaan dengan skala Likert 1-5',
          additional: 'Demographic questions dan app usage behavior',
          validity: 'Construct validity dengan Confirmatory Factor Analysis',
          reliability: 'Cronbach\'s Alpha = 0.89 (Good)'
        },
        data_collection: [
          'Survei online didistribusikan melalui Google Forms selama 4 minggu ke grup pengguna dan media sosial.',
          'Survei lapangan dilakukan di beberapa cabang bank dan pusat perbelanjaan selama 2 minggu menggunakan tablet.'
        ],
        analysis_method: [
          'Analisis statistik deskriptif untuk demografi responden.',
          'Perhitungan skor SUS keseluruhan dan per kelompok, diikuti dengan interpretasi (Acceptability Ranges).',
          'Uji One-way ANOVA untuk membandingkan skor SUS antar kelompok usia.',
          'Analisis korelasi untuk menguji hubungan antara frekuensi penggunaan dan skor SUS.'
        ],
        results: {
          response_rate: '78.5% (302 dari 384 target)',
          overall_sus_score: '72.4 (Good usability)',
          by_age_group: {
            '18-25': '75.8 (Good)',
            '26-35': '74.2 (Good)',
            '36-45': '71.1 (Good)',
            '46-55': '68.9 (OK)',
            '56-65': '65.3 (OK)'
          },
          key_findings: [
            'Significant difference in usability perception across age groups (F=8.42, p<0.001)',
            'Positive correlation between usage frequency and SUS score (r=0.34, p<0.01)',
            'Security features are most appreciated (Mean=4.2/5)',
            'Navigation complexity is main concern (Mean=2.8/5)'
          ]
        }
      }
    }
  ];

  const toggleExample = (index) => {
    setExpandedExample(expandedExample === index ? null : index);
  };

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
            Contoh Metodologi Penelitian
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Template dan contoh lengkap metodologi penelitian dari berbagai jenis penelitian dalam bidang Informatika dan Ilmu Komputer. 
            Siap digunakan dan disesuaikan dengan topik penelitian Anda.
          </p>
        </motion.div>

        {/* Examples */}
        <div className="space-y-8">
          {examples.map((example, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <div className={`p-3 ${example.color} rounded-lg mr-4`}>
                      <example.icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">{example.title}</h2>
                      <p className="text-sm text-gray-500 font-medium">{example.type}</p>
                      <p className="text-gray-600 mt-1">{example.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors flex items-center space-x-2">
                      <Download className="h-4 w-4" />
                      <span>Download PDF</span>
                    </button>
                    <button
                      onClick={() => toggleExample(index)}
                      className="p-2 text-gray-500 hover:text-gray-700 transition-colors"
                    >
                      {expandedExample === index ? (
                        <ChevronUp className="h-6 w-6" />
                      ) : (
                        <ChevronDown className="h-6 w-6" />
                      )}
                    </button>
                  </div>
                </div>

                <motion.div
                  initial={false}
                  animate={{
                    height: expandedExample === index ? 'auto' : 0,
                    opacity: expandedExample === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="pt-6 border-t border-gray-200">
                    {/* Basic Info */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-2">Jenis Penelitian</h4>
                        <p className="text-gray-700">{example.methodology.research_type}</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-2">Pendekatan</h4>
                        <p className="text-gray-700">{example.methodology.approach}</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-2">Model/Desain</h4>
                        <p className="text-gray-700">{example.methodology.model || example.methodology.design}</p>
                      </div>
                    </div>

                    {/* Specific Content Based on Example Type */}
                    {index === 0 && (
                      <>
                        {/* SDLC Phases */}
                        <div className="mb-8">
                          <h3 className="text-xl font-semibold text-gray-900 mb-4">Tahapan Pengembangan (SDLC)</h3>
                          <div className="space-y-4">
                            {example.methodology.phases.map((phase, phaseIndex) => (
                              <div key={phaseIndex} className="border border-gray-200 rounded-lg p-6">
                                <div className="flex items-center justify-between mb-4">
                                  <h4 className="text-lg font-semibold text-gray-900">{phase.phase}</h4>
                                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                                    {phase.duration}
                                  </span>
                                </div>
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                  <div>
                                    <h5 className="font-medium text-gray-900 mb-2">Aktivitas:</h5>
                                    <ul className="space-y-1">
                                      {phase.activities.map((activity, actIndex) => (
                                        <li key={actIndex} className="text-gray-700 text-sm flex items-start">
                                          <FileText className="h-3 w-3 text-blue-500 mt-1 mr-2 flex-shrink-0" />
                                          {activity}
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                  <div>
                                    <h5 className="font-medium text-gray-900 mb-2">Deliverables:</h5>
                                    <ul className="space-y-1">
                                      {phase.deliverables.map((deliverable, delIndex) => (
                                        <li key={delIndex} className="text-gray-700 text-sm flex items-start">
                                          <Download className="h-3 w-3 text-green-500 mt-1 mr-2 flex-shrink-0" />
                                          {deliverable}
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </>
                    )}

                    {index === 1 && (
                      <>
                        {/* Experimental Variables */}
                        <div className="mb-8">
                          <h3 className="text-xl font-semibold text-gray-900 mb-4">Variabel Penelitian</h3>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="bg-blue-50 p-4 rounded-lg">
                              <h4 className="font-medium text-blue-900 mb-2">Variabel Bebas</h4>
                              <p className="text-blue-800 text-sm">{example.methodology.variables.independent}</p>
                            </div>
                            <div className="bg-green-50 p-4 rounded-lg">
                              <h4 className="font-medium text-green-900 mb-2">Variabel Terikat</h4>
                              <p className="text-green-800 text-sm">{example.methodology.variables.dependent}</p>
                            </div>
                            <div className="bg-orange-50 p-4 rounded-lg">
                              <h4 className="font-medium text-orange-900 mb-2">Variabel Kontrol</h4>
                              <p className="text-orange-800 text-sm">{example.methodology.variables.control}</p>
                            </div>
                          </div>
                        </div>

                        {/* Dataset Info */}
                        <div className="mb-8 bg-gray-50 p-6 rounded-lg">
                          <h3 className="text-xl font-semibold text-gray-900 mb-4">Dataset</h3>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                            <div>
                              <span className="font-medium text-gray-700">Nama:</span>
                              <p className="text-gray-600">{example.methodology.dataset.name}</p>
                            </div>
                            <div>
                              <span className="font-medium text-gray-700">Ukuran:</span>
                              <p className="text-gray-600">{example.methodology.dataset.size}</p>
                            </div>
                            <div>
                              <span className="font-medium text-gray-700">Split:</span>
                              <p className="text-gray-600">{example.methodology.dataset.split}</p>
                            </div>
                            <div>
                              <span className="font-medium text-gray-700">Features:</span>
                              <p className="text-gray-600">{example.methodology.dataset.features}</p>
                            </div>
                          </div>
                        </div>

                        {/* Results */}
                        <div className="mb-8">
                          <h3 className="text-xl font-semibold text-gray-900 mb-4">Hasil Eksperimen</h3>
                          <div className="overflow-x-auto">
                            <table className="w-full border border-gray-200">
                              <thead className="bg-gray-50">
                                <tr>
                                  <th className="px-4 py-2 text-left font-medium text-gray-900">Algoritma</th>
                                  <th className="px-4 py-2 text-left font-medium text-gray-900">Accuracy</th>
                                  <th className="px-4 py-2 text-left font-medium text-gray-900">Precision</th>
                                  <th className="px-4 py-2 text-left font-medium text-gray-900">Recall</th>
                                  <th className="px-4 py-2 text-left font-medium text-gray-900">F1-Score</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr className="border-t">
                                  <td className="px-4 py-2 font-medium">Naive Bayes</td>
                                  <td className="px-4 py-2">{example.methodology.results.naive_bayes.accuracy}</td>
                                  <td className="px-4 py-2">{example.methodology.results.naive_bayes.precision}</td>
                                  <td className="px-4 py-2">{example.methodology.results.naive_bayes.recall}</td>
                                  <td className="px-4 py-2">{example.methodology.results.naive_bayes.f1}</td>
                                </tr>
                                <tr className="border-t">
                                  <td className="px-4 py-2 font-medium">SVM</td>
                                  <td className="px-4 py-2">{example.methodology.results.svm.accuracy}</td>
                                  <td className="px-4 py-2">{example.methodology.results.svm.precision}</td>
                                  <td className="px-4 py-2">{example.methodology.results.svm.recall}</td>
                                  <td className="px-4 py-2">{example.methodology.results.svm.f1}</td>
                                </tr>
                                <tr className="border-t bg-green-50">
                                  <td className="px-4 py-2 font-medium">Random Forest</td>
                                  <td className="px-4 py-2 font-bold text-green-800">{example.methodology.results.random_forest.accuracy}</td>
                                  <td className="px-4 py-2 font-bold text-green-800">{example.methodology.results.random_forest.precision}</td>
                                  <td className="px-4 py-2 font-bold text-green-800">{example.methodology.results.random_forest.recall}</td>
                                  <td className="px-4 py-2 font-bold text-green-800">{example.methodology.results.random_forest.f1}</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <p className="text-sm text-gray-600 mt-2">{example.methodology.statistical_test}</p>
                        </div>
                      </>
                    )}

                    {index === 2 && (
                      <>
                        {/* Sampling */}
                        <div className="mb-8">
                          <h3 className="text-xl font-semibold text-gray-900 mb-4">Sampling Design</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-blue-50 p-6 rounded-lg">
                              <h4 className="font-semibold text-blue-900 mb-3">Populasi Target</h4>
                              <p className="text-blue-800 text-sm">{example.methodology.population}</p>
                            </div>
                            <div className="bg-green-50 p-6 rounded-lg">
                              <h4 className="font-semibold text-green-900 mb-3">Metode Sampling</h4>
                              <p className="text-green-800 text-sm">{example.methodology.sampling.method}</p>
                              <p className="text-green-700 text-xs mt-2">Size: {example.methodology.sampling.size}</p>
                            </div>
                          </div>
                        </div>

                        {/* SUS Results */}
                        <div className="mb-8">
                          <h3 className="text-xl font-semibold text-gray-900 mb-4">Hasil SUS Score</h3>
                          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
                            <div className="text-center mb-6">
                              <div className="text-4xl font-bold text-blue-600">{example.methodology.results.overall_sus_score}</div>
                              <div className="text-lg text-gray-600">Overall SUS Score</div>
                              <div className="text-sm text-green-600 font-medium">Good Usability</div>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                              {Object.entries(example.methodology.results.by_age_group).map(([age, score]) => (
                                <div key={age} className="text-center bg-white p-3 rounded">
                                  <div className="text-lg font-semibold text-gray-900">{score}</div>
                                  <div className="text-xs text-gray-600">{age} tahun</div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Key Findings */}
                        <div className="mb-8">
                          <h3 className="text-xl font-semibold text-gray-900 mb-4">Temuan Utama</h3>
                          <ul className="space-y-3">
                            {example.methodology.results.key_findings.map((finding, findIndex) => (
                              <li key={findIndex} className="flex items-start bg-gray-50 p-4 rounded-lg">
                                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-gray-700">{finding}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </>
                    )}

                    {/* Common sections for all examples */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      {/* Data Collection */}
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Pengumpulan Data</h3>
                        <ul className="space-y-2">
                          {example.methodology.data_collection.map((method, methodIndex) => (
                            <li key={methodIndex} className="flex items-start">
                              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <span className="text-gray-700 text-sm">{method}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Analysis Method */}
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Metode Analisis</h3>
                        <ul className="space-y-2">
                          {example.methodology.analysis_method.map((method, methodIndex) => (
                            <li key={methodIndex} className="flex items-start">
                              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <span className="text-gray-700 text-sm">{method}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Evaluation (for R&D example) */}
                    {index === 0 && example.methodology.evaluation && (
                      <div className="mt-8 bg-green-50 p-6 rounded-lg">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Hasil Evaluasi</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {example.methodology.evaluation.map((result, resultIndex) => (
                            <div key={resultIndex} className="bg-white p-4 rounded-lg">
                              <span className="text-gray-700 text-sm">{result}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl text-white p-8 text-center"
        >
          <h2 className="text-2xl font-bold mb-4">Butuh Template Khusus?</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Contoh-contoh di atas dapat disesuaikan dengan topik penelitian spesifik Anda. 
            Gunakan sebagai panduan dan modifikasi sesuai kebutuhan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Download All Templates
            </button>
            <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Request Custom Template
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MethodologyExamples;
