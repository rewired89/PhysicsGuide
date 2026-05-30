// PhysicsGuide concept database

const SECTIONS = [
  {
    id: "basics",
    icon: "⚛️",
    title: "The Basics",
    subtitle: "Matter, mass, units, and the language of physics — before anything else",
    concepts: [

      {
        id: "matter-atoms",
        title: "Matter & Atoms",
        tags: ["intro"],
        chain: ["Everything physical", "Made of molecules", "Made of atoms", "Nucleus + electrons", "Mostly empty space"],
        blurb: "All matter is made of atoms — tiny structures with a dense nucleus and electrons orbiting around it. Your phone, your body, the air — all atoms.",
        detail: `Everything you can see, touch, or feel is made of matter. Matter is anything that has mass and takes up space. And all matter is made of atoms.\n\nAtoms are almost entirely empty space. If you scaled a hydrogen atom up until its nucleus was the size of a marble, the whole atom would be as wide as a football stadium — and the electron would be a speck somewhere near the upper deck.\n\n<strong>The three particles inside atoms:</strong>\n• Proton: positive charge, lives in the nucleus. The number of protons defines the element — 1 proton = hydrogen, 6 = carbon, 8 = oxygen.\n• Neutron: no charge, also in the nucleus. Adds mass but doesn't change what element it is.\n• Electron: negative charge, orbits the nucleus in shells. Electrons are what make chemistry, electricity, and bonding happen.\n\n<strong>Scale check:</strong>\nA human hair is about 1 million atoms wide. Your body contains roughly 7 × 10²⁷ atoms — that's 7 followed by 27 zeros.\n\n<strong>Why this matters for bioinformatics:</strong>\nDNA, proteins, and drugs are just atoms bonded in specific arrangements. Every electrical signal in your brain is ions (charged atoms) moving through membranes. Physics starts here because everything physical starts here.`,
        memory: `Atom = a football stadium. Nucleus = a marble on the 50-yard line. Electrons = gnats somewhere in the upper deck. The rest is empty space.\n\nProtons = what element it is. Electrons = what chemistry and electricity it does. Neutrons = just add mass.`,
        examTip: `Atoms are 99.9999% empty space — but the forces between those particles are powerful enough to make solid matter feel solid. Electrons doing chemistry = chemistry. Electrons moving = electricity. Same particles, different behavior.`,
        facts: ["Atom ≈ 0.1 nm wide", "Protons = element identity", "Electrons = chemistry & electricity", "Nucleus = tiny + dense", "7×10²⁷ atoms in your body", "99.9% empty space"]
      },

      {
        id: "mass-weight",
        title: "Mass vs Weight",
        tags: ["intro"],
        chain: ["Object has matter", "That matter has mass", "Gravity pulls on it", "That pull is a force", "That force = weight"],
        blurb: "Mass is how much matter you have. Weight is the force gravity exerts on that mass. You'd weigh less on the Moon but your mass stays the same.",
        detail: `Mass and weight are constantly mixed up — even by smart people. Here is the actual difference:\n\n<strong>Mass</strong> = how much matter an object has. It does not change. Whether you are on Earth, the Moon, or floating in space, your mass is the same. Measured in kilograms (kg).\n\n<strong>Weight</strong> = the force gravity exerts on your mass. It depends on the gravitational field you are in. Measured in Newtons (N), not kilograms — though bathroom scales cheat and show kg.\n\n<strong>The formula:</strong>\nWeight = mass × gravitational acceleration\nW = mg\n\nOn Earth: g = 9.8 m/s²\nOn the Moon: g = 1.6 m/s²\n\nIf you have a mass of 70 kg:\n• Weight on Earth = 70 × 9.8 = 686 N\n• Weight on Moon = 70 × 1.6 = 112 N\n• Mass everywhere = 70 kg\n\n<strong>The everyday confusion:</strong>\nWhen someone says "I weigh 70 kilograms" they technically mean their mass is 70 kg. True physics weight is always in Newtons. This trips people up constantly.`,
        memory: `Mass = how much stuff you are. Weight = how hard gravity is yanking on that stuff right now.\n\nAstronaut on the Moon: same mass as on Earth. Weighs 6× less. Could jump 6× higher. The stuff did not change — the gravity did.`,
        examTip: `W = mg is one of the most-used formulas in all of physics. A bathroom scale does not actually measure weight in Newtons — it measures the normal force pushing back and converts it to kg. True physics weight is always force, always Newtons.`,
        facts: ["Mass in kg", "Weight in Newtons", "W = mg", "g = 9.8 m/s² on Earth", "g = 1.6 m/s² on Moon", "Mass never changes"]
      },

      {
        id: "si-units",
        title: "Units & the SI System",
        tags: ["intro"],
        chain: ["Need to measure something", "Pick a standard unit", "SI defines 7 base units", "Everything else derived", "Scientists worldwide agree"],
        blurb: "The metric system of science. Seven base units — meters, kilograms, seconds, and four others — that everything in physics is built from.",
        detail: `The SI system (Système International) is the agreed-upon measurement system all science uses. It is built on 7 base units — everything else is combinations of these.\n\n<strong>The 7 base units:</strong>\n• Meter (m) — length\n• Kilogram (kg) — mass\n• Second (s) — time\n• Ampere (A) — electric current\n• Kelvin (K) — temperature\n• Mole (mol) — amount of substance\n• Candela (cd) — luminous intensity\n\n<strong>Key derived units (combinations of the base units):</strong>\n• Newton (N) = kg·m/s² — force\n• Joule (J) = kg·m²/s² — energy\n• Watt (W) = J/s — power\n• Pascal (Pa) = N/m² — pressure\n• Hertz (Hz) = 1/s — frequency\n• Volt (V) = J/C — electric potential\n\n<strong>Metric prefixes (the multipliers):</strong>\n• nano (n) = 10⁻⁹\n• micro (μ) = 10⁻⁶\n• milli (m) = 10⁻³\n• kilo (k) = 10³\n• mega (M) = 10⁶\n• giga (G) = 10⁹`,
        memory: `A Newton is about the weight of an apple — Newton figured out why apples fall, so the unit is named after him. Fitting.\n\nJoule = Newton × meter. Watt = Joule per second. Each unit stacks on the previous ones. Learn the base 7 and you can reconstruct all the rest.`,
        examTip: `You can verify any formula is correct by checking that units balance — called dimensional analysis. Speed = distance/time = m/s. If your formula gives you kg·m instead of m/s, something is wrong. This catches errors instantly and requires no memorization.`,
        facts: ["7 base SI units", "m, kg, s, A, K, mol, cd", "Newton = kg·m/s²", "Joule = N·m", "Watt = J/s", "1 N ≈ weight of an apple"]
      },

      {
        id: "scientific-notation",
        title: "Scientific Notation",
        tags: ["intro"],
        chain: ["Number is huge or tiny", "Move the decimal", "Count the moves", "That count = exponent", "Write as A × 10ⁿ"],
        blurb: "Shorthand for numbers that are astronomically large or impossibly small. Physics spans from atom-sized (10⁻¹⁰ m) to galaxy-sized (10²¹ m) — you need this.",
        detail: `Scientific notation lets you write extreme numbers without losing your mind in zeros.\n\n<strong>The format:</strong>\nA × 10ⁿ — where A is between 1 and 10, and n is an integer\n\n<strong>Real examples:</strong>\n• Speed of light = 300,000,000 m/s = 3 × 10⁸ m/s\n• Size of an atom = 0.0000000001 m = 1 × 10⁻¹⁰ m\n• Avogadro's number = 6.022 × 10²³ (atoms in one mole of anything)\n• Mass of a proton = 1.67 × 10⁻²⁷ kg\n\n<strong>How to convert to scientific notation:</strong>\n1. Put the decimal after the first non-zero digit\n2. Count how many places you moved it\n3. Moved left → positive exponent. Moved right → negative exponent.\n\n45,000 → 4.5 × 10⁴ (moved left 4 places)\n0.0032 → 3.2 × 10⁻³ (moved right 3 places)\n\n<strong>Multiplying:</strong>\nMultiply the coefficients, add the exponents.\n(2 × 10³) × (3 × 10⁴) = 6 × 10⁷\n\n<strong>Why bioinformatics uses this constantly:</strong>\nGenome sizes (3 × 10⁹ base pairs in human DNA), molecular concentrations (10⁻⁶ molar), cell counts — all need scientific notation.`,
        memory: `Scientific notation = the zoom level on a map. 10³ = zoom out to see thousands. 10⁻⁹ = zoom in to nanometers.\n\nPositive exponent = the number is big (decimal moved right when you expand it). Negative exponent = the number is tiny. The exponent counts the zeros or decimal places.`,
        examTip: `Avogadro's number (6.022 × 10²³) bridges the atomic world and the everyday world. One mole of carbon-12 = exactly 12 grams. This connection between atom-scale and gram-scale is fundamental in chemistry, biology, and bioinformatics — it is how you go from molecular weights to real-world amounts.`,
        facts: ["A × 10ⁿ format", "3×10⁸ m/s = speed of light", "10⁻¹⁰ m = atom size", "6.022×10²³ = Avogadro", "Left shift = positive exp", "Right shift = negative exp"]
      },

      {
        id: "scalars-vectors",
        title: "Scalars vs Vectors",
        tags: ["intro"],
        chain: ["Measuring something", "Does direction matter?", "No → scalar", "Yes → vector", "Vectors drawn as arrows"],
        blurb: "Scalars are just numbers. Vectors are numbers with a direction attached. Speed is a scalar. Velocity is a vector. This distinction runs through all of physics.",
        detail: `Some quantities are fully described by a number and unit. Others need a direction too — and without that direction you have incomplete information.\n\n<strong>Scalars (number only):</strong>\n• Speed: 60 km/h\n• Temperature: 25°C\n• Mass: 70 kg\n• Energy: 500 J\n• Distance: 10 km\n• Time: 5 s\n\n<strong>Vectors (number + direction):</strong>\n• Velocity: 60 km/h north\n• Force: 100 N downward\n• Acceleration: 9.8 m/s² toward Earth's center\n• Displacement: 10 km east\n• Momentum: 20 kg·m/s forward\n\n<strong>Why direction matters:</strong>\nTwo people push a box — one pushes east with 100 N, one pushes west with 100 N. The box does not move. The forces cancel. Without knowing direction, you cannot predict what happens.\n\nBoth push east: box gets 200 N eastward. Huge difference.\n\n<strong>Adding vectors:</strong>\n3 N east + 4 N north ≠ 7 N. It equals 5 N at 37° northeast (Pythagorean theorem). Vector math always keeps direction in play.`,
        memory: `Scalar = a speedometer reading. Just 60 mph — no direction.\nVector = GPS navigation. 60 mph AND heading north. Both pieces matter.\n\nVelocity is the vector version of speed. Displacement is the vector version of distance. Every time you add a direction to a scalar, it becomes a vector.`,
        examTip: `Confusion between scalar and vector versions of the same concept causes constant errors. Speed (scalar) vs velocity (vector). Distance (scalar) vs displacement (vector). You can have the same speed in two opposite directions — those are different velocities and different accelerations.`,
        facts: ["Scalar = magnitude only", "Vector = magnitude + direction", "Speed = scalar", "Velocity = vector", "Force = vector", "Vectors drawn as arrows"]
      },

      {
        id: "space-time",
        title: "Space, Time & Reference Frames",
        tags: ["intro"],
        chain: ["Objects exist in 3D space", "Located by x, y, z", "Events happen at a moment in time", "Motion is always relative to a viewpoint", "You choose the reference frame"],
        blurb: "Physics happens in 3D space across time. Before describing any motion you need to know your coordinate system and reference frame — the stage the problem lives on.",
        detail: `Everything in physics happens somewhere in space and at some moment in time. Before describing motion, forces, or energy, you need to establish the stage.\n\n<strong>3D space:</strong>\nTo locate anything, you need three coordinates:\n• x — left/right\n• y — forward/back (or up/down in some setups)\n• z — up/down (or in/out of the page)\n\nEvery point in the universe has an (x, y, z) address relative to some chosen origin.\n\n<strong>Reference frames:</strong>\nMotion is always relative to a viewpoint. You are sitting still relative to your chair. You are moving at 1,670 km/h relative to Earth's axis. You are moving at 108,000 km/h relative to the Sun.\n\nIn physics problems you always pick one reference frame and stick with it. Usually "relative to the ground."\n\n<strong>Origin point:</strong>\nYou choose where zero is. Above origin = positive y. Right of origin = positive x. This is your call — pick whatever makes the math cleanest.\n\n<strong>Time as the 4th dimension:</strong>\nEinstein showed space and time are woven together into spacetime. Moving fast warps time (time dilation). Gravity warps spacetime. At everyday speeds this barely matters — but GPS satellites must account for it or they drift by kilometers per day.`,
        memory: `Space = a 3D grid like the blocks in a city. Every location has a (x, y, z) address. Time = which version of the city you are looking at — 9am versus 5pm.\n\nYou are never "not moving." You are always moving relative to something. Physics always asks: moving relative to what?`,
        examTip: `Choosing a smart reference frame can simplify a problem enormously. In collision problems, solving in the center-of-mass frame is often easier. In projectile problems, setting the launch point as origin (x=0, y=0) clears out unnecessary math. The physics does not change — only the math convenience.`,
        facts: ["3D space = x, y, z", "4D spacetime = Einstein", "Motion is always relative", "Origin = your chosen zero", "GPS needs relativity corrections", "Pick one frame and stick to it"]
      },

    ]
  },

  {
    id: "motion",
    icon: "🏃",
    title: "Motion (Kinematics)",
    subtitle: "Position, velocity, acceleration — how to describe the way things move",
    concepts: [

      {
        id: "position-displacement",
        title: "Position, Distance & Displacement",
        tags: ["core"],
        chain: ["Object starts somewhere", "Moves along a path", "Ends somewhere", "Distance = total path walked", "Displacement = straight arrow from start to end"],
        blurb: "Distance is how far you traveled in total. Displacement is how far you are from where you started, as a straight line. Walk a full circle and your displacement is zero.",
        detail: `Before anything else in motion problems, you need to be clear about these three things.\n\n<strong>Position:</strong>\nWhere an object is right now, measured from a chosen origin. "The car is 50 meters east of the starting line." A vector quantity.\n\n<strong>Distance:</strong>\nThe total length of the path traveled. Always positive. A scalar — no direction needed.\nWalk 3 km north then 4 km south: distance = 7 km.\n\n<strong>Displacement:</strong>\nThe straight-line change from starting position to ending position. A vector — has direction.\nWalk 3 km north then 4 km south: displacement = 1 km south.\n\n<strong>The key difference:</strong>\n• Run a full 400m lap around a track: distance = 400 m, displacement = 0 m\n• Displacement can be zero, positive, or negative\n• Distance can only be zero or positive\n\n<strong>The notation:</strong>\nDisplacement = Δx = x_final − x_initial\n\nΔ (delta) always means "change in." You will see it everywhere. ΔT = change in temperature. Δt = change in time. It just means final minus initial.`,
        memory: `Distance = how far your feet walked (the odometer). Displacement = how far you are from home as the crow flies (a straight arrow from start to finish).\n\nTeleport 5 km away and teleport back: distance = 10 km, displacement = 0 m. You moved — a lot — but ended up where you started.`,
        examTip: `In 1D problems, pick a positive direction at the start and stick to it. If "right = positive," then moving left gives negative displacement. This sign convention is not optional — skipping it causes sign errors that cascade through every calculation.`,
        facts: ["Δx = x_f − x_i", "Δ = change in", "Distance = path length (scalar)", "Displacement = vector", "Distance ≥ 0 always", "Full lap: distance=400m, displacement=0"]
      },

      {
        id: "speed-velocity",
        title: "Speed vs Velocity",
        tags: ["core"],
        chain: ["Object moves", "Measure how fast", "Speed = distance ÷ time", "Velocity = displacement ÷ time", "Velocity needs direction"],
        blurb: "Speed is how fast distance is covered. Velocity is how fast displacement changes — and it needs a direction. Same number, very different meaning.",
        detail: `Speed and velocity both answer "how fast" — but one is missing information that matters enormously.\n\n<strong>Speed (scalar):</strong>\nSpeed = distance / time\nAlways positive. Units: m/s, km/h.\n\nAverage speed = total distance / total time\n\n<strong>Velocity (vector):</strong>\nVelocity = displacement / time = Δx / Δt\nCan be positive, negative, or zero.\n\nAverage velocity = total displacement / total time\n\n<strong>Why they differ:</strong>\nDrive 60 km/h north for 30 minutes, then 60 km/h south for 30 minutes:\n• Average speed = 60 km/h (you were always moving at 60)\n• Average velocity = 0 km/h (you ended exactly where you started)\n\n<strong>Instantaneous vs average:</strong>\nYour speedometer shows instantaneous speed — right now.\nAverage is over an interval of time.\n\n<strong>Unit conversion you will use constantly:</strong>\nTo convert km/h to m/s: divide by 3.6\n60 km/h = 16.7 m/s\n120 km/h = 33.3 m/s`,
        memory: `Speed = a speedometer reading (just a number). Velocity = a GPS navigation readout (speed + direction).\n\nTwo cars going 100 km/h toward each other have the same speed but opposite velocities. That distinction matters enormously when they collide — their velocities add up, not cancel.`,
        examTip: `Constant speed around a curve = constant speed but changing velocity, because direction is changing. A car on a circular track at constant speed is always accelerating — the direction of velocity keeps changing. This surprises people and appears in almost every intro physics course.`,
        facts: ["Speed = d/t (scalar)", "Velocity = Δx/Δt (vector)", "SI unit: m/s", "60 km/h = 16.7 m/s", "Average v = Δx/total time", "Constant speed + curve = changing velocity"]
      },

      {
        id: "acceleration",
        title: "Acceleration",
        tags: ["core"],
        chain: ["Velocity changes", "Measure that change", "Δv ÷ time = acceleration", "Speed up = positive a", "Slow down = negative a", "Turning = also acceleration"],
        blurb: "Acceleration is any change in velocity — speeding up, slowing down, or changing direction. It is not just 'going faster.'",
        detail: `Acceleration is the rate at which velocity changes. Any change in velocity — more speed, less speed, or a different direction — means acceleration is happening.\n\n<strong>The formula:</strong>\na = Δv / Δt = (v_final − v_initial) / time\n\nUnits: m/s² (meters per second per second)\n\n<strong>Sign meaning (depends on your chosen positive direction):</strong>\n• Positive acceleration: speeding up in the positive direction\n• Negative acceleration: slowing down (if moving in positive direction) or speeding up backward\n\n<strong>Examples:</strong>\nCar goes from 0 to 30 m/s in 10 seconds:\na = (30 − 0) / 10 = 3 m/s²\n\nCar brakes from 30 m/s to 0 in 5 seconds:\na = (0 − 30) / 5 = −6 m/s²\n\n<strong>Gravity as acceleration:</strong>\nNear Earth, gravity accelerates everything downward at g = 9.8 m/s².\nDrop something: after 1 second it is going 9.8 m/s. After 2 seconds: 19.6 m/s.\n\n<strong>Turning is accelerating:</strong>\nEven at constant speed, changing direction changes velocity, so acceleration is happening. This is why circular motion requires a constant inward force — something must be accelerating the object toward the center.`,
        memory: `Acceleration = how fast your velocity is changing.\nSpeedometer needle sweeping up = acceleration.\nNeedle sweeping down = deceleration (negative acceleration).\nNeedle steady but you are turning = also acceleration, because direction is changing.\n\nA parked car: v=0, a=0. Car at constant speed straight: v≠0, a=0. Car speeding up: v≠0, a≠0.`,
        examTip: `You can have velocity without acceleration (constant straight-line motion) and acceleration with almost no velocity (something just starting to move from rest). A bullet at constant speed in space has zero acceleration. A ball thrown upward has −9.8 m/s² acceleration the entire time — including at the very top where v=0.`,
        facts: ["a = Δv/Δt", "Units: m/s²", "g = 9.8 m/s² downward", "Turning = acceleration", "+a = speeding up (+dir)", "−a = slowing down (+dir)"]
      },

      {
        id: "kinematic-equations",
        title: "The Kinematic Equations",
        tags: ["core"],
        chain: ["Constant acceleration motion", "5 variables: v₀, v, a, t, Δx", "Know 3 → find the 4th", "Pick equation missing the unknown you do not need", "Solve"],
        blurb: "Four equations that fully describe any motion with constant acceleration. They connect initial velocity, final velocity, acceleration, time, and displacement.",
        detail: `The kinematic equations are your toolkit for every constant-acceleration problem. Master the variables first, then the equations.\n\n<strong>The 5 variables:</strong>\n• v₀ = initial velocity\n• v = final velocity\n• a = acceleration (must be constant)\n• t = time elapsed\n• Δx = displacement\n\n<strong>The 4 equations:</strong>\n• v = v₀ + at                (no Δx)\n• Δx = v₀t + ½at²           (no v)\n• v² = v₀² + 2aΔx           (no t)\n• Δx = ½(v₀ + v)t           (no a)\n\n<strong>Strategy for any problem:</strong>\n1. List every variable and its known value\n2. Identify what you want to find\n3. Pick the equation that contains only that unknown plus things you know\n4. Solve the algebra\n\n<strong>Example:</strong>\nCar starts from rest, accelerates at 4 m/s² for 6 seconds. How far?\nKnown: v₀=0, a=4, t=6. Want: Δx.\nUse Δx = v₀t + ½at² = 0 + ½(4)(36) = 72 m\n\n<strong>Only valid when:</strong>\nAcceleration is constant. Variable acceleration requires calculus.`,
        memory: `Think of these as 4 different keys on a keychain. Each key opens a door that includes a specific set of variables. Missing "t"? Use v² = v₀² + 2aΔx. Missing "v"? Use Δx = v₀t + ½at².\n\nYou always need 3 known values to find a 4th. Physics problems give you exactly enough — if you feel like you are missing something, re-read the problem for hidden clues (starts from rest = v₀=0, stops = v=0).`,
        examTip: `The equation v² = v₀² + 2aΔx is incredibly powerful because it skips time entirely. Braking distance ("how far to stop?") uses this one because time is not given and does not need to be known. Memorize this one first.`,
        facts: ["5 variables: v₀ v a t Δx", "v = v₀ + at", "Δx = v₀t + ½at²", "v² = v₀² + 2aΔx", "Δx = ½(v₀+v)t", "Only valid for constant a"]
      },

      {
        id: "free-fall",
        title: "Free Fall & Gravity",
        tags: ["core"],
        chain: ["Object released", "Only gravity acts", "Accelerates at 9.8 m/s² downward", "Mass does not matter", "In vacuum — feather = hammer"],
        blurb: "In a vacuum, everything falls at the same rate regardless of mass. Gravity accelerates all objects near Earth at 9.8 m/s² downward.",
        detail: `Free fall is what happens to any object when gravity is the only force acting on it — no air resistance, no support.\n\n<strong>The key number: g = 9.8 m/s²</strong>\nEvery object falls with this acceleration near Earth's surface. A feather, a hammer, a person — same acceleration in a vacuum.\n\nAfter 1 second of free fall: 9.8 m/s downward\nAfter 2 seconds: 19.6 m/s downward\nAfter 3 seconds: 29.4 m/s downward\n\n<strong>Why mass does not matter (the math):</strong>\nGravitational force: F = mg\nNewton's 2nd: a = F/m = mg/m = g\nMass cancels. Always. Every time.\n\n<strong>Air resistance changes things in real life:</strong>\nA feather falls slower than a hammer because air resistance affects it more relative to its weight. In a vacuum (proven on the Moon by Apollo 15 astronaut Dave Scott live on TV), both land at the same time.\n\n<strong>Applying kinematic equations to free fall:</strong>\nSubstitute a = −g = −9.8 m/s² (downward = negative)\nDrop from height h, starting from rest:\nΔy = −½gt²  →  time to hit = √(2h/g)\n\n<strong>Thrown upward:</strong>\nA ball thrown up is in free fall the entire time — gravity acts on it going up and coming down. At the peak: v = 0 but a = −9.8 m/s² (still!).`,
        memory: `Galileo dropped cannonballs off the Leaning Tower of Pisa (allegedly). They hit at the same time. Mass does not change free-fall speed.\n\nThink of it this way: gravity pulls harder on heavier things, but heavier things also resist acceleration more. These effects cancel exactly. Always.`,
        examTip: `At the peak of a throw, velocity = 0 but acceleration = 9.8 m/s² downward. People instinctively think acceleration is zero at the top. It is not — acceleration is g downward the entire flight. Only velocity momentarily reaches zero.`,
        facts: ["g = 9.8 m/s² downward", "g ≈ 10 m/s² for estimates", "Mass doesn't affect free fall", "Air resistance does", "v = 0 at peak; a = g still", "Apollo 15 proved it on Moon"]
      },

      {
        id: "projectile-motion",
        title: "Projectile Motion",
        tags: ["core"],
        chain: ["Object launched at angle", "Horizontal: constant velocity", "Vertical: free fall", "Two independent motions", "Combined path = parabola"],
        blurb: "Throw anything at an angle and it follows a parabola. The secret: horizontal and vertical motions are completely independent — solve them separately.",
        detail: `Throw a ball, fire an arrow, launch a catapult — all projectile motion. The key insight makes everything tractable: horizontal and vertical are completely independent.\n\n<strong>Horizontal motion (x-direction):</strong>\nNo horizontal force acts (ignoring air). Velocity stays constant.\nvₓ = v₀·cos(θ) = constant\nΔx = vₓ × t\n\n<strong>Vertical motion (y-direction):</strong>\nGravity pulls down at g = 9.8 m/s²:\nv_y = v₀·sin(θ) − g·t\nΔy = v₀·sin(θ)·t − ½g·t²\n\n<strong>The big proof:</strong>\nA bullet fired horizontally from a height and a bullet dropped from the same height both hit the ground at the same time. The horizontal motion has zero effect on the vertical fall.\n\n<strong>Launch angle effects:</strong>\n• 45° gives maximum range on flat ground\n• Steeper = higher arc, shorter horizontal range\n• Shallower = lower arc, shorter horizontal range\n• Complementary angles give same range: 30° and 60° land at the same spot\n\n<strong>Solving strategy:</strong>\n1. Break v₀ into vₓ (horizontal) and v_y (vertical) using cos and sin\n2. Use vertical equations to find time of flight\n3. Plug that time into horizontal equation for range`,
        memory: `Imagine a ball rolling off a table edge. Horizontally: nothing stops it, keeps the same speed. Vertically: starts falling immediately. Two separate movies playing at once. Combined path = a curve.\n\nThe horizontal and vertical parts of velocity never affect each other. Ever. Separate them, solve each, then combine.`,
        examTip: `One of the most counterintuitive results: drop a ball and fire a gun horizontally at the same moment from the same height — both hit the ground at the same time. The fired ball travels much farther horizontally, but vertically both fall identically. Horizontal speed cannot slow or speed up the vertical fall.`,
        facts: ["Horizontal: constant vₓ", "Vertical: free fall", "45° = max range", "vₓ = v₀·cosθ", "v_y = v₀·sinθ − gt", "Path = parabola"]
      },

    ]
  },

  {
    id: "forces",
    icon: "💪",
    title: "Forces (Dynamics)",
    subtitle: "Newton's three laws, gravity, friction, tension — why things move the way they do",
    concepts: [

      {
        id: "what-is-force",
        title: "What Is a Force?",
        tags: ["intro"],
        chain: ["Two objects interact", "One pushes or pulls the other", "That interaction = force", "Measured in Newtons", "Forces change motion — or try to"],
        blurb: "A force is a push or pull between two objects. Every force involves two things — there is no such thing as a force from nothing acting on nothing.",
        detail: `A force is a push or pull. That is it. But the details matter:\n\n<strong>Forces always come in interactions:</strong>\nEvery force has a source object and a target object. You push a wall. Gravity pulls you toward Earth. A rope pulls a box. No force comes from thin air.\n\n<strong>Units:</strong>\n1 Newton (N) = the force required to accelerate 1 kg at 1 m/s²\n1 N ≈ the weight of a small apple\n\n<strong>Forces are vectors:</strong>\nEvery force has a magnitude (how strong) and a direction (which way). Describing a force without both is incomplete.\n\n<strong>Net force = the whole picture:</strong>\nMultiple forces can act on one object simultaneously. The net force is their vector sum.\nNet force = 0 → object stays still or moves at constant speed (balanced)\nNet force ≠ 0 → object accelerates in the direction of net force\n\n<strong>Contact vs field forces:</strong>\n• Contact forces: require touching. Friction, normal force, tension, applied force.\n• Field forces: act at a distance. Gravity, electric force, magnetic force.`,
        memory: `Force = a shove or a tug between two things. You cannot have a force act on just one object — it always involves two.\n\nA book on a table: gravity pulls it down (Earth pulls book), table pushes it up (table pushes book). Remove the table: net force = gravity. Book falls. Add the table back: net force = 0. Book sits still.`,
        examTip: `"Balanced forces" does NOT mean no forces are present. It means the forces cancel out. A parked car has gravity (down) and normal force (up) both acting on it — both are real, both are large. Net force = 0, so no acceleration. Forces are there; they just cancel.`,
        facts: ["1 N = 1 kg·m/s²", "Always between two objects", "Net force = vector sum", "Net F = 0 → no acceleration", "Contact: friction, normal, tension", "Field: gravity, electric, magnetic"]
      },

      {
        id: "newtons-first-law",
        title: "Newton's 1st Law — Inertia",
        tags: ["core"],
        chain: ["Object at rest", "Stays at rest", "Object in motion", "Keeps moving same direction and speed", "Unless a net force acts on it"],
        blurb: "Things keep doing what they're doing unless something forces them to change. A spaceship with no engine keeps moving forever. That resistance to change is inertia.",
        detail: `Newton's First Law: An object remains at rest or in uniform straight-line motion unless acted upon by a net external force.\n\nThis is also called the Law of Inertia.\n\n<strong>Inertia:</strong>\nThe tendency of an object to resist changes to its motion. More mass = more inertia = harder to start, stop, or redirect.\n\n<strong>Why it seems wrong on Earth:</strong>\nFriction and air resistance are always present. When you stop pushing something, it slows down — which makes it look like things naturally want to stop. They do not. That is friction acting as a force. Remove friction and objects coast forever.\n\n<strong>Real evidence:</strong>\n• A hockey puck on ice coasts an impressively long time — low friction.\n• A satellite in orbit keeps going without any engine — zero friction in space.\n• When a car stops suddenly, your body keeps moving forward — inertia throwing you toward the windshield. The seatbelt is the net force that stops you.\n• The tablecloth trick: yank fast enough and dishes barely move — their inertia resists the change.`,
        memory: `Imagine a bowling ball in space. You push it once. It moves forever in that direction, same speed, forever — until something else touches it. Nothing out there to slow it down. That is Newton's 1st: the default state of anything is to keep doing what it is doing.\n\nOn Earth, friction is the sneaky force that fools us. Objects do not naturally stop — friction stops them.`,
        examTip: `Inertia is proportional to mass. An empty shopping cart vs a full one — same push, very different results. The full cart has more inertia and resists the push. This is also why heavier vehicles take longer to stop — more inertia to overcome, same braking force = longer stop distance.`,
        facts: ["Objects resist change in motion", "Inertia ∝ mass", "No friction in space → coasts forever", "Seatbelt = your stopping net force", "Constant v = zero net force", "Law of Inertia"]
      },

      {
        id: "newtons-second-law",
        title: "Newton's 2nd Law — F = ma",
        tags: ["core"],
        chain: ["Net force applied to mass m", "Object accelerates", "Bigger force → more acceleration", "Bigger mass → less acceleration", "F = ma"],
        blurb: "The math law of motion. Force equals mass times acceleration. Push harder → accelerate more. Same push on something heavier → accelerate less.",
        detail: `Newton's Second Law: The acceleration of an object equals the net force divided by its mass.\n\n<strong>The formula:</strong>\nF = ma  →  a = F/m  →  m = F/a\n\n<strong>Units:</strong>\n1 Newton = 1 kg × 1 m/s²\nThis is not a coincidence — the Newton is defined this way.\n\n<strong>Examples:</strong>\nPush a 5 kg box with 20 N net force:\na = F/m = 20/5 = 4 m/s²\n\nSame 20 N force on a 20 kg box:\na = 20/20 = 1 m/s² (4× heavier → 4× less acceleration)\n\n<strong>The "net" part is critical:</strong>\nF must be the net force — all forces combined after canceling opposites.\nYou push a box with 30 N, friction pushes back 10 N:\nNet force = 20 N (not 30 N)\n\n<strong>Direction matters:</strong>\nF = ma is a vector equation. Acceleration happens in the direction of net force. Push sideways → accelerate sideways.\n\n<strong>Weight as a special case:</strong>\nW = mg is just F = ma with the force being gravity and a = g.`,
        memory: `F = ma is the most important equation in classical physics. Full stop.\n\nPush a soccer ball (tiny mass): it flies. Push a car with the same force: barely moves. Same force, different mass = different acceleration. You feel this every time you move anything.`,
        examTip: `When a problem says "find the net force" — draw all forces, cancel opposites, then you have the net force ready for F = ma. When it says "find the acceleration" — find net force first, then divide by mass. Always in that order: forces first, F = ma second.`,
        facts: ["F = ma", "a = F/m", "1 N = 1 kg·m/s²", "More force → more a", "More mass → less a", "Weight = mg (special case)"]
      },

      {
        id: "newtons-third-law",
        title: "Newton's 3rd Law — Action & Reaction",
        tags: ["core"],
        chain: ["Object A pushes Object B", "B pushes back on A", "Same size force", "Opposite direction", "Always in pairs — no exceptions"],
        blurb: "For every action force there is an equal and opposite reaction force. Rockets work because of this. So do you walking, swimming, and jumping.",
        detail: `Newton's Third Law: For every action force, there is an equal and opposite reaction force.\n\n<strong>The critical detail:</strong>\nThe action and reaction forces act on DIFFERENT objects. They can never cancel each other because you can only add forces that act on the same object.\n\n<strong>Examples everywhere:</strong>\n• Push a wall with 50 N → wall pushes you with 50 N (that reaction is what stops your hand)\n• Rocket burns fuel downward → exhaust pushes backward on rocket → rocket pushed forward\n• Swimmer pushes water backward → water pushes swimmer forward\n• Gun fires bullet forward → gun kicks backward (recoil)\n• You jump: feet push Earth down, Earth pushes you up\n\n<strong>Why Earth does not visibly move when you jump:</strong>\nThe forces ARE equal — you push Earth down with your full weight, Earth pushes you up with that same force. But Earth's mass is 6 × 10²⁴ kg. Using a = F/m: Earth's acceleration is essentially zero. Equal forces + wildly different masses = wildly different accelerations.\n\n<strong>The pair is always:</strong>\n"A exerts force on B" paired with "B exerts equal force back on A." Same type of force, same magnitude, opposite direction.`,
        memory: `Rockets in space = pure Newton's 3rd. No ground to push against. No air. Just throw exhaust backward, and the reaction pushes the rocket forward. That is the only way to move in a vacuum.\n\nSitting in a chair: your weight pushes chair down. Chair pushes you up with equal force. That upward push is why you do not fall through it.`,
        examTip: `Action-reaction pairs always involve two different objects. "You push wall" and "wall pushes you" is the pair. Students often try to label the reaction force as being on the same object — it is not. Draw both objects to find the pair correctly.`,
        facts: ["Equal force, opposite direction", "Always on different objects", "Rockets = 3rd law", "Recoil = 3rd law", "Cannot cancel (different objects)", "Earth barely moves when you jump"]
      },

      {
        id: "types-of-forces",
        title: "The Common Forces",
        tags: ["core"],
        chain: ["Object on a surface", "Gravity pulls down", "Surface pushes up (normal)", "Push it sideways", "Friction resists", "Rope pulls → tension"],
        blurb: "Gravity, normal force, friction, tension, applied force — these are the forces that appear in almost every physics problem. Learn their directions.",
        detail: `Physics uses specific names for the common forces. Learn where each one points.\n\n<strong>Gravity (Weight):</strong>\nDirection: straight down toward Earth's center. Always.\nFormula: W = mg\n\n<strong>Normal Force (N):</strong>\nDirection: perpendicular (90°) to the contact surface.\nWhat it is: the surface pushing back against whatever presses into it.\nOn flat ground: points straight up. On a ramp: points perpendicular to the ramp (not straight up).\n\n<strong>Friction (f):</strong>\nDirection: parallel to the surface, opposing motion or attempted motion.\n• Static friction: prevents things from starting to slide. Adjusts to match applied force up to a maximum value.\n• Kinetic friction: acts while sliding. f = μₖ × N\nCoefficient of friction (μ) is between 0 and ~1+ depending on surfaces.\n\n<strong>Tension (T):</strong>\nDirection: along the rope or string, pulling toward the attachment point.\nA hanging mass: gravity down, tension up along the rope.\n\n<strong>Applied Force:</strong>\nAny direct push or pull — a hand, a motor, a magnet.\n\n<strong>Air Resistance (Drag):</strong>\nDirection: opposite to motion. Increases with speed. Eventually balances gravity → terminal velocity.`,
        memory: `Box being slid across the floor: gravity pulls it down, floor pushes it up (normal), you push it sideways (applied), floor grabs back (friction). Tie a rope to pull from the other side — that is tension.\n\n"Normal" in physics does not mean ordinary — it means perpendicular. The normal force is always at 90° to the surface, even on a ramp.`,
        examTip: `On a ramp, gravity still pulls straight down — but now you must decompose it into two components: one parallel to the ramp (causes sliding) and one perpendicular (balanced by normal force). This is where sin and cos first appear. The normal force on a ramp is mg·cos(θ), not mg.`,
        facts: ["Gravity: W=mg, straight down", "Normal: ⊥ to surface", "Friction: f = μN, opposes motion", "Tension: along rope", "Static f > kinetic f", "Terminal v: drag = gravity"]
      },

      {
        id: "free-body-diagrams",
        title: "Free Body Diagrams",
        tags: ["core"],
        chain: ["Pick one object", "Isolate it", "Draw every force on it as an arrow", "Label name and direction", "ΣF = ma → solve"],
        blurb: "A sketch of all forces acting on a single object. Draw the object as a dot, draw every force as a labeled arrow. This is the essential first step before any force equation.",
        detail: `A free body diagram (FBD) is the most important tool in dynamics. Every force problem starts here.\n\n<strong>How to draw one:</strong>\n1. Draw the object as a simple box or dot\n2. Identify every force acting ON it (not forces it exerts on others)\n3. Draw each force as an arrow pointing away from the center\n4. Arrow direction = force direction, arrow length = relative magnitude\n5. Label each arrow with the force name and value if known\n\n<strong>Book on a table:</strong>\n↑ Normal force N (table pushes up)\n↓ Weight W = mg (gravity pulls down)\nNet: N − W = 0 → no acceleration ✓\n\n<strong>Box pushed across a floor:</strong>\n↑ N, ↓ W (vertical, balanced)\n→ Applied force F (you push right)\n← Friction f (floor resists)\nHorizontal net: F − f = ma\n\n<strong>After drawing the FBD, apply Newton's 2nd:</strong>\nΣFₓ = maₓ\nΣF_y = ma_y\n\nWrite one equation per direction. Solve.\n\n<strong>Common mistake:</strong>\nIncluding forces the object exerts ON others instead of forces ON the object. The Newton's 3rd pair force always goes on the other object's diagram — not yours.`,
        memory: `FBD = a map of every invisible hand grabbing the object. Every force is a hand. Some push up, some pull down, some sideways. The object accelerates in whatever direction the hands' total push points.\n\nAlways ask two questions: "What is physically touching this object?" (contact forces) and "What is acting on it from a distance?" (gravity, electric, magnetic).`,
        examTip: `This is how engineers design bridges, buildings, and machines. They draw every force on every component, verify that net forces are what they want (usually zero for static structures), and make sure nothing collapses. Learning FBDs correctly is learning to think like an engineer or physicist.`,
        facts: ["Draw forces ON the object only", "One object at a time", "Arrows = force vectors", "ΣFₓ = maₓ, ΣFy = may", "Net F = 0 → equilibrium", "3rd-law pairs go on other object's FBD"]
      },

    ]
  },

  {
    id: "energy",
    icon: "⚡",
    title: "Energy & Work",
    subtitle: "Work, kinetic and potential energy, conservation — the fuel behind all motion",
    concepts: [

      {
        id: "work",
        title: "Work",
        tags: ["core"],
        chain: ["Force applied", "Object moves", "Force × distance (in same direction) = work", "Perpendicular force = zero work", "Work measured in Joules"],
        blurb: "Work happens when a force causes displacement in the direction of the force. Carrying a box sideways = zero work. Lifting it = work done.",
        detail: `Work has a precise physics definition, different from the everyday use of the word.\n\n<strong>The formula:</strong>\nW = F × d × cos(θ)\n\nWhere θ = angle between the force direction and the displacement direction.\n\n<strong>Breaking it down:</strong>\n• Push a box horizontally with 10 N for 5 m: W = 10 × 5 × cos(0°) = 50 J (force and motion aligned)\n• Carry a box horizontally while holding it up: force is vertical, motion is horizontal. θ = 90°, cos(90°) = 0. W = 0 J.\n• Lift a 10 kg box 2 m straight up: W = mg × h = 10 × 9.8 × 2 = 196 J\n\n<strong>Units:</strong>\n1 Joule (J) = 1 Newton × 1 meter\n\n<strong>Negative work:</strong>\nFriction opposes motion — angle = 180°, cos(180°) = −1. Friction does negative work. It takes kinetic energy away from a moving object.\n\n<strong>Work-energy theorem:</strong>\nThe net work done on an object equals its change in kinetic energy:\nW_net = ΔKE\n\nThis is one of the most powerful shortcuts in all of mechanics. Use it constantly.`,
        memory: `Carrying groceries from your car: you hold them up (force upward) but walk forward (motion forward). No work in the physics sense — 90° between force and motion. Your arms still get tired because of biological inefficiency, but physics says: zero work done on the groceries.\n\nPushing a car that will not move: displacement = 0. W = F × 0 = 0. Exhausting, but zero physics work.`,
        examTip: `A centripetal force (the inward force keeping something in circular motion) does zero work — it is always perpendicular to the velocity. The object keeps moving in a circle but the centripetal force never adds or removes kinetic energy. Same magnitude of velocity throughout a perfect circle.`,
        facts: ["W = Fd·cosθ", "Units: Joules (J)", "1 J = 1 N·m", "Perpendicular force: W = 0", "W_net = ΔKE", "Friction does negative work"]
      },

      {
        id: "kinetic-energy",
        title: "Kinetic Energy",
        tags: ["core"],
        chain: ["Object has mass", "Object is moving", "Energy stored in that motion", "KE = ½mv²", "Double speed → 4× energy"],
        blurb: "The energy an object has because it is moving. Speed matters twice as much as mass because it is squared — doubling your speed quadruples your kinetic energy.",
        detail: `Kinetic energy is the energy of motion. Anything moving has it.\n\n<strong>The formula:</strong>\nKE = ½mv²\n\nm = mass (kg), v = speed (m/s), result in Joules (J)\n\n<strong>Why v is squared — and why this matters enormously:</strong>\n• Double the mass → KE doubles\n• Double the speed → KE quadruples\n\nThis is why highway crashes are so much deadlier than parking-lot fender-benders. A car at 100 km/h has 4× the kinetic energy of the same car at 50 km/h — 4× the energy to absorb in the crash.\n\n<strong>Examples:</strong>\n1,500 kg car at 20 m/s: KE = ½ × 1500 × 400 = 300,000 J = 300 kJ\n0.01 kg bullet at 900 m/s: KE = ½ × 0.01 × 810,000 = 4,050 J\n(The car has 74× more KE despite the bullet's speed — mass matters a lot)\n\n<strong>KE is always ≥ 0:</strong>\nSpeed is squared (always positive), mass is positive, ½ is positive. KE = 0 only when stopped.\n\n<strong>Connection to work:</strong>\nNet work done on an object = change in KE. Push a box across a frictionless floor with 50 J of net work → its KE increases by exactly 50 J.`,
        memory: `Kinetic = "of motion" (same root as cinema, kinematics). KE = ½mv². The v² is the important part.\n\nSliding on ice and about to hit a wall: double your speed and you hit with 4× the energy. This is why even small increases in speed on roads dramatically increase crash severity. The relationship is not linear — it is quadratic.`,
        examTip: `Use the work-energy theorem (W_net = ΔKE) instead of kinematics whenever time is not needed. "How fast is the block going after being pushed 5 m with a net force of 20 N?" → W = 20×5 = 100 J = ΔKE → solve for v. Often faster than using v² = v₀² + 2aΔx.`,
        facts: ["KE = ½mv²", "Units: Joules", "KE ≥ 0 always", "Double speed = 4× KE", "Double mass = 2× KE", "W_net = ΔKE"]
      },

      {
        id: "potential-energy",
        title: "Potential Energy",
        tags: ["core"],
        chain: ["Object positioned to do work", "Energy stored in that position", "Raised height → gravitational PE", "Stretched spring → elastic PE", "Release it → converts to KE"],
        blurb: "Energy stored in position or configuration — waiting to be released. A raised weight, a compressed spring, a stretched rubber band all have potential energy.",
        detail: `Potential energy is stored energy — capacity to do work, waiting to be released.\n\n<strong>Gravitational Potential Energy (GPE):</strong>\nStored by height in a gravitational field.\nPE = mgh\nm = mass (kg), g = 9.8 m/s², h = height above your chosen reference (m)\n\nExample: lift a 3 kg book 2 m off the floor:\nPE = 3 × 9.8 × 2 = 58.8 J\nDrop it: that 58.8 J converts to kinetic energy on the way down.\n\n<strong>Elastic Potential Energy:</strong>\nStored in compressed or stretched springs.\nPE = ½kx²\nk = spring constant (stiffness, in N/m), x = stretch or compression distance (m)\nSame structure as KE = ½mv² — not a coincidence.\n\n<strong>Chemical Potential Energy:</strong>\nEnergy stored in molecular bonds — food, fuel, batteries.\nWhen bonds break and reform, that PE becomes heat, motion, or other work.\n\n<strong>Choosing h = 0:</strong>\nYou choose the reference height. It is arbitrary. Only changes in height (Δh) matter physically. Often set the lowest point of the problem as h = 0 to avoid negative heights.\n\n<strong>Why this matters for biology:</strong>\nATP (adenosine triphosphate) = chemical PE. When ATP hydrolizes, the released energy powers muscle contractions, ion pumps, and molecular motors. Physics and biology are the same thing at the molecular scale.`,
        memory: `Potential energy = a cocked mousetrap. Nothing happening — but let it go and stored energy converts to fast motion.\n\nHeight stores energy like a bank account. Lift something up = making a deposit. Drop it = the savings become spending (kinetic energy). Higher = bigger balance. The account is always in Joules.`,
        examTip: `The h = 0 reference is arbitrary — you choose it. What matters is Δh. Choosing h = 0 at the lowest point of a problem means all heights are positive, which avoids sign errors. In roller-coaster problems, set the bottom of the track as h = 0.`,
        facts: ["GPE = mgh", "Elastic PE = ½kx²", "Units: Joules", "h = 0 is your choice", "Release → PE becomes KE", "ATP = chemical PE"]
      },

      {
        id: "conservation-of-energy",
        title: "Conservation of Energy",
        tags: ["core"],
        chain: ["Energy in a system", "Changes form constantly", "PE → KE → heat → sound", "Total amount unchanged", "Universe keeps perfect books"],
        blurb: "Energy cannot be created or destroyed, only converted between forms. The total energy in an isolated system is constant — always.",
        detail: `The Law of Conservation of Energy: Energy cannot be created or destroyed. It can be transferred between objects or converted between forms. The total stays constant.\n\n<strong>Where does the energy "go"?</strong>\nWhen a sliding box slows down due to friction, its kinetic energy has not vanished — it became heat (thermal energy) in the floor and box. Every Joule is accounted for.\n\n<strong>Mechanical energy conservation (no friction):</strong>\nKE + PE = constant at every point\n½mv² + mgh = constant\n\n<strong>The roller coaster:</strong>\nAt the top of a hill (high h, low v): mostly PE\nAt the bottom (low h, high v): mostly KE\nTotal stays the same (in the frictionless ideal)\n\n<strong>The most powerful shortcut:</strong>\nDrop something from height h:\nmgh = ½mv²\nv = √(2gh)\n\nYou get the final speed without ever needing time or the kinematic equations.\n\n<strong>With friction (the real world):</strong>\nKE_final = KE_initial + PE_initial − W_friction\nFriction converts mechanical energy to heat. Total energy is still conserved — it is just that some went into heat you could not use.`,
        memory: `Ball rolling inside a bowl. At the rim: all PE. At the bottom: all KE. Rolls up the other side: KE converts back to PE, reaching the same height (in a frictionless bowl). It would go on forever.\n\nThe universe has a perfect energy budget. Every Joule is tracked. You cannot spend what you did not deposit, and nothing is ever deleted.`,
        examTip: `Conservation of energy is almost always faster than kinematics for finding speeds. "How fast at the bottom?" → set top PE = bottom KE. No need to find acceleration, time, or intermediate steps. The more complex the path (curves, ramps, loops), the bigger the advantage of energy methods over kinematics.`,
        facts: ["Energy conserved always", "KE + PE = const (no friction)", "Friction → heat", "v = √(2gh) from height h", "Total energy of universe = constant", "Form changes, total does not"]
      },

      {
        id: "power-efficiency",
        title: "Power & Efficiency",
        tags: ["core"],
        chain: ["Work gets done", "It takes some time", "P = W/t", "Same work faster = more power", "Efficiency = useful output ÷ total input × 100%"],
        blurb: "Power is how fast energy is transferred. Efficiency measures how much input energy becomes useful output versus waste heat.",
        detail: `Power and efficiency are the last two fundamental energy concepts before you move into more complex physics.\n\n<strong>Power:</strong>\nP = W / t = energy transferred / time\nUnits: Watts (W) — 1 Watt = 1 Joule per second\n\nAlternate formula: P = F × v (force × velocity — useful for engines and motors)\n\n<strong>Examples of power scales:</strong>\n• 1 horsepower = 746 W\n• Human peak effort ≈ 500–1,000 W (sustained ≈ 100 W)\n• Car engine ≈ 75,000–200,000 W (75–200 kW)\n• A nuclear power plant ≈ 1,000,000,000 W = 1 GW\n\n<strong>Climbing stairs:</strong>\nYou (70 kg) climb 3 m of stairs in 4 seconds:\nW = mgh = 70 × 9.8 × 3 = 2,058 J\nP = W/t = 2,058/4 ≈ 515 W (close to 0.7 horsepower)\n\n<strong>Efficiency:</strong>\nEfficiency = (useful energy out / total energy in) × 100%\n\n• Gasoline car engine: ~20–40% efficient (most energy becomes heat)\n• Electric motor: ~85–95% efficient\n• LED bulb: ~80–90% efficient\n• Old incandescent bulb: ~5% efficient (95% heat)\n• Human body (mechanical work): ~25% efficient\n\n<strong>Why nothing is 100%:</strong>\nThe 2nd Law of Thermodynamics guarantees some energy always degrades to unusable heat.`,
        memory: `Power = how fast you spend energy. A 100W bulb and a 60W bulb both make light — the 100W one does it faster (uses more Joules per second). Two cars can both reach 100 km/h — a sports car does it in 4 seconds, a truck in 14. Same work, different power.\n\nEfficiency = what fraction of what you put in actually does what you want. The rest becomes waste heat.`,
        examTip: `Watt is a unit of power (energy per time), not energy. Kilowatt-hours (kWh — what you see on electricity bills) is actually an energy unit: 1 kWh = 3,600,000 J = 3.6 MJ. The bill measures energy used, not power. Power × time = energy. Do not confuse watts with watt-hours.`,
        facts: ["P = W/t", "1 W = 1 J/s", "1 hp = 746 W", "P = Fv (alternate)", "Efficiency = useful/total × 100%", "Nothing = 100% efficient"]
      },

    ]
  },

  {
    id: "momentum",
    icon: "🎱",
    title: "Momentum & Collisions",
    subtitle: "Momentum, impulse, elastic vs inelastic collisions — the physics of crashes and impacts",
    concepts: []
  },

  {
    id: "rotation",
    icon: "⚙️",
    title: "Rotation & Torque",
    subtitle: "Angular motion, torque, levers, center of mass — the physics behind catapults and spinning",
    concepts: []
  },

  {
    id: "waves",
    icon: "〰️",
    title: "Waves & Sound",
    subtitle: "Frequency, wavelength, amplitude, sound, resonance, Doppler — how disturbances travel",
    concepts: []
  },

  {
    id: "electricity",
    icon: "🔌",
    title: "Electricity & Magnetism",
    subtitle: "Charge, voltage, current, resistance, circuits, induction — the foundation of electronics",
    concepts: []
  },

  {
    id: "light",
    icon: "💡",
    title: "Light & Optics",
    subtitle: "EM spectrum, reflection, refraction, lenses, diffraction — how light behaves",
    concepts: []
  },

  {
    id: "thermo",
    icon: "🌡️",
    title: "Thermodynamics",
    subtitle: "Temperature, heat, the laws of thermodynamics, entropy — energy in its thermal form",
    concepts: []
  },

  {
    id: "modern",
    icon: "🔬",
    title: "Modern Physics",
    subtitle: "Atoms, quantum basics, radioactivity, E=mc² — where classical physics ends",
    concepts: []
  },

  {
    id: "reference",
    icon: "📋",
    title: "Quick Reference",
    subtitle: "Formulas, constants, unit conversions, Greek letters — your physics cheat sheet",
    concepts: []
  },

];

// Build flat index for search
const ALL_CONCEPTS = SECTIONS.flatMap(s =>
  s.concepts.map(c => ({ ...c, sectionId: s.id, sectionTitle: s.title }))
);
