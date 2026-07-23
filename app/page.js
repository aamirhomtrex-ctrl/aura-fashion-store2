export default function Page() {
  return (
    <div style={{ fontFamily: 'sans-serif', color: 'black', backgroundColor: 'white', minHeight: '100vh' }}>
      <nav style={{ padding: '20px', borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ fontWeight: '900', fontStyle: 'italic', margin: 0 }}>AURA FASHION</h1>
        <div style={{ fontSize: '12px', fontWeight: 'bold', letterSpacing: '1px' }}>SHOP ALL • NEW DROPS • COLLECTIONS</div>
      </nav>
      
      <header style={{ height: '60vh', backgroundColor: '#111', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', textAlign: 'center', backgroundImage: 'url(https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1600)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div style={{ backgroundColor: 'rgba(0,0,0,0.4)', padding: '40px', width: '100%' }}>
          <h2 style={{ fontSize: '60px', fontWeight: '900', margin: '0' }}>AURA '24</h2>
          <p style={{ letterSpacing: '2px' }}>STREETWEAR FOR THE BOLD</p>
          <button style={{ marginTop: '20px', padding: '15px 30px', fontWeight: 'bold', cursor: 'pointer', border: 'none', backgroundColor: 'white', color: 'black' }}>SHOP NOW</button>
        </div>
      </header>

      <section style={{ padding: '40px' }}>
        <h3 style={{ fontWeight: '900', fontStyle: 'italic', fontSize: '24px' }}>NEW ARRIVALS</h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '20px' }}>
          {[
            { id: 1, name: "Signature Hoodie", price: "$45", img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800" },
            { id: 2, name: "Cargo Pants", price: "$62", img: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=800" }
          ].map(p => (
            <div key={p.id}>
              <img src={p.img} style={{ width: '100%', aspectRatio: '3/4', objectFit: 'cover', backgroundColor: '#f5f5f5' }} />
              <p style={{ fontWeight: 'bold', margin: '10px 0 0 0', fontSize: '14px' }}>{p.name}</p>
              <p style={{ color: '#666', margin: '0', fontSize: '14px' }}>{p.price}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
