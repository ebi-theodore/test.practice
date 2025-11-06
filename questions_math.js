const quizData = [
   {
      "question": "If a matrix has the same number of rows and columns, it is called a",
      "options": ["Rectangular matrix", "Square matrix", "Row matrix", "Column matrix"],
      "correct": "Square matrix"
    },
    {
      "question": "The transpose of a row matrix is",
      "options": ["Row matrix", "Column matrix", "Identity matrix", "Null matrix"],
      "correct": "Column matrix"
    },
    {
      "question": "If A is a 2x3 matrix and B is a 3x4 matrix, the order of AB is",
      "options": ["3x2", "2x4", "4x3", "2x3"],
      "correct": "2x4"
    },
    {
      "question": "A matrix which has all elements zero except the principal diagonal is called",
      "options": ["Row matrix", "Diagonal matrix", "Null matrix", "Column matrix"],
      "correct": "Diagonal matrix"
    },
    {
      "question": "If A is a diagonal matrix, then A is",
      "options": ["Identity matrix", "Null matrix", "Diagonal matrix", "Rectangular matrix"],
      "correct": "Diagonal matrix"
    },
    {
      "question": "If A is an m×n matrix, then Aᵗ will be of order",
      "options": ["m×n", "n×m", "n×n", "m×m"],
      "correct": "n×m"
    },
    {
      "question": "If A is a singular matrix, then",
      "options": ["det(A)=0", "det(A)≠0", "A⁻¹ exists", "A⁻¹ does not exist"],
      "correct": "det(A)=0"
    },
    {
      "question": "Which of the following operations on matrices is not defined?",
      "options": ["Addition of 2×3 and 2×3", "Multiplication of 3×2 and 2×4", "Multiplication of 2×3 and 2×3", "Transpose of a 4×1 matrix"],
      "correct": "Multiplication of 2×3 and 2×3"
    },
    {
      "question": "The determinant of a 2×2 matrix is",
      "options": ["ab−cd", "ad−bc", "ac−bd", "ab+cd"],
      "correct": "ad−bc"
    },
    {
      "question": "The determinant of the identity matrix of order 3 is",
      "options": ["0", "1", "3", "9"],
      "correct": "1"
    },
     {
      "question": "If a matrix has only one row, then it is called",
      "options": ["Column matrix", "Row matrix", "Diagonal matrix", "Square matrix"],
      "correct": "Row matrix"
    },
    {
      "question": "If A is any matrix, then A + O =",
      "options": ["A", "O", "I", "-A"],
      "correct": "A"
    },
    {
      "question": "A square matrix A is said to be symmetric if",
      "options": ["A = O", "Aᵗ = A", "Aᵗ = -A", "AAᵗ = 0"],
      "correct": "Aᵗ = A"
    },
    {
      "question": "A square matrix A is said to be a skew-symmetric matrix if",
      "options": ["Aᵗ = A", "Aᵗ = -A", "A² = I", "det(A)=0"],
      "correct": "Aᵗ = -A"
    },
    {
      "question": "det(Aᵗ) is equal to",
      "options": ["det(Aᵗ)= det(A)", "det(Aᵗ)= -det(A)", "0", "1"],
      "correct": "det(Aᵗ)= det(A)"
    },
    {
      "question": "Which of the following is NOT a property of determinants?",
      "options": ["Rows can be interchanged", "Columns can be interchanged", "Multiplying a row by k multiplies det by k", "det(A+B)=det(A)+det(B)"],
      "correct": "det(A+B)=det(A)+det(B)"
    },
    {
      "question": "If all elements of a row of a determinant are zero, then the value of determinant is",
      "options": ["1", "Not defined", "Zero", "Non-zero"],
      "correct": "Zero"
    },
    {
      "question": "If two rows or two columns of a determinant are identical, then its value is",
      "options": ["0", "1", "2", "Unchanged"],
      "correct": "0"
    },
    {
      "question": "The adjoint of a matrix A is denoted by",
      "options": ["A′", "adj(A)", "A⁻¹", "Aᵗ"],
      "correct": "adj(A)"
    },
    {
      "question": "For any square matrix A, A · adj(A) =",
      "options": ["O", "A", "I", "det(A)I"],
      "correct": "det(A)I"
    },
      {
      "question": "If det(A)=0, then A is called a",
      "options": ["Non-singular matrix", "Singular matrix", "Diagonal matrix", "Unit matrix"],
      "correct": "Singular matrix"
    },
    {
      "question": "If A is a square matrix of order 3, the number of elements in it is",
      "options": ["6", "9", "3", "12"],
      "correct": "9"
    },
    {
      "question": "If A and B are square matrices of the same order, then det(AB) = ?",
      "options": ["det(A)+det(B)", "det(A)·det(B)", "det(A)−det(B)", "det(A/B)"],
      "correct": "det(A)·det(B)"
    },
    {
      "question": "If A is an invertible matrix, then A⁻¹ exists only when",
      "options": ["det(A)=0", "det(A)≠0", "A is diagonal", "A is symmetric"],
      "correct": "det(A)≠0"
    },
    {
      "question": "If A⁻¹ exists, then A·A⁻¹ = ?",
      "options": ["O", "I", "A", "A²"],
      "correct": "I"
    },
    {
      "question": "If det(A)=5, then det(2A)= ?",
      "options": ["10", "20", "40", "8"],
      "correct": "40"
    },
    {
      "question": "The determinant of a singular matrix is always",
      "options": ["1", "0", "Negative", "Positive"],
      "correct": "0"
    },
    {
      "question": "If A is a 2×2 matrix with det(A)=3, then det(A²)= ?",
      "options": ["6", "3", "9", "0"],
      "correct": "9"
    },
    {
      "question": "If A is an orthogonal matrix, then",
      "options": ["AᵗA = I", "AA = I", "A² = I", "A = I"],
      "correct": "AᵗA = I"
    },
    {
      "question": "If det(A)=−2, then det(Aᵗ)= ?",
      "options": ["2", "−2", "4", "0"],
      "correct": "−2"
    },
    {
      "question": "If A is a 3×3 matrix and det(A)=2, then det(3A)= ?",
      "options": ["6", "18", "27", "54"],
      "correct": "54"
    },
    {
      "question": "If A = [1 0; 0 1], then A is called a",
      "options": ["Null matrix", "Identity matrix", "Diagonal matrix", "Square matrix"],
      "correct": "Identity matrix"
    },
    {
      "question": "If A = [0 0; 0 0], then A is called a",
      "options": ["Identity matrix", "Null matrix", "Square matrix", "Diagonal matrix"],
      "correct": "Null matrix"
    },
    {
      "question": "If A is a 2×2 matrix, then adj(A) is of order",
      "options": ["1×1", "2×2", "3×3", "4×4"],
      "correct": "2×2"
    },
    {
      "question": "If A = [[1,2],[3,4]], then det(A)= ?",
      "options": ["2", "−2", "1", "4"],
      "correct": "−2"
    },
    {
      "question": "If A = [[a,b],[c,d]], then adj(A)= ?",
      "options": ["[[a,b],[c,d]]", "[[d,−b],[−c,a]]", "[[a,−b],[−c,d]]", "[[b,a],[c,d]]"],
      "correct": "[[d,−b],[−c,a]]"
    },
    {
      "question": "If A = [[2,3],[1,4]], find A⁻¹.",
      "options": ["1/5 [[4,−3],[−1,2]]", "1/5 [[2,−1],[−3,4]]", "1/5 [[−4,3],[1,−2]]", "1/5 [[3,−4],[2,−1]]"],
      "correct": "1/5 [[4,−3],[−1,2]]"
    },
    {
      "question": "If A = [[2,0],[0,2]], then det(A)= ?",
      "options": ["2", "4", "0", "1"],
      "correct": "4"
    },
    {
      "question": "The determinant of a diagonal matrix is equal to",
      "options": ["Sum of diagonal elements", "Product of diagonal elements", "0", "1"],
      "correct": "Product of diagonal elements"
    },
    {
      "question": "The determinant of an upper triangular matrix is equal to",
      "options": ["Sum of diagonal elements", "Product of diagonal elements", "0", "1"],
      "correct": "Product of diagonal elements"
    },
     {
      "question": "If A is a triangular matrix, then det(A) equals",
      "options": ["Sum of diagonal elements", "Product of diagonal elements", "0", "1"],
      "correct": "Product of diagonal elements"
    },
    {
      "question": "If A = [[1,2,3],[0,1,4],[5,6,0]], then det(A)= ?",
      "options": ["1", "2", "3", "−1"],
      "correct": "1"
    },
    {
      "question": "If A is invertible and B = A⁻¹, then AB =",
      "options": ["A", "B", "O", "I"],
      "correct": "I"
    },
    {
      "question": "If A and B are invertible matrices, then (AB)⁻¹ equals",
      "options": ["A⁻¹B⁻¹", "B⁻¹A⁻¹", "A⁻¹B", "BA⁻¹"],
      "correct": "B⁻¹A⁻¹"
    },
    {
      "question": "If A = [[1,0],[0,2]], then adj(A) =",
      "options": ["[[1,0],[0,1]]", "[[2,0],[0,1]]", "[[0,1],[1,0]]", "[[1,2],[2,1]]"],
      "correct": "[[2,0],[0,1]]"
    },
    {
      "question": "If A = [[a,0],[0,b]], then det(A) =",
      "options": ["a+b", "ab", "a−b", "a/b"],
      "correct": "ab"
    },
    {
      "question": "If A = [[1,2],[3,4]], then adj(A) =",
      "options": ["[[4,−2],[−3,1]]", "[[1,3],[2,4]]", "[[−2,−3],[4,1]]", "[[2,−1],[−4,3]]"],
      "correct": "[[4,−2],[−3,1]]"
    },
    {
      "question": "If A = [[2,1],[1,2]], then A⁻¹ =",
      "options": ["1/3 [[2,−1],[−1,2]]", "1/2 [[1,−1],[−1,1]]", "1/4 [[2,1],[1,2]]", "1/3 [[1,−2],[−2,1]]"],
      "correct": "1/3 [[2,−1],[−1,2]]"
    },
    {
      "question": "If A = [[3,0],[0,5]], then det(A⁻¹) =",
      "options": ["1/15", "15", "3/5", "5/3"],
      "correct": "1/15"
    },
    {
      "question": "If A = [[1,2],[3,4]], then det(A³) =",
      "options": ["(det A)³", "3(det A)", "(det A)²", "None"],
      "correct": "(det A)³"
    },
    {
      "question": "The value of sin 30° is",
      "options": ["0", "1/2", "√3/2", "1"],
      "correct": "1/2"
    },
    {
      "question": "The value of cos 90° is",
      "options": ["1", "0", "−1", "1/2"],
      "correct": "0"
    },
    {
      "question": "The value of sin 60° is",
      "options": ["0", "1/2", "√3/2", "1"],
      "correct": "√3/2"
    },
    {
      "question": "The value of cos 0° is",
      "options": ["1", "0", "−1", "1/2"],
      "correct": "1"
    },
    {
      "question": "The value of tan 45° is",
      "options": ["0", "1", "√3", "∞"],
      "correct": "1"
    },
    {
      "question": "The value of sin 90° is",
      "options": ["0", "1", "−1", "1/2"],
      "correct": "1"
    },
    {
      "question": "The value of cos 60° is",
      "options": ["0", "1", "−1", "1/2"],
      "correct": "1/2"
    },
    {
      "question": "The value of tan 30° is",
      "options": ["1/√3", "√3", "0", "1"],
      "correct": "1/√3"
    },
    {
      "question": "The value of tan 60° is",
      "options": ["1/√3", "√3", "0", "1"],
      "correct": "√3"
    },
    {
      "question": "The value of sec 60° is",
      "options": ["1/2", "2", "√3", "1/√3"],
      "correct": "2"
    },
     {
      "question": "The value of cosec 30° is",
      "options": ["1/2", "2", "√3", "1"],
      "correct": "2"
    },
    {
      "question": "The value of cot 45° is",
      "options": ["0", "1", "√3", "1/√3"],
      "correct": "1"
    },
    {
      "question": "The value of cosec 90° is",
      "options": ["0", "1", "−1", "∞"],
      "correct": "1"
    },
    {
      "question": "The value of cot 60° is",
      "options": ["√3", "1/√3", "0", "1"],
      "correct": "1/√3"
    },
    {
      "question": "The value of sec 0° is",
      "options": ["0", "1", "−1", "∞"],
      "correct": "1"
    },
    {
      "question": "sin²θ + cos²θ =",
      "options": ["0", "1", "2", "−1"],
      "correct": "1"
    },
    {
      "question": "tan θ is equal to",
      "options": ["cosθ/sinθ", "sinθ/cosθ", "1/sinθ", "1/cosθ"],
      "correct": "sinθ/cosθ"
    },
    {
      "question": "cot θ is equal to",
      "options": ["cosθ/sinθ", "sinθ/cosθ", "1/sinθ", "1/cosθ"],
      "correct": "cosθ/sinθ"
    },
    {
      "question": "sec θ is equal to",
      "options": ["1/sinθ", "1/cosθ", "sinθ", "cosθ"],
      "correct": "1/cosθ"
    },
    {
      "question": "cosec θ is equal to",
      "options": ["1/sinθ", "1/cosθ", "sinθ", "cosθ"],
      "correct": "1/sinθ"
    },
     {
      "question": "The value of sin(90°−θ) is",
      "options": ["sinθ", "cosθ", "tanθ", "cotθ"],
      "correct": "cosθ"
    },
    {
      "question": "The value of cos(90°−θ) is",
      "options": ["sinθ", "cosθ", "tanθ", "cotθ"],
      "correct": "sinθ"
    },
    {
      "question": "The value of tan(90°−θ) is",
      "options": ["tanθ", "cotθ", "sinθ", "cosθ"],
      "correct": "cotθ"
    },
    {
      "question": "The value of cot(90°−θ) is",
      "options": ["tanθ", "cotθ", "sinθ", "cosθ"],
      "correct": "tanθ"
    },
    {
      "question": "The value of sec(90°−θ) is",
      "options": ["cosecθ", "secθ", "tanθ", "cosθ"],
      "correct": "cosecθ"
    },
    {
      "question": "The value of cosec(90°−θ) is",
      "options": ["secθ", "cosecθ", "tanθ", "sinθ"],
      "correct": "secθ"
    },
    {
      "question": "The formula for sin(A+B) is",
      "options": ["sinA+sinB", "sinAcosB+cosAsinB", "sinAcosB−cosAsinB", "cosAcosB−sinAsinB"],
      "correct": "sinAcosB+cosAsinB"
    },
    {
      "question": "The formula for cos(A+B) is",
      "options": ["cosAcosB+sinAsinB", "cosAcosB−sinAsinB", "cosAsinB+sinAcosB", "sinAcosB−cosAsinB"],
      "correct": "cosAcosB−sinAsinB"
    },
    {
      "question": "The formula for tan(A+B) is",
      "options": ["(tanA+tanB)/(1−tanAtanB)", "(tanA−tanB)/(1+tanAtanB)", "(tanA+tanB)/(1+tanAtanB)", "(tanA−tanB)/(1−tanAtanB)"],
      "correct": "(tanA+tanB)/(1−tanAtanB)"
    },
    {
      "question": "The formula for sin(A−B) is",
      "options": ["sinAcosB−cosAsinB", "sinAcosB+cosAsinB", "cosAcosB−sinAsinB", "cosAcosB+sinAsinB"],
      "correct": "sinAcosB−cosAsinB"
    },
    {
      "question": "The formula for cos(A−B) is",
      "options": ["cosAcosB+sinAsinB", "cosAcosB−sinAsinB", "cosAsinB−sinAcosB", "sinAcosB−cosAsinB"],
      "correct": "cosAcosB+sinAsinB"
    },
    {
      "question": "The formula for tan(A−B) is",
      "options": ["(tanA−tanB)/(1+tanAtanB)", "(tanA+tanB)/(1−tanAtanB)", "(tanA−tanB)/(1−tanAtanB)", "(tanA+tanB)/(1+tanAtanB)"],
      "correct": "(tanA−tanB)/(1+tanAtanB)"
    },
    {
      "question": "sin(30°+60°) equals",
      "options": ["0", "1/2", "√3/2", "1"],
      "correct": "1"
    },
    {
      "question": "cos(30°+60°) equals",
      "options": ["0", "1/2", "√3/2", "−1"],
      "correct": "0"
    },
    {
      "question": "tan(45°+45°) is",
      "options": ["1", "0", "Not defined", "√3"],
      "correct": "Not defined"
    },
    {
      "question": "sin(45°−45°) is",
      "options": ["0", "1", "√2/2", "1/√2"],
      "correct": "0"
    },
    {
      "question": "cos(45°−45°) is",
      "options": ["0", "1", "1/√2", "√3/2"],
      "correct": "1"
    },
    {
      "question": "tan(60°−30°) is",
      "options": ["0", "1/√3", "√3", "1"],
      "correct": "1/√3"
    },
    {
      "question": "sin²θ = 1−",
      "options": ["cos²θ", "tan²θ", "sec²θ", "cosec²θ"],
      "correct": "cos²θ"
    },
    {
      "question": "cos²θ = 1−",
      "options": ["sin²θ", "tan²θ", "sec²θ", "cosec²θ"],
      "correct": "sin²θ"
    },
     {
      "question": "tan²θ + 1 =",
      "options": ["sec²θ", "cosec²θ", "sin²θ", "cos²θ"],
      "correct": "sec²θ"
    },
    {
      "question": "cot²θ + 1 =",
      "options": ["sec²θ", "cosec²θ", "sin²θ", "cos²θ"],
      "correct": "cosec²θ"
    },
    {
      "question": "The period of sin x is",
      "options": ["π", "2π", "π/2", "1"],
      "correct": "2π"
    },
    {
      "question": "The period of cos x is",
      "options": ["π", "2π", "π/2", "1"],
      "correct": "2π"
    },
    {
      "question": "The period of tan x is",
      "options": ["π", "2π", "π/2", "1"],
      "correct": "π"
    },
    {
      "question": "The graph of y = sin x passes through",
      "options": ["(0,0)", "(π,1)", "(π/2,0)", "(π/2,1)"],
      "correct": "(0,0)"
    },
    {
      "question": "The maximum value of sin x is",
      "options": ["0", "1", "−1", "√3/2"],
      "correct": "1"
    },
    {
      "question": "The minimum value of cos x is",
      "options": ["0", "1", "−1", "−1/2"],
      "correct": "−1"
    },
    {
      "question": "Convert 45° into radians",
      "options": ["π/2", "π/4", "π/6", "π/3"],
      "correct": "π/4"
    },
    {
      "question": "Convert π/5 radians into degrees",
      "options": ["36°", "45°", "30°", "60°"],
      "correct": "36°"
    },
     {
      "question": "A quantity which has both magnitude and direction is called a",
      "options": ["Scalar", "Vector", "Constant", "Variable"],
      "correct": "Vector"
    },
    {
      "question": "A quantity which has only magnitude but no direction is called a",
      "options": ["Vector", "Scalar", "Tensor", "Constant"],
      "correct": "Scalar"
    },
    {
      "question": "The position vector of a point is denoted by",
      "options": ["r", "θ", "v", "a"],
      "correct": "r"
    },
    {
      "question": "If two vectors have the same direction, they are said to be",
      "options": ["Equal", "Parallel", "Perpendicular", "Collinear"],
      "correct": "Parallel"
    },
    {
      "question": "Two vectors are equal if they have the same",
      "options": ["Magnitude only", "Direction only", "Magnitude and direction", "None"],
      "correct": "Magnitude and direction"
    },
    {
      "question": "The magnitude of a unit vector is",
      "options": ["0", "1", "2", "3"],
      "correct": "1"
    },
    {
      "question": "If a vector has magnitude zero, it is called a",
      "options": ["Zero vector", "Unit vector", "Position vector", "Scalar"],
      "correct": "Zero vector"
    },
    {
      "question": "If a and b are two vectors, then the vector sum is called the",
      "options": ["Product", "Difference", "Resultant", "Quotient"],
      "correct": "Resultant"
    },
    {
      "question": "If the angle between two vectors is 90°, their dot product is",
      "options": ["1", "0", "−1", "∞"],
      "correct": "0"
    },
    {
      "question": "If a and b are parallel vectors, then a·b =",
      "options": ["|a||b|", "0", "−|a||b|", "|a||b|sinθ"],
      "correct": "|a||b|"
    },
     {
      "question": "If the angle between two vectors is 0°, then their dot product is",
      "options": ["0", "|a||b|", "−|a||b|", "1"],
      "correct": "|a||b|"
    },
    {
      "question": "If the angle between two vectors is 180°, then their dot product is",
      "options": ["0", "|a||b|", "−|a||b|", "1"],
      "correct": "−|a||b|"
    },
    {
      "question": "If a·b = 0, then the vectors a and b are",
      "options": ["Parallel", "Perpendicular", "Equal", "Opposite"],
      "correct": "Perpendicular"
    },
    {
      "question": "The dot product of a vector with itself is equal to",
      "options": ["1", "0", "|a|²", "−|a|²"],
      "correct": "|a|²"
    },
    {
      "question": "The cross product of two parallel vectors is",
      "options": ["0", "1", "|a||b|", "−|a||b|"],
      "correct": "0"
    },
    {
      "question": "The cross product of two perpendicular vectors is",
      "options": ["0", "|a||b|", "−|a||b|", "|a||b|sin0"],
      "correct": "|a||b|"
    },
    {
      "question": "The magnitude of the cross product of two vectors is given by",
      "options": ["|a||b|cosθ", "|a||b|sinθ", "|a|/|b|", "|b|/|a|"],
      "correct": "|a||b|sinθ"
    },
    {
      "question": "The angle θ between two vectors a and b is given by",
      "options": ["cosθ = a·b / (|a||b|)", "sinθ = a·b / (|a||b|)", "tanθ = a·b / (|a||b|)", "a = b / θ"],
      "correct": "cosθ = a·b / (|a||b|)"
    },
    {
      "question": "If a = i + j and b = i − j, then a·b =",
      "options": ["1", "0", "2", "−2"],
      "correct": "0"
    },
    {
      "question": "If a = 2i + j + 3k and b = i − j + k, then a·b =",
      "options": ["4", "3", "2", "5"],
      "correct": "4"
    },
    {
      "question": "If a = i + j + k and b = 2i + 3j + 4k, then a·b =",
      "options": ["9", "10", "11", "12"],
      "correct": "9"
    },
    {
      "question": "If a = 2i + 3j and b = 4i − j, then a·b =",
      "options": ["8", "5", "10", "−5"],
      "correct": "5"
    },
    {
      "question": "If a = i + 2j + 2k and b = 2i + j + 3k, then a·b =",
      "options": ["10", "11", "12", "13"],
      "correct": "12"
    },
    {
      "question": "If |a| = 3, |b| = 2, and angle between a and b is 60°, then a·b =",
      "options": ["3", "2", "1", "6"],
      "correct": "3"
    },
    {
      "question": "The vector product of two vectors a and b is a vector which is",
      "options": ["Parallel to both a and b", "Perpendicular to both a and b", "Equal to a", "Equal to b"],
      "correct": "Perpendicular to both a and b"
    },
    {
      "question": "If a = i + j and b = j + k, then a × b =",
      "options": ["i − j + k", "i + j − k", "i − k", "i + k"],
      "correct": "i − k"
    },
    {
      "question": "If a = 2i + 3j and b = i + 4j, then a × b =",
      "options": ["5k", "−5k", "7k", "−7k"],
      "correct": "5k"
    },
    {
      "question": "If a = i + 2j + 3k and b = 4i + 5j + 6k, then a × b =",
      "options": ["(−3i + 6j − 3k)", "(3i − 6j + 3k)", "(−3i − 6j + 3k)", "(3i + 6j + 3k)"],
      "correct": "(−3i + 6j − 3k)"
    },
    {
      "question": "If a = 2i + j and b = i + 2j, then the angle between a and b is given by cosθ =",
      "options": ["1/√2", "1/2", "2/√5", "3/5"],
      "correct": "3/5"
    },
    {
      "question": "The scalar triple product of vectors a, b, c is denoted by",
      "options": ["a·b·c", "a×b×c", "[a b c]", "(a b c)"],
      "correct": "[a b c]"
    },
        {
      "question": "The scalar triple product a·(b×c) represents",
      "options": ["Area of a triangle", "Volume of a parallelepiped", "Length of vector", "Angle between vectors"],
      "correct": "Volume of a parallelepiped"
    },
    {
      "question": "If the scalar triple product a·(b×c) = 0, then the vectors are",
      "options": ["Parallel", "Collinear", "Coplanar", "Equal"],
      "correct": "Coplanar"
    },
    {
      "question": "If a = i + j + k, b = 2i + 3j + 4k, and c = 3i + 5j + 6k, then [a b c] =",
      "options": ["0", "1", "2", "−1"],
      "correct": "0"
    },
    {
      "question": "If a = i + j and b = j + k, then the angle between a and b is",
      "options": ["0°", "90°", "60°", "45°"],
      "correct": "60°"
    },
    {
      "question": "If |a| = 2, |b| = 3, and a·b = 3, then the angle between a and b is",
      "options": ["30°", "45°", "60°", "90°"],
      "correct": "60°"
    },
    {
      "question": "If a and b are perpendicular unit vectors, then |a×b| =",
      "options": ["0", "1", "2", "√2"],
      "correct": "1"
    },
    {
      "question": "The cross product of i and j is",
      "options": ["k", "−k", "i", "j"],
      "correct": "k"
    },
    {
      "question": "The cross product of j and i is",
      "options": ["k", "−k", "i", "j"],
      "correct": "−k"
    },
    {
      "question": "The cross product of j and k is",
      "options": ["i", "−i", "j", "k"],
      "correct": "i"
    },
    {
      "question": "The cross product of k and i is",
      "options": ["j", "−j", "i", "k"],
      "correct": "j"
    },
     {
      "question": "The cross product of k and j is",
      "options": ["i", "−i", "j", "k"],
      "correct": "−i"
    },
    {
      "question": "The angle between two perpendicular vectors is",
      "options": ["0°", "45°", "60°", "90°"],
      "correct": "90°"
    },
    {
      "question": "If a = i + j + k, then |a| =",
      "options": ["1", "2", "√3", "3"],
      "correct": "√3"
    },
    {
      "question": "If a = 3i − 4j, then the unit vector in the direction of a is",
      "options": ["(3i − 4j)/5", "(4i − 3j)/5", "(3i + 4j)/5", "(−3i + 4j)/5"],
      "correct": "(3i − 4j)/5"
    },
    {
      "question": "If |a| = 4, |b| = 3, and θ = 90°, then |a×b| =",
      "options": ["0", "7", "12", "1"],
      "correct": "12"
    },
    {
      "question": "The unit vector perpendicular to both i + j and j + k is",
      "options": ["(i + j + k)/√3", "(i − j + k)/√3", "(i + j − k)/√3", "(i − j − k)/√3"],
      "correct": "(i − j + k)/√3"
    },
    {
      "question": "If a = i + 2j + 3k and b = 2i + 3j + 4k, then |a×b| =",
      "options": ["1", "2", "√3", "√6"],
      "correct": "√3"
    },
    {
      "question": "If a = 2i + 3j + 6k and b = i + j + 2k, then a and b are",
      "options": ["Parallel", "Perpendicular", "Equal", "Coplanar"],
      "correct": "Parallel"
    },
    {
      "question": "If a·b = |a||b|, then the angle between a and b is",
      "options": ["0°", "90°", "180°", "45°"],
      "correct": "0°"
    },
    {
      "question": "If a·b = −|a||b|, then the angle between a and b is",
      "options": ["0°", "90°", "180°", "45°"],
      "correct": "180°"
    },
    {
      "question": "Statistics deals with the collection, presentation, analysis, and interpretation of",
      "options": ["Facts", "Data", "Graphs", "Equations"],
      "correct": "Data"
    },
    {
      "question": "The average of a set of observations is called the",
      "options": ["Median", "Mode", "Mean", "Range"],
      "correct": "Mean"
    },
    {
      "question": "If the observations are 2, 4, 6, 8, 10, then the mean is",
      "options": ["5", "6", "7", "8"],
      "correct": "6"
    },
    {
      "question": "The middle value of a set of data arranged in order is called the",
      "options": ["Mean", "Mode", "Median", "Range"],
      "correct": "Median"
    },
    {
      "question": "The most frequently occurring observation in a data set is called the",
      "options": ["Mean", "Mode", "Median", "Range"],
      "correct": "Mode"
    },
    {
      "question": "If all observations are increased by 5, then the mean is",
      "options": ["Increased by 5", "Decreased by 5", "Unchanged", "Multiplied by 5"],
      "correct": "Increased by 5"
    },
    {
      "question": "If the mean of 10 observations is 20, the sum of observations is",
      "options": ["100", "150", "200", "250"],
      "correct": "200"
    },
    {
      "question": "If 5 observations have a mean of 10, and one observation is removed, the mean of remaining four observations is 9. The removed observation is",
      "options": ["10", "11", "9", "14"],
      "correct": "14"
    },
    {
      "question": "If two observations x₁ and x₂ have means 10 and 20 respectively, then the combined mean is between",
      "options": ["10 and 20", "5 and 10", "20 and 30", "None"],
      "correct": "10 and 20"
    },
    {
      "question": "The sum of deviations of items from their mean is always",
      "options": ["Zero", "Positive", "Negative", "Constant"],
      "correct": "Zero"
    },
     {
      "question": "If the data are 5, 10, 15, 20, 25, then the median is",
      "options": ["10", "15", "20", "12.5"],
      "correct": "15"
    },
    {
      "question": "If the data are 3, 5, 7, 9, 11, 13, then the median is",
      "options": ["7", "8", "9", "10"],
      "correct": "8"
    },
    {
      "question": "If the data are 10, 20, 30, 40, 50, then the mode is",
      "options": ["10", "20", "30", "No mode"],
      "correct": "No mode"
    },
    {
      "question": "If the mode of a data set is 20 and the median is 25, then the mean using empirical formula is",
      "options": ["30", "35", "27.5", "40"],
      "correct": "30"
    },
    {
      "question": "The difference between the highest and lowest observation is called the",
      "options": ["Mean", "Range", "Mode", "Median"],
      "correct": "Range"
    },
    {
      "question": "If the highest value is 40 and the lowest value is 10, then the range is",
      "options": ["30", "50", "20", "10"],
      "correct": "30"
    },
    {
      "question": "The arithmetic mean of 1, 2, 3, 4, 5 is",
      "options": ["2", "3", "4", "5"],
      "correct": "3"
    },
    {
      "question": "If the mean of 6 numbers is 8, then the total sum of the numbers is",
      "options": ["8", "36", "48", "56"],
      "correct": "48"
    },
    {
      "question": "If the mean of 5 observations is 12, and each observation is increased by 3, then the new mean is",
      "options": ["12", "13", "14", "15"],
      "correct": "15"
    },
    {
      "question": "If mean = 20 and total number of items = 5, then the sum of all items is",
      "options": ["100", "25", "10", "50"],
      "correct": "100"
    },
      {
      "question": "If all observations are multiplied by 3, then the mean is",
      "options": ["Multiplied by 3", "Divided by 3", "Increased by 3", "Decreased by 3"],
      "correct": "Multiplied by 3"
    },
    {
      "question": "If mean = 25 and n = 4, then the total sum is",
      "options": ["25", "50", "75", "100"],
      "correct": "100"
    },
    {
      "question": "The formula for arithmetic mean is",
      "options": ["Σx/n", "Σx²/n", "Σfx/n", "Σ(x−x̄)/n"],
      "correct": "Σx/n"
    },
    {
      "question": "If mean = 30, Σx = 150, then n =",
      "options": ["3", "4", "5", "6"],
      "correct": "5"
    },
    {
      "question": "In a frequency distribution, the sum of frequencies is denoted by",
      "options": ["Σx", "Σf", "Σfx", "n"],
      "correct": "Σf"
    },
    {
      "question": "In a frequency distribution, arithmetic mean is given by",
      "options": ["Σfx/n", "Σf/Σx", "Σx/Σf", "Σf/x"],
      "correct": "Σfx/Σf"
    },
    {
      "question": "The mode can be obtained graphically by using",
      "options": ["Histogram", "Ogive", "Bar diagram", "Pie chart"],
      "correct": "Histogram"
    },
    {
      "question": "Median can be obtained graphically by using",
      "options": ["Histogram", "Ogive", "Bar graph", "Pie chart"],
      "correct": "Ogive"
    },
    {
      "question": "The class having the highest frequency is called the",
      "options": ["Median class", "Modal class", "Mean class", "Frequency class"],
      "correct": "Modal class"
    },
    {
      "question": "If in a frequency distribution, mode = 20 and median = 22, then mean =",
      "options": ["24", "25", "26", "28"],
      "correct": "24"
    },
     {
      "question": "If mean = 30 and mode = 26, then median using empirical formula is",
      "options": ["27", "28", "29", "30"],
      "correct": "28"
    },
    {
      "question": "If mode = 25 and mean = 29, then median using empirical formula is",
      "options": ["27", "28", "30", "31"],
      "correct": "27"
    },
    {
      "question": "The sum of deviations from mean is always",
      "options": ["Zero", "Positive", "Negative", "Constant"],
      "correct": "Zero"
    },
    {
      "question": "The measure of dispersion which depends only on the two extreme values is",
      "options": ["Mean deviation", "Range", "Variance", "Standard deviation"],
      "correct": "Range"
    },
    {
      "question": "If highest value = 40 and lowest value = 20, then range =",
      "options": ["10", "15", "20", "25"],
      "correct": "20"
    },
    {
      "question": "The formula for mean deviation is",
      "options": ["Σ|x−x̄|/n", "Σ(x−x̄)/n", "Σfx/n", "Σ(x²)/n"],
      "correct": "Σ|x−x̄|/n"
    },
    {
      "question": "The square of the standard deviation is called the",
      "options": ["Mean", "Variance", "Range", "Median"],
      "correct": "Variance"
    },
    {
      "question": "If the variance is 9, the standard deviation is",
      "options": ["2", "3", "4", "5"],
      "correct": "3"
    },
    {
      "question": "If the standard deviation is 5, then the variance is",
      "options": ["5", "10", "15", "25"],
      "correct": "25"
    },
    {
      "question": "The formula for standard deviation is",
      "options": ["√(Σ(x−x̄)²/n)", "Σ|x−x̄|/n", "Σx/n", "Σfx/n"],
      "correct": "√(Σ(x−x̄)²/n)"
    },
      {
      "question": "If each observation is increased by a constant, the variance",
      "options": ["Increases", "Decreases", "Remains unchanged", "Becomes zero"],
      "correct": "Remains unchanged"
    },
    {
      "question": "If each observation is multiplied by 3, the new variance is",
      "options": ["Multiplied by 3", "Multiplied by 9", "Divided by 3", "Unchanged"],
      "correct": "Multiplied by 9"
    },
    {
      "question": "If each observation is multiplied by 3, the new standard deviation is",
      "options": ["Multiplied by 3", "Divided by 3", "Unchanged", "Multiplied by 9"],
      "correct": "Multiplied by 3"
    },
    {
      "question": "If the variance of a data set is 0, then all observations are",
      "options": ["Different", "Equal", "Negative", "Positive"],
      "correct": "Equal"
    },
    {
      "question": "The square of standard deviation is equal to",
      "options": ["Variance", "Mean", "Median", "Mode"],
      "correct": "Variance"
    },
    {
      "question": "If mean = 10, variance = 4, then standard deviation =",
      "options": ["1", "2", "4", "8"],
      "correct": "2"
    },
    {
      "question": "The symbol σ is used to denote",
      "options": ["Mean", "Median", "Standard deviation", "Variance"],
      "correct": "Standard deviation"
    },
    {
      "question": "The symbol μ denotes the",
      "options": ["Mode", "Population mean", "Median", "Sample mean"],
      "correct": "Population mean"
    },
    {
      "question": "The graph of cumulative frequency distribution is called an",
      "options": ["Histogram", "Ogive", "Bar chart", "Frequency polygon"],
      "correct": "Ogive"
    },
    {
      "question": "The area under a frequency curve represents the",
      "options": ["Total frequency", "Mean", "Mode", "Median"],
      "correct": "Total frequency"
    },
     {
      "question": "The study of chance or uncertainty is called",
      "options": ["Statistics", "Probability", "Permutation", "Combination"],
      "correct": "Probability"
    },
    {
      "question": "The probability of an event that is certain to occur is",
      "options": ["0", "1", "1/2", "2"],
      "correct": "1"
    },
    {
      "question": "The probability of an impossible event is",
      "options": ["0", "1", "1/2", "2"],
      "correct": "0"
    },
    {
      "question": "The probability of any event always lies between",
      "options": ["0 and 1", "−1 and 1", "0 and ∞", "−∞ and ∞"],
      "correct": "0 and 1"
    },
    {
      "question": "The sum of the probabilities of all elementary events of an experiment is",
      "options": ["0", "1", "2", "3"],
      "correct": "1"
    },
    {
      "question": "If the probability of occurrence of an event is 0.75, then the probability of its non-occurrence is",
      "options": ["0.25", "0.50", "0.75", "1.00"],
      "correct": "0.25"
    },
    {
      "question": "If an unbiased coin is tossed once, the sample space is",
      "options": ["{H}", "{T}", "{H, T}", "{0, 1}"],
      "correct": "{H, T}"
    },
    {
      "question": "If an unbiased coin is tossed once, the probability of getting a head is",
      "options": ["0", "1", "1/2", "2"],
      "correct": "1/2"
    },
    {
      "question": "If a die is thrown once, the sample space is",
      "options": ["{1,2,3,4,5,6}", "{1,2,3}", "{1,2}", "{1,2,3,4}"],
      "correct": "{1,2,3,4,5,6}"
    },
    {
      "question": "If a die is thrown once, the probability of getting an even number is",
      "options": ["1/2", "1/3", "1/6", "2/3"],
      "correct": "1/2"
    },
      {
      "question": "If a die is thrown once, the probability of getting a number greater than 4 is",
      "options": ["1/6", "1/3", "1/2", "2/3"],
      "correct": "1/3"
    },
    {
      "question": "If a die is thrown once, the probability of getting a number less than 3 is",
      "options": ["1/6", "1/3", "1/2", "2/3"],
      "correct": "1/3"
    },
    {
      "question": "If a die is thrown once, the probability of getting a prime number is",
      "options": ["1/2", "1/3", "1/6", "2/3"],
      "correct": "1/2"
    },
    {
      "question": "If a card is drawn from a well-shuffled pack of 52 cards, the probability of getting a king is",
      "options": ["1/26", "1/13", "1/52", "1/4"],
      "correct": "1/13"
    },
    {
      "question": "If a card is drawn from a pack of 52 cards, the probability of getting a red card is",
      "options": ["1/2", "1/3", "1/4", "1/13"],
      "correct": "1/2"
    },
    {
      "question": "If a card is drawn from a pack of 52 cards, the probability of getting a spade is",
      "options": ["1/2", "1/4", "1/13", "1/3"],
      "correct": "1/4"
    },
    {
      "question": "If a card is drawn from a pack of 52 cards, the probability of getting a face card is",
      "options": ["3/13", "1/13", "1/4", "1/3"],
      "correct": "3/13"
    },
    {
      "question": "If a card is drawn at random, the probability of getting a heart or a king is",
      "options": ["4/13", "1/2", "5/13", "1/13"],
      "correct": "4/13"
    },
    {
      "question": "If two coins are tossed together, the sample space is",
      "options": ["{HH, HT, TH, TT}", "{H, T}", "{HH, TT}", "{HHT, HTT}"],
      "correct": "{HH, HT, TH, TT}"
    },
    {
      "question": "If two coins are tossed, the probability of getting two heads is",
      "options": ["1/2", "1/3", "1/4", "1/6"],
      "correct": "1/4"
    },
      {
      "question": "If two coins are tossed, the probability of getting one head is",
      "options": ["1/2", "1/3", "1/4", "2/3"],
      "correct": "1/2"
    },
    {
      "question": "If two dice are thrown, the total number of possible outcomes is",
      "options": ["6", "12", "18", "36"],
      "correct": "36"
    },
    {
      "question": "If two dice are thrown, the probability of getting a doublet is",
      "options": ["1/6", "1/12", "1/3", "1/2"],
      "correct": "1/6"
    },
    {
      "question": "If two dice are thrown, the probability of getting a sum of 7 is",
      "options": ["1/6", "1/12", "1/18", "1/36"],
      "correct": "1/6"
    },
    {
      "question": "If two dice are thrown, the probability of getting a sum greater than 10 is",
      "options": ["1/6", "1/12", "1/18", "1/36"],
      "correct": "1/12"
    },
    {
      "question": "If two dice are thrown, the probability of getting a sum less than 5 is",
      "options": ["1/6", "1/3", "1/4", "1/2"],
      "correct": "1/6"
    },
    {
      "question": "If a die is thrown twice, the probability of getting an even number both times is",
      "options": ["1/2", "1/3", "1/4", "1/6"],
      "correct": "1/4"
    },
    {
      "question": "If a die is thrown twice, the probability of getting a 4 on the first throw and 5 on the second is",
      "options": ["1/6", "1/12", "1/18", "1/36"],
      "correct": "1/36"
    },
    {
      "question": "If two dice are thrown, the probability of getting a sum of 2 is",
      "options": ["1/36", "1/18", "1/6", "1/12"],
      "correct": "1/36"
    },
    {
      "question": "If two dice are thrown, the probability of getting a sum of 12 is",
      "options": ["1/36", "1/18", "1/6", "1/12"],
      "correct": "1/36"
    },
     {
      "question": "If two dice are thrown, the probability of getting a sum of 9 is",
      "options": ["1/9", "1/8", "1/6", "1/12"],
      "correct": "1/9"
    },
    {
      "question": "If two dice are thrown, the probability of getting a sum of 8 is",
      "options": ["5/36", "1/12", "1/18", "1/9"],
      "correct": "5/36"
    },
    {
      "question": "If a card is drawn from a pack, the probability of getting a black card is",
      "options": ["1/2", "1/4", "1/3", "1/13"],
      "correct": "1/2"
    },
    {
      "question": "If a card is drawn, the probability of getting an ace is",
      "options": ["1/13", "1/26", "1/52", "1/4"],
      "correct": "1/13"
    },
    {
      "question": "If a card is drawn, the probability of getting neither a king nor a queen is",
      "options": ["12/13", "11/13", "10/13", "9/13"],
      "correct": "12/13"
    },
    {
      "question": "If a card is drawn, the probability of getting a red face card is",
      "options": ["3/26", "1/13", "1/26", "3/13"],
      "correct": "3/26"
    },
    {
      "question": "If a single card is drawn, the probability of getting a heart or spade is",
      "options": ["1/2", "1/3", "1/4", "1/13"],
      "correct": "1/2"
    },
    {
      "question": "If two cards are drawn from a pack, the probability that both are aces is",
      "options": ["1/221", "1/1326", "1/26", "1/52"],
      "correct": "1/221"
    },
    {
      "question": "If two cards are drawn from a pack, the probability that both are kings is",
      "options": ["1/221", "1/1326", "1/26", "1/52"],
      "correct": "1/221"
    },
    {
      "question": "If two cards are drawn together, the probability that one is a spade and the other is a heart is",
      "options": ["1/4", "13/102", "13/51", "1/2"],
      "correct": "13/51"
    },
     {
      "question": "If a coin is tossed 3 times, the total number of possible outcomes is",
      "options": ["6", "8", "12", "16"],
      "correct": "8"
    },
    {
      "question": "If a coin is tossed 3 times, the probability of getting all heads is",
      "options": ["1/6", "1/8", "1/3", "1/2"],
      "correct": "1/8"
    },
    {
      "question": "If a coin is tossed 3 times, the probability of getting exactly two heads is",
      "options": ["1/2", "3/8", "1/8", "5/8"],
      "correct": "3/8"
    },
    {
      "question": "If a coin is tossed 3 times, the probability of getting at least one head is",
      "options": ["1/2", "3/4", "7/8", "1/8"],
      "correct": "7/8"
    },
    {
      "question": "If a die is thrown 3 times, the probability of getting 6 at least once is",
      "options": ["1/2", "91/216", "125/216", "7/8"],
      "correct": "91/216"
    },
    {
      "question": "If two dice are thrown, the probability of getting a number greater than 8 is",
      "options": ["5/36", "10/36", "6/36", "4/36"],
      "correct": "10/36"
    },
    {
      "question": "If a card is drawn from a deck, the probability of not getting a red card is",
      "options": ["1/2", "1/3", "1/4", "2/3"],
      "correct": "1/2"
    },
    {
      "question": "If a single die is thrown, the probability of getting an odd number is",
      "options": ["1/3", "1/2", "2/3", "1/6"],
      "correct": "1/2"
    },
    {
      "question": "If an event A has probability 0.7, then the probability of not A is",
      "options": ["0.3", "0.5", "0.7", "1"],
      "correct": "0.3"
    },
    {
      "question": "If P(A) = 0.4 and P(B) = 0.3 and A, B are independent, then P(A∩B) =",
      "options": ["0.12", "0.7", "0.1", "0.6"],
      "correct": "0.12"
    },

]