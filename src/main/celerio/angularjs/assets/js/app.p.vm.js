$output.webapp("assets\js", "app.js")##
angular.module("ngPlaceholders", []).factory("PlaceholderTextService", function(${dollar}log) {
        function a(a, b) {
            return Math.floor(Math.random() * (b - a + 1)) + a
        }
        var b = ["lorem", "ipsum", "dolor", "sit", "amet,", "consectetur", "adipiscing", "elit", "ut", "aliquam,", "purus", "sit", "amet", "luctus", "venenatis,", "lectus", "magna", "fringilla", "urna,", "porttitor", "rhoncus", "dolor", "purus", "non", "enim", "praesent", "elementum", "facilisis", "leo,", "vel", "fringilla", "est", "ullamcorper", "eget", "nulla", "facilisi", "etiam", "dignissim", "diam", "quis", "enim", "lobortis", "scelerisque", "fermentum", "dui", "faucibus", "in", "ornare", "quam", "viverra", "orci", "sagittis", "eu", "volutpat", "odio", "facilisis", "mauris", "sit", "amet", "massa", "vitae", "tortor", "condimentum", "lacinia", "quis", "vel", "eros", "donec", "ac", "odio", "tempor", "orci", "dapibus", "ultrices", "in", "iaculis", "nunc", "sed", "augue", "lacus,", "viverra", "vitae", "congue", "eu,", "consequat", "ac", "felis", "donec", "et", "odio", "pellentesque", "diam", "volutpat", "commodo", "sed", "egestas", "egestas", "fringilla", "phasellus", "faucibus", "scelerisque", "eleifend", "donec", "pretium", "vulputate", "sapien", "nec", "sagittis", "aliquam", "malesuada", "bibendum", "arcu", "vitae", "elementum", "curabitur", "vitae", "nunc", "sed", "velit", "dignissim", "sodales", "ut", "eu", "sem", "integer", "vitae", "justo", "eget", "magna", "fermentum", "iaculis", "eu", "non", "diam", "phasellus", "vestibulum", "lorem", "sed", "risus", "ultricies", "tristique", "nulla", "aliquet", "enim", "tortor,", "at", "auctor", "urna", "nunc", "id", "cursus", "metus", "aliquam", "eleifend", "mi", "in", "nulla", "posuere", "sollicitudin", "aliquam", "ultrices", "sagittis", "orci,", "a", "scelerisque", "purus", "semper", "eget", "duis", "at", "tellus", "at", "urna", "condimentum", "mattis", "pellentesque", "id", "nibh", "tortor,", "id", "aliquet", "lectus", "proin", "nibh", "nisl,", "condimentum", "id", "venenatis", "a,", "condimentum", "vitae", "sapien", "pellentesque", "habitant", "morbi", "tristique", "senectus", "et", "netus", "et", "malesuada", "fames", "ac", "turpis", "egestas", "sed", "tempus,", "urna", "et", "pharetra", "pharetra,", "massa", "massa", "ultricies", "mi,", "quis", "hendrerit", "dolor", "magna", "eget", "est", "lorem", "ipsum", "dolor", "sit", "amet,", "consectetur", "adipiscing", "elit", "pellentesque", "habitant", "morbi", "tristique", "senectus", "et", "netus", "et", "malesuada", "fames", "ac", "turpis", "egestas", "integer", "eget", "aliquet", "nibh", "praesent", "tristique", "magna", "sit", "amet", "purus", "gravida", "quis", "blandit", "turpis", "cursus", "in", "hac", "habitasse", "platea", "dictumst", "quisque", "sagittis,", "purus", "sit", "amet", "volutpat", "consequat,", "mauris", "nunc", "congue", "nisi,", "vitae", "suscipit", "tellus", "mauris", "a", "diam", "maecenas", "sed", "enim", "ut", "sem", "viverra", "aliquet", "eget", "sit", "amet", "tellus", "cras", "adipiscing", "enim", "eu", "turpis", "egestas", "pretium", "aenean", "pharetra,", "magna", "ac", "placerat", "vestibulum,", "lectus", "mauris", "ultrices", "eros,", "in", "cursus", "turpis", "massa", "tincidunt", "dui", "ut", "ornare", "lectus", "sit", "amet", "est", "placerat", "in", "egestas", "erat", "imperdiet", "sed", "euismod", "nisi", "porta", "lorem", "mollis", "aliquam", "ut", "porttitor", "leo", "a", "diam", "sollicitudin", "tempor", "id", "eu", "nisl", "nunc", "mi", "ipsum,", "faucibus", "vitae", "aliquet", "nec,", "ullamcorper", "sit", "amet", "risus", "nullam", "eget", "felis", "eget", "nunc", "lobortis", "mattis", "aliquam", "faucibus", "purus", "in", "massa", "tempor", "nec", "feugiat", "nisl", "pretium", "fusce", "id", "velit", "ut", "tortor", "pretium", "viverra", "suspendisse", "potenti", "nullam", "ac", "tortor", "vitae", "purus", "faucibus", "ornare", "suspendisse", "sed", "nisi", "lacus,", "sed", "viverra", "tellus", "in", "hac", "habitasse", "platea", "dictumst", "vestibulum", "rhoncus", "est", "pellentesque", "elit", "ullamcorper", "dignissim", "cras", "tincidunt", "lobortis", "feugiat", "vivamus", "at", "augue", "eget", "arcu", "dictum", "varius", "duis", "at", "consectetur", "lorem", "donec", "massa", "sapien,", "faucibus", "et", "molestie", "ac,", "feugiat", "sed", "lectus", "vestibulum", "mattis", "ullamcorper", "velit", "sed", "ullamcorper", "morbi", "tincidunt", "ornare", "massa,", "eget", "egestas", "purus", "viverra", "accumsan", "in", "nisl", "nisi,", "scelerisque", "eu", "ultrices", "vitae,", "auctor", "eu", "augue", "ut", "lectus", "arcu,", "bibendum", "at", "varius", "vel,", "pharetra", "vel", "turpis", "nunc", "eget", "lorem", "dolor,", "sed", "viverra", "ipsum", "nunc", "aliquet", "bibendum", "enim,", "facilisis", "gravida", "neque", "convallis", "a", "cras", "semper", "auctor", "neque,", "vitae", "tempus", "quam", "pellentesque", "nec", "nam", "aliquam", "sem", "et", "tortor", "consequat", "id", "porta", "nibh", "venenatis", "cras", "sed", "felis", "eget", "velit", "aliquet", "sagittis", "id", "consectetur", "purus", "ut", "faucibus", "pulvinar", "elementum", "integer", "enim", "neque,", "volutpat", "ac", "tincidunt", "vitae,", "semper", "quis", "lectus", "nulla", "at", "volutpat", "diam", "ut", "venenatis", "tellus", "in", "metus", "vulputate", "eu", "scelerisque", "felis", "imperdiet", "proin", "fermentum", "leo", "vel", "orci", "porta", "non", "pulvinar", "neque", "laoreet", "suspendisse", "interdum", "consectetur", "libero,", "id", "faucibus", "nisl", "tincidunt", "eget", "nullam", "non", "nisi", "est,", "sit", "amet", "facilisis", "magna", "etiam", "tempor,", "orci", "eu", "lobortis", "elementum,", "nibh", "tellus", "molestie", "nunc,", "non", "blandit", "massa", "enim", "nec", "dui", "nunc", "mattis", "enim", "ut", "tellus", "elementum", "sagittis", "vitae", "et", "leo", "duis", "ut", "diam", "quam", "nulla", "porttitor", "massa", "id", "neque", "aliquam", "vestibulum", "morbi", "blandit", "cursus", "risus,", "at", "ultrices", "mi", "tempus", "imperdiet", "nulla", "malesuada", "pellentesque", "elit", "eget", "gravida", "cum", "sociis", "natoque", "penatibus", "et", "magnis", "dis", "parturient", "montes,", "nascetur", "ridiculus", "mus", "mauris", "vitae", "ultricies", "leo", "integer", "malesuada", "nunc", "vel", "risus", "commodo", "viverra", "maecenas", "accumsan,", "lacus", "vel", "facilisis", "volutpat,", "est", "velit", "egestas", "dui,", "id", "ornare", "arcu", "odio", "ut", "sem", "nulla", "pharetra", "diam", "sit", "amet", "nisl", "suscipit", "adipiscing", "bibendum", "est", "ultricies", "integer", "quis", "auctor", "elit", "sed", "vulputate", "mi", "sit", "amet", "mauris", "commodo", "quis", "imperdiet", "massa", "tincidunt", "nunc", "pulvinar", "sapien", "et", "ligula", "ullamcorper", "malesuada", "proin", "libero", "nunc,", "consequat", "interdum", "varius", "sit", "amet,", "mattis", "vulputate", "enim", "nulla", "aliquet", "porttitor", "lacus,", "luctus", "accumsan", "tortor", "posuere", "ac", "ut", "consequat", "semper", "viverra", "nam", "libero", "justo,", "laoreet", "sit", "amet", "cursus", "sit", "amet,", "dictum", "sit", "amet", "justo", "donec", "enim", "diam,", "vulputate", "ut", "pharetra", "sit", "amet,", "aliquam", "id", "diam", "maecenas", "ultricies", "mi", "eget", "mauris", "pharetra", "et", "ultrices", "neque", "ornare", "aenean", "euismod", "elementum", "nisi,", "quis", "eleifend", "quam", "adipiscing", "vitae", "proin", "sagittis,", "nisl", "rhoncus", "mattis", "rhoncus,", "urna", "neque", "viverra", "justo,", "nec", "ultrices", "dui", "sapien", "eget", "mi", "proin", "sed", "libero", "enim,", "sed", "faucibus", "turpis", "in", "eu", "mi", "bibendum", "neque", "egestas", "congue", "quisque", "egestas", "diam", "in", "arcu", "cursus", "euismod", "quis", "viverra", "nibh", "cras", "pulvinar", "mattis", "nunc,", "sed", "blandit", "libero", "volutpat", "sed", "cras", "ornare", "arcu", "dui", "vivamus", "arcu", "felis,", "bibendum", "ut", "tristique", "et,", "egestas", "quis", "ipsum", "suspendisse", "ultrices", "fusce", "ut", "placerat", "orci", "nulla", "pellentesque", "dignissim", "enim,", "sit", "amet", "venenatis", "urna", "cursus", "eget", "nunc", "scelerisque", "viverra", "mauris,", "in", "aliquam", "sem", "fringilla", "ut", "morbi", "tincidunt", "augue", "interdum", "velit", "euismod", "in", "pellentesque", "massa", "placerat", "duis", "ultricies", "lacus", "sed", "turpis", "tincidunt", "id", "aliquet", "risus", "feugiat", "in", "ante", "metus,", "dictum", "at", "tempor", "commodo,", "ullamcorper", "a", "lacus", "vestibulum", "sed", "arcu", "non", "odio", "euismod", "lacinia", "at", "quis", "risus", "sed", "vulputate", "odio", "ut", "enim", "blandit", "volutpat", "maecenas", "volutpat", "blandit", "aliquam", "etiam", "erat", "velit,", "scelerisque", "in", "dictum", "non,", "consectetur", "a", "erat", "nam", "at", "lectus", "urna", "duis", "convallis", "convallis", "tellus,", "id", "interdum", "velit", "laoreet", "id", "donec", "ultrices", "tincidunt", "arcu,", "non", "sodales", "neque", "sodales", "ut", "etiam", "sit", "amet", "nisl", "purus,", "in", "mollis", "nunc", "sed", "id", "semper", "risus", "in", "hendrerit", "gravida", "rutrum", "quisque", "non", "tellus", "orci,", "ac", "auctor", "augue", "mauris", "augue", "neque,", "gravida", "in", "fermentum", "et,", "sollicitudin", "ac", "orci", "phasellus", "egestas", "tellus", "rutrum", "tellus", "pellentesque", "eu", "tincidunt", "tortor", "aliquam", "nulla", "facilisi", "cras", "fermentum,", "odio", "eu", "feugiat", "pretium,", "nibh", "ipsum", "consequat", "nisl,", "vel", "pretium", "lectus", "quam", "id", "leo", "in", "vitae", "turpis", "massa", "sed", "elementum", "tempus", "egestas", "sed", "sed", "risus", "pretium", "quam", "vulputate", "dignissim", "suspendisse", "in", "est", "ante", "in", "nibh", "mauris,", "cursus", "mattis", "molestie", "a,", "iaculis", "at", "erat", "pellentesque", "adipiscing", "commodo", "elit,", "at", "imperdiet", "dui", "accumsan", "sit", "amet", "nulla", "facilisi", "morbi", "tempus", "iaculis", "urna,", "id", "volutpat", "lacus", "laoreet", "non", "curabitur", "gravida", "arcu", "ac", "tortor", "dignissim", "convallis", "aenean", "et", "tortor", "at", "risus", "viverra", "adipiscing", "at", "in", "tellus", "integer", "feugiat", "scelerisque", "varius", "morbi", "enim", "nunc,", "faucibus", "a", "pellentesque", "sit", "amet,", "porttitor", "eget", "dolor", "morbi", "non", "arcu", "risus,", "quis", "varius", "quam", "quisque", "id", "diam", "vel", "quam", "elementum", "pulvinar", "etiam", "non", "quam", "lacus", "suspendisse", "faucibus", "interdum", "posuere", "lorem", "ipsum", "dolor", "sit", "amet,", "consectetur", "adipiscing", "elit", "duis", "tristique", "sollicitudin", "nibh", "sit", "amet", "commodo", "nulla", "facilisi", "nullam", "vehicula", "ipsum", "a", "arcu", "cursus", "vitae", "congue", "mauris", "rhoncus", "aenean", "vel", "elit", "scelerisque", "mauris", "pellentesque", "pulvinar", "pellentesque", "habitant", "morbi", "tristique", "senectus", "et", "netus", "et", "malesuada", "fames", "ac", "turpis", "egestas", "maecenas", "pharetra", "convallis", "posuere", "morbi", "leo", "urna,", "molestie", "at", "elementum", "eu,", "facilisis", "sed", "odio", "morbi", "quis", "commodo", "odio", "aenean", "sed", "adipiscing", "diam", "donec", "adipiscing", "tristique", "risus", "nec", "feugiat", "in", "fermentum", "posuere", "urna", "nec", "tincidunt", "praesent", "semper", "feugiat", "nibh", "sed", "pulvinar", "proin", "gravida", "hendrerit", "lectus", "a", "molestie", "gravida", "dictum"],
            c = {
                first_name: ["Aaliyah", "Aaron", "Abagail", "Abbey", "Abbie", "Abbigail", "Abby", "Abdiel", "Abdul", "Abdullah", "Abe", "Abel", "Abelardo", "Abigail", "Abigale", "Abigayle", "Abner", "Abraham", "Ada", "Adah", "Adalberto", "Adaline", "Adam", "Adan", "Addie", "Addison", "Adela", "Adelbert", "Adele", "Adelia", "Adeline", "Adell", "Adella", "Adelle", "Aditya", "Adolf", "Adolfo", "Adolph", "Adolphus", "Adonis", "Adrain", "Adrian", "Adriana", "Adrianna", "Adriel", "Adrien", "Adrienne", "Afton", "Aglae", "Agnes", "Agustin", "Agustina", "Ahmad", "Ahmed", "Aida", "Aidan", "Aiden", "Aileen", "Aimee", "Aisha", "Aiyana", "Akeem", "Al", "Alaina", "Alan", "Alana", "Alanis", "Alanna", "Alayna", "Alba", "Albert", "Alberta", "Albertha", "Alberto", "Albin", "Albina", "Alda", "Alden", "Alec", "Aleen", "Alejandra", "Alejandrin", "Alek", "Alena", "Alene", "Alessandra", "Alessandro", "Alessia", "Aletha", "Alex", "Alexa", "Alexander", "Alexandra", "Alexandre", "Alexandrea", "Alexandria", "Alexandrine", "Alexandro", "Alexane", "Alexanne", "Alexie", "Alexis", "Alexys", "Alexzander", "Alf", "Alfonso", "Alfonzo", "Alford", "Alfred", "Alfreda", "Alfredo", "Ali", "Alia", "Alice", "Alicia", "Alisa", "Alisha", "Alison", "Alivia", "Aliya", "Aliyah", "Aliza", "Alize", "Allan", "Allen", "Allene", "Allie", "Allison", "Ally", "Alphonso", "Alta", "Althea", "Alva", "Alvah", "Alvena", "Alvera", "Alverta", "Alvina", "Alvis", "Alyce", "Alycia", "Alysa", "Alysha", "Alyson", "Alysson", "Amalia", "Amanda", "Amani", "Amara", "Amari", "Amaya", "Amber", "Ambrose", "Amelia", "Amelie", "Amely", "America", "Americo", "Amie", "Amina", "Amir", "Amira", "Amiya", "Amos", "Amparo", "Amy", "Amya", "Ana", "Anabel", "Anabelle", "Anahi", "Anais", "Anastacio", "Anastasia", "Anderson", "Andre", "Andreane", "Andreanne", "Andres", "Andrew", "Andy", "Angel", "Angela", "Angelica", "Angelina", "Angeline", "Angelita", "Angelo", "Angie", "Angus", "Anibal", "Anika", "Anissa", "Anita", "Aniya", "Aniyah", "Anjali", "Anna", "Annabel", "Annabell", "Annabelle", "Annalise", "Annamae", "Annamarie", "Anne", "Annetta", "Annette", "Annie", "Ansel", "Ansley", "Anthony", "Antoinette", "Antone", "Antonetta", "Antonette", "Antonia", "Antonietta", "Antonina", "Antonio", "Antwan", "Antwon", "Anya", "April", "Ara", "Araceli", "Aracely", "Arch", "Archibald", "Ardella", "Arden", "Ardith", "Arely", "Ari", "Ariane", "Arianna", "Aric", "Ariel", "Arielle", "Arjun", "Arlene", "Arlie", "Arlo", "Armand", "Armando", "Armani", "Arnaldo", "Arne", "Arno", "Arnold", "Arnoldo", "Arnulfo", "Aron", "Art", "Arthur", "Arturo", "Arvel", "Arvid", "Arvilla", "Aryanna", "Asa", "Asha", "Ashlee", "Ashleigh", "Ashley", "Ashly", "Ashlynn", "Ashton", "Ashtyn", "Asia", "Assunta", "Astrid", "Athena", "Aubree", "Aubrey", "Audie", "Audra", "Audreanne", "Audrey", "August", "Augusta", "Augustine", "Augustus", "Aurelia", "Aurelie", "Aurelio", "Aurore", "Austen", "Austin", "Austyn", "Autumn", "Ava", "Avery", "Avis", "Axel", "Ayana", "Ayden", "Ayla", "Aylin", "Baby", "Bailee", "Bailey", "Barbara", "Barney", "Baron", "Barrett", "Barry", "Bart", "Bartholome", "Barton", "Baylee", "Beatrice", "Beau", "Beaulah", "Bell", "Bella", "Belle", "Ben", "Benedict", "Benjamin", "Bennett", "Bennie", "Benny", "Benton", "Berenice", "Bernadette", "Bernadine", "Bernard", "Bernardo", "Berneice", "Bernhard", "Bernice", "Bernie", "Berniece", "Bernita", "Berry", "Bert", "Berta", "Bertha", "Bertram", "Bertrand", "Beryl", "Bessie", "Beth", "Bethany", "Bethel", "Betsy", "Bette", "Bettie", "Betty", "Bettye", "Beulah", "Beverly", "Bianka", "Bill", "Billie", "Billy", "Birdie", "Blair", "Blaise", "Blake", "Blanca", "Blanche", "Blaze", "Bo", "Bobbie", "Bobby", "Bonita", "Bonnie", "Boris", "Boyd", "Brad", "Braden", "Bradford", "Bradley", "Bradly", "Brady", "Braeden", "Brain", "Brandi", "Brando", "Brandon", "Brandt", "Brandy", "Brandyn", "Brannon", "Branson", "Brant", "Braulio", "Braxton", "Brayan", "Breana", "Breanna", "Breanne", "Brenda", "Brendan", "Brenden", "Brendon", "Brenna", "Brennan", "Brennon", "Brent", "Bret", "Brett", "Bria", "Brian", "Briana", "Brianne", "Brice", "Bridget", "Bridgette", "Bridie", "Brielle", "Brigitte", "Brionna", "Brisa", "Britney", "Brittany", "Brock", "Broderick", "Brody", "Brook", "Brooke", "Brooklyn", "Brooks", "Brown", "Bruce", "Bryana", "Bryce", "Brycen", "Bryon", "Buck", "Bud", "Buddy", "Buford", "Bulah", "Burdette", "Burley", "Burnice", "Buster", "Cade", "Caden", "Caesar", "Caitlyn", "Cale", "Caleb", "Caleigh", "Cali", "Calista", "Callie", "Camden", "Cameron", "Camila", "Camilla", "Camille", "Camren", "Camron", "Camryn", "Camylle", "Candace", "Candelario", "Candice", "Candida", "Candido", "Cara", "Carey", "Carissa", "Carlee", "Carleton", "Carley", "Carli", "Carlie", "Carlo", "Carlos", "Carlotta", "Carmel", "Carmela", "Carmella", "Carmelo", "Carmen", "Carmine", "Carol", "Carolanne", "Carole", "Carolina", "Caroline", "Carolyn", "Carolyne", "Carrie", "Carroll", "Carson", "Carter", "Cary", "Casandra", "Casey", "Casimer", "Casimir", "Casper", "Cassandra", "Cassandre", "Cassidy", "Cassie", "Catalina", "Caterina", "Catharine", "Catherine", "Cathrine", "Cathryn", "Cathy", "Cayla", "Ceasar", "Cecelia", "Cecil", "Cecile", "Cecilia", "Cedrick", "Celestine", "Celestino", "Celia", "Celine", "Cesar", "Chad", "Chadd", "Chadrick", "Chaim", "Chance", "Chandler", "Chanel", "Chanelle", "Charity", "Charlene", "Charles", "Charley", "Charlie", "Charlotte", "Chase", "Chasity", "Chauncey", "Chaya", "Chaz", "Chelsea", "Chelsey", "Chelsie", "Chesley", "Chester", "Chet", "Cheyanne", "Cheyenne", "Chloe", "Chris", "Christ", "Christa", "Christelle", "Christian", "Christiana", "Christina", "Christine", "Christop", "Christophe", "Christopher", "Christy", "Chyna", "Ciara", "Cicero", "Cielo", "Cierra", "Cindy", "Citlalli", "Clair", "Claire", "Clara", "Clarabelle", "Clare", "Clarissa", "Clark", "Claud", "Claude", "Claudia", "Claudie", "Claudine", "Clay", "Clemens", "Clement", "Clementina", "Clementine", "Clemmie", "Cleo", "Cleora", "Cleta", "Cletus", "Cleve", "Cleveland", "Clifford", "Clifton", "Clint", "Clinton", "Clotilde", "Clovis", "Cloyd", "Clyde", "Coby", "Cody", "Colby", "Cole", "Coleman", "Colin", "Colleen", "Collin", "Colt", "Colten", "Colton", "Columbus", "Concepcion", "Conner", "Connie", "Connor", "Conor", "Conrad", "Constance", "Constantin", "Consuelo", "Cooper", "Cora", "Coralie", "Corbin", "Cordelia", "Cordell", "Cordia", "Cordie", "Corene", "Corine", "Cornelius", "Cornell", "Corrine", "Cortez", "Cortney", "Cory", "Coty", "Courtney", "Coy", "Craig", "Crawford", "Creola", "Cristal", "Cristian", "Cristina", "Cristobal", "Cristopher", "Cruz", "Crystal", "Crystel", "Cullen", "Curt", "Curtis", "Cydney", "Cynthia", "Cyril", "Cyrus", "Dagmar", "Dahlia", "Daija", "Daisha", "Daisy", "Dakota", "Dale", "Dallas", "Dallin", "Dalton", "Damaris", "Dameon", "Damian", "Damien", "Damion", "Damon", "Dan", "Dana", "Dandre", "Dane", "D'angelo", "Dangelo", "Danial", "Daniela", "Daniella", "Danielle", "Danika", "Dannie", "Danny", "Dante", "Danyka", "Daphne", "Daphnee", "Daphney", "Darby", "Daren", "Darian", "Dariana", "Darien", "Dario", "Darion", "Darius", "Darlene", "Daron", "Darrel", "Darrell", "Darren", "Darrick", "Darrin", "Darrion", "Darron", "Darryl", "Darwin", "Daryl", "Dashawn", "Dasia", "Dave", "David", "Davin", "Davion", "Davon", "Davonte", "Dawn", "Dawson", "Dax", "Dayana", "Dayna", "Dayne", "Dayton", "Dean", "Deangelo", "Deanna", "Deborah", "Declan", "Dedric", "Dedrick", "Dee", "Deion", "Deja", "Dejah", "Dejon", "Dejuan", "Delaney", "Delbert", "Delfina", "Delia", "Delilah", "Dell", "Della", "Delmer", "Delores", "Delpha", "Delphia", "Delphine", "Delta", "Demarco", "Demarcus", "Demario", "Demetris", "Demetrius", "Demond", "Dena", "Denis", "Dennis", "Deon", "Deondre", "Deontae", "Deonte", "Dereck", "Derek", "Derick", "Deron", "Derrick", "Deshaun", "Deshawn", "Desiree", "Desmond", "Dessie", "Destany", "Destin", "Destinee", "Destiney", "Destini", "Destiny", "Devan", "Devante", "Deven", "Devin", "Devon", "Devonte", "Devyn", "Dewayne", "Dewitt", "Dexter", "Diamond", "Diana", "Dianna", "Diego", "Dillan", "Dillon", "Dimitri", "Dina", "Dino", "Dion", "Dixie", "Dock", "Dolly", "Dolores", "Domenic", "Domenica", "Domenick", "Domenico", "Domingo", "Dominic", "Dominique", "Don", "Donald", "Donato", "Donavon", "Donna", "Donnell", "Donnie", "Donny", "Dora", "Dorcas", "Dorian", "Doris", "Dorothea", "Dorothy", "Dorris", "Dortha", "Dorthy", "Doug", "Douglas", "Dovie", "Doyle", "Drake", "Drew", "Duane", "Dudley", "Dulce", "Duncan", "Durward", "Dustin", "Dusty", "Dwight", "Dylan", "Earl", "Earlene", "Earline", "Earnest", "Earnestine", "Easter", "Easton", "Ebba", "Ebony", "Ed", "Eda", "Edd", "Eddie", "Eden", "Edgar", "Edgardo", "Edison", "Edmond", "Edmund", "Edna", "Eduardo", "Edward", "Edwardo", "Edwin", "Edwina", "Edyth", "Edythe", "Effie", "Efrain", "Efren", "Eileen", "Einar", "Eino", "Eladio", "Elaina", "Elbert", "Elda", "Eldon", "Eldora", "Eldred", "Eldridge", "Eleanora", "Eleanore", "Eleazar", "Electa", "Elena", "Elenor", "Elenora", "Eleonore", "Elfrieda", "Eli", "Elian", "Eliane", "Elias", "Eliezer", "Elijah", "Elinor", "Elinore", "Elisa", "Elisabeth", "Elise", "Eliseo", "Elisha", "Elissa", "Eliza", "Elizabeth", "Ella", "Ellen", "Ellie", "Elliot", "Elliott", "Ellis", "Ellsworth", "Elmer", "Elmira", "Elmo", "Elmore", "Elna", "Elnora", "Elody", "Eloisa", "Eloise", "Elouise", "Eloy", "Elroy", "Elsa", "Else", "Elsie", "Elta", "Elton", "Elva", "Elvera", "Elvie", "Elvis", "Elwin", "Elwyn", "Elyse", "Elyssa", "Elza", "Emanuel", "Emelia", "Emelie", "Emely", "Emerald", "Emerson", "Emery", "Emie", "Emil", "Emile", "Emilia", "Emiliano", "Emilie", "Emilio", "Emily", "Emma", "Emmalee", "Emmanuel", "Emmanuelle", "Emmet", "Emmett", "Emmie", "Emmitt", "Emmy", "Emory", "Ena", "Enid", "Enoch", "Enola", "Enos", "Enrico", "Enrique", "Ephraim", "Era", "Eriberto", "Eric", "Erica", "Erich", "Erick", "Ericka", "Erik", "Erika", "Erin", "Erling", "Erna", "Ernest", "Ernestina", "Ernestine", "Ernesto", "Ernie", "Ervin", "Erwin", "Eryn", "Esmeralda", "Esperanza", "Esta", "Esteban", "Estefania", "Estel", "Estell", "Estella", "Estelle", "Estevan", "Esther", "Estrella", "Etha", "Ethan", "Ethel", "Ethelyn", "Ethyl", "Ettie", "Eudora", "Eugene", "Eugenia", "Eula", "Eulah", "Eulalia", "Euna", "Eunice", "Eusebio", "Eva", "Evalyn", "Evan", "Evangeline", "Evans", "Eve", "Eveline", "Evelyn", "Everardo", "Everett", "Everette", "Evert", "Evie", "Ewald", "Ewell", "Ezekiel", "Ezequiel", "Ezra", "Fabian", "Fabiola", "Fae", "Fannie", "Fanny", "Fatima", "Faustino", "Fausto", "Favian", "Fay", "Faye", "Federico", "Felicia", "Felicita", "Felicity", "Felipa", "Felipe", "Felix", "Felton", "Fermin", "Fern", "Fernando", "Ferne", "Fidel", "Filiberto", "Filomena", "Finn", "Fiona", "Flavie", "Flavio", "Fleta", "Fletcher", "Flo", "Florence", "Florencio", "Florian", "Florida", "Florine", "Flossie", "Floy", "Floyd", "Ford", "Forest", "Forrest", "Foster", "Frances", "Francesca", "Francesco", "Francis", "Francisca", "Francisco", "Franco", "Frank", "Frankie", "Franz", "Fred", "Freda", "Freddie", "Freddy", "Frederic", "Frederick", "Frederik", "Frederique", "Fredrick", "Fredy", "Freeda", "Freeman", "Freida", "Frida", "Frieda", "Friedrich", "Fritz", "Furman", "Gabe", "Gabriel", "Gabriella", "Gabrielle", "Gaetano", "Gage", "Gail", "Gardner", "Garett", "Garfield", "Garland", "Garnet", "Garnett", "Garret", "Garrett", "Garrick", "Garrison", "Garry", "Garth", "Gaston", "Gavin", "Gay", "Gayle", "Gaylord", "Gene", "General", "Genesis", "Genevieve", "Gennaro", "Genoveva", "Geo", "Geoffrey", "George", "Georgette", "Georgiana", "Georgianna", "Geovanni", "Geovanny", "Geovany", "Gerald", "Geraldine", "Gerard", "Gerardo", "Gerda", "Gerhard", "Germaine", "German", "Gerry", "Gerson", "Gertrude", "Gia", "Gianni", "Gideon", "Gilbert", "Gilberto", "Gilda", "Giles", "Gillian", "Gina", "Gino", "Giovani", "Giovanna", "Giovanni", "Giovanny", "Gisselle", "Giuseppe", "Gladyce", "Gladys", "Glen", "Glenda", "Glenna", "Glennie", "Gloria", "Godfrey", "Golda", "Golden", "Gonzalo", "Gordon", "Grace", "Gracie", "Graciela", "Grady", "Graham", "Grant", "Granville", "Grayce", "Grayson", "Green", "Greg", "Gregg", "Gregoria", "Gregorio", "Gregory", "Greta", "Gretchen", "Greyson", "Griffin", "Grover", "Guadalupe", "Gudrun", "Guido", "Guillermo", "Guiseppe", "Gunnar", "Gunner", "Gus", "Gussie", "Gust", "Gustave", "Guy", "Gwen", "Gwendolyn", "Hadley", "Hailee", "Hailey", "Hailie", "Hal", "Haleigh", "Haley", "Halie", "Halle", "Hallie", "Hank", "Hanna", "Hannah", "Hans", "Hardy", "Harley", "Harmon", "Harmony", "Harold", "Harrison", "Harry", "Harvey", "Haskell", "Hassan", "Hassie", "Hattie", "Haven", "Hayden", "Haylee", "Hayley", "Haylie", "Hazel", "Hazle", "Heath", "Heather", "Heaven", "Heber", "Hector", "Heidi", "Helen", "Helena", "Helene", "Helga", "Hellen", "Helmer", "Heloise", "Henderson", "Henri", "Henriette", "Henry", "Herbert", "Herman", "Hermann", "Hermina", "Herminia", "Herminio", "Hershel", "Herta", "Hertha", "Hester", "Hettie", "Hilario", "Hilbert", "Hilda", "Hildegard", "Hillard", "Hillary", "Hilma", "Hilton", "Hipolito", "Hiram", "Hobart", "Holden", "Hollie", "Hollis", "Holly", "Hope", "Horace", "Horacio", "Hortense", "Hosea", "Houston", "Howard", "Howell", "Hoyt", "Hubert", "Hudson", "Hugh", "Hulda", "Humberto", "Hunter", "Hyman", "Ian", "Ibrahim", "Icie", "Ida", "Idell", "Idella", "Ignacio", "Ignatius", "Ike", "Ila", "Ilene", "Iliana", "Ima", "Imani", "Imelda", "Immanuel", "Imogene", "Ines", "Irma", "Irving", "Irwin", "Isaac", "Isabel", "Isabell", "Isabella", "Isabelle", "Isac", "Isadore", "Isai", "Isaiah", "Isaias", "Isidro", "Ismael", "Isobel", "Isom", "Israel", "Issac", "Itzel", "Iva", "Ivah", "Ivory", "Ivy", "Izabella", "Izaiah", "Jabari", "Jace", "Jacey", "Jacinthe", "Jacinto", "Jack", "Jackeline", "Jackie", "Jacklyn", "Jackson", "Jacky", "Jaclyn", "Jacquelyn", "Jacques", "Jacynthe", "Jada", "Jade", "Jaden", "Jadon", "Jadyn", "Jaeden", "Jaida", "Jaiden", "Jailyn", "Jaime", "Jairo", "Jakayla", "Jake", "Jakob", "Jaleel", "Jalen", "Jalon", "Jalyn", "Jamaal", "Jamal", "Jamar", "Jamarcus", "Jamel", "Jameson", "Jamey", "Jamie", "Jamil", "Jamir", "Jamison", "Jammie", "Jan", "Jana", "Janae", "Jane", "Janelle", "Janessa", "Janet", "Janice", "Janick", "Janie", "Janis", "Janiya", "Jannie", "Jany", "Jaquan", "Jaquelin", "Jaqueline", "Jared", "Jaren", "Jarod", "Jaron", "Jarred", "Jarrell", "Jarret", "Jarrett", "Jarrod", "Jarvis", "Jasen", "Jasmin", "Jason", "Jasper", "Jaunita", "Javier", "Javon", "Javonte", "Jay", "Jayce", "Jaycee", "Jayda", "Jayde", "Jayden", "Jaydon", "Jaylan", "Jaylen", "Jaylin", "Jaylon", "Jayme", "Jayne", "Jayson", "Jazlyn", "Jazmin", "Jazmyn", "Jazmyne", "Jean", "Jeanette", "Jeanie", "Jeanne", "Jed", "Jedediah", "Jedidiah", "Jeff", "Jefferey", "Jeffery", "Jeffrey", "Jeffry", "Jena", "Jenifer", "Jennie", "Jennifer", "Jennings", "Jennyfer", "Jensen", "Jerad", "Jerald", "Jeramie", "Jeramy", "Jerel", "Jeremie", "Jeremy", "Jermain", "Jermaine", "Jermey", "Jerod", "Jerome", "Jeromy", "Jerrell", "Jerrod", "Jerrold", "Jerry", "Jess", "Jesse", "Jessica", "Jessie", "Jessika", "Jessy", "Jessyca", "Jesus", "Jett", "Jettie", "Jevon", "Jewel", "Jewell", "Jillian", "Jimmie", "Jimmy", "Jo", "Joan", "Joana", "Joanie", "Joanne", "Joannie", "Joanny", "Joany", "Joaquin", "Jocelyn", "Jodie", "Jody", "Joe", "Joel", "Joelle", "Joesph", "Joey", "Johan", "Johann", "Johanna", "Johathan", "John", "Johnathan", "Johnathon", "Johnnie", "Johnny", "Johnpaul", "Johnson", "Jolie", "Jon", "Jonas", "Jonatan", "Jonathan", "Jonathon", "Jordan", "Jordane", "Jordi", "Jordon", "Jordy", "Jordyn", "Jorge", "Jose", "Josefa", "Josefina", "Joseph", "Josephine", "Josh", "Joshua", "Joshuah", "Josiah", "Josiane", "Josianne", "Josie", "Josue", "Jovan", "Jovani", "Jovanny", "Jovany", "Joy", "Joyce", "Juana", "Juanita", "Judah", "Judd", "Jude", "Judge", "Judson", "Judy", "Jules", "Julia", "Julian", "Juliana", "Julianne", "Julie", "Julien", "Juliet", "Julio", "Julius", "June", "Junior", "Junius", "Justen", "Justice", "Justina", "Justine", "Juston", "Justus", "Justyn", "Juvenal", "Juwan", "Kacey", "Kaci", "Kacie", "Kade", "Kaden", "Kadin", "Kaela", "Kaelyn", "Kaia", "Kailee", "Kailey", "Kailyn", "Kaitlin", "Kaitlyn", "Kale", "Kaleb", "Kaleigh", "Kaley", "Kali", "Kallie", "Kameron", "Kamille", "Kamren", "Kamron", "Kamryn", "Kane", "Kara", "Kareem", "Karelle", "Karen", "Kari", "Kariane", "Karianne", "Karina", "Karine", "Karl", "Karlee", "Karley", "Karli", "Karlie", "Karolann", "Karson", "Kasandra", "Kasey", "Kassandra", "Katarina", "Katelin", "Katelyn", "Katelynn", "Katharina", "Katherine", "Katheryn", "Kathleen", "Kathlyn", "Kathryn", "Kathryne", "Katlyn", "Katlynn", "Katrina", "Katrine", "Kattie", "Kavon", "Kay", "Kaya", "Kaycee", "Kayden", "Kayla", "Kaylah", "Kaylee", "Kayleigh", "Kayley", "Kayli", "Kaylie", "Kaylin", "Keagan", "Keanu", "Keara", "Keaton", "Keegan", "Keeley", "Keely", "Keenan", "Keira", "Keith", "Kellen", "Kelley", "Kelli", "Kellie", "Kelly", "Kelsi", "Kelsie", "Kelton", "Kelvin", "Ken", "Kendall", "Kendra", "Kendrick", "Kenna", "Kennedi", "Kennedy", "Kenneth", "Kennith", "Kenny", "Kenton", "Kenya", "Kenyatta", "Kenyon", "Keon", "Keshaun", "Keshawn", "Keven", "Kevin", "Kevon", "Keyon", "Keyshawn", "Khalid", "Khalil", "Kian", "Kiana", "Kianna", "Kiara", "Kiarra", "Kiel", "Kiera", "Kieran", "Kiley", "Kim", "Kimberly", "King", "Kip", "Kira", "Kirk", "Kirsten", "Kirstin", "Kitty", "Kobe", "Koby", "Kody", "Kolby", "Kole", "Korbin", "Korey", "Kory", "Kraig", "Kris", "Krista", "Kristian", "Kristin", "Kristina", "Kristofer", "Kristoffer", "Kristopher", "Kristy", "Krystal", "Krystel", "Krystina", "Kurt", "Kurtis", "Kyla", "Kyle", "Kylee", "Kyleigh", "Kyler", "Kylie", "Kyra", "Lacey", "Lacy", "Ladarius", "Lafayette", "Laila", "Laisha", "Lamar", "Lambert", "Lamont", "Lance", "Landen", "Lane", "Laney", "Larissa", "Laron", "Larry", "Larue", "Laura", "Laurel", "Lauren", "Laurence", "Lauretta", "Lauriane", "Laurianne", "Laurie", "Laurine", "Laury", "Lauryn", "Lavada", "Lavern", "Laverna", "Laverne", "Lavina", "Lavinia", "Lavon", "Lavonne", "Lawrence", "Lawson", "Layla", "Layne", "Lazaro", "Lea", "Leann", "Leanna", "Leanne", "Leatha", "Leda", "Lee", "Leif", "Leila", "Leilani", "Lela", "Lelah", "Leland", "Lelia", "Lempi", "Lemuel", "Lenna", "Lennie", "Lenny", "Lenora", "Lenore", "Leo", "Leola", "Leon", "Leonard", "Leonardo", "Leone", "Leonel", "Leonie", "Leonor", "Leonora", "Leopold", "Leopoldo", "Leora", "Lera", "Lesley", "Leslie", "Lesly", "Lessie", "Lester", "Leta", "Letha", "Letitia", "Levi", "Lew", "Lewis", "Lexi", "Lexie", "Lexus", "Lia", "Liam", "Liana", "Libbie", "Libby", "Lila", "Lilian", "Liliana", "Liliane", "Lilla", "Lillian", "Lilliana", "Lillie", "Lilly", "Lily", "Lilyan", "Lina", "Lincoln", "Linda", "Lindsay", "Lindsey", "Linnea", "Linnie", "Linwood", "Lionel", "Lisa", "Lisandro", "Lisette", "Litzy", "Liza", "Lizeth", "Lizzie", "Llewellyn", "Lloyd", "Logan", "Lois", "Lola", "Lolita", "Loma", "Lon", "London", "Lonie", "Lonnie", "Lonny", "Lonzo", "Lora", "Loraine", "Loren", "Lorena", "Lorenz", "Lorenza", "Lorenzo", "Lori", "Lorine", "Lorna", "Lottie", "Lou", "Louie", "Louisa", "Lourdes", "Louvenia", "Lowell", "Loy", "Loyal", "Loyce", "Lucas", "Luciano", "Lucie", "Lucienne", "Lucile", "Lucinda", "Lucio", "Lucious", "Lucius", "Lucy", "Ludie", "Ludwig", "Lue", "Luella", "Luigi", "Luis", "Luisa", "Lukas", "Lula", "Lulu", "Luna", "Lupe", "Lura", "Lurline", "Luther", "Luz", "Lyda", "Lydia", "Lyla", "Lynn", "Lyric", "Lysanne", "Mabel", "Mabelle", "Mable", "Mac", "Macey", "Maci", "Macie", "Mack", "Mackenzie", "Macy", "Madaline", "Madalyn", "Maddison", "Madeline", "Madelyn", "Madelynn", "Madge", "Madie", "Madilyn", "Madisen", "Madison", "Madisyn", "Madonna", "Madyson", "Mae", "Maegan", "Maeve", "Mafalda", "Magali", "Magdalen", "Magdalena", "Maggie", "Magnolia", "Magnus", "Maia", "Maida", "Maiya", "Major", "Makayla", "Makenna", "Makenzie", "Malachi", "Malcolm", "Malika", "Malinda", "Mallie", "Mallory", "Malvina", "Mandy", "Manley", "Manuel", "Manuela", "Mara", "Marc", "Marcel", "Marcelina", "Marcelino", "Marcella", "Marcelle", "Marcellus", "Marcelo", "Marcia", "Marco", "Marcos", "Marcus", "Margaret", "Margarete", "Margarett", "Margaretta", "Margarette", "Margarita", "Marge", "Margie", "Margot", "Margret", "Marguerite", "Maria", "Mariah", "Mariam", "Marian", "Mariana", "Mariane", "Marianna", "Marianne", "Mariano", "Maribel", "Marie", "Mariela", "Marielle", "Marietta", "Marilie", "Marilou", "Marilyne", "Marina", "Mario", "Marion", "Marisa", "Marisol", "Maritza", "Marjolaine", "Marjorie", "Marjory", "Mark", "Markus", "Marlee", "Marlen", "Marlene", "Marley", "Marlin", "Marlon", "Marques", "Marquis", "Marquise", "Marshall", "Marta", "Martin", "Martina", "Martine", "Marty", "Marvin", "Mary", "Maryam", "Maryjane", "Maryse", "Mason", "Mateo", "Mathew", "Mathias", "Mathilde", "Matilda", "Matilde", "Matt", "Matteo", "Mattie", "Maud", "Maude", "Maudie", "Maureen", "Maurice", "Mauricio", "Maurine", "Maverick", "Mavis", "Max", "Maxie", "Maxime", "Maximilian", "Maximillia", "Maximillian", "Maximo", "Maximus", "Maxine", "Maxwell", "May", "Maya", "Maybell", "Maybelle", "Maye", "Maymie", "Maynard", "Mayra", "Mazie", "Mckayla", "Mckenna", "Mckenzie", "Meagan", "Meaghan", "Meda", "Megane", "Meggie", "Meghan", "Mekhi", "Melany", "Melba", "Melisa", "Melissa", "Mellie", "Melody", "Melvin", "Melvina", "Melyna", "Melyssa", "Mercedes", "Meredith", "Merl", "Merle", "Merlin", "Merritt", "Mertie", "Mervin", "Meta", "Mia", "Micaela", "Micah", "Michael", "Michaela", "Michale", "Micheal", "Michel", "Michele", "Michelle", "Miguel", "Mikayla", "Mike", "Mikel", "Milan", "Miles", "Milford", "Miller", "Millie", "Milo", "Milton", "Mina", "Minerva", "Minnie", "Miracle", "Mireille", "Mireya", "Misael", "Missouri", "Misty", "Mitchel", "Mitchell", "Mittie", "Modesta", "Modesto", "Mohamed", "Mohammad", "Mohammed", "Moises", "Mollie", "Molly", "Mona", "Monica", "Monique", "Monroe", "Monserrat", "Monserrate", "Montana", "Monte", "Monty", "Morgan", "Moriah", "Morris", "Mortimer", "Morton", "Mose", "Moses", "Moshe", "Mossie", "Mozell", "Mozelle", "Muhammad", "Muriel", "Murl", "Murphy", "Murray", "Mustafa", "Mya", "Myah", "Mylene", "Myles", "Myra", "Myriam", "Myrl", "Myrna", "Myron", "Myrtice", "Myrtie", "Myrtis", "Myrtle", "Nadia", "Nakia", "Name", "Nannie", "Naomi", "Naomie", "Napoleon", "Narciso", "Nash", "Nasir", "Nat", "Natalia", "Natalie", "Natasha", "Nathan", "Nathanael", "Nathanial", "Nathaniel", "Nathen", "Nayeli", "Neal", "Ned", "Nedra", "Neha", "Neil", "Nelda", "Nella", "Nelle", "Nellie", "Nels", "Nelson", "Neoma", "Nestor", "Nettie", "Neva", "Newell", "Newton", "Nia", "Nicholas", "Nicholaus", "Nichole", "Nick", "Nicklaus", "Nickolas", "Nico", "Nicola", "Nicolas", "Nicole", "Nicolette", "Nigel", "Nikita", "Nikki", "Nikko", "Niko", "Nikolas", "Nils", "Nina", "Noah", "Noble", "Noe", "Noel", "Noelia", "Noemi", "Noemie", "Noemy", "Nola", "Nolan", "Nona", "Nora", "Norbert", "Norberto", "Norene", "Norma", "Norris", "Norval", "Norwood", "Nova", "Novella", "Nya", "Nyah", "Nyasia", "Obie", "Oceane", "Ocie", "Octavia", "Oda", "Odell", "Odessa", "Odie", "Ofelia", "Okey", "Ola", "Olaf", "Ole", "Olen", "Oleta", "Olga", "Olin", "Oliver", "Ollie", "Oma", "Omari", "Omer", "Ona", "Onie", "Opal", "Ophelia", "Ora", "Oral", "Oran", "Oren", "Orie", "Orin", "Orion", "Orland", "Orlando", "Orlo", "Orpha", "Orrin", "Orval", "Orville", "Osbaldo", "Osborne", "Oscar", "Osvaldo", "Oswald", "Oswaldo", "Otha", "Otho", "Otilia", "Otis", "Ottilie", "Ottis", "Otto", "Ova", "Owen", "Ozella", "Pablo", "Paige", "Palma", "Pamela", "Pansy", "Paolo", "Paris", "Parker", "Pascale", "Pasquale", "Pat", "Patience", "Patricia", "Patrick", "Patsy", "Pattie", "Paul", "Paula", "Pauline", "Paxton", "Payton", "Pearl", "Pearlie", "Pearline", "Pedro", "Peggie", "Penelope", "Percival", "Percy", "Perry", "Pete", "Peter", "Petra", "Peyton", "Philip", "Phoebe", "Phyllis", "Pierce", "Pierre", "Pietro", "Pink", "Pinkie", "Piper", "Polly", "Porter", "Precious", "Presley", "Preston", "Price", "Prince", "Princess", "Priscilla", "Providenci", "Prudence", "Queen", "Queenie", "Quentin", "Quincy", "Quinn", "Quinten", "Quinton", "Rachael", "Rachel", "Rachelle", "Rae", "Raegan", "Rafael", "Rafaela", "Raheem", "Rahsaan", "Rahul", "Raina", "Raleigh", "Ralph", "Ramiro", "Ramon", "Ramona", "Randal", "Randall", "Randi", "Randy", "Ransom", "Raoul", "Raphael", "Raphaelle", "Raquel", "Rashad", "Rashawn", "Rasheed", "Raul", "Raven", "Ray", "Raymond", "Raymundo", "Reagan", "Reanna", "Reba", "Rebeca", "Rebecca", "Rebeka", "Rebekah", "Reece", "Reed", "Reese", "Regan", "Reggie", "Reginald", "Reid", "Reilly", "Reina", "Reinhold", "Remington", "Rene", "Renee", "Ressie", "Reta", "Retha", "Retta", "Reuben", "Reva", "Rex", "Rey", "Reyes", "Reymundo", "Reyna", "Reynold", "Rhea", "Rhett", "Rhianna", "Rhiannon", "Rhoda", "Ricardo", "Richard", "Richie", "Richmond", "Rick", "Rickey", "Rickie", "Ricky", "Rico", "Rigoberto", "Riley", "Rita", "River", "Robb", "Robbie", "Robert", "Roberta", "Roberto", "Robin", "Robyn", "Rocio", "Rocky", "Rod", "Roderick", "Rodger", "Rodolfo", "Rodrick", "Rodrigo", "Roel", "Rogelio", "Roger", "Rogers", "Rolando", "Rollin", "Roma", "Romaine", "Roman", "Ron", "Ronaldo", "Ronny", "Roosevelt", "Rory", "Rosa", "Rosalee", "Rosalia", "Rosalind", "Rosalinda", "Rosalyn", "Rosamond", "Rosanna", "Rosario", "Roscoe", "Rose", "Rosella", "Roselyn", "Rosemarie", "Rosemary", "Rosendo", "Rosetta", "Rosie", "Rosina", "Roslyn", "Ross", "Rossie", "Rowan", "Rowena", "Rowland", "Roxane", "Roxanne", "Roy", "Royal", "Royce", "Rozella", "Ruben", "Rubie", "Ruby", "Rubye", "Rudolph", "Rudy", "Rupert", "Russ", "Russel", "Russell", "Rusty", "Ruth", "Ruthe", "Ruthie", "Ryan", "Ryann", "Ryder", "Rylan", "Rylee", "Ryleigh", "Ryley", "Sabina", "Sabrina", "Sabryna", "Sadie", "Sadye", "Sage", "Saige", "Sallie", "Sally", "Salma", "Salvador", "Salvatore", "Sam", "Samanta", "Samantha", "Samara", "Samir", "Sammie", "Sammy", "Samson", "Sandra", "Sandrine", "Sandy", "Sanford", "Santa", "Santiago", "Santina", "Santino", "Santos", "Sarah", "Sarai", "Sarina", "Sasha", "Saul", "Savanah", "Savanna", "Savannah", "Savion", "Scarlett", "Schuyler", "Scot", "Scottie", "Scotty", "Seamus", "Sean", "Sebastian", "Sedrick", "Selena", "Selina", "Selmer", "Serena", "Serenity", "Seth", "Shad", "Shaina", "Shakira", "Shana", "Shane", "Shanel", "Shanelle", "Shania", "Shanie", "Shaniya", "Shanna", "Shannon", "Shanny", "Shanon", "Shany", "Sharon", "Shaun", "Shawn", "Shawna", "Shaylee", "Shayna", "Shayne", "Shea", "Sheila", "Sheldon", "Shemar", "Sheridan", "Sherman", "Sherwood", "Shirley", "Shyann", "Shyanne", "Sibyl", "Sid", "Sidney", "Sienna", "Sierra", "Sigmund", "Sigrid", "Sigurd", "Silas", "Sim", "Simeon", "Simone", "Sincere", "Sister", "Skye", "Skyla", "Skylar", "Sofia", "Soledad", "Solon", "Sonia", "Sonny", "Sonya", "Sophia", "Sophie", "Spencer", "Stacey", "Stacy", "Stan", "Stanford", "Stanley", "Stanton", "Stefan", "Stefanie", "Stella", "Stephan", "Stephania", "Stephanie", "Stephany", "Stephen", "Stephon", "Sterling", "Steve", "Stevie", "Stewart", "Stone", "Stuart", "Summer", "Sunny", "Susan", "Susana", "Susanna", "Susie", "Suzanne", "Sven", "Syble", "Sydnee", "Sydney", "Sydni", "Sydnie", "Sylvan", "Sylvester", "Sylvia", "Tabitha", "Tad", "Talia", "Talon", "Tamara", "Tamia", "Tania", "Tanner", "Tanya", "Tara", "Taryn", "Tate", "Tatum", "Tatyana", "Taurean", "Tavares", "Taya", "Taylor", "Teagan", "Ted", "Telly", "Terence", "Teresa", "Terrance", "Terrell", "Terrence", "Terrill", "Terry", "Tess", "Tessie", "Tevin", "Thad", "Thaddeus", "Thalia", "Thea", "Thelma", "Theo", "Theodora", "Theodore", "Theresa", "Therese", "Theresia", "Theron", "Thomas", "Thora", "Thurman", "Tia", "Tiana", "Tianna", "Tiara", "Tierra", "Tiffany", "Tillman", "Timmothy", "Timmy", "Timothy", "Tina", "Tito", "Titus", "Tobin", "Toby", "Tod", "Tom", "Tomas", "Tomasa", "Tommie", "Toney", "Toni", "Tony", "Torey", "Torrance", "Torrey", "Toy", "Trace", "Tracey", "Tracy", "Travis", "Travon", "Tre", "Tremaine", "Tremayne", "Trent", "Trenton", "Tressa", "Tressie", "Treva", "Trever", "Trevion", "Trevor", "Trey", "Trinity", "Trisha", "Tristian", "Tristin", "Triston", "Troy", "Trudie", "Trycia", "Trystan", "Turner", "Twila", "Tyler", "Tyra", "Tyree", "Tyreek", "Tyrel", "Tyrell", "Tyrese", "Tyrique", "Tyshawn", "Tyson", "Ubaldo", "Ulices", "Ulises", "Una", "Unique", "Urban", "Uriah", "Uriel", "Ursula", "Vada", "Valentin", "Valentina", "Valentine", "Valerie", "Vallie", "Van", "Vance", "Vanessa", "Vaughn", "Veda", "Velda", "Vella", "Velma", "Velva", "Vena", "Verda", "Verdie", "Vergie", "Verla", "Verlie", "Vern", "Verna", "Verner", "Vernice", "Vernie", "Vernon", "Verona", "Veronica", "Vesta", "Vicenta", "Vicente", "Vickie", "Vicky", "Victor", "Victoria", "Vida", "Vidal", "Vilma", "Vince", "Vincent", "Vincenza", "Vincenzo", "Vinnie", "Viola", "Violet", "Violette", "Virgie", "Virgil", "Virginia", "Virginie", "Vita", "Vito", "Viva", "Vivian", "Viviane", "Vivianne", "Vivien", "Vivienne", "Vladimir", "Wade", "Waino", "Waldo", "Walker", "Wallace", "Walter", "Walton", "Wanda", "Ward", "Warren", "Watson", "Wava", "Waylon", "Wayne", "Webster", "Weldon", "Wellington", "Wendell", "Wendy", "Werner", "Westley", "Weston", "Whitney", "Wilber", "Wilbert", "Wilburn", "Wiley", "Wilford", "Wilfred", "Wilfredo", "Wilfrid", "Wilhelm", "Wilhelmine", "Will", "Willa", "Willard", "William", "Willie", "Willis", "Willow", "Willy", "Wilma", "Wilmer", "Wilson", "Wilton", "Winfield", "Winifred", "Winnifred", "Winona", "Winston", "Woodrow", "Wyatt", "Wyman", "Xander", "Xavier", "Xzavier", "Yadira", "Yasmeen", "Yasmin", "Yasmine", "Yazmin", "Yesenia", "Yessenia", "Yolanda", "Yoshiko", "Yvette", "Yvonne", "Zachariah", "Zachary", "Zachery", "Zack", "Zackary", "Zackery", "Zakary", "Zander", "Zane", "Zaria", "Zechariah", "Zelda", "Zella", "Zelma", "Zena", "Zetta", "Zion", "Zita", "Zoe", "Zoey", "Zoie", "Zoila", "Zola", "Zora", "Zula"],
                last_name: ["Abbott", "Abernathy", "Abshire", "Adams", "Altenwerth", "Anderson", "Ankunding", "Armstrong", "Auer", "Aufderhar", "Bahringer", "Bailey", "Balistreri", "Barrows", "Bartell", "Bartoletti", "Barton", "Bashirian", "Batz", "Bauch", "Baumbach", "Bayer", "Beahan", "Beatty", "Bechtelar", "Becker", "Bednar", "Beer", "Beier", "Berge", "Bergnaum", "Bergstrom", "Bernhard", "Bernier", "Bins", "Blanda", "Blick", "Block", "Bode", "Boehm", "Bogan", "Bogisich", "Borer", "Bosco", "Botsford", "Boyer", "Boyle", "Bradtke", "Brakus", "Braun", "Breitenberg", "Brekke", "Brown", "Bruen", "Buckridge", "Carroll", "Carter", "Cartwright", "Casper", "Cassin", "Champlin", "Christiansen", "Cole", "Collier", "Collins", "Conn", "Connelly", "Conroy", "Considine", "Corkery", "Cormier", "Corwin", "Cremin", "Crist", "Crona", "Cronin", "Crooks", "Cruickshank", "Cummerata", "Cummings", "Dach", "D'Amore", "Daniel", "Dare", "Daugherty", "Davis", "Deckow", "Denesik", "Dibbert", "Dickens", "Dicki", "Dickinson", "Dietrich", "Donnelly", "Dooley", "Douglas", "Doyle", "DuBuque", "Durgan", "Ebert", "Effertz", "Eichmann", "Emard", "Emmerich", "Erdman", "Ernser", "Fadel", "Fahey", "Farrell", "Fay", "Feeney", "Feest", "Feil", "Ferry", "Fisher", "Flatley", "Frami", "Franecki", "Friesen", "Fritsch", "Funk", "Gaylord", "Gerhold", "Gerlach", "Gibson", "Gislason", "Gleason", "Gleichner", "Glover", "Goldner", "Goodwin", "Gorczany", "Gottlieb", "Goyette", "Grady", "Graham", "Grant", "Green", "Greenfelder", "Greenholt", "Grimes", "Gulgowski", "Gusikowski", "Gutkowski", "Gutmann", "Haag", "Hackett", "Hagenes", "Hahn", "Haley", "Halvorson", "Hamill", "Hammes", "Hand", "Hane", "Hansen", "Harber", "Harris", "Hartmann", "Harvey", "Hauck", "Hayes", "Heaney", "Heathcote", "Hegmann", "Heidenreich", "Heller", "Herman", "Hermann", "Hermiston", "Herzog", "Hessel", "Hettinger", "Hickle", "Hilll", "Hills", "Hilpert", "Hintz", "Hirthe", "Hodkiewicz", "Hoeger", "Homenick", "Hoppe", "Howe", "Howell", "Hudson", "Huel", "Huels", "Hyatt", "Jacobi", "Jacobs", "Jacobson", "Jakubowski", "Jaskolski", "Jast", "Jenkins", "Jerde", "Johns", "Johnson", "Johnston", "Jones", "Kassulke", "Kautzer", "Keebler", "Keeling", "Kemmer", "Kerluke", "Kertzmann", "Kessler", "Kiehn", "Kihn", "Kilback", "King", "Kirlin", "Klein", "Kling", "Klocko", "Koch", "Koelpin", "Koepp", "Kohler", "Konopelski", "Koss", "Kovacek", "Kozey", "Krajcik", "Kreiger", "Kris", "Kshlerin", "Kub", "Kuhic", "Kuhlman", "Kuhn", "Kulas", "Kunde", "Kunze", "Kuphal", "Kutch", "Kuvalis", "Labadie", "Lakin", "Lang", "Langosh", "Langworth", "Larkin", "Larson", "Leannon", "Lebsack", "Ledner", "Leffler", "Legros", "Lehner", "Lemke", "Lesch", "Leuschke", "Lind", "Lindgren", "Littel", "Little", "Lockman", "Lowe", "Lubowitz", "Lueilwitz", "Luettgen", "Lynch", "Macejkovic", "MacGyver", "Maggio", "Mann", "Mante", "Marks", "Marquardt", "Marvin", "Mayer", "Mayert", "McClure", "McCullough", "McDermott", "McGlynn", "McKenzie", "McLaughlin", "Medhurst", "Mertz", "Metz", "Miller", "Mills", "Mitchell", "Moen", "Mohr", "Monahan", "Moore", "Morar", "Morissette", "Mosciski", "Mraz", "Mueller", "Muller", "Murazik", "Murphy", "Murray", "Nader", "Nicolas", "Nienow", "Nikolaus", "Nitzsche", "Nolan", "Oberbrunner", "O'Connell", "O'Conner", "O'Hara", "O'Keefe", "O'Kon", "Okuneva", "Olson", "Ondricka", "O'Reilly", "Orn", "Ortiz", "Osinski", "Pacocha", "Padberg", "Pagac", "Parisian", "Parker", "Paucek", "Pfannerstill", "Pfeffer", "Pollich", "Pouros", "Powlowski", "Predovic", "Price", "Prohaska", "Prosacco", "Purdy", "Quigley", "Quitzon", "Rath", "Ratke", "Rau", "Raynor", "Reichel", "Reichert", "Reilly", "Reinger", "Rempel", "Renner", "Reynolds", "Rice", "Rippin", "Ritchie", "Robel", "Roberts", "Rodriguez", "Rogahn", "Rohan", "Rolfson", "Romaguera", "Roob", "Rosenbaum", "Rowe", "Ruecker", "Runolfsdottir", "Runolfsson", "Runte", "Russel", "Rutherford", "Ryan", "Sanford", "Satterfield", "Sauer", "Sawayn", "Schaden", "Schaefer", "Schamberger", "Schiller", "Schimmel", "Schinner", "Schmeler", "Schmidt", "Schmitt", "Schneider", "Schoen", "Schowalter", "Schroeder", "Schulist", "Schultz", "Schumm", "Schuppe", "Schuster", "Senger", "Shanahan", "Shields", "Simonis", "Sipes", "Skiles", "Smith", "Smitham", "Spencer", "Spinka", "Sporer", "Stamm", "Stanton", "Stark", "Stehr", "Steuber", "Stiedemann", "Stokes", "Stoltenberg", "Stracke", "Streich", "Stroman", "Strosin", "Swaniawski", "Swift", "Terry", "Thiel", "Thompson", "Tillman", "Torp", "Torphy", "Towne", "Toy", "Trantow", "Tremblay", "Treutel", "Tromp", "Turcotte", "Turner", "Ullrich", "Upton", "Vandervort", "Veum", "Volkman", "Von", "VonRueden", "Waelchi", "Walker", "Walsh", "Walter", "Ward", "Waters", "Watsica", "Weber", "Wehner", "Weimann", "Weissnat", "Welch", "West", "White", "Wiegand", "Wilderman", "Wilkinson", "Will", "Williamson", "Willms", "Windler", "Wintheiser", "Wisoky", "Wisozk", "Witting", "Wiza", "Wolf", "Wolff", "Wuckert", "Wunsch", "Wyman", "Yost", "Yundt", "Zboncak", "Zemlak", "Ziemann", "Zieme", "Zulauf"]
            },
            d = ["md-menu", "md-arrow-drop-down", "md-flag", "md-home", "md-warning", "md-play-circle-fill", "md-forum", "md-content-paste", "md-battery-80", "md-format-textdirection-l-to-r", "md-folder-open", "md-desktop-windows", "md-collections", "md-directions-bike", "md-apps", "md-phone-in-talk", "md-people", "md-star-half", "md-arrow-drop-down", "md-file-download md-lg", "md-3d-rotation", "md-accessibility", "md-account-balance", "md-account-balance-wallet", "md-account-box", "md-account-child", "md-account-circle", "md-add-shopping-cart", "md-alarm", "md-alarm-add", "md-alarm-off", "md-alarm-on", "md-android", "md-announcement", "md-aspect-ratio", "md-assessment", "md-assignment", "md-assignment-ind", "md-assignment-late", "md-assignment-return", "md-assignment-returned", "md-assignment-turned-in", "md-autorenew", "md-backup", "md-book", "md-bookmark", "md-bookmark-outline", "md-bug-report", "md-cached", "md-class", "md-credit-card", "md-dashboard", "md-delete", "md-description", "md-dns", "md-done", "md-done-all", "md-event", "md-exit-to-app", "md-explore", "md-extension", "md-face-unlock", "md-favorite", "md-favorite-outline", "md-find-in-page", "md-find-replace", "md-flip-to-back", "md-flip-to-front", "md-get-app", "md-grade", "md-group-work", "md-help", "md-highlight-remove", "md-history", "md-home", "md-https", "md-info", "md-info-outline", "md-input", "md-invert-colors", "md-label", "md-label-outline", "md-language", "md-launch", "md-list", "md-lock", "md-lock-open", "md-lock-outline", "md-loyalty", "md-markunread-mailbox", "md-note-add", "md-open-in-browser", "md-open-in-new", "md-open-with", "md-pageview", "md-payment", "md-perm-camera-mic", "md-perm-contact-cal", "md-perm-data-setting", "md-perm-device-info", "md-perm-identity", "md-perm-media", "md-perm-phone-msg", "md-perm-scan-wifi", "md-picture-in-picture", "md-polymer", "md-print", "md-query-builder", "md-question-answer", "md-receipt", "md-redeem", "md-report-problem", "md-restore", "md-room", "md-schedule", "md-search", "md-settings", "md-settings-applications", "md-settings-backup-restore", "md-settings-bluetooth", "md-settings-cell", "md-settings-display", "md-settings-ethernet", "md-settings-input-antenna", "md-settings-input-component", "md-settings-input-composite", "md-settings-input-hdmi", "md-settings-input-svideo", "md-settings-overscan", "md-settings-phone", "md-settings-power", "md-settings-remote", "md-settings-voice", "md-shop", "md-shopping-basket", "md-shopping-cart", "md-shop-two", "md-speaker-notes", "md-spellcheck", "md-star-rate", "md-stars", "md-store", "md-subject", "md-swap-horiz", "md-swap-vert", "md-swap-vert-circle", "md-system-update-tv", "md-tab", "md-tab-unselected", "md-theaters", "md-thumb-down", "md-thumbs-up-down", "md-thumb-up", "md-toc", "md-today", "md-track-changes", "md-translate", "md-trending-down", "md-trending-neutral", "md-trending-up", "md-turned-in", "md-turned-in-not", "md-verified-user", "md-view-agenda", "md-view-array", "md-view-carousel", "md-view-column", "md-view-day", "md-view-headline", "md-view-list", "md-view-module", "md-view-quilt", "md-view-stream", "md-view-week", "md-visibility", "md-visibility-off", "md-wallet-giftcard", "md-wallet-membership", "md-wallet-travel", "md-work", "md-error", "md-warning", "md-album", "md-av-timer", "md-closed-caption", "md-equalizer", "md-explicit", "md-fast-forward", "md-fast-rewind", "md-games", "md-hearing", "md-high-quality", "md-loop", "md-mic", "md-mic-none", "md-mic-off", "md-movie", "md-my-library-add", "md-my-library-books", "md-my-library-music", "md-new-releases", "md-not-interested", "md-pause", "md-pause-circle-fill", "md-pause-circle-outline", "md-play-arrow", "md-play-circle-fill", "md-play-circle-outline", "md-playlist-add", "md-play-shopping-bag", "md-queue", "md-queue-music", "md-radio", "md-recent-actors", "md-repeat", "md-repeat-one", "md-replay", "md-shuffle", "md-skip-next", "md-skip-previous", "md-snooze", "md-stop", "md-subtitles", "md-surround-sound", "md-videocam", "md-videocam-off", "md-video-collection", "md-volume-down", "md-volume-mute", "md-volume-off", "md-volume-up", "md-web", "md-business", "md-call", "md-call-end", "md-call-made", "md-call-merge", "md-call-missed", "md-call-received", "md-call-split", "md-chat", "md-clear-all", "md-comment", "md-contacts", "md-dialer-sip", "md-dialpad", "md-dnd-on", "md-email", "md-forum", "md-import-export", "md-invert-colors-off", "md-invert-colors-on", "md-live-help", "md-location-off", "md-location-on", "md-message", "md-messenger", "md-no-sim", "md-phone", "md-portable-wifi-off", "md-quick-contacts-dialer", "md-quick-contacts-mail", "md-ring-volume", "md-stay-current-landscape", "md-stay-current-portrait", "md-stay-primary-landscape", "md-stay-primary-portrait", "md-swap-calls", "md-textsms", "md-voicemail", "md-vpn-key", "md-add", "md-add-box", "md-add-circle", "md-add-circle-outline", "md-archive", "md-backspace", "md-block", "md-clear", "md-content-copy", "md-content-cut", "md-content-paste", "md-create", "md-drafts", "md-filter-list", "md-flag", "md-forward", "md-gesture", "md-inbox", "md-link", "md-mail", "md-markunread", "md-redo", "md-remove", "md-remove-circle", "md-remove-circle-outline", "md-reply", "md-reply-all", "md-report", "md-save", "md-select-all", "md-send", "md-sort", "md-text-format", "md-undo", "md-access-alarm", "md-access-alarms", "md-access-time", "md-add-alarm", "md-airplanemode-off", "md-airplanemode-on", "md-battery-20", "md-battery-30", "md-battery-50", "md-battery-60", "md-battery-80", "md-battery-90", "md-battery-alert", "md-battery-charging-20", "md-battery-charging-30", "md-battery-charging-50", "md-battery-charging-60", "md-battery-charging-80", "md-battery-charging-90", "md-battery-charging-full", "md-battery-full", "md-battery-std", "md-battery-unknown", "md-bluetooth", "md-bluetooth-connected", "md-bluetooth-disabled", "md-bluetooth-searching", "md-brightness-auto", "md-brightness-high", "md-brightness-low", "md-brightness-medium", "md-data-usage", "md-developer-mode", "md-devices", "md-dvr", "md-gps-fixed", "md-gps-not-fixed", "md-gps-off", "md-location-disabled", "md-location-searching", "md-multitrack-audio", "md-network-cell", "md-network-wifi", "md-nfc", "md-now-wallpaper", "md-now-widgets", "md-screen-lock-landscape", "md-screen-lock-portrait", "md-screen-lock-rotation", "md-screen-rotation", "md-sd-storage", "md-settings-system-daydream", "md-signal-cellular-0-bar", "md-signal-cellular-1-bar", "md-signal-cellular-2-bar", "md-signal-cellular-3-bar", "md-signal-cellular-4-bar", "md-signal-cellular-connected-no-internet-0-bar", "md-signal-cellular-connected-no-internet-1-bar", "md-signal-cellular-connected-no-internet-2-bar", "md-signal-cellular-connected-no-internet-3-bar", "md-signal-cellular-connected-no-internet-4-bar", "md-signal-cellular-no-sim", "md-signal-cellular-null", "md-signal-cellular-off", "md-signal-wifi-0-bar", "md-signal-wifi-1-bar", "md-signal-wifi-2-bar", "md-signal-wifi-3-bar", "md-signal-wifi-4-bar", "md-signal-wifi-off", "md-storage", "md-usb", "md-wifi-lock", "md-wifi-tethering", "md-attach-file", "md-attach-money", "md-border-all", "md-border-bottom", "md-border-clear", "md-border-color", "md-border-horizontal", "md-border-inner", "md-border-left", "md-border-outer", "md-border-right", "md-border-style", "md-border-top", "md-border-vertical", "md-format-align-center", "md-format-align-justify", "md-format-align-left", "md-format-align-right", "md-format-bold", "md-format-clear", "md-format-color-fill", "md-format-color-reset", "md-format-color-text", "md-format-indent-decrease", "md-format-indent-increase", "md-format-italic", "md-format-line-spacing", "md-format-list-bulleted", "md-format-list-numbered", "md-format-paint", "md-format-quote", "md-format-size", "md-format-strikethrough", "md-format-textdirection-l-to-r", "md-format-textdirection-r-to-l", "md-format-underline", "md-functions", "md-insert-chart", "md-insert-comment", "md-insert-drive-file", "md-insert-emoticon", "md-insert-invitation", "md-insert-link", "md-insert-photo", "md-merge-type", "md-mode-comment", "md-mode-edit", "md-publish", "md-vertical-align-bottom", "md-vertical-align-center", "md-vertical-align-top", "md-wrap-text", "md-attachment", "md-cloud", "md-cloud-circle", "md-cloud-done", "md-cloud-download", "md-cloud-off", "md-cloud-queue", "md-cloud-upload", "md-file-download", "md-file-upload", "md-folder", "md-folder-open", "md-folder-shared", "md-cast", "md-cast-connected", "md-computer", "md-desktop-mac", "md-desktop-windows", "md-dock", "md-gamepad", "md-headset", "md-headset-mic", "md-keyboard", "md-keyboard-alt", "md-keyboard-arrow-down", "md-keyboard-arrow-left", "md-keyboard-arrow-right", "md-keyboard-arrow-up", "md-keyboard-backspace", "md-keyboard-capslock", "md-keyboard-control", "md-keyboard-hide", "md-keyboard-return", "md-keyboard-tab", "md-keyboard-voice", "md-laptop", "md-laptop-chromebook", "md-laptop-mac", "md-laptop-windows", "md-memory", "md-mouse", "md-phone-android", "md-phone-iphone", "md-phonelink", "md-phonelink-off", "md-security", "md-sim-card", "md-smartphone", "md-speaker", "md-tablet", "md-tablet-android", "md-tablet-mac", "md-tv", "md-watch", "md-add-to-photos", "md-adjust", "md-assistant-photo", "md-audiotrack", "md-blur-circular", "md-blur-linear", "md-blur-off", "md-blur-on", "md-brightness-1", "md-brightness-2", "md-brightness-3", "md-brightness-4", "md-brightness-5", "md-brightness-6", "md-brightness-7", "md-brush", "md-camera", "md-camera-alt", "md-camera-front", "md-camera-rear", "md-camera-roll", "md-center-focus-strong", "md-center-focus-weak", "md-collections", "md-colorize", "md-color-lens", "md-compare", "md-control-point", "md-control-point-duplicate", "md-crop", "md-crop-3-2", "md-crop-5-4", "md-crop-7-5", "md-crop-16-9", "md-crop-din", "md-crop-free", "md-crop-landscape", "md-crop-original", "md-crop-portrait", "md-crop-square", "md-dehaze", "md-details", "md-edit", "md-exposure", "md-exposure-minus-1", "md-exposure-minus-2", "md-exposure-zero", "md-exposure-plus-1", "md-exposure-plus-2", "md-filter", "md-filter-1", "md-filter-2", "md-filter-3", "md-filter-4", "md-filter-5", "md-filter-6", "md-filter-7", "md-filter-8", "md-filter-9", "md-filter-9-plus", "md-filter-b-and-w", "md-filter-center-focus", "md-filter-drama", "md-filter-frames", "md-filter-hdr", "md-filter-none", "md-filter-tilt-shift", "md-filter-vintage", "md-flare", "md-flash-auto", "md-flash-off", "md-flash-on", "md-flip", "md-gradient", "md-grain", "md-grid-off", "md-grid-on", "md-hdr-off", "md-hdr-on", "md-hdr-strong", "md-hdr-weak", "md-healing", "md-image", "md-image-aspect-ratio", "md-iso", "md-landscape", "md-leak-add", "md-leak-remove", "md-lens", "md-looks", "md-looks-1", "md-looks-2", "md-looks-3", "md-looks-4", "md-looks-5", "md-looks-6", "md-loupe", "md-movie-creation", "md-nature", "md-nature-people", "md-navigate-before", "md-navigate-next", "md-palette", "md-panorama", "md-panorama-fisheye", "md-panorama-horizontal", "md-panorama-vertical", "md-panorama-wide-angle", "md-photo", "md-photo-album", "md-photo-camera", "md-photo-library", "md-portrait", "md-remove-red-eye", "md-rotate-left", "md-rotate-right", "md-slideshow", "md-straighten", "md-style", "md-switch-camera", "md-switch-video", "md-tag-faces", "md-texture", "md-timelapse", "md-timer", "md-timer-3", "md-timer-10", "md-timer-auto", "md-timer-off", "md-tonality", "md-transform", "md-tune", "md-wb-auto", "md-wb-cloudy", "md-wb-incandescent", "md-wb-irradescent", "md-wb-sunny", "md-beenhere", "md-directions", "md-directions-bike", "md-directions-bus", "md-directions-car", "md-directions-ferry", "md-directions-subway", "md-directions-train", "md-directions-transit", "md-directions-walk", "md-flight", "md-hotel", "md-layers", "md-layers-clear", "md-local-airport", "md-local-atm", "md-local-attraction", "md-local-bar", "md-local-cafe", "md-local-car-wash", "md-local-convenience-store", "md-local-drink", "md-local-florist", "md-local-gas-station", "md-local-grocery-store", "md-local-hospital", "md-local-hotel", "md-local-laundry-service", "md-local-library", "md-local-mall", "md-local-movies", "md-local-offer", "md-local-parking", "md-local-pharmacy", "md-local-phone", "md-local-pizza", "md-local-play", "md-local-post-office", "md-local-print-shop", "md-local-restaurant", "md-local-see", "md-local-shipping", "md-local-taxi", "md-location-history", "md-map", "md-my-location", "md-navigation", "md-pin-drop", "md-place", "md-rate-review", "md-restaurant-menu", "md-satellite", "md-store-mall-directory", "md-terrain", "md-traffic", "md-apps", "md-cancel", "md-arrow-drop-down-circle", "md-arrow-drop-down", "md-arrow-drop-up", "md-arrow-back", "md-arrow-forward", "md-check", "md-close", "md-chevron-left", "md-chevron-right", "md-expand-less", "md-expand-more", "md-fullscreen", "md-fullscreen-exit", "md-menu", "md-more-horiz", "md-more-vert", "md-refresh", "md-unfold-less", "md-unfold-more", "md-adb", "md-bluetooth-audio", "md-disc-full", "md-dnd-forwardslash", "md-do-not-disturb", "md-drive-eta", "md-event-available", "md-event-busy", "md-event-note", "md-folder-special", "md-mms", "md-more", "md-network-locked", "md-phone-bluetooth-speaker", "md-phone-forwarded", "md-phone-in-talk", "md-phone-locked", "md-phone-missed", "md-phone-paused", "md-play-download", "md-play-install", "md-sd-card", "md-sim-card-alert", "md-sms", "md-sms-failed", "md-sync", "md-sync-disabled", "md-sync-problem", "md-system-update", "md-tap-and-play", "md-time-to-leave", "md-vibration", "md-voice-chat", "md-vpn-lock", "md-cake", "md-domain", "md-location-city", "md-mood", "md-notifications-none", "md-notifications", "md-notifications-off", "md-notifications-on", "md-notifications-paused", "md-pages", "md-party-mode", "md-group", "md-group-add", "md-people", "md-people-outline", "md-person", "md-person-add", "md-person-outline", "md-plus-one", "md-poll", "md-public", "md-school", "md-share", "md-whatshot", "md-check-box", "md-check-box-outline-blank", "md-radio-button-off", "md-radio-button-on", "md-star", "md-star-half", "md-star-outline", "md-home", "md-warning", "md-play-circle-fill", "md-forum", "md-content-paste", "md-battery-80", "md-format-textdirection-l-to-r", "md-folder-open", "md-desktop-windows", "md-collections", "md-directions-bike", "md-apps", "md-phone-in-talk", "md-people", "md-star-half"],
            e = ["ad.svg", "button.svg", "converse.svg", "fire extinguisher.svg", "lamp.svg", "passport.svg", "skate.svg", "theatre.svg", "turntable.svg", "wacom.svg", "bill.svg", "buzzer.svg", "conveyor.svg", "helmet.svg", "luggage.svg", "presentation.svg", "smart watch.svg", "tie.svg", "umbrella.svg", "workspace.svg", "bowling.svg", "calculator.svg", "demoltion.svg", "icecream.svg", "microscope.svg", "server.svg", "switcher.svg", "tower.svg", "vespa.svg", "wrench.svg"],
            f = ["pink", "red", "purple", "indigo", "blue", "light-blue", "cyan", "teal", "green", "light-green", "lime", "yellow", "amber", "orange", "deep-orange"],
            g = ["lighten-2", "lighten-1", "darken-1", "darken-2"];
        return {
            createFirstname: function() {
                return c.first_name[a(0, c.first_name.length - 1)]
            },
            createLastname: function() {
                return c.last_name[a(0, c.last_name.length - 1)]
            },
            createIcon: function(b) {
                if (b = b || !1, !b) return '<i class="md ' + d[a(0, d.length - 1)] + '"></i>';
                var c = f[a(0, f.length - 1)],
                    e = g[a(0, g.length - 1)];
                return '<i class="md ' + d[a(0, d.length - 1)] + " " + c + " " + e + ' icon-color"></i>'
            },
            createImg: function() {
                return e[a(0, e.length - 1)]
            },
            createName: function() {
                return this.createFirstname() + " " + this.createLastname()
            },
            createSentence: function(c) {
                var d, e;
                return c = c || a(5, 20), d = a(0, b.length - c - 1), e = b.slice(d, d + c).join(" ").replace(/\,${dollar}/g, "") + ".", e = e.charAt(0).toUpperCase() + e.slice(1)
            },
            createSentences: function(b) {
                var c = [],
                    d = 0;
                for (b = b || a(3, 5), d = 0; b > d; d++) c.push(this.createSentence());
                return c.join(" ")
            },
            createParagraph: function(a, b) {
                var c = this.createSentences(a);
                return b ? "<p>" + c + "</p>" : c + "\n"
            },
            createParagraphs: function(b, c, d) {
                var e = [],
                    f = 0;
                for (b = b || a(3, 7), f = 0; b > f; f++) e.push(this.createParagraph(c, d));
                return e.join("\n")
            }
        }
    }).directive("placeholderText", ["PlaceholderTextService", function(a) {
        return {
            restrict: "A",
            link: function(b, c, d, e) {
                numParagraphs = d.sentences || 1, numSentences = d.paragraphs || 6, html = d.html || !0, c.html(a.createParagraphs(numParagraphs, numSentences, !0))
            }
        }
    }]).directive("placeholderTitle", ["PlaceholderTextService", function(a) {
        return {
            restrict: "A",
            link: function(b, c, d) {
                c.html(a.createSentence(5))
            }
        }
    }]).directive("placeholderName", ["PlaceholderTextService", function(a) {
        return {
            restrict: "A",
            link: function(b, c, d, e) {
                c.html(a.createName())
            }
        }
    }]).directive("placeholderP", ["PlaceholderTextService", function(a) {
        return {
            restrict: "A",
            link: function(b, c, d, e) {
                c.html(a.createParagraph(1, 3, !1))
            }
        }
    }]).directive("placeholderImg", ["PlaceholderTextService", function(a) {
        return {
            restrict: "A",
            link: function(b, c, d, e) {
                c.attr("src", "assets/img/icons/ballicons/" + a.createImg())
            }
        }
    }]).directive("placeholderIcon", ["PlaceholderTextService", function(a) {
        return {
            restrict: "A",
            link: function(b, c, d, e) {
                c.html(a.createIcon(!1))
            }
        }
    }]).directive("placeholderForm", ["PlaceholderTextService", function(a) {
        return {
            restrict: "C",
            link: function(b, c, d, e) {
                angular.forEach(c.find("input, textarea"), function(b) {
                    switch (elem = angular.element(b), b.type) {
                        case "textarea":
                            elem.text(a.createParagraphs(1, 4));
                            break;
                        case "text":
                            elem.attr("value", a.createSentence());
                            break;
                        case "password":
                            elem.attr("value", "nakama?");
                            break;
                        case "checkbox":
                            elem.attr("checked", "checked")
                    }
                    elem.val() && elem.parent().addClass("filled")
                })
            }
        }
    }]).directive("placeholderImage", function() {
        return {
            restrict: "A",
            scope: {
                dimensions: "@placeholderImage"
            },
            link: function(a, b, c) {
                function d() {
                    var b = [a.size.h, a.size.w].sort(),
                        c = Math.round(b[1] / 16);
                    return Math.max(g.text_size, c)
                }

                function e() {
                    f = f || document.createElement("canvas");
                    var b, c, e = f.getContext("2d");
                    return f.width = a.size.w, f.height = a.size.h, e.fillStyle = g.fill_color, e.fillRect(0, 0, a.size.w, a.size.h), b = d(), c = a.dimensions, e.fillStyle = g.text_color, e.textAlign = "center", e.textBaseline = "middle", e.font = "bold " + b + "pt sans-serif", e.measureText(c).width / a.size.w > 1 && (b = g.text_size / (e.measureText(c).width / a.size.w), e.font = "bold " + b + "pt sans-serif"), e.fillText(a.dimensions, a.size.w / 2, a.size.h / 2), f.toDataURL("image/png")
                }
                var f, g = {
                    text_size: 10,
                    fill_color: "#EEEEEE",
                    text_color: "#AAAAAA"
                };
                a.${dollar}watch("dimensions", function() {
                    if (angular.isDefined(a.dimensions)) {
                        var c, d = a.dimensions.match(/^(\d+)x(\d+)${dollar}/);
                        if (!d) return void console.error("Expected '000x000'. Got " + a.dimensions);
                        a.size = {
                            w: d[1],
                            h: d[2]
                        }, b.prop("title", a.dimensions), b.prop("alt", a.dimensions), c = e(), "IMG" === b.prop("tagName") ? b.prop("src", c) : b.css("background-image", 'url("' + c + '")')
                    }
                })
            }
        }
    }),
    function(a) {
        var b = {
            init: function(b) {
                var c = {
                    menuWidth: 250,
                    edge: "left",
                    closeOnClick: !1
                };
                b = a.extend(c, b), a(this).each(function() {
                    function c(c) {
                        f = !1, g = !1, a("body").removeClass("overflow-no"), a("#sidenav-overlay").velocity({
                            opacity: 0
                        }, {
                            duration: 200,
                            queue: !1,
                            easing: "easeOutQuad",
                            complete: function() {
                                a(this).remove()
                            }
                        }), "left" === b.edge ? (a(".drag-target").css({
                            width: "",
                            right: "",
                            left: "0"
                        }), e.velocity({
                            left: -1 * (b.menuWidth + 10)
                        }, {
                            duration: 200,
                            queue: !1,
                            easing: "easeOutCubic",
                            complete: function() {
                                c === !0 && (e.removeAttr("style"), e.css("width", b.menuWidth))
                            }
                        })) : (a(".drag-target").css({
                            width: "",
                            right: "0",
                            left: ""
                        }), e.velocity({
                            right: -1 * (b.menuWidth + 10)
                        }, {
                            duration: 200,
                            queue: !1,
                            easing: "easeOutCubic",
                            complete: function() {
                                c === !0 && (e.removeAttr("style"), e.css("width", b.menuWidth))
                            }
                        }))
                    }
                    var d = a(this),
                        e = a(d.attr("data-activates"));
                    250 != b.menuWidth && e.css("width", b.menuWidth), a("body").append(a('<div class="drag-target"></div>')), "left" == b.edge ? (e.css("left", -1 * (b.menuWidth + 10)), a(".drag-target").css({
                        left: 0
                    })) : (e.addClass("right-aligned").css("right", -1 * (b.menuWidth + 10)).css("left", ""), a(".drag-target").css({
                        right: 0
                    })), e.hasClass("fixed") && a(window).width() > 992 && e.css("left", 0), window.innerWidth > 992 && (g = !0), e.hasClass("fixed") && a(window).resize(function() {
                        window.innerWidth > 992 ? 0 !== a("#sidenav-overlay").css("opacity") && g ? c(!0) : (e.removeAttr("style"), e.css("width", b.menuWidth)) : g === !1 && ("left" === b.edge ? e.css("left", -1 * (b.menuWidth + 10)) : e.css("right", -1 * (b.menuWidth + 10)))
                    }), b.closeOnClick === !0 && e.on("click.itemclick", "a:not(.collapsible-header)", function() {
                        g === !0 && c()
                    });
                    var f = !1,
                        g = !1;
                    a(".drag-target").on("click", function() {
                        c()
                    }), a(".drag-target").hammer({
                        prevent_default: !1
                    }).bind("pan", function(d) {
                        if ("touch" == d.gesture.pointerType) {
                            var f = (d.gesture.direction, d.gesture.center.x);
                            d.gesture.center.y, d.gesture.velocityX;
                            if (0 === a("#sidenav-overlay").length) {
                                var h = a('<div id="sidenav-overlay"></div>');
                                h.css("opacity", 0).click(function() {
                                    c()
                                }), a("body").append(h)
                            }
                            if ("left" === b.edge && (f > b.menuWidth ? f = b.menuWidth : 0 > f && (f = 0)), "left" === b.edge) f < b.menuWidth / 2 ? g = !1 : f >= b.menuWidth / 2 && (g = !0), e.css("left", f - b.menuWidth);
                            else {
                                f < a(window).width() - b.menuWidth / 2 ? g = !0 : f >= a(window).width() - b.menuWidth / 2 && (g = !1);
                                var i = -1 * (f - b.menuWidth / 2);
                                i > 0 && (i = 0), e.css("right", i)
                            }
                            "left" === b.edge ? (overlayPerc = f / b.menuWidth, a("#sidenav-overlay").velocity({
                                opacity: overlayPerc
                            }, {
                                duration: 50,
                                queue: !1,
                                easing: "easeOutQuad"
                            })) : (overlayPerc = Math.abs((f - a(window).width()) / b.menuWidth), a("#sidenav-overlay").velocity({
                                opacity: overlayPerc
                            }, {
                                duration: 50,
                                queue: !1,
                                easing: "easeOutQuad"
                            }))
                        }
                    }).bind("panend", function(c) {
                        if ("touch" == c.gesture.pointerType) {
                            var d = c.gesture.velocityX;
                            f = !1, "left" === b.edge ? g && .3 >= d || -.5 > d ? (e.velocity({
                                left: 0
                            }, {
                                duration: 300,
                                queue: !1,
                                easing: "easeOutQuad"
                            }), a("#sidenav-overlay").velocity({
                                opacity: 1
                            }, {
                                duration: 50,
                                queue: !1,
                                easing: "easeOutQuad"
                            }), a(".drag-target").css({
                                width: "50%",
                                right: 0,
                                left: ""
                            })) : (!g || d > .3) && (e.velocity({
                                left: -1 * (b.menuWidth + 10)
                            }, {
                                duration: 200,
                                queue: !1,
                                easing: "easeOutQuad"
                            }), a("#sidenav-overlay").velocity({
                                opacity: 0
                            }, {
                                duration: 200,
                                queue: !1,
                                easing: "easeOutQuad",
                                complete: function() {
                                    a(this).remove()
                                }
                            }), a(".drag-target").css({
                                width: "10px",
                                right: "",
                                left: 0
                            })) : g && d >= -.3 || d > .5 ? (e.velocity({
                                right: 0
                            }, {
                                duration: 300,
                                queue: !1,
                                easing: "easeOutQuad"
                            }), a("#sidenav-overlay").velocity({
                                opacity: 1
                            }, {
                                duration: 50,
                                queue: !1,
                                easing: "easeOutQuad"
                            }), a(".drag-target").css({
                                width: "50%",
                                right: "",
                                left: 0
                            })) : (!g || -.3 > d) && (e.velocity({
                                right: -1 * (b.menuWidth + 10)
                            }, {
                                duration: 200,
                                queue: !1,
                                easing: "easeOutQuad"
                            }), a("#sidenav-overlay").velocity({
                                opacity: 0
                            }, {
                                duration: 200,
                                queue: !1,
                                easing: "easeOutQuad",
                                complete: function() {
                                    a(this).remove()
                                }
                            }), a(".drag-target").css({
                                width: "10px",
                                right: 0,
                                left: ""
                            })), a("body").addClass("overflow-no")
                        }
                    }), d.click(function() {
                        if (g === !0) g = !1, f = !1, c();
                        else {
                            a("body").addClass("overflow-no"), "left" === b.edge ? (a(".drag-target").css({
                                width: "50%",
                                right: 0,
                                left: ""
                            }), e.velocity({
                                left: 0
                            }, {
                                duration: 300,
                                queue: !1,
                                easing: "easeOutQuad"
                            })) : (a(".drag-target").css({
                                width: "50%",
                                right: "",
                                left: 0
                            }), e.velocity({
                                right: 0
                            }, {
                                duration: 300,
                                queue: !1,
                                easing: "easeOutQuad"
                            }), e.css("left", ""));
                            var d = a('<div id="sidenav-overlay"></div>');
                            d.css("opacity", 0).click(function() {
                                g = !1, f = !1, c(), d.velocity({
                                    opacity: 0
                                }, {
                                    duration: 300,
                                    queue: !1,
                                    easing: "easeOutQuad",
                                    complete: function() {
                                        a(this).remove()
                                    }
                                })
                            }), a("body").append(d), d.velocity({
                                opacity: 1
                            }, {
                                duration: 300,
                                queue: !1,
                                easing: "easeOutQuad",
                                complete: function() {
                                    g = !0, f = !1
                                }
                            })
                        }
                        return !1
                    })
                })
            },
            show: function() {
                this.trigger("click")
            },
            hide: function() {
                a("#sidenav-overlay").trigger("click")
            }
        };
        a.fn.sideNav = function(c) {
            return b[c] ? b[c].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof c && c ? void a.error("Method " + c + " does not exist on jQuery.tooltip") : b.init.apply(this, arguments)
        }
    }(jQuery),
    function(a, b, c, d) {
        "use strict";

        function e(b, c) {
            g = this, this.element = a(b), this.options = a.extend({}, h, c), this._defaults = h, this._name = f, this.init()
        }
        var f = "ripples",
            g = null,
            h = {};
        e.prototype.init = function() {
            var c = this.element;
            c.on("mousedown touchstart", function(d) {
                if (!g.isTouch() || "mousedown" !== d.type) {
                    c.find(".ripple-wrapper").length || c.append('<div class="ripple-wrapper"></div>');
                    var e = c.children(".ripple-wrapper"),
                        f = g.getRelY(e, d),
                        h = g.getRelX(e, d);
                    if (f || h) {
                        var i = g.getRipplesColor(c),
                            j = a("<div></div>");
                        j.addClass("ripple").css({
                                left: h,
                                top: f,
                                "background-color": i
                            }), e.append(j),
                            function() {
                                return b.getComputedStyle(j[0]).opacity
                            }(), g.rippleOn(c, j), setTimeout(function() {
                                g.rippleEnd(j)
                            }, 500), c.on("mouseup mouseleave touchend", function() {
                                j.data("mousedown", "off"), "off" === j.data("animating") && g.rippleOut(j)
                            })
                    }
                }
            })
        }, e.prototype.getNewSize = function(a, b) {
            return Math.max(a.outerWidth(), a.outerHeight()) / b.outerWidth() * 2.5
        }, e.prototype.getRelX = function(a, b) {
            var c = a.offset();
            return g.isTouch() ? (b = b.originalEvent, 1 !== b.touches.length ? b.touches[0].pageX - c.left : !1) : b.pageX - c.left
        }, e.prototype.getRelY = function(a, b) {
            var c = a.offset();
            return g.isTouch() ? (b = b.originalEvent, 1 !== b.touches.length ? b.touches[0].pageY - c.top : !1) : b.pageY - c.top
        }, e.prototype.getRipplesColor = function(a) {
            var c = a.data("ripple-color") ? a.data("ripple-color") : b.getComputedStyle(a[0]).color;
            return c
        }, e.prototype.hasTransitionSupport = function() {
            var a = c.body || c.documentElement,
                b = a.style,
                e = b.transition !== d || b.WebkitTransition !== d || b.MozTransition !== d || b.MsTransition !== d || b.OTransition !== d;
            return e
        }, e.prototype.isTouch = function() {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
        }, e.prototype.rippleEnd = function(a) {
            a.data("animating", "off"), "off" === a.data("mousedown") && g.rippleOut(a)
        }, e.prototype.rippleOut = function(a) {
            a.off(), g.hasTransitionSupport() ? a.addClass("ripple-out") : a.animate({
                opacity: 0
            }, 100, function() {
                a.trigger("transitionend")
            }), a.on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
                a.remove()
            })
        }, e.prototype.rippleOn = function(a, b) {
            var c = g.getNewSize(a, b);
            g.hasTransitionSupport() ? b.css({
                "-ms-transform": "scale(" + c + ")",
                "-moz-transform": "scale(" + c + ")",
                "-webkit-transform": "scale(" + c + ")",
                transform: "scale(" + c + ")"
            }).addClass("ripple-on").data("animating", "on").data("mousedown", "on") : b.animate({
                width: 2 * Math.max(a.outerWidth(), a.outerHeight()),
                height: 2 * Math.max(a.outerWidth(), a.outerHeight()),
                "margin-left": -1 * Math.max(a.outerWidth(), a.outerHeight()),
                "margin-top": -1 * Math.max(a.outerWidth(), a.outerHeight()),
                opacity: .2
            }, 500, function() {
                b.trigger("transitionend")
            })
        }, a.fn.ripples = function(b) {
            return this.each(function() {
                a.data(this, "plugin_" + f) || a.data(this, "plugin_" + f, new e(this, b))
            })
        }
    }(jQuery, window, document);
