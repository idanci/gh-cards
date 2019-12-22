import React from 'react';
import Card from './Card';

const testData = [
  {name: "Ivan Danci", avatar_url: "https://avatars2.githubusercontent.com/u/2598910?v=4", company: "Endava"},
  {name: "David Heinemeier Hansson", avatar_url: "https://avatars0.githubusercontent.com/u/2741?v=4", company: "Basecamp"},
];

const CardList = (props) => (
  <div>
    {testData.map(profile => <Card {...profile}/>)}
  </div>
);

export default CardList;
