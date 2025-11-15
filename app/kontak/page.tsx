import { FiMail, FiPhone, FiMapPin, FiClock } from 'react-icons/fi';

export const metadata = {
  title: 'Hubungi Kami - Website Perumahan',
  description: 'Hubungi tim Website Perumahan untuk konsultasi gratis tentang properti impian Anda.',
};

export default function KontakPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-primary-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Hubungi Kami</h1>
          <p className="text-xl text-primary-100 max-w-3xl">
            Punya pertanyaan? Tim kami siap membantu Anda menemukan properti impian.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Informasi Kontak</h2>
            <p className="text-gray-700 mb-8">
              Kami siap melayani Anda dan menjawab semua pertanyaan Anda tentang properti. Jangan ragu untuk menghubungi kami melalui salah satu channel di bawah ini.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary-100 rounded-lg">
                    <FiMapPin className="w-6 h-6 text-primary-600" aria-hidden="true" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Alamat Kantor</h3>
                  <p className="text-gray-600">
                    Jl. Sudirman No. 123<br />
                    Jakarta Pusat, DKI Jakarta 10110<br />
                    Indonesia
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary-100 rounded-lg">
                    <FiPhone className="w-6 h-6 text-primary-600" aria-hidden="true" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Telepon</h3>
                  <p className="text-gray-600">
                    <a href="tel:+622112345678" className="hover:text-primary-600">
                      +62 21 1234 5678
                    </a>
                  </p>
                  <p className="text-gray-600">
                    <a href="tel:+6281234567890" className="hover:text-primary-600">
                      +62 812 3456 7890 (WhatsApp)
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary-100 rounded-lg">
                    <FiMail className="w-6 h-6 text-primary-600" aria-hidden="true" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Email</h3>
                  <p className="text-gray-600">
                    <a href="mailto:info@websiteperumahan.com" className="hover:text-primary-600">
                      info@websiteperumahan.com
                    </a>
                  </p>
                  <p className="text-gray-600">
                    <a href="mailto:support@websiteperumahan.com" className="hover:text-primary-600">
                      support@websiteperumahan.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary-100 rounded-lg">
                    <FiClock className="w-6 h-6 text-primary-600" aria-hidden="true" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Jam Operasional</h3>
                  <p className="text-gray-600">
                    Senin - Jumat: 09:00 - 18:00 WIB<br />
                    Sabtu: 09:00 - 15:00 WIB<br />
                    Minggu: Tutup
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Kirim Pesan</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Nama Lengkap *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Masukkan nama lengkap Anda"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="email@contoh.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Nomor Telepon *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="+62 812 3456 7890"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subjek *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Subjek pesan Anda"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Pesan *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                  placeholder="Tulis pesan Anda di sini..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
              >
                Kirim Pesan
              </button>

              <p className="text-sm text-gray-600 text-center">
                Dengan mengirim pesan, Anda menyetujui{' '}
                <a href="#" className="text-primary-600 hover:text-primary-700">
                  kebijakan privasi
                </a>{' '}
                kami.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
