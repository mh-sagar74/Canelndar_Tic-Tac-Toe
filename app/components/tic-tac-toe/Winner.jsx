export default function Winner({ isWin, winner }) {
  return (
    <div>
      <div>
        {isWin ? (
          <div className="text-4xl bg-green-100 rounded-sm">
            Winner is : <span className="text-red-500 font-bold">{winner}</span>
          </div>
        ) : null}
      </div>
    </div>
  );
}
