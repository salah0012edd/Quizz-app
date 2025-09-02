// Quiz Questions Database (100 questions)
// Question database (100 questions)
// Question database focused on Moroccan General Culture and Art & Architecture
const questions = [
    // CULTURE ET SOCIETES - POLITIQUE
    {
        question: "Quel jour commémore le Maroc la Déclaration d'Indépendance ?",
        answers: [
            { text: "11 janvier", correct: true },
            { text: "18 novembre", correct: false },
            { text: "30 juillet", correct: false },
            { text: "6 novembre", correct: false }
        ]
    },
    {
        question: "En quelle année a été proclamée la Déclaration d'Indépendance du Maroc ?",
        answers: [
            { text: "1943", correct: false },
            { text: "1944", correct: true },
            { text: "1945", correct: false },
            { text: "1956", correct: false }
        ]
    },
    {
        question: "Quelle est la capitale politique du Maroc ?",
        answers: [
            { text: "Casablanca", correct: false },
            { text: "Rabat", correct: true },
            { text: "Marrakech", correct: false },
            { text: "Fès", correct: false }
        ]
    },
    {
        question: "Quel jour célèbre-t-on la Fête du Trône au Maroc ?",
        answers: [
            { text: "30 juillet", correct: true },
            { text: "18 novembre", correct: false },
            { text: "11 janvier", correct: false },
            { text: "21 août", correct: false }
        ]
    },
    {
        question: "Quelle fête nationale marocaine commémore la Révolution du Roi et du Peuple ?",
        answers: [
            { text: "18 novembre", correct: false },
            { text: "20 août", correct: true },
            { text: "30 juillet", correct: false },
            { text: "6 novembre", correct: false }
        ]
    },
    {
        question: "En quelle année le Maroc a-t-il obtenu son indépendance complète ?",
        answers: [
            { text: "1955", correct: false },
            { text: "1956", correct: true },
            { text: "1957", correct: false },
            { text: "1958", correct: false }
        ]
    },
    {
        question: "Quel jour célèbre-t-on la Fête de l'Indépendance au Maroc ?",
        answers: [
            { text: "18 novembre", correct: true },
            { text: "11 janvier", correct: false },
            { text: "30 juillet", correct: false },
            { text: "20 août", correct: false }
        ]
    },
    {
        question: "Quelle est la forme de gouvernement du Maroc ?",
        answers: [
            { text: "République", correct: false },
            { text: "Monarchie constitutionnelle", correct: true },
            { text: "Monarchie absolue", correct: false },
            { text: "Émirat", correct: false }
        ]
    },

    // CULTURE ET SOCIETES - ECONOMIE
    {
        question: "Quelle ville marocaine est considérée comme le centre économique du pays ?",
        answers: [
            { text: "Rabat", correct: false },
            { text: "Casablanca", correct: true },
            { text: "Tanger", correct: false },
            { text: "Marrakech", correct: false }
        ]
    },
    {
        question: "Quel port marocain est l'un des plus importants de l'Afrique ?",
        answers: [
            { text: "Port de Rabat", correct: false },
            { text: "Port de Casablanca", correct: true },
            { text: "Port d'Agadir", correct: false },
            { text: "Port de Tanger", correct: false }
        ]
    },
    {
        question: "Quelle industrie est particulièrement développée dans la région de Safi ?",
        answers: [
            { text: "Textile", correct: false },
            { text: "Phosphates", correct: true },
            { text: "Agriculture", correct: false },
            { text: "Tourisme", correct: false }
        ]
    },
    {
        question: "Le Maroc est le premier producteur mondial de quelle ressource minérale ?",
        answers: [
            { text: "Or", correct: false },
            { text: "Phosphates", correct: true },
            { text: "Argent", correct: false },
            { text: "Cuivre", correct: false }
        ]
    },
    {
        question: "Quelle ville marocaine abrite un important complexe automobile ?",
        answers: [
            { text: "Meknès", correct: false },
            { text: "Tanger", correct: true },
            { text: "Oujda", correct: false },
            { text: "Tétouan", correct: false }
        ]
    },
    {
        question: "Quel secteur contribue le plus au PIB marocain ?",
        answers: [
            { text: "Agriculture", correct: false },
            { text: "Services", correct: true },
            { text: "Industrie", correct: false },
            { text: "Mines", correct: false }
        ]
    },
    {
        question: "Quelle est la monnaie officielle du Maroc ?",
        answers: [
            { text: "Dinar", correct: false },
            { text: "Dirham", correct: true },
            { text: "Franc", correct: false },
            { text: "Rial", correct: false }
        ]
    },

    // CULTURE ET SOCIETES - SPORT
    {
        question: "En quelle année le Maroc organisera-t-il la Coupe d'Afrique des Nations (CAN) ?",
        answers: [
            { text: "2024", correct: false },
            { text: "2025", correct: true },
            { text: "2026", correct: false },
            { text: "2027", correct: false }
        ]
    },
    {
        question: "Quel joueur marocain est capitaine de l'équipe nationale de football ?",
        answers: [
            { text: "Hakim Ziyech", correct: false },
            { text: "Romain Saïss", correct: true },
            { text: "Achraf Hakimi", correct: false },
            { text: "Youssef En-Nesyri", correct: false }
        ]
    },
    {
        question: "Jusqu'où l'équipe nationale marocaine est-elle arrivée lors de la Coupe du Monde 2022 ?",
        answers: [
            { text: "Quarts de finale", correct: false },
            { text: "Demi-finales", correct: true },
            { text: "Finale", correct: false },
            { text: "Huitièmes de finale", correct: false }
        ]
    },
    {
        question: "Quel sport traditionnel marocain se pratique à cheval ?",
        answers: [
            { text: "Fantasia", correct: true },
            { text: "Diffa", correct: false },
            { text: "Ahidous", correct: false },
            { text: "Chaabi", correct: false }
        ]
    },
    {
        question: "Dans quelle ville se déroule annuellement le Marathon International de Marrakech ?",
        answers: [
            { text: "Casablanca", correct: false },
            { text: "Marrakech", correct: true },
            { text: "Rabat", correct: false },
            { text: "Fès", correct: false }
        ]
    },
    {
        question: "Quel sport nautique est populaire sur les côtes marocaines ?",
        answers: [
            { text: "Plongée", correct: false },
            { text: "Surf", correct: true },
            { text: "Voile", correct: false },
            { text: "Jet-ski", correct: false }
        ]
    },

    // CULTURE ET SOCIETES - AUTRES EVENEMENTS
    {
        question: "Quel festival international se déroule à Marrakech chaque année ?",
        answers: [
            { text: "Festival de Cannes", correct: false },
            { text: "Festival International du Film", correct: true },
            { text: "Festival de Berlin", correct: false },
            { text: "Festival de Venise", correct: false }
        ]
    },
    {
        question: "En 2025, quel festival se déroulera à Casablanca du 3 au 12 juillet ?",
        answers: [
            { text: "Mawazine", correct: false },
            { text: "Jazzablanca", correct: true },
            { text: "Festival de Fès", correct: false },
            { text: "Timitar", correct: false }
        ]
    },
    {
        question: "Quels artistes internationaux sont annoncés pour Jazzablanca 2025 ?",
        answers: [
            { text: "Coldplay et U2", correct: false },
            { text: "Black Eyed Peas et Seal", correct: true },
            { text: "Rolling Stones et Queen", correct: false },
            { text: "Beyoncé et Jay-Z", correct: false }
        ]
    },
    {
        question: "Quel festival de musique sacrée a lieu chaque année à Fès ?",
        answers: [
            { text: "Festival des Musiques du Monde", correct: false },
            { text: "Festival de Musique Sacrée du Monde", correct: true },
            { text: "Festival International de Jazz", correct: false },
            { text: "Festival de Musique Classique", correct: false }
        ]
    },
    {
        question: "En quel mois se déroule traditionnellement le Festival de Fès ?",
        answers: [
            { text: "Avril", correct: false },
            { text: "Mai", correct: true },
            { text: "Juin", correct: false },
            { text: "Juillet", correct: false }
        ]
    },
    {
        question: "Quel festival célèbre les arts populaires à Marrakech ?",
        answers: [
            { text: "Festival International du Film", correct: false },
            { text: "Festival des Arts Populaires", correct: true },
            { text: "Festival de Danse", correct: false },
            { text: "Festival de Théâtre", correct: false }
        ]
    },
    {
        question: "Où se déroule le Festival International des Nomades ?",
        answers: [
            { text: "Zagora", correct: false },
            { text: "M'Hamid El Ghizlane", correct: true },
            { text: "Ouarzazate", correct: false },
            { text: "Erfoud", correct: false }
        ]
    },
    {
        question: "Quel événement technologique majeur se déroule à Marrakech en 2025 ?",
        answers: [
            { text: "Web Summit", correct: false },
            { text: "GITEX Africa", correct: true },
            { text: "CES", correct: false },
            { text: "Mobile World Congress", correct: false }
        ]
    },

    // ART ET ARCHITECTURE - HISTOIRE D'ARCHITECTURE
    {
        question: "Quelle tour emblématique de Rabat mesure 44 mètres de hauteur ?",
        answers: [
            { text: "Tour Hassan", correct: true },
            { text: "Tour de Casablanca", correct: false },
            { text: "Tour de Marrakech", correct: false },
            { text: "Tour de Fès", correct: false }
        ]
    },
    {
        question: "Qui a commandé la construction de la Tour Hassan ?",
        answers: [
            { text: "Sultan Moulay Ismail", correct: false },
            { text: "Abu Yusuf Yaqub al-Mansur", correct: true },
            { text: "Sultan Hassan Ier", correct: false },
            { text: "Sultan Mohammed V", correct: false }
        ]
    },
    {
        question: "À quelle époque a été construite la Tour Hassan ?",
        answers: [
            { text: "XIe siècle", correct: false },
            { text: "XIIe siècle", correct: true },
            { text: "XIIIe siècle", correct: false },
            { text: "XIVe siècle", correct: false }
        ]
    },
    {
        question: "La Tour Hassan appartient à quelle dynastie architecturale ?",
        answers: [
            { text: "Almoravide", correct: false },
            { text: "Almohade", correct: true },
            { text: "Mérinide", correct: false },
            { text: "Saadienne", correct: false }
        ]
    },
    {
        question: "Quelle mosquée de Casablanca est l'une des plus grandes au monde ?",
        answers: [
            { text: "Mosquée Moulay Youssef", correct: false },
            { text: "Mosquée Hassan II", correct: true },
            { text: "Mosquée Mohammed V", correct: false },
            { text: "Mosquée Al-Mohammadi", correct: false }
        ]
    },
    {
        question: "En quelle année a été inaugurée la Mosquée Hassan II ?",
        answers: [
            { text: "1989", correct: false },
            { text: "1993", correct: true },
            { text: "1995", correct: false },
            { text: "1999", correct: false }
        ]
    },
    {
        question: "Quelle ville abrite la plus ancienne université du monde encore en activité ?",
        answers: [
            { text: "Rabat", correct: false },
            { text: "Fès", correct: true },
            { text: "Meknès", correct: false },
            { text: "Marrakech", correct: false }
        ]
    },
    {
        question: "Comment s'appelle cette université millénaire de Fès ?",
        answers: [
            { text: "Al-Azhar", correct: false },
            { text: "Al-Qarawiyyin", correct: true },
            { text: "Al-Andalus", correct: false },
            { text: "Al-Maghrib", correct: false }
        ]
    },
    {
        question: "En quelle année a été fondée l'université Al-Qarawiyyin ?",
        answers: [
            { text: "857", correct: false },
            { text: "859", correct: true },
            { text: "861", correct: false },
            { text: "863", correct: false }
        ]
    },

    // ART ET ARCHITECTURE - LES ARCHITECTES
    {
        question: "Qui a conçu la Mosquée Hassan II de Casablanca ?",
        answers: [
            { text: "Hassan Fathy", correct: false },
            { text: "Michel Pinseau", correct: true },
            { text: "André Paccard", correct: false },
            { text: "Henri Prost", correct: false }
        ]
    },
    {
        question: "Quel architecte français a participé à l'urbanisme de Casablanca sous le Protectorat ?",
        answers: [
            { text: "Le Corbusier", correct: false },
            { text: "Henri Prost", correct: true },
            { text: "Tony Garnier", correct: false },
            { text: "Auguste Perret", correct: false }
        ]
    },
    {
        question: "Qui est considéré comme le pionnier de l'architecture moderne marocaine ?",
        answers: [
            { text: "Michel Écochard", correct: true },
            { text: "Henri Prost", correct: false },
            { text: "Jean-Claude Forestier", correct: false },
            { text: "Albert Laprade", correct: false }
        ]
    },
    {
        question: "Quel architecte marocain contemporain est reconnu internationalement ?",
        answers: [
            { text: "Farid Belkahia", correct: false },
            { text: "André Paccard", correct: true },
            { text: "Elie Azagury", correct: false },
            { text: "Taoufiq Izeddiou", correct: false }
        ]
    },

    // ART ET ARCHITECTURE - LES MONUMENTS HISTORIQUES
    {
        question: "Quel monument de Marrakech est surnommé 'la Giralda de Marrakech' ?",
        answers: [
            { text: "Minaret de la Koutoubia", correct: true },
            { text: "Tour de la Bahia", correct: false },
            { text: "Minaret de la Mosquée Ben Youssef", correct: false },
            { text: "Tour Saadienne", correct: false }
        ]
    },
    {
        question: "À quelle époque ont été construites les Tombeaux Saadiens de Marrakech ?",
        answers: [
            { text: "XVe siècle", correct: false },
            { text: "XVIe siècle", correct: true },
            { text: "XVIIe siècle", correct: false },
            { text: "XVIIIe siècle", correct: false }
        ]
    },
    {
        question: "Quel palais de Marrakech est célèbre pour ses jardins et bassins ?",
        answers: [
            { text: "Palais El Badii", correct: false },
            { text: "Palais de la Bahia", correct: true },
            { text: "Palais Royal", correct: false },
            { text: "Palais Dar Si Said", correct: false }
        ]
    },
    {
        question: "Dans quelle ville se trouve la Kasbah des Oudayas ?",
        answers: [
            { text: "Casablanca", correct: false },
            { text: "Rabat", correct: true },
            { text: "Salé", correct: false },
            { text: "Témara", correct: false }
        ]
    },
    {
        question: "Quel site du patrimoine mondial se trouve près de Ouarzazate ?",
        answers: [
            { text: "Volubilis", correct: false },
            { text: "Aït-Ben-Haddou", correct: true },
            { text: "Chellah", correct: false },
            { text: "Lixus", correct: false }
        ]
    },
    {
        question: "Quelle ville fortifiée du sud marocain est classée au patrimoine de l'UNESCO ?",
        answers: [
            { text: "Taroudant", correct: false },
            { text: "Aït-Ben-Haddou", correct: true },
            { text: "Tiznit", correct: false },
            { text: "Zagora", correct: false }
        ]
    },
    {
        question: "Dans quelle ville se trouvent les ruines romaines de Volubilis ?",
        answers: [
            { text: "Près de Fès", correct: false },
            { text: "Près de Meknès", correct: true },
            { text: "Près de Rabat", correct: false },
            { text: "Près de Tanger", correct: false }
        ]
    },
    {
        question: "Quelle porte historique est l'emblème de Marrakech ?",
        answers: [
            { text: "Bab Agnaou", correct: true },
            { text: "Bab Doukkala", correct: false },
            { text: "Bab Debbagh", correct: false },
            { text: "Bab el-Khemis", correct: false }
        ]
    },

    // ART ET ARCHITECTURE - LES PEINTRES
    {
        question: "Qui est considéré comme le père de l'art moderne marocain ?",
        answers: [
            { text: "Ahmed Cherkaoui", correct: false },
            { text: "Farid Belkahia", correct: true },
            { text: "Mohammed Kacimi", correct: false },
            { text: "Jilali Gharbaoui", correct: false }
        ]
    },
    {
        question: "Quel peintre marocain est célèbre pour ses œuvres sur cuivre ?",
        answers: [
            { text: "Mohammed Kacimi", correct: false },
            { text: "Farid Belkahia", correct: true },
            { text: "Ahmed Cherkaoui", correct: false },
            { text: "Lalla Essaydi", correct: false }
        ]
    },
    {
        question: "Quel peintre marocain a fondé l'École des Beaux-Arts de Casablanca ?",
        answers: [
            { text: "Farid Belkahia", correct: true },
            { text: "Ahmed Cherkaoui", correct: false },
            { text: "Mohammed Kacimi", correct: false },
            { text: "Hassan Hajjaj", correct: false }
        ]
    },
    {
        question: "Quelle artiste marocaine contemporaine est reconnue pour sa photographie ?",
        answers: [
            { text: "Malika Agueznay", correct: false },
            { text: "Lalla Essaydi", correct: true },
            { text: "Faiza Lamari", correct: false },
            { text: "Safaa Erruas", correct: false }
        ]
    },
    {
        question: "Quel peintre marocain est surnommé 'l'Andy Warhol de Marrakech' ?",
        answers: [
            { text: "Farid Belkahia", correct: false },
            { text: "Hassan Hajjaj", correct: true },
            { text: "Mohamed Melehi", correct: false },
            { text: "Ahmed Cherkaoui", correct: false }
        ]
    },
    {
        question: "Dans quelle ville est né le peintre Jilali Gharbaoui ?",
        answers: [
            { text: "Fès", correct: false },
            { text: "Jorf El Melha", correct: true },
            { text: "Casablanca", correct: false },
            { text: "Marrakech", correct: false }
        ]
    },
    {
        question: "Quel mouvement artistique a été initié par Farid Belkahia ?",
        answers: [
            { text: "Surréalisme marocain", correct: false },
            { text: "École de Casablanca", correct: true },
            { text: "Art conceptuel", correct: false },
            { text: "Néo-orientalisme", correct: false }
        ]
    },

    // Questions supplémentaires sur l'artisanat et les traditions
    {
        question: "Quelle ville marocaine est célèbre pour sa poterie bleue ?",
        answers: [
            { text: "Salé", correct: false },
            { text: "Fès", correct: true },
            { text: "Safi", correct: false },
            { text: "Tétouan", correct: false }
        ]
    },
    {
        question: "Quel artisanat traditionnel marocain utilise du fil d'or et d'argent ?",
        answers: [
            { text: "Tapis", correct: false },
            { text: "Broderie (Tarz)", correct: true },
            { text: "Poterie", correct: false },
            { text: "Maroquinerie", correct: false }
        ]
    },
    {
        question: "Quelle ville est réputée pour ses babouches traditionnelles ?",
        answers: [
            { text: "Marrakech", correct: false },
            { text: "Fès", correct: true },
            { text: "Meknès", correct: false },
            { text: "Rabat", correct: false }
        ]
    },
    {
        question: "Quel type de tapis berbère est originaire du Moyen Atlas ?",
        answers: [
            { text: "Beni Ouarain", correct: true },
            { text: "Kilim", correct: false },
            { text: "Azilal", correct: false },
            { text: "Boucherouite", correct: false }
        ]
    },
    {
        question: "Dans quelle région trouve-t-on les célèbres tapis Azilal ?",
        answers: [
            { text: "Haut Atlas", correct: true },
            { text: "Moyen Atlas", correct: false },
            { text: "Anti-Atlas", correct: false },
            { text: "Rif", correct: false }
        ]
    },
    {
        question: "Quel instrument de musique traditionnel marocain ressemble à un luth ?",
        answers: [
            { text: "Bendir", correct: false },
            { text: "Oud", correct: true },
            { text: "Qraqeb", correct: false },
            { text: "Derbouka", correct: false }
        ]
    },
    {
        question: "Quelle danse traditionnelle marocaine est pratiquée dans l'Atlas ?",
        answers: [
            { text: "Chaabi", correct: false },
            { text: "Ahidous", correct: true },
            { text: "Gnawa", correct: false },
            { text: "Aita", correct: false }
        ]
    },
    {
        question: "Quel style musical marocain a des origines africaines subsahariennes ?",
        answers: [
            { text: "Chaabi", correct: false },
            { text: "Gnawa", correct: true },
            { text: "Malhoun", correct: false },
            { text: "Andalou", correct: false }
        ]
    },
    {
        question: "Quelle spécialité culinaire marocaine est cuite dans un plat conique ?",
        answers: [
            { text: "Couscous", correct: false },
            { text: "Tajine", correct: true },
            { text: "Pastilla", correct: false },
            { text: "Harira", correct: false }
        ]
    },
    {
        question: "Quel thé est traditionnel au Maroc ?",
        answers: [
            { text: "Thé noir", correct: false },
            { text: "Thé vert à la menthe", correct: true },
            { text: "Thé blanc", correct: false },
            { text: "Thé rouge", correct: false }
        ]
    },
    {
        question: "Quelle pâtisserie marocaine est préparée avec des amandes et du miel ?",
        answers: [
            { text: "Chebakia", correct: false },
            { text: "Cornes de gazelle", correct: true },
            { text: "Makroudh", correct: false },
            { text: "Fekkas", correct: false }
        ]
    },
    {
        question: "Quel mois correspond généralement au Ramadan dans le calendrier musulman ?",
        answers: [
            { text: "Toujours mars", correct: false },
            { text: "Variable selon l'année", correct: true },
            { text: "Toujours mai", correct: false },
            { text: "Toujours septembre", correct: false }
        ]
    },
    {
        question: "Quelle fête musulmane marque la fin du Ramadan ?",
        answers: [
            { text: "Aïd al-Adha", correct: false },
            { text: "Aïd al-Fitr", correct: true },
            { text: "Mawlid", correct: false },
            { text: "Achoura", correct: false }
        ]
    },
    {
        question: "Comment appelle-t-on la fête du sacrifice au Maroc ?",
        answers: [
            { text: "Aïd al-Fitr", correct: false },
            { text: "Aïd al-Adha", correct: true },
            { text: "Mawlid", correct: false },
            { text: "Achoura", correct: false }
        ]
    },
    {
        question: "Quel style architectural caractérise les monuments almohades ?",
        answers: [
            { text: "Arcs en fer à cheval", correct: false },
            { text: "Arcs brisés et dépouillement", correct: true },
            { text: "Coupoles", correct: false },
            { text: "Colonnes spiralées", correct: false }
        ]
    },
    {
        question: "Quelle technique décorative utilise des petits carreaux de céramique ?",
        answers: [
            { text: "Stuc", correct: false },
            { text: "Zellige", correct: true },
            { text: "Tadelakt", correct: false },
            { text: "Moucharabieh", correct: false }
        ]
    },
    {
        question: "Quel matériau traditionnel donne un aspect lisse aux murs marocains ?",
        answers: [
            { text: "Zellige", correct: false },
            { text: "Tadelakt", correct: true },
            { text: "Stuc", correct: false },
            { text: "Marbre", correct: false }
        ]
    },
    {
        question: "Comment appelle-t-on les jardins traditionnels marocains ?",
        answers: [
            { text: "Patio", correct: false },
            { text: "Riad", correct: true },
            { text: "Agdal", correct: false },
            { text: "Menara", correct: false }
        ]
    },
    {
        question: "Quelle ville abrite les jardins de la Ménara ?",
        answers: [
            { text: "Fès", correct: false },
            { text: "Marrakech", correct: true },
            { text: "Meknès", correct: false },
            { text: "Rabat", correct: false }
        ]
    },
]

