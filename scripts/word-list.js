const wordList = [
    {
        word: "guitar",
        hint: "A musical instrument with strings."
    },
    {
        word: "oxygen",
        hint: "A colorless, odorless gas essential for life."
    },
    {
        word: "mountain",
        hint: "A large natural elevation of the Earth's surface."
    },
    {
        word: "painting",
        hint: "An art form using colors on a surface to create images or expression."
    },
    {
        word: "astronomy",
        hint: "The scientific study of celestial objects and phenomena."
    },
    {
        word: "football",
        hint: "A popular sport played with a spherical ball."
    },
    {
        word: "chocolate",
        hint: "A sweet treat made from cocoa beans."
    },
    {
        word: "butterfly",
        hint: "An insect with colorful wings and a slender body."
    },
    {
        word: "history",
        hint: "The study of past events and human civilization."
    },
    {
        word: "pizza",
        hint: "A savory dish consisting of a round, flattened base with toppings."
    },
    {
        word: "jazz",
        hint: "A genre of music characterized by improvisation and syncopation."
    },
    {
        word: "camera",
        hint: "A device used to capture and record images or videos."
    },
    {
        word: "diamond",
        hint: "A precious gemstone known for its brilliance and hardness."
    },
    {
        word: "adventure",
        hint: "An exciting or daring experience."
    },
    {
        word: "science",
        hint: "The systematic study of the structure and behavior of the physical and natural world."
    },
    {
        word: "bicycle",
        hint: "A human-powered vehicle with two wheels."
    },
    {
        word: "sunset",
        hint: "The daily disappearance of the sun below the horizon."
    },
    {
        word: "coffee",
        hint: "A popular caffeinated beverage made from roasted coffee beans."
    },
    {
        word: "dance",
        hint: "A rhythmic movement of the body often performed to music."
    },
    {
        word: "galaxy",
        hint: "A vast system of stars, gas, and dust held together by gravity."
    },
    {
        word: "orchestra",
        hint: "A large ensemble of musicians playing various instruments."
    },
    {
        word: "volcano",
        hint: "A mountain or hill with a vent through which lava, rock fragments, hot vapor, and gas are ejected."
    },
    {
        word: "novel",
        hint: "A long work of fiction, typically with a complex plot and characters."
    },
    {
        word: "sculpture",
        hint: "A three-dimensional art form created by shaping or combining materials."
    },
    {
        word: "symphony",
        hint: "A long musical composition for a full orchestra, typically in multiple movements."
    },
    {
        word: "architecture",
        hint: "The art and science of designing and constructing buildings."
    },
    {
        word: "ballet",
        hint: "A classical dance form characterized by precise and graceful movements."
    },
    {
        word: "astronaut",
        hint: "A person trained to travel and work in space."
    },
    {
        word: "waterfall",
        hint: "A cascade of water falling from a height."
    },
    {
        word: "technology",
        hint: "The application of scientific knowledge for practical purposes."
    },
    {
        word: "rainbow",
        hint: "A meteorological phenomenon that is caused by reflection, refraction, and dispersion of light."
    },
    {
        word: "universe",
        hint: "All existing matter, space, and time as a whole."
    },
    {
        word: "piano",
        hint: "A musical instrument played by pressing keys that cause hammers to strike strings."
    },
    {
        word: "vacation",
        hint: "A period of time devoted to pleasure, rest, or relaxation."
    },
    {
        word: "rainforest",
        hint: "A dense forest characterized by high rainfall and biodiversity."
    },
    {
        word: "theater",
        hint: "A building or outdoor area in which plays, movies, or other performances are staged."
    },
    {
        word: "telephone",
        hint: "A device used to transmit sound over long distances."
    },
    {
        word: "language",
        hint: "A system of communication consisting of words, gestures, and syntax."
    },
    {
        word: "desert",
        hint: "A barren or arid land with little or no precipitation."
    },
    {
        word: "sunflower",
        hint: "A tall plant with a large yellow flower head."
    },
    {
        word: "fantasy",
        hint: "A genre of imaginative fiction involving magic and supernatural elements."
    },
    {
        word: "telescope",
        hint: "An optical instrument used to view distant objects in space."
    },
    {
        word: "breeze",
        hint: "A gentle wind."
    },
    {
        word: "oasis",
        hint: "A fertile spot in a desert where water is found."
    },
    {
        word: "photography",
        hint: "The art, process, or practice of creating images by recording light or other electromagnetic radiation."
    },
    {
        word: "safari",
        hint: "An expedition or journey, typically to observe wildlife in their natural habitat."
    },
    {
        word: "planet",
        hint: "A celestial body that orbits a star and does not produce light of its own."
    },
    {
        word: "river",
        hint: "A large natural stream of water flowing in a channel to the sea, a lake, or another such stream."
    },
    {
        word: "tropical",
        hint: "Relating to or situated in the region between the Tropic of Cancer and the Tropic of Capricorn."
    },
    {
        word: "mysterious",
        hint: "Difficult or impossible to understand, explain, or identify."
    },
    {
        word: "enigma",
        hint: "Something that is mysterious, puzzling, or difficult to understand."
    },
    {
        word: "paradox",
        hint: "A statement or situation that contradicts itself or defies intuition."
    },
    {
        word: "puzzle",
        hint: "A game, toy, or problem designed to test ingenuity or knowledge."
    },
    {
        word: "whisper",
        hint: "To speak very softly or quietly, often in a secretive manner."
    },
    {
        word: "shadow",
        hint: "A dark area or shape produced by an object blocking the light."
    },
    {
        word: "secret",
        hint: "Something kept hidden or unknown to others."
    },
    {
        word: "curiosity",
        hint: "A strong desire to know or learn something."
    },
    {
        word: "unpredictable",
        hint: "Not able to be foreseen or known beforehand; uncertain."
    },
    {
        word: "obfuscate",
        hint: "To confuse or bewilder someone; to make something unclear or difficult to understand."
    },
    {
        word: "unveil",
        hint: "To make known or reveal something previously secret or unknown."
    },
    {
        word: "illusion",
        hint: "A false perception or belief; a deceptive appearance or impression."
    },
    {
        word: "moonlight",
        hint: "The light from the moon."
    },
    {
        word: "vibrant",
        hint: "Full of energy, brightness, and life."
    },
    {
        word: "nostalgia",
        hint: "A sentimental longing or wistful affection for the past."
    },
    {
        word: "brilliant",
        hint: "Exceptionally clever, talented, or impressive."
    },
    {
        word: "exploration",
        hint: "The action of traveling in or through an unfamiliar area in order to learn about it."
    },
    {
        word: "library",
        hint: "A place where books, magazines, and other materials are available for people to read, borrow, or refer to."
    },
    {
        word: "cosmos",
        hint: "The universe seen as a well-ordered whole."
    },
    {
        word: "medieval",
        hint: "Relating to the Middle Ages, a period in European history from about the 5th to the late 15th century."
    },
    {
        word: "mosaic",
        hint: "A piece of art or image made from the assembling of small pieces of colored glass, stone, or other materials."
    },
    {
        word: "chimney",
        hint: "A vertical pipe or flue that carries smoke and gases up from a fire or furnace."
    },
    {
        word: "serenade",
        hint: "A piece of music sung or played in the open air, especially at night, for a lover."
    },
    {
        word: "alchemy",
        hint: "An ancient practice that combined elements of chemistry, philosophy, and mysticism."
    },
    {
        word: "mystique",
        hint: "A fascinating aura of mystery, awe, and power surrounding someone or something."
    },
    {
        word: "ethereal",
        hint: "Extremely delicate and light in a way that seems too perfect for this world."
    },
    {
        word: "labyrinth",
        hint: "A complicated network of winding passages or paths in which it is difficult to find one's way."
    },
    {
        word: "paradise",
        hint: "An ideal or idyllic place or state of blissful happiness."
    },
    {
        word: "quasar",
        hint: "A massive and extremely remote celestial object, emitting exceptionally large amounts of energy."
    },
    {
        word: "giraffe",
        hint: "A tall African mammal with a very long neck and legs, and a coat with irregular patches."
    },
    {
        word: "turbulent",
        hint: "Characterized by conflict, disorder, or confusion; not controlled or calm."
    },
    {
        word: "phenomenon",
        hint: "A fact or situation that is observed to exist or happen, especially one whose cause or explanation is in question."
    },
    {
        word: "luminous",
        hint: "Radiating or reflecting light; shining; bright."
    },
    {
        word: "canyon",
        hint: "A deep gorge, typically one with a river flowing through it."
    },
    {
        word: "ephemeral",
        hint: "Lasting for a very short time."
    },
    {
        word: "horizon",
        hint: "The line at which the earth's surface and the sky appear to meet."
    },
    {
        word: "whimsy",
        hint: "Playfully quaint or fanciful behavior or humor."
    },
    {
        word: "serendipity",
        hint: "The occurrence of events by chance in a happy or beneficial way."
    },
    {
        word: "tapestry",
        hint: "A piece of textile art, often woven with intricate designs."
    },
    {
        word: "marvelous",
        hint: "Causing great wonder; extraordinary."
    },
    {
        word: "celestial",
        hint: "Pertaining to the sky or outer space as observed in astronomy."
    },
    {
        word: "labyrinthine",
        hint: "Like a labyrinth; irregular and twisting."
    },
    {
        word: "serenade",
        hint: "A musical performance given to honor or entertain someone."
    },
    {
        word: "starlight",
        hint: "The light emitted by stars."
    },
    {
        word: "vortex",
        hint: "A mass of whirling fluid or air, especially one in which a force of suction operates."
    },
    {
        word: "whirlpool",
        hint: "A rapidly rotating mass of water produced by opposing currents or a current running into an obstacle."
    },
    {
        word: "alchemy",
        hint: "An ancient practice aimed at transforming base metals into gold, and finding the elixir of life."
    },
    {
        word: "nostalgic",
        hint: "Longing for or thinking fondly of a past time or situation."
    },
    {
        word: "enigmatic",
        hint: "Difficult to interpret or understand; mysterious."
    },
    {
        word: "ethereal",
        hint: "Extremely delicate and light in a way that seems too perfect for this world."
    },
    {
        word: "vortex",
        hint: "A powerful circular current of water or air."
    },
    {
        word: "celestial",
        hint: "Relating to the sky or outer space."
    },
    {
        word: "whisper",
        hint: "To speak very softly or quietly."
    },
    {
        word: "zenith",
        hint: "The highest point reached by a celestial or other object."
    },
    {
        word: "hologram",
        hint: "A photographic representation of a three-dimensional object."
    },
    {
        word: "crystal",
        hint: "A solid material whose atoms are arranged in a highly ordered structure."
    },
    {
        word: "alchemy",
        hint: "A medieval practice of attempting to turn base metals into gold and find the elixir of life."
    },
    {
        word: "tornado",
        hint: "A rapidly rotating column of air extending from a thunderstorm to the ground."
    },
    {
        word: "glacier",
        hint: "A slowly moving mass of ice formed from compacted snow."
    },
    {
        word: "mosaic",
        hint: "Art made by arranging small pieces of colored glass, stone, or other materials."
    },
    {
        word: "submarine",
        hint: "A watercraft capable of independent operation underwater."
    },
    {
        word: "quarantine",
        hint: "A period of isolation imposed to prevent the spread of disease."
    },
    {
        word: "vortex",
        hint: "A flow pattern with a spiral motion around a central axis."
    },
    {
        word: "dinosaur",
        hint: "A prehistoric reptile known for its enormous size and varied species."
    },
    {
        word: "mystery",
        hint: "Something that is difficult or impossible to understand or explain."
    },
    {
        word: "pyramid",
        hint: "A structure with a square base and four triangular faces that meet at a point."
    },
    {
        word: "horizon",
        hint: "The line where the earth's surface and the sky appear to meet."
    },
    {
        word: "exhibit",
        hint: "A public display of art or other items of interest."
    },
    {
        word: "spectrum",
        hint: "A range of different colors or qualities that are visible when light is dispersed."
    },
    {
        word: "mimic",
        hint: "To imitate or copy someone or something."
    },
    {
        word: "magnitude",
        hint: "The great size or extent of something, often used to describe astronomical events."
    },
    {
        word: "parliament",
        hint: "The supreme legislative body in a country."
    },
    {
        word: "eclipse",
        hint: "An event in which the shadow of one celestial body falls on another."
    },
    {
        word: "chimera",
        hint: "A mythical creature with the body parts of different animals."
    },
    {
        word: "enigma",
        hint: "A person or thing that is mysterious, puzzling, or difficult to understand."
    },
    {
        word: "crystal",
        hint: "A solid material with a regular repeating pattern of atoms."
    },
    {
        word: "serenade",
        hint: "A musical performance given to honor or entertain someone."
    },
    {
        word: "holograph",
        hint: "A three-dimensional photograph created using laser technology."
    },
    {
        word: "galaxy",
        hint: "A large system of stars, gas, and dust bound together by gravity."
    },
    {
        word: "magnitude",
        hint: "The size or extent of something, often used to describe astronomical objects."
    },
    {
        word: "nebula",
        hint: "A giant cloud of dust and gas in space, often a star-forming region."
    },
    {
        word: "alchemy",
        hint: "An ancient practice combining elements of chemistry and mysticism."
    },
    {
        word: "labyrinth",
        hint: "A complex structure of connected passages through which it is difficult to find one's way."
    },
    {
        word: "volcano",
        hint: "A mountain or hill with a vent through which lava, rock fragments, and gases are expelled."
    },
    {
        word: "beacon",
        hint: "A signaling device that uses light or sound to guide or warn."
    },
    {
        word: "dynamic",
        hint: "Characterized by constant change, activity, or progress."
    },
    {
        word: "origami",
        hint: "The Japanese art of folding paper into decorative shapes and figures."
    },
    {
        word: "tapestry",
        hint: "A piece of textile art often used as a wall hanging or covering."
    },
    {
        word: "satellite",
        hint: "An artificial body placed in orbit around a planet or star."
    },
    {
        word: "alchemy",
        hint: "An ancient practice aimed at transforming base metals into gold and finding the elixir of life."
    },
    {
        word: "hologram",
        hint: "A photographic representation of a three-dimensional object."
    },
    {
        word: "crescent",
        hint: "The shape of the moon when it is less than half full."
    },
    {
        word: "sunflower",
        hint: "A tall plant with a large yellow flower head."
    }
];
