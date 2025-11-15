'use client';

import { useState, useMemo } from 'react';
import PropertyCard from '@/components/PropertyCard';
import { properties } from '@/data/properties';
import { Property, PropertyFilters } from '@/types/property';
import { FiFilter, FiX } from 'react-icons/fi';

export default function PropertiPage() {
  const [filters, setFilters] = useState<PropertyFilters>({
    propertyType: 'all',
    minPrice: undefined,
    maxPrice: undefined,
    minBedrooms: undefined,
    city: '',
    status: 'available',
  });
  const [showFilters, setShowFilters] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Filter properties based on current filters
  const filteredProperties = useMemo(() => {
    return properties.filter((property) => {
      // Search query filter
      if (searchQuery && !property.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
          !property.location.city.toLowerCase().includes(searchQuery.toLowerCase())) {
        return false;
      }

      // Property type filter
      if (filters.propertyType && filters.propertyType !== 'all' && property.propertyType !== filters.propertyType) {
        return false;
      }

      // Price filters
      if (filters.minPrice && property.price < filters.minPrice) {
        return false;
      }
      if (filters.maxPrice && property.price > filters.maxPrice) {
        return false;
      }

      // Bedroom filter
      if (filters.minBedrooms && property.specifications.bedrooms < filters.minBedrooms) {
        return false;
      }

      // City filter
      if (filters.city && !property.location.city.toLowerCase().includes(filters.city.toLowerCase())) {
        return false;
      }

      // Status filter
      if (filters.status && property.status !== filters.status) {
        return false;
      }

      return true;
    });
  }, [filters, searchQuery]);

  const resetFilters = () => {
    setFilters({
      propertyType: 'all',
      minPrice: undefined,
      maxPrice: undefined,
      minBedrooms: undefined,
      city: '',
      status: 'available',
    });
    setSearchQuery('');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Daftar Properti</h1>
          <p className="text-gray-600">
            Ditemukan {filteredProperties.length} properti yang sesuai dengan pencarian Anda
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Cari berdasarkan judul atau kota..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            aria-label="Cari properti"
          />
        </div>

        {/* Filter Toggle Button (Mobile) */}
        <div className="mb-6 lg:hidden">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center justify-center w-full bg-white border border-gray-300 rounded-lg px-4 py-3 hover:bg-gray-50"
            aria-expanded={showFilters}
          >
            <FiFilter className="mr-2" aria-hidden="true" />
            {showFilters ? 'Sembunyikan Filter' : 'Tampilkan Filter'}
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Filters Sidebar */}
          <div className={`lg:w-64 flex-shrink-0 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-20">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-900">Filter</h2>
                <button
                  onClick={resetFilters}
                  className="text-sm text-primary-600 hover:text-primary-700 font-medium"
                >
                  Reset
                </button>
              </div>

              <div className="space-y-6">
                {/* Property Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Jenis Properti
                  </label>
                  <select
                    value={filters.propertyType || 'all'}
                    onChange={(e) => setFilters({ ...filters, propertyType: e.target.value as any })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="all">Semua</option>
                    <option value="house">Rumah</option>
                    <option value="apartment">Apartemen</option>
                    <option value="land">Tanah</option>
                    <option value="commercial">Komersial</option>
                  </select>
                </div>

                {/* Status */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Status
                  </label>
                  <select
                    value={filters.status || 'available'}
                    onChange={(e) => setFilters({ ...filters, status: e.target.value as any })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="available">Tersedia</option>
                    <option value="reserved">Dipesan</option>
                    <option value="sold">Terjual</option>
                  </select>
                </div>

                {/* Price Range */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Rentang Harga (Rp)
                  </label>
                  <div className="space-y-2">
                    <input
                      type="number"
                      placeholder="Harga Minimum"
                      value={filters.minPrice || ''}
                      onChange={(e) => setFilters({ ...filters, minPrice: e.target.value ? Number(e.target.value) : undefined })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                    <input
                      type="number"
                      placeholder="Harga Maksimum"
                      value={filters.maxPrice || ''}
                      onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value ? Number(e.target.value) : undefined })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Bedrooms */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Minimum Kamar Tidur
                  </label>
                  <select
                    value={filters.minBedrooms || ''}
                    onChange={(e) => setFilters({ ...filters, minBedrooms: e.target.value ? Number(e.target.value) : undefined })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="">Semua</option>
                    <option value="1">1+</option>
                    <option value="2">2+</option>
                    <option value="3">3+</option>
                    <option value="4">4+</option>
                    <option value="5">5+</option>
                  </select>
                </div>

                {/* City */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Kota
                  </label>
                  <input
                    type="text"
                    placeholder="Cari kota..."
                    value={filters.city || ''}
                    onChange={(e) => setFilters({ ...filters, city: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Property Grid */}
          <div className="flex-1">
            {filteredProperties.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProperties.map((property) => (
                  <PropertyCard key={property.id} property={property} />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-md p-12 text-center">
                <FiX className="w-16 h-16 mx-auto text-gray-400 mb-4" aria-hidden="true" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Tidak Ada Properti Ditemukan
                </h3>
                <p className="text-gray-600 mb-4">
                  Coba sesuaikan filter atau pencarian Anda
                </p>
                <button
                  onClick={resetFilters}
                  className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors"
                >
                  Reset Filter
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
