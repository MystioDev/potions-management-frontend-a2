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

const deletePotions = async (id) => {
  const response = await fetch(API_URL + "/" + id, {
    method: "DELETE",
  });
  return response.json();
};

const updatePotions = async ({ id, name, effect, isDangerous }) => {
  const response = await fetch(API_URL + "/" + id, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, effect, isDangerous }),
  });
  return response.json();
};

export { getPotions, createPotions, deletePotions, updatePotions };
