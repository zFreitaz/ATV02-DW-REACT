const PainelPersonagem = ({ dadosItem }) => {
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

  if (!dadosItem) {
    return (
      <div style={{ 
        display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', 
        color: '#4a3728', fontFamily: 'serif', fontSize: '1.2rem', letterSpacing: '2px', 
        border: '1px solid #1f1a14', borderRadius: '8px', 
        background: 'linear-gradient(180deg, #111111 0%, #050505 100%)',
        boxShadow: 'inset 0 0 30px rgba(0,0,0,0.8)'
      }}>
        Selecione um registro para visualizar.
      </div>
    );
  }

  const nome = dadosItem.name;
  const srcImagem = imagensLocais[nome] || "/personagens/placeholder.png";

  const traduzirGenero = (genero) => {
    if (genero === 'Male') return 'Masculino';
    if (genero === 'Female') return 'Feminino';
    return genero || 'Desconhecido';
  };

  return (
    <>
      {/* Estilização exclusiva da barra de rolagem deste painel */}
      <style>{`
        .scroll-obscuro::-webkit-scrollbar {
          width: 6px;
        }
        .scroll-obscuro::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.2);
          border-radius: 8px;
        }
        .scroll-obscuro::-webkit-scrollbar-thumb {
          background-color: #4a3728;
          border-radius: 8px;
        }
        .scroll-obscuro::-webkit-scrollbar-thumb:hover {
          background-color: #c5a059;
        }
      `}</style>

      <div className="scroll-obscuro" style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '2.5rem 2rem', 
        height: '100%',
        boxSizing: 'border-box',
        background: 'linear-gradient(180deg, #1a1511 0%, #050505 100%)', 
        border: '1px solid #1f1a14',
        borderRadius: '8px',
        boxShadow: 'inset 0 0 50px rgba(0,0,0,0.9), 0 10px 30px rgba(0,0,0,0.5)', 
        position: 'relative',
        overflowY: 'auto'
      }}>
        
        {/* Imagem */}
        <img
          src={srcImagem}
          alt={nome}
          style={{
            width: '180px', 
            height: '180px',
            minWidth: '180px', 
            minHeight: '180px', 
            flexShrink: 0, 
            borderRadius: '50%',
            objectFit: 'cover',
            border: '3px solid #4a3728',
            boxShadow: '0 0 40px rgba(197, 160, 89, 0.15), 0 15px 25px rgba(0,0,0,0.9)', 
            marginBottom: '1.5rem', 
            transition: 'transform 0.4s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.03)'} 
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        />

        {/* Nome */}
        <h2 style={{
          margin: '0 0 1.5rem 0',
          fontSize: '2.2rem', 
          letterSpacing: '8px',
          textTransform: 'uppercase',
          fontFamily: 'serif',
          backgroundImage: 'linear-gradient(to bottom, #fdf5d3 0%, #c5a059 40%, #5c3a0b 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          color: '#c5a059',
          filter: 'drop-shadow(0px 5px 5px rgba(0,0,0,0.9))',
          textAlign: 'center'
        }}>
          {nome}
        </h2>

        {/* Linha Divisória */}
        <div style={{
          width: '85%',
          height: '1px',
          background: 'linear-gradient(90deg, transparent, #8b7355, transparent)',
          opacity: 0.5,
          marginBottom: '2rem',
          flexShrink: 0
        }} />

        {/* Grid de Informações Expandido */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '2rem 3rem', 
          width: '85%',
          maxWidth: '700px'
        }}>
          <div>
            <p style={{ margin: 0, color: '#4a3728', fontSize: '0.85rem', letterSpacing: '3px', textTransform: 'uppercase' }}>Raça</p>
            <p style={{ margin: '8px 0 0 0', color: '#d1cdc0', fontSize: '1.2rem', fontFamily: 'serif', textShadow: '1px 1px 2px #000' }}>
              {dadosItem.race || 'Desconhecida'}
            </p>
          </div>
          <div>
            <p style={{ margin: 0, color: '#4a3728', fontSize: '0.85rem', letterSpacing: '3px', textTransform: 'uppercase' }}>Gênero</p>
            <p style={{ margin: '8px 0 0 0', color: '#d1cdc0', fontSize: '1.2rem', fontFamily: 'serif', textShadow: '1px 1px 2px #000' }}>
              {traduzirGenero(dadosItem.gender)}
            </p>
          </div>
          <div>
            <p style={{ margin: 0, color: '#4a3728', fontSize: '0.85rem', letterSpacing: '3px', textTransform: 'uppercase' }}>Reino</p>
            <p style={{ margin: '8px 0 0 0', color: '#d1cdc0', fontSize: '1.2rem', fontFamily: 'serif', textShadow: '1px 1px 2px #000' }}>
              {dadosItem.realm || '—'}
            </p>
          </div>
          <div>
            <p style={{ margin: 0, color: '#4a3728', fontSize: '0.85rem', letterSpacing: '3px', textTransform: 'uppercase' }}>Nascimento</p>
            <p style={{ margin: '8px 0 0 0', color: '#d1cdc0', fontSize: '1.2rem', fontFamily: 'serif', textShadow: '1px 1px 2px #000' }}>
              {dadosItem.birth || '—'}
            </p>
          </div>
          
          <div>
            <p style={{ margin: 0, color: '#4a3728', fontSize: '0.85rem', letterSpacing: '3px', textTransform: 'uppercase' }}>Morte</p>
            <p style={{ margin: '8px 0 0 0', color: '#d1cdc0', fontSize: '1.2rem', fontFamily: 'serif', textShadow: '1px 1px 2px #000' }}>
              {dadosItem.death || '—'}
            </p>
          </div>
          <div>
            <p style={{ margin: 0, color: '#4a3728', fontSize: '0.85rem', letterSpacing: '3px', textTransform: 'uppercase' }}>Cabelo / Altura</p>
            <p style={{ margin: '8px 0 0 0', color: '#d1cdc0', fontSize: '1.2rem', fontFamily: 'serif', textShadow: '1px 1px 2px #000' }}>
              {dadosItem.hair || dadosItem.height || '—'}
            </p>
          </div>
        </div>

        {/* ID no rodapé do painel */}
        <div style={{
          marginTop: 'auto',
          paddingTop: '2rem',
          color: '#2a1f16', 
          fontSize: '0.75rem',
          letterSpacing: '5px',
          textTransform: 'uppercase'
        }}>
          ID DE REGISTRO: {dadosItem._id}
        </div>
      </div>
    </>
  );
};

export default PainelPersonagem;