// Quiz Application
class QuizApp {
    constructor() {
        this.homeScreen = document.getElementById('home-screen');
        this.quizScreen = document.getElementById('quiz-screen');
        this.resultsScreen = document.getElementById('results-screen');
        this.questionElement = document.getElementById('question');
        this.answerButtons = document.getElementById('answer-buttons');
        this.timeElement = document.getElementById('time');
        this.progressBar = document.getElementById('progress-bar');
        this.currentQuestionElement = document.getElementById('current-question');
        
        this.currentQuestionIndex = 0;
        this.correctAnswers = 0;
        this.timer = null;
        this.timeLeft = 0;
        this.selectedQuestions = [];
        this.lastQuizScore = null;
        
        this.init();
    }
    
    init() {
        document.getElementById('start-btn').addEventListener('click', () => this.startQuiz());
    }
    
    startQuiz() {
        this.selectedQuestions = [...questions]
            .sort(() => Math.random() - 0.5)
            .slice(0, 20);
        
        this.currentQuestionIndex = 0;
        this.correctAnswers = 0;
        
        this.homeScreen.classList.remove('active');
        this.quizScreen.classList.add('active');
        
        this.showQuestion();
    }
    
    showQuestion() {
        this.resetState();
        const question = this.selectedQuestions[this.currentQuestionIndex];
        
        this.currentQuestionElement.textContent = this.currentQuestionIndex + 1;
        this.progressBar.style.width = `${(this.currentQuestionIndex / this.selectedQuestions.length) * 100}%`;
        this.questionElement.textContent = question.question;
        
        question.answers.forEach(answer => {
            const button = document.createElement('button');
            button.textContent = answer.text;
            button.classList.add('answer-btn', 'btn');
            if (answer.correct) {
                button.dataset.correct = answer.correct;
            }
            button.addEventListener('click', (e) => this.selectAnswer(e));
            this.answerButtons.appendChild(button);
        });
        
        this.startTimer();
    }
    
