export default function winningCondition(boxes) {
  const conditions = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < conditions.length; i++) {
    const [a, b, c] = conditions[i];
    if (boxes[a] && boxes[a] === boxes[b] && boxes[b] === boxes[c]) {
      return boxes[a];
    }
  }
  return null;
}