var fsm = angular.module("fsm", []);
fsm.directive("fsmStickyHeader", function() {
        return {
            restrict: "EA",
            replace: !1,
            scope: {
                scrollBody: "=",
                scrollStop: "=",
                scrollableContainer: "="
            },
            link: function(a, b, c, d) {
                function e() {
                    j = i, i = j.clone(), j.after(i), j.addClass("fsm-sticky-header"), j.css({
                        position: "fixed",
                        "z-index": 1029,
                        visibility: "hidden"
                    }), f()
                }

                function f() {
                    j.css({
                        top: a.scrollStop,
                        width: i.outerWidth(),
                        left: i.offset().left
                    }), g()
                }

                function g() {
                    if (j.is("tr")) {
                        var a = j.find("th");
                        i.find("th").each(function(b, c) {
                            var d = ${dollar}(a[b]);
                            d.css("width", c.offsetWidth + "px")
                        })
                    }
                }

                function h() {
                    var b = l.scrollTop() + a.scrollStop,
                        c = k.offset().top,
                        d = c + k.outerHeight(!1);
                    if (b > c && d > b)
                        if (j || (e(), j.css({
                                visibility: "visible"
                            })), d > b && b > d - j.outerHeight(!1)) {
                            var g = d - b + a.scrollStop - j.outerHeight(!1);
                            j.css("top", g + "px")
                        } else f();
                    else j && (i.remove(), i = j, j = null, i.removeClass("fsm-sticky-header"), i.css({
                        position: "relative",
                        left: 0,
                        top: 0,
                        width: "auto",
                        "z-index": 0,
                        visibility: "visible"
                    }))
                }
                var i = ${dollar}(b, this),
                    j = null,
                    k = ${dollar}(a.scrollBody),
                    l = ${dollar}(a.scrollableContainer);
                0 == l.length && (l = ${dollar}(window)), l.scroll(h).trigger("scroll"), l.resize(h)
            }
        }
    }), fsm.directive("fsmMenuButton", function() {
        return {
            restrict: "EA",
            replace: !1,
            scope: {},
            link: function(a, b, c, d) {
                function e() {
                    ${dollar}("body").toggleClass("fsm-menu-toggle"), f(), setTimeout(f, 50)
                }

                function f() {
                    g.find(".fsm-menu-button-open").toggleClass("fsm-spin-forward"), g.find(".fsm-menu-button-closed").toggleClass("fsm-spin-backward")
                }
                var g = ${dollar}(b, this);
                g.addClass("fsm-menu-button"), g.click(e)
            }
        }
    }), fsm.directive("fsmBigData", ["${dollar}filter", function(a) {
        return {
            restrict: "AE",
            scope: !0,
            replace: !1,
            transclude: !0,
            link: function(b, c, d, e, f) {
                var g = a("orderBy"),
                    h = 0,
                    i = d.fsmBigData.split(" of ")[0],
                    j = d.fsmBigData.split(" of ")[1],
                    k = parseInt(j.split(" take ")[1]),
                    l = j.split(" take ")[0],
                    m = [],
                    n = [],
                    o = [],
                    p = ${dollar}(window),
                    q = ["None", "Ascending", "Descending"],
                    r = [];
                b.sortTypes = q, f(b, function(a, d) {
                    function e() {
                        var a = n.slice(k * h, k * (h + 1));
                        a.length > 0 && (o.push.apply(o, a), h++)
                    }

                    function f(a, b) {
                        for (var c = 0; c < r.length; c++) r[c].indexOf(a) > -1 && r.splice(c, 1);
                        if (b > 0) {
                            var d = "";
                            "Descending" === q[b] && (d = "-"), r.unshift(d + a)
                        }
                        j()
                    }

                    function j() {
                        n = r.length ? g(m, r) : m, o.length = 0, h = 0, e()
                    }

                    function s() {
                        var a = ${dollar}(window).scrollTop(),
                            b = ${dollar}(document).height(),
                            c = ${dollar}(window).height();
                        scrollPercent = a / (b - c), scrollPercent > .98 && d.${dollar}apply(e)
                    }
                    c.append(a), d[i] = o, p.scroll(s).trigger("scroll"), b.${dollar}parent.${dollar}watchCollection(l, function(a) {
                        a && (m = a, j())
                    }), b.addSortColumn = f
                })
            }
        }
    }]), fsm.directive("fsmSort", function() {
        var a = '<i class="md md-sort"></i>';
        return {
            restrict: "A",
            replace: !1,
            scope: {},
            link: function(b, c, d) {
                function e() {
                    h.removeClass("md-arrow-drop-down md-arrow-drop-up md-sort ");
                    var a = "md-sort";
                    "Ascending" === b.${dollar}parent.sortTypes[i] ? a = "md-arrow-drop-down" : "Descending" === b.${dollar}parent.sortTypes[i] && (a = "md-arrow-drop-up"), h.addClass(a)
                }
                var f = c,
                    g = d.fsmSort,
                    h = angular.element(a);
                f.append("&nbsp;"), f.append(h);
                var i = 0;
                f.css({
                    cursor: "pointer"
                }), f.bind("click", function() {
                    i++, i == b.${dollar}parent.sortTypes.length && (i = 0), b.${dollar}apply(b.${dollar}parent.addSortColumn(g, i)), e()
                })
            }
        }
    }),
    function() {
        "use strict";
        var a = angular.module("smoothScroll", []),
            b = function(a, b) {
                b = b || {};
                var c = b.duration || 800,
                    d = b.offset || 0,
                    e = b.easing || "easeInOutQuart",
                    f = b.callbackBefore || function() {},
                    g = b.callbackAfter || function() {},
                    h = function() {
                        return window.pageYOffset ? window.pageYOffset : document.documentElement.scrollTop
                    };
                setTimeout(function() {
                    var b, i, j = h(),
                        k = 0,
                        l = function(a, b) {
                            return "easeInQuad" == a ? b * b : "easeOutQuad" == a ? b * (2 - b) : "easeInOutQuad" == a ? .5 > b ? 2 * b * b : -1 + (4 - 2 * b) * b : "easeInCubic" == a ? b * b * b : "easeOutCubic" == a ? --b * b * b + 1 : "easeInOutCubic" == a ? .5 > b ? 4 * b * b * b : (b - 1) * (2 * b - 2) * (2 * b - 2) + 1 : "easeInQuart" == a ? b * b * b * b : "easeOutQuart" == a ? 1 - --b * b * b * b : "easeInOutQuart" == a ? .5 > b ? 8 * b * b * b * b : 1 - 8 * --b * b * b * b : "easeInQuint" == a ? b * b * b * b * b : "easeOutQuint" == a ? 1 + --b * b * b * b * b : "easeInOutQuint" == a ? .5 > b ? 16 * b * b * b * b * b : 1 + 16 * --b * b * b * b * b : b
                        },
                        m = function(a) {
                            var b = 0;
                            if (a.offsetParent)
                                do b += a.offsetTop, a = a.offsetParent; while (a);
                            return b = Math.max(b - d, 0)
                        },
                        n = m(a),
                        o = n - j,
                        p = function() {
                            var b = h();
                            (i == n || b == n || window.innerHeight + b >= document.body.scrollHeight) && (clearInterval(r), g(a))
                        },
                        q = function() {
                            k += 16, b = k / c, b = b > 1 ? 1 : b, i = j + o * l(e, b), window.scrollTo(0, i), p()
                        };
                    f(a);
                    var r = setInterval(q, 16)
                }, 0)
            };
        a.factory("smoothScroll", function() {
            return b
        }), a.directive("smoothScroll", ["smoothScroll", function(a) {
            return {
                restrict: "A",
                scope: {
                    callbackBefore: "&",
                    callbackAfter: "&"
                },
                link: function(b, c, d) {
                    ("undefined" == typeof d.scrollIf || "true" === d.scrollIf) && setTimeout(function() {
                        var e = function(a) {
                                if (d.callbackBefore) {
                                    var c = b.callbackBefore({
                                        element: a
                                    });
                                    "function" == typeof c && c(a)
                                }
                            },
                            f = function(a) {
                                if (d.callbackAfter) {
                                    var c = b.callbackAfter({
                                        element: a
                                    });
                                    "function" == typeof c && c(a)
                                }
                            };
                        a(c[0], {
                            duration: d.duration,
                            offset: d.offset,
                            easing: d.easing,
                            callbackBefore: e,
                            callbackAfter: f
                        })
                    }, 0)
                }
            }
        }]), a.directive("scrollTo", ["smoothScroll", function(a) {
            return {
                restrict: "A",
                link: function(b, c, d) {
                    var e;
                    c.on("click", function(c) {
                        if (c.preventDefault(), e = document.getElementById(d.scrollTo)) {
                            var f = function(a) {
                                    if (d.callbackBefore) {
                                        var c = b.callbackBefore({
                                            element: a
                                        });
                                        "function" == typeof c && c(a)
                                    }
                                },
                                g = function(a) {
                                    if (d.callbackAfter) {
                                        var c = b.callbackAfter({
                                            element: a
                                        });
                                        "function" == typeof c && c(a)
                                    }
                                };
                            return a(e, {
                                duration: d.duration,
                                offset: d.offset,
                                easing: d.easing,
                                callbackBefore: f,
                                callbackAfter: g
                            }), !1
                        }
                    })
                }
            }
        }])
    }();
