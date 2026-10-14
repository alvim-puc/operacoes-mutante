# Plano de Execução: Laboratório de Teste de Mutação com StrykerJS

## Visão Geral do Projeto
- **50 funções** em `src/operacoes.js` (5 blocos de 10)
- **50 testes básicos** em `test/operacoes.test.js` - um por função, mas fracos
- **Meta**: >98% Mutation Score

---

## Fase 1: Preparação e Baseline (15 min)

### 1.1 Verificar ambiente atual
```bash
npm test              # Verificar se testes passam
npm run coverage      # Obter cobertura inicial (esperado: ~100%)
```

### 1.2 Instalar StrykerJS
```bash
npm install --save-dev @stryker-mutator/core @stryker-mutator/jest-runner
npx stryker init      # Aceitar defaults: Jest, JavaScript, ESM
```

### 1.3 Executar primeira rodada de mutação
```bash
npx stryker run
```
- Salvar: Mutation Score inicial, relatório HTML em `reports/mutation/mutation.html`
- Identificar mutantes sobreviventes (Survived)

---

## Fase 2: Análise de Mutantes Sobreviventes (30 min)

### 2.1 Abrir relatório HTML e categorizar sobreviventes
Principais padrões esperados de mutantes sobreviventes:

| Categoria | Funções Afetadas | Causa Raiz |
|-----------|------------------|------------|
| **Boundary/Edge cases** | `isMaiorQue`, `isMenorQue`, `isEqual`, `clamp` | Sem teste para igualdade/limites |
| **Casos de erro** | `divisao`, `raizQuadrada`, `fatorial`, `inverso`, `maximoArray`, `minimoArray`, `medianaArray` | Teste só verifica se lança, não o tipo/mensagem |
| **Valores especiais** | `isPar`, `isImpar`, `isPrimo`, `fibonacci` | Sem teste para 0, 1, negativos |
| **Operadores aritméticos** | `soma`, `subtracao`, `multiplicacao`, `potencia`, `restoDivisao` | Mutação de `+`→`-`, `*`→`/`, etc. não detectada |
| **Arrays vazios** | `mediaArray`, `somaArray`, `produtoArray`, `maximoArray`, `minimoArray`, `medianaArray` | Comportamento em array vazio não testado |
| **Matemática especial** | `logaritmoNatural`, `logaritmoBase10`, `tangente` | Domínio inválido não testado |

### 2.2 Selecionar 2-3 mutantes críticos para o relatório escrito
Critério: mutantes que representam falhas reais de lógica de negócio

---

## Fase 3: Fortalecimento da Suíte de Testes (60-90 min)

### 3.1 Estratégia por categoria

#### A. Testes de Boundary/Comparação
```javascript
// isMaiorQue, isMenorQue, isEqual
expect(isMaiorQue(5, 5)).toBe(false);  // igualdade
expect(isMaiorQue(5, 5)).toBe(false);  // boundary
expect(isMenorQue(5, 5)).toBe(false);
expect(isEqual(5, 5)).toBe(true);
expect(isEqual(5, 4)).toBe(false);
```

#### B. Testes de Casos de Erro (mensagem + tipo)
```javascript
// divisao, raizQuadrada, fatorial, inverso
expect(() => divisao(5, 0)).toThrow('Divisão por zero não é permitida.');
expect(() => raizQuadrada(-1)).toThrow('Não é possível calcular a raiz quadrada de um número negativo.');
expect(() => fatorial(-1)).toThrow('Fatorial não é definido para números negativos.');
expect(() => inverso(0)).toThrow('Não é possível inverter o número zero.');
```

#### C. Arrays Vazios
```javascript
expect(mediaArray([])).toBe(0);
expect(somaArray([])).toBe(0);
expect(produtoArray([])).toBe(1);
expect(() => maximoArray([])).toThrow('Array vazio не possui valor máximo.');
expect(() => minimoArray([])).toThrow('Array vazio не possui valor mínimo.');
expect(() => medianaArray([])).toThrow('Array vazio не possui mediana.');
```

#### D. Valores Especiais (0, 1, negativos)
```javascript
// isPar/isImpar
expect(isPar(0)).toBe(true);
expect(isImpar(0)).toBe(false);
expect(isPar(-2)).toBe(true);
expect(isImpar(-3)).toBe(true);

// isPrimo
expect(isPrimo(0)).toBe(false);
expect(isPrimo(1)).toBe(false);
expect(isPrimo(2)).toBe(true);
expect(isPrimo(-5)).toBe(false);

// fibonacci
expect(fibonacci(0)).toBe(0);
expect(fibonacci(1)).toBe(1);
```

