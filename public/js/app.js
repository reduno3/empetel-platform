* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --empetel-blue: #0c2d64;
  --empetel-blue-2: #1d4f9f;
  --empetel-cyan: #14c8ff;
  --empetel-gold: #f6b73c;
  --empetel-dark: #07172d;
  --empetel-text: #11233d;
  --empetel-muted: #5d6d82;
  --empetel-bg: #f4f7fb;
  --empetel-white: #ffffff;
  --shadow-soft: 0 16px 40px rgba(10, 24, 48, 0.12);
  --radius: 22px;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Inter', sans-serif;
  background: linear-gradient(180deg, #eef6ff 0%, #f8fafc 100%);
  color: var(--empetel-text);
  position: relative;
  overflow-x: hidden;
}

img {
  max-width: 100%;
  display: block;
}

a {
  text-decoration: none;
  color: inherit;
}

button,
input,
select {
  font: inherit;
}

.container {
  width: min(1180px, calc(100% - 32px));
  margin: 0 auto;
}

.bg-orb {
  position: fixed;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.35;
  z-index: -1;
}

.orb-one {
  width: 280px;
  height: 280px;
  background: rgba(20, 200, 255, 0.35);
  top: 50px;
  left: 8%;
}

.orb-two {
  width: 320px;
  height: 320px;
  background: rgba(246, 183, 60, 0.28);
  right: 5%;
  top: 200px;
}

.topbar {
  position: sticky;
  top: 0;
  z-index: 20;
  backdrop-filter: blur(18px);
  background: rgba(255, 255, 255, 0.7);
  border-bottom: 1px solid rgba(17, 35, 61, 0.06);
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 82px;
  gap: 24px;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-weight: 800;
  letter-spacing: 0.06em;
  color: var(--empetel-blue);
}

.brand-mark {
  width: 36px;
  height: 36px;
  border-radius: 12px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--empetel-cyan), var(--empetel-blue-2));
  color: white;
  box-shadow: var(--shadow-soft);
}

.main-menu {
  display: flex;
  gap: 28px;
  font-size: 0.95rem;
  color: var(--empetel-text);
}

.main-menu a {
  opacity: 0.8;
}

.main-menu a:hover {
  opacity: 1;
  color: var(--empetel-blue);
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.9rem 1.4rem;
  border-radius: 999px;
  font-weight: 700;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.btn:hover {
  transform: translateY(-2px);
}

.btn-primary {
  background: linear-gradient(135deg, var(--empetel-cyan), var(--empetel-blue-2));
  color: white;
  box-shadow: 0 16px 32px rgba(20, 200, 255, 0.23);
}

.btn-secondary {
  background: rgba(12, 45, 100, 0.05);
  color: var(--empetel-blue);
  border: 1px solid rgba(12, 45, 100, 0.1);
}

.hero {
  padding: 72px 0 48px;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 48px;
  align-items: center;
}

.eyebrow {
  display: inline-block;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  font-size: 0.78rem;
  color: var(--empetel-blue-2);
  font-weight: 800;
  margin-bottom: 20px;
}

.hero-copy h1 {
  font-size: clamp(2.8rem, 6vw, 5rem);
  line-height: 1.04;
  color: var(--empetel-dark);
  margin-bottom: 20px;
}

.hero-copy p {
  max-width: 620px;
  color: var(--empetel-muted);
  font-size: 1.08rem;
  line-height: 1.7;
  margin-bottom: 28px;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  margin-bottom: 28px;
}

.hero-highlights {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  gap: 18px;
  color: var(--empetel-text);
  font-weight: 600;
}

.hero-highlights li::before {
  content: '✓';
  color: var(--empetel-blue-2);
  margin-right: 8px;
}

.hero-card {
  position: relative;
  background: linear-gradient(180deg, rgba(12, 45, 100, 0.96), rgba(22, 92, 155, 0.88));
  border-radius: 32px;
  padding: 28px;
  min-height: 430px;
  box-shadow: var(--shadow-soft);
  overflow: hidden;
}

.card-glow {
  position: absolute;
  inset: auto -40px -60px auto;
  width: 220px;
  height: 220px;
  background: rgba(20, 200, 255, 0.45);
  border-radius: 50%;
  filter: blur(40px);
}

.mini-panel {
  position: relative;
  z-index: 1;
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  padding: 22px;
  color: white;
  margin-bottom: 24px;
}

.mini-label {
  display: inline-block;
  font-size: 0.72rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  opacity: 0.8;
  margin-bottom: 10px;
}

.mini-panel h3 {
  font-size: clamp(1.6rem, 3vw, 2.4rem);
  line-height: 1.1;
}

.stats-grid {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: repeat(2, minmax(120px, 1fr));
  gap: 18px;
}

.stats-grid div {
  background: rgba(255, 255, 255, 0.07);
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 20px;
  padding: 18px 16px;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.stats-grid strong {
  font-size: 1.7rem;
}

.stats-grid span {
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.86rem;
}

.trust-bar {
  padding: 12px 0 26px;
}

.trust-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px;
}

.trust-grid div {
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(17, 35, 61, 0.06);
  padding: 18px 20px;
  border-radius: 16px;
  text-align: center;
  font-weight: 700;
  color: var(--empetel-blue);
  box-shadow: 0 10px 24px rgba(12, 45, 100, 0.04);
}

.section {
  padding: 92px 0;
}

.alt-bg {
  background: linear-gradient(180deg, rgba(17, 35, 61, 0.03), rgba(17, 35, 61, 0.01));
}

.section-heading {
  margin-bottom: 32px;
}

.section-heading h2 {
  font-size: clamp(2rem, 4vw, 3rem);
  line-height: 1.15;
  color: var(--empetel-dark);
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22px;
}

.info-card {
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(17, 35, 61, 0.08);
  border-radius: var(--radius);
  padding: 24px;
  box-shadow: 0 12px 28px rgba(15, 32, 66, 0.05);
}

.icon {
  width: 52px;
  height: 52px;
  border-radius: 16px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(20, 200, 255, 0.18), rgba(29, 79, 159, 0.10));
  font-size: 1.5rem;
  margin-bottom: 18px;
}

