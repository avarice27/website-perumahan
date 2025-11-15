import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { properties } from '@/data/properties';
import { Property } from '@/types/property';
import {
  FiSquare,
  FiDroplet,
  FiMaximize2,
  FiMapPin,
  FiCalendar,
  FiUser,
  FiPhone,
  FiMail,
  FiHome,
  FiLayers,
} from 'react-icons/fi';

interface PropertyDetailPageProps {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  return properties.map((property) => ({
    id: property.id,
  }));
}

export default function PropertyDetailPage({ params }: PropertyDetailPageProps) {
  const property = properties.find((p) => p.id === params.id);

  if (!property) {
    notFound();
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('id-ID', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(date);
  };

  const getPropertyTypeLabel = (type: Property['propertyType']) => {
    const labels = {
      house: 'Rumah',
      apartment: 'Apartemen',
      land: 'Tanah',
      commercial: 'Komersial',
    };
    return labels[type];
  };

  const getStatusColor = (status: Property['status']) => {
    const colors = {
      available: 'bg-green-100 text-green-800',
      sold: 'bg-red-100 text-red-800',
      reserved: 'bg-yellow-100 text-yellow-800',
    };
    return colors[status];
  };

  const getStatusLabel = (status: Property['status']) => {
    const labels = {
      available: 'Tersedia',
      sold: 'Terjual',
      reserved: 'Dipesan',
    };
    return labels[status];
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex text-sm text-gray-600" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-primary-600">
              Beranda
            </Link>
            <span className="mx-2">/</span>
            <Link href="/properti" className="hover:text-primary-600">
              Properti
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">{property.title}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Image Gallery */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-96 bg-gray-200">
                <Image
                  src={property.images[0]}
                  alt={property.title}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 50vw"
                />
              </div>
              {property.images.length > 1 && (
                <div className="grid grid-cols-3 gap-2 p-4">
                  {property.images.slice(1).map((image, index) => (
                    <div key={index} className="relative h-24 bg-gray-200 rounded overflow-hidden">
                      <Image
                        src={image}
                        alt={`${property.title} - Gambar ${index + 2}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 33vw, 20vw"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Property Details */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-3 py-1 rounded-full text-sm font-semibold bg-primary-600 text-white">
                      {getPropertyTypeLabel(property.propertyType)}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(property.status)}`}>
                      {getStatusLabel(property.status)}
                    </span>
                  </div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">{property.title}</h1>
                  <div className="flex items-center text-gray-600 mb-3">
                    <FiMapPin className="w-5 h-5 mr-2" aria-hidden="true" />
                    <span>
                      {property.location.address}, {property.location.city}, {property.location.province}
                    </span>
                  </div>
                </div>
              </div>

              <div className="text-4xl font-bold text-primary-600 mb-6">
                {formatPrice(property.price)}
              </div>

              {/* Specifications Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6 border-t border-b border-gray-200">
                {property.specifications.bedrooms > 0 && (
                  <div className="text-center">
                    <FiSquare className="w-8 h-8 mx-auto text-primary-600 mb-2" aria-hidden="true" />
                    <div className="text-2xl font-bold text-gray-900">{property.specifications.bedrooms}</div>
                    <div className="text-sm text-gray-600">Kamar Tidur</div>
                  </div>
                )}
                {property.specifications.bathrooms > 0 && (
                  <div className="text-center">
                    <FiDroplet className="w-8 h-8 mx-auto text-primary-600 mb-2" aria-hidden="true" />
                    <div className="text-2xl font-bold text-gray-900">{property.specifications.bathrooms}</div>
                    <div className="text-sm text-gray-600">Kamar Mandi</div>
                  </div>
                )}
                {property.specifications.landArea > 0 && (
                  <div className="text-center">
                    <FiMaximize2 className="w-8 h-8 mx-auto text-primary-600 mb-2" aria-hidden="true" />
                    <div className="text-2xl font-bold text-gray-900">{property.specifications.landArea}</div>
                    <div className="text-sm text-gray-600">Luas Tanah (m²)</div>
                  </div>
                )}
                {property.specifications.buildingArea > 0 && (
                  <div className="text-center">
                    <FiHome className="w-8 h-8 mx-auto text-primary-600 mb-2" aria-hidden="true" />
                    <div className="text-2xl font-bold text-gray-900">{property.specifications.buildingArea}</div>
                    <div className="text-sm text-gray-600">Luas Bangunan (m²)</div>
                  </div>
                )}
                {property.specifications.floors > 0 && (
                  <div className="text-center">
                    <FiLayers className="w-8 h-8 mx-auto text-primary-600 mb-2" aria-hidden="true" />
                    <div className="text-2xl font-bold text-gray-900">{property.specifications.floors}</div>
                    <div className="text-sm text-gray-600">Lantai</div>
                  </div>
                )}
              </div>

              {/* Description */}
              <div className="mt-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Deskripsi</h2>
                <p className="text-gray-700 leading-relaxed">{property.description}</p>
              </div>

              {/* Amenities */}
              {property.amenities.length > 0 && (
                <div className="mt-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-3">Fasilitas</h2>
                  <div className="flex flex-wrap gap-2">
                    {property.amenities.map((amenity, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm"
                      >
                        {amenity}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Listed Date */}
              <div className="mt-6 flex items-center text-gray-600">
                <FiCalendar className="w-5 h-5 mr-2" aria-hidden="true" />
                <span className="text-sm">Dipublikasikan pada {formatDate(property.listedDate)}</span>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-20 space-y-6">
              {/* Agent Contact Card */}
              {property.agent && (
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Hubungi Agen</h3>
                  <div className="flex items-center mb-4">
                    {property.agent.photo && (
                      <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                        <Image
                          src={property.agent.photo}
                          alt={property.agent.name}
                          fill
                          className="object-cover"
                          sizes="64px"
                        />
                      </div>
                    )}
                    <div>
                      <div className="flex items-center mb-1">
                        <FiUser className="w-4 h-4 mr-2 text-gray-600" aria-hidden="true" />
                        <span className="font-semibold text-gray-900">{property.agent.name}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <FiPhone className="w-4 h-4 mr-2" aria-hidden="true" />
                        <a href={`tel:${property.agent.contact}`} className="hover:text-primary-600">
                          {property.agent.contact}
                        </a>
                      </div>
                    </div>
                  </div>
                  <a
                    href={`https://wa.me/${property.agent.contact.replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-green-600 text-white text-center px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold mb-3"
                  >
                    WhatsApp
                  </a>
                  <a
                    href={`tel:${property.agent.contact}`}
                    className="block w-full bg-primary-600 text-white text-center px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors font-semibold"
                  >
                    Telepon
                  </a>
                </div>
              )}

              {/* Quick Info */}
              <div className="bg-primary-50 rounded-lg p-6 border border-primary-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Informasi Penting</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>Semua properti telah diverifikasi</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>Proses transaksi aman dan terpercaya</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>Konsultasi gratis dengan agen profesional</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>Bantuan proses legal dan administrasi</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
