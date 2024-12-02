const cityArray = [
  {
    city: "Омск",
    id: 1,
  },
  {
    city: "Москва",
    id: 2,
  },
  {
    city: "Новосибирск",
    id: 3,
  },
  {
    city: "Казань",
    id: 4,
  },
  {
    city: "Томск",
    id: 5,
  },
  {
    city: "Челябинск",
    id: 6,
  },
  {
    city: "Екатеринбург",
    id: 7,
  },
  {
    city: "Кемерово",
    id: 8,
  },
  {
    city: "Тюмень",
    id: 9,
  },
];

function FunctionComponent() {
  return (
    <ul>
      {cityArray.map(({ city, id }) => (
        <li key={id}>{city}</li>
      ))}
    </ul>
  );
}

export default FunctionComponent;
