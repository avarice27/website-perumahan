import { FiAward, FiUsers, FiTrendingUp, FiShield } from 'react-icons/fi';

export const metadata = {
  title: 'Tentang Kami - Website Perumahan',
  description: 'Pelajari lebih lanjut tentang Website Perumahan, platform terpercaya untuk menemukan properti impian Anda di Indonesia.',
};

export default function TentangPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-primary-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Tentang Kami</h1>
          <p className="text-xl text-primary-100 max-w-3xl">
            Platform properti terpercaya yang membantu Anda menemukan rumah, apartemen, tanah, dan properti komersial impian di seluruh Indonesia.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Our Story */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Cerita Kami</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              Website Perumahan didirikan dengan visi untuk mempermudah masyarakat Indonesia dalam menemukan properti impian mereka. Kami percaya bahwa setiap orang berhak memiliki tempat tinggal yang nyaman dan sesuai dengan kebutuhan mereka.
            </p>
            <p className="mb-4">
              Dengan pengalaman bertahun-tahun di industri properti, kami menyediakan platform yang menghubungkan pembeli, penjual, dan agen properti profesional. Semua properti yang kami tampilkan telah melalui proses verifikasi untuk memastikan kualitas dan keasliannya.
            </p>
            <p>
              Komitmen kami adalah memberikan layanan terbaik dengan transparansi penuh, membantu Anda membuat keputusan yang tepat dalam berinvestasi properti.
            </p>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-4xl font-bold text-primary-600 mb-2">1000+</div>
            <div className="text-gray-600">Properti Terdaftar</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-4xl font-bold text-primary-600 mb-2">500+</div>
            <div className="text-gray-600">Transaksi Berhasil</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-4xl font-bold text-primary-600 mb-2">100+</div>
            <div className="text-gray-600">Agen Terpercaya</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-4xl font-bold text-primary-600 mb-2">50+</div>
            <div className="text-gray-600">Kota di Indonesia</div>
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Nilai-Nilai Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                <FiShield className="w-8 h-8 text-primary-600" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Kepercayaan</h3>
              <p className="text-gray-600">
                Semua properti terverifikasi dan proses transaksi yang transparan
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                <FiAward className="w-8 h-8 text-primary-600" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Kualitas</h3>
              <p className="text-gray-600">
                Standar tinggi dalam setiap properti yang kami tawarkan
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                <FiUsers className="w-8 h-8 text-primary-600" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Pelayanan</h3>
              <p className="text-gray-600">
                Dukungan profesional dari tim yang berpengalaman
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                <FiTrendingUp className="w-8 h-8 text-primary-600" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Inovasi</h3>
              <p className="text-gray-600">
                Platform modern dengan fitur pencarian yang canggih
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-primary-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Siap Menemukan Properti Impian Anda?</h2>
          <p className="text-xl text-primary-100 mb-6">
            Jelajahi ribuan properti berkualitas di seluruh Indonesia
          </p>
          <a
            href="/properti"
            className="inline-block bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
          >
            Lihat Properti
          </a>
        </div>
      </div>
    </div>
  );
}
