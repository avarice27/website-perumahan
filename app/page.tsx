import Link from 'next/link';
import PropertyCard from '@/components/PropertyCard';
import { properties } from '@/data/properties';
import { FiSearch, FiHome, FiTrendingUp, FiShield } from 'react-icons/fi';

export default function Home() {
  // Get featured properties (first 6 available properties)
  const featuredProperties = properties
    .filter(p => p.status === 'available')
    .slice(0, 6);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Temukan Properti Impian Anda
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-100">
              Platform terpercaya untuk mencari rumah, apartemen, tanah, dan properti komersial di seluruh Indonesia
            </p>
            <Link
              href="/properti"
              className="inline-flex items-center bg-white text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-50 transition-colors shadow-lg"
            >
              <FiSearch className="mr-2" aria-hidden="true" />
              Jelajahi Properti
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                <FiHome className="w-8 h-8 text-primary-600" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Beragam Pilihan</h3>
              <p className="text-gray-600">
                Ribuan properti dari berbagai jenis dan lokasi di seluruh Indonesia
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                <FiTrendingUp className="w-8 h-8 text-primary-600" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Harga Kompetitif</h3>
              <p className="text-gray-600">
                Dapatkan penawaran terbaik dengan harga yang sesuai budget Anda
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                <FiShield className="w-8 h-8 text-primary-600" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Terpercaya & Aman</h3>
              <p className="text-gray-600">
                Semua properti telah terverifikasi dengan proses transaksi yang aman
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Properti Unggulan</h2>
            <Link
              href="/properti"
              className="text-primary-600 hover:text-primary-700 font-semibold flex items-center"
            >
              Lihat Semua
              <svg
                className="w-5 h-5 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Siap Menemukan Properti Impian Anda?
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            Hubungi kami untuk konsultasi gratis dan temukan properti yang tepat untuk Anda
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/properti"
              className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
            >
              Lihat Properti
            </Link>
            <Link
              href="/kontak"
              className="bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-800 transition-colors border-2 border-white"
            >
              Hubungi Kami
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
