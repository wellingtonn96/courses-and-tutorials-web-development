const formatValue = (value: number): string => {
  const formatedvalue = new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);

  return formatedvalue;
};

export default formatValue;
