// Prices for standard robes, in AUD including GST.
//
// Two ways to set a price (a layout-specific price wins over a size price):
//   1. By size, for every layout at that size:   'built-in-2000-2040': 1450,
//   2. For one layout:                           'bi-2000-2040-du-dh-bos': 1590,
//
// Types are 'built-in' (existing cavity) and 'end-gable' (with end panel).
// Layout ids are shown on each card in the browser (hover the drawing) and
// listed by `npm run robes:list`. Any robe without a price shows
// "Price on request" and can still be ordered.
export const prices: Record<string, number> = {
  // 'built-in-1200-1800': 0,
  // 'built-in-1200-2040': 0,
  // 'end-gable-1200-1800': 0,
};
