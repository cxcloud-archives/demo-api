const { generatePassword, getConfig } = require('@buttercup/generator');

export async function generateOrderNumber() {
  try {
    const config = getConfig();
    config.randomCharacters.length = 5;
    config.randomCharacters.enabledCharacterSets = ['DIGITS'];
    return await generatePassword(config);
  } catch (err) {}
  return null;
}
