const cityArray = [
  "Омск",
  "Москва",
  "Казань",
  "Новосибирск",
  "Новокузнецк",
  "Владивосток",
  "Красноярск",
  "Кемерово",
  "Челябинск",
  "Екатеринбург",
  "Тюмень",
];

function FunctionComponent() {
  return (
    <ul>
      {cityArray.map((city) => (
        <li key={city}>{city}</li>
      ))}
    </ul>
  );
}

export default FunctionComponent;
