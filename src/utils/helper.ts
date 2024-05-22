// make a number converter to currency format like 1000000 to Rp1.000.000
export const currencyIDR = (number: number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR'
  }).format(number)
}