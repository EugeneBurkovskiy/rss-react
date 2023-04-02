export interface IData {
  results: ICharacter[];
}
export interface ICharacter {
  created: Date;
  episode: string[];
  gender: string;
  id: number;
  image: string;
  location: {
    name: string;
    url: string;
  };
  name: string;
  origin: {
    name: string;
    url: string;
  };
  species: string;
  status: string;
  url: string;
}
export default async function getData(query = '') {
  const url = encodeURI(`https://rickandmortyapi.com/api/character/?name=${query}`);
  const response = await fetch(url);
  if (response.ok) {
    const result: Promise<IData> = response.json();
    return result;
  } else {
    return null;
  }
}