#### E. Operadores Aritméticos (múltiplos casos)
```javascript
// soma - testar com negativos, zeros
expect(soma(-1, 1)).toBe(0);
expect(soma(0, 0)).toBe(0);
expect(soma(-5, -3)).toBe(-8);

// subtracao
expect(subtracao(5, 5)).toBe(0);
expect(subtracao(0, 5)).toBe(-5);

// multiplicacao
expect(multiplicacao(5, 0)).toBe(0);
expect(multiplicacao(-2, 3)).toBe(-6);
expect(multiplicacao(-2, -3)).toBe(6);

// potencia
expect(potencia(2, 0)).toBe(1);
expect(potencia(5, 1)).toBe(5);
expect(potencia(2, -1)).toBe(0.5);

// restoDivisao
expect(restoDivisao(10, 5)).toBe(0);
expect(restoDivisao(-10, 3)).toBe(-1); // JS behavior
```

#### F. Funções Trigonométricas/Logarítmicas
```javascript
// logaritmoNatural/Base10 - domínio inválido
expect(() => logaritmoNatural(0)).toThrow();
expect(() => logaritmoNatural(-1)).toThrow();
expect(() => logaritmoBase10(0)).toThrow();
expect(() => logaritmoBase10(-1)).toThrow();

// tangente - assintotas
expect(tangente(Math.PI/2)).toBeCloseTo(1.633e16); // grande mas não Infinity
```

#### G. clamp - boundaries
```javascript
expect(clamp(5, 0, 10)).toBe(5);    // dentro
expect(clamp(-1, 0, 10)).toBe(0);   // abaixo → min
expect(clamp(15, 0, 10)).toBe(10);  // acima → max
expect(clamp(0, 0, 10)).toBe(0);    // boundary min
expect(clamp(10, 0, 10)).toBe(10);  // boundary max
```

#### H. medianArray - par/ímpar, não ordenado
```javascript
expect(medianaArray([1, 2, 3, 4])).toBe(2.5);  // par
expect(medianaArray([5, 1, 3])).toBe(3);       // não ordenado
expect(medianaArray([10])).toBe(10);           // single element
```

#### I. Geometria - edge cases
```javascript
expect(areaCirculo(0)).toBe(0);
expect(areaRetangulo(0, 5)).toBe(0);
expect(perimetroRetangulo(0, 0)).toBe(0);
```

### 3.2 Ciclo de validação contínua
```bash
# Após cada bloco de testes adicionados:
npm test                    # Verificar se passam com código original
npx stryker run            # Verificar progresso do Mutation Score
```

---

## Fase 4: Validação Final e Entrega (15 min)

### 4.1 Execução final
```bash
npx stryker run
```
- Confirmar Mutation Score > 98%
- Salvar relatório HTML final

### 4.2 Commit e Push
```bash
git add .
git commit -m "feat: strengthen test suite to achieve >98% mutation score"
git push origin main
```

### 4.3 Gerar relatório escrito (PDF)
Estrutura conforme enunciado:
1. **Capa**: Disciplina, trabalho, nome, matrícula
2. **Análise Inicial**: Cobertura vs Mutation Score inicial + discussão
3. **Análise de Mutantes Críticos**: 2-3 mutantes com screenshots, explicação
4. **Solução Implementada**: Novos testes + justificativa
5. **Resultados Finais**: Mutation Score final, evidência de melhoria
6. **Conclusão**: Reflexão sobre teste de mutação vs cobertura

---

## Checklist de Validação

- [ ] `npm test` passa (100% testes originais + novos)
- [ ] `npm run coverage` mostra cobertura alta (provavelmente 100%)
- [ ] `npx stryker run` mostra **Mutation Score > 98%**
- [ ] Relatório HTML final salvo
- [ ] Commits com testes novos no GitHub
- [ ] PDF do relatório escrito gerado

---

## Riscos e Mitigações

| Risco | Mitigação |
|-------|-----------|
| Stryker não detecta Jest corretamente | Verificar `stryker.conf.json` tem `"testRunner": "jest"` |
| Mutantes "equivalent" (falsos positivos) | Identificar e configurar `mutator.exclude` se necessário |
| Timeout em fibonacci recursivo | Stryker tem timeout default; se travar, aumentar em config |
| Muitos mutantes sobreviventes (>50) | Priorizar por impacto: operadores lógicos > aritméticos simples |

---

## Arquivos a Modificar
- `test/operacoes.test.js` - **único arquivo de código a alterar**
- `stryker.conf.json` - gerado automaticamente, ajustar se necessário
- `package.json` - só para adicionar scripts se desejado

---

## Tempo Estimado Total: ~2 horas