var theme_colors = {
        "brand-primary": "blue",
        "brand-success": "green",
        "brand-info": "purple",
        "brand-warning": "orange",
        "brand-danger": "red",
        theme: "pink",
        "theme-secondary": "blue"
    },
    global_colors = {
        red: {
            "lighten-5": "#FFEBEE",
            "lighten-4": "#FFCDD2",
            "lighten-3": "#EF9A9A",
            "lighten-2": "#E57373",
            "lighten-1": "#EF5350",
            base: "#F44336",
            "darken-1": "#E53935",
            "darken-2": "#D32F2F",
            "darken-3": "#C62828",
            "darken-4": "#B71C1C",
            "accent-1": "#FF8A80",
            "accent-2": "#FF5252",
            "accent-3": "#FF1744",
            "accent-4": "#D50000"
        },
        pink: {
            "lighten-5": "#fce4ec",
            "lighten-4": "#f8bbd0",
            "lighten-3": "#f48fb1",
            "lighten-2": "#f06292",
            "lighten-1": "#ec407a",
            base: "#e91e63",
            "darken-1": "#d81b60",
            "darken-2": "#c2185b",
            "darken-3": "#ad1457",
            "darken-4": "#880e4f",
            "accent-1": "#ff80ab",
            "accent-2": "#ff4081",
            "accent-3": "#f50057",
            "accent-4": "#c51162"
        },
        purple: {
            "lighten-5": "#f3e5f5",
            "lighten-4": "#e1bee7",
            "lighten-3": "#ce93d8",
            "lighten-2": "#ba68c8",
            "lighten-1": "#ab47bc",
            base: "#9c27b0",
            "darken-1": "#8e24aa",
            "darken-2": "#7b1fa2",
            "darken-3": "#6a1b9a",
            "darken-4": "#4a148c",
            "accent-1": "#ea80fc",
            "accent-2": "#e040fb",
            "accent-3": "#d500f9",
            "accent-4": "#aa00ff"
        },
        "deep-purple": {
            "lighten-5": "#ede7f6",
            "lighten-4": "#d1c4e9",
            "lighten-3": "#b39ddb",
            "lighten-2": "#9575cd",
            "lighten-1": "#7e57c2",
            base: "#673ab7",
            "darken-1": "#5e35b1",
            "darken-2": "#512da8",
            "darken-3": "#4527a0",
            "darken-4": "#311b92",
            "accent-1": "#b388ff",
            "accent-2": "#7c4dff",
            "accent-3": "#651fff",
            "accent-4": "#6200ea"
        },
        indigo: {
            "lighten-5": "#e8eaf6",
            "lighten-4": "#c5cae9",
            "lighten-3": "#9fa8da",
            "lighten-2": "#7986cb",
            "lighten-1": "#5c6bc0",
            base: "#3f51b5",
            "darken-1": "#3949ab",
            "darken-2": "#303f9f",
            "darken-3": "#283593",
            "darken-4": "#1a237e",
            "accent-1": "#8c9eff",
            "accent-2": "#536dfe",
            "accent-3": "#3d5afe",
            "accent-4": "#304ffe"
        },
        blue: {
            "lighten-5": "#E3F2FD",
            "lighten-4": "#BBDEFB",
            "lighten-3": "#90CAF9",
            "lighten-2": "#64B5F6",
            "lighten-1": "#42A5F5",
            base: "#2196F3",
            "darken-1": "#1E88E5",
            "darken-2": "#1976D2",
            "darken-3": "#1565C0",
            "darken-4": "#0D47A1",
            "accent-1": "#82B1FF",
            "accent-2": "#448AFF",
            "accent-3": "#2979FF",
            "accent-4": "#2962FF"
        },
        "light-blue": {
            "lighten-5": "#e1f5fe",
            "lighten-4": "#b3e5fc",
            "lighten-3": "#81d4fa",
            "lighten-2": "#4fc3f7",
            "lighten-1": "#29b6f6",
            base: "#03a9f4",
            "darken-1": "#039be5",
            "darken-2": "#0288d1",
            "darken-3": "#0277bd",
            "darken-4": "#01579b",
            "accent-1": "#80d8ff",
            "accent-2": "#40c4ff",
            "accent-3": "#00b0ff",
            "accent-4": "#0091ea"
        },
        cyan: {
            "lighten-5": "#e0f7fa",
            "lighten-4": "#b2ebf2",
            "lighten-3": "#80deea",
            "lighten-2": "#4dd0e1",
            "lighten-1": "#26c6da",
            base: "#00bcd4",
            "darken-1": "#00acc1",
            "darken-2": "#0097a7",
            "darken-3": "#00838f",
            "darken-4": "#006064",
            "accent-1": "#84ffff",
            "accent-2": "#18ffff",
            "accent-3": "#00e5ff",
            "accent-4": "#00b8d4"
        },
        teal: {
            "lighten-5": "#e0f2f1",
            "lighten-4": "#b2dfdb",
            "lighten-3": "#80cbc4",
            "lighten-2": "#4db6ac",
            "lighten-1": "#26a69a",
            base: "#009688",
            "darken-1": "#00897b",
            "darken-2": "#00796b",
            "darken-3": "#00695c",
            "darken-4": "#004d40",
            "accent-1": "#a7ffeb",
            "accent-2": "#64ffda",
            "accent-3": "#1de9b6",
            "accent-4": "#00bfa5"
        },
        green: {
            "lighten-5": "#E8F5E9",
            "lighten-4": "#C8E6C9",
            "lighten-3": "#A5D6A7",
            "lighten-2": "#81C784",
            "lighten-1": "#66BB6A",
            base: "#4CAF50",
            "darken-1": "#43A047",
            "darken-2": "#388E3C",
            "darken-3": "#2E7D32",
            "darken-4": "#1B5E20",
            "accent-1": "#B9F6CA",
            "accent-2": "#69F0AE",
            "accent-3": "#00E676",
            "accent-4": "#00C853"
        },
        "light-green": {
            "lighten-5": "#f1f8e9",
            "lighten-4": "#dcedc8",
            "lighten-3": "#c5e1a5",
            "lighten-2": "#aed581",
            "lighten-1": "#9ccc65",
            base: "#8bc34a",
            "darken-1": "#7cb342",
            "darken-2": "#689f38",
            "darken-3": "#558b2f",
            "darken-4": "#33691e",
            "accent-1": "#ccff90",
            "accent-2": "#b2ff59",
            "accent-3": "#76ff03",
            "accent-4": "#64dd17"
        },
        lime: {
            "lighten-5": "#f9fbe7",
            "lighten-4": "#f0f4c3",
            "lighten-3": "#e6ee9c",
            "lighten-2": "#dce775",
            "lighten-1": "#d4e157",
            base: "#cddc39",
            "darken-1": "#c0ca33",
            "darken-2": "#afb42b",
            "darken-3": "#9e9d24",
            "darken-4": "#827717",
            "accent-1": "#f4ff81",
            "accent-2": "#eeff41",
            "accent-3": "#c6ff00",
            "accent-4": "#aeea00"
        },
        yellow: {
            "lighten-5": "#fffde7",
            "lighten-4": "#fff9c4",
            "lighten-3": "#fff59d",
            "lighten-2": "#fff176",
            "lighten-1": "#ffee58",
            base: "#ffeb3b",
            "darken-1": "#fdd835",
            "darken-2": "#fbc02d",
            "darken-3": "#f9a825",
            "darken-4": "#f57f17",
            "accent-1": "#ffff8d",
            "accent-2": "#ffff00",
            "accent-3": "#ffea00",
            "accent-4": "#ffd600"
        },
        amber: {
            "lighten-5": "#fff8e1",
            "lighten-4": "#ffecb3",
            "lighten-3": "#ffe082",
            "lighten-2": "#ffd54f",
            "lighten-1": "#ffca28",
            base: "#ffc107",
            "darken-1": "#ffb300",
            "darken-2": "#ffa000",
            "darken-3": "#ff8f00",
            "darken-4": "#ff6f00",
            "accent-1": "#ffe57f",
            "accent-2": "#ffd740",
            "accent-3": "#ffc400",
            "accent-4": "#ffab00"
        },
        orange: {
            "lighten-5": "#fff3e0",
            "lighten-4": "#ffe0b2",
            "lighten-3": "#ffcc80",
            "lighten-2": "#ffb74d",
            "lighten-1": "#ffa726",
            base: "#ff9800",
            "darken-1": "#fb8c00",
            "darken-2": "#f57c00",
            "darken-3": "#ef6c00",
            "darken-4": "#e65100",
            "accent-1": "#ffd180",
            "accent-2": "#ffab40",
            "accent-3": "#ff9100",
            "accent-4": "#ff6d00"
        },
        "deep-orange": {
            "lighten-5": "#fbe9e7",
            "lighten-4": "#ffccbc",
            "lighten-3": "#ffab91",
            "lighten-2": "#ff8a65",
            "lighten-1": "#ff7043",
            base: "#ff5722",
            "darken-1": "#f4511e",
            "darken-2": "#e64a19",
            "darken-3": "#d84315",
            "darken-4": "#bf360c",
            "accent-1": "#ff9e80",
            "accent-2": "#ff6e40",
            "accent-3": "#ff3d00",
            "accent-4": "#dd2c00"
        },
        brown: {
            "lighten-5": "#efebe9",
            "lighten-4": "#d7ccc8",
            "lighten-3": "#bcaaa4",
            "lighten-2": "#a1887f",
            "lighten-1": "#8d6e63",
            base: "#795548",
            "darken-1": "#6d4c41",
            "darken-2": "#5d4037",
            "darken-3": "#4e342e",
            "darken-4": "#3e2723"
        },
        "blue-grey": {
            "lighten-5": "#eceff1",
            "lighten-4": "#cfd8dc",
            "lighten-3": "#b0bec5",
            "lighten-2": "#90a4ae",
            "lighten-1": "#78909c",
            base: "#607d8b",
            "darken-1": "#546e7a",
            "darken-2": "#455a64",
            "darken-3": "#37474f",
            "darken-4": "#263238"
        },
        grey: {
            "lighten-5": "#fafafa",
            "lighten-4": "#f5f5f5",
            "lighten-3": "#eeeeee",
            "lighten-2": "#e0e0e0",
            "lighten-1": "#bdbdbd",
            base: "#9e9e9e",
            "darken-1": "#757575",
            "darken-2": "#616161",
            "darken-3": "#424242",
            "darken-4": "#212121"
        },
        shades: {
            black: "#000000",
            white: "#FFFFFF"
        }
    },
    app = angular.module("materialism", ["app.constants", "ngRoute", "ngAnimate", "ngSanitize", "ngPlaceholders", 
    									 "ngTable", "angular-loading-bar", "angulartics", 
                                         "angulartics.google.analytics", "uiGmapgoogle-maps", 
                                         "ui.select", "gridshore.c3js.chart", "monospaced.elastic", 
                                         "mgcrea.ngStrap", "jcs-autoValidate", "ngFileUpload", 
                                         "textAngular", "fsm", "smoothScroll", "LocalStorageModule", 
                                         "ngResource"/* pour les appels des services REST */
                                         ]);
