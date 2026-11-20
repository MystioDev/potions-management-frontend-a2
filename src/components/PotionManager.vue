<script setup>
import { effect } from "vue";
import { createPotions, getPotions } from "../api/potion";
</script>

<script>
export default {
  name: "PotionManager",
  data() {
    return {
      potions: [],

      newPotion: {
        name: "",
        effect: "",
        isDangerous: false,
      },
    };
  },

  methods: {
    async loadPotions() {
      this.potions = await getPotions();
    },

    async submitCreatePotion() {
      await createPotions(this.newPotion);
      await this.loadPotions();
    },
  },

  mounted() {
    this.loadPotions();
  },
};
</script>

<template>
  <form @submit.prevent="submitCreatePotion">
    <label for="name">Name:</label>
    <input v-model="newPotion.name" type="text" name="name" /><br />

    <label for="effect">Effect:</label>
    <input v-model="newPotion.effect" type="text" name="effect" /><br />

    <label for="isDangerous">isDangerous</label>
    <input v-model="newPotion.isDangerous" type="checkbox" name="isDangerous" />

    <button type="submit">Létrehozás</button>
  </form>

  <table>
    <thead>
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Effect</th>
        <th>isDangerous</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="potion in potions" :key="potion.id">
        <td>{{ potion.id }}</td>
        <td>{{ potion.name }}</td>
        <td>{{ potion.effect }}</td>
        <td>{{ potion.isDangerous ? "igen" : "nem" }}</td>
      </tr>
    </tbody>
  </table>
</template>
