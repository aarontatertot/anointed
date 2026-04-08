'use client'

import Image from 'next/image'
import Link from 'next/link'

const brandItems = [
  { label: 'ALL BRANDS', href: '#' },
  { label: 'ANOINTED', href: '#' },
  { label: 'SRL', href: '#' },
  { label: 'ONE THIRD(KIDS)', href: '#' },
]

const categoryItems = [
  { label: 'JACKETS', href: '#' },
  { label: 'SHIRTS', href: '#' },
  { label: 'KNIT / CUT SEWN', href: '#' },
  { label: 'T-SHIRTS', href: '#' },
  { label: 'BOTTOMS', href: '#' },
  { label: 'HEADWEAR / BAGS', href: '#' },
  { label: 'ACCESSORIES', href: '#' },
]

interface DropdownLinkProps {
  label: string
  items: { label: string; href: string }[]
}

function DropdownLink({ label, items }: DropdownLinkProps) {
  return (
    <div className="relative group" style={{ height: '49px', display: 'flex', alignItems: 'center' }}>
      <span
        style={{
          fontSize: '13px',
          color: '#222222',
          padding: '0 12px',
          height: '49px',
          lineHeight: '49px',
          textDecoration: 'none',
          cursor: 'pointer',
          display: 'block',
          whiteSpace: 'nowrap',
        }}
      >
        {label}
      </span>
      <div
        className="hidden group-hover:block"
        style={{
          position: 'absolute',
          top: '50px',
          left: '0',
          background: 'white',
          border: '1px solid #dddddd',
          zIndex: 20,
          minWidth: '160px',
          padding: '8px 0',
        }}
      >
        {items.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            style={{
              display: 'block',
              padding: '6px 20px',
              fontSize: '13px',
              color: '#222222',
              textDecoration: 'none',
            }}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default function SiteHeader() {
  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        width: '100%',
        height: '50px',
        backgroundColor: 'white',
        borderBottom: '1px solid #dddddd',
        zIndex: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
      }}
    >
      {/* Logo area */}
      <h1
        style={{
          width: '192px',
          flexShrink: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '6px 10px 0',
          margin: 0,
        }}
      >
        <Link href="/" className="logo-image block">
          <Image
            src="/images/neighborhood-logo.svg"
            alt="ANOINTED"
            width={172}
            height={26}
          />
        </Link>
      </h1>

      {/* Search area */}
      <div
        className="global-header-search-form"
        style={{
          flex: 1,
          padding: '0 20px',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <form
          style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: '100%' }}
          onSubmit={(e) => e.preventDefault()}
        >
          <button
            type="submit"
            style={{
              background: 'none',
              border: 'none',
              padding: 0,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              flexShrink: 0,
            }}
            aria-label="Search"
          >
            <Image
              src="/images/search-icon.svg"
              alt="Search"
              width={11}
              height={14}
            />
          </button>
          <input
            type="text"
            placeholder="SEARCH"
            style={{
              flex: 1,
              border: 'none',
              outline: 'none',
              fontSize: '13px',
              marginLeft: '8px',
              width: '100%',
            }}
          />
        </form>
      </div>

      {/* Nav */}
      <nav
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          height: '49px',
        }}
      >
        {/* Desktop nav links - hidden on mobile */}
        <div className="hidden md:flex" style={{ flexDirection: 'row', alignItems: 'center', height: '49px' }}>
          {/* Left side nav items */}
          <DropdownLink label="BRANDS" items={brandItems} />
          <DropdownLink label="CATEGORIES" items={categoryItems} />

          {(['COLLECTION', 'LOOK', 'DEALERS'] as const).map((item) => (
            <Link
              key={item}
              href="#"
              style={{
                fontSize: '13px',
                color: '#222222',
                padding: '0 12px',
                height: '49px',
                lineHeight: '49px',
                textDecoration: 'none',
                cursor: 'pointer',
                display: 'block',
                whiteSpace: 'nowrap',
              }}
            >
              {item}
            </Link>
          ))}

          {/* Separator */}
          <span style={{ margin: '0 10px', color: '#dddddd' }}>|</span>

          {/* Right side nav items */}
          <Link
            href="#"
            style={{
              fontSize: '13px',
              color: '#222222',
              padding: '0 12px',
              height: '49px',
              lineHeight: '49px',
              textDecoration: 'none',
              cursor: 'pointer',
              display: 'block',
              whiteSpace: 'nowrap',
            }}
          >
            LOGIN
          </Link>
          <Link
            href="#"
            style={{
              fontSize: '13px',
              color: '#222222',
              padding: '0 12px',
              height: '49px',
              lineHeight: '49px',
              textDecoration: 'none',
              cursor: 'pointer',
              display: 'block',
              whiteSpace: 'nowrap',
            }}
          >
            CART(0)
          </Link>
        </div>

        {/* Mobile nav - visible only below md: */}
        <div className="flex md:hidden" style={{ flexDirection: 'row', alignItems: 'center', gap: '12px', padding: '0 12px' }}>
          {/* Cart icon */}
          <Link href="#" aria-label="Cart">
            <Image
              src="/images/cart.svg"
              alt="Cart"
              width={20}
              height={20}
            />
          </Link>

          {/* Hamburger */}
          <button
            aria-label="Open menu"
            style={{
              background: 'none',
              border: 'none',
              padding: 0,
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              gap: '4px',
            }}
          >
            <span style={{ display: 'block', width: '20px', height: '2px', backgroundColor: '#222222' }} />
            <span style={{ display: 'block', width: '20px', height: '2px', backgroundColor: '#222222' }} />
            <span style={{ display: 'block', width: '20px', height: '2px', backgroundColor: '#222222' }} />
          </button>
        </div>
      </nav>
    </header>
  )
}
