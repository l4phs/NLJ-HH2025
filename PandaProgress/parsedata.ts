import * as fs from 'fs';

const filePath = 'PandaProgress\\assets\\OutputCSV.csv'; // Use double backslashes to escape the backslash


const convertCSVToArray = (filePath: string): string[] => {
  const data = fs.readFileSync(filePath, 'utf-8');
  const rows = data.split('\n');
  return rows.filter(row => row.trim() !== '');  
};
const result = convertCSVToArray(filePath);
const resultStringWithNewlines = result.join('\r\n');  
console.log(resultStringWithNewlines)

