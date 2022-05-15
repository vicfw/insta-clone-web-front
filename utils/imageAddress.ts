const imageAddress = (address: string) => {
  return `${process.env.API_URI}${address}`;
};

export default imageAddress;
