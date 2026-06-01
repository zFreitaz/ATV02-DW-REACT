const PersonagemCard = ({ dados, onClick }) => {
  const imagensLocais = {
    "Frodo Baggins": "/personagens/frodo.png", "Samwise Gamgee": "/personagens/sam.png",
    "Meriadoc Brandybuck": "/personagens/merry.png", "Peregrin Took": "/personagens/pippin.png",
    "Gandalf": "/personagens/gandalf.png", "Aragorn II Elessar": "/personagens/aragorn.png",
    "Legolas": "/personagens/legolas.png", "Gimli": "/personagens/gimli.png",
    "Boromir": "/personagens/boromir.png", "Gollum": "/personagens/gollum.png",
    "Galadriel": "/personagens/galadriel.png", "Elrond": "/personagens/elrond.png",
    "Saruman": "/personagens/saruman.png", "Sauron": "/personagens/sauron.png",
    "Smaug": "/personagens/smaug.png"
  };

  const nome = dados?.name || "";
  const srcImagem = imagensLocais[nome] || "/personagens/placeholder.png";

  return (
    <div 
      onClick={onClick} 
      style={{ 
        width: '100%', 
        display: 'flex', 
        alignItems: 'center', 
        padding: '20px', 
        
        /* A MÁGICA AQUI: fundo com degradê angular em vez de cor sólida */
        background: 'linear-gradient(145deg, #111111 0%, #080808 100%)', 
        border: '1px solid #1f1a14', /* Borda levemente terrosa */
        borderRadius: '6px', 
        boxShadow: '3px 3px 10px rgba(0, 0, 0, 0.6), inset 0 0 15px rgba(0, 0, 0, 0.4)', /* Sombras para dar efeito 3D */
        
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        boxSizing: 'border-box', 
        marginBottom: '12px' 
      }}
      onMouseEnter={(e) => { 
        e.currentTarget.style.background = 'linear-gradient(145deg, #1a1511 0%, #0d0a08 100%)'; 
        e.currentTarget.style.borderColor = '#4a3728'; 
        e.currentTarget.style.transform = 'scale(1.02) translateY(-2px)';
        e.currentTarget.style.boxShadow = '5px 8px 15px rgba(0, 0, 0, 0.8), inset 0 0 10px rgba(74, 55, 40, 0.2)';
      }}
      onMouseLeave={(e) => { 
        e.currentTarget.style.background = 'linear-gradient(145deg, #111111 0%, #080808 100%)'; 
        e.currentTarget.style.borderColor = '#1f1a14'; 
        e.currentTarget.style.transform = 'scale(1) translateY(0)';
        e.currentTarget.style.boxShadow = '3px 3px 10px rgba(0, 0, 0, 0.6), inset 0 0 15px rgba(0, 0, 0, 0.4)';
      }}
    >
      <img 
        src={srcImagem} 
        alt={nome} 
        style={{ 
          width: '60px', 
          height: '60px', 
          borderRadius: '50%', 
          objectFit: 'cover', 
          marginRight: '25px', 
          border: '2px solid #4a3728',
          boxShadow: '0 0 10px rgba(0,0,0,0.8)' 
        }} 
      />
      <div style={{ flex: 1 }}>
        <h3 style={{ margin: 0, color: '#e0e0e0', fontSize: '1.2rem', fontFamily: 'serif', textShadow: '1px 1px 2px #000' }}>{nome}</h3>
        <p style={{ margin: '5px 0 0 0', color: '#8b7355', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '2px' }}>
          {dados.race || 'Desconhecido'}
        </p>
      </div>
    </div>
  );
};

export default PersonagemCard;