    startTimer() {
        this.timeLeft = 30;
        this.timeElement.textContent = this.timeLeft;
        
        this.timer = setInterval(() => {
            this.timeLeft--;
            this.timeElement.textContent = this.timeLeft;
            
            if (this.timeLeft <= 0) {
                clearInterval(this.timer);
                this.handleTimeOut();
            }
        }, 1000);
    }
    
    handleTimeOut() {
        Array.from(this.answerButtons.children).forEach(button => {
            button.disabled = true;
        });
        
        const correctButton = this.answerButtons.querySelector('[data-correct="true"]');
        correctButton.classList.add('correct', 'pulse');
        
        setTimeout(() => this.nextQuestion(), 2000);
    }
    
    selectAnswer(e) {
        clearInterval(this.timer);
        const selectedButton = e.target;
        const correct = selectedButton.dataset.correct === 'true';
        
        Array.from(this.answerButtons.children).forEach(button => {
            button.disabled = true;
        });
        
        if (correct) {
            selectedButton.classList.add('correct');
            this.correctAnswers++;
        } else {
            selectedButton.classList.add('incorrect');
            const correctButton = this.answerButtons.querySelector('[data-correct="true"]');
            correctButton.classList.add('correct');
        }
        
        selectedButton.classList.add('pulse');
        setTimeout(() => this.nextQuestion(), 1500);
    }
    
