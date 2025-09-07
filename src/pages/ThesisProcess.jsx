import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Lightbulb, Search, Target, ClipboardList, FileText, Users, CheckSquare, Rocket, 
  BarChart, Book, FileCheck, GraduationCap, Download, ChevronRight 
} from 'lucide-react';

const ThesisProcess = () => {
  const [activeTab, setActiveTab] = useState('proposal');

  const proposalSteps = [
    {
      icon: Lightbulb,
      title: 'Penentuan Topik & Masalah Penelitian',
      description: 'Tahap awal untuk menemukan ide, mengidentifikasi masalah yang relevan dan menarik di bidang informatika.',
      activities: [
        'Brainstorming ide berdasarkan minat, mata kuliah, dan tren teknologi.',
        'Membaca artikel ilmiah, berita teknologi, dan skripsi terdahulu.',
        'Mengidentifikasi kesenjangan (research gap) atau masalah yang belum terpecahkan.',
        'Memastikan ketersediaan data dan sumber daya yang dibutuhkan.'
      ],
      output: 'Daftar calon topik dan rumusan masalah awal.'
    },
    {
      icon: Search,
      title: 'Studi Literatur Awal',
      description: 'Melakukan tinjauan pustaka singkat untuk memastikan topik yang dipilih orisinal dan layak diteliti.',
      activities: [
        'Mencari 2-5 jurnal atau paper utama yang terkait dengan topik.',
        'Memahami state-of-the-art atau penelitian terkini di area tersebut.',
        'Memastikan belum ada penelitian yang identik dengan ide Anda.',
        'Mengumpulkan referensi awal untuk latar belakang.'
      ],
      output: 'Ringkasan studi literatur dan justifikasi kebaruan (novelty) penelitian.'
    },
    {
      icon: Target,
      title: 'Perumusan Judul, Tujuan, & Manfaat',
      description: 'Menyusun judul yang spesifik serta mendefinisikan tujuan dan manfaat penelitian secara jelas.',
      activities: [
        'Membuat judul yang ringkas, informatif, dan mencerminkan isi penelitian.',
        'Menentukan tujuan penelitian (apa yang ingin dicapai).',
        'Merumuskan manfaat penelitian (kontribusi teoretis dan praktis).',
        'Menetapkan batasan masalah agar ruang lingkup penelitian jelas.'
      ],
      output: 'Judul final, daftar tujuan, manfaat, dan batasan masalah.'
    },
    {
      icon: ClipboardList,
      title: 'Penentuan Metodologi Penelitian',
      description: 'Memilih dan merancang metode yang akan digunakan untuk menjawab pertanyaan penelitian.',
      activities: [
        'Memilih jenis penelitian (R&D, Eksperimen, dll.).',
        'Menentukan pendekatan (Eksperimental, Perancangan, dll.).',
        'Merancang metode pengumpulan data (wawancara, survei, studi literatur).',
        'Merancang metode analisis data (statistik, analisis tematik, dll.).'
      ],
      output: 'Rancangan metodologi penelitian yang akan ditulis di Bab 3.'
    },
    {
      icon: FileText,
      title: 'Penulisan Proposal (Bab 1-3)',
      description: 'Menyusun dokumen proposal penelitian yang terdiri dari Pendahuluan, Tinjauan Pustaka, dan Metodologi Penelitian.',
      activities: [
        'Menulis Bab 1: Latar Belakang, Rumusan Masalah, Tujuan, Manfaat.',
        'Menulis Bab 2: Landasan Teori, Penelitian Terkait, Kerangka Pikir.',
        'Menulis Bab 3: Metodologi Penelitian yang telah dirancang.',
        'Menyusun daftar pustaka awal.'
      ],
      output: 'Draft pertama dokumen proposal penelitian.'
    },
    {
      icon: Users,
      title: 'Konsultasi & Revisi',
      description: 'Mendiskusikan draf proposal dengan dosen pembimbing untuk mendapatkan masukan dan melakukan perbaikan.',
      activities: [
        'Menjadwalkan bimbingan rutin dengan dosen pembimbing.',
        'Mempresentasikan kemajuan dan mendiskusikan kendala.',
        'Mencatat semua masukan dan saran perbaikan.',
        'Melakukan revisi proposal berdasarkan feedback.'
      ],
      output: 'Draft proposal yang telah direvisi dan disetujui pembimbing.'
    },
    {
      icon: CheckSquare,
      title: 'Seminar Proposal',
      description: 'Mempresentasikan dan mempertahankan proposal penelitian di hadapan dosen penguji dan pembimbing.',
      activities: [
        'Mempersiapkan materi presentasi yang ringkas dan efektif.',
        'Berlatih presentasi untuk manajemen waktu dan kejelasan penyampaian.',
        'Mempersiapkan jawaban untuk pertanyaan-pertanyaan yang mungkin muncul.',
        'Melakukan revisi akhir berdasarkan masukan dari seminar.'
      ],
      output: 'Proposal penelitian yang telah disetujui dan siap dilaksanakan.'
    }
  ];

  const thesisSteps = [
    {
      icon: Rocket,
      title: 'Pelaksanaan Penelitian',
      description: 'Mulai menjalankan penelitian sesuai dengan metodologi yang telah disetujui dalam proposal.',
      activities: [
        'Pengumpulan data (menyebar kuesioner, wawancara, logging data).',
        'Pengembangan perangkat lunak (jika R&D).',
        'Melakukan eksperimen sesuai rancangan.',
        'Mendokumentasikan setiap proses dan hasil awal.'
      ],
      output: 'Data mentah, catatan lapangan, atau prototipe sistem.'
    },
    {
      icon: BarChart,
      title: 'Analisis Data & Interpretasi Hasil',
      description: 'Mengolah data yang telah dikumpulkan dan menafsirkan hasilnya untuk menemukan pola atau jawaban.',
      activities: [
        'Membersihkan dan mempersiapkan data (data cleaning).',
        'Menerapkan metode analisis data yang telah dipilih (statistik, koding, dll.).',
        'Membuat visualisasi data (grafik, tabel, diagram).',
        'Menginterpretasikan hasil analisis dalam konteks pertanyaan penelitian.'
      ],
      output: 'Hasil analisis data, temuan kunci, dan visualisasi data.'
    },
    {
      icon: Book,
      title: 'Penulisan Bab 4 & 5',
      description: 'Menulis bab Hasil dan Pembahasan, serta bab Kesimpulan dan Saran berdasarkan temuan penelitian.',
      activities: [
        'Menulis Bab 4: Menyajikan hasil analisis data secara objektif dan membahas temuan tersebut, membandingkannya dengan penelitian sebelumnya.',
        'Menulis Bab 5: Merangkum seluruh penelitian, menjawab tujuan penelitian, dan memberikan saran untuk penelitian selanjutnya atau implementasi praktis.'
      ],
      output: 'Draft Bab 4 (Hasil dan Pembahasan) dan Bab 5 (Kesimpulan dan Saran).'
    },
    {
      icon: FileCheck,
      title: 'Penyusunan Draft Lengkap & Revisi',
      description: 'Menggabungkan semua bab menjadi satu dokumen skripsi yang utuh dan melakukan bimbingan intensif.',
      activities: [
        'Menggabungkan Bab 1-5, daftar pustaka, dan lampiran.',
        'Melakukan self-editing untuk tata bahasa dan format penulisan.',
        'Bimbingan intensif dengan dosen untuk revisi menyeluruh.',
        'Memastikan konsistensi di seluruh bab.'
      ],
      output: 'Draft skripsi lengkap yang siap untuk tahap finalisasi.'
    },
    {
      icon: GraduationCap,
      title: 'Sidang Skripsi (Pendadaran)',
      description: 'Tahap akhir di mana Anda mempresentasikan dan mempertahankan hasil penelitian skripsi di hadapan dewan penguji.',
      activities: [
        'Mendaftar untuk sidang skripsi sesuai prosedur universitas.',
        'Menyiapkan materi presentasi yang menyoroti kontribusi utama penelitian.',
        'Berlatih untuk presentasi dan sesi tanya jawab.',
        'Menyiapkan mental dan fisik untuk menghadapi sidang.'
      ],
      output: 'Lulus dan berhak menyandang gelar sarjana (setelah revisi pasca-sidang).'
    }
  ];

  const currentSteps = activeTab === 'proposal' ? proposalSteps : thesisSteps;

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
            Tahapan Penyusunan Proposal & Skripsi
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Panduan langkah demi langkah untuk menavigasi perjalanan Anda dari ide awal hingga sidang akhir.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-lg p-2 shadow-lg flex space-x-2">
            <button
              onClick={() => setActiveTab('proposal')}
              className={`px-6 py-3 rounded-md font-semibold transition-colors flex items-center space-x-2 ${
                activeTab === 'proposal'
                  ? 'bg-blue-500 text-white shadow-md'
                  : 'text-gray-600 hover:text-blue-500'
              }`}
            >
              <FileText className="h-5 w-5" />
              <span>Proposal</span>
            </button>
            <button
              onClick={() => setActiveTab('thesis')}
              className={`px-6 py-3 rounded-md font-semibold transition-colors flex items-center space-x-2 ${
                activeTab === 'thesis'
                  ? 'bg-green-500 text-white shadow-md'
                  : 'text-gray-600 hover:text-green-500'
              }`}
            >
              <GraduationCap className="h-5 w-5" />
              <span>Skripsi</span>
            </button>
          </div>
        </div>

        {/* Stepper/Timeline */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative max-w-4xl mx-auto"
        >
          {currentSteps.map((step, index) => (
            <div key={index} className="flex mb-8">
              {/* Icon and Line */}
              <div className="flex flex-col items-center mr-6">
                <div className={`flex-shrink-0 w-16 h-16 rounded-full ${activeTab === 'proposal' ? 'bg-blue-500' : 'bg-green-500'} text-white flex items-center justify-center`}>
                  <step.icon className="w-8 h-8" />
                </div>
                {index < currentSteps.length - 1 && (
                  <div className="w-px h-full bg-gray-300"></div>
                )}
              </div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 w-full"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 mb-4">{step.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Aktivitas Utama:</h4>
                  <ul className="space-y-2">
                    {step.activities.map((activity, actIndex) => (
                      <li key={actIndex} className="flex items-start text-sm text-gray-700">
                        <ChevronRight className="h-4 w-4 text-gray-400 mt-0.5 mr-2 flex-shrink-0" />
                        {activity}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className={`p-3 rounded-lg ${activeTab === 'proposal' ? 'bg-blue-50' : 'bg-green-50'}`}>
                  <p className="text-sm">
                    <strong className={`${activeTab === 'proposal' ? 'text-blue-800' : 'text-green-800'}`}>Output:</strong>
                    <span className={`ml-2 ${activeTab === 'proposal' ? 'text-blue-700' : 'text-green-700'}`}>{step.output}</span>
                  </p>
                </div>
              </motion.div>
            </div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 bg-gradient-to-r from-indigo-600 to-purple-700 rounded-xl text-white p-8 text-center"
        >
          <h2 className="text-2xl font-bold mb-4">Siap untuk Memulai Perjalanan Anda?</h2>
          <p className="text-indigo-100 mb-6 max-w-2xl mx-auto">
            Unduh checklist lengkap kami untuk membantu Anda tetap terorganisir dan tidak melewatkan satu langkah pun.
          </p>
          <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors flex items-center justify-center mx-auto space-x-2">
            <Download className="h-5 w-5" />
            <span>Unduh Checklist (PDF)</span>
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default ThesisProcess;
