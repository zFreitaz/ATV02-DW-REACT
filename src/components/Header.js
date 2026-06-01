export default function Header() {
  return (
    <header style={{ 
      padding: '1.5rem 3rem', 
      backgroundColor: '#000000', 
      borderBottom: '2px solid transparent',
      borderImage: 'linear-gradient(to right, #000000, #4a3728, #c5a059, #4a3728, #000000) 1',
      boxShadow: '0 4px 15px -5px rgba(0, 0, 0, 0.8)', 
      display: 'grid', 
      gridTemplateColumns: '1fr auto 1fr', 
      alignItems: 'center'
    }}>
      

      <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
        <img 
          src="/personagens/SmaugLogo.png" 
          alt="Logo Smaug" 
          style={{ width: '85px', height: '85px', objectFit: 'contain' }} 
        />
      </div>


      <div style={{ display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
        <h1 style={{ 
          margin: 0, 
          fontSize: '2rem', 
          fontWeight: 'normal',
          letterSpacing: '8px', 
          textTransform: 'uppercase', 
          fontFamily: 'serif',
          

          backgroundImage: 'linear-gradient(to bottom, #fdf5d3 0%, #c5a059 40%, #5c3a0b 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          color: '#c5a059', 
          

          filter: 'drop-shadow(0px 4px 8px rgba(0,0,0,0.9))'
        }}>
          Arquivos da Terra Média
        </h1>
      </div>


      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <span 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
          style={{
            color: '#8b7355',
            cursor: 'pointer',
            fontFamily: 'serif',
            fontSize: '1rem',
            letterSpacing: '3px',
            textTransform: 'uppercase',
            transition: 'all 0.3s ease',
            borderBottom: '1px solid transparent'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = '#c5a059';
            e.currentTarget.style.borderBottom = '1px solid #c5a059';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = '#8b7355';
            e.currentTarget.style.borderBottom = '1px solid transparent';
          }}
        >
          Personagens
        </span>
      </div>
    </header>
  );
}