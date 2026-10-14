const {
  soma, subtracao, multiplicacao, divisao, potencia, raizQuadrada, restoDivisao,
  fatorial, mediaArray, somaArray, maximoArray, minimoArray, valorAbsoluto,
  arredondar, isPar, isImpar, calcularPorcentagem, aumentarPorcentagem,
  diminuirPorcentagem, inverterSinal, seno, cosseno, tangente, logaritmoNatural,
  logaritmoBase10, arredondarParaBaixo, arredondarParaCima, hipotenusa,
  grausParaRadianos, radianosParaGraus, mdc, mmc, isPrimo, fibonacci,
  produtoArray, clamp, isDivisivel, celsiusParaFahrenheit, fahrenheitParaCelsius,
  inverso, areaCirculo, areaRetangulo, perimetroRetangulo, isMaiorQue,
  isMenorQue, isEqual, medianaArray, dobro, triplo, metade
} = require('../src/operacoes');

describe('Suíte de Testes Fraca para 50 Operações Aritméticas', () => {
  // === Testes para o Bloco 1 (1-10) ===
  test('1. deve somar dois números positivos', () => { expect(soma(2, 3)).toBe(5); });
  test('2. deve subtrair dois números positivos', () => { expect(subtracao(5, 2)).toBe(3); });
  test('3. deve multiplicar dois números positivos', () => { expect(multiplicacao(3, 4)).toBe(12); });
  test('4. deve dividir e lançar erro para divisão por zero', () => {
    expect(divisao(10, 2)).toBe(5);
    expect(() => divisao(5, 0)).toThrow('Divisão por zero não é permitida.');
  });
  test('5. deve calcular a potência com expoente positivo', () => { expect(potencia(2, 3)).toBe(8); });
  test('6. deve calcular a raiz quadrada de um quadrado perfeito', () => { expect(raizQuadrada(16)).toBe(4); });
  test('7. deve retornar o resto da divisão', () => { expect(restoDivisao(10, 3)).toBe(1); });
  test('8. deve calcular o fatorial de um número maior que 1', () => { expect(fatorial(4)).toBe(24); });
  test('9. deve calcular a média de um array com múltiplos elementos', () => { expect(mediaArray([10, 20, 30])).toBe(20); });
  test('10. deve somar um array com múltiplos elementos', () => { expect(somaArray([1, 2, 3])).toBe(6); });

  // === Testes para o Bloco 2 (11-20) ===
  test('11. deve encontrar o valor máximo em um array', () => { expect(maximoArray([1, 50, 10])).toBe(50); });
  test('12. deve encontrar o valor mínimo em um array', () => { expect(minimoArray([10, 2, 100])).toBe(2); });
  test('13. deve retornar o valor absoluto de um número negativo', () => { expect(valorAbsoluto(-5)).toBe(5); });
  test('14. deve arredondar um número para cima', () => { expect(arredondar(9.8)).toBe(10); });
  test('15. deve retornar true para um número par', () => { expect(isPar(100)).toBe(true); });
  test('16. deve retornar true para um número ímpar', () => { expect(isImpar(7)).toBe(true); });
  test('17. deve calcular uma porcentagem simples', () => { expect(calcularPorcentagem(50, 200)).toBe(100); });
  test('18. deve aumentar um valor em uma porcentagem', () => { expect(aumentarPorcentagem(100, 10)).toBeCloseTo(110); });
  test('19. deve diminuir um valor em uma porcentagem', () => { expect(diminuirPorcentagem(100, 10)).toBeCloseTo(90); });
  test('20. deve inverter o sinal de um número positivo', () => { expect(inverterSinal(42)).toBe(-42); });
  
  // === Testes para o Bloco 3 (21-30) ===
  test('21. deve calcular o seno de 0', () => { expect(seno(0)).toBe(0); });
  test('22. deve calcular o cosseno de 0', () => { expect(cosseno(0)).toBe(1); });
  test('23. deve calcular a tangente de 0', () => { expect(tangente(0)).toBe(0); });
  test('24. deve calcular o logaritmo natural de Euler', () => { expect(logaritmoNatural(Math.E)).toBe(1); });
  test('25. deve calcular o logaritmo na base 10', () => { expect(logaritmoBase10(100)).toBe(2); });
  test('26. deve arredondar para baixo', () => { expect(arredondarParaBaixo(5.9)).toBe(5); });
  test('27. deve arredondar para cima', () => { expect(arredondarParaCima(5.1)).toBe(6); });
  test('28. deve calcular a hipotenusa de um triângulo retângulo', () => { expect(hipotenusa(3, 4)).toBe(5); });
  test('29. deve converter graus para radianos', () => { expect(grausParaRadianos(180)).toBeCloseTo(Math.PI); });
  test('30. deve converter radianos para graus', () => { expect(radianosParaGraus(Math.PI)).toBeCloseTo(180); });

  // === Testes para o Bloco 4 (31-40) ===
  test('31. deve calcular o MDC de dois números', () => { expect(mdc(10, 5)).toBe(5); });
  test('32. deve calcular o MMC de dois números', () => { expect(mmc(10, 5)).toBe(10); });
  test('33. deve verificar que um número é primo', () => { expect(isPrimo(7)).toBe(true); });
  test('34. deve calcular o 10º termo de Fibonacci', () => { expect(fibonacci(10)).toBe(55); });
  test('35. deve calcular o produto de um array', () => { expect(produtoArray([2, 3, 4])).toBe(24); });
  test('36. deve manter um valor dentro de um intervalo (clamp)', () => { expect(clamp(5, 0, 10)).toBe(5); });
  test('37. deve verificar se um número é divisível por outro', () => { expect(isDivisivel(10, 2)).toBe(true); });
  test('38. deve converter Celsius para Fahrenheit', () => { expect(celsiusParaFahrenheit(0)).toBe(32); });
  test('39. deve converter Fahrenheit para Celsius', () => { expect(fahrenheitParaCelsius(32)).toBe(0); });
  test('40. deve calcular o inverso de um número', () => { expect(inverso(4)).toBe(0.25); });

  // === Testes para o Bloco 5 (41-50) ===
  test('41. deve calcular a área de um círculo', () => { expect(areaCirculo(10)).toBeCloseTo(314.159); });
  test('42. deve calcular a área de um retângulo', () => { expect(areaRetangulo(5, 4)).toBe(20); });
  test('43. deve calcular o perímetro de um retângulo', () => { expect(perimetroRetangulo(5, 4)).toBe(18); });
  test('44. deve verificar se um número é maior que outro', () => { expect(isMaiorQue(10, 5)).toBe(true); });
  test('45. deve verificar se um número é menor que outro', () => { expect(isMenorQue(5, 10)).toBe(true); });
  test('46. deve verificar se dois números são iguais', () => { expect(isEqual(7, 7)).toBe(true); });
  test('47. deve calcular a mediana de um array ímpar e ordenado', () => { expect(medianaArray([1, 2, 3, 4, 5])).toBe(3); });
  test('48. deve calcular o dobro de um número', () => { expect(dobro(10)).toBe(20); });
  test('49. deve calcular o triplo de um número', () => { expect(triplo(10)).toBe(30); });
  test('50. deve calcular a metade de um número', () => { expect(metade(20)).toBe(10); });
});

