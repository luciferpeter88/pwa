export function stepsToDistance(steps) {
  const meters = steps * 0.78;
  return meters.toFixed(0); // or use (meters / 1000).toFixed(2) + " km"
}
