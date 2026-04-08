import Link from "next/link";

const linkStyle: React.CSSProperties = {
  color: "#222222",
  textDecoration: "none",
  fontSize: "13px",
  lineHeight: "15px",
};

const subLinkStyle: React.CSSProperties = {
  ...linkStyle,
  paddingLeft: "10px",
  display: "block",
};

const headerStyle: React.CSSProperties = {
  fontSize: "13px",
  color: "#222222",
  lineHeight: "15px",
  marginBottom: "4px",
};

const liStyle: React.CSSProperties = {
  lineHeight: "15px",
  marginBottom: "3px",
  listStyle: "none",
};

export default function SiteFooter() {
  return (
    <footer style={{ width: "100%", color: "#222222", fontSize: "13px" }}>
      {/* Link columns */}
      <div
        className="footer-list flex-col md:flex-row"
        style={{
          display: "flex",
          borderTop: "1px solid #dddddd",
          borderBottom: "1px solid #dddddd",
          width: "100%",
        }}
      >
        {/* Column 1 — HOME / BRANDS */}
        <ul
          className="w-full md:w-auto"
          style={{
            flex: 1,
            padding: "45px 30px 35px",
            listStyle: "none",
            margin: 0,
            borderRight: "1px solid #dddddd",
          }}
        >
          <li style={liStyle}>
            <Link href="#" style={linkStyle}>
              HOME
            </Link>
          </li>
          <li style={{ ...liStyle, marginTop: "12px" }}>
            <span style={headerStyle}>BRANDS</span>
          </li>
          <li style={liStyle}>
            <Link href="#" style={subLinkStyle}>
              ALL BRANDS
            </Link>
          </li>
          <li style={liStyle}>
            <Link href="#" style={subLinkStyle}>
              ANOINTED
            </Link>
          </li>
          <li style={liStyle}>
            <Link href="#" style={subLinkStyle}>
              SRL
            </Link>
          </li>
          <li style={liStyle}>
            <Link href="#" style={subLinkStyle}>
              ONE THIRD(KIDS)
            </Link>
          </li>
        </ul>

        {/* Column 2 — CATEGORIES */}
        <ul
          className="w-full md:w-auto"
          style={{
            flex: 1,
            padding: "45px 30px 35px",
            listStyle: "none",
            margin: 0,
            borderRight: "1px solid #dddddd",
          }}
        >
          <li style={liStyle}>
            <span style={headerStyle}>CATEGORIES</span>
          </li>
          {[
            "JACKETS",
            "SHIRTS",
            "KNIT / CUT SEWN",
            "T-SHIRTS",
            "BOTTOMS",
            "HEADWEAR / BAGS",
            "ACCESSORIES",
          ].map((cat) => (
            <li key={cat} style={liStyle}>
              <Link href="#" style={subLinkStyle}>
                {cat}
              </Link>
            </li>
          ))}
        </ul>

        {/* Column 3 — COLLECTION / LOOK */}
        <ul
          className="w-full md:w-auto"
          style={{
            flex: 1,
            padding: "45px 30px 35px",
            listStyle: "none",
            margin: 0,
            borderRight: "1px solid #dddddd",
          }}
        >
          <li style={liStyle}>
            <Link href="#" style={linkStyle}>
              COLLECTION
            </Link>
          </li>
          <li style={liStyle}>
            <Link href="#" style={linkStyle}>
              LOOK
            </Link>
          </li>
        </ul>

        {/* Column 4 — DEALERS */}
        <ul
          className="w-full md:w-auto"
          style={{
            flex: 1,
            padding: "45px 30px 35px",
            listStyle: "none",
            margin: 0,
            borderRight: "1px solid #dddddd",
          }}
        >
          <li style={liStyle}>
            <Link href="#" style={linkStyle}>
              DEALERS
            </Link>
          </li>
        </ul>

        {/* Column 5 — SNS */}
        <ul
          className="w-full md:w-auto"
          style={{
            flex: 1,
            padding: "45px 30px 35px",
            listStyle: "none",
            margin: 0,
            borderRight: "1px solid #dddddd",
          }}
        >
          <li style={liStyle}>
            <span style={headerStyle}>SNS</span>
          </li>
          <li style={liStyle}>
            <Link href="#" style={linkStyle}>
              ANOINTED → Instagram
            </Link>
          </li>
          <li style={liStyle}>
            <Link href="#" style={linkStyle}>
              SRL → Instagram
            </Link>
          </li>
          <li style={liStyle}>
            <Link href="#" style={linkStyle}>
              ANOINTED → Facebook
            </Link>
          </li>
          <li style={liStyle}>
            <Link href="#" style={linkStyle}>
              VIMEO
            </Link>
          </li>
        </ul>

        {/* Column 6 — NEWSLETTER */}
        <ul
          className="w-full md:w-auto"
          style={{
            flex: 1,
            padding: "45px 30px 35px",
            listStyle: "none",
            margin: 0,
          }}
        >
          <li style={liStyle}>
            <span style={headerStyle}>NEWSLETTER</span>
          </li>
          <li style={{ ...liStyle, marginTop: "8px" }}>
            <form style={{ display: "flex", alignItems: "center", gap: "4px" }}>
              <input
                type="email"
                name="email"
                placeholder="Email address"
                style={{
                  width: "100%",
                  border: "none",
                  borderBottom: "1px solid #dddddd",
                  outline: "none",
                  padding: "4px 0",
                  fontSize: "13px",
                  background: "transparent",
                  color: "#222222",
                }}
              />
              <button
                type="submit"
                style={{
                  background: "none",
                  border: "none",
                  fontSize: "13px",
                  cursor: "pointer",
                  color: "#222222",
                  padding: "4px 0",
                  whiteSpace: "nowrap",
                }}
              >
                &#8594;
              </button>
            </form>
          </li>
        </ul>
      </div>

      {/* Copyright bar */}
      <div
        className="footer-bottom"
        style={{
          padding: "10px 30px",
          fontSize: "11px",
          color: "#aaaaaa",
        }}
      >
        &copy; 2025 ANOINTED
      </div>
    </footer>
  );
}