// === Testes Adicionais para Matar Mutantes Sobreviventes ===

describe('Testes de Casos de Borda e Edge Cases (Mutation Testing)', () => {
  // --- Bloco 1: Operações Básicas ---
  
  test('soma: deve lidar com zero e negativos', () => {
    expect(soma(0, 0)).toBe(0);
    expect(soma(-1, 1)).toBe(0);
    expect(soma(-5, -3)).toBe(-8);
  });

  test('subtracao: deve lidar com zero, negativos e igualdade', () => {
    expect(subtracao(5, 5)).toBe(0);
    expect(subtracao(0, 5)).toBe(-5);
    expect(subtracao(-5, -3)).toBe(-2);
  });

  test('multiplicacao: deve lidar com zero e negativos', () => {
    expect(multiplicacao(5, 0)).toBe(0);
    expect(multiplicacao(0, 5)).toBe(0);
    expect(multiplicacao(-2, 3)).toBe(-6);
    expect(multiplicacao(-2, -3)).toBe(6);
  });

  test('divisao: deve lançar erro com mensagem correta para divisão por zero', () => {
    expect(() => divisao(5, 0)).toThrow('Divisão por zero não é permitida.');
  });

  test('divisao: deve lidar com negativos e resultado decimal', () => {
    expect(divisao(-10, 2)).toBe(-5);
    expect(divisao(10, -2)).toBe(-5);
    expect(divisao(-10, -2)).toBe(5);
    expect(divisao(7, 2)).toBe(3.5);
  });

  test('potencia: deve lidar com expoente 0, 1 e negativo', () => {
    expect(potencia(5, 0)).toBe(1);
    expect(potencia(5, 1)).toBe(5);
    expect(potencia(2, -1)).toBe(0.5);
    expect(potencia(-2, 3)).toBe(-8);
  });

  test('raizQuadrada: deve lançar erro com mensagem correta para negativo', () => {
    expect(() => raizQuadrada(-1)).toThrow('Não é possível calcular a raiz quadrada de um número negativo.');
  });

  test('raizQuadrada: deve lidar com zero e não quadrados perfeitos', () => {
    expect(raizQuadrada(0)).toBe(0);
    expect(raizQuadrada(2)).toBeCloseTo(Math.sqrt(2));
  });

  test('restoDivisao: deve lidar com divisão exata e negativos', () => {
    expect(restoDivisao(10, 5)).toBe(0);
    expect(restoDivisao(-10, 3)).toBe(-1);
    expect(restoDivisao(10, -3)).toBe(1);
  });

  test('fatorial: deve retornar 1 para 0 e 1', () => {
    expect(fatorial(0)).toBe(1);
    expect(fatorial(1)).toBe(1);
  });

  test('fatorial: deve lançar erro com mensagem correta para negativo', () => {
    expect(() => fatorial(-1)).toThrow('Fatorial não é definido para números negativos.');
  });

  test('fatorial: deve calcular para números maiores', () => {
    expect(fatorial(5)).toBe(120);
    expect(fatorial(6)).toBe(720);
  });

  test('mediaArray: deve retornar 0 para array vazio', () => {
    expect(mediaArray([])).toBe(0);
  });

  test('mediaArray: deve lidar com negativos e decimais', () => {
    expect(mediaArray([-10, 10])).toBe(0);
    expect(mediaArray([1.5, 2.5, 3.0])).toBeCloseTo(7/3);
  });

  test('somaArray: deve retornar 0 para array vazio', () => {
    expect(somaArray([])).toBe(0);
  });

  test('somaArray: deve lidar com negativos', () => {
    expect(somaArray([-1, -2, -3])).toBe(-6);
    expect(somaArray([-5, 5])).toBe(0);
  });

  // --- Bloco 2: Operações em Arrays e Checagens ---
  
  test('maximoArray: deve lançar erro com mensagem correta para array vazio', () => {
    expect(() => maximoArray([])).toThrow('Array vazio не possui valor máximo.');
  });

  test('maximoArray: deve lidar com negativos e único elemento', () => {
    expect(maximoArray([-5, -1, -10])).toBe(-1);
    expect(maximoArray([42])).toBe(42);
  });

  test('minimoArray: deve lançar erro com mensagem correta para array vazio', () => {
    expect(() => minimoArray([])).toThrow('Array vazio не possui valor mínimo.');
  });

  test('minimoArray: deve lidar com negativos e único elemento', () => {
    expect(minimoArray([-5, -1, -10])).toBe(-10);
    expect(minimoArray([42])).toBe(42);
  });

  test('valorAbsoluto: deve lidar com zero', () => {
    expect(valorAbsoluto(0)).toBe(0);
  });

  test('arredondar: deve lidar com .5, negativos e zero', () => {
    expect(arredondar(2.5)).toBe(3);
    expect(arredondar(-2.5)).toBe(-2);
    expect(arredondar(0)).toBe(0);
  });

  test('isPar: deve retornar true para zero e negativos pares', () => {
    expect(isPar(0)).toBe(true);
    expect(isPar(-2)).toBe(true);
    expect(isPar(-100)).toBe(true);
  });

  test('isPar: deve retornar false para ímpares', () => {
    expect(isPar(1)).toBe(false);
    expect(isPar(-1)).toBe(false);
    expect(isPar(99)).toBe(false);
  });

  test('isImpar: deve retornar false para zero e pares', () => {
    expect(isImpar(0)).toBe(false);
    expect(isImpar(2)).toBe(false);
    expect(isImpar(-2)).toBe(false);
  });

  test('isImpar: deve retornar true para negativos ímpares', () => {
    expect(isImpar(-1)).toBe(true);
    expect(isImpar(-3)).toBe(true);
    expect(isImpar(-99)).toBe(true);
  });

  test('calcularPorcentagem: deve lidar com zero e decimais', () => {
    expect(calcularPorcentagem(0, 100)).toBe(0);
    expect(calcularPorcentagem(100, 0)).toBe(0);
    expect(calcularPorcentagem(50, 200)).toBe(100);
    expect(calcularPorcentagem(33.33, 300)).toBeCloseTo(99.99);
  });

  test('aumentarPorcentagem: deve lidar com zero e negativos', () => {
    expect(aumentarPorcentagem(0, 10)).toBe(0);
    expect(aumentarPorcentagem(-100, 10)).toBeCloseTo(-110);
  });

  test('diminuirPorcentagem: deve lidar com zero e negativos', () => {
    expect(diminuirPorcentagem(0, 10)).toBe(0);
    expect(diminuirPorcentagem(-100, 10)).toBeCloseTo(-90);
  });

  test('inverterSinal: deve lidar com zero e negativos', () => {
    expect(inverterSinal(0)).toBe(-0);
    expect(inverterSinal(-42)).toBe(42);
  });

  // --- Bloco 3: Funções Trigonométricas e Logarítmicas ---
  
  test('seno: deve lidar com PI/2, PI e negativos', () => {
    expect(seno(Math.PI / 2)).toBeCloseTo(1);
    expect(seno(Math.PI)).toBeCloseTo(0);
    expect(seno(-Math.PI / 2)).toBeCloseTo(-1);
  });

  test('cosseno: deve lidar com PI/2, PI e negativos', () => {
    expect(cosseno(Math.PI / 2)).toBeCloseTo(0);
    expect(cosseno(Math.PI)).toBeCloseTo(-1);
    expect(cosseno(-Math.PI)).toBeCloseTo(-1);
  });

  test('tangente: deve lidar com PI/4 e valores grandes', () => {
    expect(tangente(Math.PI / 4)).toBeCloseTo(1);
    expect(tangente(Math.PI / 2)).toBeGreaterThan(1e15);
  });

  test('logaritmoNatural: deve retornar -Infinity para zero e NaN para negativos', () => {
    expect(logaritmoNatural(0)).toBe(-Infinity);
    expect(logaritmoNatural(-1)).toBeNaN();
  });

  test('logaritmoNatural: deve lidar com 1 e valores positivos', () => {
    expect(logaritmoNatural(1)).toBe(0);
    expect(logaritmoNatural(Math.E * Math.E)).toBeCloseTo(2);
  });

  test('logaritmoBase10: deve retornar -Infinity para zero e NaN para negativos', () => {
    expect(logaritmoBase10(0)).toBe(-Infinity);
    expect(logaritmoBase10(-1)).toBeNaN();
  });

  test('logaritmoBase10: deve lidar com 1 e potências de 10', () => {
    expect(logaritmoBase10(1)).toBe(0);
    expect(logaritmoBase10(1000)).toBe(3);
  });

  test('arredondarParaBaixo: deve lidar com negativos, zero e inteiros', () => {
    expect(arredondarParaBaixo(-5.1)).toBe(-6);
    expect(arredondarParaBaixo(0)).toBe(0);
    expect(arredondarParaBaixo(5)).toBe(5);
  });

  test('arredondarParaCima: deve lidar com negativos, zero e inteiros', () => {
    expect(arredondarParaCima(-5.9)).toBe(-5);
    expect(arredondarParaCima(0)).toBe(0);
    expect(arredondarParaCima(5)).toBe(5);
  });

  test('hipotenusa: deve lidar com zeros', () => {
    expect(hipotenusa(0, 0)).toBe(0);
    expect(hipotenusa(0, 5)).toBe(5);
    expect(hipotenusa(5, 0)).toBe(5);
  });

  test('grausParaRadianos: deve lidar com 0, 360 e negativos', () => {
    expect(grausParaRadianos(0)).toBe(0);
    expect(grausParaRadianos(360)).toBeCloseTo(2 * Math.PI);
    expect(grausParaRadianos(-180)).toBeCloseTo(-Math.PI);
  });

  test('radianosParaGraus: deve lidar com 0, 2PI e negativos', () => {
    expect(radianosParaGraus(0)).toBe(0);
    expect(radianosParaGraus(2 * Math.PI)).toBeCloseTo(360);
    expect(radianosParaGraus(-Math.PI)).toBeCloseTo(-180);
  });

  // --- Bloco 4: Teoria dos Números e Sequências ---
  
  test('mdc: deve lidar com zeros, negativos e primos relativos', () => {
    expect(mdc(0, 5)).toBe(5);
    expect(mdc(5, 0)).toBe(5);
    expect(mdc(-10, 5)).toBe(5);
    expect(mdc(7, 13)).toBe(1);
  });

  test('mmc: deve lidar com zeros', () => {
    expect(mmc(0, 5)).toBe(0);
    expect(mmc(5, 0)).toBe(0);
  });

  test('isPrimo: deve retornar false para 0, 1 e negativos', () => {
    expect(isPrimo(0)).toBe(false);
    expect(isPrimo(1)).toBe(false);
    expect(isPrimo(-5)).toBe(false);
  });

  test('isPrimo: deve retornar true para 2 e primos, false para compostos', () => {
    expect(isPrimo(2)).toBe(true);
    expect(isPrimo(3)).toBe(true);
    expect(isPrimo(4)).toBe(false);
    expect(isPrimo(9)).toBe(false);
    expect(isPrimo(15)).toBe(false);
  });

  test('fibonacci: deve retornar 0 para 0, 1 para 1', () => {
    expect(fibonacci(0)).toBe(0);
    expect(fibonacci(1)).toBe(1);
  });

  test('fibonacci: deve calcular termos iniciais corretamente', () => {
    expect(fibonacci(2)).toBe(1);
    expect(fibonacci(3)).toBe(2);
    expect(fibonacci(4)).toBe(3);
    expect(fibonacci(5)).toBe(5);
    expect(fibonacci(6)).toBe(8);
  });

  test('produtoArray: deve retornar 1 para array vazio', () => {
    expect(produtoArray([])).toBe(1);
  });

  test('produtoArray: deve lidar com zero, negativos e único elemento', () => {
    expect(produtoArray([0, 1, 2])).toBe(0);
    expect(produtoArray([-1, 2, -3])).toBe(6);
    expect(produtoArray([5])).toBe(5);
  });

  test('clamp: deve retornar min quando valor < min', () => {
    expect(clamp(-1, 0, 10)).toBe(0);
    expect(clamp(-100, 0, 10)).toBe(0);
  });

  test('clamp: deve retornar max quando valor > max', () => {
    expect(clamp(15, 0, 10)).toBe(10);
    expect(clamp(100, 0, 10)).toBe(10);
  });

  test('clamp: deve retornar valor quando dentro do intervalo (boundaries)', () => {
    expect(clamp(0, 0, 10)).toBe(0);
    expect(clamp(10, 0, 10)).toBe(10);
    expect(clamp(5, 0, 10)).toBe(5);
  });

  test('clamp: deve lidar com min > max (comportamento: compara diretamente com params)', () => {
    // Quando min > max, a função compara valor < min e valor > max diretamente
    expect(clamp(5, 10, 0)).toBe(10);   // 5 < 10 => retorna min (10)
    expect(clamp(15, 10, 0)).toBe(0);   // 15 > 0 => retorna max (0)
    expect(clamp(-5, 10, 0)).toBe(10);  // -5 < 10 => retorna min (10)
  });

  test('isDivisivel: deve retornar false para não divisíveis', () => {
    expect(isDivisivel(10, 3)).toBe(false);
    expect(isDivisivel(7, 2)).toBe(false);
  });

  test('isDivisivel: deve lidar com zero e negativos', () => {
    expect(isDivisivel(0, 5)).toBe(true);
    expect(isDivisivel(-10, 2)).toBe(true);
    expect(isDivisivel(10, -2)).toBe(true);
  });

  test('celsiusParaFahrenheit: deve lidar com ponto de congelamento, ebulição e negativos', () => {
    expect(celsiusParaFahrenheit(0)).toBe(32);
    expect(celsiusParaFahrenheit(100)).toBe(212);
    expect(celsiusParaFahrenheit(-40)).toBe(-40);
  });

  test('fahrenheitParaCelsius: deve lidar com ponto de congelamento, ebulição e -40', () => {
    expect(fahrenheitParaCelsius(32)).toBe(0);
    expect(fahrenheitParaCelsius(212)).toBe(100);
    expect(fahrenheitParaCelsius(-40)).toBe(-40);
  });

  test('inverso: deve lançar erro com mensagem correta para zero', () => {
    expect(() => inverso(0)).toThrow('Não é possível inverter o número zero.');
  });

  test('inverso: deve lidar com negativos e frações', () => {
    expect(inverso(-4)).toBe(-0.25);
    expect(inverso(0.5)).toBe(2);
    expect(inverso(2)).toBe(0.5);
  });

  // --- Bloco 5: Geometria e Lógica de Comparação ---
  
  test('areaCirculo: deve lidar com raio zero', () => {
    expect(areaCirculo(0)).toBe(0);
  });

  test('areaCirculo: deve lidar com raio negativo (retorna área positiva)', () => {
    expect(areaCirculo(-5)).toBeCloseTo(areaCirculo(5));
  });

  test('areaRetangulo: deve lidar com zero e negativos', () => {
    expect(areaRetangulo(0, 5)).toBe(0);
    expect(areaRetangulo(5, 0)).toBe(0);
    expect(areaRetangulo(-5, 4)).toBe(-20);
  });

  test('perimetroRetangulo: deve lidar com zero e negativos', () => {
    expect(perimetroRetangulo(0, 0)).toBe(0);
    expect(perimetroRetangulo(5, 0)).toBe(10);
    expect(perimetroRetangulo(-5, 4)).toBe(-2);
  });

  test('isMaiorQue: deve retornar false para igualdade e menor', () => {
    expect(isMaiorQue(5, 5)).toBe(false);
    expect(isMaiorQue(5, 10)).toBe(false);
    expect(isMaiorQue(-5, -3)).toBe(false);
  });

  test('isMaiorQue: deve lidar com negativos corretamente', () => {
    expect(isMaiorQue(-3, -5)).toBe(true);
    expect(isMaiorQue(0, -1)).toBe(true);
  });

  test('isMenorQue: deve retornar false para igualdade e maior', () => {
    expect(isMenorQue(5, 5)).toBe(false);
    expect(isMenorQue(10, 5)).toBe(false);
    expect(isMenorQue(-3, -5)).toBe(false);
  });

  test('isMenorQue: deve lidar com negativos corretamente', () => {
    expect(isMenorQue(-5, -3)).toBe(true);
    expect(isMenorQue(-1, 0)).toBe(true);
  });

  test('isEqual: deve retornar false para diferentes', () => {
    expect(isEqual(5, 4)).toBe(false);
    expect(isEqual(0, -0)).toBe(true);
    expect(isEqual(NaN, NaN)).toBe(false);
  });

  test('isEqual: deve lidar com tipos diferentes', () => {
    expect(isEqual(5, '5')).toBe(false);
    expect(isEqual(null, undefined)).toBe(false);
  });

  test('medianaArray: deve lançar erro com mensagem correta para array vazio', () => {
    expect(() => medianaArray([])).toThrow('Array vazio не possui mediana.');
  });

  test('medianaArray: deve calcular para array par', () => {
    expect(medianaArray([1, 2, 3, 4])).toBe(2.5);
    expect(medianaArray([10, 20])).toBe(15);
  });

  test('medianaArray: deve calcular para array não ordenado', () => {
    expect(medianaArray([5, 1, 3])).toBe(3);
    expect(medianaArray([9, 1, 5, 3, 7])).toBe(5);
  });

  test('medianaArray: deve lidar com único elemento e dois elementos', () => {
    expect(medianaArray([42])).toBe(42);
    expect(medianaArray([1, 2])).toBe(1.5);
  });

  test('medianaArray: deve lidar com negativos e duplicatas', () => {
    expect(medianaArray([-5, -1, -3])).toBe(-3);
    expect(medianaArray([2, 2, 2])).toBe(2);
    expect(medianaArray([1, 2, 2, 3])).toBe(2);
  });

  test('dobro: deve lidar com zero, negativos e decimais', () => {
    expect(dobro(0)).toBe(0);
    expect(dobro(-5)).toBe(-10);
    expect(dobro(2.5)).toBe(5);
  });

  test('triplo: deve lidar com zero, negativos e decimais', () => {
    expect(triplo(0)).toBe(0);
    expect(triplo(-5)).toBe(-15);
    expect(triplo(2.5)).toBe(7.5);
  });

  test('metade: deve lidar com zero, negativos e ímpares', () => {
    expect(metade(0)).toBe(0);
    expect(metade(-10)).toBe(-5);
    expect(metade(5)).toBe(2.5);
  });
});