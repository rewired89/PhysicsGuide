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
    concepts: [

      {
        id: "momentum-impulse",
        title: "Momentum & Impulse",
        tags: ["core"],
        chain: ["Object has mass and velocity", "mass × velocity = momentum", "Force applied over time", "force × time = impulse", "Impulse = change in momentum"],
        blurb: "Momentum is the 'oomph' of a moving object — mass times velocity. Impulse is what changes it: a force applied over time. Longer force contact = bigger momentum change.",
        detail: `Momentum is the physics word for how hard something is to stop.\n\n<strong>Momentum:</strong>\np = mv\nm = mass (kg), v = velocity (m/s)\nUnits: kg·m/s — a vector (has direction)\n\n<strong>Impulse:</strong>\nJ = F × Δt\nA force applied for a duration of time changes an object's momentum.\nJ = Δp = m·Δv\nUnits: N·s = kg·m/s (same as momentum)\n\n<strong>Why impulse matters in safety engineering:</strong>\nTo stop a moving object you need to deliver a certain Δp. You can do this with:\n• Large force for a short time — crashing into a brick wall\n• Small force for a long time — slowing down in a foam barrier\n\nSame change in momentum, very different peak forces. This is why airbags, crumple zones, padded dashboards, and helmets all work the same way: they increase stopping time, which decreases peak force on the body.\n\n<strong>Example:</strong>\n70 kg person at 15 m/s must stop: Δp = 70 × 15 = 1,050 kg·m/s\nStop in 0.05 s (wall): F = 1,050/0.05 = 21,000 N (likely fatal)\nStop in 0.5 s (airbag): F = 1,050/0.5 = 2,100 N (survivable)\n\n<strong>The connection to Newton's 2nd:</strong>\nF = ma = m(Δv/Δt) = Δp/Δt\nForce = rate of change of momentum. This is actually Newton's original formulation of his Second Law.`,
        memory: `Momentum = how hard something is to stop. A slow freight train vs a fast bullet — train wins on momentum even though it is slower, because it is so much heavier.\n\nImpulse = push × time. Car crash into a wall (huge force, tiny time). Car crash into foam barrier (small force, long time). Same total stop, very different experience.`,
        examTip: `The impulse-momentum theorem (J = Δp) explains every piece of safety equipment ever invented. Helmets, airbags, crumple zones — all increase collision time to reduce peak force. Same momentum change, longer time = smaller force on the body. Physics saving lives since the first padded chariot.`,
        facts: ["p = mv", "Units: kg·m/s (vector)", "J = FΔt", "J = Δp", "Same Δp, longer time = less force", "F = Δp/Δt (Newton's original 2nd law)"]
      },

      {
        id: "conservation-of-momentum",
        title: "Conservation of Momentum",
        tags: ["core"],
        chain: ["Two objects in a closed system", "No external forces", "Total momentum before collision", "Equals total momentum after", "What one loses the other gains"],
        blurb: "In any collision or explosion with no external forces, total momentum is conserved. The universe's total momentum is fixed — always.",
        detail: `Conservation of Momentum: the total momentum of an isolated system does not change.\n\n<strong>The math:</strong>\np_before = p_after\nm₁v₁ + m₂v₂ = m₁v₁' + m₂v₂'\n(primes = after-collision values)\n\n<strong>Why it works:</strong>\nNewton's 3rd law guarantees it. During a collision, A exerts force on B and B exerts equal and opposite force on A. Both impulses are equal in magnitude, opposite in direction — they cancel. Total momentum unchanged.\n\n<strong>Pool ball example:</strong>\nCue ball (0.17 kg at 3 m/s) hits identical ball at rest.\np_before = 0.17 × 3 + 0 = 0.51 kg·m/s\nHead-on elastic hit: cue ball stops, target moves at 3 m/s.\np_after = 0 + 0.17 × 3 = 0.51 kg·m/s ✓\n\n<strong>Ice skaters pushing off:</strong>\nBoth at rest: total p = 0. They push off, fly in opposite directions. Their momenta are equal and opposite, still summing to zero.\n\n<strong>What "isolated system" means:</strong>\nNo significant external forces during the event. For brief collisions, friction and gravity do not act long enough to matter — the collision time is so short that external impulse ≈ 0.`,
        memory: `Pool table = the best illustration. Watch a pro break — the cue ball's momentum distributes across all the balls. Total system momentum stays the same, just spread differently.\n\nAstronaut floating in space, throws a wrench forward: wrench goes one way, astronaut drifts the other. Total momentum was zero before, still zero after. To move in space with nothing to push against, throw something.`,
        examTip: `Conservation of momentum works in 2D — conserve x-momentum and y-momentum separately. It also holds in inelastic collisions where kinetic energy is NOT conserved. Momentum conservation is more universal than energy conservation in collision problems — it applies to all collision types without exception.`,
        facts: ["p_before = p_after", "Requires no external forces", "Works in 1D and 2D", "Newton's 3rd guarantees it", "Works for all collision types", "Universe total p = constant"]
      },

      {
        id: "collision-types",
        title: "Elastic vs Inelastic Collisions",
        tags: ["core"],
        chain: ["Objects collide", "Momentum always conserved", "Kinetic energy — elastic: also conserved", "Inelastic: some KE lost to heat", "Perfectly inelastic: they stick together"],
        blurb: "All collisions conserve momentum. Elastic collisions also conserve kinetic energy. Inelastic ones lose KE to heat and deformation. Perfectly inelastic = objects stick and move as one.",
        detail: `Every collision conserves momentum. The difference between types is what happens to kinetic energy.\n\n<strong>Elastic collision:</strong>\nBoth momentum AND kinetic energy conserved. KE_before = KE_after.\nAtoms and subatomic particles collide elastically. Billiard balls are approximately elastic.\nIn a head-on elastic collision between equal masses: they swap velocities entirely — cue ball stops, target ball moves at cue ball's original speed.\n\n<strong>Inelastic collision:</strong>\nMomentum conserved. KE is NOT conserved — some converts to heat, sound, deformation.\nMost real-world collisions: car crashes, sports impacts, anything that deforms.\n\n<strong>Perfectly inelastic collision:</strong>\nMomentum conserved. Maximum KE lost. Objects stick together and move as one.\nExample: a football tackle — tackler and ball-carrier move together.\nFormula: m₁v₁ + m₂v₂ = (m₁ + m₂) × v_final\n\n<strong>Where does the lost KE go?</strong>\nInto heat (metal deforming), sound (the crash noise), and permanent deformation. Total energy is conserved — KE just converts to other forms.\n\n<strong>Why crumple zones are intentionally inelastic:</strong>\nEngineered to absorb as much KE as possible via deformation, reducing what reaches the passenger compartment.`,
        memory: `Elastic = Newton's cradle. Balls bounce off without deforming. Perfect momentum and KE transfer. The click-clack toy on everyone's desk is demonstrating conservation of both.\n\nInelastic = lump of clay hitting a wall. Momentum transferred, but KE goes into squishing the clay flat.\n\nPerfectly inelastic = football tackle. Two separate objects become one combined object moving together.`,
        examTip: `The "coefficient of restitution" measures elasticity: 1 = perfectly elastic, 0 = perfectly inelastic. Superball ≈ 0.9. Tennis ball ≈ 0.75. A lump of clay ≈ 0. It can never exceed 1 — that would create kinetic energy from nothing, violating conservation of energy.`,
        facts: ["All collisions: p conserved", "Elastic: KE also conserved", "Inelastic: KE partially lost to heat", "Perfectly inelastic: objects stick", "KE → heat/sound/deformation", "Crumple zones = intentionally inelastic"]
      },

      {
        id: "explosions",
        title: "Explosions & Recoil",
        tags: ["core"],
        chain: ["System starts at rest", "Internal force acts", "Pieces fly apart", "Momenta equal and opposite", "Total still zero — always"],
        blurb: "An explosion is a reverse collision — one object becomes two flying in opposite directions. Momentum was zero before, so it sums to zero after. Rockets and guns work on this.",
        detail: `Explosions follow the same conservation of momentum rules as collisions — just running backward.\n\n<strong>The math:</strong>\nIf system starts at rest (p_total = 0):\nm₁v₁ + m₂v₂ = 0\nm₁v₁ = −m₂v₂\n\nThe two pieces have equal and opposite momenta.\n\n<strong>Gun recoil:</strong>\nBullet (0.01 kg) fires at 900 m/s forward:\np_bullet = 0.01 × 900 = 9 kg·m/s forward\nGun must have p = 9 kg·m/s backward.\n1 kg gun: recoil = 9 m/s. 3 kg gun: recoil = 3 m/s.\nHeavier gun = same momentum, more mass = less recoil velocity.\n\n<strong>Rocket propulsion:</strong>\nRocket expels exhaust backward → rocket pushed forward.\nNo ground, no air needed. Pure Newton's 3rd + conservation of momentum.\nThis is the only way to accelerate in empty space.\n\n<strong>Astronaut in space:</strong>\nFloating with zero total momentum. Throw a 1 kg wrench at 10 m/s forward.\nYou are 70 kg: v = (1 × 10)/70 = 0.14 m/s backward — toward the ship.\nThrowing things is literally how you navigate in space without a jet pack.`,
        memory: `Explosion = collision film played in reverse. One thing splits into pieces flying apart. Zero momentum before = zero total momentum after. Simple.\n\nGun recoil feels unequal — the bullet goes far and fast, the gun kicks slightly back. But the momentum is equal. The gun's large mass means the equal momentum results in a small velocity kick compared to the tiny bullet.`,
        examTip: `Rocket propulsion in space is pure explosion physics. There is no air to push against — the rocket expels exhaust backward, the equal and opposite reaction pushes the rocket forward. Ion thrusters do this with tiny but continuous momentum transfer, building to enormous speeds over weeks and months.`,
        facts: ["p_total = 0 before and after", "m₁v₁ = −m₂v₂", "Heavier object = less recoil speed", "Rocket = continuous explosion", "No ground needed in space", "Throw something to move in space"]
      },

    ]
  },

  {
    id: "rotation",
    icon: "⚙️",
    title: "Rotation & Torque",
    subtitle: "Angular motion, torque, levers, center of mass — the physics behind catapults and spinning",
    concepts: [

      {
        id: "angular-motion",
        title: "Angular Motion",
        tags: ["core"],
        chain: ["Object rotates", "Angle replaces distance", "Angular velocity ω = angle ÷ time", "Angular acceleration α = Δω ÷ time", "Every linear concept has a rotational twin"],
        blurb: "Rotation is linear motion wrapped in a circle. Every concept translates — distance becomes angle, velocity becomes angular velocity, force becomes torque.",
        detail: `Rotation has its own set of variables, but they map one-to-one with what you already know from linear motion.\n\n<strong>Linear → Rotational equivalents:</strong>\n• Distance (x) → Angle (θ), measured in radians\n• Velocity (v) → Angular velocity (ω, omega), rad/s\n• Acceleration (a) → Angular acceleration (α, alpha), rad/s²\n• Mass (m) → Rotational inertia (I), kg·m²\n• Force (F) → Torque (τ, tau), N·m\n• Momentum (p=mv) → Angular momentum (L=Iω), kg·m²/s\n\n<strong>Radians:</strong>\nOne full rotation = 2π radians ≈ 6.28 rad = 360°\nHalf rotation = π rad = 180°\nConvert: degrees × (π/180) = radians\n\n<strong>Relationship between rotation and linear motion:</strong>\nA point on a rotating object at radius r from the axis:\n• Linear speed at that point: v = ωr\n• Linear acceleration: a = αr\n\nThis is why the outer edge of a spinning disc moves much faster than the inner part — same angular velocity ω, but larger r = larger linear v.\n\n<strong>Rotational kinematic equations:</strong>\nIdentical to linear, just substitute θ for x, ω for v, α for a:\n• ω = ω₀ + αt\n• θ = ω₀t + ½αt²\n• ω² = ω₀² + 2αθ`,
        memory: `Spinning pizza. Every slice rotates through the same angle in the same time — same ω. But the crust (far from center) moves much faster in a straight line than the dough near the center. Same ω, different r = very different v = ωr.\n\nRecord player, CD, hard drive disk, washing machine drum — all the same physics. Inner parts and outer parts have the same angular speed but wildly different linear speeds.`,
        examTip: `The outer edge of any rotating object has higher linear speed than the inner parts. A CD drive constantly adjusts rotation speed because as the laser moves from the center to the edge, it needs to maintain the same linear speed across the disc (which requires decreasing ω as r increases). v = ωr in every direction.`,
        facts: ["2π rad = 360°", "ω = angular velocity (rad/s)", "α = angular acceleration (rad/s²)", "v = ωr (linear speed at radius r)", "All kinematic eqns apply with rotational vars", "L = Iω (angular momentum)"]
      },

      {
        id: "torque",
        title: "Torque",
        tags: ["core"],
        chain: ["Force applied at distance from pivot", "τ = r × F × sin(θ)", "Farther from pivot = more torque", "Force perpendicular = maximum torque", "Torque causes angular acceleration"],
        blurb: "Torque is the rotational equivalent of force — what causes things to spin. Force × distance from the pivot = torque. The farther out you push, the more rotational effect.",
        detail: `Torque is to rotation what force is to linear motion. Apply torque to something and it angularly accelerates — it starts spinning, spins faster, or slows its spin.\n\n<strong>The formula:</strong>\nτ = r × F × sin(θ)\nτ = torque (N·m)\nr = distance from pivot to where force is applied (the "lever arm"), in meters\nF = force magnitude (N)\nθ = angle between the force direction and the lever arm\n\nMaximum torque: force perpendicular to lever arm (θ = 90°, sin(90°) = 1)\nτ = rF\n\n<strong>Why lever arm distance matters:</strong>\n10 N force at 0.3 m: τ = 3 N·m\nSame 10 N force at 1.2 m: τ = 12 N·m (4× more torque, same force)\n\n<strong>Everyday examples:</strong>\n• Door: push near the hinge (small r) = barely opens. Push at the handle (large r) = swings easily.\n• Wrench: longer handle = more torque on the bolt with the same hand force. Why mechanics use long-handled torque wrenches.\n• Bicycle pedals: maximum torque when crank is horizontal (force perpendicular to crank).\n\n<strong>Net torque → rotation (analog of F = ma):</strong>\nΣτ = Iα\nNet torque = rotational inertia × angular acceleration`,
        memory: `Torque = leverage. A door is the perfect live demo. Push near the hinge (r ≈ 5 cm) = have to lean hard. Push at the doorknob (r ≈ 90 cm) = easy. Same force, 18× different torque. τ = rF.\n\nWhy do jar lids have wide tops? More r = more torque from the same hand grip. Why do steering wheels exist instead of just a control rod? Larger radius = more torque from your arms to steer.`,
        examTip: `A force aimed directly at the pivot point produces zero torque — it passes through the pivot so r is zero, or θ = 0° so sin(0°) = 0. Both give τ = 0. This is why pushing parallel to a door from the hinged side does nothing. Only the perpendicular component of force relative to the lever arm creates torque.`,
        facts: ["τ = rF·sinθ", "Units: N·m", "Max torque: F ⊥ lever arm", "Longer arm = more torque", "Στ = Iα", "Door near hinge = hard; at knob = easy"]
      },

      {
        id: "levers",
        title: "Levers & Mechanical Advantage",
        tags: ["core"],
        chain: ["Pivot point (fulcrum)", "Effort force on one side", "Load on the other", "Torques balance at equilibrium", "Longer arm = less force needed"],
        blurb: "A lever amplifies force by trading distance. Push less force over more distance and you can move a heavier load over less distance. Same work done, easier effort.",
        detail: `A lever is the simplest machine and it works entirely through torque balance.\n\n<strong>The principle:</strong>\nAt equilibrium, torque in = torque out:\nF_effort × d_effort = F_load × d_load\n\nMechanical Advantage (MA) = F_load / F_effort = d_effort / d_load\n\n<strong>The three lever classes:</strong>\n\n• Class 1: Fulcrum between effort and load.\nExamples: see-saw, crowbar, scissors, pliers.\nMA can be > 1 or < 1 depending on fulcrum position.\n\n• Class 2: Load between fulcrum and effort.\nExamples: wheelbarrow, nutcracker, bottle opener, door (hinge=fulcrum).\nAlways MA > 1 (always multiplies force).\n\n• Class 3: Effort between fulcrum and load.\nExamples: tweezers, fishing rod, your forearm lifting something.\nAlways MA < 1 — less force output but faster/larger movement at the end.\n\n<strong>The trade-off (conservation of energy):</strong>\nYou cannot get more work out than you put in.\nMA = 5: exert 5× less force — but over 5× more distance.\nWork (force × distance) is the same on both sides.\n\n<strong>Your skeleton is full of class 3 levers:</strong>\nForearm: elbow = fulcrum, bicep attaches ~4 cm from elbow, hand is ~35 cm out.\nMA = 4/35 ≈ 0.11 — bicep exerts ~9× the weight you are holding!\nYou trade force for speed and range of motion. Evolution chose dexterity over raw power.`,
        memory: `Archimedes: "Give me a lever long enough and a fulcrum on which to place it, and I shall move the world." He meant this literally — mechanical advantage can be arbitrarily large.\n\nSee-saw: heavier kid sits closer to the center. Lighter kid sits at the edge. They balance when torques are equal: (heavy × short arm) = (light × long arm).`,
        examTip: `Your forearm being a class 3 lever (MA < 1) seems like a bad design until you consider speed and range: the hand moves 9× farther and faster than the muscle contracts. That is why you can throw, play piano, and type. Evolution traded force efficiency for speed and precision.`,
        facts: ["F_e × d_e = F_L × d_L", "MA = F_load/F_effort", "Class 1: fulcrum middle", "Class 2: load middle (MA>1)", "Class 3: effort middle (MA<1)", "Your forearm = class 3 lever"]
      },

      {
        id: "center-of-mass",
        title: "Center of Mass",
        tags: ["core"],
        chain: ["Object has mass distributed throughout", "Weighted average position of all that mass", "Gravity acts here effectively", "Balance at this point = no tipping", "Projectiles rotate around this point"],
        blurb: "The center of mass is the balance point — where gravity effectively acts on an object. Gravity, net forces, and rotation all relate to this single point.",
        detail: `The center of mass (CM) is the one point where you can treat all of an object's mass as if it were concentrated.\n\n<strong>For uniform objects:</strong>\nThe CM is the geometric center.\n• Uniform rod: the midpoint\n• Uniform disk or sphere: the center\n\n<strong>For non-uniform objects:</strong>\nThe CM is pulled toward the heavier side.\nFormula: x_cm = (m₁x₁ + m₂x₂) / (m₁ + m₂)\nThe weighted average of all positions.\n\n<strong>Why it matters:</strong>\n\n1. Stability — to avoid tipping, the CM must stay directly above the base of support.\n   Wide base + low CM = stable (sumo wrestler)\n   Narrow base + high CM = unstable (balancing on tiptoe)\n\n2. Projectile rotation — thrown objects spin around their CM while the CM follows a perfect parabola.\n   A tumbling hammer thrown across a room: the CM traces a clean arc even as the hammer rotates chaotically around it.\n\n3. Collision prediction — the CM of a system moves at constant velocity when no external forces act.\n\n<strong>Stability in real design:</strong>\nRace cars: wide and low (low CM, wide base). Double-decker buses: narrow and tall (always a stability concern — passengers affect CM height). Cranes: counterweights placed to keep CM over the base.`,
        memory: `Balance a ruler on one finger. The balance point = center of mass. Everything left weighs the same as everything right.\n\nA falling cat always lands on its feet: it rotates its body to reposition its legs toward the ground — all while the CM follows a fixed parabolic fall path. The CM must fall straight; the cat rearranges around it.`,
        examTip: `The trick question in stability: you stand on one foot near a cliff edge. Your CM must stay directly above your foot or you fall. Lean forward and your CM moves forward — past the foot = you tip over. This is why spreads legs wider when carrying something heavy: wider base keeps CM comfortably centered.`,
        facts: ["CM = weighted average position", "x_cm = Σ(mᵢxᵢ)/Σmᵢ", "Gravity acts at CM", "Wide base + low CM = stable", "Projectiles: CM traces parabola", "Human CM ≈ belly-button height"]
      },

      {
        id: "rotational-inertia",
        title: "Rotational Inertia — The Bucket & Catapult",
        tags: ["core"],
        chain: ["Mass at distance r from axis", "Resists rotation as I = Σmr²", "Far from axis = much more inertia", "Bucket far from pivot = massive effect", "Pull mass inward → spins faster"],
        blurb: "Rotational inertia is how hard it is to start or stop rotation. Where the mass is matters as much as how much — mass far from the axis resists rotation far more than mass near it.",
        detail: `Rotational inertia (moment of inertia) is the rotational version of mass — how much an object resists angular acceleration.\n\n<strong>The formula:</strong>\nI = Σmr²\nFor each piece of mass: multiply its mass by the square of its distance from the axis. Sum everything.\n\n<strong>Why distance is squared — the key insight:</strong>\n1 kg at 1 m from axis: I = 1 kg·m²\nSame 1 kg at 2 m: I = 4 kg·m² (4× harder to spin)\nDouble the distance → quadruple the rotational inertia.\n\n<strong>Common objects:</strong>\n• Solid disk (axis through center): I = ½MR²\n• Hoop (all mass at edge): I = MR²  ← 2× harder to spin than a disk of equal mass!\n• Solid sphere: I = ⅖MR²\n• Rod rotating about its end: I = ⅓ML²\n\n<strong>The catapult and bucket — you already felt this:</strong>\nWhen you were thinking through the catapult, you understood that the bucket positioned far from the pivot swings with enormous power. That is I = Σmr². The bucket's mass contributes to the system's rotational inertia as m × r² — and since r is squared, moving it farther out multiplies its contribution dramatically. Moving the bucket closer to the pivot shrinks r², reducing the angular momentum the system can store and deliver.\n\n<strong>Conservation of angular momentum:</strong>\nL = Iω = constant (no external torque)\nDecrease I (pull mass inward) → ω must increase.\nIncrease I (push mass outward) → ω decreases.`,
        memory: `Figure skater: arms wide out = slow spin (large I, lots of mass far from axis). Pull arms in tight = fast spin (small I, mass close to axis). Angular momentum L = Iω stays constant. Shrink I → ω shoots up instantly.\n\nThis is the most dramatic live demonstration of rotational inertia you can watch. The same physics drives the catapult, a diver tucking, a gymnast spinning, and planets forming from a collapsing gas cloud (it spins faster as it contracts).`,
        examTip: `Conservation of angular momentum: L = Iω = constant when no external torque acts. Divers tuck (small I) to spin fast for multiple flips, then extend (large I) to slow rotation and enter water cleanly. Solar system formation: a vast slowly-rotating gas cloud collapsed (smaller r) and spun faster — that is why planets orbit fast and the Sun rotates.`,
        facts: ["I = Σmr²", "Far from axis = 4× more I per unit mass", "Hoop I = MR²", "Disk I = ½MR²", "L = Iω = conserved", "Skater arms in → faster spin"]
      },

    ]
  },

  {
    id: "waves",
    icon: "〰️",
    title: "Waves & Sound",
    subtitle: "Frequency, wavelength, amplitude, sound, resonance, Doppler — how disturbances travel",
    concepts: [

      {
        id: "what-are-waves",
        title: "What Are Waves?",
        tags: ["core"],
        chain: ["Disturbance created in a medium", "Energy transfers outward", "Particles oscillate in place", "Matter does not travel", "Energy does"],
        blurb: "A wave is a disturbance that transfers energy without transferring matter. The medium oscillates in place while energy moves through it.",
        detail: `Waves are how energy moves through space and matter. The key: the medium carries the energy, but the medium itself stays put.\n\n<strong>The fundamental insight:</strong>\nThrow a rock into a pond. Ripples spread outward. The water molecules do not travel outward — they bob up and down where they are. Energy travels; water stays.\n\n<strong>Two types of mechanical waves:</strong>\n• Transverse waves: particles oscillate perpendicular to the wave's direction of travel.\nExamples: waves on a string, water surface waves, light.\n\n• Longitudinal waves: particles oscillate parallel to the wave's direction of travel.\nExamples: sound, pressure waves in a spring, seismic P-waves.\n\n<strong>What waves require:</strong>\n• Mechanical waves (sound, water, seismic) need a physical medium to propagate.\n• Electromagnetic waves (light, radio, X-ray) need no medium — they travel through vacuum.\n\n<strong>Interference:</strong>\nWaves can overlap and combine:\n• Constructive interference: crests align → amplitudes add → bigger wave\n• Destructive interference: crests meet troughs → amplitudes cancel → smaller or zero wave\n\nThis is what noise-canceling headphones do: generate a wave that destructively interferes with ambient noise. Same principle creates the dark fringes in a double-slit experiment.`,
        memory: `Stadium wave. People stand and sit in sequence. Nobody leaves their seat (the medium stays put). The "wave" travels around the stadium (energy propagates).\n\nThe ocean swell approaching the beach: the water barely moves horizontally. The swell is pressure passing through stationary water — like a rumor spreading through a crowd without the rumor-carrier moving.`,
        examTip: `Light is a transverse electromagnetic wave that needs no medium. Scientists once invented a fictional substance called "aether" to give light something to wave through. The Michelson-Morley experiment (1887) proved aether does not exist — light propagates through pure vacuum. This eventually led to Einstein's theory of special relativity.`,
        facts: ["Wave = energy transfer, not matter transfer", "Medium stays in place", "Transverse: ⊥ oscillation (light, strings)", "Longitudinal: ∥ oscillation (sound)", "Mechanical: needs medium", "EM waves: no medium needed"]
      },

      {
        id: "wave-properties",
        title: "Frequency, Wavelength & Amplitude",
        tags: ["core"],
        chain: ["Wave exists", "Amplitude = peak height (energy)", "Wavelength = one full cycle length", "Frequency = cycles per second", "v = fλ connects them all"],
        blurb: "Every wave is described by four properties: amplitude, wavelength, frequency, and wave speed. They are all connected by v = fλ.",
        detail: `Any wave can be fully described by four numbers — and they are all linked.\n\n<strong>Amplitude (A):</strong>\nThe maximum displacement from equilibrium. Height of a water crest, pressure variation in sound, electric field strength in light.\nAmplitude determines energy: larger amplitude = more energy per wave.\nLouder sound = higher amplitude. Brighter light = higher amplitude.\n\n<strong>Wavelength (λ, lambda):</strong>\nDistance between two identical adjacent points — crest to crest, or trough to trough.\nMeasured in meters.\n\n<strong>Frequency (f):</strong>\nNumber of complete cycles passing a fixed point per second.\nUnits: Hertz (Hz) = cycles/second.\nHuman hearing range: 20 Hz – 20,000 Hz.\n\n<strong>Period (T):</strong>\nTime for one complete cycle: T = 1/f (period and frequency are inverse)\n\n<strong>Wave speed (v):</strong>\nHow fast the wave travels through the medium.\nv = fλ ← the wave equation. Memorize this.\nv = λ/T (also true)\n\nSpeed of sound in air ≈ 343 m/s.\nSpeed of light in vacuum = 3 × 10⁸ m/s.\n\n<strong>Example:</strong>\nMiddle A on a piano: f = 440 Hz, sound speed = 343 m/s.\nλ = v/f = 343/440 = 0.78 m — about arm's length. You are always surrounded by sound waves roughly this size.`,
        memory: `Frequency = how fast the wave cycles. Pitch in music = frequency. High note = high f = short λ.\nAmplitude = how tall the wave is. Volume = amplitude. Loud = large amplitude.\n\nv = fλ reads as: wave speed = (how many per second) × (how long each one is). Intuitive: 4 cycles/second, each 0.5 m long → wave moves 2 m/s.`,
        examTip: `Wave speed in a given medium is fixed by the medium — it does not depend on frequency or amplitude. If frequency increases, wavelength must decrease proportionally to keep v = fλ constant. High-pitched sounds have shorter wavelengths than low-pitched sounds in the same air. Same rule applies to light across the electromagnetic spectrum.`,
        facts: ["v = fλ", "f in Hz (cycles/s)", "T = 1/f", "Amplitude → energy", "Sound in air = 343 m/s", "Light = 3×10⁸ m/s"]
      },

      {
        id: "sound-waves",
        title: "Sound Waves",
        tags: ["core"],
        chain: ["Vibrating source", "Compresses nearby air molecules", "Pressure wave propagates outward", "Alternating high and low pressure", "Eardrum vibrates → you hear it"],
        blurb: "Sound is a longitudinal pressure wave — compressions and rarefactions moving through a medium. No medium = no sound. Pitch = frequency. Volume = amplitude.",
        detail: `Sound is your ears detecting pressure waves moving through air (or water, metal, or anything physical).\n\n<strong>How sound works:</strong>\nA vibrating object (speaker cone, vocal cord, guitar string) pushes air molecules together — compression. As it moves back, it pulls them apart — rarefaction. This compression-rarefaction pattern propagates outward at 343 m/s through air at room temperature.\n\n<strong>Pitch = frequency:</strong>\nBass: 80–300 Hz\nMidrange: 300–3,000 Hz\nTreble: 3,000–20,000 Hz\nBats use 20,000–100,000+ Hz (ultrasound). Elephants use below 20 Hz (infrasound, over kilometers).\n\n<strong>Volume = amplitude, measured in decibels (dB):</strong>\n0 dB = threshold of hearing\n60 dB = normal conversation\n85 dB = hearing damage with prolonged exposure\n120 dB = pain threshold\n\nThe decibel scale is logarithmic: +10 dB = 10× the intensity. A 90 dB sound is 10× more intense than 80 dB, not just a bit louder.\n\n<strong>Speed of sound varies with medium:</strong>\nAir at 20°C: 343 m/s\nWater: ~1,480 m/s (~4× faster)\nSteel: ~5,100 m/s (~15× faster)\nDenser solids transmit sound faster because the molecules are tightly coupled.\n\n<strong>Echolocation:</strong>\nBats and dolphins emit pulses, time the echo, calculate distance. Dolphins can detect objects 1 mm in size from meters away. Medical ultrasound imaging uses the same principle.`,
        memory: `Thunder and lightning: light reaches you essentially instantly (3×10⁸ m/s), sound arrives later (343 m/s). Count seconds between flash and thunder, divide by 3 → approximate distance in kilometers. Every 3 seconds ≈ 1 km.\n\nNo air in space = no sound. Movie explosions in space are completely silent in reality. The cool sound design is a lie — but a forgivable one.`,
        examTip: `Knocking on a wall to communicate works because sound travels much faster through the solid wall (~5,000 m/s in steel or concrete) than through the adjacent air (343 m/s). The solid medium transmits faster because the molecules are more tightly coupled — each push immediately affects its neighbor.`,
        facts: ["Longitudinal pressure wave", "343 m/s in air at 20°C", "Pitch = frequency", "Volume = amplitude", "Decibels = log scale (logarithmic)", "No medium = no sound"]
      },

      {
        id: "resonance",
        title: "Resonance & Standing Waves",
        tags: ["core"],
        chain: ["System has natural frequency", "Drive it at that frequency", "Each push adds to the last", "Amplitude builds large", "Standing waves form at harmonics"],
        blurb: "Resonance occurs when you push a system at its natural frequency — small forces accumulate into large oscillations. Behind music, MRI machines, and the Tacoma Narrows Bridge collapse.",
        detail: `Every physical object has a natural frequency at which it vibrates when disturbed. Push it at that exact frequency and the oscillations build to large amplitudes.\n\n<strong>The key mechanism:</strong>\nEach push arrives in sync with the existing oscillation, adding to it. Like pushing a swing at exactly the right moment every time — small pushes produce a very large swing.\n\n<strong>Standing waves:</strong>\nWhen waves reflect back and forth in a confined space (guitar string, organ pipe, room), they interfere with themselves. At specific frequencies (harmonics), constructive interference creates stable patterns:\n• Nodes: points of zero movement (fixed ends of a string)\n• Antinodes: points of maximum movement\n\nFor a string of length L:\nFundamental frequency: f₁ = v/(2L)\nHarmonics: f₂ = 2f₁, f₃ = 3f₁...\n\n<strong>Musical instruments = resonance chambers:</strong>\nGuitar: string length and tension determine harmonics → pitch.\nOrgan pipe: air column resonates at specific frequencies → note.\nVoice: your vocal tract is a resonant cavity — you shape it to amplify certain harmonics.\n\n<strong>Resonance disasters:</strong>\nTacoma Narrows Bridge (1940): wind drove oscillations at the bridge's natural frequency. The bridge collapsed from resonance — not from excessive wind force, but from sustained wind at the right frequency.\n\n<strong>Resonance in technology:</strong>\nMRI: radio waves at hydrogen atoms' resonant frequency cause them to absorb and re-emit energy, creating the image.\nQuartz clocks: a quartz crystal's mechanical resonance (32,768 Hz) keeps precise time.`,
        memory: `Pushing a child on a swing: push at the wrong moment = low swing. Push at the natural period = each push adds to the last = huge swing from tiny effort. That is resonance.\n\nThe Tacoma Narrows Bridge video is required viewing — a 600-meter suspension bridge undulating and then tearing itself apart from wind-driven resonance. The engineers built for static loads but underestimated dynamic resonance. Watch it once and you will never forget resonance.`,
        examTip: `Standing wave on a string with both ends fixed: nodes at both ends, length L must be a whole number of half-wavelengths. L = nλ/2, so λ = 2L/n, so f = nv/2L. The fundamental (n=1) fits one half-wavelength in the string. The 2nd harmonic (n=2) fits one full wavelength. Guitar strings produce a blend of all harmonics simultaneously — that blend is the timbre of the instrument.`,
        facts: ["Resonance: drive at natural freq", "Every object has natural freq", "Nodes: zero displacement", "Antinodes: max displacement", "f₁ = v/2L (string fundamental)", "MRI uses nuclear resonance"]
      },

      {
        id: "doppler-effect",
        title: "The Doppler Effect",
        tags: ["core"],
        chain: ["Source emits waves", "Source moves toward you", "Wavefronts compressed", "Higher frequency perceived", "Source moves away → stretched waves → lower frequency"],
        blurb: "When a wave source moves relative to you, the perceived frequency changes. Approaching = higher pitch. Receding = lower pitch. Works for sound AND light — and proves the universe is expanding.",
        detail: `The Doppler effect is the change in perceived frequency when a source and observer move relative to each other.\n\n<strong>Why it happens:</strong>\nSource moving toward you: each successive wave emitted is slightly closer to you. Wavefronts are compressed — you receive more cycles per second than were emitted → higher perceived frequency.\n\nSource moving away: waves emitted from progressively farther away → wavefronts stretched → fewer cycles per second → lower perceived frequency.\n\n<strong>The ambulance example:</strong>\nThe ambulance siren emits a constant frequency. Approaching you: high pitch (WHEEE). Moving away: low pitch (WAAH). The siren did not change — only the relative motion changed what you perceive.\n\n<strong>Formula for sound:</strong>\nf_obs = f_source × (v ± v_observer) / (v ∓ v_source)\nv = speed of sound; use + when moving toward, − when moving away.\n\n<strong>Doppler effect for light:</strong>\n• Source moving toward you → light blueshifted (compressed toward shorter/bluer wavelengths)\n• Source moving away → light redshifted (stretched toward longer/redder wavelengths)\n\nEdwin Hubble (1929): all distant galaxies are redshifted, meaning they are all moving away from us. The farther the galaxy, the more redshifted. This proved the universe is expanding.\n\n<strong>Applications:</strong>\n• Police radar: measures Doppler shift of reflected radio waves → speed\n• Weather Doppler radar: detects rain moving toward or away → wind patterns\n• Medical ultrasound: measures blood flow velocity via Doppler shift\n• Exoplanet detection: star wobbles toward/away as planet orbits → Doppler shift reveals the wobble`,
        memory: `Train passing through a station: high-pitched horn approaching, then a clear pitch drop as it passes. The horn's actual frequency never changed — your perception did as relative motion reversed.\n\nBlueshift = approaching (light compressed toward blue). Redshift = receding (light stretched toward red). Hubble saw everything redshifted → everything moving away → universe expanding. The Big Bang is the consequence of running that expansion backward.`,
        examTip: `Police radar guns measure Doppler shift of reflected radio waves. The car reflects the radar signal at a frequency shifted by the car's speed — the radar computes the shift and calculates speed directly. Faster car = bigger Doppler shift = larger displayed speed = bigger ticket.`,
        facts: ["Approaching = higher freq perceived", "Receding = lower freq perceived", "Blueshift = toward observer", "Redshift = away from observer", "Universe expanding = all redshifted", "Radar, weather, ultrasound all use Doppler"]
      },

    ]
  },

  {
    id: "electricity",
    icon: "🔌",
    title: "Electricity & Magnetism",
    subtitle: "Charge, voltage, current, resistance, circuits, induction — the foundation of electronics",
    concepts: [

      {
        id: "electric-charge",
        title: "Electric Charge & Fields",
        tags: ["applied"],
        chain: ["Particles carry charge", "Protons = positive, electrons = negative", "Like charges repel", "Opposite charges attract", "Electric field fills space around a charge"],
        blurb: "Electric charge is a fundamental property of matter. Like charges repel, opposites attract. Electric fields describe the force in the space surrounding any charge.",
        detail: `Electric charge is one of the fundamental properties of matter — like mass, but for electromagnetism.\n\n<strong>Units and basic values:</strong>\nCharge is measured in Coulombs (C).\nElectron charge: e = −1.6 × 10⁻¹⁹ C\nProton charge: +1.6 × 10⁻¹⁹ C\n\n<strong>Coulomb's Law:</strong>\nF = k × q₁q₂ / r²\nk = 8.99 × 10⁹ N·m²/C² (Coulomb's constant)\nSame mathematical structure as gravity (force ∝ 1/r²), but can be attractive or repulsive.\nThe electric force between two electrons is ~10³⁶ times stronger than the gravitational force between them.\n\n<strong>Electric field (E):</strong>\nThe force-per-unit-charge at a point in space: E = F/q (N/C or V/m)\nField direction = direction a positive test charge would be pushed.\nFields point away from positive charges, toward negative charges.\n\n<strong>Conductors vs insulators:</strong>\n• Conductor (metals): electrons move freely. Charge distributes across the outer surface.\n• Insulator (rubber, glass, plastic): electrons are tightly bound. Charge stays where placed.\n• Semiconductor (silicon): between the two — behavior controlled by doping. Basis of all electronics.\n\n<strong>Charge conservation:</strong>\nCharge is never created or destroyed. Only transferred. The total charge of the universe is constant.`,
        memory: `Two protons near each other: they fight (both positive, they repel). A proton and electron near each other: they snap together (opposite charges attract). Same rule as magnet poles.\n\nGravity is always attractive and grows with mass. Electric force can attract or repel and grows with charge. Gravity wins at astronomical scale because mass is always positive and accumulates. Electric forces tend to cancel out across large objects (positive and negative charges mix together).`,
        examTip: `Conductors in electrostatics: excess charge always resides on the outer surface, never inside. This is why a metal car protects you from lightning (Faraday cage effect) — charge distributes on the outside, the interior has no field. This principle is used in shielded cables, microwave ovens, and RF shielding for electronics.`,
        facts: ["e = 1.6×10⁻¹⁹ C", "F = kq₁q₂/r² (Coulomb's Law)", "Like charges repel", "Opposite charges attract", "E = F/q (field strength)", "Charge is always conserved"]
      },

      {
        id: "voltage-current-resistance",
        title: "Voltage, Current & Resistance",
        tags: ["applied"],
        chain: ["Voltage = electrical pressure", "Pushes current through circuit", "Current = rate of charge flow", "Resistance opposes flow", "V = IR — Ohm's Law"],
        blurb: "Voltage is the electrical pressure. Current is the flow. Resistance opposes it. Ohm's Law — V = IR — is the fundamental equation of every circuit you will ever build.",
        detail: `These three quantities are the foundation of every circuit.\n\n<strong>Voltage (V):</strong>\nElectric potential difference — the energy per unit charge between two points.\n1 Volt = 1 Joule per Coulomb (J/C)\nA 9V battery gives each Coulomb of charge 9 Joules of energy to spend.\n\n<strong>Current (I):</strong>\nRate of charge flow through the circuit.\n1 Ampere = 1 Coulomb per second (C/s)\nConventional current flows from + to − (opposite to actual electron drift — a historical choice).\n\n<strong>Resistance (R):</strong>\nHow much a material opposes current flow.\nMeasured in Ohms (Ω).\n1 Ω = 1 V/A\nCopper wire: nearly 0 Ω. Rubber: 10¹³ Ω. Resistors: known values used in circuit design.\n\n<strong>Ohm's Law:</strong>\nV = IR\nRearranged: I = V/R, R = V/I\nMore voltage → more current (if R stays constant)\nMore resistance → less current (if V stays constant)\n\n<strong>Real-world examples:</strong>\n• Phone charger (USB-C, 20W): 5V at 4A\n• Household outlet (US): 120V, up to 15–20A per circuit\n• Car battery: 12V, capable of hundreds of amperes for starting`,
        memory: `Water pipe analogy — perfect for DC circuits:\n• Voltage = water pressure (the push from the pump)\n• Current = flow rate (liters per second)\n• Resistance = pipe narrowness (friction that fights the flow)\n\nIncrease pressure → more flow. Narrower pipe → less flow. V = IR = pressure = flow × resistance. Every single circuit problem starts here.`,
        examTip: `Ohm's Law applies only to ohmic components — resistors where R stays constant regardless of V or I. Non-ohmic components (diodes, LEDs, transistors) have V-I relationships that are not straight lines. But even for non-ohmic devices, V, I, and R are still related — just not by a constant ratio.`,
        facts: ["V = IR (Ohm's Law)", "I in Amperes (A)", "V in Volts (V)", "R in Ohms (Ω)", "1 A = 1 C/s", "1 V = 1 J/C"]
      },

      {
        id: "circuits",
        title: "Circuits — Series & Parallel",
        tags: ["applied"],
        chain: ["Components connected", "Series: one path for current", "Parallel: multiple paths", "Series: same I, voltages split", "Parallel: same V, currents split"],
        blurb: "Series circuits have one path — current is the same everywhere, voltage splits. Parallel circuits have multiple paths — voltage is the same, current splits. Real circuits use both.",
        detail: `Knowing series vs parallel is the difference between building circuits that work and ones that don't.\n\n<strong>Series circuit:</strong>\n• One continuous path for current\n• Same current flows through every component\n• Voltage divides across components in proportion to their resistance\n• Total resistance: R_total = R₁ + R₂ + R₃ (resistances add)\n• If one component fails open, the entire circuit fails — all current stops\n\nOld-style Christmas lights were series: one dead bulb = all dark.\n\n<strong>Parallel circuit:</strong>\n• Multiple independent paths for current\n• Same voltage across every branch\n• Current splits between branches\n• Total resistance: 1/R_total = 1/R₁ + 1/R₂ + 1/R₃\n  (total R is less than any single branch — more paths = less total resistance)\n• One branch fails: others keep working\n\nYour home outlets: all in parallel. One lamp off = others unaffected.\n\n<strong>Kirchhoff's Laws:</strong>\n• KVL (Voltage Law): sum of all voltages around any closed loop = 0\n• KCL (Current Law): sum of currents into any junction = sum of currents out\n\n<strong>Short circuit:</strong>\nA path with near-zero resistance. All current takes that path. Huge surge → overheating → fire. Circuit breakers and fuses exist to interrupt this.`,
        memory: `Series = a single-lane road through three toll booths. Same car passes all three (same current). Each booth takes some time (voltage drop). Close one booth = all traffic stops.\n\nParallel = a highway with three lanes. Each lane carries its own traffic (current splits). Same speed limit on all lanes (same voltage). Close one lane = others still flow normally.`,
        examTip: `Two resistors in parallel: R_total = (R₁ × R₂)/(R₁ + R₂). This is always less than the smaller resistor. Adding any parallel path always decreases total resistance and increases current from the source. This is why daisy-chaining power strips with high-power devices trips circuit breakers — parallel paths draw more total current, not less.`,
        facts: ["Series: same I, V splits", "Parallel: same V, I splits", "Series R_tot = R₁+R₂+R₃", "Parallel R_tot < smallest R", "KVL: loop voltages = 0", "KCL: currents in = currents out"]
      },

      {
        id: "magnetism",
        title: "Magnetism",
        tags: ["applied"],
        chain: ["Moving electric charges", "Create magnetic field around them", "Field exerts force on other moving charges", "North and south poles always paired", "Electricity and magnetism: one force"],
        blurb: "Magnetism is produced by moving electric charges. Every magnet is electrons arranged to spin the same way. Every current-carrying wire has a magnetic field circling it.",
        detail: `Magnetism and electricity are two aspects of one fundamental force — electromagnetism.\n\n<strong>What creates magnetic fields:</strong>\n• Moving electric charges — a current through a wire creates a circular magnetic field around it\n• Electron spin — the quantum mechanical spin of electrons creates a tiny magnetic dipole\n\nIn most materials, electron spins are random — fields cancel. In ferromagnetic materials (iron, nickel, cobalt), billions of electrons align → permanent magnet.\n\n<strong>Magnetic poles:</strong>\nEvery magnet has a North and South pole. Like poles repel; unlike poles attract.\nCut a magnet in half → two complete magnets, each with N and S.\nMagnetic monopoles (a pure N or S without the other) have never been observed.\n\n<strong>Force on a moving charge in a magnetic field:</strong>\nF = qvB × sin(θ)\nq = charge, v = speed, B = magnetic field strength (Tesla)\nDirection: perpendicular to both v and B (right-hand rule).\nForce is zero if charge moves parallel to field.\n\n<strong>Earth's magnetic field:</strong>\nGenerated by the convecting liquid iron in Earth's outer core. Acts like a giant bar magnet, though it shifts over geological time. Protects us from solar wind — charged particles that would otherwise strip the atmosphere. Mars lost its magnetic field ~4 billion years ago and lost most of its atmosphere as a result.\n\n<strong>Electromagnets:</strong>\nCoil of wire (solenoid) carrying current → concentrated magnetic field inside.\nControl current = control field strength. The basis of motors, MRI machines, speakers, hard drives.`,
        memory: `Every electron is a tiny spinning charged ball — that spin makes it a tiny magnet. In iron, domains of billions of aligned electrons can be nudged to all point the same way. The result: a permanent magnet. Heat it past the Curie temperature (~770°C for iron) → thermal chaos randomizes the spins → demagnetized.\n\nRight-hand rule: point thumb in direction of current, fingers curl in direction of magnetic field circling the wire.`,
        examTip: `A charge moving parallel to a magnetic field experiences zero force (sin(0°) = 0). Maximum force when perpendicular. This is why particle accelerators use perpendicular magnetic fields to curve beams into circles — the force is always inward (centripetal) and never does work (always ⊥ to velocity). The speed stays constant; only direction changes.`,
        facts: ["Moving charges → magnetic field", "F = qvB·sinθ on moving charges", "Like poles repel, unlike attract", "No magnetic monopoles", "Earth's field = liquid iron outer core", "Electromagnet = current through coil"]
      },

      {
        id: "electromagnetic-induction",
        title: "Electromagnetic Induction",
        tags: ["applied"],
        chain: ["Magnetic field changes near conductor", "Changing flux induces EMF", "EMF drives current", "Generators, transformers, wireless chargers", "Faraday discovered this in 1831"],
        blurb: "Change a magnetic field near a conductor and you get electricity. This is how every generator, transformer, and wireless charger works. Faraday's discovery in 1831 lit the modern world.",
        detail: `Faraday's Law of Induction: a changing magnetic field induces an EMF (electromotive force) in a nearby conductor, which drives a current.\n\n<strong>Faraday's Law:</strong>\nEMF = −ΔΦ/Δt\nΦ (magnetic flux) = B × A × cos(θ)\nFaster flux change = larger induced EMF.\n\n<strong>How generators work:</strong>\nSpin a coil of wire inside a magnetic field → the flux through the coil constantly changes → EMF constantly induced → current flows out.\nEvery power plant on Earth works this way: spin a coil using steam (coal, nuclear, gas), water (hydro), or wind. The fuel just determines how you spin the coil.\n\n<strong>Motors = generators in reverse:</strong>\nApply current to a coil inside a magnetic field → the field pushes the coil → it spins. Generators and motors are the same physical device, used differently.\n\n<strong>Lenz's Law:</strong>\nThe induced current always opposes the change that caused it.\nDrop a magnet through a copper pipe → magnet falls slowly: the induced current creates a field that fights the magnet's descent. Energy is conserved — the magnetic braking converts kinetic energy to heat in the copper.\n\n<strong>Transformers:</strong>\nTwo coils around an iron core. AC in coil 1 → changing flux → EMF in coil 2.\nV₂/V₁ = N₂/N₁ (voltage ratio = turns ratio)\nStep-up (more turns in secondary): higher voltage out.\nStep-down: lower voltage out.\nPower grids: generate at ~25 kV, step up to 500 kV for long-distance transmission (less energy lost), step down to 120V/240V for homes.\n\n<strong>Wireless charging:</strong>\nCharging pad runs AC current → changing magnetic field → your phone's receiver coil picks up changing flux → induced current → charges battery. Pure Faraday induction.`,
        memory: `Lenz's Law: "The induced current fights back." Like a stubborn friend who always does the opposite of what you want. Try to increase flux → induced current creates opposing field. Try to decrease flux → induced current creates field to maintain it.\n\nPhone wireless charger = Faraday's 1831 lab experiment, miniaturized into a pad. He moved a magnet through a coil of wire. The charger alternates current at high frequency to simulate that changing field, inducing current in your phone's coil.`,
        examTip: `Transformers only work with AC, not DC. DC creates constant flux — no change, no induced EMF. The global power grid uses AC specifically because transformers allow voltage stepping. That is why Nikola Tesla (AC) beat Thomas Edison (DC) in the "War of Currents" — AC can be transformed to high voltage for efficient long-distance transmission; DC of 1890 could not.`,
        facts: ["Changing B-field → EMF → current", "EMF = −ΔΦ/Δt (Faraday's Law)", "Generator: spin coil → current", "Motor: current + field → spin coil", "Lenz's Law: induced I opposes change", "Transformers work only with AC"]
      },

      {
        id: "circuit-power",
        title: "Power in Circuits",
        tags: ["applied"],
        chain: ["Current flows through resistance", "Work done on charges", "Energy dissipated as heat or light", "P = IV", "Also P = I²R and P = V²/R"],
        blurb: "Electrical power is voltage times current — the rate at which a device converts electrical energy. This is exactly what the Watt measures.",
        detail: `Power in circuits tells you how fast electrical energy is converted to heat, light, sound, or mechanical motion.\n\n<strong>The formula:</strong>\nP = IV\nPower (W) = Current (A) × Voltage (V)\n\n<strong>Alternative forms — derived using V = IR:</strong>\nP = I²R — useful when you know current and resistance\nP = V²/R — useful when you know voltage and resistance\n\n<strong>Examples across scales:</strong>\n• LED bulb: 9W at 120V → I = 9/120 = 0.075 A (small current)\n• Space heater: 1,500W at 120V → I = 12.5 A (near circuit limit)\n• USB-C phone charger: 5V at 3A = 15W\n• Electric car fast charger: 400V at 100A = 40,000W = 40 kW\n• Large power plant: ~1,000 MW = 10⁹ W\n\n<strong>Joule heating (P = I²R):</strong>\nWhen current flows through resistance, electrical energy converts to heat at I²R watts.\nThis is how electric stoves, toasters, incandescent bulbs, and hand warmers work.\nAlso why wire gauge matters: too thin a wire for the current → too much resistance → I²R heating → fire.\n\n<strong>Energy vs power:</strong>\nP = rate of energy use (W = J/s)\nEnergy = P × t (Joules, or kWh for electricity bills)\n1 kWh = 1,000 W × 3,600 s = 3,600,000 J = 3.6 MJ`,
        memory: `P = IV is the electrical version of power = force × velocity. Voltage is electrical force (pressure); current is electrical flow. Multiply = energy per second.\n\nYour electricity bill charges per kWh (energy), not watts (power). A 1,000W heater running 10 hours = 10 kWh. In most of the US that costs about $1.20–$1.80. Tracking your energy budget is literally joules per dollar.`,
        examTip: `Circuit breakers trip based on current, not power. A 20A circuit at 120V can deliver up to 2,400W. Plugging in devices totaling more than 2,400W → current exceeds 20A → breaker trips. In parallel, currents add — adding more devices always increases total current from the source, which is exactly why the breaker exists.`,
        facts: ["P = IV", "P = I²R (Joule heating)", "P = V²/R", "Units: Watts (W)", "1 kWh = 3.6 MJ", "Breakers trip on current, not power"]
      },

    ]
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
