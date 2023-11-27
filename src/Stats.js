export default function Stats({ items }) {
  if (!items.length) {
    console.log("hello");
    return (
      <p className="stats">Start adding some items to your packing list!</p>
    );
  }
  const numItems = items.length; // derived state
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      {percentage === 100
        ? "You got everything ready to go!"
        : `💼 You have packed ${numItems} items on your list, and you have already
        packed ${numPacked} (${percentage}%)!`}
      <em></em>
    </footer>
  );
}
