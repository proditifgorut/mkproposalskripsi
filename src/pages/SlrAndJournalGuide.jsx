import React from 'react';
import { motion } from 'framer-motion';
import { 
  ClipboardList, Search, Filter, FileText, BookOpen, Edit3, Send, Users, BookUp, ChevronRight 
} from 'lucide-react';

const SlrAndJournalGuide = () => {

  const slrSteps = [
    {
      icon: ClipboardList,
      title: 'Fase 1: Perencanaan Tinjauan (Planning)',
      description: 'Merumuskan dasar dan protokol yang kuat untuk memastikan SLR Anda sistematis dan dapat direplikasi.',
      activities: [
        'Merumuskan Pertanyaan Penelitian menggunakan framework (misal: PICO - Population, Intervention, Comparison, Outcome).',
        'Mengembangkan Protokol Tinjauan (Review Protocol) yang mendetail.',
        'Menentukan Kriteria Inklusi dan Eksklusi untuk seleksi studi.',
        'Mendaftarkan protokol di platform seperti PROSPERO (opsional, tapi disarankan).'
      ],
      output: 'Dokumen Protokol Tinjauan yang komprehensif.'
    },
    {
      icon: Search,
      title: 'Fase 2: Pelaksanaan Tinjauan (Conducting)',
      description: 'Menjalankan pencarian dan seleksi studi secara sistematis berdasarkan protokol yang telah dibuat.',
      activities: [
        'Melakukan pencarian di database akademik (e.g., Scopus, IEEE Xplore, ACM Digital Library).',
        'Menyaring studi berdasarkan judul dan abstrak.',
        'Menyaring studi berdasarkan teks lengkap (full-text).',
        'Melakukan penilaian kualitas (Quality Assessment) pada studi yang terpilih.'
      ],
      output: 'Daftar final studi primer yang relevan dan berkualitas.'
    },
    {
      icon: FileText,
      title: 'Fase 3: Pelaporan Tinjauan (Reporting)',
      description: 'Mengekstraksi, mensintesis, dan melaporkan temuan dari studi yang telah dipilih.',
      activities: [
        'Melakukan Ekstraksi Data dari setiap studi primer.',
        'Melakukan Sintesis Data (misal: Sintesis Tematik atau Naratif).',
        'Menulis laporan SLR lengkap mengikuti struktur (Pendahuluan, Metode, Hasil, Diskusi).',
        'Membuat diagram alir PRISMA untuk visualisasi proses seleksi.'
      ],
      output: 'Naskah skripsi/jurnal dengan metode SLR yang siap dipublikasikan.'
    }
  ];

  const journalSteps = [
    {
      icon: Edit3,
      title: 'Langkah 1: Persiapan Naskah',
      description: 'Mengadaptasi hasil penelitian (skripsi) menjadi format artikel jurnal yang ringkas dan padat.',
      activities: [
        'Memilih Jurnal Target: Sesuaikan scope, reputasi (misal: SINTA, Scopus), dan frekuensi terbit.',
        'Mempelajari "Author Guidelines" dan template jurnal.',
        'Menyusun ulang naskah mengikuti struktur IMRaD (Introduction, Method, Results, and Discussion).',
        'Membuat judul, abstrak, dan kata kunci yang efektif dan SEO-friendly.'
      ],
      output: 'Draft naskah yang telah diformat sesuai gaya selingkung jurnal.'
    },
    {
      icon: Send,
      title: 'Langkah 2: Proses Pengiriman (Submission)',
      description: 'Mengirimkan naskah Anda ke sistem editorial jurnal untuk ditinjau.',
      activities: [
        'Menulis Surat Pengantar (Cover Letter) yang menarik untuk editor.',
        'Mempersiapkan semua file yang dibutuhkan (naskah utama, gambar, tabel, lampiran).',
        'Melakukan submit melalui sistem manajemen editorial online (misal: OJS, ScholarOne).',
        'Memastikan semua metadata penulis dan afiliasi terisi dengan benar.'
      ],
      output: 'Email konfirmasi bahwa naskah telah berhasil diterima oleh sistem.'
    },
    {
      icon: Users,
      title: 'Langkah 3: Proses Tinjauan Sejawat (Peer Review)',
      description: 'Naskah Anda akan dievaluasi oleh para ahli di bidangnya. Ini adalah tahap paling krusial dan butuh kesabaran.',
      activities: [
        'Menunggu keputusan dari editor (bisa beberapa minggu hingga bulan).',
        'Menganalisis keputusan dan komentar dari reviewer (Accept, Minor Revision, Major Revision, Reject).',
        'Jika revisi, tanggapi setiap komentar reviewer secara sistematis dalam dokumen "Response to Reviewers".',
        'Melakukan perbaikan pada naskah sesuai saran dan mengirimkan kembali versi revisi.'
      ],
      output: 'Naskah yang telah direvisi beserta surat balasan untuk reviewer.'
    },
    {
      icon: BookUp,
      title: 'Langkah 4: Penerimaan & Publikasi',
      description: 'Tahap akhir setelah naskah Anda diterima untuk dipublikasikan.',
      activities: [
        'Menerima surat penerimaan (Letter of Acceptance - LoA).',
        'Mengisi dan menandatangani formulir transfer hak cipta (Copyright Transfer Agreement).',
        'Melakukan koreksi pada naskah versi pracetak (proofreading/galleys).',
        'Menunggu naskah terbit secara online di volume/isu yang ditentukan.'
      ],
      output: 'Artikel ilmiah yang berhasil terpublikasi dan dapat disitasi.'
    }
  ];

  const renderTimeline = (steps, color) => (
    <div className="relative max-w-4xl mx-auto">
      {steps.map((step, index) => (
        <div key={index} className="flex mb-8">
          <div className="flex flex-col items-center mr-6">
            <div className={`flex-shrink-0 w-16 h-16 rounded-full ${color} text-white flex items-center justify-center`}>
              <step.icon className="w-8 h-8" />
            </div>
            {index < steps.length - 1 && (
              <div className="w-px h-full bg-gray-300"></div>
            )}
          </div>
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
            <div className={`p-3 rounded-lg ${color === 'bg-blue-500' ? 'bg-blue-50' : 'bg-green-50'}`}>
              <p className="text-sm">
                <strong className={color === 'bg-blue-500' ? 'text-blue-800' : 'text-green-800'}>Output:</strong>
                <span className={`ml-2 ${color === 'bg-blue-500' ? 'text-blue-700' : 'text-green-700'}`}>{step.output}</span>
              </p>
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Panduan SLR & Publikasi Jurnal
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Panduan terstruktur untuk melakukan Systematic Literature Review (SLR) dan mempublikasikan hasil penelitian Anda ke jurnal ilmiah.
          </p>
        </motion.div>

        {/* SLR Section */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Penyusunan Skripsi dengan Metode SLR</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Metode penelitian yang kuat untuk mensintesis bukti dari literatur yang ada secara sistematis.
            </p>
          </motion.div>
          {renderTimeline(slrSteps, 'bg-blue-500')}
        </div>

        {/* Journal Publication Section */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Langkah-Langkah Publikasi Jurnal Ilmiah</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ubah skripsi Anda menjadi karya ilmiah yang berdampak dan diakui secara global.
            </p>
          </motion.div>
          {renderTimeline(journalSteps, 'bg-green-500')}
        </div>
      </div>
    </div>
  );
};

export default SlrAndJournalGuide;