.info-card h3 {
  margin-bottom: 10px;
  font-size: 1.4rem;
}

.info-card p {
  color: var(--empetel-muted);
  line-height: 1.7;
}

.catalog-header {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: 30px;
}

.catalog-actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.catalog-actions input,
.catalog-actions select {
  min-width: 220px;
  border: 1px solid rgba(17, 35, 61, 0.1);
  background: white;
  border-radius: 12px;
  padding: 0.9rem 1rem;
  color: var(--empetel-text);
  box-shadow: 0 12px 26px rgba(17, 35, 61, 0.05);
}

.catalog-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22px;
}

.product-card {
  background: rgba(255, 255, 255, 0.96);
  border: 1px solid rgba(17, 35, 61, 0.08);
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 12px 28px rgba(17, 35, 61, 0.06);
}

.product-card img {
  width: 100%;
  height: 220px;
  object-fit: cover;
}

.product-body {
  padding: 18px 18px 20px;
}

.product-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
}

.product-tag {
  display: inline-flex;
  padding: 0.42rem 0.7rem;
  border-radius: 999px;
  background: rgba(20, 200, 255, 0.12);
  color: var(--empetel-blue-2);
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.product-price {
  color: var(--empetel-blue);
  font-weight: 800;
}

.product-body h3 {
  margin: 0 0 8px;
  font-size: 1.15rem;
}

.product-body p {
  color: var(--empetel-muted);
  line-height: 1.6;
  min-height: 64px;
}

.card-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 18px;
}

.card-actions .btn {
  padding: 0.7rem 1rem;
  font-size: 0.86rem;
}

.brands-strip {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
}

.brands-strip span {
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(17, 35, 61, 0.08);
  color: var(--empetel-blue);
  border-radius: 999px;
  padding: 0.9rem 1.2rem;
  font-weight: 700;
  box-shadow: 0 10px 24px rgba(17, 35, 61, 0.04);
}

.cta-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 28px;
  background: linear-gradient(135deg, var(--empetel-blue), var(--empetel-blue-2));
  color: white;
  border-radius: 28px;
  padding: 38px 36px;
  box-shadow: 0 22px 48px rgba(9, 31, 66, 0.22);
}

.cta-box h2 {
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  line-height: 1.15;
}

.footer {
  background: #07172d;
  color: rgba(255, 255, 255, 0.8);
  padding: 56px 0 30px;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.4fr 1fr 1fr;
  gap: 24px;
}

.footer-brand {
  color: white;
  margin-bottom: 16px;
}

.footer h4 {
  margin-bottom: 12px;
  color: white;
}

.footer ul {
  list-style: none;
  display: grid;
  gap: 8px;
}

.floating-whatsapp {
  position: fixed;
  right: 24px;
  bottom: 24px;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: linear-gradient(135deg, #1ccf72, #0ba651);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  box-shadow: 0 18px 38px rgba(11, 166, 81, 0.35);
}

@media (max-width: 980px) {
  .hero-grid,
  .cards-grid,
  .catalog-grid,
  .footer-grid {
    grid-template-columns: 1fr 1fr;
  }

  .main-menu {
    display: none;
  }
}

@media (max-width: 720px) {
  .hero-grid,
  .cards-grid,
  .catalog-grid,
  .footer-grid,
  .trust-grid,
  .cta-box {
    grid-template-columns: 1fr;
    display: grid;
  }

  .nav {
    min-height: 72px;
  }

  .catalog-header {
    display: block;
  }

  .catalog-header > div:first-child {
    margin-bottom: 18px;
  }

  .catalog-actions {
    display: grid;
  }

  .catalog-actions input,
  .catalog-actions select {
    min-width: 100%;
  }

  .cta-box {
    text-align: center;
    justify-content: center;
  }
}
