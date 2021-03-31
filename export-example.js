// 💁 We can label any declaration as exported by placing export before it, be it a variable, function, or a class.

const subscriptionPlans = [
  'BasicMonthly',
  'BasicYearly',
  'PremiumMonthly',
  'PremiumYearly',
];

/**
 * 🗒️ Most JavaScript style guides don't recommend semicolons after function and class declarations
 *
 */
function getSecretId() {
  return Math.floor(Math.random() * 1000);
}

function getNameParts(fullName) {
  const result = {
    firstName: '',
    lastName: '',
    middleName: '',
    id: getSecretId(),
  };
  const parts = fullName.split(' ');
  if (parts.length < 1) {
    throw new Error(`Expected ${fullName} to be non-empty string`);
  }
  if (parts.length === 1) {
    const [firstName] = parts;
    return { ...result, firstName };
  }
  if (parts.length === 2) {
    const [firstName, lastName] = parts;
    return { ...result, firstName, lastName };
  }
  const middleName = parts.splice(1, parts.length - 2).join(' ');
  const [firstName, lastName] = parts;
  return { firstName, middleName, lastName };
}

class User {
  constructor(name) {
    this.name = name;
  }
}

export { subscriptionPlans, User as MyUser, getNameParts };
// We can put Export separately
// TODO

// Export "as"
//TODO

// Export default
//TODO

/**
 * 💁 Technically, We may have both default and named exports in a single module, but its not a good practice to mix
 * them. A module should have either named export or the default one
 * 💁 As there may be at most one default export per file, the exported entity may have no name.
 *
 */

// The "default" name
// TODO

// Default export convention
// TODO
