import React, { useCallback, useEffect, useState } from "react";

const Square = React.memo(function Square({ 
  value, 
  label, 
  onChange 
}: {
  value: string;
  label: number;
  onChange: (element: any) => void;
}) {
  console.log(value, label, "DATA???", Date.now());
  return (
    <button 
      className="border-red-500 border text-yellow-300 w-16 h-16" 
      value={label} 
      onClick={(e) => onChange(e)}
    >
      {value !== "" ? value : " "}
    </button>
  );
}, (prevProps, nextProps) => {
  // Only re-render if the value for this specific square changes
  return prevProps.value === nextProps.value;
});

export default function TicTacToe() {
  const [user, setUser] = useState(1);
  const [grid, setGrid] = useState<string[]>(() =>
    Array.from({ length: 9 }, () => "")
  );

  useEffect(() => {
    console.log(grid, "Updated Grid");
  }, [grid]);

  const handleChange = useCallback((element: React.ChangeEvent<HTMLButtonElement>) => {
    const index = parseInt(element.currentTarget.value);
    
    // Don't allow overwriting existing moves
    if (grid[index] !== "") return;
    
    setGrid(prevGrid => {
      const newArr = [...prevGrid];
      newArr[index] = user === 1 ? "X" : "O";
      return newArr;
    });

    setUser(prevUser => prevUser === 1 ? 2 : 1);
  }, [grid, user]);

  console.log(grid, "Outside effect///");
  
  return (
    <div className="bg-white py-10 h-screen">
      <div className="grid grid-rows-3 grid-cols-3 gap-1 w-fit mx-auto">
        {grid.map((element, index) => (
          <Square 
            key={index}
            value={element} 
            label={index} 
            onChange={handleChange}
          />
        ))}
      </div>
      <div className="text-center mt-4">
        Current Player: {user === 1 ? "X" : "O"}
      </div>
    </div>
  );
}