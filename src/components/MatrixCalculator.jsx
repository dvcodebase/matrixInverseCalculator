import React, { useState } from 'react';

function MatrixCalculator() {
  const [matrix, setMatrix] = useState([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ]);
  const [inverse, setInverse] = useState(null);

  const handleChange = (e, row, col) => {
    const newMatrix = [...matrix];
    newMatrix[row][col] = parseFloat(e.target.value);
    setMatrix(newMatrix);
  };

  const calculateInverse = () => {
    const determinant = (matrix[0][0] * (matrix[1][1] * matrix[2][2] - matrix[2][1] * matrix[1][2])) -
                        (matrix[0][1] * (matrix[1][0] * matrix[2][2] - matrix[1][2] * matrix[2][0])) +
                        (matrix[0][2] * (matrix[1][0] * matrix[2][1] - matrix[1][1] * matrix[2][0]));

    if (determinant === 0) {
      setInverse('Matrix is singular, inverse does not exist.');
      return;
    }

    const adjugate = [
      [
        (matrix[1][1] * matrix[2][2] - matrix[2][1] * matrix[1][2]) / determinant,
        (matrix[0][2] * matrix[2][1] - matrix[0][1] * matrix[2][2]) / determinant,
        (matrix[0][1] * matrix[1][2] - matrix[0][2] * matrix[1][1]) / determinant,
      ],
      [
        (matrix[1][2] * matrix[2][0] - matrix[1][0] * matrix[2][2]) / determinant,
        (matrix[0][0] * matrix[2][2] - matrix[0][2] * matrix[2][0]) / determinant,
        (matrix[1][0] * matrix[0][2] - matrix[0][0] * matrix[1][2]) / determinant,
      ],
      [
        (matrix[1][0] * matrix[2][1] - matrix[2][0] * matrix[1][1]) / determinant,
        (matrix[2][0] * matrix[0][1] - matrix[0][0] * matrix[2][1]) / determinant,
        (matrix[0][0] * matrix[1][1] - matrix[1][0] * matrix[0][1]) / determinant,
      ],
    ];

    setInverse(adjugate);
  };

  return (
    <div>
      <h3 className="text-center">Enter 3x3 Matrix Values</h3>
      <div className="matrix-inputs text-center">
        {matrix.map((row, rowIndex) => (
          <div key={rowIndex} className="matrix-row">
            {row.map((value, colIndex) => (
              <input
                key={colIndex}
                type="number"
                value={value}
                onChange={(e) => handleChange(e, rowIndex, colIndex)}
                className="matrix-cell"
              />
            ))}
          </div>
        ))}
      </div>
      <div className="text-center mt-3">
        <button className="btn btn-primary" onClick={calculateInverse}>Calculate Inverse</button>
      </div>
      {inverse && (
        <div className="mt-3 text-center">
          {typeof inverse === 'string' ? (
            <p>{inverse}</p>
          ) : (
            <div>
              <h4>Inverse Matrix:</h4>
              {inverse.map((row, rowIndex) => (
                <div key={rowIndex}>
                  {row.map((value, colIndex) => (
                    <span key={colIndex} className="matrix-result-cell">{value.toFixed(2)} </span>
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default MatrixCalculator;
