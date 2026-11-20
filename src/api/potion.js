const API_URL = "/api/potions";

const getPotions = async () => {
  const response = await fetch(API_URL);
  return response.json();
};

const createPotions = async (potion) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(potion),
  });

  return response.json();
};

export { getPotions, createPotions };
