export default (fileSize: number) => {
  const _size = Math.floor(fileSize / 1000000);
  return _size;
};
