/**
 * Photography used inside the project mockups.
 * Real food/interior photography (Pexels) so the mock websites look like
 * actual restaurant sites instead of empty grey boxes.
 */

const photo = (id, w, h) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=${w}&h=${h}`;

export const PHOTOS = {
  // Pizza Ora
  pizzaHero: photo(17932142, 1100, 820),
  pizzaA: photo(19260826, 420, 420),
  pizzaB: photo(33592997, 420, 420),

  // Sushi Hero DZ
  sushiHero: photo(31393439, 1200, 860),
  sushiA: photo(37356451, 420, 420),
  sushiB: photo(8672034, 420, 420),

  // Crousty Takawa
  chickenHero: photo(30645224, 1100, 820),
  chickenA: photo(33569112, 420, 420),
  chickenB: photo(27643007, 420, 420),

  // Café Sahel
  cafeHero: photo(33094653, 1100, 820),
  cafeA: photo(35829302, 420, 420),
  cafeB: photo(16999510, 420, 420),
};
