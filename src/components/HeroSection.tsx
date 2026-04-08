'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'

const slides = [
  { url: '/images//images/studio/barber-chairs-wide.jpg', alt: 'ANOINTED collection' },
  { url: '/images//images/studio/portrait-street.jpg', alt: 'ANOINTED collection' },
  { url: '/images//images/studio/barber-chair-single.jpg', alt: 'ANOINTED collection' },
]

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [nhoodHover, setNhoodHover] = useState(false)
  const [srlHover, setSrlHover] = useState(false)
  const [oneThirdHover, setOneThirdHover] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      {/* Desktop: 3-column grid */}
      <div
        className="hidden md:grid"
        style={{
          gridTemplateColumns: '50% 25% 25%',
          gridTemplateRows: '50% 50%',
          height: 'calc(100vh - 50px)',
          minHeight: '600px',
        }}
      >
        {/* Left panel — movie area, spans both rows */}
        <div
          id="movieArea"
          style={{
            gridColumn: '1',
            gridRow: '1 / span 2',
            position: 'relative',
            overflow: 'hidden',
            backgroundColor: '#000000',
            borderRight: '1px solid #dddddd',
          }}
        >
          {/* Slideshow */}
          <ul
            className="top_slideshow"
            style={{
              listStyle: 'none',
              margin: 0,
              padding: 0,
              position: 'relative',
              width: '100%',
              height: '100%',
            }}
          >
            {slides.map((slide, index) => (
              <li
                key={slide.url}
                style={{
                  position: 'absolute',
                  inset: 0,
                  opacity: index === currentSlide ? 1 : 0,
                  zIndex: index === currentSlide ? 1 : 0,
                  transition: 'opacity 1.3s ease-out',
                }}
              >
                <Image
                  src={slide.url}
                  alt={slide.alt}
                  fill
                  style={{
                    objectFit: 'cover',
                    objectPosition: '50% 0%',
                  }}
                  priority={index === 0}
                  unoptimized
                />
              </li>
            ))}
          </ul>

          {/* NEW ARRIVALS — vertical text */}
          <div
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              zIndex: 3,
              color: '#ffffff',
              fontFamily: 'inherit',
              fontSize: '62px',
              fontWeight: 400,
              letterSpacing: '-3.1px',
              textTransform: 'uppercase',
              width: '71px',
              lineHeight: 1,
            }}
          >
            NEW ARRIVALS
          </div>

          {/* Bottom left caption */}
          <div
            style={{
              position: 'absolute',
              bottom: '17px',
              left: '17px',
              zIndex: 3,
              color: '#ffffff',
              fontSize: '13px',
            }}
          >
            ANOINTED | INFINITE ARCHIVES
          </div>

          {/* Bottom right VIEW MORE */}
          <div
            style={{
              position: 'absolute',
              bottom: '17px',
              right: '19px',
              zIndex: 3,
              color: '#ffffff',
              fontSize: '13px',
            }}
          >
            VIEW MORE
          </div>

          {/* Cover overlay */}
          <div
            className="main-cover"
            style={{
              position: 'absolute',
              inset: 0,
              zIndex: 4,
              backgroundColor: '#000000',
              opacity: 0,
            }}
          />
        </div>

        {/* Middle panel — ANOINTED brand, spans both rows */}
        <div
          style={{
            gridColumn: '2',
            gridRow: '1 / span 2',
            position: 'relative',
            backgroundColor: '#ffffff',
            borderRight: '1px solid #dddddd',
            overflow: 'hidden',
          }}
          onMouseEnter={() => setNhoodHover(true)}
          onMouseLeave={() => setNhoodHover(false)}
        >
          <h2
            style={{
              fontSize: '33px',
              fontWeight: 400,
              letterSpacing: '-1.65px',
              textTransform: 'uppercase',
              color: '#222222',
              padding: '21px 21px 0px',
              margin: 0,
            }}
          >
            ANOINTED
          </h2>
          <p
            style={{
              fontSize: '13px',
              color: '#aaaaaa',
              padding: '8px 35px 0px 20px',
              margin: 0,
            }}
          >
            ANOINTED founded in 1994 in Harajuku Tokyo. &ldquo;Craft with Pride&rdquo;.
          </p>
          <span
            style={{
              position: 'absolute',
              bottom: '17px',
              right: '19px',
              fontSize: '13px',
              color: '#222222',
            }}
          >
            VIEW MORE
          </span>
          {/* Cover overlay */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundColor: '#ffffff',
              opacity: nhoodHover ? 0.15 : 0,
              transition: 'opacity 0.3s ease',
              pointerEvents: 'none',
            }}
          />
        </div>

        {/* Top-right panel — SRL */}
        <div
          style={{
            gridColumn: '3',
            gridRow: '1',
            position: 'relative',
            backgroundColor: '#ffffff',
            borderBottom: '1px solid #dddddd',
            overflow: 'hidden',
          }}
          onMouseEnter={() => setSrlHover(true)}
          onMouseLeave={() => setSrlHover(false)}
        >
          <h2
            style={{
              fontSize: '33px',
              fontWeight: 400,
              letterSpacing: '-1.65px',
              textTransform: 'uppercase',
              color: 'rgb(204, 204, 204)',
              padding: '21px 21px 0px',
              margin: 0,
            }}
          >
            SRL
          </h2>
          <span
            style={{
              position: 'absolute',
              bottom: '17px',
              right: '19px',
              fontSize: '13px',
              color: '#222222',
            }}
          >
            VIEW MORE
          </span>
          {/* Cover overlay */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundColor: '#ffffff',
              opacity: srlHover ? 0.15 : 0,
              transition: 'opacity 0.3s ease',
              pointerEvents: 'none',
            }}
          />
        </div>

        {/* Bottom-right panel — ONE THIRD */}
        <div
          style={{
            gridColumn: '3',
            gridRow: '2',
            position: 'relative',
            backgroundColor: '#ffffff',
            overflow: 'hidden',
          }}
          onMouseEnter={() => setOneThirdHover(true)}
          onMouseLeave={() => setOneThirdHover(false)}
        >
          <h2
            style={{
              fontSize: '33px',
              fontWeight: 400,
              letterSpacing: '-1.65px',
              textTransform: 'uppercase',
              color: '#222222',
              padding: '21px 21px 0px',
              margin: 0,
            }}
          >
            ONE THIRD <small className="text-sm">(kids)</small>
          </h2>
          <span
            style={{
              position: 'absolute',
              bottom: '17px',
              right: '19px',
              fontSize: '13px',
              color: '#222222',
            }}
          >
            VIEW MORE
          </span>
          {/* Cover overlay */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundColor: '#ffffff',
              opacity: oneThirdHover ? 0.15 : 0,
              transition: 'opacity 0.3s ease',
              pointerEvents: 'none',
            }}
          />
        </div>
      </div>

      {/* Mobile: single column stacked */}
      <div className="flex flex-col md:hidden">
        {/* Movie area */}
        <div
          style={{
            position: 'relative',
            overflow: 'hidden',
            backgroundColor: '#000000',
            height: '60vw',
            minHeight: '280px',
          }}
        >
          <ul
            style={{
              listStyle: 'none',
              margin: 0,
              padding: 0,
              position: 'relative',
              width: '100%',
              height: '100%',
            }}
          >
            {slides.map((slide, index) => (
              <li
                key={slide.url}
                style={{
                  position: 'absolute',
                  inset: 0,
                  opacity: index === currentSlide ? 1 : 0,
                  zIndex: index === currentSlide ? 1 : 0,
                  transition: 'opacity 1.3s ease-out',
                }}
              >
                <Image
                  src={slide.url}
                  alt={slide.alt}
                  fill
                  style={{
                    objectFit: 'cover',
                    objectPosition: '50% 0%',
                  }}
                  priority={index === 0}
                  unoptimized
                />
              </li>
            ))}
          </ul>
          <div
            style={{
              position: 'absolute',
              top: '12px',
              right: '12px',
              zIndex: 3,
              color: '#ffffff',
              fontSize: '36px',
              fontWeight: 400,
              letterSpacing: '-1.8px',
              textTransform: 'uppercase',
              width: '42px',
              lineHeight: 1,
            }}
          >
            NEW ARRIVALS
          </div>
          <div
            style={{
              position: 'absolute',
              bottom: '12px',
              left: '12px',
              zIndex: 3,
              color: '#ffffff',
              fontSize: '11px',
            }}
          >
            ANOINTED | INFINITE ARCHIVES
          </div>
          <div
            style={{
              position: 'absolute',
              bottom: '12px',
              right: '12px',
              zIndex: 3,
              color: '#ffffff',
              fontSize: '11px',
            }}
          >
            VIEW MORE
          </div>
        </div>

        {/* ANOINTED panel */}
        <div
          style={{
            position: 'relative',
            backgroundColor: '#ffffff',
            borderTop: '1px solid #dddddd',
            overflow: 'hidden',
            padding: '0 0 40px',
          }}
        >
          <h2
            style={{
              fontSize: '28px',
              fontWeight: 400,
              letterSpacing: '-1.4px',
              textTransform: 'uppercase',
              color: '#222222',
              padding: '16px 16px 0px',
              margin: 0,
            }}
          >
            ANOINTED
          </h2>
          <p
            style={{
              fontSize: '13px',
              color: '#aaaaaa',
              padding: '8px 20px 0px 16px',
              margin: 0,
            }}
          >
            ANOINTED founded in 1994 in Harajuku Tokyo. &ldquo;Craft with Pride&rdquo;.
          </p>
          <span
            style={{
              position: 'absolute',
              bottom: '12px',
              right: '14px',
              fontSize: '13px',
              color: '#222222',
            }}
          >
            VIEW MORE
          </span>
        </div>

        {/* SRL panel */}
        <div
          style={{
            position: 'relative',
            backgroundColor: '#ffffff',
            borderTop: '1px solid #dddddd',
            overflow: 'hidden',
            padding: '0 0 40px',
          }}
        >
          <h2
            style={{
              fontSize: '28px',
              fontWeight: 400,
              letterSpacing: '-1.4px',
              textTransform: 'uppercase',
              color: 'rgb(204, 204, 204)',
              padding: '16px 16px 0px',
              margin: 0,
            }}
          >
            SRL
          </h2>
          <span
            style={{
              position: 'absolute',
              bottom: '12px',
              right: '14px',
              fontSize: '13px',
              color: '#222222',
            }}
          >
            VIEW MORE
          </span>
        </div>

        {/* ONE THIRD panel */}
        <div
          style={{
            position: 'relative',
            backgroundColor: '#ffffff',
            borderTop: '1px solid #dddddd',
            overflow: 'hidden',
            padding: '0 0 40px',
          }}
        >
          <h2
            style={{
              fontSize: '28px',
              fontWeight: 400,
              letterSpacing: '-1.4px',
              textTransform: 'uppercase',
              color: '#222222',
              padding: '16px 16px 0px',
              margin: 0,
            }}
          >
            ONE THIRD <small className="text-sm">(kids)</small>
          </h2>
          <span
            style={{
              position: 'absolute',
              bottom: '12px',
              right: '14px',
              fontSize: '13px',
              color: '#222222',
            }}
          >
            VIEW MORE
          </span>
        </div>
      </div>
    </>
  )
}
