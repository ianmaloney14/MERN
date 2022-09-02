const pokémon = Object.freeze([
  { id: 1, name: "Bulbasaur", types: ["poison", "grass"] },
  { id: 5, name: "Charmeleon", types: ["fire"] },
  { id: 9, name: "Blastoise", types: ["water"] },
  { id: 12, name: "Butterfree", types: ["bug", "flying"] },
  { id: 16, name: "Pidgey", types: ["normal", "flying"] },
  { id: 23, name: "Ekans", types: ["poison"] },
  { id: 24, name: "Arbok", types: ["poison"] },
  { id: 25, name: "Pikachu", types: ["electric"] },
  { id: 37, name: "Vulpix", types: ["fire"] },
  { id: 52, name: "Meowth", types: ["normal"] },
  { id: 63, name: "Abra", types: ["psychic"] },
  { id: 67, name: "Machamp", types: ["fighting"] },
  { id: 72, name: "Tentacool", types: ["water", "poison"] },
  { id: 74, name: "Geodude", types: ["rock", "ground"] },
  { id: 87, name: "Dewgong", types: ["water", "ice"] },
  { id: 98, name: "Krabby", types: ["water"] },
  { id: 115, name: "Kangaskhan", types: ["normal"] },
  { id: 122, name: "Mr. Mime", types: ["psychic"] },
  { id: 133, name: "Eevee", types: ["normal"] },
  { id: 144, name: "Articuno", types: ["ice", "flying"] },
  { id: 145, name: "Zapdos", types: ["electric", "flying"] },
  { id: 146, name: "Moltres", types: ["fire", "flying"] },
  { id: 148, name: "Dragonair", types: ["dragon"] },
]);

const bListPkmn = pokémon.filter((p) => p.name[0] === "B");
const pkmnIds = pokémon.map((p) => p.id);
// id divisible by 3
const idByThree = pokémon.filter((p) => p.id % 2 !== 0);
// fire type pokémon
const getFireType = pokémon.filter((p) => p.types[0] === "fire");
// find pokémon with more than 1 type
const multipleTypes = pokémon.filter((p) => p.types[1]);
// just the names of the pokémon
const justTheNames = pokémon.map((p) => p.name);
// id over 99, just the names
const namesOver99 = pokémon.filter((p) => p.id > 99).map((p) => p.name);
// just the names of poison type pokémon
const justPoison = pokémon
  .filter((p) => p.types[0] === "poison")
  .map((p) => p.name);
//first type of flying type pokémon
const flyingTypes = pokémon
  .filter((p) => p.types[1] === "flying")
  .map((p) => p.types[0]);
//count of the normal type pokémon
const normalTypeCount = pokémon.filter((p) =>
  p.types.includes("normal")
).length;

// PRINT THE FUNCTIONS
// console.log(bListPkmn);
// console.log(pkmnIds);
// console.log(idByThree);
// console.log(getFireType);
// console.log(multipleTypes);
// console.log(justTheNames);
// console.log(namesOver99);
// console.log(justPoison);
// console.log(flyingTypes);
// console.log(normalTypeCount);
