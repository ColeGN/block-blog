// import React, { useState } from "react";

//  export const Countries = ({ countries }) => {
//   return (
//     <div>
//       {countries.map((country, index) => (
//         <p key={index}>{country.name}</p>
//       ))}
//     </div>
//   );
// };

// const App = () => {
//     const [countries, setCountries] = useState([
//       { name: "Colombia", code: "CO" },
//       { name: "Costa Rica", code: "CR" },
//       { name: "Cuba", code: "CU" },
//       // ... more countries
//     ]);

//   const [searchQuery, setSearchQuery] = useState("");

//   const handleSearch = (event) => {
//     setSearchQuery(event.target.value);
//   };

//   const filteredCountries = countries.filter((country) =>
//     country.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div>
//       <input type="text" value={searchQuery} onChange={handleSearch} />
//       <button>Search</button>
//       <Countries countries={filteredCountries} />
//     </div>
//   );
// };

// export default App;
