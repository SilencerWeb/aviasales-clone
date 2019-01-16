import axios from 'axios';


export const getAutocompleteVariants = ({ term, locale = 'ru', types = ['city'] }) => {
  const typesAsString = types.reduce((types, type) => types + `,${type}`);

  return axios.get(`http://autocomplete.travelpayouts.com/places2?term=${term}&locale=${locale}&types[]=${typesAsString}`);
};