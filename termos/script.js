function acceptTerms() {
    if (document.getElementById('acceptTerms').checked) {
      alert('Termos aceitos. Redirecionando...');
      // Adicione aqui o redirecionamento ou a lógica necessária após a aceitação dos termos.
    } else {
      alert('Por favor, aceite os termos antes de continuar.');
    }
  }
  
  function refuseTerms() {
    alert('Termos recusados. Você será redirecionado para sair do site...');
    // Adicione aqui o redirecionamento ou a lógica necessária após a recusa dos termos.
  }
  