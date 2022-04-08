const notes = new Array(16).fill(1).map((_, i) => ({
  id: Date.now() + i,
  title: `This is note ${i}`,
}));

export default notes;
