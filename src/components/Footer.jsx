import React from 'react';
import { BookOpen, Mail, Github, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-blue-600 p-2 rounded-lg">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold">MetodologiPenelitianTI</h3>
                <p className="text-gray-400 text-sm">Panduan Lengkap</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Platform edukasi terlengkap untuk mahasiswa Informatika dan Ilmu Komputer 
              dalam memahami dan menyusun metodologi penelitian yang solid dan berkualitas.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Menu Utama</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="text-gray-300 hover:text-white transition-colors">Beranda</a></li>
              <li><a href="/jenis-penelitian" className="text-gray-300 hover:text-white transition-colors">Jenis Penelitian</a></li>
              <li><a href="/pendekatan-penelitian" className="text-gray-300 hover:text-white transition-colors">Pendekatan Penelitian</a></li>
              <li><a href="/tahapan-penyusunan" className="text-gray-300 hover:text-white transition-colors">Tahapan Penyusunan</a></li>
              <li><a href="/contoh-metodologi" className="text-gray-300 hover:text-white transition-colors">Contoh Metodologi</a></li>
              <li><a href="/panduan-slr-jurnal" className="text-gray-300 hover:text-white transition-colors">Panduan SLR & Jurnal</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontak</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-gray-400" />
                <span className="text-sm text-gray-300">info@metodologipenelitianTI.com</span>
              </div>
              <div className="flex space-x-3">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Github className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 MetodologiPenelitianTI.com. Dikembangkan untuk membantu mahasiswa Indonesia.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