    nextQuestion() {
        this.currentQuestionIndex++;
        
        if (this.currentQuestionIndex < this.selectedQuestions.length) {
            this.showQuestion();
        } else {
            this.showResults();
        }
    }
    
    resetState() {
        clearInterval(this.timer);
        while (this.answerButtons.firstChild) {
            this.answerButtons.removeChild(this.answerButtons.firstChild);
        }
    }
    
    showResults() {
        this.quizScreen.classList.remove('active');
        this.resultsScreen.classList.add('active');
        
        const totalQuestions = this.selectedQuestions.length;
        const percentage = Math.round((this.correctAnswers / totalQuestions) * 100);
        const incorrect = totalQuestions - this.correctAnswers;
        
        let progressText = "";
        if (this.lastQuizScore !== null) {
            const progress = percentage - this.lastQuizScore;
            if (progress > 0) {
                progressText = `<div class="progress-text positive">+${progress}% from last quiz!</div>`;
            } else if (progress < 0) {
                progressText = `<div class="progress-text negative">${progress}% from last quiz</div>`;
            } else {
                progressText = `<div class="progress-text neutral">Same score as last quiz</div>`;
            }
        } else {
            progressText = `<div class="progress-text">First attempt!</div>`;
        }
        
        this.lastQuizScore = percentage;
        
        this.resultsScreen.innerHTML = `
            <h1>Your Results</h1>
            <div class="main-score">
                <div class="score-circle" style="--percentage: ${percentage}%">
                    <div class="score-text">${percentage}%</div>
                </div>
                ${progressText}
            </div>
            <div class="stats-container">
                <div class="stat-card">
                    <h3>Correct</h3>
                    <div class="stat-value correct-stat">${this.correctAnswers}/${totalQuestions}</div>
                </div>
                <div class="stat-card">
                    <h3>Incorrect</h3>
                    <div class="stat-value incorrect-stat">${incorrect}/${totalQuestions}</div>
                </div>
            </div>
            <button id="restart-btn" class="btn">Try Again</button>
        `;
        
        document.getElementById('restart-btn').addEventListener('click', () => this.restartQuiz());
    }
    
    restartQuiz() {
        this.resultsScreen.classList.remove('active');
        this.homeScreen.classList.add('active');
    }
}

// Initialize the quiz when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new QuizApp();
});