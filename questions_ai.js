const quizData =[
  {
    "question": "What is the primary goal of AI?",
    "options": [
      "Replicate human brain structure",
      "Enable machines to solve tasks that require intelligence",
      "Replace human labor",
      "Build faster computers"
    ],
    "correct": "Enable machines to solve tasks that require intelligence"
  },
  {
    "question": "Which of the following is NOT a traditional AI problem-solving task?",
    "options": [
      "Playing chess",
      "Doing arithmetic by hand",
      "Language translation",
      "Image recognition"
    ],
    "correct": "Doing arithmetic by hand"
  },
  {
    "question": "A task is considered “intelligent” if it involves",
    "options": [
      "Human emotions",
      "Complex pattern recognition, reasoning, learning, or adaptation",
      "Physical labor",
      "Simple arithmetic only"
    ],
    "correct": "Complex pattern recognition, reasoning, learning, or adaptation"
  },
  {
    "question": "The Turing Test evaluates",
    "options": [
      "A machine’s speed",
      "Machine intelligence via indistinguishability",
      "Human IQ",
      "Computational complexity"
    ],
    "correct": "Machine intelligence via indistinguishability"
  },
  {
    "question": "Which statement is true about AI’s “weak” vs “strong” definitions?",
    "options": [
      "Both involve human-like emotions",
      "Weak AI simulates intelligence; strong AI means real understanding",
      "Strong AI cannot ever be built",
      "Weak AI is rule-based only"
    ],
    "correct": "Weak AI simulates intelligence; strong AI means real understanding"
  },
  {
    "question": "All of the following are fields that intersect with AI EXCEPT",
    "options": [
      "Philosophy",
      "Neuroscience",
      "Astrology",
      "Linguistics"
    ],
    "correct": "Astrology"
  },
  {
    "question": "Which AI approach uses large data to learn statistical patterns?",
    "options": [
      "Logic-based",
      "Rule-based",
      "Machine learning",
      "Planning"
    ],
    "correct": "Machine learning"
  },
  {
    "question": "“Rational agent” refers to",
    "options": [
      "Any software program",
      "An entity that maximizes expected performance measure",
      "An agent that acts randomly",
      "A human being"
    ],
    "correct": "An entity that maximizes expected performance measure"
  },
  {
    "question": "What is a “performance measure”?",
    "options": [
      "How humans judge machine output",
      "A numerical reward function defining success",
      "The agent’s CPU speed",
      "A debugging tool"
    ],
    "correct": "A numerical reward function defining success"
  },
  {
    "question": "One main challenge for building AI systems is",
    "options": [
      "Lack of hardware",
      "Difficulty in specifying the environment",
      "Absence of problems",
      "Too much automation"
    ],
    "correct": "Difficulty in specifying the environment"
  },
  {
    "question": "Which of these is NOT a typical AI subfield?",
    "options": [
      "Planning",
      "Signal processing",
      "Knowledge representation",
      "Natural language processing"
    ],
    "correct": "Signal processing"
  },
  {
    "question": "Agent design must consider all EXCEPT",
    "options": [
      "The agent’s sensors",
      "The agent’s actuators",
      "The agent’s feelings",
      "The agent’s environment"
    ],
    "correct": "The agent’s feelings"
  },
  {
    "question": "Which of these criteria is NOT part of the AI definition in code-based thinking?",
    "options": [
      "Thinks like humans",
      "Acts like humans",
      "Thinks rationally",
      "Uses emotions"
    ],
    "correct": "Uses emotions"
  },
  {
    "question": "The term “knowledge engineering” refers to",
    "options": [
      "Building logic circuits",
      "Acquiring and encoding domain knowledge",
      "Data mining",
      "GPU design"
    ],
    "correct": "Acquiring and encoding domain knowledge"
  },
  {
    "question": "Which of these systems is most associated with expert systems?",
    "options": [
      "Siri",
      "Mycin",
      "AlphaGo",
      "Tesla autopilot"
    ],
    "correct": "Mycin"
  },
  {
    "question": "The AI field that focuses on how to represent information about the world is",
    "options": [
      "Planning",
      "Perception",
      "Knowledge representation",
      "Search"
    ],
    "correct": "Knowledge representation"
  },
  {
    "question": "Which architecture uses production rules and an inference engine?",
    "options": [
      "Blackboard system",
      "Expert system",
      "Neural network",
      "Planner"
    ],
    "correct": "Expert system"
  },
  {
    "question": "The AI subfield dealing with pattern recognition focuses on",
    "options": [
      "Logic",
      "Statistics",
      "Heuristics",
      "Planning"
    ],
    "correct": "Statistics"
  },
  {
    "question": "AI goals include all EXCEPT",
    "options": [
      "Understanding perception",
      "Natural dialogue",
      "Physical agility",
      "Generating electricity"
    ],
    "correct": "Generating electricity"
  },
  {
    "question": "“General AI” means",
    "options": [
      "AI that is good at gaming",
      "AI that can perform any intellectual task like a  human",
      "AI specialized in one domain",
      "Military AI"
    ],
    "correct": "AI that can perform any intellectual task like a human"
  },
  {
    "question": "An agent’s “utility function” represents",
    "options": [
      "Its hard-coded goals",
      "Preferences over states of the world",
      "Only terminal rewards",
      "CPU utility"
    ],
    "correct": "Preferences over states of the world"
  },
  {
    "question": "Which is a historical symbolic AI programming language?",
    "options": [
      "Python",
      "LISP",
      "Java",
      "C++"
    ],
    "correct": "LISP"
  },
  {
    "question": "An “agent function” maps",
    "options": [
      "Observations to actions",
      "States to rewards",
      "Goals to plans",
      "Data to parameters"
    ],
    "correct": "Observations to actions"
  },
  {
    "question": "The PEAS framework includes all EXCEPT:",
    "options": [
      "Performance",
      "Environment",
      "Actuators",
      "Sensors"
    ],
    "correct": "Performance"
  },
  {
    "question": "Which is part of agent architecture?",
    "options": [
      "Utility functions",
      "Neural net library",
      "Hardware + software",
      "Utility theory"
    ],
    "correct": "Hardware + software"
  },
  {
    "question": "A purely reactive agent",
    "options": [
      "Uses planning",
      "Responds only to current percepts",
      "Keeps track of the world model",
      "Is learning-based"
    ],
    "correct": "Responds only to current percepts"
  },
  {
    "question": "Model-based agents require",
    "options": [
      "No memory",
      "A model of how the world evolves",
      "No sensors",
      "Only reflex rules"
    ],
    "correct": "A model of how the world evolves"
  },
  {
    "question": "A goal-based agent adds",
    "options": [
      "Goals and planning capabilities",
      "Sensors",
      "Reflex actions only",
      "A utility function"
    ],
    "correct": "Goals and planning capabilities"
  },
  {
    "question": "Utility-based agents enhance goal agents by",
    "options": [
      "Seeking multiple goals only",
      "Measuring desirability via utility",
      "Being purely reactive",
      "Using no models"
    ],
    "correct": "Measuring desirability via utility"
  },
  {
    "question": "What does the “simple reflex agent” rely on?",
    "options": [
      "Utility function",
      "Condition–action rules",
      "Full search",
      "Utility maximization"
    ],
    "correct": "Condition–action rules"
  },
  {
    "question": "Which agent type makes decisions by weighing trade-offs?",
    "options": [
      "Reflex",
      "Model-based",
      "Utility-based",
      "Goal-based"
    ],
    "correct": "Utility-based"
  },
  {
    "question": "A learning agent has all EXCEPT:",
    "options": [
      "Learning element",
      "Performance element",
      "Genetic algorithm",
      "Critic"
    ],
    "correct": "Genetic algorithm"
  },
  {
    "question": "Which is a utility-based agent example?",
    "options": [
      "Basic thermostat",
      "Chess program evaluating positions",
      "Rule-based spam filter",
      "Doorbell camera"
    ],
    "correct": "Chess program evaluating positions"
  },
  {
    "question": "Which scenario suggests partially observable environment?",
    "options": [
      "Tic-Tac-Toe",
      "Chess",
      "Driving in fog",
      "Solving Sudoku"
    ],
    "correct": "Driving in fog"
  },
  {
    "question": "Stochastic environments involve",
    "options": [
      "No randomness",
      "Random outcomes in actions or percepts",
      "One fixed outcome",
      "Fully observable sensors"
    ],
    "correct": "Random outcomes in actions or percepts"
  },
  {
    "question": "What is a multi-agent environment?",
    "options": [
      "Only one agent exists",
      "Other agents work concurrently",
      "No environment exists",
      "Deterministic setting"
    ],
    "correct": "Other agents work concurrently"
  },
  {
    "question": "Which is NOT a property of environments?",
    "options": [
      "Observable vs partially observable",
      "Discrete vs continuous",
      "Safe vs dangerous",
      "Single vs multi-agent"
    ],
    "correct": "Safe vs dangerous"
  },
  {
    "question": "Utility is necessary when",
    "options": [
      "Goals suffice",
      "Trade-offs are needed",
      "Only reflex reactions",
      "No goals exist"
    ],
    "correct": "Trade-offs are needed"
  },
  {
    "question": "Which architecture is least flexible?",
    "options": [
      "Simple reflex",
      "Goal-based",
      "Model-based",
      "Learning agent"
    ],
    "correct": "Simple reflex"
  },
  {
    "question": "A fully observable, deterministic, static environment means",
    "options": [
      "Stochastic outcome",
      "No hidden information, unchanging environment",
      "Changing during planning",
      "Random percepts each time"
    ],
    "correct": "No hidden information, unchanging environment"
  },
  {
    "question": "A “learning element” in an agent does",
    "options": [
      "Store actuators",
      "Improve agent based on feedback",
      "Plan goals",
      "Execute reflexes"
    ],
    "correct": "Improve agent based on feedback"
  },
  {
    "question": "Which example demands learning?",
    "options": [
      "Vacuum agent in known layout",
      "Chatbot improving through feedback",
      "Chess engine with fixed eval function",
      "Rule-based thermostat"
    ],
    "correct": "Chatbot improving through feedback"
  },
  {
    "question": "“Observability” refers to",
    "options": [
      "Sensing entire world or not",
      "Agent’s self-concept",
      "Utility measurement",
      "Hardware visibility"
    ],
    "correct": "Sensing entire world or not"
  },
  {
    "question": "In model-based reflex agents, “model” is used to",
    "options": [
      "Store training data",
      "Track unobserved aspects",
      "Compute utility",
      "Execute actions"
    ],
    "correct": "Track unobserved aspects"
  },
  {
    "question": "Sequence: Observe–Think–Act is used by",
    "options": [
      "Reflex only",
      "Goal-based agents",
      "Stochastic agents only",
      "Learning only"
    ],
    "correct": "Goal-based agents"
  },
  {
    "question": "Which environment permits partial control?",
    "options": [
      "Deterministic",
      "Stochastic",
      "Episodic",
      "Single agent"
    ],
    "correct": "Stochastic"
  },
  {
    "question": "Which is an example of an episodic environment?",
    "options": [
      "Chess",
      "Email spam filter",
      "Driving",
      "Crossword puzzle"
    ],
    "correct": "Email spam filter"
  },
  {
    "question": "Which is NOT a measure of success in AI agent design?",
    "options": [
      "Task performance",
      "Speed",
      "Rationality",
      "Physical appearance"
    ],
    "correct": "Physical appearance"
  },
  {
    "question": "“Intelligent behavior” is best described as",
    "options": [
      "Random actions",
      "Goal-achieving actions under uncertainty",
      "Magic",
      "Strictly rule-following"
    ],
    "correct": "Goal-achieving actions under uncertainty"
  },
  {
    "question": "The phrase “AI winter” refers to",
    "options": [
      "Cold labs",
      "Periods of reduced funding/interest",
      "The winter solstice",
      "Robots malfunctioning in winter"
    ],
    "correct": "Periods of reduced funding/interest"
  },
  {
    "question": "Which search explores nodes level by level?",
    "options": [
      "Path cost",
      "Node depth",
      "Heuristic value",
      "Random"
    ],
    "correct": "Node depth"
  },
  {
    "question": "Time complexity of BFS with branching factor b and depth d is:",
    "options": [
      "O(b + d)",
      "O(b^d)",
      "O(d^b)",
      "O(b·d)"
    ],
    "correct": "O(b^d)"
  },
  {
    "question": "BFS requires which data structure?",
    "options": [
      "Stack",
      "Queue",
      "Priority queue",
      "Deque"
    ],
    "correct": "Queue"
  },
  {
    "question": "BFS uses exponential memory because it stores:",
    "options": [
      "Current frontier",
      "All nodes at current depth",
      "Only visited nodes",
      "Heuristic values"
    ],
    "correct": "All nodes at current depth"
  },
  {
    "question": "BFS is optimal only when:",
    "options": [
      "Edge costs differ",
      "Costs are uniform",
      "Heuristic is zero",
      "Graph is acyclic"
    ],
    "correct": "Costs are uniform"
  },
  {
    "question": "BFS is considered a:",
    "options": [
      "Depth-first search",
      "Best-first search",
      "Uninformed search",
      "Informed search"
    ],
    "correct": "Uninformed search"
  },
  {
    "question": "DFS uses which data structure?",
    "options": [
      "Priority queue",
      "Queue",
      "Stack",
      "Hash table"
    ],
    "correct": "Stack"
  },
  {
    "question": "DFS may get stuck in cycles if:",
    "options": [
      "Graph is disconnected",
      "No mechanism to avoid revisits",
      "Step costs vary",
      "Heuristic is misleading"
    ],
    "correct": "No mechanism to avoid revisits"
  },
  {
    "question": "Worst-case time complexity of DFS is:",
    "options": [
      "O(b·d)",
      "O(b^d)",
      "O(d!)",
      "O(b log d)"
    ],
    "correct": "O(b^d)"
  },
  {
    "question": "DFS is memory efficient compared to BFS because it uses:",
    "options": [
      "No memory",
      "Linear memory in depth",
      "Exponential memory",
      "The optimal path only"
    ],
    "correct": "Linear memory in depth"
  },
  {
    "question": "DFS is not complete in infinite-depth spaces unless:",
    "options": [
      "Graph is finite",
      "Cycles are absent or cut",
      "Step costs are uniform",
      "Heuristic is admissible"
    ],
    "correct": "Cycles are absent or cut"
  },
  {
    "question": "To avoid infinite loops in DFS, use:",
    "options": [
      "Heuristic",
      "Cycle detection",
      "Larger memory",
      "Shorter paths"
    ],
    "correct": "Cycle detection"
  },
  {
    "question": "UCS expands nodes based on:",
    "options": [
      "Depth",
      "Cost-so-far",
      "Heuristic",
      "Random"
    ],
    "correct": "Cost-so-far"
  },
  {
    "question": "UCS is optimal if all costs are:",
    "options": [
      "Negative",
      "Non-negative",
      "Random",
      "Unbounded"
    ],
    "correct": "Non-negative"
  },
  {
    "question": "UCS time complexity is roughly O(b^C), where C is:**",
    "options": [
      "Branching factor",
      "Maximum cost",
      "Optimal path cost",
      "Depth"
    ],
    "correct": "Optimal path cost"
  },
  {
    "question": "UCS requires which queue type?",
    "options": [
      "LIFO",
      "FIFO",
      "Priority queue",
      "Random access"
    ],
    "correct": "Priority queue"
  },
  {
    "question": "UCS behaves like BFS when step costs are:",
    "options": [
      "Uniform",
      "Nonuniform",
      "Zero",
      "Increasing"
    ],
    "correct": "Uniform"
  },
  {
    "question": "UCS is a form of:",
    "options": [
      "Depth-first search",
      "Best-first search",
      "Greedy search",
      "Heuristic search"
    ],
    "correct": "Best-first search"
  },
  {
    "question": "UCS is complete when:",
    "options": [
      "Step cost ≥ ε > 0",
      "Depth is finite",
      "Heuristic is admissible",
      "Heuristic is consistent"
    ],
    "correct": "Step cost ≥ ε > 0"
  },
  {
    "question": "Best-first search is:",
    "options": [
      "Complete",
      "Optimal",
      "Fast but not optimal",
      "Memory efficient"
    ],
    "correct": "Fast but not optimal"
  },
  {
    "question": "Best-first search may get stuck if:",
    "options": [
      "Heuristic is admissible",
      "Heuristic is perfect",
      "Heuristic misleads",
      "Heuristic is zero"
    ],
    "correct": "Heuristic misleads"
  },
  {
    "question": "Best-first is like breadth-first if:",
    "options": [
      "h = 0",
      "g = 0",
      "Graph is balanced",
      "Step costs vary"
    ],
    "correct": "h = 0"
  },
  {
    "question": "The main limitation of Best-first search is:",
    "options": [
      "High memory",
      "Slow speed",
      "Poor optimality",
      "Too deep"
    ],
    "correct": "Poor optimality"
  },
  {
    "question": "A* heuristic is admissible if it never:",
    "options": [
      "Underestimates",
      "Overestimates",
      "Equals",
      "Exceeds the true cost"
    ],
    "correct": "Exceeds the true cost"
  },
  {
    "question": "A* heuristic overestimating the cost is:",
    "options": [
      "Admissible",
      "Inadmissible",
      "Consistent",
      "Useful"
    ],
    "correct": "Inadmissible"
  },
  {
    "question": "Inconsistent admissible heuristics may cause A* to:",
    "options": [
      "Stop early",
      "Re-expand nodes",
      "Ignore g(n)",
      "Fail to find paths"
    ],
    "correct": "Re-expand nodes"
  },
  {
    "question": "A* uses which evaluation function?",
    "options": [
      "g(n)",
      "h(n)",
      "g(n) + h(n)",
      "max(g,h)"
    ],
    "correct": "g(n) + h(n)"
  },
  {
    "question": "With admissible h, A* is:",
    "options": [
      "Complete and optimal",
      "Complete only",
      "Optimal only",
      "Neither"
    ],
    "correct": "Complete and optimal"
  },
  {
    "question": "With consistent h, A* with graph search:",
    "options": [
      "May fail",
      "Is optimally efficient",
      "Is slower than BFS",
      "Loses optimality"
    ],
    "correct": "Is optimally efficient"
  },
  {
    "question": "A* must keep all generated nodes in memory to:",
    "options": [
      "Track visited only",
      "Backtrack optimal path",
      "Use DFS",
      "Use greedy jumps"
    ],
    "correct": "Backtrack optimal path"
  },
  {
    "question": "A* halts when the goal is:",
    "options": [
      "Generated",
      "Popped from priority queue",
      "In frontier",
      "At highest depth"
    ],
    "correct": "Popped from priority queue"
  },
  {
    "question": "Worst-case time complexity of A* is:",
    "options": [
      "Polynomial",
      "Exponential",
      "Constant",
      "Logarithmic"
    ],
    "correct": "Exponential"
  },
  {
    "question": "Among these, which minimizes f(n)?",
    "options": [
      "CIF",
      "Greedy",
      "A*",
      "DFS"
    ],
    "correct": "A*"
  },
  {
    "question": "UCS reduces to BFS when step costs are:",
    "options": [
      "Nonuniform",
      "Zero",
      "Uniform",
      "Infinite"
    ],
    "correct": "Uniform"
  },
  {
    "question": "Which search can handle inconsistent heuristics with proper duplicate checking?",
    "options": [
      "Greedy",
      "UCS",
      "A* with graph search",
      "BFS"
    ],
    "correct": "A* with graph search"
  },
  {
    "question": "A heuristic that overestimates is:",
    "options": [
      "Admissible",
      "Inadmissible",
      "Consistent",
      "Safe"
    ],
    "correct": "Inadmissible"
  },
  {
    "question": "A consistent heuristic guarantees no:",
    "options": [
      "Re-expansion",
      "Optimal path",
      "Completeness",
      "Memory usage"
    ],
    "correct": "Re-expansion"
  },
  {
    "question": "The quality of a heuristic improves when it is:",
    "options": [
      "Closer to zero",
      "Closer to true cost",
      "Always admissible only",
      "Random"
    ],
    "correct": "Closer to true cost"
  },
  {
    "question": "Best-first can be thought of as a special case of:",
    "options": [
      "A* with g(n) = 0",
      "A* with h(n) = 0",
      "UCS with g(n) only",
      "DFS"
    ],
    "correct": "A* with g(n) = 0"
  },
  {
    "question": "A heuristic of zero reduces A* to:",
    "options": [
      "Greedy",
      "UCS",
      "DFS",
      "BFS"
    ],
    "correct": "UCS"
  },
  {
    "question": "Best-first search works when:",
    "options": [
      "f(n) = g(n) + h(n)",
      "f(n) = h(n)",
      "f(n) = g(n)",
      "f(n) = 0"
    ],
    "correct": "f(n) = h(n)"
  },
  {
    "question": "Complete search algorithms do not guarantee optimality unless:",
    "options": [
      "Heuristic is zero",
      "Heuristic is negative",
      "Costs are uniform",
      "Graph is finite"
    ],
    "correct": "Costs are uniform"
  },
  {
    "question": "Which search uses exponential memory?",
    "options": [
      "DFS",
      "IDS",
      "A*",
      "Greedy"
    ],
    "correct": "A*"
  },
  {
    "question": "If h(n) is the perfect heuristic (true cost to goal), A* will:",
    "options": [
      "Expand all nodes",
      "Only along the optimal path",
      "Act like UCS",
      "Fail"
    ],
    "correct": "Only along the optimal path"
  },
  {
    "question": "In A* tree search, inconsistent heuristics cause:",
    "options": [
      "Termination failure",
      "Node re-expansions",
      "Immediate optimality",
      "Lower memory usage"
    ],
    "correct": "Node re-expansions"
  },
  {
    "question": "Fringe (frontier) consists of:",
    "options": [
      "Visited nodes",
      "Generated but not expanded nodes",
      "Goal nodes only",
      "Root node only"
    ],
    "correct": "Generated but not expanded nodes"
  },
  {
    "question": "For a graph with unit costs and consistent heuristic, A* and BFS/UCS will:",
    "options": [
      "Behave identically",
      "Expand fewer nodes",
      "Expand more nodes",
      "Fail"
    ],
    "correct": "Behave identically"
  },
  {
    "question": "Bidirectional search works by:",
    "options": [
      "Searching from root to leaf",
      "Searching from goal to start",
      "Searching simultaneously from both start  and goal",
      "Searching randomly"
    ],
    "correct": "Searching simultaneously from both start and goal"
  },
  {
    "question": "BFS is applied to a tree where the goal is at depth 5. If the branching factor is 3, how many nodes are generated in the worst case before the goal?",
    "options": [
      "121",
      "243",
      "364",
      "728"
    ],
    "correct": "364"
  },
  {
    "question": "BFS guarantees finding the shallowest solution. But it fails when:",
    "options": [
      "The branching factor is infinite",
      "The cost is uniform",
      "The search space is finite",
      "The graph has no cycles"
    ],
    "correct": "The branching factor is infinite"
  },
  {
    "question": "Which component of a knowledge-based agent is responsible for reasoning?",
    "options": [
      "Actuator",
      "Knowledge base",
      "Inference system",
      "Sensor"
    ],
    "correct": "Inference system"
  },
  {
    "question": "The main function of a knowledge base in AI is to:",
    "options": [
      "Perform arithmetic operations",
      "Store and retrieve facts and rules",
      "Generate random actions",
      "Execute code"
    ],
    "correct": "Store and retrieve facts and rules"
  },
  {
    "question": "In propositional logic, facts are represented as:",
    "options": [
      "True or false",
      "Quantified variables",
      "Fuzzy values",
      "Strings"
    ],
    "correct": "True or false"
  },
  {
    "question": "What does a model in propositional logic represent?",
    "options": [
      "Diagram of a system",
      "Truth assignment to variables",
      "Neural network weights",
      "Flowchart"
    ],
    "correct": "Truth assignment to variables"
  },
  {
    "question": "Ontological engineering is mainly concerned with:",
    "options": [
      "Creating structured representations of  concepts and relationships",
      "Designing microchips",
      "Debugging algorithms",
      "Installing operating systems"
    ],
    "correct": "Creating structured representations of concepts and relationships"
  },
  {
    "question": "Categories and objects in AI help in:",
    "options": [
      "Sorting data only",
      "Reducing processing speed",
      "Efficient reasoning and inheritance of  properties",
      "Eliminating logic gates"
    ],
    "correct": "Efficient reasoning and inheritance of properties"
  },
  {
    "question": "Events in AI knowledge representation are used to:",
    "options": [
      "Represent changes over time",
      "Store constants",
      "Manage hardware",
      "Detect user presence"
    ],
    "correct": "Represent changes over time"
  },
  {
    "question": "Mental events in AI refer to:",
    "options": [
      "Database transactions",
      "Internal states like beliefs, goals, and desires",
      "Hardware failures",
      "File operations"
    ],
    "correct": "Internal states like beliefs, goals, and desires"
  },
  {
    "question": "Reasoning systems for categories often use:",
    "options": [
      "Logical deduction and inheritance",
      "Random number generation",
      "Neural backpropagation",
      "Binary search"
    ],
    "correct": "Logical deduction and inheritance"
  },
  {
    "question": "The main idea of the Hill Climbing algorithm is to:",
    "options": [
      "Explore all possible states",
      "Move towards states with higher value",
      "Randomly select a state",
      "Wait for a signal"
    ],
    "correct": "Move towards states with higher value"
  },
  {
    "question": "Hill climbing often suffers from:",
    "options": [
      "Global maxima",
      "Local maxima",
      "Syntax errors",
      "Data redundancy"
    ],
    "correct": "Local maxima"
  },
  {
    "question": "Local Beam Search improves on hill climbing by:",
    "options": [
      "Tracking multiple states simultaneously",
      "Ignoring evaluation functions",
      "Avoiding memory usage",
      "Using only random moves"
    ],
    "correct": "Tracking multiple states simultaneously"
  },
  {
    "question": "The selection step in Genetic Algorithms is inspired by:",
    "options": [
      "Random chance",
      "Natural selection",
      "Binary search",
      "Game theory"
    ],
    "correct": "Natural selection"
  },
  {
    "question": "The main operators in Genetic Algorithms are:",
    "options": [
      "Addition and subtraction",
      "Crossover and mutation",
      "Sorting and merging",
      "Insertion and deletion"
    ],
    "correct": "Crossover and mutation"
  },
  {
    "question": "In Genetic Algorithms, a fitness function measures:",
    "options": [
      "Speed of execution",
      "Memory usage",
      "How well a solution solves the problem",
      "Number of genes"
    ],
    "correct": "How well a solution solves the problem"
  },
  {
    "question": "Which search algorithm keeps track of the top k states at each step?",
    "options": [
      "Depth-first search",
      "Local beam search",
      "Random Walk",
      "Breadth-first search"
    ],
    "correct": "Local beam search"
  },
  {
    "question": "Which of the following is a disadvantage of hill climbing?",
    "options": [
      "Requires too much memory",
      "Can get stuck at local maxima",
      "Needs no evaluation function",
      "Explores all paths in parallel"
    ],
    "correct": "Can get stuck at local maxima"
  },
  {
    "question": "The first step in a genetic algorithm is to:",
    "options": [
      "Create an initial population",
      "Apply mutation",
      "Perform crossover",
      "Select parents"
    ],
    "correct": "Create an initial population"
  },
  {
    "question": "Which AI search method selects neighbours based on highest score until the goal is found?",
    "options": [
      "Random search",
      "Hill climbing",
      "Local beam search",
      "Genetic algorithm"
    ],
    "correct": "Hill climbing"
  },
  {
    "question": "Mutation in Genetic Algorithms is used to:",
    "options": [
      "Remove weak solutions",
      "Introduce diversity",
      "Speed up execution",
      "Avoid evaluation"
    ],
    "correct": "Introduce diversity"
  },
  {
    "question": "In knowledge representation, categories help by:",
    "options": [
      "Increasing redundancy",
      "Grouping similar objects for reasoning",
      "Preventing data access",
      "Reducing storage size only"
    ],
    "correct": "Grouping similar objects for reasoning"
  },
  {
    "question": "Which AI search algorithm is faster than random search but may still get stuck?",
    "options": [
      "Depth-first search",
      "Hill climbing",
      "Local beam search",
      "Breadth-first search"
    ],
    "correct": "Local beam search"
  },
  {
    "question": "In Genetic Algorithms, chromosomes usually represent:",
    "options": [
      "Binary strings or arrays",
      "Flowcharts",
      "Truth tables",
      "Decision trees"
    ],
    "correct": "Binary strings or arrays"
  },
  {
    "question": "A disadvantage of Genetic Algorithms is that they:",
    "options": [
      "Work only for small problems",
      "May take longer to converge",
      "Can’t be parallelized",
      "Are fixed to one domain"
    ],
    "correct": "May take longer to converge"
  },
  {
    "question": "Which process in Genetic Algorithms combines parts of two parent solutions?",
    "options": [
      "Mutation",
      "Selection",
      "Crossover",
      "Elimination"
    ],
    "correct": "Crossover"
  },
  {
    "question": "What is the main purpose of the fitness function in Genetic Algorithms?",
    "options": [
      "To generate random values",
      "To measure the quality of a solution",
      "To store genetic data",
      "To determine mutation rate"
    ],
    "correct": "To measure the quality of a solution"
  },
  {
    "question": "Which step in Genetic Algorithms helps avoid getting stuck in local optima?",
    "options": [
      "Mutation",
      "Selection",
      "Encoding",
      "Evaluation"
    ],
    "correct": "Mutation"
  },
  {
    "question": "In Local Beam Search, how are neighbours selected?",
    "options": [
      "Randomly",
      "Based on the best k scores",
      "By following a fixed sequence",
      "Through mutation"
    ],
    "correct": "Based on the best k scores"
  },
  {
    "question": "Which of the following is a real-world application of Genetic Algorithms?",
    "options": [
      "Text editing",
      "Stock portfolio optimization",
      "Video playback",
      "Basic arithmetic operations"
    ],
    "correct": "Stock portfolio optimization"
  },
  {
    "question": "What is the stopping condition in Hill Climbing?",
    "options": [
      "When a local maximum is found",
      "When no better neighbours are available",
      "When evaluation stops",
      "When random steps fail"
    ],
    "correct": "When no better neighbours are available"
  },
  {
    "question": "Which algorithm is inspired by biological evolution?",
    "options": [
      "Depth-first search",
      "Breadth-first search",
      "Genetic Algorithm",
      "Hill climbing"
    ],
    "correct": "Genetic Algorithm"
  },
  {
    "question": "In Genetic Algorithms, initial solutions are created:",
    "options": [
      "From previous best results",
      "Randomly",
      "From a fixed dataset",
      "By manual entry"
    ],
    "correct": "Randomly"
  },
  {
    "question": "What does “chromosome” represent in Genetic Algorithms?",
    "options": [
      "A program variable",
      "A possible solution",
      "A search node",
      "A hardware circuit"
    ],
    "correct": "A possible solution"
  },
  {
    "question": "Which is NOT an advantage of Genetic Algorithms?",
    "options": [
      "Can solve complex problems",
      "Flexible for many domains",
      "Always finds the global optimum",
      "Works with non-linear problems"
    ],
    "correct": "Always finds the global optimum"
  },
  {
    "question": "In Hill Climbing, the “value” of a state is measured using:",
    "options": [
      "Truth tables",
      "Objective function",
      "Binary search",
      "Graph traversal"
    ],
    "correct": "Objective function"
  },
  {
    "question": "Which search algorithm is often used in pathfinding for games?",
    "options": [
      "Hill climbing",
      "Local beam search",
      "Genetic Algorithm",
      "Random Walk"
    ],
    "correct": "Local beam search"
  },
  {
    "question": "Mutation in Genetic Algorithms occurs:",
    "options": [
      "Before selection",
      "After crossover",
      "Before initialization",
      "Only in the first generation"
    ],
    "correct": "After crossover"
  },
  {
    "question": "What is a disadvantage of Local Beam Search?",
    "options": [
      "Can still get stuck in local maxima",
      "Requires large memory",
      "Cannot work with heuristics",
      "Needs no scoring function"
    ],
    "correct": "Can still get stuck in local maxima"
  },
  {
    "question": "In AI, events are important for:",
    "options": [
      "Modelling time-based changes",
      "Storing static data",
      "Optimizing memory",
      "Replacing categories"
    ],
    "correct": "Modelling time-based changes"
  },
  {
    "question": "Which AI concept involves inheritance of properties?",
    "options": [
      "Categories and objects",
      "Genetic mutations",
      "Truth assignments",
      "Beam width"
    ],
    "correct": "Categories and objects"
  },
  {
    "question": "In Local Beam Search, increasing k (number of states) generally:",
    "options": [
      "Slows down the search and reduces  success",
      "Speeds up search and increases diversity",
      "Prevents memory overflow",
      "Reduces solution accuracy"
    ],
    "correct": "Speeds up search and increases diversity"
  },
  {
    "question": "Which is a key difference between Hill Climbing and Local Beam Search?",
    "options": [
      "Hill climbing uses multiple states",
      "Local beam search tracks multiple states at once",
      "Hill climbing avoids local maxima",
      "Local beam search uses no evaluation function"
    ],
    "correct": "Local beam search tracks multiple states at once"
  },
  {
    "question": "In AI, “mental objects” refer to:",
    "options": [
      "Internal data structures like goals and  plans",
      "Memory units in hardware",
      "Categories of physical objects",
      "Logic gates in processors"
    ],
    "correct": "Internal data structures like goals and plans"
  },
  {
    "question": "Which AI approach is faster than random search but still may fail?",
    "options": [
      "Depth-first search",
      "Hill climbing",
      "Genetic Algorithm",
      "Breadth-first search"
    ],
    "correct": "Hill climbing"
  },
  {
    "question": "Which step in Genetic Algorithms maintains population diversity?",
    "options": [
      "Selection",
      "Mutation",
      "Evaluation",
      "Encoding"
    ],
    "correct": "Mutation"
  },
  {
    "question": "A typical application of Hill Climbing is:",
    "options": [
      "Solving the Traveling Salesman Problem",
      "Hardware fault detection",
      "Image compression",
      "Code compilation"
    ],
    "correct": "Solving the Traveling Salesman Problem"
  },
  {
    "question": "The main inspiration for Genetic Algorithms comes from:",
    "options": [
      "Graph theory",
      "Biological evolution",
      "Digital circuits",
      "Linear algebra"
    ],
    "correct": "Biological evolution"
  },
  {
    "question": "What is a gene in Genetic Algorithms?",
    "options": [
      "The complete solution",
      "A part of the chromosome",
      "The evaluation score",
      "The mutation process"
    ],
    "correct": "A part of the chromosome"
  },
  {
    "question": "Which of the following is NOT a step in the Genetic Algorithm process?",
    "options": [
      "Crossover",
      "Mutation",
      "Proof by contradiction",
      "Selection"
    ],
    "correct": "Proof by contradiction"
  },
  {
    "question": "In Local Beam Search, increasing beam width too much can lead to:",
    "options": [
      "Higher memory usage",
      "Reduced diversity",
      "Faster execution",
      "Smaller search space"
    ],
    "correct": "Higher memory usage"
  },
  {
    "question": "Which algorithm is used to choose the optimal move in a two-player zero-sum game?",
    "options": [
      "Hill climbing",
      "Minimax",
      "A* search",
      "Genetic algorithm"
    ],
    "correct": "Minimax"
  },
  {
    "question": "What is the primary advantage of alpha-beta pruning in game search?",
    "options": [
      "Improves accuracy",
      "Reduces the number of nodes evaluated",
      "Increases branching factor",
      "Removes heuristic evaluation"
    ],
    "correct": "Reduces the number of nodes evaluated"
  },
  {
    "question": "In a game tree, the nodes at even depths represent which player’s turn?",
    "options": [
      "Maximizing player",
      "Minimizing player",
      "Random player",
      "Chance nodes"
    ],
    "correct": "Maximizing player"
  },
  {
    "question": "Which term describes a game where both players have complete knowledge of the state?",
    "options": [
      "Partially observable",
      "Fully observable",
      "Stochastic",
      "Hidden information"
    ],
    "correct": "Fully observable"
  },
  {
    "question": "What is the evaluation function in game playing used for?",
    "options": [
      "To store game rules",
      "To estimate the desirability of a position",
      "To record moves made",
      "To compute branching factor"
    ],
    "correct": "To estimate the desirability of a position"
  },
  {
    "question": "In CSPs, what does each variable have?",
    "options": [
      "Constraints only",
      "A domain of possible values",
      "A heuristic function",
      "An evaluation score"
    ],
    "correct": "A domain of possible values"
  },
  {
    "question": "Which technique eliminates inconsistent values from domains in CSPs?",
    "options": [
      "Arc consistency",
      "Hill climbing",
      "Minimax",
      "Alpha-beta pruning"
    ],
    "correct": "Arc consistency"
  },
  {
    "question": "Which term describes a CSP where all constraints involve only two variables?",
    "options": [
      "Unary CSP",
      "Binary CSP",
      "Ternary CSP",
      "Global CSP"
    ],
    "correct": "Binary CSP"
  },
  {
    "question": "Which search method for CSPs uses no backtracking and just selects values randomly?",
    "options": [
      "Random restart hill climbing",
      "Monte Carlo search",
      "Local search",
      "Forward checking"
    ],
    "correct": "Local search"
  },
  {
    "question": "What does alpha-beta pruning never affect?",
    "options": [
      "Branching factor",
      "Search time",
      "Optimality of the result",
      "Number of nodes generated"
    ],
    "correct": "Optimality of the result"
  },
  {
    "question": "Which is an example of a deterministic game?",
    "options": [
      "Chess",
      "Poker",
      "Backgammon",
      "Rock-paper-scissors with hidden choices"
    ],
    "correct": "Chess"
  },
  {
    "question": "In constraint propagation, which consistency is stronger than arc consistency?",
    "options": [
      "Node consistency",
      "Path consistency",
      "Forward consistency",
      "Value consistency"
    ],
    "correct": "Path consistency"
  },
  {
    "question": "What is the branching factor in a game tree?",
    "options": [
      "Number of possible end states",
      "Average number of legal moves from a position",
      "Depth of the tree",
      "Number of pruned branches"
    ],
    "correct": "Average number of legal moves from a position"
  },
  {
    "question": "Which CSP algorithm assigns values and immediately eliminates inconsistent options for neighboring variables?",
    "options": [
      "MRV",
      "Forward checking",
      "Alpha-beta pruning",
      "Simulated annealing"
    ],
    "correct": "Forward checking"
  },
  {
    "question": "What is the main goal of constraint satisfaction techniques?",
    "options": [
      "Maximize score",
      "Find a consistent assignment for all variables",
      "Reduce branching factor",
      "Learn from previous games"
    ],
    "correct": "Find a consistent assignment for all variables"
  },
  {
    "question": "In alpha-beta pruning, alpha represents:",
    "options": [
      "The best score for the maximizing player  so far",
      "The best score for the minimizing player so far",
      "The maximum branching factor",
      "The depth limit of the search"
    ],
    "correct": "The best score for the maximizing player so far"
  },
  {
    "question": "Which CSP property ensures every variable assignment is consistent with all unary constraints?",
    "options": [
      "Node consistency",
      "Arc consistency",
      "Path consistency",
      "Global consistency"
    ],
    "correct": "Node consistency"
  },
  {
    "question": "In alpha-beta pruning, beta represents:",
    "options": [
      "The best score for the maximizing player  so far",
      "The best score for the minimizing player so far",
      "The branching factor",
      "The average depth limit"
    ],
    "correct": "The best score for the minimizing player so far"
  },
  {
    "question": "Which CSP approach tries to improve a complete but inconsistent assignment by changing values?",
    "options": [
      "Backtracking search",
      "Local search",
      "Forward checking",
      "Arc consistency"
    ],
    "correct": "Local search"
  },
  {
    "question": "Which CSP-solving method is most efficient when the problem is nearly complete but has few conflicts?",
    "options": [
      "Backtracking",
      "Local search with min-conflicts",
      "Arc consistency",
      "Path consistency"
    ],
    "correct": "Local search with min-conflicts"
  },
  {
    "question": "In alpha-beta pruning, when is pruning performed?",
    "options": [
      "When alpha ≥ beta",
      "When alpha < beta",
      "At the end of the search",
      "Only at the root"
    ],
    "correct": "When alpha ≥ beta"
  },
  {
    "question": "Which algorithm for CSPs can be seen as depth-first search with constraint checking at each step?",
    "options": [
      "Forward checking",
      "MRV",
      "Minimax",
      "Simulated annealing"
    ],
    "correct": "Forward checking"
  },
  {
    "question": "Which CSP property ensures consistency for every set of three variables?",
    "options": [
      "Node consistency",
      "Arc consistency",
      "Path consistency",
      "Global consistency"
    ],
    "correct": "Path consistency"
  },
  {
    "question": "Which algorithm eliminates unnecessary nodes in minimax trees?",
    "options": [
      "Minimax",
      "Alpha-beta pruning",
      "Hill climbing",
      "A* search"
    ],
    "correct": "Alpha-beta pruning"
  },
  {
    "question": "Which term in game theory refers to the best outcome achievable assuming the opponent also plays optimally?",
    "options": [
      "Nash equilibrium",
      "Minimax value",
      "Pareto optimum",
      "Dominant strategy"
    ],
    "correct": "Minimax value"
  },
  {
    "question": "In CSPs, when each pair of variables connected by a constraint satisfies the constraint, the network is:",
    "options": [
      "Node consistent",
      "Arc consistent",
      "Path consistent",
      "Globally consistent"
    ],
    "correct": "Arc consistent"
  },
  {
    "question": "Which algorithm is an improvement over minimax by eliminating branches that cannot affect the outcome?",
    "options": [
      "Forward checking",
      "Alpha-beta pruning",
      "AC-3",
      "Hill climbing"
    ],
    "correct": "Alpha-beta pruning"
  },
  {
    "question": "In CSPs, what is backtracking search’s primary drawback?",
    "options": [
      "It requires too much memory",
      "It may revisit the same partial assignments",
      "It cannot solve binary constraints",
      "It ignores variable ordering"
    ],
    "correct": "It may revisit the same partial assignments"
  },
  {
    "question": "What is a game tree?",
    "options": [
      "A representation of all possible moves and  states in a game",
      "A tree of CSP variable assignments",
      "A search tree with only winning states",
      "A binary tree for alpha-beta pruning"
    ],
    "correct": "A representation of all possible moves and states in a game"
  },
  {
    "question": "In game playing, the evaluation function is used to:",
    "options": [
      "Compute exact game outcomes",
      "Estimate the value of a game state",
      "Determine the branching factor",
      "Reduce the depth limit"
    ],
    "correct": "Estimate the value of a game state"
  },
  {
    "question": "In alpha-beta pruning, which order of node expansion gives the best pruning performance?",
    "options": [
      "Random order",
      "Worst-case order",
      "Best moves first",
      "Deepest nodes first"
    ],
    "correct": "Best moves first"
  },
  {
    "question": "Which CSP property ensures that the problem remains consistent when considering sequences of variables longer than three?",
    "options": [
      "Arc consistency",
      "Path consistency",
      "Global consistency",
      "Node consistency"
    ],
    "correct": "Global consistency"
  },
  {
    "question": "Which CSP solving method tries all possible assignments until a solution is found?",
    "options": [
      "Backtracking search",
      "Min-conflicts",
      "AC-3",
      "Alpha-beta pruning"
    ],
    "correct": "Backtracking search"
  },
  {
    "question": "Which type of games involve hidden information for at least one player?",
    "options": [
      "Perfect information games",
      "Imperfect information games",
      "Zero-sum games",
      "Stochastic games"
    ],
    "correct": "Imperfect information games"
  },
  {
    "question": "What is the main advantage of constraint propagation in CSPs?",
    "options": [
      "Reduces the domain of variables early",
      "Guarantees optimal solution",
      "Works only for binary constraints",
      "Avoids variable ordering"
    ],
    "correct": "Reduces the domain of variables early"
  },
  {
    "question": "In minimax search, the maximizing player tries to:",
    "options": [
      "Minimize the opponent’s score",
      "Maximize their own score",
      "Minimize branching factor",
      "Avoid alpha-beta pruning"
    ],
    "correct": "Maximize their own score"
  },
  {
    "question": "In CSPs, path consistency means:",
    "options": [
      "All variables satisfy unary constraints",
      "All pairs of variables satisfy binary constraints",
      "All triples of variables are consistent with  each other",
      "The problem is solved without backtracking"
    ],
    "correct": "All triples of variables are consistent with each other"
  },
  {
    "question": "Which CSP technique can detect dead ends earlier by checking neighbors after each assignment?",
    "options": [
      "Forward checking",
      "AC-3",
      "Iterative deepening",
      "Min-conflicts"
    ],
  },
  {
    "question": "A knowledge-based agent primarily consists of which two key components?",
    "options": [
      "Knowledge base and inference engine",
      "Sensors and actuators",
      "Utility function and environment model",
      "Search tree and heuristic"
    ],
    "correct": "Knowledge base and inference engine"
  },
  {
    "question": "What is the main advantage of a knowledge-based approach?",
    "options": [
      "Fast reflex actions without representation",
      "Ability to explain decisions using stored knowledge",
      "Learning only from raw pixels",
      "No need for inference"
    ],
    "correct": "Ability to explain decisions using stored knowledge"
  },
  {
    "question": "Which representation is MOST typical in early knowledge-based AI systems?",
    "options": [
      "Differential equations",
      "Symbolic logic (propositional/first-order)",
      "Fourier series",
      "Neural embeddings only"
    ],
    "correct": "Symbolic logic (propositional/first-order)"
  },
  {
    "question": "In an agent cycle, which step usually comes immediately after perceiving?",
    "options": [
      "Update internal state/KB",
      "Actuate",
      "Shutdown",
      "Reset goals"
    ],
    "correct": "Update internal state/KB"
  },
  {
    "question": "Which of the following is NOT typical of a knowledge-based agent?",
    "options": [
      "Use of entailment/inference",
      "Explicit world model",
      "Opaque black-box decision making",
      "Ability to derive new facts"
    ],
    "correct": "Opaque black-box decision making"
  },
  {
    "question": "A knowledge base can hold all EXCEPT:",
    "options": [
      "Facts",
      "Rules",
      "Actions taken by actuators in the past",
      "Physical sensor hardware"
    ],
    "correct": "Physical sensor hardware"
  },
  {
    "question": "Which of these best describes the knowledge level vs. symbol level?",
    "options": [
      "Hardware vs. software",
      "What the agent knows and aims to achieve vs. how it  is encoded",
      "Input vs. output",
      "Supervised vs. unsupervised"
    ],
    "correct": "What the agent knows and aims to achieve vs. how it is encoded"
  },
  {
    "question": "In KB-agents, which function maps percept history to action?",
    "options": [
      "Policy function",
      "Agent function",
      "Transition model",
      "Utility function"
    ],
    "correct": "Agent function"
  },
  {
    "question": "Procedural knowledge in a KB is best captured by:",
    "options": [
      "Production rules",
      "Raw images",
      "Actuator torque values",
      "Filesystem paths"
    ],
    "correct": "Production rules"
  },
  {
    "question": "Declarative knowledge in a KB refers to:",
    "options": [
      "How-to instructions",
      "Facts about what is true",
      "Hardware schematics",
      "Learning parameters"
    ],
    "correct": "Facts about what is true"
  },
  {
    "question": "Which is a typical agent program for KB-agents?",
    "options": [
      "Simple reflex without state",
      "Goal-based with inference over KB",
      "Random action selection",
      "Always greedy best-first"
    ],
    "correct": "Goal-based with inference over KB"
  },
  {
    "question": "Which of the following is a proposition?",
    "options": [
      "Close the window",
      "2+2=4",
      "x>3",
      "Who are you?"
    ],
    "correct": "2+2=4"
  },
  {
    "question": "The connective ∧ represents:",
    "options": [
      "Negation",
      "Conjunction",
      "Disjunction",
      "Implication"
    ],
    "correct": "Conjunction"
  },
  {
    "question": "p ∨ q is false when:",
    "options": [
      "p and q are both false",
      "p is true and q is false",
      "p is false and q is true",
      "both are true"
    ],
    "correct": "p and q are both false"
  },
  {
    "question": "¬(p ∧ q) is equivalent to:",
    "options": [
      "¬p ∨ ¬q",
      "p → q",
      "p ↔ q",
      "¬p ∧ ¬q"
    ],
    "correct": "¬p ∨ ¬q"
  },
  {
    "question": "p → q is logically equivalent to:",
    "options": [
      "p ∧ q",
      "¬p ∨ q",
      "q → p",
      "p ↔ q"
    ],
    "correct": "¬p ∨ q"
  },
  {
    "question": "The contrapositive of p → q is:",
    "options": [
      "q → p",
      "¬p → ¬q",
      "¬q → ¬p",
      "p ↔ q"
    ],
    "correct": "¬q → ¬p"
  },
  {
    "question": "A tautology is:",
    "options": [
      "Always false",
      "Sometimes true",
      "Always true",
      "Undetermined"
    ],
    "correct": "Always true"
  },
  {
    "question": "The biconditional p ↔ q is true when:",
    "options": [
      "p and q have different truth values",
      "p and q are both true or both false",
      "p is true only",
      "q is true only"
    ],
    "correct": "p and q are both true or both false"
  },
  {
    "question": "A contradiction is:",
    "options": [
      "A formula with at least one model",
      "A formula with no model",
      "Equivalent to a tautology",
      "Satisfiable but not valid"
    ],
    "correct": "A formula with no model"
  },
  {
    "question": "A literal is:",
    "options": [
      "Only an atom",
      "An atom or its negation",
      "Only a negation",
      "A clause"
    ],
    "correct": "An atom or its negation"
  },
  {
    "question": "p ⊢ q means:",
    "options": [
      "p semantically entails q",
      "p syntactically proves q",
      "q proves p",
      "p and q are equivalent"
    ],
    "correct": "p syntactically proves q"
  },
  {
    "question": "Soundness of a proof system means:",
    "options": [
      "All valid formulas are provable",
      "All provable formulas are valid",
      "Some invalid formulas are provable",
      "Proofs are short"
    ],
    "correct": "All provable formulas are valid"
  },
  {
    "question": "A clause is a disjunction of:",
    "options": [
      "Formulas",
      "Literals",
      "Clauses",
      "Conjunctions"
    ],
    "correct": "Literals"
  },
  {
    "question": "A valuation that makes a formula true is called a:",
    "options": [
      "Conflict",
      "Model",
      "Clause",
      "Unit"
    ],
    "correct": "Model"
  },
  {
    "question": "A propositional logic agent typically represents the world as:",
    "options": [
      "First-order predicates",
      "Boolean variables and clauses",
      "Probabilistic factors",
      "Utility functions only"
    ],
    "correct": "Boolean variables and clauses"
  },
  {
    "question": "Percepts are incorporated by:",
    "options": [
      "Adding corresponding literals to KB",
      "Updating weights",
      "Adding non-Boolean terms",
      "Ignoring them"
    ],
    "correct": "Adding corresponding literals to KB"
  },
  {
    "question": "The limitation of propositional agents is:",
    "options": [
      "Cannot represent categories",
      "No uncertainty",
      "No quantification/variables",
      "No actions"
    ],
    "correct": "No quantification/variables"
  },
  {
    "question": "Goal tests can be formalized as:",
    "options": [
      "A clause set entailing goal literals",
      "Only minimizing loss",
      "Temporal rewards",
      "Markov blankets"
    ],
    "correct": "A clause set entailing goal literals"
  },
  {
    "question": "Sensing actions affect:",
    "options": [
      "Only actuators",
      "The knowledge state (what the agent knows)",
      "The physical world",
      "Utility only"
    ],
    "correct": "The knowledge state (what the agent knows)"
  },
  {
    "question": "Observation literals are often treated as:",
    "options": [
      "Always uncertain",
      "Hard evidence (asserted truths) for that time step",
      "Irrelevant",
      "Utility modifiers"
    ],
    "correct": "Hard evidence (asserted truths) for that time step"
  },
  {
    "question": "Which is NOT a standard agent architecture?",
    "options": [
      "Simple reflex",
      "Model-based reflex",
      "Goal-based",
      "Fourier-based"
    ],
    "correct": "Fourier-based"
  },
  {
    "question": "A model-based agent maintains:",
    "options": [
      "No internal state",
      "A representation of the worldâ€™s dynamics",
      "Only a utility function",
      "Only raw percepts"
    ],
    "correct": "A representation of the worldâ€™s dynamics"
  },
  {
    "question": "A utility-based agent chooses actions to:",
    "options": [
      "Satisfy any rule",
      "Maximize expected utility",
      "Minimize number of rules",
      "Avoid search"
    ],
    "correct": "Maximize expected utility"
  },
  {
    "question": "A layered (hybrid) architecture aims to:",
    "options": [
      "Use a single loop",
      "Combine reactive and deliberative layers",
      "Eliminate planning",
      "Ignore sensors"
    ],
    "correct": "Combine reactive and deliberative layers"
  },
  {
    "question": "In partially observable environments, which architecture helps most?",
    "options": [
      "Simple reflex only",
      "Model-based",
      "No agent can help",
      "Random"
    ],
    "correct": "Model-based"
  },
  {
    "question": "Deliberative agents emphasize:",
    "options": [
      "Precomputed reflexes",
      "Reasoning and planning with models",
      "Random exploration",
      "Sensor fusion only"
    ],
    "correct": "Reasoning and planning with models"
  },
  {
    "question": "A belief-state is:",
    "options": [
      "A set/summary of possible world states",
      "Only the true state",
      "The utility function",
      "The action set"
    ],
    "correct": "A set/summary of possible world states"
  },
  {
    "question": "Real-time constraints often motivate:",
    "options": [
      "More deliberation always",
      "Reactive layers with time-bounded decisions",
      "Ignoring deadlines",
      "Removing sensors"
    ],
    "correct": "Reactive layers with time-bounded decisions"
  },
  {
    "question": "Learning components in an agent primarily:",
    "options": [
      "Replace sensors",
      "Improve performance by updating models/policies",
      "Eliminate planning",
      "Remove uncertainty"
    ],
    "correct": "Improve performance by updating models/policies"
  },
  {
    "question": "An Agent Communication Language (ACL) commonly specifies:",
    "options": [
      "Syntax, semantics, and pragmatics of  messages",
      "Only byte order",
      "Hardware buses",
      "Pixel formats"
    ],
    "correct": "Syntax, semantics, and pragmatics of messages"
  },
  {
    "question": "Which is a standard performative in KQML/FIPA ACL?",
    "options": [
      "REQUEST",
      "JPEG",
      "TCP_SYN",
      "SQL_SELECT"
    ],
    "correct": "REQUEST"
  },
  {
    "question": "The content language in ACL messages carries:",
    "options": [
      "Network headers",
      "Domain-specific knowledge expressions",
      "Binary opcodes only",
      "Audio signals"
    ],
    "correct": "Domain-specific knowledge expressions"
  },
  {
    "question": "A conversation protocol defines:",
    "options": [
      "Legal sequences of communicative acts",
      "Only message sizes",
      "Routing tables",
      "Ontology names only"
    ],
    "correct": "Legal sequences of communicative acts"
  },
  {
    "question": "Ontologies in agent communication provide:",
    "options": [
      "A shared vocabulary and meaning",
      "Compression",
      "Encryption",
      "Scheduling"
    ],
    "correct": "A shared vocabulary and meaning"
  },
  {
    "question": "A broker/mediator agent typically:",
    "options": [
      "Blocks communication",
      "Matches service requests to providers",
      "Only logs messages",
      "Encrypts content"
    ],
    "correct": "Matches service requests to providers"
  },
  {
    "question": "Argumentation semantics help agents to:",
    "options": [
      "Only send bytes",
      "Resolve conflicts and justify decisions",
      "Encrypt data",
      "Schedule tasks only"
    ],
    "correct": "Resolve conflicts and justify decisions"
  },
  {
    "question": "Propostional logic is also known as:",
    "options": [
      "First-Order logic",
      "Predicate logic",
      "Boolean logic",
      "Ontological logic"
    ],
    "correct": "Boolean logic"
  },
  {
    "question": "Which of the following is a valid propositional connective?",
    "options": [
      "For all",
      "There exists",
      "and",
      ":-"
    ],
    "correct": "and"
  },
  {
    "question": "Which method is used in propositional theorem proving?",
    "options": [
      "Unification",
      "resolution",
      "clustering",
      "Backpropagation"
    ],
    "correct": "resolution"
  }
]