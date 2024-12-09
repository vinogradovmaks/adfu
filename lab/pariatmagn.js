function format(rows, columns) {
  let result = '';
  for (let i = 0; i < rows.length; i++) {
    for (let j = 0; j < columns.length; j++) {
      result += `${rows[i][j]} `;
    }
    result += '\n';
  }
  return result;
}