angular.module("app.constants", []).constant("APP", {
    version: "1.1.1"
}), app.config(["${dollar}routeProvider", function(a) {
    a.when("/", {
        templateUrl: "assets/tpl/dashboard.html"
    }).when("/:folder/:tpl", {
        templateUrl: function(a) {
            return "assets/tpl/" + a.folder + "/" + a.tpl + ".html"
        }
    }).when("/:tpl", {
        templateUrl: function(a) {
            return "assets/tpl/" + a.tpl + ".html"
        }
    }).otherwise({
        redirectTo: "/"
    })
}]).config(["uiGmapGoogleMapApiProvider", function(a) {
    a.configure({
        v: "3.17",
        libraries: "weather,geometry,visualization"
    })
}]).config(["cfpLoadingBarProvider", function(a) {
    a.includeSpinner = !1, a.latencyThreshold = 300
}]).config(["${dollar}datepickerProvider", function(a) {
    angular.extend(a.defaults, {
        dateFormat: "dd/MM/yyyy",
        iconLeft: "md md-chevron-left",
        iconRight: "md md-chevron-right",
        autoclose: !0
    })
}]).config(["${dollar}timepickerProvider", function(a) {
    angular.extend(a.defaults, {
        timeFormat: "HH:mm",
        iconUp: "md md-expand-less",
        iconDown: "md md-expand-more",
        hourStep: 1,
        minuteStep: 1,
        arrowBehavior: "picker",
        modelTimeFormat: "HH:mm"
    })
}]).config(["${dollar}animateProvider", function(a) {
    a.classNameFilter(/^(?:(?!ng-animate-disabled).)*${dollar}/)
}]).run(["${dollar}rootScope", "APP", function(a, b) {
    a.APP = b
}]), app.filter("nospace", function() {
    return function(a) {
        return a ? a.replace(/ /g, "") : ""
    }
}), app.run(["${dollar}rootScope", "${dollar}analytics", function(a, b) {
    a.${dollar}on("theme:change", function(a, c) {
        b.eventTrack(c, {
            category: "Themepicker"
        })
    })
}]), app.directive("formControl", function() {
    return {
        restrict: "C",
        link: function(a, b, c) {
            b.val() && b.parent().addClass("filled"), b.bind("blur", function(a) {
                input = angular.element(a.currentTarget), input.val() ? input.parent().addClass("filled") : input.parent().removeClass("filled"), input.parent().removeClass("active")
            }).bind("focus", function(a) {
                input = angular.element(a.currentTarget), input.parent().addClass("active")
            })
        }
    }
}), app.directive("navbarScroll", function(a) {
    return {
        restrict: "A",
        link: function(b, c, d) {
            var e = angular.element(".main-container .navbar");
            angular.element(a).bind("scroll", function() {
                this.pageYOffset > 0 ? e.addClass("scroll") : e.removeClass("scroll")
            })
        }
    }
}), app.directive("navbarSearch", ["${dollar}timeout", function(a) {
    return {
        restrict: "A",
        templateUrl: "assets/tpl/directives/navbar-search.html",
        link: function(a, b, c) {
            a.showNavbarSearch = !1, a.toggleSearch = function() {
                a.showNavbarSearch = !a.showNavbarSearch
            }, a.submitNavbarSearch = function() {
                a.showNavbarSearch = !1
            }
        }
    }
}]), app.directive("navbarToggle", function() {
    return {
        restrict: "C",
        link: function(a, b, c) {
            b.sideNav({
                menuWidth: 260,
                closeOnClick: !0
            })
        }
    }
}), app.directive("nouiSlider", function() {
    return {
        restrict: "A",
        link: function(a, b, c) {
            var d = angular.element(c.bind),
                e = angular.element(c.bindRange),
                f = angular.element(c.indicator);
            d.length && (start = d.val()), start = c.start ? c.start : 0, range = c.range ? c.range : 0, range ? (startPoint = [start, range], b.addClass("noUi-range")) : startPoint = [start], step = c.step ? parseInt(c.step) : 0, min = c.min ? parseInt(c.min) : 0, max = c.max ? parseInt(c.max) : 10, ${dollar}(b).noUiSlider({
                start: startPoint,
                step: step,
                range: {
                    min: [min],
                    max: [max]
                }
            }), "true" === f.selector && ${dollar}(b).on("slide set change", function(a, b) {
                ${dollar}(this).find(".noUi-handle div").length || ${dollar}(this).find(".noUi-handle").append("<div>" + b + "</div>"), ${dollar}(this).find(".noUi-handle div").html(b)
            }), ${dollar}(b).on("slide", function(a, b) {
                e.length ? (v = parseInt(b[0]), v2 = parseInt(b[1])) : v = parseInt(b), d.length && (void 0 !== d[0].value ? d.val(v) : d.html(v)), e.length && (void 0 !== e[0].value ? e.val(v2) : e.html(v2))
            })
        }
    }
}), app.directive("todoWidget", ["todoService", function(a) {
    return {
        restrict: "EA",
        templateUrl: "assets/tpl/directives/todo-widget.html",
        replace: !0,
        link: function(b, c) {
            b.todoService = new a(b)
        }
    }
}]), app.directive("menuLink", function() {
    return {
        restrict: "A",
        transclude: !0,
        replace: !0,
        scope: {
            href: "@",
            icon: "@",
            name: "@"
        },
        templateUrl: "assets/tpl/directives/menu-link.html",
        controller: ["${dollar}element", "${dollar}location", "${dollar}rootScope", function(a, b, c) {
            this.getName = function(b) {
                return void 0 !== b ? b : a.find("a").text().trim()
            }, this.setBreadcrumb = function(a) {
                c.pageTitle = this.getName(a)
            }, this.isSelected = function(a) {
                return b.path() == a.slice(1, a.length)
            }
        }],
        link: function(a, b, c, d) {
            icon = c.icon, icon && b.children().first().prepend('<i class="' + icon + '"></i>&nbsp;'), d.isSelected(c.href) && d.setBreadcrumb(c.name), b.click(function() {
                d.setBreadcrumb(c.name)
            }), b.find("a").ripples(), a.isSelected = function() {
                return d.isSelected(c.href)
            }
        }
    }
}), app.directive("menuToggle", ["${dollar}location", function(a) {
    return {
        restrict: "A",
        transclude: !0,
        replace: !0,
        scope: {
            name: "@",
            icon: "@"
        },
        templateUrl: "assets/tpl/directives/menu-toggle.html",
        link: function(b, c, d) {
            icon = d.icon, icon && c.children().first().prepend('<i class="' + icon + '"></i>&nbsp;'), c.children().first().on("click", function(a) {
                a.preventDefault(), link = angular.element(a.currentTarget), link.hasClass("active") ? link.removeClass("active") : link.addClass("active")
            }), c.find("a").ripples(), b.isOpen = function() {
                return folder = "/" + a.path().split("/")[1], folder == d.path
            }
        }
    }
}]), app.directive("vectormap", ["colorService", function(a) {
    return {
        restrict: "E",
        markers: "=markers",
        link: function(b, c, d) {
            var e = null,
                f = b.markers;
            b.${dollar}watch("datamap", function(d, g) {
                e ? (e.vectorMap("get", "mapObject").series.regions[0].setValues(b.datamap), e.vectorMap("get", "mapObject").series.regions[0].setNormalizeFunction("polynomial"), e.vectorMap("get", "mapObject").series.regions[0].setScale([a.theme("darken-2"), a.theme("lighten-2")])) : (${dollar}(c).width("auto"), ${dollar}(c).height("100%"), options = {
                    backgroundColor: "transparent",
                    series: {
                        regions: [{
                            values: b.datamap,
                            scale: [a.theme("darken-2"), a.theme("lighten-2")],
                            attribute: "fill"
                        }]
                    },
                    regionStyle: {
                        initial: {
                            fill: a.theme()
                        }
                    },
                    markerStyle: {
                        initial: {
                            stroke: a.theme_secondary("lighten-1"),
                            fill: a.theme_secondary("darken-1")
                        },
                        hover: {
                            stroke: a.theme_secondary("lighten-3")
                        }
                    }
                }, null !== f && (options.markers = f), e = ${dollar}(c).vectorMap(options))
            })
        }
    }
}]), app.directive("autofocus", ["${dollar}timeout", function(a) {
    return {
        restrict: "A",
        link: function(b, c) {
            a(function() {
                c[0].focus()
            })
        }
    }
}]), app.directive("cardFlip", function() {
    return {
        restrict: "C",
        link: function(a, b, c) {
            b.find(".btn-flip, .card-image").on("click", function() {
                b.find(".card-reveal").toggleClass("active")
            })
        }
    }
}), app.directive("scrollSpy", ["${dollar}window", function(a) {
    return {
        link: function(b, c, d) {
            angular.element(a).bind("scroll", function() {
                b.scroll = this.pageYOffset, b.${dollar}${dollar}phase || b.${dollar}apply()
            })
        }
    }
}]), app.directive("initRipples", function() {
    return {
        restrict: "A",
        link: function(a, b, c) {
            var d = [".btn:not(.withoutripple)", ".card-image", ".navbar a:not(.withoutripple)", ".dropdown-menu a", ".nav-tabs a:not(.withoutripple)", ".withripple"].join(",");
            ${dollar}(b).find(d).ripples()
        }
    }
}), app.factory("colorService", function() {
    function a(a) {
        return i(h("brand-primary"), a)
    }

    function b(a) {
        return i(h("brand-success"), a)
    }

    function c(a) {
        return i(h("brand-info"), a)
    }

    function d(a) {
        return i(h("brand-warning"), a)
    }

    function e(a) {
        return i(h("brand-danger"), a)
    }

    function f(a) {
        return a = a ? a : "base", i(h("theme"), a)
    }

    function g(a) {
        return a = a ? a : "base", i(h("theme-secondary"))
    }

    function h(a) {
        return void 0 !== theme_colors[a] ? theme_colors[a] : global_colors[a]
    }

    function i(a, b) {
        return b = b ? b : "base", global_colors[a][b]
    }
    return {
        brand_primary: a,
        brand_success: b,
        brand_info: c,
        brand_warning: d,
        brand_danger: e,
        theme: f,
        theme_secondary: g,
        get_color: i
    }
}), app.factory("todoService", ["localStorageService", "${dollar}rootScope", "${dollar}filter", function(a, b, d) {
    function e(c) {
        this.${dollar}scope = c, this.todoFilter = {}, this.activeFilter = 0, this.input = angular.element("#todo-title"), this.filters = [{
            title: "All",
            method: "all"
        }, {
            title: "Active",
            method: "active"
        }, {
            title: "Completed",
            method: "completed"
        }], this.newTodo = {
            title: "",
            done: !1,
            editing: !1
        }, this.restore(), a.get("todos") || (todos = [], todos[0] = {
            title: "Grow my mailing list",
            done: !0
        }, todos[1] = {
            title: "Create a killer SAAS business",
            done: !1
        }, todos[2] = {
            title: "Write autoresponder sequence",
            done: !1
        }, a.set("todos", todos)), a.bind(this.${dollar}scope, "todos"), this.completedTodos = function() {
            return d("filter")(this.${dollar}scope.todos, {
                done: !1
            })
        }, this.addTodo = function() {
            "" !== this.todo.title && void 0 !== this.todo.title && (this.${dollar}scope.todos.push(this.todo), b.${dollar}broadcast("todos:count", this.count()), this.restore())
        }, this.updateTodo = function() {
            this.restore()
        }
    }
    return e.prototype.saveTodo = function(a) {
        this.todo.editing ? this.updateTodo() : this.addTodo()
    }, e.prototype.editTodo = function(a) {
        this.todo = a, this.todo.editing = !0, this.input.focus()
    }, e.prototype.toggleDone = function(a) {
        b.${dollar}broadcast("todos:count", this.count())
    }, e.prototype.clearCompleted = function() {
        this.${dollar}scope.todos = this.completedTodos(), this.restore()
    }, e.prototype.count = function() {
        return c = this.completedTodos(), c.length
    }, e.prototype.restore = function(a) {
        a = "undefined" != typeof a ? a : !0, this.todo = angular.copy(this.newTodo), this.input.val(""), a === !0 && this.input.focus()
    }, e.prototype.filter = function(a) {
        "active" === a ? (this.activeFilter = 1, this.todoFilter = {
            done: !1
        }) : "completed" === a ? (this.activeFilter = 2, this.todoFilter = {
            done: !0
        }) : (this.activeFilter = 0, this.todoFilter = {})
    }, e
}]), app.controller("MainController", ["${dollar}scope", "${dollar}animate", "localStorageService", "todoService", "${dollar}alert", "${dollar}timeout", "${dollar}rootScope", function(a, b, c, d, e, f, g) {
    a.theme_colors = ["pink", "red", "purple", "indigo", "blue", "light-blue", "cyan", "teal", "green", "light-green", "lime", "yellow", "amber", "orange", "deep-orange"], service = new d(a), a.todosCount = service.count(), a.${dollar}on("todos:count", function(c, d) {
        a.todosCount = d, element = angular.element("#todosCount"), element.hasClass("animated") || b.addClass(element, "animated bounce", function() {
            b.removeClass(element, "animated bounce")
        })
    }), a.fillinContent = function() {
        a.htmlContent = "content content"
    }, a.changeColorTheme = function(b) {
        g.${dollar}broadcast("theme:change", "Choose template"), a.theme.color = b
    }, a.changeTemplateTheme = function(b) {
        g.${dollar}broadcast("theme:change", "Choose color"), a.theme.template = b
    }, c.get("theme") || (theme = {
        color: "theme-pink",
        template: "theme-template-dark"
    }, c.set("theme", theme)), c.bind(a, "theme");
    var h = e({
        title: "Welcome to Materialism",
        content: "Stay a while and listen",
        placement: "top-right",
        type: "theme",
        container: ".alert-container-top-right",
        show: !1,
        template: "assets/tpl/partials/alert-introduction.html",
        animation: "mat-grow-top-right"
    });
    c.get("alert-introduction") || f(function() {
        a.showIntroduction(), c.set("alert-introduction", 1)
    }, 2500), a.showIntroduction = function() {
        /*h.show()*/
    };
    var i = e({
        title: "Hi there!",
        content: 'You like what you see and interested in using our theme? You can find it at <a href="http://themeforest.net/item/materialism-angular-bootstrap-admin-template/11322821" target="_blank"><img style="height:20px;" src="assets/img/icons/themeforest-icon.png" /> Themeforest</a>.',
        placement: "top-right",
        type: "theme",
        container: ".alert-container-top-right",
        show: !1,
        animation: "mat-grow-top-right"
    });
    ("" === document.referrer || 0 !== document.referrer.indexOf("themeforest.net")) && f(function() {
        //i.show()
    }, 1750)
}]), app.controller("DashboardController", ["${dollar}window", "${dollar}scope", "${dollar}rootScope", "${dollar}interval", "colorService", function(a, b, c, d, e) {
    c.pageTitle = "Dashboard", pattern = [], pattern.push(e.theme()), b.color_pattern = pattern.join(), random_load_value = function(a, b) {
        return Math.floor(Math.random() * (b - a + 1)) + a
    };
    var f = [];
    for (i = 0; i < 30; ++i) f.push(random_load_value(40, 80));
    randomData = function(a, b, c) {
        for (data = [], i = 0; i < a; ++i) data.length ? (factor = 3, minOrganic = data[data.length - 1] - factor, maxOrganic = data[data.length - 1] + factor, data.push(random_load_value(minOrganic < b ? b : minOrganic, maxOrganic > c ? c : maxOrganic))) : data.push(random_load_value(b, c));
        return data
    }, b.randomDate = function() {
        return start = new Date(2012, 0, 1), end = new Date, date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())), dateString = date.toLocaleString(), dateString
    }, b.chartData1 = randomData(20, 40, 60), b.chartData2 = randomData(20, 40, 60), b.chartData3 = randomData(20, 40, 60), b.chartData4 = randomData(100, 10, 30), b.serverLoad = f[f.length - 1] + "%", server_load_options = {
        bindto: "#server-load-chart",
        legend: {
            show: !1
        },
        padding: {
            top: 6,
            right: -1,
            bottom: -8,
            left: 0
        },
        data: {
            columns: [
                ["Server load"].concat(f)
            ],
            type: "area"
        },
        size: {
            height: 160
        },
        axis: {
            x: {
                show: !1,
                padding: {
                    left: 0,
                    right: 0
                }
            },
            y: {
                show: !1,
                max: 100,
                min: 0,
                padding: {
                    top: 0,
                    bottom: 0
                }
            }
        },
        grid: {
            focus: {
                show: !1
            }
        },
        point: {
            show: !1
        },
        tooltip: {
            format: {
                title: function(a) {
                    return void 0
                },
                value: function(a, b, c) {
                    return a + "%"
                }
            }
        },
        transition: {
            duration: 50
        },
        color: {
            pattern: pattern.reverse()
        }
    };
    var g, h = c3.generate(server_load_options);
    createInterval = function() {
        return g ? void 0 : d(function() {
            v = random_load_value(40, 80), b.serverLoad = v + "%", h.flow({
                columns: [
                    ["Server load", v]
                ]
            })
        }, 2500)
    }, cleanInterval = function() {
        angular.isDefined(g) && (d.cancel(g), g = !1)
    }, g = createInterval();
    var j, k = angular.element(a);
    k.on("blur", function(a) {
        "blur" !== j && cleanInterval(), j = "blur"
    }), k.on("focus", function(a) {
        "focus" !== j && (g = createInterval()), j = "focus"
    }), b.${dollar}on("${dollar}destroy", function() {
        cleanInterval()
    }), b.tabs = ["Log", "Timeline", "Messages"]
}]), app.controller("ChartsController", ["${dollar}scope", "${dollar}interval", "colorService", function(a, b, c) {
    pattern = [], pattern.push(c.brand_success()), pattern.push(c.brand_primary()), pattern.push(c.brand_info()), pattern.push(c.brand_warning()), pattern.push(c.brand_danger()), a.color_pattern = pattern.join(), guage_options = {
        data: {
            columns: [
                ["data", 50]
            ],
            type: "gauge"
        },
        transition: {
            duration: 500
        },
        color: {
            pattern: pattern.reverse(),
            threshold: {
                values: [20, 50, 70, 100, 110]
            }
        }
    };
    var d = jQuery.extend({}, guage_options),
        e = jQuery.extend({}, guage_options),
        f = jQuery.extend({}, guage_options);
    d.bindto = "#load-chart", e.bindto = "#cpu-chart", f.bindto = "#mem-chart";
    var g = c3.generate(d),
        h = c3.generate(e),
        i = c3.generate(f);
    interval = b(function() {
        g.load({
            columns: [
                ["data", Math.floor(100 * Math.random() + 1)]
            ]
        }), h.load({
            columns: [
                ["data", Math.floor(100 * Math.random() + 1)]
            ]
        }), i.load({
            columns: [
                ["data", Math.floor(100 * Math.random() + 1)]
            ]
        })
    }, 2e3), a.${dollar}on("${dollar}destroy", function() {
        angular.isDefined(interval) && (b.cancel(interval), interval = void 0)
    })
}]), app.controller("ColorsController", ["${dollar}scope", function(a) {
    angular.forEach(angular.element(".dynamic-color .col-md-4 div"), function(a) {
        var b = angular.element(a),
            c = b.attr("class"),
            d = c.split(" ");
        void 0 === d[1] && (d[1] = "base"), b.html(d[0]), b.append('<div class="pull-right">' + d[1] + "</div>"), "darken-4" == d[1] && b.after("<br/>")
    })
}]), app.controller("ButtonsController", ["${dollar}scope", function(a) {
    a.colorPalette = ["pink", "red", "purple", "indigo", "blue", "light-blue", "cyan", "teal", "green", "light-green", "lime", "yellow", "amber", "orange", "deep-orange"], a.colorsVariants = ["lighten-5", "lighten-4", "lighten-3", "lighten-2", "lighten-1", "base", "darken-1", "darken-2", "darken-3", "darken-4", "accent-1", "accent-2", "accent-3", "accent-4"], a.buttons = ["btn-default", "btn-primary", "btn-success", "btn-info", "btn-warning", "btn-danger"], a.buttonTypes = ["", "btn-flat", "btn-round", "btn-round btn-flat", "btn-border"], a.buttonSizes = ["btn-lg", "btn", "btn-sm", "btn-xs"]
}]), app.controller("ListsController", ["${dollar}scope", "${dollar}routeParams", "${dollar}http", function(a, b, c) {
    ${dollar}("#range").on("slide set", function(a, b) {
        ${dollar}(this).find(".noUi-handle div").length || ${dollar}(this).find(".noUi-handle").append("<div>" + b + "</div>"), ${dollar}(this).find(".noUi-handle div").html(b)
    })
}]), app.controller("FormsController", ["${dollar}scope", "bootstrap3ElementModifier", function(a, b) {
    b.enableValidationStateIcons(!1), a.person = {}, a.people = [{
        name: "Adam",
        email: "adam@email.com",
        age: 12,
        country: "United States"
    }, {
        name: "Amalie",
        email: "amalie@email.com",
        age: 12,
        country: "Argentina"
    }, {
        name: "Estefanía",
        email: "estefania@email.com",
        age: 21,
        country: "Argentina"
    }, {
        name: "Adrian",
        email: "adrian@email.com",
        age: 21,
        country: "Ecuador"
    }, {
        name: "Wladimir",
        email: "wladimir@email.com",
        age: 30,
        country: "Ecuador"
    }, {
        name: "Samantha",
        email: "samantha@email.com",
        age: 30,
        country: "United States"
    }, {
        name: "Nicole",
        email: "nicole@email.com",
        age: 43,
        country: "Colombia"
    }, {
        name: "Natasha",
        email: "natasha@email.com",
        age: 54,
        country: "Ecuador"
    }, {
        name: "Michael",
        email: "michael@email.com",
        age: 15,
        country: "Colombia"
    }, {
        name: "Nicolás",
        email: "nicolas@email.com",
        age: 43,
        country: "Colombia"
    }], a.availableColors = ["Red", "Green", "Blue", "Yellow", "Magenta", "Maroon", "Umbra", "Turquoise"], a.selectedState = "", a.states = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Dakota", "North Carolina", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"], a.sharedDate = "01/01/2016", a.sharedTime = "1970-01-01T09:30:40.000Z"
}]), app.controller("UploadController", ["${dollar}scope", "Upload", "${dollar}timeout", function(a, b, c) {
    a.fileReaderSupported = void 0 !== window.FileReader && (void 0 === window.FileAPI || FileAPI.html5 !== !1), a.${dollar}watch("files", function() {
        a.upload(a.files)
    }), progressHandler = function(a) {
        var b = parseInt(100 * a.loaded / a.total);
        console.log("progress: " + b + "% " + a.config.file.name)
    }, successHandler = function(a, b, c, d) {
        console.log("file " + d.file.name + "uploaded. Response: " + JSON.stringify(a))
    }, thumbHandler = function(a) {
        generateThumb(a)
    }, generateThumb = function(b) {
        void 0 !== b && a.fileReaderSupported && b.type.indexOf("image") > -1 && c(function() {
            var a = new FileReader;
            a.readAsDataURL(b), a.onload = function(a) {
                c(function() {
                    b.dataUrl = a.target.result
                })
            }
        })
    }, a.upload = function(a) {
        if (a && a.length)
            for (var c = 0; c < a.length; c++) {
                var d = a[c];
                b.upload({
                    url: "#",
                    file: d
                }).progress(progressHandler).success(successHandler)
            }
    }, a.${dollar}watch("files", function(b) {
        if (a.formUpload = !1, void 0 !== b && null !== b)
            for (var c = 0; c < b.length; c++) a.errorMsg = void 0, thumbHandler(b[c])
    })
}]), app.controller("TablesBasicController", ["${dollar}scope", "PlaceholderTextService", function(a, b) {
    a.settings = {
        singular: "Item",
        plural: "Items",
        cmd: "Add"
    };
    for (var c = [], d = 1; 10 >= d; d++) c.push({
        icon: b.createIcon(!0),
        firstname: b.createFirstname(),
        lastname: b.createLastname(),
        name: b.createName(),
        paragraph: b.createSentence()
    });
    a.data = c, a.checkAll = function() {
        angular.forEach(a.data, function(a) {
            a.selected = !a.selected
        })
    }
}]), app.controller("TablesDataController", ["${dollar}scope", "PlaceholderTextService", "ngTableParams", "${dollar}filter", function(a, b, c, d) {
    for (var e = [], f = 1; 50 >= f; f++) e.push({
        icon: b.createIcon(),
        firstname: b.createFirstname(),
        lastname: b.createLastname(),
        paragraph: b.createSentence()
    });
    a.data = e, a.tableParams = new c({
        page: 1,
        count: 10,
        sorting: {
            firstname: "asc"
        }
    }, {
        filterDelay: 50,
        total: e.length,
        getData: function(a, b) {
            var c = b.filter().search,
                f = [];
            c ? (c = c.toLowerCase(), f = e.filter(function(a) {
                return a.firstname.toLowerCase().indexOf(c) > -1 || a.lastname.toLowerCase().indexOf(c) > -1
            })) : f = e, f = b.sorting() ? d("orderBy")(f, b.orderBy()) : f, a.resolve(f.slice((b.page() - 1) * b.count(), b.page() * b.count()))
        }
    })
}])/*, app.controller("BookController", ["${dollar}scope", "${dollar}window", "${dollar}aside", "PlaceholderTextService", "${dollar}log", "BookRestService", function(a, b, c, d, log, bookRestService) {
    a.settings = {
        singular: "Item",
        plural: "Items",
        cmd: "Add"
    };
    
    bookRestService.query('', function(result) {
				log.info("receiving info from server side");
                a.data = result;
            });
    //a.data = e;
    var g = c({
        scope: a,
        template: "assets/tpl/apps/crud-book.html",
        show: !1,
        placement: "left",
        backdrop: !1,
        animation: "am-slide-left"
    });
	
    a.checkAll = function() {
        angular.forEach(a.data, function(a) {
            a.selected = !a.selected
        })
    }, a.editItem = function(b) {
        b && (b.editing = !0, a.item = b, a.settings.cmd = "Edit", showForm())
    }, a.viewItem = function(b) {
        b && (b.editing = !1, a.item = b, a.settings.cmd = "View", showForm())
    }, a.createItem = function() {
        var b = {
            icon: d.createIcon(!0),
            editing: !0
        };
        a.item = b, a.settings.cmd = "New", showForm()
    }, a.saveItem = function() {
    	
    	log.info("sauvegarde en cours");
    	
    	bookRestService.save(a.item);
    	
        "New" == a.settings.cmd && a.data.push(a.item), hideForm()
    }, a.remove = function(b) {
        confirm("Are you sure?") && (b ? a.data.splice(a.data.indexOf(b), 1) : (a.data = a.data.filter(function(a) {
            return !a.selected
        }), a.selectAll = !1)); bookRestService.delete(1);
    }, showForm = function() {
        angular.element(".tooltip").remove(), g.show()
    }, hideForm = function() {
        g.hide()
    }, a.${dollar}on("${dollar}destroy", function() {
        hideForm()
    })
}]), app.controller("SearchController", ["${dollar}scope", "${dollar}window", "${dollar}aside", "PlaceholderTextService", "${dollar}log", "BookRestService", function(a, b, c, d, log, bookRestService) {
    a.settings = {
        singular: "Item",
        plural: "Items",
        cmd: "Search"
    };
	for (var e = [], f = 1; 90 >= f; f++) e.push({
        icon: d.createIcon(!0),
        firstname: d.createFirstname(),
        lastname: d.createLastname(),
        paragraph: d.createSentence()
    });
	bookRestService.query('', function(result) {
				log.info("receiving info from server side");
                a.data = result;
            });
    //a.data = e;
    var gg = c({
        scope: a,
        template: "assets/tpl/apps/crud-book-search.html",
        show: !1,
        placement: "left",
        backdrop: !1,
        animation: "am-slide-left"
    });
	
    a.searchItem = function() {
		log.info("searchItem: ");
		var b = {
            icon: d.createIcon(!0),
            editing: !0
        };
        a.item = b, a.settings.cmd = "Search", gg.show()
    }, startSearch= function() {
		log.info("startSearch: ");
		gg.hide()
	}, showForm = function() {
        angular.element(".tooltip").remove(), gg.show()
    }, hideForm = function() {
        gg.hide()
    }, a.${dollar}on("${dollar}destroy", function() {
        hideForm()
    })
}]).factory('BookRestService', function (${dollar}resource) {
    return ${dollar}resource('api/books/', {}, {
        'query': { method: 'GET', isArray: true},
        'get': {
            method: 'GET',
            transformResponse: function (data) {
                data = angular.fromJson(data);
                return data;
            }
        },
        'update': { method:'PUT' },
        'delete': { method:'DELETE' }
    });
}).config(['${dollar}resourceProvider', function(${dollar}resourceProvider) {
  // Don't strip trailing slashes from calculated URLs
  ${dollar}resourceProvider.defaults.stripTrailingSlashes = false;
}])*/;