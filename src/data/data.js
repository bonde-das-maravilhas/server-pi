const lines = [
  { line: 'lilás', lineNumber: 5, color: '#794E9F' },
  { line: 'verde', lineNumber: 2, color: '#009739' },
  { line: 'azul', lineNumber: 1, color: '#005AA9' },
  { line: 'amarela', lineNumber: 4, color: '#FFD100' },
  { line: 'vermelha', lineNumber: 3, color: '#E41E26' },
  { line: 'laranja', lineNumber: 6, color: '#FF7A00' },
  { line: 'rubi', lineNumber: 7, color: '#A01866' },
  { line: 'diamante', lineNumber: 8, color: '#9F9F94' },
  { line: 'esmeralda', lineNumber: 9, color: '#00A398' },
  { line: 'turquesa', lineNumber: 10, color: '#007C8F' },
  { line: 'coral', lineNumber: 11, color: '#FF5C00' },
  {line: 'safira', lineNumber: 12, color: '#005AA9' },
  {line: 'jade', lineNumber: 13, color: '#00A398' },
  { line: 'prata', lineNumber: 15, color: '#9F9F94' },
  { line: 'ouro', lineNumber: 17, color: '#928058' },
];

export function getLines() {
    return lines;
  }

  export function searchLines(param) {
  if (!param) {
    return [];
  }

  const lowerParam = param.toLowerCase();

  return lines.filter((item) => item.line.toLowerCase().includes(lowerParam));
}

