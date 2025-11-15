import Link from 'next/link';
import Image from 'next/image';
import { Property } from '@/types/property';
import { FiMapPin, FiMaximize2, FiSquare, FiDroplet } from 'react-icons/fi';

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price);
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
    <Link href={`/properti/${property.id}`}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
        {/* Image */}
        <div className="relative h-48 bg-gray-200">
          <Image
            src={property.images[0]}
            alt={property.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* Status Badge */}
          <div className="absolute top-3 right-3">
            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(property.status)}`}>
              {getStatusLabel(property.status)}
            </span>
          </div>
          {/* Type Badge */}
          <div className="absolute top-3 left-3">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary-600 text-white">
              {getPropertyTypeLabel(property.propertyType)}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 flex-1 flex flex-col">
          {/* Price */}
          <div className="mb-2">
            <p className="text-2xl font-bold text-primary-600">{formatPrice(property.price)}</p>
          </div>

          {/* Title */}
          <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
            {property.title}
          </h3>

          {/* Location */}
          <div className="flex items-center text-gray-600 mb-3">
            <FiMapPin className="w-4 h-4 mr-1 flex-shrink-0" aria-hidden="true" />
            <span className="text-sm line-clamp-1">
              {property.location.city}, {property.location.province}
            </span>
          </div>

          {/* Specifications */}
          <div className="flex flex-wrap gap-3 text-sm text-gray-700 mt-auto pt-3 border-t border-gray-200">
            {property.specifications.bedrooms > 0 && (
              <div className="flex items-center">
                <FiSquare className="w-4 h-4 mr-1 text-gray-500" aria-hidden="true" />
                <span>{property.specifications.bedrooms} KT</span>
              </div>
            )}
            {property.specifications.bathrooms > 0 && (
              <div className="flex items-center">
                <FiDroplet className="w-4 h-4 mr-1 text-gray-500" aria-hidden="true" />
                <span>{property.specifications.bathrooms} KM</span>
              </div>
            )}
            {property.specifications.landArea > 0 && (
              <div className="flex items-center">
                <FiMaximize2 className="w-4 h-4 mr-1 text-gray-500" aria-hidden="true" />
                <span>{property.specifications.landArea} m²</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
