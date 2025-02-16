const isValidCPF = (cpf: string) => {
    cpf = cpf.replace(/\D/g, ""); // Remove pontos e traços
  
    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false; // Verifica sequência repetida
  
    const calcCheckDigit = (slice: string, factor: number) => {
      const sum = slice.split("").reduce((acc, num, idx) => acc + parseInt(num) * (factor - idx), 0);
      const remainder = (sum * 10) % 11;
      return remainder === 10 ? 0 : remainder;
    };
  
    const checkDigit1 = calcCheckDigit(cpf.slice(0, 9), 10);
    const checkDigit2 = calcCheckDigit(cpf.slice(0, 10), 11);
  
    return checkDigit1 === parseInt(cpf[9]) && checkDigit2 === parseInt(cpf[10]);
  };

  export {isValidCPF}