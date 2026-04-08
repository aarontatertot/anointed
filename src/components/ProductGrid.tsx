'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Product {
  id: string;
  collaboration?: string;
  brand: string;
  title: string;
  price: string;
  image: string;
  hoverImage?: string;
  soldOut: boolean;
  label?: string;
}

const products: Product[] = [
  {
    id: '1',
    collaboration: 'INFINITE ARCHIVES',
    brand: 'ANOINTED',
    title: 'NH X INFINITE ARCHIVES . SAVAGE HOMBRE CHECK SHIRT LS',
    price: '$362.00',
    image: '/images/products/252AQIAN-SHM01S_01.jpg',
    hoverImage: '/images/products/252AQIAN-SHM01S_02.jpg',
    soldOut: true,
    label: 'SOLD OUT',
  },
  {
    id: '2',
    brand: 'ANOINTED',
    title: 'ANOINTED . INFINITE ARCHIVES . CUT SEW LS',
    price: '$174.00',
    image: '/images/products/252FPIAN-CSM02S_01.jpg',
    hoverImage: '/images/products/252FPIAN-CSM02S_03.jpg',
    soldOut: false,
  },
  {
    id: '3',
    brand: 'ANOINTED',
    title: 'ANOINTED . INFINITE ARCHIVES . CUT SEW LS',
    price: '$158.00',
    image: '/images/products/252FPIAN-CSM01S_01.jpg',
    hoverImage: '/images/products/252FPIAN-CSM01S_03.jpg',
    soldOut: false,
  },
  {
    id: '4',
    brand: 'ANOINTED',
    title: 'ANOINTED . INFINITE ARCHIVES . CAP',
    price: '$46.00',
    image: '/images/products/252YGIAN-HT01S_01.jpg',
    hoverImage: '/images/products/252YGIAN-HT01S_02.jpg',
    soldOut: false,
  },
  {
    id: '5',
    brand: 'ANOINTED',
    title: 'ANOINTED . RIDER JKT',
    price: '$556.00',
    image: '/images/products/261SPNH-JKM06_01.jpg',
    hoverImage: '/images/products/261SPNH-JKM06_02.jpg',
    soldOut: false,
  },
  {
    id: '6',
    brand: 'ANOINTED',
    title: 'ANOINTED . V-PULLOVER',
    price: '$174.00',
    image: '/images/products/261PCNH-ST18_01.jpg',
    hoverImage: '/images/products/261PCNH-ST18_02.jpg',
    soldOut: false,
  },
  {
    id: '7',
    brand: 'ANOINTED',
    title: 'ANOINTED . EASY TROUSERS',
    price: '$174.00',
    image: '/images/products/261AQNH-PTM05_01.jpg',
    hoverImage: '/images/products/261AQNH-PTM05_02.jpg',
    soldOut: false,
  },
  {
    id: '8',
    brand: 'ANOINTED',
    title: 'ANOINTED . CHECK SHIRT SS',
    price: '$198.00',
    image: '/images/products/261TSNH-SHM01_01.jpg',
    soldOut: false,
  },
];

export default function ProductGrid() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section style={{ width: '100%' }}>
      {/* Section header */}
      <div
        style={{
          padding: '10px 30px',
          borderBottom: '1px solid #dddddd',
          fontSize: '13px',
          color: '#222222',
        }}
      >
        NEW ARRIVALS
      </div>

      {/* Product grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
        }}
        className="product-grid"
      >
        <style>{`
          @media (max-width: 767px) {
            .product-grid {
              grid-template-columns: repeat(2, 1fr) !important;
            }
          }
        `}</style>

        {products.map((product, index) => (
          <div
            key={product.id}
            className="collection-list-item"
            style={{
              position: 'relative',
              padding: '30px 30px 10px',
              borderBottom: '1px solid #dddddd',
              borderRight: '1px solid #dddddd',
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <a
              href={`/products/${product.id}`}
              style={{
                display: 'block',
                position: 'relative',
                cursor: 'pointer',
                textDecoration: 'none',
              }}
            >
              {/* Image wrapper with aspect ratio */}
              <div style={{ position: 'relative', paddingTop: '141.474%' }}>
                {/* Overlay background */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundColor: '#f5f5f5',
                    zIndex: 0,
                  }}
                />

                {/* Primary image */}
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  style={{
                    objectFit: 'cover',
                    zIndex: 1,
                    opacity: hoveredIndex === index && product.hoverImage ? 0 : 1,
                    transition: 'opacity 0.3s ease',
                  }}
                />

                {/* Hover image */}
                {product.hoverImage && (
                  <Image
                    src={product.hoverImage}
                    alt={`${product.title} alternate view`}
                    fill
                    style={{
                      objectFit: 'cover',
                      zIndex: 2,
                      opacity: hoveredIndex === index ? 1 : 0,
                      transition: 'opacity 0.3s ease',
                    }}
                  />
                )}

                {/* Collaboration tag */}
                {product.collaboration && (
                  <span
                    style={{
                      position: 'absolute',
                      left: 0,
                      bottom: 0,
                      fontSize: '13px',
                      color: '#222',
                      paddingLeft: '40px',
                      zIndex: 3,
                    }}
                  >
                    {product.collaboration}
                  </span>
                )}

                {/* Sold-out badge */}
                {product.soldOut && product.label && (
                  <span
                    className="product-label"
                    style={{
                      position: 'absolute',
                      right: '15px',
                      bottom: '24px',
                      fontSize: '13px',
                      color: '#aaaaaa',
                      zIndex: 3,
                    }}
                  >
                    {product.label}
                  </span>
                )}
              </div>
            </a>

            {/* Product info */}
            <p
              className="product-type"
              style={{
                fontSize: '11px',
                color: '#aaaaaa',
                marginBottom: '4px',
                marginTop: '8px',
              }}
            >
              {product.brand}
            </p>
            <p
              className="product-title"
              style={{
                fontSize: '13px',
                color: product.soldOut ? '#aaaaaa' : '#222222',
                marginBottom: '3px',
              }}
            >
              {product.title}
            </p>
            <p
              className="product-price"
              style={{
                display: 'flex',
                fontSize: '13px',
                color: product.soldOut ? '#aaaaaa' : '#222222',
                marginBottom: '13px',
              }}
            >
              <span>{product.price}</span>
            </p>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div
        className="pagination"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
          gap: '8px',
          fontSize: '13px',
        }}
      >
        <span
          className="prev"
          style={{
            color: '#aaaaaa',
            cursor: 'not-allowed',
          }}
        >
          PREV
        </span>

        <div style={{ display: 'flex', flexDirection: 'row', gap: '4px' }}>
          <span
            className="page active"
            style={{ fontWeight: 'bold', textDecoration: 'underline' }}
          >
            1
          </span>
          <Link href="?page=2" style={{ color: '#222' }}>
            2
          </Link>
          <Link href="?page=3" style={{ color: '#222' }}>
            3
          </Link>
          <span>…</span>
          <span>6</span>
        </div>

        <Link className="next" href="?page=2" style={{ color: '#222' }}>
          NEXT
        </Link>
      </div>
    </section>
  );
}
