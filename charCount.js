const charCountOld = (str) => {
  const count = {};
  for (let i = 0; i < str.length; i++) {
    const char = str[i].toLowerCase();
    if (count[char]) {
      count[char]++;
    } else {
      count[char] = 1;
    }
  }
  return count;
};

const charCountNew = (str) => {
  const count = {};
  for (const char of str.toLowerCase()) {
    count[char] = (count[char] ?? 0) + 1;
  }
  return count;
};

const charCountWithMap = (str) => {
  const count = new Map();
  for (const char of str.toLowerCase()) {
    count.set(char, (count.get(char) ?? 0) + 1);
  }
  return Object.fromEntries(count);
};

const str = "Banana".repeat(1000000);

// Test
console.time("Old For Loop");
charCountOld(str);
console.timeEnd("Old For Loop");

console.time("New For-Of Loop");
charCountNew(str);
console.timeEnd("New For-Of Loop");

console.time("Map Version");
charCountWithMap(str);
console.timeEnd("Map Version");
