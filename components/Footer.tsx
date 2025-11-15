import Link from 'next/link';
import { FiHome, FiMail, FiPhone, FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <FiHome className="w-8 h-8 text-primary-400" aria-hidden="true" />
              <span className="text-xl font-bold text-white">Website Perumahan</span>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Platform terpercaya untuk menemukan properti impian Anda di seluruh Indonesia.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors"
                aria-label="Facebook"
              >
                <FiFacebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors"
                aria-label="Instagram"
              >
                <FiInstagram className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors"
                aria-label="Twitter"
              >
                <FiTwitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Link Cepat</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm hover:text-primary-400 transition-colors">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/properti" className="text-sm hover:text-primary-400 transition-colors">
                  Daftar Properti
                </Link>
              </li>
              <li>
                <Link href="/tentang" className="text-sm hover:text-primary-400 transition-colors">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="/kontak" className="text-sm hover:text-primary-400 transition-colors">
                  Hubungi Kami
                </Link>
              </li>
            </ul>
          </div>

          {/* Property Types */}
          <div>
            <h3 className="text-white font-semibold mb-4">Jenis Properti</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/properti?type=house"
                  className="text-sm hover:text-primary-400 transition-colors"
                >
                  Rumah
                </Link>
              </li>
              <li>
                <Link
                  href="/properti?type=apartment"
                  className="text-sm hover:text-primary-400 transition-colors"
                >
                  Apartemen
                </Link>
              </li>
              <li>
                <Link
                  href="/properti?type=land"
                  className="text-sm hover:text-primary-400 transition-colors"
                >
                  Tanah
                </Link>
              </li>
              <li>
                <Link
                  href="/properti?type=commercial"
                  className="text-sm hover:text-primary-400 transition-colors"
                >
                  Komersial
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Kontak</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <FiMail className="w-5 h-5 text-primary-400 flex-shrink-0" aria-hidden="true" />
                <a
                  href="mailto:info@websiteperumahan.com"
                  className="text-sm hover:text-primary-400 transition-colors"
                >
                  info@websiteperumahan.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <FiPhone className="w-5 h-5 text-primary-400 flex-shrink-0" aria-hidden="true" />
                <a
                  href="tel:+622112345678"
                  className="text-sm hover:text-primary-400 transition-colors"
                >
                  +62 21 1234 5678
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>&copy; {currentYear} Website Perumahan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
