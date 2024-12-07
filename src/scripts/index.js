document.addEventListener('alpine:init', () => {
  Alpine.data('ingredientsFilterSection', () => ({
    ingredient: '',
    ingredientsToFilter: [],

    addIngredient(ingredient) {
      this.ingredientsToFilter.push(ingredient);
      this.ingredient = '';
    },
    removeIngredient(ingredient) {
      this.ingredientsToFilter.splice(
        this.ingredientsToFilter.indexOf(ingredient),
        1
      );
    },
  }));
});
