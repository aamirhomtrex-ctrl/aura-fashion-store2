export default function Page() {
  return (
    <div style={{ color: 'black', backgroundColor: 'white', minHeight: '100vh' }}>
      <nav style={{ padding: '20px', borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between' }}>
        <h1 style={{ fontWeight: '900', fontStyle: 'italic', margin: 0 }}>AURA FASHION</h1>
        <div style={{ fontSize: '12px', fontWeight: 'bold' }}>SHOP ALL • NEW DROPS</div>
      </nav>
      
      <header style={{ height: '60vh', backgroundColor: '#111', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', textAlign: 'center', backgroundImage: 'url(https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1600)', backgroundSize: 'cover' }}>
        <div style={{ backgroundColor: 'rgba(0,0,0,0.4)', padding: '40px', width: '100%' }}>
          <h2 style={{ fontSize: '60px', fontWeight: '900', margin: '0' }}>AURA '24</h2>
          <button style={{ marginTop: '20px', padding: '15px 30px', fontWeight: 'bold', border: 'none', backgroundColor: 'white', color: 'black', cursor: 'pointer' }}>SHOP NOW</button>
        </div>
      </header>

      <section style={{ padding: '40px' }}>
        <h3 style={{ fontWeight: '900', fontStyle: 'italic' }}>NEW ARRIVALS</h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          <div>
            <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800" style={{ width: '100%', aspectRatio: '3/4', objectFit: 'cover' }} />
            <p style={{ fontWeight: 'bold' }}>Signature Hoodie - $45</p>
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=800" style={{ width: '100%', aspectRatio: '3/4', objectFit: 'cover' }} />
            <p style={{ fontWeight: 'bold' }}>Cargo Pants - $62</p>
          </div>
        </div>
      </section>
    </div>
  )
}
