const quizData = [
  {
    "question": "What is the primary goal of AI?",
    "options": [
      "A) Replicate human brain structure",
      "B) Enable machines to solve tasks that require intelligence",
      "C) Replace human labor",
      "D) Build faster computers"
    ],
    "correct": "B) Enable machines to solve tasks that require intelligence"
  },
  {
    "question": "Which of the following is NOT a traditional AI problem-solving task?",
    "options": [
      "A) Playing chess",
      "B) Doing arithmetic by hand",
      "C) Language translation",
      "D) Image recognition"
    ],
    "correct": "B) Doing arithmetic by hand"
  },
  {
    "question": "A task is considered “intelligent” if it involves",
    "options": [
      "A) Human emotions",
      "B) Complex pattern recognition, reasoning, learning, or adaptation",
      "C) Physical labor",
      "D) Simple arithmetic only"
    ],
    "correct": "B) Complex pattern recognition, reasoning, learning, or adaptation"
  },
  {
    "question": "The Turing Test evaluates",
    "options": [
      "A) A machine’s speed",
      "B) Machine intelligence via indistinguishability",
      "C) Human IQ",
      "D) Computational complexity"
    ],
    "correct": "B) Machine intelligence via indistinguishability"
  },
  {
    "question": "Which statement is true about AI’s “weak” vs “strong” definitions?",
    "options": [
      "A) Both involve human-like emotions",
      "B) Weak AI simulates intelligence; strong AI means real understanding",
      "C) Strong AI cannot ever be built",
      "D) Weak AI is rule-based only"
    ],
    "correct": "B) Weak AI simulates intelligence; strong AI means real understanding"
  },
  {
    "question": "All of the following are fields that intersect with AI EXCEPT",
    "options": [
      "A) Philosophy",
      "B) Neuroscience",
      "C) Astrology",
      "D) Linguistics"
    ],
    "correct": "C) Astrology"
  },
  {
    "question": "Which AI approach uses large data to learn statistical patterns?",
    "options": [
      "A) Logic-based",
      "B) Rule-based",
      "C) Machine learning",
      "D) Planning"
    ],
    "correct": "C) Machine learning"
  },
  {
    "question": "“Rational agent” refers to",
    "options": [
      "A) Any software program",
      "B) An entity that maximizes expected performance measure",
      "C) An agent that acts randomly",
      "D) A human being"
    ],
    "correct": "B) An entity that maximizes expected performance measure"
  },
  {
    "question": "What is a “performance measure”?",
    "options": [
      "A) How humans judge machine output",
      "B) A numerical reward function defining success",
      "C) The agent’s CPU speed",
      "D) A debugging tool"
    ],
    "correct": "B) A numerical reward function defining success"
  },
  {
    "question": "One main challenge for building AI systems is",
    "options": [
      "A) Lack of hardware",
      "B) Difficulty in specifying the environment",
      "C) Absence of problems",
      "D) Too much automation"
    ],
    "correct": "B) Difficulty in specifying the environment"
  },
  {
    "question": "Which of these is NOT a typical AI subfield?",
    "options": [
      "A) Planning",
      "B) Signal processing",
      "C) Knowledge representation",
      "D) Natural language processing"
    ],
    "correct": "B) Signal processing"
  },
  {
    "question": "Agent design must consider all EXCEPT",
    "options": [
      "A) The agent’s sensors",
      "B) The agent’s actuators",
      "C) The agent’s feelings",
      "D) The agent’s environment"
    ],
    "correct": "C) The agent’s feelings"
  },
  {
    "question": "Which of these criteria is NOT part of the AI definition in code-based thinking?",
    "options": [
      "A) Thinks like humans",
      "B) Acts like humans",
      "C) Thinks rationally",
      "D) Uses emotions"
    ],
    "correct": "D) Uses emotions"
  },
  {
    "question": "The term “knowledge engineering” refers to",
    "options": [
      "A) Building logic circuits",
      "B) Acquiring and encoding domain knowledge",
      "C) Data mining",
      "D) GPU design"
    ],
    "correct": "B) Acquiring and encoding domain knowledge"
  },
  {
    "question": "Which of these systems is most associated with expert systems?",
    "options": [
      "A) Siri",
      "B) Mycin",
      "C) AlphaGo",
      "D) Tesla autopilot"
    ],
    "correct": "B) Mycin"
  },
  {
    "question": "The AI field that focuses on how to represent information about the world is",
    "options": [
      "A) Planning",
      "B) Perception",
      "C) Knowledge representation",
      "D) Search"
    ],
    "correct": "C) Knowledge representation"
  },
  {
    "question": "Which architecture uses production rules and an inference engine?",
    "options": [
      "A) Blackboard system",
      "B) Expert system",
      "C) Neural network",
      "D) Planner"
    ],
    "correct": "B) Expert system"
  },
  {
    "question": "The AI subfield dealing with pattern recognition focuses on",
    "options": [
      "A) Logic",
      "B) Statistics",
      "C) Heuristics",
      "D) Planning"
    ],
    "correct": "B) Statistics"
  },
  {
    "question": "AI goals include all EXCEPT",
    "options": [
      "A) Understanding perception",
      "B) Natural dialogue",
      "C) Physical agility",
      "D) Generating electricity"
    ],
    "correct": "D) Generating electricity"
  },
  {
    "question": "“General AI” means",
    "options": [
      "A) AI that is good at gaming",
      "B) AI that can perform any intellectual task like a human",
      "C) AI specialized in one domain",
      "D) Military AI"
    ],
    "correct": "B) AI that can perform any intellectual task like a human"
  },
  {
    "question": "An agent’s “utility function” represents",
    "options": [
      "A) Its hard-coded goals",
      "B) Preferences over states of the world",
      "C) Only terminal rewards",
      "D) CPU utility"
    ],
    "correct": "B) Preferences over states of the world"
  },
  {
    "question": "Which is a historical symbolic AI programming language?",
    "options": [
      "A) Python",
      "B) LISP",
      "C) Java",
      "D) C++"
    ],
    "correct": "B) LISP"
  },
  {
    "question": "An “agent function” maps",
    "options": [
      "A) Observations to actions",
      "B) States to rewards",
      "C) Goals to plans",
      "D) Data to parameters"
    ],
    "correct": "A) Observations to actions"
  },
  {
    "question": "The PEAS framework includes all EXCEPT:",
    "options": [
      "A) Performance",
      "B) Environment",
      "C) Actuators",
      "D) Sensors"
    ],
    "correct": "A) Performance"
  },
  {
    "question": "Which is part of agent architecture?",
    "options": [
      "A) Utility functions",
      "B) Neural net library",
      "C) Hardware + software",
      "D) Utility theory"
    ],
    "correct": "C) Hardware + software"
  },
  {
    "question": "A purely reactive agent",
    "options": [
      "A) Uses planning",
      "B) Responds only to current percepts",
      "C) Keeps track of the world model",
      "D) Is learning-based"
    ],
    "correct": "B) Responds only to current percepts"
  },
  {
    "question": "Model-based agents require",
    "options": [
      "A) No memory",
      "B) A model of how the world evolves",
      "C) No sensors",
      "D) Only reflex rules"
    ],
    "correct": "B) A model of how the world evolves"
  },
  {
    "question": "A goal-based agent adds",
    "options": [
      "A) Goals and planning capabilities",
      "B) Sensors",
      "C) Reflex actions only",
      "D) A utility function"
    ],
    "correct": "A) Goals and planning capabilities"
  },
  {
    "question": "Utility-based agents enhance goal agents by",
    "options": [
      "A) Seeking multiple goals only",
      "B) Measuring desirability via utility",
      "C) Being purely reactive",
      "D) Using no models"
    ],
    "correct": "B) Measuring desirability via utility"
  },
  {
    "question": "What does the “simple reflex agent” rely on?",
    "options": [
      "A) Utility function",
      "B) Condition–action rules",
      "C) Full search",
      "D) Utility maximization"
    ],
    "correct": "B) Condition–action rules"
  },
  {
    "question": "Which agent type makes decisions by weighing trade-offs?",
    "options": [
      "A) Reflex",
      "B) Model-based",
      "C) Utility-based",
      "D) Goal-based"
    ],
    "correct": "C) Utility-based"
  },
  {
    "question": "A learning agent has all EXCEPT:",
    "options": [
      "A) Learning element",
      "B) Performance element",
      "C) Genetic algorithm",
      "D) Critic"
    ],
    "correct": "C) Genetic algorithm"
  },
  {
    "question": "Which is a utility-based agent example?",
    "options": [
      "A) Basic thermostat",
      "B) Chess program evaluating positions",
      "C) Rule-based spam filter",
      "D) Doorbell camera"
    ],
    "correct": "B) Chess program evaluating positions"
  },
  {
    "question": "Which scenario suggests partially observable environment?",
    "options": [
      "A) Tic-Tac-Toe",
      "B) Chess",
      "C) Driving in fog",
      "D) Solving Sudoku"
    ],
    "correct": "C) Driving in fog"
  },
  {
    "question": "Stochastic environments involve",
    "options": [
      "A) No randomness",
      "B) Random outcomes in actions or percepts",
      "C) One fixed outcome",
      "D) Fully observable sensors"
    ],
    "correct": "B) Random outcomes in actions or percepts"
  },
  {
    "question": "What is a multi-agent environment?",
    "options": [
      "A) Only one agent exists",
      "B) Other agents work concurrently",
      "C) No environment exists",
      "D) Deterministic setting"
    ],
    "correct": "B) Other agents work concurrently"
  },
  {
    "question": "Which is NOT a property of environments?",
    "options": [
      "A) Observable vs partially observable",
      "B) Discrete vs continuous",
      "C) Safe vs dangerous",
      "D) Single vs multi-agent"
    ],
    "correct": "C) Safe vs dangerous"
  },
  {
    "question": "Utility is necessary when",
    "options": [
      "A) Goals suffice",
      "B) Trade-offs are needed",
      "C) Only reflex reactions",
      "D) No goals exist"
    ],
    "correct": "B) Trade-offs are needed"
  },
  {
    "question": "Which architecture is least flexible?",
    "options": [
      "A) Simple reflex",
      "B) Goal-based",
      "C) Model-based",
      "D) Learning agent"
    ],
    "correct": "A) Simple reflex"
  },
  {
    "question": "A fully observable, deterministic, static environment means",
    "options": [
      "A) Stochastic outcome",
      "B) No hidden information, unchanging environment",
      "C) Changing during planning",
      "D) Random percepts each time"
    ],
    "correct": "B) No hidden information, unchanging environment"
  },
  {
    "question": "A “learning element” in an agent does",
    "options": [
      "A) Store actuators",
      "B) Improve agent based on feedback",
      "C) Plan goals",
      "D) Execute reflexes"
    ],
    "correct": "B) Improve agent based on feedback"
  },
  {
    "question": "Which example demands learning?",
    "options": [
      "A) Vacuum agent in known layout",
      "B) Chatbot improving through feedback",
      "C) Chess engine with fixed eval function",
      "D) Rule-based thermostat"
    ],
    "correct": "B) Chatbot improving through feedback"
  },
  {
    "question": "“Observability” refers to",
    "options": [
      "A) Sensing entire world or not",
      "B) Agent’s self-concept",
      "C) Utility measurement",
      "D) Hardware visibility"
    ],
    "correct": "A) Sensing entire world or not"
  },
  {
    "question": "In model-based reflex agents, “model” is used to",
    "options": [
      "A) Store training data",
      "B) Track unobserved aspects",
      "C) Compute utility",
      "D) Execute actions"
    ],
    "correct": "B) Track unobserved aspects"
  },
  {
    "question": "Sequence: Observe–Think–Act is used by",
    "options": [
      "A) Reflex only",
      "B) Goal-based agents",
      "C) Stochastic agents only",
      "D) Learning only"
    ],
    "correct": "B) Goal-based agents"
  },
  {
    "question": "Which environment permits partial control?",
    "options": [
      "A) Deterministic",
      "B) Stochastic",
      "C) Episodic",
      "D) Single agent"
    ],
    "correct": "B) Stochastic"
  },
  {
    "question": "Which is an example of an episodic environment?",
    "options": [
      "A) Chess",
      "B) Email spam filter",
      "C) Driving",
      "D) Crossword puzzle"
    ],
    "correct": "B) Email spam filter"
  },
  {
    "question": "Which is NOT a measure of success in AI agent design?",
    "options": [
      "A) Task performance",
      "B) Speed",
      "C) Rationality",
      "D) Physical appearance"
    ],
    "correct": "D) Physical appearance"
  },
  {
    "question": "“Intelligent behavior” is best described as",
    "options": [
      "A) Random actions",
      "B) Goal-achieving actions under uncertainty",
      "C) Magic",
      "D) Strictly rule-following"
    ],
    "correct": "B) Goal-achieving actions under uncertainty"
  },
  {
    "question": "The phrase “AI winter” refers to",
    "options": [
      "A) Cold labs",
      "B) Periods of reduced funding/interest",
      "C) The winter solstice",
      "D) Robots malfunctioning in winter"
    ],
    "correct": "B) Periods of reduced funding/interest"
  },
  {
    "question": "Which search explores nodes level by level?",
    "options": [
      "A) Path cost",
      "B) Node depth",
      "C) Heuristic value",
      "D) Random"
    ],
    "correct": "B) Node depth"
  },
  {
    "question": "Time complexity of BFS with branching factor $b$ and depth $d$ is:",
    "options": [
      "A) $O(b + d)$",
      "B) $O(b^d)$",
      "C) $O(d^b)$",
      "D) $O(b \\cdot d)$"
    ],
    "correct": "B) $O(b^d)$"
  },
  {
    "question": "BFS requires which data structure?",
    "options": [
      "A) Stack",
      "B) Queue",
      "C) Priority queue",
      "D) Deque"
    ],
    "correct": "B) Queue"
  },
  {
    "question": "BFS uses exponential memory because it stores:",
    "options": [
      "A) Current frontier",
      "B) All nodes at current depth",
      "C) Only visited nodes",
      "D) Heuristic values"
    ],
    "correct": "B) All nodes at current depth"
  },
  {
    "question": "BFS is optimal only when:",
    "options": [
      "A) Edge costs differ",
      "B) Costs are uniform",
      "C) Heuristic is zero",
      "D) Graph is acyclic"
    ],
    "correct": "B) Costs are uniform"
  },
  {
    "question": "BFS is considered a:",
    "options": [
      "A) Depth-first search",
      "B) Best-first search",
      "C) Uninformed search",
      "D) Informed search"
    ],
    "correct": "C) Uninformed search"
  },
  {
    "question": "DFS uses which data structure?",
    "options": [
      "A) Priority queue",
      "B) Queue",
      "C) Stack",
      "D) Hash table"
    ],
    "correct": "C) Stack"
  },
  {
    "question": "DFS may get stuck in cycles if:",
    "options": [
      "A) Graph is disconnected",
      "B) No mechanism to avoid revisits",
      "C) Step costs vary",
      "D) Heuristic is misleading"
    ],
    "correct": "B) No mechanism to avoid revisits"
  },
  {
    "question": "Worst-case time complexity of DFS is:",
    "options": [
      "A) $O(b \\cdot d)$",
      "B) $O(b^d)$",
      "C) $O(d!)$",
      "D) $O(b \\log d)$"
    ],
    "correct": "B) $O(b^d)$"
  },
  {
    "question": "DFS is memory efficient compared to BFS because it uses:",
    "options": [
      "A) No memory",
      "B) Linear memory in depth",
      "C) Exponential memory",
      "D) The optimal path only"
    ],
    "correct": "B) Linear memory in depth"
  },
  {
    "question": "DFS is not complete in infinite-depth spaces unless:",
    "options": [
      "A) Graph is finite",
      "B) Cycles are absent or cut",
      "C) Step costs are uniform",
      "D) Heuristic is admissible"
    ],
    "correct": "B) Cycles are absent or cut"
  },
  {
    "question": "To avoid infinite loops in DFS, use:",
    "options": [
      "A) Heuristic",
      "B) Cycle detection",
      "C) Larger memory",
      "D) Shorter paths"
    ],
    "correct": "B) Cycle detection"
  },
  {
    "question": "UCS expands nodes based on:",
    "options": [
      "A) Depth",
      "B) Cost-so-far",
      "C) Heuristic",
      "D) Random"
    ],
    "correct": "B) Cost-so-far"
  },
  {
    "question": "UCS is optimal if all costs are:",
    "options": [
      "A) Negative",
      "B) Non-negative",
      "C) Random",
      "D) Unbounded"
    ],
    "correct": "B) Non-negative"
  },
  {
    "question": "UCS time complexity is roughly $O(b^C)$, where $C$ is:",
    "options": [
      "A) Branching factor",
      "B) Maximum cost",
      "C) Optimal path cost",
      "D) Depth"
    ],
    "correct": "C) Optimal path cost"
  },
  {
    "question": "UCS requires which queue type?",
    "options": [
      "A) LIFO",
      "B) FIFO",
      "C) Priority queue",
      "D) Random access"
    ],
    "correct": "C) Priority queue"
  },
  {
    "question": "UCS behaves like BFS when step costs are:",
    "options": [
      "A) Uniform",
      "B) Nonuniform",
      "C) Zero",
      "D) Increasing"
    ],
    "correct": "A) Uniform"
  },
  {
    "question": "UCS is a form of:",
    "options": [
      "A) Depth-first search",
      "B) Best-first search",
      "C) Greedy search",
      "D) Heuristic search"
    ],
    "correct": "B) Best-first search"
  },
  {
    "question": "UCS is complete when:",
    "options": [
      "A) Step cost $\\ge \\epsilon > 0$",
      "B) Depth is finite",
      "C) Heuristic is admissible",
      "D) Heuristic is consistent"
    ],
    "correct": "A) Step cost $\\ge \\epsilon > 0$"
  },
  {
    "question": "Best-first search is:",
    "options": [
      "A) Complete",
      "B) Optimal",
      "C) Fast but not optimal",
      "D) Memory efficient"
    ],
    "correct": "C) Fast but not optimal"
  },
  {
    "question": "Best-first search may get stuck if:",
    "options": [
      "A) Heuristic is admissible",
      "B) Heuristic is perfect",
      "C) Heuristic misleads",
      "D) Heuristic is zero"
    ],
    "correct": "C) Heuristic misleads"
  },
  {
    "question": "Best-first is like breadth-first if:",
    "options": [
      "A) $h = 0$",
      "B) $g = 0$",
      "C) Graph is balanced",
      "D) Step costs vary"
    ],
    "correct": "A) $h = 0$"
  },
  {
    "question": "The main limitation of Best-first search is:",
    "options": [
      "A) High memory",
      "B) Slow speed",
      "C) Poor optimality",
      "D) Too deep"
    ],
    "correct": "C) Poor optimality"
  },
  {
    "question": "A* heuristic is admissible if it never:",
    "options": [
      "A) Underestimates",
      "B) Overestimates",
      "C) Equals",
      "D) Exceeds the true cost"
    ],
    "correct": "D) Exceeds the true cost"
  },
  {
    "question": "A* heuristic overestimating the cost is:",
    "options": [
      "A) Admissible",
      "B) Inadmissible",
      "C) Consistent",
      "D) Useful"
    ],
    "correct": "B) Inadmissible"
  },
  {
    "question": "Inconsistent admissible heuristics may cause A* to:",
    "options": [
      "A) Stop early",
      "B) Re-expand nodes",
      "C) Ignore $g(n)$",
      "D) Fail to find paths"
    ],
    "correct": "B) Re-expand nodes"
  },
  {
    "question": "A* uses which evaluation function?",
    "options": [
      "A) $g(n)$",
      "B) $h(n)$",
      "C) $g(n) + h(n)$",
      "D) $\\max(g,h)$"
    ],
    "correct": "C) $g(n) + h(n)$"
  },
  {
    "question": "With admissible $h$, A* is:",
    "options": [
      "A) Complete and optimal",
      "B) Complete only",
      "C) Optimal only",
      "D) Neither"
    ],
    "correct": "A) Complete and optimal"
  },
  {
    "question": "With consistent $h$, A* with graph search:",
    "options": [
      "A) May fail",
      "B) Is optimally efficient",
      "C) Is slower than BFS",
      "D) Loses optimality"
    ],
    "correct": "B) Is optimally efficient"
  },
  {
    "question": "A* must keep all generated nodes in memory to:",
    "options": [
      "A) Track visited only",
      "B) Backtrack optimal path",
      "C) Use DFS",
      "D) Use greedy jumps"
    ],
    "correct": "B) Backtrack optimal path"
  },
  {
    "question": "A* halts when the goal is:",
    "options": [
      "A) Generated",
      "B) Popped from priority queue",
      "C) In frontier",
      "D) At highest depth"
    ],
    "correct": "B) Popped from priority queue"
  },
  {
    "question": "Worst-case time complexity of A* is:",
    "options": [
      "A) Polynomial",
      "B) Exponential",
      "C) Constant",
      "D) Logarithmic"
    ],
    "correct": "B) Exponential"
  },
  {
    "question": "Among these, which minimizes $f(n)$?",
    "options": [
      "A) CIF",
      "B) Greedy",
      "C) A*",
      "D) DFS"
    ],
    "correct": "C) A*"
  },
  {
    "question": "UCS reduces to BFS when step costs are:",
    "options": [
      "A) Nonuniform",
      "B) Zero",
      "C) Uniform",
      "D) Infinite"
    ],
    "correct": "C) Uniform"
  },
  {
    "question": "Which search can handle inconsistent heuristics with proper duplicate checking?",
    "options": [
      "A) Greedy",
      "B) UCS",
      "C) A* with graph search",
      "D) BFS"
    ],
    "correct": "C) A* with graph search"
  },
  {
    "question": "A heuristic that overestimates is:",
    "options": [
      "A) Admissible",
      "B) Inadmissible",
      "C) Consistent",
      "D) Safe"
    ],
    "correct": "B) Inadmissible"
  },
  {
    "question": "A consistent heuristic guarantees no:",
    "options": [
      "A) Re-expansion",
      "B) Optimal path",
      "C) Completeness",
      "D) Memory usage"
    ],
    "correct": "A) Re-expansion"
  },
  {
    "question": "The quality of a heuristic improves when it is:",
    "options": [
      "A) Closer to zero",
      "B) Closer to true cost",
      "C) Always admissible only",
      "D) Random"
    ],
    "correct": "B) Closer to true cost"
  },
  {
    "question": "Best-first can be thought of as a special case of:",
    "options": [
      "A) A* with $g(n) = 0$",
      "B) A* with $h(n) = 0$",
      "C) UCS with $g(n)$ only",
      "D) DFS"
    ],
    "correct": "A) A* with $g(n) = 0$"
  },
  {
    "question": "A heuristic of zero reduces A* to:",
    "options": [
      "A) Greedy",
      "B) UCS",
      "C) DFS",
      "D) BFS"
    ],
    "correct": "B) UCS"
  },
  {
    "question": "Best-first search works when:",
    "options": [
      "A) $f(n) = g(n) + h(n)$",
      "B) $f(n) = h(n)$",
      "C) $f(n) = g(n)$",
      "D) $f(n) = 0$"
    ],
    "correct": "B) $f(n) = h(n)$"
  },
  {
    "question": "Complete search algorithms do not guarantee optimality unless:",
    "options": [
      "A) Heuristic is zero",
      "B) Heuristic is negative",
      "C) Costs are uniform",
      "D) Graph is finite"
    ],
    "correct": "C) Costs are uniform"
  },
  {
    "question": "Which search uses exponential memory?",
    "options": [
      "A) DFS",
      "B) IDS",
      "C) A*",
      "D) Greedy"
    ],
    "correct": "C) A*"
  },
  {
    "question": "If $h(n)$ is the perfect heuristic (true cost to goal), A* will:",
    "options": [
      "A) Expand all nodes",
      "B) Only along the optimal path",
      "C) Act like UCS",
      "D) Fail"
    ],
    "correct": "B) Only along the optimal path"
  },
  {
    "question": "In A* tree search, inconsistent heuristics cause:",
    "options": [
      "A) Termination failure",
      "B) Node re-expansions",
      "C) Immediate optimality",
      "D) Lower memory usage"
    ],
    "correct": "B) Node re-expansions"
  },
  {
    "question": "Fringe (frontier) consists of:",
    "options": [
      "A) Visited nodes",
      "B) Generated but not expanded nodes",
      "C) Goal nodes only",
      "D) Root node only"
    ],
    "correct": "B) Generated but not expanded nodes"
  },
  {
    "question": "For a graph with unit costs and consistent heuristic, A* and BFS/UCS will:",
    "options": [
      "A) Behave identically",
      "B) Expand fewer nodes",
      "C) Expand more nodes",
      "D) Fail"
    ],
    "correct": "A) Behave identically"
  },
  {
    "question": "Bidirectional search works by:",
    "options": [
      "A) Searching from root to leaf",
      "B) Searching from goal to start",
      "C) Searching simultaneously from both start and goal",
      "D) Searching randomly"
    ],
    "correct": "C) Searching simultaneously from both start and goal"
  },
  {
    "question": "BFS is applied to a tree where the goal is at depth 5. If the branching factor is 3, how many nodes are generated in the worst case before the goal?",
    "options": [
      "A) 121",
      "B) 243",
      "C) 364",
      "D) 728"
    ],
    "correct": "C) 364"
  },
  {
    "question": "BFS guarantees finding the shallowest solution. But it fails when:",
    "options": [
      "A) The branching factor is infinite",
      "B) The cost is uniform",
      "C) The search space is finite",
      "D) The graph has no cycles"
    ],
    "correct": "A) The branching factor is infinite"
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
      "Creating structured representations of concepts and relationships",
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
      "Efficient reasoning and inheritance of properties",
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
      "Stack portfolio optimization",
      "Video playback",
      "Basic arithmetic operations"
    ],
    "correct": "Stack portfolio optimization"
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
      "Internal data structures like goals and plans",
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
      "A) Hill climbing",
      "B) Minimax",
      "C) A* search",
      "D) Genetic algorithm"
    ],
    "correct": "B) Minimax"
  },
  {
    "question": "What is the primary advantage of alpha-beta pruning in game search?",
    "options": [
      "A) Improves accuracy",
      "B) Reduces the number of nodes evaluated",
      "C) Increases branching factor",
      "D) Removes heuristic evaluation"
    ],
    "correct": "B) Reduces the number of nodes evaluated"
  },
  {
    "question": "In a game tree, the nodes at even depths represent which player’s turn?",
    "options": [
      "A) Maximizing player",
      "B) Minimizing player",
      "C) Random player",
      "D) Chance nodes"
    ],
    "correct": "A) Maximizing player"
  },
  {
    "question": "Which term describes a game where both players have complete knowledge of the state?",
    "options": [
      "A) Partially observable",
      "B) Fully observable",
      "C) Stochastic",
      "D) Hidden information"
    ],
    "correct": "B) Fully observable"
  },
  {
    "question": "What is the evaluation function in game playing used for?",
    "options": [
      "A) To store game rules",
      "B) To estimate the desirability of a position",
      "C) To record moves made",
      "D) To compute branching factor"
    ],
    "correct": "B) To estimate the desirability of a position"
  },
  {
    "question": "In CSPs, what does each variable have?",
    "options": [
      "A) Constraints only",
      "B) A domain of possible values",
      "C) A heuristic function",
      "D) An evaluation score"
    ],
    "correct": "B) A domain of possible values"
  },
  {
    "question": "Which technique eliminates inconsistent values from domains in CSPs?",
    "options": [
      "A) Arc consistency",
      "B) Hill climbing",
      "C) Minimax",
      "D) Alpha-beta pruning"
    ],
    "correct": "A) Arc consistency"
  },
  {
    "question": "Which term describes a CSP where all constraints involve only two variables?",
    "options": [
      "A) Unary CSP",
      "B) Binary CSP",
      "C) Ternary CSP",
      "D) Global CSP"
    ],
    "correct": "B) Binary CSP"
  },
  {
    "question": "Which search method for CSPs uses no backtracking and just selects values randomly?",
    "options": [
      "A) Random restart hill climbing",
      "B) Monte Carlo search",
      "C) Local search",
      "D) Forward checking"
    ],
    "correct": "C) Local search"
  },
  {
    "question": "What does alpha-beta pruning never affect?",
    "options": [
      "A) Branching factor",
      "B) Search time",
      "C) Optimality of the result",
      "D) Number of nodes generated"
    ],
    "correct": "C) Optimality of the result"
  },
  {
    "question": "Which is an example of a deterministic game?",
    "options": [
      "A) Chess",
      "B) Poker",
      "C) Backgammon",
      "D) Rock-paper-scissors with hidden choices"
    ],
    "correct": "A) Chess"
  },
  {
    "question": "In constraint propagation, which consistency is stronger than arc consistency?",
    "options": [
      "A) Node consistency",
      "B) Path consistency",
      "C) Forward consistency",
      "D) Value consistency"
    ],
    "correct": "B) Path consistency"
  },
  {
    "question": "What is the branching factor in a game tree?",
    "options": [
      "A) Number of possible end states",
      "B) Average number of legal moves from a position",
      "C) Depth of the tree",
      "D) Number of pruned branches"
    ],
    "correct": "B) Average number of legal moves from a position"
  },
  {
    "question": "Which CSP algorithm assigns values and immediately eliminates inconsistent options for neighboring variables?",
    "options": [
      "A) MRV",
      "B) Forward checking",
      "C) Alpha-beta pruning",
      "D) Simulated annealing"
    ],
    "correct": "B) Forward checking"
  },
  {
    "question": "What is the main goal of constraint satisfaction techniques?",
    "options": [
      "A) Maximize score",
      "B) Find a consistent assignment for all variables",
      "C) Reduce branching factor",
      "D) Learn from previous games"
    ],
    "correct": "B) Find a consistent assignment for all variables"
  },
  {
    "question": "In alpha-beta pruning, alpha represents:",
    "options": [
      "A) The best score for the maximizing player so far",
      "B) The best score for the minimizing player so far",
      "C) The maximum branching factor",
      "D) The depth limit of the search"
    ],
    "correct": "A) The best score for the maximizing player so far"
  },
  {
    "question": "Which CSP property ensures every variable assignment is consistent with all unary constraints?",
    "options": [
      "A) Node consistency",
      "B) Arc consistency",
      "C) Path consistency",
      "D) Global consistency"
    ],
    "correct": "A) Node consistency"
  },
  {
    "question": "In alpha-beta pruning, beta represents:",
    "options": [
      "A) The best score for the maximizing player so far",
      "B) The best score for the minimizing player so far",
      "C) The branching factor",
      "D) The average depth limit"
    ],
    "correct": "B) The best score for the minimizing player so far"
  },
  {
    "question": "Which CSP approach tries to improve a complete but inconsistent assignment by changing values?",
    "options": [
      "A) Backtracking search",
      "B) Local search",
      "C) Forward checking",
      "D) Arc consistency"
    ],
    "correct": "B) Local search"
  },
  {
    "question": "Which CSP-solving method is most efficient when the problem is nearly complete but has few conflicts?",
    "options": [
      "A) Backtracking",
      "B) Local search with min-conflicts",
      "C) Arc consistency",
      "D) Path consistency"
    ],
    "correct": "B) Local search with min-conflicts"
  },
  {
    "question": "In alpha-beta pruning, when is pruning performed?",
    "options": [
      "A) When alpha ≥ beta",
      "B) When alpha < beta",
      "C) At the end of the search",
      "D) Only at the root"
    ],
    "correct": "A) When alpha ≥ beta"
  },
  {
    "question": "Which algorithm for CSPs can be seen as depth-first search with constraint checking at each step?",
    "options": [
      "A) Forward checking",
      "B) MRV",
      "C) Minimax",
      "D) Simulated annealing"
    ],
    "correct": "A) Forward checking"
  },
  {
    "question": "Which CSP property ensures consistency for every set of three variables?",
    "options": [
      "A) Node consistency",
      "B) Arc consistency",
      "C) Path consistency",
      "D) Global consistency"
    ],
    "correct": "C) Path consistency"
  },
  {
    "question": "Which algorithm eliminates unnecessary nodes in minimax trees?",
    "options": [
      "A) Minimax",
      "B) Alpha-beta pruning",
      "C) Hill climbing",
      "D) A* search"
    ],
    "correct": "B) Alpha-beta pruning"
  },
  {
    "question": "Which term in game theory refers to the best outcome achievable assuming the opponent also plays optimally?",
    "options": [
      "A) Nash equilibrium",
      "B) Minimax value",
      "C) Pareto optimum",
      "D) Dominant strategy"
    ],
    "correct": "B) Minimax value"
  },
  {
    "question": "In CSPs, when each pair of variables connected by a constraint satisfies the constraint, the network is:",
    "options": [
      "A) Node consistent",
      "B) Arc consistent",
      "C) Path consistent",
      "D) Globally consistent"
    ],
    "correct": "B) Arc consistent"
  },
  {
    "question": "Which algorithm is an improvement over minimax by eliminating branches that cannot affect the outcome?",
    "options": [
      "A) Forward checking",
      "B) Alpha-beta pruning",
      "C) AC-3",
      "D) Hill climbing"
    ],
    "correct": "B) Alpha-beta pruning"
  },
  {
    "question": "In CSPs, what is backtracking search’s primary drawback?",
    "options": [
      "A) It requires too much memory",
      "B) It may revisit the same partial assignments",
      "C) It cannot solve binary constraints",
      "D) It ignores variable ordering"
    ],
    "correct": "B) It may revisit the same partial assignments"
  },
  {
    "question": "What is a game tree?",
    "options": [
      "A) A representation of all possible moves and states in a game",
      "B) A tree of CSP variable assignments",
      "C) A search tree with only winning states",
      "D) A binary tree for alpha-beta pruning"
    ],
    "correct": "A) A representation of all possible moves and states in a game"
  },
  {
    "question": "In game playing, the evaluation function is used to:",
    "options": [
      "A) Compute exact game outcomes",
      "B) Estimate the value of a game state",
      "C) Determine the branching factor",
      "D) Reduce the depth limit"
    ],
    "correct": "B) Estimate the value of a game state"
  },
  {
    "question": "In alpha-beta pruning, which order of node expansion gives the best pruning performance?",
    "options": [
      "A) Random order",
      "B) Worst-case order",
      "C) Best moves first",
      "D) Deepest nodes first"
    ],
    "correct": "C) Best moves first"
  },
  {
    "question": "Which CSP property ensures that the problem remains consistent when considering sequences of variables longer than three?",
    "options": [
      "A) Arc consistency",
      "B) Path consistency",
      "C) Global consistency",
      "D) Node consistency"
    ],
    "correct": "C) Global consistency"
  },
  {
    "question": "Which CSP solving method tries all possible assignments until a solution is found?",
    "options": [
      "A) Backtracking search",
      "B) Min-conflicts",
      "C) AC-3",
      "D) Alpha-beta pruning"
    ],
    "correct": "A) Backtracking search"
  },
  {
    "question": "Which type of games involve hidden information for at least one player?",
    "options": [
      "A) Perfect information games",
      "B) Imperfect information games",
      "C) Zero-sum games",
      "D) Stochastic games"
    ],
    "correct": "B) Imperfect information games"
  },
  {
    "question": "What is the main advantage of constraint propagation in CSPs?",
    "options": [
      "A) Reduces the domain of variables early",
      "B) Guarantees optimal solution",
      "C) Works only for binary constraints",
      "D) Avoids variable ordering"
    ],
    "correct": "A) Reduces the domain of variables early"
  },
  {
    "question": "In minimax search, the maximizing player tries to:",
    "options": [
      "A) Minimize the opponent’s score",
      "B) Maximize their own score",
      "C) Minimize branching factor",
      "D) Avoid alpha-beta pruning"
    ],
    "correct": "B) Maximize their own score"
  },
  {
    "question": "In CSPs, path consistency means:",
    "options": [
      "A) All variables satisfy unary constraints",
      "B) All pairs of variables satisfy binary constraints",
      "C) All triples of variables are consistent with each other",
      "D) The problem is solved without backtracking"
    ],
    "correct": "C) All triples of variables are consistent with each other"
  },
  {
    "question": "Which CSP technique can detect dead ends earlier by checking neighbors after each assignment?",
    "options": [
      "A) Forward checking",
      "B) AC-3",
      "C) Iterative deepening",
      "D) Min-conflicts"
    ],
    "correct": "A) Forward checking"
  },
  {
    "question": "In CSP solving, when each variable’s domain has exactly one value consistent with all constraints, the problem is:",
    "options": [
      "A) Node consistent",
      "B) Solved",
      "C) Path consistent",
      "D) Over-constrained"
    ],
    "correct": "B) Solved"
  },
  {
    "question": "In CSPs, domain reduction is primarily achieved through:",
    "options": [
      "A) Constraint propagation",
      "B) Iterative deepening",
      "C) Minimax",
      "D) Monte Carlo sampling"
    ],
    "correct": "A) Constraint propagation"
  },
  {
    "question": "Which type of games are deterministic with perfect information?",
    "options": [
      "A) Chess and Checkers",
      "B) Poker and Bridge",
      "C) Go Fish and Battleship",
      "D) Rock-Paper-Scissors"
    ],
    "correct": "A) Chess and Checkers"
  },
  {
    "question": "What does pruning do in search algorithms?",
    "options": [
      "A) Increases branching factor",
      "B) Removes unpromising branches",
      "C) Guarantees optimal solution",
      "D) Randomizes search"
    ],
    "correct": "B) Removes unpromising branches"
  },
  {
    "question": "Which algorithm is a local search method for CSPs that minimizes the number of constraint violations?",
    "options": [
      "A) AC-3",
      "B) Min-conflicts",
      "C) Forward checking",
      "D) Backtracking"
    ],
    "correct": "B) Min-conflicts"
  },
  {
    "question": "Which CSP algorithm can detect inconsistencies between variable pairs before search begins?",
    "options": [
      "A) Arc consistency checking",
      "B) Forward checking",
      "C) Min-conflicts",
      "D) Iterative deepening"
    ],
    "correct": "A) Arc consistency checking"
  },
  {
    "question": "Which type of games require strategies that consider future uncertainty?",
    "options": [
      "A) Stochastic games",
      "B) Deterministic games",
      "C) Perfect information games",
      "D) Zero-sum games"
    ],
    "correct": "A) Stochastic games"
  },
  {
    "question": "Which game playing search method expands only the most promising moves based on evaluation?",
    "options": [
      "A) Beam search",
      "B) Depth-first search",
      "C) Minimax",
      "D) AC-3"
    ],
    "correct": "A) Beam search"
  },
  {
    "question": "Which property of CSPs ensures every variable’s domain satisfies unary constraints?",
    "options": [
      "A) Node consistency",
      "B) Arc consistency",
      "C) Path consistency",
      "D) Global consistency"
    ],
    "correct": "A) Node consistency"
  },
  {
    "question": "In CSP solving, a problem is over-constrained when:",
    "options": [
      "A) There are more variables than constraints",
      "B) No assignment satisfies all constraints",
      "C) Domains are too large",
      "D) Arc consistency fails"
    ],
    "correct": "B) No assignment satisfies all constraints"
  },
  {
    "question": "Which game playing concept measures how good a position is for a player?",
    "options": [
      "A) Utility function",
      "B) Constraint satisfaction",
      "C) Path cost",
      "D) Arc consistency"
    ],
    "correct": "A) Utility function"
  },
  {
    "question": "Which term describes a game where all players benefit from cooperation?",
    "options": [
      "A) Cooperative game",
      "B) Zero-sum game",
      "C) Stochastic game",
      "D) Imperfect information game"
    ],
    "correct": "A) Cooperative game"
  },
{
    "question": "A knowledge-based agent primarily consists of which two key components?",
    "options": [
      "A) Knowledge base and inference engine",
      "B) Sensors and actuators",
      "C) Utility function and environment model",
      "D) Search tree and heuristic"
    ],
    "correct": "A) Knowledge base and inference engine"
  },
  {
    "question": "What is the main advantage of a knowledge-based approach?",
    "options": [
      "A) Fast reflex actions without representation",
      "B) Ability to explain decisions using stored knowledge",
      "C) Learning only from raw pixels",
      "D) No need for inference"
    ],
    "correct": "B) Ability to explain decisions using stored knowledge"
  },
  {
    "question": "Which representation is MOST typical in early knowledge-based AI systems?",
    "options": [
      "A) Differential equations",
      "B) Symbolic logic (propositional/first-order)",
      "C) Fourier series",
      "D) Neural embeddings only"
    ],
    "correct": "B) Symbolic logic (propositional/first-order)"
  },
  {
    "question": "In an agent cycle, which step usually comes immediately after perceiving?",
    "options": [
      "A) Update internal state/KB",
      "B) Actuate",
      "C) Shutdown",
      "D) Reset goals"
    ],
    "correct": "A) Update internal state/KB"
  },
  {
    "question": "Which of the following is NOT typical of a knowledge-based agent?",
    "options": [
      "A) Use of entailment/inference",
      "B) Explicit world model",
      "C) Opaque black-box decision making",
      "D) Ability to derive new facts"
    ],
    "correct": "C) Opaque black-box decision making"
  },
  {
    "question": "A knowledge base can hold all EXCEPT:",
    "options": [
      "A) Facts",
      "B) Rules",
      "C) Actions taken by actuators in the past",
      "D) Physical sensor hardware"
    ],
    "correct": "D) Physical sensor hardware"
  },
  {
    "question": "Which of these best describes the **knowledge level** vs. **symbol level**?",
    "options": [
      "A) Hardware vs. software",
      "B) What the agent knows and aims to achieve vs. how it is encoded",
      "C) Input vs. output",
      "D) Supervised vs. unsupervised"
    ],
    "correct": "B) What the agent knows and aims to achieve vs. how it is encoded"
  },
  {
    "question": "In KB-agents, which function maps percept history to action?",
    "options": [
      "A) Policy function",
      "B) Agent function",
      "C) Transition model",
      "D) Utility function"
    ],
    "correct": "B) Agent function"
  },
  {
    "question": "Procedural knowledge in a KB is best captured by:",
    "options": [
      "A) Production rules",
      "B) Raw images",
      "C) Actuator torque values",
      "D) Filesystem paths"
    ],
    "correct": "A) Production rules"
  },
  {
    "question": "Declarative knowledge in a KB refers to:",
    "options": [
      "A) How-to instructions",
      "B) Facts about what is true",
      "C) Hardware schematics",
      "D) Learning parameters"
    ],
    "correct": "B) Facts about what is true"
  },
  {
    "question": "Which is a typical agent program for KB-agents?",
    "options": [
      "A) Simple reflex without state",
      "B) Goal-based with inference over KB",
      "C) Random action selection",
      "D) Always greedy best-first"
    ],
    "correct": "B) Goal-based with inference over KB"
  },
  {
    "question": "Which of the following is a proposition?",
    "options": [
      "A) Close the window",
      "B) $2+2=4$",
      "C) $x>3$",
      "D) Who are you?"
    ],
    "correct": "B) $2+2=4$"
  },
  {
    "question": "The connective $\\land$ represents:",
    "options": [
      "A) Negation",
      "B) Conjunction",
      "C) Disjunction",
      "D) Implication"
    ],
    "correct": "B) Conjunction"
  },
  {
    "question": "$p \\lor q$ is false when:",
    "options": [
      "A) $p$ and $q$ are both false",
      "B) $p$ is true and $q$ is false",
      "C) $p$ is false and $q$ is true",
      "D) both are true"
    ],
    "correct": "A) $p$ and $q$ are both false"
  },
  {
    "question": "$\\neg (p \\land q)$ is equivalent to (De Morgan's Law):",
    "options": [
      "A) $\\neg p \\lor \\neg q$",
      "B) $p \\to q$",
      "C) $p \\leftrightarrow q$",
      "D) $\\neg p \\land \\neg q$"
    ],
    "correct": "A) $\\neg p \\lor \\neg q$"
  },
  {
    "question": "$p \\to q$ is logically equivalent to:",
    "options": [
      "A) $p \\land q$",
      "B) $\\neg p \\lor q$",
      "C) $q \\to p$",
      "D) $p \\leftrightarrow q$"
    ],
    "correct": "B) $\\neg p \\lor q$"
  },
  {
    "question": "The **contrapositive** of $p \\to q$ is:",
    "options": [
      "A) $q \\to p$",
      "B) $\\neg p \\to \\neg q$",
      "C) $\\neg q \\to \\neg p$",
      "D) $p \\leftrightarrow q$"
    ],
    "correct": "C) $\\neg q \\to \\neg p$"
  },
  {
    "question": "A **tautology** is:",
    "options": [
      "A) Always false",
      "B) Sometimes true",
      "C) Always true",
      "D) Undetermined"
    ],
    "correct": "C) Always true"
  },
  {
    "question": "The biconditional $p \\leftrightarrow q$ is true when:",
    "options": [
      "A) $p$ and $q$ have different truth values",
      "B) $p$ and $q$ are both true or both false",
      "C) $p$ is true only",
      "D) $q$ is true only"
    ],
    "correct": "B) $p$ and $q$ are both true or both false"
  },
  {
    "question": "A **contradiction** is:",
    "options": [
      "A) A formula with at least one model",
      "B) A formula with no model",
      "C) Equivalent to a tautology",
      "D) Satisfiable but not valid"
    ],
    "correct": "B) A formula with no model"
  },
  {
    "question": "A **literal** is:",
    "options": [
      "A) Only an atom",
      "B) An atom or its negation",
      "C) Only a negation",
      "D) A clause"
    ],
    "correct": "B) An atom or its negation"
  },
  {
    "question": "$p \\vdash q$ means:",
    "options": [
      "A) $p$ semantically entails $q$",
      "B) $p$ syntactically proves $q$",
      "C) $q$ proves $p$",
      "D) $p$ and $q$ are equivalent"
    ],
    "correct": "B) $p$ syntactically proves $q$"
  },
  {
    "question": "**Soundness** of a proof system means:",
    "options": [
      "A) All valid formulas are provable",
      "B) All provable formulas are valid",
      "C) Some invalid formulas are provable",
      "D) Proofs are short"
    ],
    "correct": "B) All provable formulas are valid"
  },
  {
    "question": "A **clause** is a disjunction of:",
    "options": [
      "A) Formulas",
      "B) Literals",
      "C) Clauses",
      "D) Conjunctions"
    ],
    "correct": "B) Literals"
  },
  {
    "question": "A valuation that makes a formula true is called a:",
    "options": [
      "A) Conflict",
      "B) Model",
      "C) Clause",
      "D) Unit"
    ],
    "correct": "B) Model"
  },
  {
    "question": "A propositional logic agent typically represents the world as:",
    "options": [
      "A) First-order predicates",
      "B) Boolean variables and clauses",
      "C) Probabilistic factors",
      "D) Utility functions only"
    ],
    "correct": "B) Boolean variables and clauses"
  },
  {
    "question": "Percepts are incorporated by:",
    "options": [
      "A) Adding corresponding literals to KB",
      "B) Updating weights",
      "C) Adding non-Boolean terms",
      "D) Ignoring them"
    ],
    "correct": "A) Adding corresponding literals to KB"
  },
  {
    "question": "The primary limitation of propositional agents is:",
    "options": [
      "A) Cannot represent categories",
      "B) No uncertainty",
      "C) No quantification/variables",
      "D) No actions"
    ],
    "correct": "C) No quantification/variables"
  },
  {
    "question": "Goal tests can be formalized as:",
    "options": [
      "A) A clause set entailing goal literals",
      "B) Only minimizing loss",
      "C) Temporal rewards",
      "D) Markov blankets"
    ],
    "correct": "A) A clause set entailing goal literals"
  },
  {
    "question": "Sensing actions primarily affect:",
    "options": [
      "A) Only actuators",
      "B) The knowledge state (what the agent knows)",
      "C) The physical world",
      "D) Utility only"
    ],
    "correct": "B) The knowledge state (what the agent knows)"
  },
  {
    "question": "Observation literals are often treated as:",
    "options": [
      "A) Always uncertain",
      "B) Hard evidence (asserted truths) for that time step",
      "C) Irrelevant",
      "D) Utility modifiers"
    ],
    "correct": "B) Hard evidence (asserted truths) for that time step"
  },
  {
    "question": "Which is NOT a standard agent architecture in AI?",
    "options": [
      "A) Simple reflex",
      "B) Model-based reflex",
      "C) Goal-based",
      "D) Fourier-based"
    ],
    "correct": "D) Fourier-based"
  },
  {
    "question": "A **model-based agent** maintains:",
    "options": [
      "A) No internal state",
      "B) A representation of the world’s dynamics",
      "C) Only a utility function",
      "D) Only raw percepts"
    ],
    "correct": "B) A representation of the world’s dynamics"
  },
  {
    "question": "A **utility-based agent** chooses actions to:",
    "options": [
      "A) Satisfy any rule",
      "B) Maximize expected utility",
      "C) Minimize number of rules",
      "D) Avoid search"
    ],
    "correct": "B) Maximize expected utility"
  },
  {
    "question": "A layered (hybrid) architecture aims to:",
    "options": [
      "A) Use a single loop",
      "B) Combine reactive and deliberative layers",
      "C) Eliminate planning",
      "D) Ignore sensors"
    ],
    "correct": "B) Combine reactive and deliberative layers"
  },
  {
    "question": "In partially observable environments, which architecture helps most?",
    "options": [
      "A) Simple reflex only",
      "B) Model-based",
      "C) No agent can help",
      "D) Random"
    ],
    "correct": "B) Model-based"
  },
  {
    "question": "**Deliberative agents** emphasize:",
    "options": [
      "A) Precomputed reflexes",
      "B) Reasoning and planning with models",
      "C) Random exploration",
      "D) Sensor fusion only"
    ],
    "correct": "B) Reasoning and planning with models"
  },
  {
    "question": "A **belief-state** is:",
    "options": [
      "A) A set/summary of possible world states",
      "B) Only the true state",
      "C) The utility function",
      "D) The action set"
    ],
    "correct": "A) A set/summary of possible world states"
  },
  {
    "question": "Real-time constraints often motivate:",
    "options": [
      "A) More deliberation always",
      "B) Reactive layers with time-bounded decisions",
      "C) Ignoring deadlines",
      "D) Removing sensors"
    ],
    "correct": "B) Reactive layers with time-bounded decisions"
  },
  {
    "question": "Learning components in an agent primarily:",
    "options": [
      "A) Replace sensors",
      "B) Improve performance by updating models/policies",
      "C) Eliminate planning",
      "D) Remove uncertainty"
    ],
    "correct": "B) Improve performance by updating models/policies"
  },
  {
    "question": "An **Agent Communication Language (ACL)** commonly specifies:",
    "options": [
      "A) Syntax, semantics, and pragmatics of messages",
      "B) Only byte order",
      "C) Hardware buses",
      "D) Pixel formats"
    ],
    "correct": "A) Syntax, semantics, and pragmatics of messages"
  },
  {
    "question": "Which is a standard **performative** in KQML/FIPA ACL?",
    "options": [
      "A) REQUEST",
      "B) JPEG",
      "C) TCP_SYN",
      "D) SQL_SELECT"
    ],
    "correct": "A) REQUEST"
  },
  {
    "question": "The content language in ACL messages carries:",
    "options": [
      "A) Network headers",
      "B) Domain-specific knowledge expressions",
      "C) Binary opcodes only",
      "D) Audio signals"
    ],
    "correct": "B) Domain-specific knowledge expressions"
  },
  {
    "question": "A **conversation protocol** defines:",
    "options": [
      "A) Legal sequences of communicative acts",
      "B) Only message sizes",
      "C) Routing tables",
      "D) Ontology names only"
    ],
    "correct": "A) Legal sequences of communicative acts"
  },
  {
    "question": "**Ontologies** in agent communication provide:",
    "options": [
      "A) A shared vocabulary and meaning",
      "B) Compression",
      "C) Encryption",
      "D) Scheduling"
    ],
    "correct": "A) A shared vocabulary and meaning"
  },
  {
    "question": "A **broker/mediator agent** typically:",
    "options": [
      "A) Blocks communication",
      "B) Matches service requests to providers",
      "C) Only logs messages",
      "D) Encrypts content"
    ],
    "correct": "B) Matches service requests to providers"
  },
  {
    "question": "**Argumentation semantics** help agents to:",
    "options": [
      "A) Only send bytes",
      "B) Resolve conflicts and justify decisions",
      "C) Encrypt data",
      "D) Schedule tasks only"
    ],
    "correct": "B) Resolve conflicts and justify decisions"
  },
  {
    "question": "**Propositional logic** is also known as:",
    "options": [
      "A) First-Order logic",
      "B) Predicate logic",
      "C) Boolean logic",
      "D) Ontological logic"
    ],
    "correct": "C) Boolean logic"
  },
  {
    "question": "Which of the following is a valid propositional connective?",
    "options": [
      "A) For all",
      "B) There exists",
      "C) and ($\\land$)",
      "D) :-"
    ],
    "correct": "C) and ($\\land$)"
  },
  {
    "question": "Which method is commonly used in propositional theorem proving?",
    "options": [
      "A) Unification",
      "B) Resolution",
      "C) Clustering",
      "D) Backpropagation"
    ],
    "correct": "B) Resolution"
  }
]