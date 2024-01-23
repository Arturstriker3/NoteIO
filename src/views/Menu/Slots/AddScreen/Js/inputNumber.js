
export default function handleNumberInput(event) {
    // Remova todos os caracteres que não são números
    let value = event.target.value.replace(/\D/g, '');
  
    // Remova zeros à esquerda
    value = value.replace(/^0+/, '');
  
    // Adicione zeros à esquerda, se necessário
    value = value.padStart(4, '0');
  
    // Adicione uma vírgula para representar os centavos
    value = value.slice(0, -2) + ',' + value.slice(-2);
  
    // Adicione pontos como separadores de milhares
    const parts = value.split(',');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  
    // Retorne o valor formatado
    return `${parts.join(',')}`;
  }