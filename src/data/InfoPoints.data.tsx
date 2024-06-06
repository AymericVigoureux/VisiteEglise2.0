import { InfoPointProps } from "../components/InfoPoint/InfoPoint"
import Image1 from '../img/img_Parcour_court/Ep1.jpg'
import Image2 from '../img/img_Parcour_court/Ep2.jpg'
import Image3 from '../img/img_Parcour_court/Ep3.jpg'
import Image4 from '../img/img_Parcour_court/Ep4.jpg'
import Image5 from '../img/img_Parcour_court/Ep5.jpg'



export const shortPoints: InfoPointProps[] = [
	{
		num: 1,
		infoPopup: {
			title: "Contexte et architecture",
			done: false,
			image: Image1,
			video: "https://youtube.com/embed/nAU6g6trLqg?autoplay=0",
			description: ["Bienvenue à l’église du Saint-Esprit, un joyau historique niché au cœur du centre-ville d’Aix-en-Provence. Venez découvrir cette église fascinante, dont la construction a commencé en 1706 sur les fondations d’un ancien hôpital médiéval, et qui a été consacrée en 1806. Plongez dans son histoire riche et tumultueuse, marquée par des figures illustres telles que le comte de Mirabeau, Mgr de Miollis, et même le pape Pie VII. Admirez l’architecture intérieure baroque, ingénieusement conçue pour maximiser l’espace malgré une façade sobre due à des contraintes budgétaires. Aujourd'hui, l'église du Saint-Esprit est un lieu dynamique, particulièrement apprécié des étudiants. Rejoignez-nous pour une visite captivante et laissez-vous émerveiller par ce trésor d’Aix-en-Provence. ","5 vidéos vous permettront de découvrir l’histoire de l’église et de ses œuvres. Commençons sans plus tarder par le contexte de sa construction et son architecture…"]
		},
		$left: "48.5%",
		$top: "98%",
	},
	{
		num: 2,
		infoPopup: {
			title: "Le Choeur",
			description: ["Entrons dans l’église, remontons l’allée centrale, et approchons nous à présent de la partie la plus sacrée de l’édifice appelé “Le Choeur”. En vous approchant, vous n’avez pas pu passer à côté du majestueux baldaquin qui domine l’espace. Pourquoi avoir construit une si grande œuvre à cet endroit dans l’église? Quelle est sa signification? Découvrez les détails de sa conception ainsi que des 4 statues environnantes dans cette deuxième vidéo…"],
			image: Image2,
			video: "https://youtube.com/embed/xIV_dyiasJk?autoplay=0",
			done: false,

		},
		$left: "41.5%",
		$top: "42.7%",
	},
	{
		num: 3,
		infoPopup: {
			title: "Le retable du Parlement",
			image: Image3,
			video: "https://youtube.com/embed/-a-bBZxg068?autoplay=0",
			description: ["En vous dirigeant dans le transept gauche, un ensemble de tableaux attire le regard avec ses traits fins et ses couleurs vives. Le Retable du Parlement est un véritable bijou de précision. Les visages des protagonistes vous paraissent plus que réalistes? Vous ne croyez pas si bien dire… Cette troisième vidéo vous révèle le secret du peintre pour dessiner ces visages. En prêtant attention, vous découvrirez même que Cézanne n’a pas été le premier à coucher la Sainte Victoire sur sa toile."],
			done: false,

		},
		$left: "20%",
		$top: "37%",
	},
	{
		num: 4,
		infoPopup: {
			title: "Le Transept Droit",
			image: Image4,
			video: "https://youtube.com/embed/CeOisoa41ro?autoplay=0",
			description: ["Deux autres toiles d’une grande qualité viennent sublimer le transept droit. Le Christ en Croix de Dandré-Bardon nous invite à la contemplation de Jésus dans sa souffrance et sa résurrection. La Pentecôte de Jean Daret, elle, est une pièce incontournable dans cette église dédiée au Saint-Esprit. Nombreuses sont d’ailleurs les références à l’Esprit Saint dans cette église… Saurez-vous les retrouver?"],
			done: false,

		},
		$left: "78%",
		$top: "37%",
	},
	{
		num: 5,
		infoPopup: {
			title: "La Tribune d'Orgue",
			image: Image5,
			video: "https://youtube.com/embed/mXNx8Tiui8I?autoplay=0",
			description: ["Pour conclure cette visite, et en retournant vers l’entrée de l’église, vous pourrez contempler la majestuosité de l’Orgue, en haut de sa tribune. Encore aujourd’hui s'élèvent de la haut, chants et musiques durant les messes du dimanche. Cette dernière vidéo vous révélera une anecdote sur la construction de cet orgue…", "Ce parcours de visite a été préparé bénévolement par les étudiants de cette paroisse. Nous avons été heureux de vous accueillir et prions pour vous. Vous pouvez soutenir financièrement la communauté en faisant une offrande dans les troncs à l’entrée de l’église, près des bougies.", "Bonne fin de visite! Que Dieu vous bénisse!"],
			done: false,

		},
		$left: "55%",
		$top: "60%",
	},
]

export const longPoints: InfoPointProps[] = [
	{
		num: 1,
		infoPopup: {
			title: "Contexte et architecture",
			done: false,
			image: Image1,
			video: "https://youtube.com/embed/nAU6g6trLqg?autoplay=0",
			description: ["Bienvenue à l’église du Saint-Esprit, un joyau historique niché au cœur du centre-ville d’Aix-en-Provence. Venez découvrir cette église fascinante, dont la construction a commencé en 1706 sur les fondations d’un ancien hôpital médiéval, et qui a été consacrée en 1806. Plongez dans son histoire riche et tumultueuse, marquée par des figures illustres telles que le comte de Mirabeau, Mgr de Miollis, et même le pape Pie VII. Admirez l’architecture intérieure baroque, ingénieusement conçue pour maximiser l’espace malgré une façade sobre due à des contraintes budgétaires. Aujourd'hui, l'église du Saint-Esprit est un lieu dynamique, particulièrement apprécié des étudiants. Rejoignez-nous pour une visite captivante et laissez-vous émerveiller par ce trésor d’Aix-en-Provence. ",
			"5 vidéos vous permettront de découvrir l’histoire de l’église et de ses œuvres. Commençons sans plus tarder par le contexte de sa construction et son architecture…"],
			textarea:["Title", "Introduction:",
			"Text","Soyez les bienvenus dans l’église du Saint-Esprit, une des 4 églises historiques du centre-ville d’aix-en-provence.",
			"Text","Nous vous proposons une visite de l’église du Saint-Esprit à partir de son histoire : car derrière sa façade lisse,claire et calme et sous l’apparente simplicité de l’intérieur, elle cache aux yeux du visiteur et du fidèle d’aujourd’hui, une histoire mouvementée. Par-delà procédures et rivalités, cette histoire témoigne de la piété et de la persévérance de fidèles, clercs comme laïcs. Une histoire de tous les hommes et de tous les temps qu’expriment justement le dépouillement de l’architecture, l’abondance et la qualité du mobilier",
			"Title","L’installation de la paroisse","Text","Pour comprendre son histoire, il faut remonter au XIIème siècle, en plein Moyen Age. Sur ces lieux, s’implante un hôpital tenu par les hospitaliers de l’Ordre du Saint-Esprit qui accueille les enfants trouvés, en face du couvent des augustins dont le clocher fait encore face à notre église actuelle.",
			"img",Image1,
			"Text","A la fin du XVIème siècle, la population à Aix-en-Provence ne cesse de croître, un nouveau quartier est créé en 1583, appelé Villeverte. Les habitants de cette partie de la ville expriment le besoin d’avoir un lieu de culte plus proche de chez eux car ils dépendent de la paroisse de la Madeleine à l’autre bout de la ville. La chapelle de l'hôpital sert provisoirement d’église paroissiale à partir de 1670. Puis sur l’emplacement de l’hôpital, une nouvelle église se construit: sa première pierre est posée en 1706.",
			"Text","Après de nombreux soucis d’argent et de désaccords entre notables de la cité, la construction de l’église est portée à son achèvement en 1726. Elle est placée sous le vocable de Saint Jérôme, en mémoire du cardinal Jérôme de Grimaldi, archevêque d’Aix, qui avait érigé la paroisse 56 ans auparavant. C’est sous ce nom que l’église est consacrée un siècle plus tard, le 24 octobre 1806. Néanmoins, les habitants continueront à parler de l’église du Saint-Esprit jusqu’à nos jours.",
			"Title","Personnages importants",
			"Text","Des personnages illustres sont passés par cette église.  Parmi eux:",
			"SubText"," Le comte de Mirabeau, qui se marie dans cette église en juin 1772 ",
			"img",Image1,
			"SubText","Mgr de Miollis, né en cette paroisse, inspira à Victor Hugo le personnage de Mgr Myriel dans Les Misérables.",
			"SubText"," Au XIXème siècle, le chanoine Emery, prêtre du diocèse d’Aix devenu curé du Saint Esprit, était très connu pour ses sermons en provençal qui attiraient beaucoup de monde. Deux plaques de marbre lui rendent hommage dans l’église, sur la façade et sur un pilier du chœur. C’est aussi lui qui fit construire la sacristie, mettre des vitraux aux fenêtres.",
			"SubText"," Le pape Pie VII, chef de l’église catholique, par deux fois s’est rendu à Aix-en-Provence d’abord comme prisonnier en 1809 puis en 1814 en se rendant vers Rome après sa captivité par Napoléon.",
			"SubText","Même une reine d’Espagne en exil viendra y entendre la messe en 1840.",
			"Title","Façade et Architecture",
			"Text","L’architecture baroque de l’église du Saint Esprit demeure très modeste. La façade de l’édifice est d’ailleurs assez sobre. Effectivement, lors de sa construction, l’architecte doit composer avec une amputation  d’un tiers du budget prévu. Et l’espace disponible est contraint entre la rue Espariat et  la rue des Tanneurs. Ainsi, le saint esprit a été construit sur un plan rectangulaire pour optimiser la place qui lui avait été offerte.",
			"img",Image1,
			"Text","Touche locale, le clocher est coiffé de quatre « chapeaux de gendarme », motif que l’on rencontre souvent dans les fermes ou bastides provençales. En face de l’église se trouvait le couvent des Augustins qui a été détruit à la Révolution mais dont subsiste le clocher de la chapelle, datant du milieu du XVème siècle."],
		},
		$left: "52%",
		$top: "98%",
	},
	{
		num: 2,
		infoPopup: {
			title: "La Nef",
			image: Image5,
			textarea: ["Title","La Nef",
			"Text","En pénétrant dans l’église, et en vous avançant dans la “nef”, c'est-à dire l’allée centrale, vous faites le chemin que font les croyants qui viennent communier. En remontant la nef, le fidèle se dirige vers le chœur, qui est la partie la plus sacrée de l’église, avec ses éléments les plus précieux.",
			"Text","Résolument moderne : les lignes épurées, les arcs  en plein-cintres. Laurent Vallon joue avec l’espace, créant de nombreuses illusions : les nefs latérales sont écrasées par la nef principale pour donner une impression d’espace, et une corniche fait le tour de tout l’intérieur, unifiant les différents éléments de l’église en assurant une continuité.",
			"img",Image1,
			"Text","Très riche, mais hétéroclite, la décoration de l’intérieur de l’église du Saint-Esprit s’est étoffée au cours de la Révolution et de son histoire paroissiale par de nombreux dons de riches commerçants, mais aussi par les offrandes de plus modestes fidèles allant parfois jusqu’à offrir leurs parures pour décorer le mobilier liturgique."],
			done: false,

		},
		$left: "55%",
		$top: "68%",
	},
	{
		num: 3,
		infoPopup: {
			title: "Le Christ en croix",
			image: Image5,
			textarea: [
				"Title","Le Christ en croix:",
				"Text","Le Christ en Croix de Michel-François Dandré-Bardon est accroché sur un pilier de la nef et faisant face à la chaire. Il date de 1731 et provient de la Salle d’Audience de la Cour des Comptes d’Aix, détruite avec le palais comtal juste avant la Révolution.",
				"Text"," Elle représente le Christ crucifié, s’offrant au monde pour sauver l’humanité du mal et du péché. Sur le tableau, il semble en même temps mourir et ressusciter, les yeux plongés dans le cœur de Dieu. En effet, son corps n’a pas une allure de cadavre, mais commence déjà à s’élever, glorieux, vers le ciel!",
				"Text","La lumière chaude et nacrée du tableau n’est pas sans rappeler la peinture vénitienne et le goût pour l’art chatoyant et expressif de Rubens, que l’on avait redécouvert à la fin du XVIIe siècle.",
				"Text","En haut de la croix, vous lirez cette inscription, présente sur beaucoup de crucifix: “INRI”. Elle résume l’inscription de condamnation demandée par Pilate: en latin : Iesus Nazarenus Rex Iudaeorum, (Jésus de Nazareth, Roi des Juifs).",

			],
			done: false,

		},
		$left: "65%",
		$top: "51.5%",
	},
	{
		num: 4,
		infoPopup: {
			title: "L’entrée du Choeur",
			image: Image5,
			textarea: [
				"Title","L’entrée du Choeur:",
				"Text","Le chœur est la partie la plus sacrée de l’église, avec ses éléments les plus précieux : l’autel, sur lequel est célébrée la messe, et le corps du Christ, c'est-à dire les hosties consacrées conservées ici, dans le tabernacle. Le rideau devant sa porte et la petite lumière rouge sont là pour indiquer sa présence. Cet espace du chœur est délimité par un bel ouvrage de ferronnerie appelé “table de communion”.",
				"Text","Ces grilles du chœur, sauf les portes centrales, sont du milieu du XVIIIè siècle. Elles proviendraient de l’atelier aixois Jean Frochot. Les portes centrales seraient plus anciennes : on ignore leur origine.",
				"Text","Le lutrin de la Parole de Dieu (ou l’ambon) avait été composé avec deux portes de fer forgé. Ce pupitre est l'unique témoin de la grille fermant le chœur de l'église Saint-Jean Baptiste. L’ambon actuel a été réalisé en 1984 par le maître ferronnier Bender d’Aix avec deux portes assemblées tête-bêche",
			],
			done: false,

		},
		$left: "49%",
		$top: "30%",
	},
	{
		num: 5,
		infoPopup: {
			title: "Les 4 statues du Choeur",
			image: Image5,
			textarea: [
				"Title","Les 4 statues du Choeur:",
				"Text","Autour du maître autel, le chœur est ponctué de quatre statues imposantes représentant les quatre paroisses historiques de la ville d’Aix. Ces quatre grandes figures de grand style d’environ deux mètres sont en bois enduit de stuc «façon pierre » selon une technique appréciée au XVIIIè siècle pour assouplir et tempérer l’austérité des lignes de l’architecture.",
				"Title","Statue de Saint Jean-Baptiste",
				"img",Image5,
				"SubText","Au fond à droite, saint Jean-Baptiste, le cousin de Jésus, qui vivait dans le désert et annonçait la venue du Christ.  Nous le reconnaissons car il est habillé d’une peau de chameau avec une phrase tirée de l’Evangile : « Je suis la voix qui crie dans le désert, aplanissez le chemin du Seigneur » (Jn 1, 23). Cette statue fait référence à l’église Saint-Jean-Baptiste du Faubourg, cours Sextius, non-loin d’ici.",
				"Title","Statue de Jésus",
				"img",Image5,
				"SubText","Devant, à gauche, Jésus représenté comme Sauveur, en référence à la cathédrale Saint Sauveur d’Aix. Elle porte ce cartouche avec une phrase tirée de l’évangile selon saint Matthieu : «Venez à moi, vous tous qui peinez sous le poids du fardeau, et moi je vous donnerai le repos.” (Mt 11, 28)",
				"Title","Statue de Sainte Marie-Madeleine",
				"img",Image5,
				"SubText","Sainte Madeleine, à droite, une sainte typiquement provençale ! Cette femme était une ancienne prostituée, acqueillie et pardonnée par Jésus. Dans la bible, elle se met à ses pieds, les arrosant de ses larmes et de parfums, tout en les séchant avec ses cheveux alors qu'elle reconnaissait ses péchés. Marie-Madeleine est ici représentée en pleurs, séchant ses larmes de son voile tenu dans la main gauche, la main droite implorante et ouverte à la miséricorde de Jésus, gardant le flacon de parfum à ses pieds. Après sa conversion, elle part évangéliser et débarque selon la tradition, chez nous,  en Provence avec Sainte Marthe à Tarascon, Saint Lazare à Marseille, et les saintes Marie Jacobée et Salomée aux Saintes Maries de la mer. Elle termine sa route en ermitage dans une grotte du massif de la Sainte-Baume. Son cartouche , tirée du Psaume 54, rappelle ce dernier épisode : « Voici, je m’enfuirais au loin, je passerai la nuit au désert ». (Ps 54,8) Une grande église lui est dédiée dans notre ville, place des prêcheurs.",
				"Title","Statue de Saint Jérôme",
				"img",Image5,
				"SubText","Et enfin saint Jérôme, grand traducteur de la Bible au Ve siècle, au tempérament fort, qui a donné dans un premier temps son nom à l’église du Saint-Esprit. Le lion accroupi représente les passions vaincues, et le séjour du saint au désert, et fait aussi référence à l’anecdote selon laquelle il aurait retiré une épine du pied d’un lion.Il vivait dans la pensée de l'imminence de la venue définitive du Christ, qu’on appelle le jugement dernier, annoncée par les trompettes dans le dernier livre de la bible. Le cartouche à ses pieds y fait référence: « Surgissez, ô morts, et venez au jugement ». Vous retrouverez la représentation du patron de cette église sur un des vitraux et sur un immense tableau au-dessus des confessionnaux, la vision de saint Jérôme, par Angelin.",
			],
			done: false,

		},
		$left: "65%",
		$top: "24%",
	},
	{
		num: 6,
		infoPopup: {
			title: "Le Maître-autel",
			image: Image5,
			textarea: [
				"Title","Le Maître-autel:",
				"img",Image5,
				"Text","Au dessus du tabernacle se dresse le baldaquin. L’église du Saint-Esprit est la seule église ancienne d’Aix à avoir conservé son autel d’origine qui date de 1787. Il a été réalisé par le milanais Jean-Baptiste Casella. Les dessins de son concepteur aixois Auguste Ramel, révèlent quelques différences avec la réalisation actuelle: le dessin prévoyait une structure moins élancée, avec une croix en son sommet et des décorations d’autel courbes (dans le style Louis XV). Le résultat, plus rectiligne, est de style Louis XVI. Toutefois, l’essentiel du projet initial a été respecté: le maître-autel est entouré de 6 colonnes de marbre formant un majestueux baldaquin.",
				"Title","Le sommet",
				"img",Image5,
				"Text","Tout en haut, deux anges tiennent un calice avec une hostie d'où partent une multitude de rayons. Il sont ainsi présentés comme point culminant de la foi catholique en la présence réelle de Jésus dans l’Eucharistie. Cette représentation est typique de la Contre-Réforme visant à réaffirmer le dogme de la présence de Dieu dans l’Eucharistie face au scepticisme des protestants. En effet, l'action centrale de la messe se déroule à l'autel lorsque le prêtre rend présent la passion, la mort et la résurrection du Christ en consacrant le pain et le vin qui deviennent réellement le corps et le sang de Jésus.",
				"Text","Il est ensuite proposé aux chrétiens d'y communier pour participer à la Résurrection de Jésus et à la vie divine avec lui.",
				"Title","La colombe du Saint Esprit",
				"img",Image5,
				"Text","Si vous regardez attentivement juste en dessous, vous apercevrez, au milieu des rayons de stuc qui forment une gloire, une colombe aux ailes déployées. La colombe symbolise l’Esprit Saint, patron de notre église, qui est une des 3 personnes divines avec Dieu le Père créateur et Jésus son fils le sauveur. C’est l’Esprit d’amour de l’un et de l’autre. C’est ce qu’on appelle le mystère de la Trinité.  Encore en dessous, les ornementations de l’autel sont caractéristiques de la fin du  XVIIIe siècle: cannelures, bandes de lauriers et feuilles d’acanthes.",
			],
			done: false,

		},
		$left: "49%",
		$top: "14%",
	},
	{
		num: 7,
		infoPopup: {
			title: "Les statues des prophètes",
			image: Image5,
			textarea: [
				"Title","Les statues des prophètes:",
				"Text","Il peut être difficile d’identifier certaines statues : il s’agit de celle de Samuel (face au à celle de Marie-Madeleine), celle d’Isaïe (face à celle du Christ Sauveur. Ainsi au pied des piliers de la croisée côté nef, le prophète Isaïe et le prophète Samuel détonnent par rapport à l’ensemble des autres statues. Sans inscription elles proviendraient en fait (selon certaines sources) de l église des Pénitents Blancs (église dépouillée à la Révolution française). Elles sembleraient selon les spécialistes plus proches par le style d’une série de prophètes conservées dans l’église des Prêcheurs (Daniel, David, Elisée et Jonas).",
				"Title","Le premier prophète Isaïe:",
				"img",Image5,
				"SubText","Isaïe ou Esaïe est le premier des quatre grands prophètes de la Bible qui aurait vécu entre le VIIIe et le VIIe siècle avant notre ère. Témoin de la ruine du royaume d’Israël, il s’efforça de reculer celle de Juda en combattant l’idolâtrie et les influences qui portaient les rois à rechercher, contre l’Assyrie, l’alliance trompeuse de l’Egypte. Le Talmud raconte (ou selon une source apocryphe du IIè siècle) que, condamné à mort par le roi Manassé, il fut coupé en deux avec une scie de bois.",
				"Title","Le prophète Samuel :",
				"img",Image5,
				"SubText","Il tient en sa main une épée flamboyante, signe du jugement de Dieu. Samuel avait ordonné à Saül, roi d’Israël, de vouer à l’interdit les Amalécites qu’il allait combattre. Or Samuel épargna Agag, roi d’Amalec. Samuel lui reprocha cette désobéissance  et exécuta lui-même le roi Agag (ISamuel, 15) et ce qui fut l’une des causes de la volonté de Dieu de voir David devenir « l’oint » du Seigneur pour Israël.",
			],
			done: false,

		},
		$left: "24%",
		$top: "46%",
	},
	{
		num: 8,
		infoPopup: {
			title: "Chapelle Notre-Dame du Bon Secours",
			image: Image5,
			textarea: [
				"Title","Chapelle Notre-Dame du Bon Secours:",
				"Text","A droite du chœur se trouve la chapelle de la Sainte Vierge. On aperçoit sur l’autel une belle statue en marbre, datant de la fin du XVIIIè siècle, de la Vierge Marie tenant l’Enfant Jésus. Elle est vénérée sous le nom de Notre-Dame du Bon Secours.",
				"Text","L’auteur de cette statue a gravé son nom sur le socle : « Dom. us Cas. la F. » (Dominique Casella). Il était apparenté avec le sculpteur du maître-autel : Jean-Baptiste Casella. Cette statue proviendrait de la chapelle Saint-Jacques (des Capucins), près de l’ancien hôpital, avenue Philippe Solari.",
				"Text","Il est d’usage de venir prier devant cette chapelle afin de confier nos intentions à la mère de Dieu. Elle peut ainsi nous porter secours en portant nos prières auprès de son fils Jésus.",
				"Title","Prière à Notre-Dame de Bonsecours",
				"Priere",` Ô toi qui, depuis plus de mille ans,<br/> combles de tes faveurs<br/> ceux qui t’invoquent en ce lieu<br/> sous le nom de Notre-Dame de Bonsecours,<br/> Marie, nous te prions avec confiance :<br/> protège-nous, protège nos familles, bénis nos proches.<br/> Couvre du manteau de ta miséricorde<br/> tous ceux qui se tournent vers toi.<br/> Toi qui as souffert avec ton Fils Jésus,<br/> entends la plainte des malades et des affligés,<br/> guéris les cœurs blessés, console ceux qui sont seuls,<br/> abandonnés, mal-aimés, maltraités.<br/> Préserve-nous du péché,<br/> garde-nous fidèles à la foi de notre baptême,<br/> conduis-nous à Jésus,<br/> apprends-nous à faire tout ce qu’Il nous dit,<br/> donne-nous toujours la lumière de l’espérance<br/> et prie pour nous maintenant<br/> et à l’heure de notre mort.<br/><br/> Amen `,
			],
			done: false,

		},
		$left: "84%",
		$top: "19%",
	},
	{
		num: 9,
		infoPopup: {
			title: "La Pentecôte de Jean Daret",
			image: Image5,
			textarea: [
				"Title","La Pentecôte de Jean Daret:",
				"Text","Accroché dans le transept côté épitre, la Pentecôte est un tableau peint par Jean Daret, le plus renommé des peintres aixois du XVIIe siècle, réalisé en 1653. Il s’agissait de la partie centrale d’un retable dont les deux autres parties (L’Annonciation et le Baptême du Christ) ont disparu. L’ensemble avait été commandé par les prieurs de la Confrérie du Saint-Esprit dont les noms sont inscrits sur le parapet au premier plan à gauche. C’est très discret, mais il est aussi possible d’entrapercevoir une date, 1653, l’année de la commande.",
				"Title","La Pentecôte dans la Bible:",
				"Text","Dans les évangiles, le mystère de la Pentecôte a lieu 50 jours après la résurrection du Christ. Durant cet événement, les apôtres de Jésus reçoivent l’Esprit Saint, manifesté par des langues de feu et qui les envoie en mission proclamer la Bonne Nouvelle de l’Evangile, c’est à dire: annoncer la résurrection du Christ, partout dans le monde, et ce souvent au péril de leurs vies. L’ensemble représente Marie entourée des Apôtres qui ont les yeux levés vers l’apparition de la Colombe manifestant la présence du Saint Esprit. Nous reconnaissons St Jean, le plus jeune des apôtres, qui n’a pas de barbe, et saint Pierre, le plus vieux qui en possède une plus blanche que les autres. Saint Pierre est le 1er Pape de l’Eglise.",
				"Text","Dans l’église du Saint Esprit, le mystère de la Pentecôte est évidemment central et vous pouvez en chercher les 5 représentations.",
				"Text","«Quand arriva le jour de la Pentecôte, au terme des cinquante jours, ils se trouvaient réunis tous ensemble. Soudain un bruit survint du ciel comme un violent coup de vent : la maison où ils étaient assis en fut remplie tout entière. Alors leur apparurent des langues qu’on aurait dites de feu, qui se partageaient, et il s’en posa une sur chacun d’eux. Tous furent remplis d’Esprit Saint : ils se mirent à parler en d’autres langues, et chacun s’exprimait selon le don de l’Esprit.» (Ac 2, 1-4)",
			],
			done: false,

		},
		$left: "84%",
		$top: "36%",
	},
	{
		num: 10,
		infoPopup: {
			title: "Le Repas chez Simon le Pharisien",
			image: Image5,
			textarea: [
				"Title","Deux tableaux réunis",
				"Text","Ce tableau a été peint par Jean-Baptiste Daniel au début du XVIIe siècle. Avec “Jésus et les Docteurs” il fait partie d’un ensemble de deux toiles représentant deux épisodes du Nouveau Testament, qui étaient à l’origine incluses dans deux ensembles de peintures pour deux chapelles aixoises. Leur mauvais état de conservation est dû en partie au fait que le peintre a privilégié les perspectives au détriment d’un travail sur la couleur et les pigments de bonne conservation.",
				"Text","Le Repas chez Simon (ou la Madeleine au pied du Christ) s’insérait dans un cycle sur le thème de la Pénitence réalisé pour la Chapelle des Pénitents des Carmes (rue Maréchal Joffre). Les fantaisies de la redistribution post-révolutionnaire ont réuni dans la même église ces œuvres du même artiste, mais de provenance différente.",
				"Text","La mise en scène tumultueuse, voire désordonnée de ces deux épisodes du nouveau testament est typique de leur auteur Jean-Baptiste Daniel. Inspiré des grands peintres vénitiens comme Véronèse, il joue avec un dynamisme et joue des fonds d’architecture comme un décor de théâtre où se déploient les gestes des personnages, expressifs jusqu’à violents parfois.",
				"Title","La référence Biblique (Lc 7,36-39)",
				"Text","“ Un pharisien avait invité Jésus à manger avec lui. Jésus entra chez lui et prit place à table. Survint une femme de la ville, une pécheresse. Ayant appris que Jésus était attablé dans la maison du pharisien, elle avait apporté un flacon d’albâtre contenant un parfum. Tout en pleurs, elle se tenait derrière lui, près de ses pieds, et elle se mit à mouiller de ses larmes les pieds de Jésus. Elle les essuyait avec ses cheveux, les couvrait de baisers et répandait sur eux le parfum. En voyant cela, le pharisien qui avait invité Jésus se dit en lui-même : « Si cet homme était prophète, il saurait qui est cette femme qui le touche, et ce qu’elle est : une pécheresse.»”",
				"img",Image5,
				"Text","La femme qui baigne les pieds de Jésus avec ses larmes, les sèche avec ses cheveux, les embrasse et les couvre de parfum, exprime quelque chose qui est à la fois très simple et concret (même si ce n’est pas banal), un peu comme quand Jésus lave les pieds de ses disciples; et en même temps c’est quelque chose de beaucoup plus grand que ce qui paraît : elle exprime la reconnaissance d’avoir été pardonnée et donc acceptée dans son humiliation, et ce qui déborde de son cœur, c’est de la reconnaissance, bien sûr, mais c’est aussi la foi! « Jésus dit à cette femme : Ta foi t’a sauvée. Va en paix » (Lc 7.49). Cette femme a reçu de Dieu la révélation que Jésus — bien qu’ayant un corps semblable au nôtre — est le Messie, celui-là seul qui peut racheter quelqu’un de ses péchés. Cette rédemption est accessible à tous, et pas uniquement aux pharisiens, juifs très observants sur le culte à l’époque.",
			],
			done: false,

		},
		$left: "94%",
		$top: "40%",
	},
	{
		num: 11,
		infoPopup: {
			title: "Statue de Sainte Jeanne d’Arc",
			image: Image5,
			textarea: [
				"Title","Statue de Sainte Jeanne d’Arc:",
				"Text","Jeanne n'a que treize ans quand elle entend les voix de saint Michel et des saintes Catherine et Marguerite. Elle reçoit mission d'aller libérer la France, alors occupée aux deux tiers par le roi d'Angleterre. Ayant amené l'indécis Charles VII à Reims où il est sacré roi le 17 juillet 1429, elle est faite prisonnière devant Compiègne le 23 mai 1430 et livrée aux Anglais par les Bourguignons. Jugée par un tribunal d'Eglise comme sorcière et hérétique, Jeanne est condamnée à être brûlée vive sur la place du Vieux-Marché à Rouen, le 30 mai 1431. Elle avait 19 ans. Son épée fut un étendard avec les noms de Jhesus-Maria.",
				"img",Image5,
				"Text","La Vierge Marie devenue, au pied de la Croix, Mère de l’Eglise, Mère de tous les peuples et Mère de tous les hommes, n’a pas cessé de venir visiter et encourager la France et le monde pour les réorienter sans cesse vers son Fils. Nous avons besoin de son intercession en ce temps où, à l’écoute de « ce que l’Esprit dit aux Eglises ». Jeanne d’Arc a reçu sa part dans une mission de salut pour notre pays. Son aide nous est particulièrement nécessaire aujourd’hui.",
				"Text","Sainte Jeanne d’Arc est une des saintes les plus représentées dans les églises de France. Il n’est pas rare d’en trouver des statues, tout comme celles de Sainte Thérèse ou saint Antoine.",
			],
			done: false,

		},
		$left: "74%",
		$top: "56%",
	},
	{
		num: 12,
		infoPopup: {
			title: "Ensemble de tableaux, Marie intercédant pour les âmes du purgatoire",
			image: Image5,
			textarea: [
				"Title","Vierge intercédant pour les  mes du Purgatoire",
				"img",Image5,
				"Text","La Vierge intercédant pour les  mes du purgatoire auprès du Christ tenant la Croix rédemptrice où l’on reconnaît la manière ferme et nette de Jean Daret pour modeler les volumes dans la lumière. Cette toile – dont le mauvais état occulte les qualités plastiques - pourrait provenir de l’église de l’ancienne Madeleine (détruite en 1791 une peinture de Jean Daret portait le titre de Notre-Dame-du-Suffrage).",
				"Title","Un ex-voto",
				"img",Image5,
				"Text","Situé juste au-dessus, de provenance anonyme et daté de 1860, cet ex-voto est une représentation de la Passion du Christ sur carton. Un ex-voto est un tableau ou un objet symbolique suspendu dans une église, un lieu vénéré, à la suite d’un vœu ou en remerciement d’une grâce obtenue.",
				"Text","De nombreux ex-voto sont présents sur les murs et piliers de l’église. Ils témoignent de cette piété populaire fervente à laquelle les paroissiens sont reconnaissants pour l’aide qu’elle leur a apportée mais également la dévotion aux différents saints dont les statues ornent les chapelles latérales et les bas-côtés. Il en existe des anciens, datant des premières années de cette église, mais aussi des plus récents, comme près de la statue de Sainte Thérèse. Certains étudiants en offrent parfois pour rendre grâce pour leurs études passées à Aix et leurs réussites.",
				"Title","Le purgatoire?",
				"Text","Selon le Catéchisme de l' Église Catholique, le purgatoire désigne « l'état de ceux qui meurent dans l'amitié de Dieu, assurés de leur salut éternel, mais qui ont encore besoin de purification pour entrer dans le bonheur du ciel ».",
				"Text","A ne pas confondre avec l’enfer : « L'Église appelle purgatoire cette purification finale des élus qui est tout à fait distincte du châtiment des damnés ».",
				"Text","En raison de la communion des saints, les hommes « sont capables d'aider les âmes dans le purgatoire en offrant des prières en suffrage pour eux, spécialement par les messes. Ils peuvent aussi les aider par les aumônes, les indulgences, et les œuvres de pénitence » selon la théologie chrétienne. Il existe ainsi une prière pour les morts particulière pour prier pour l' âme du défunt afin de purifier ses fautes commises durant la vie terrestre.",
				"Title","Prière à Notre-Dame Libératrice",
				"Priere","<br/>Prends en pitié tous nos frères défunts, <br/>spécialement ceux qui ont le plus besoin <br/>de la miséricorde du Seigneur. <br/>Intercède pour tous ceux qui nous ont quittés <br/>afin que s’achève en eux <br/>l’oeuvre de l’amour qui purifie. <br/>Que notre prière, unie à celle de toute l’Église, <br/>leur obtienne la joie qui surpasse tout désir <br/>et apporte ici-bas consolation et réconfort <br/>à nos frères éprouvés ou désemparés. <br/><br/>Mère de l’Église, aide-nous, pèlerins de la terre, <br/>à mieux vivre chaque jour <br/>notre passage vers la résurrection. <br/>Guéris-nous de toute blessure du cœur et de l’âme. <br/>Fais de nous des témoins de l’Invisible, <br/>déjà tendus vers les biens que l’œil ne peut voir, <br/>des apôtres de l’espérance <br/>semblables aux veilleurs de l’aube. <br/>Refuge des pécheurs et Reine de tous les saints, <br/>rassemble-nous tous un jour, <br/>pour la Pâque éternelle, <br/>dans la communion du Père avec Jésus, le Fils, <br/>dans l’Esprit Saint, pour les siècles des siècles. <br/><br/>Amen.", 
			],
			done: false,

		},
		$left: "94%",
		$top: "59%",
	},
	{
		num: 13,
		infoPopup: {
			title: "Statue de Sainte Bernadette",
			image: Image5,
			textarea: [
				"Title","Statue de Sainte Bernadette:",
				"Text","Bernadette naît le 7 janvier 1844 au moulin de Boly près de Lourdes. Fille de François Soubirous, meunier, et de Louise née Castérot.",
				"Text","Elle connaît une enfance malheureuse. Injustement ruiné, son père perd son travail. À Lourdes, la famille doit habiter une pièce insalubre, le “cachot”. Pauvre parmi les pauvres, chétive et asthmatique, Bernadette est placée par ses parents en 1857 à Bartrès, un petit village situé à quelques kilomètres de Lourdes. Elle est servante et garde des moutons.",
				"Text","En janvier 1858, elle rentre à Lourdes pour faire sa première communion. C'est là que, du 11 février au 16 juillet 1858, la Vierge lui apparaîtra , à dix-huit reprises, au bord du Gave, à la grotte de Massabielle. Après cet événement, Bernadette doit se prêter à de nombreux interrogatoires, parfois pénibles, de la part des autorités ecclésiastiques et civiles. On la prend parfois pour une folle ou une simulatrice. Elle est la risée de beaucoup. Mais Bernadette répond à toutes les questions avec calme, modestie, bon sens et transparence.",
				"img",Image5,
				"Title","Statue de Sainte Bernadette:",
				"Text","Le 4 juillet 1866, Bernadette quitte Lourdes pour Nevers. Un mois plus tard, elle prend l'habit dans la congrégation des Sœurs de la Charité et reçoit le nom de sœur Marie-Bernard. En octobre 1867, elle fait sa profession religieuse. Ces treize années de vie religieuses seront marquées par la souffrance, en raison de la froideur de ses supérieures et de la maladie pulmonaire qui la mine et la fait se désoler de son inutilité. Affectée à l'infirmerie, elle soigne et réconforte admirablement les malades avec une immense charité.",
				"Text","Elle prie aussi longuement et offre ses souffrances. Le 16 avril 1879, après avoir été alitée durant de longs mois, elle meurt, à 35 ans, en murmurant : “Sainte Marie, Mère de Dieu, priez pour moi, pauvre pécheresse.” Son corps, demeuré inexplicablement intact, repose aujourd'hui à l'intérieur d'une châsse placée dans la chapelle des Sœurs de la Charité, à Nevers.",
				"Title","Statue de Sainte Bernadette:",
				"Priere","<br/>« Ô Jésus donnez-moi je vous prie le pain de l’humilité,<br/>le pain d’obéissance,<br/>le pain de charité,<br/>le pain de force pour rompre ma volonté et la fondre à la vôtre…<br/>le pain de patience pour supporter les peines que mon cœur souffre …<br/>le pain de ne voir que vous seul en tout et toujours »<br/><br/>« J’ai espéré en vous Seigneur. Soyez ma maison de refuge car vous êtes ma force »<br/><br/>« Celui-ci me suffit… Jésus seul pour richesse »",
			],
			done: false,
			
		},
		$left: "74%",
		$top: "70.5%",
	},
	{
		num: 14,
		infoPopup: {
			title: "Jésus et les docteurs",
			image: Image5,
			textarea: [
				"Title","Deux tableaux réunis",
				"Text","Ce tableau a été peint par Jean-Baptiste Daniel en 1712. Avec “Le Repas chez Simon le Pharisien”, il fait partie d’un ensemble de deux toiles représentant deux épisodes du Nouveau Testament, qui étaient à l’origine incluses dans deux ensembles de peintures pour deux chapelles aixoises. Leur mauvais état de conservation est dû en partie au fait que le peintre a privilégié les perspectives au détriment d’un travail sur la couleur et les pigments de bonne conservation.",
				"Text","“Jésus et les docteurs” s’insérait dans une série de la vie de la Vierge commandée par la congrégation de Dames (dépendant des Jésuites) pour leur chapelle de la Purification de la vierge, non loin des pénitents des Carmes, rue du petit Saint Esprit. Les fantaisies de la redistribution post-révolutionnaire ont réuni dans la même église ces œuvres du même artiste, mais de provenance différente.",
				"Text","La mise en scène tumultueuse, voire désordonnée de ces deux épisodes du nouveau testament est typique de leur auteur Jean-Baptiste Daniel. Inspiré des grands peintres vénitiens comme Véronèse, il joue avec un dynamisme et joue des fonds d’architecture comme un décor de théâtre où se déploient les gestes des personnages, expressifs jusqu’à violents parfois.",
				"Title","Évangile selon saint Luc 2, 41-52",
				"Text","Chaque année, les parents de Jésus se rendaient à Jérusalem pour la fête de la Pâque. Quand il eut douze ans, ils montèrent en pèlerinage suivant la coutume. À la fin de la fête, comme ils s’en retournaient, le jeune Jésus resta à Jérusalem à l’insu de ses parents. Pensant qu’il était dans le convoi des pèlerins, ils firent une journée de chemin avant de le chercher parmi leurs parents et connaissances. Ne le trouvant pas, ils retournèrent à Jérusalem, en continuant à le chercher. C’est au bout de trois jours qu’ils le trouvèrent dans le Temple, assis au milieu des docteurs de la Loi : il les écoutait et leur posait des questions, et tous ceux qui l’entendaient s’extasiaient sur son intelligence et sur ses réponses. En le voyant, ses parents furent frappés d’étonnement, et sa mère lui dit : « Mon enfant, pourquoi nous as-tu fait cela ? Vois comme ton père et moi, nous avons souffert en te cherchant ! » Il leur dit : « Comment se fait-il que vous m’ayez cherché ? Ne saviez-vous pas qu’il me faut être chez mon Père ? » Mais ils ne comprirent pas ce qu’il leur disait. Il descendit avec eux pour se rendre à Nazareth, et il leur était soumis. Sa mère gardait dans son cœur tous ces événements. Quant à Jésus, il grandissait en sagesse, en taille et en grâce, devant Dieu et devant les hommes.",
			],
			done: false,

		},
		$left: "94%",
		$top: "72%",
	},
	{
		num: 15,
		infoPopup: {
			title: "Statue de Sainte Rita",
			image: Image5,
			textarea: [
				"Title","Statue de Sainte Rita:",
				"Text","Sainte Rita, sainte patronne des causes perdues (fêtée le 22 Mai) est aussi mal connue qu’elle est populaire. Si sainte Rita est invoquée lorsque l’on ne sait plus à quel saint se vouer c’est sans doute pour l’exemple qu’elle offre d’une espérance maintenue intacte, même dans les circonstances les plus tragiques de l’existence.",
				"img",Image5,
				"Title","Une Sainte réconciliatrice",
				"Text","Née dans un petit village italien en Ombrie, en 1381, très jeune, elle veut se consacrer à Dieu contrairement au projet de ses parents. Elle se laisse marier à Fernandino, un homme violent dont elle a deux fils. Elle est une épouse et une mère fidèle et priante. Mais les querelles de clans sont féroces dans l'Italie du XVe siècle; Fernandino est assassiné après 18 ans de vie conjugale pendant lesquelles la douceur de Rita a peu à peu converti à la paix le mari brutal. Quelques années après ses deux fils sont emportés par la peste. Demeurée seule, Rita s'emploie à réconcilier les clans ennemis, pardonnant aux assassins, avant d'entrer chez les Augustines de Cascia. Elle y vivra une vie mystique intense et recevra sur le front un stigmate de la Passion du Christ. A sa mort, les miracles se multiplient sur son tombeau, faisant naître un culte populaire qui se répand rapidement. Sainte Rita a reçu le titre de “sainte des causes désespérées.”",
				"Title","Prière à Sainte Rita",
				"Priere","“Ô Sainte Rita<br/><br/>Toi qui as toujours mis ta <br/>confiance en Dieu,<br/><br/>Toi qui as su aimer et pardonner au <br/>nom du Christ, en te laissant guider <br/>chaque jour par la lumière <br/>de l'Esprit Saint. <br/>Ecoute la prière que je te présente <br/>humblement et avec confiance.<br/><br/>Intercède auprès de Dieu <br/>Tout-Puissant et Miséricordieux. <br/>Qu'il m'accorde la paix du cœur, <br/>afin que je puisse, comme toi, <br/>vivre dans la foi et dans l'amour <br/>sans jamais désesрérеr<br/><br/>Je pourrai ainsi parvenir un jour, <br/>avec toi et tous les saints, <br/>à la Joie éternelle de la communion <br/>avec le Père, le Fils et le Saint Esprit.<br/><br/>Amen”",
			],
			done: false,
			
		},
		$left: "82%",
		$top: "92%",
	},
	{
		num: 16,
		infoPopup: {
			title: "Le Baptistère",
			image: Image5,
			textarea: [
				"Title","Les fonts baptismaux",
				"Text","Cuve qui sert à recevoir l'eau du baptême. Les fonts baptismaux furent d'abord des cuves larges et profondes, enfoncées dans le sol pour le baptême par immersion. Ici, les fonts baptismaux sont érigés hors de terre en marbre blanc, classés par les Monuments historiques. Ils datent du xviiie et du xixe siècle. La cuve est datée du xviiie siècle et le pavement du xixe siècle.",
				"Text","C’est ici que sont baptisés les nouveaux chrétiens. Le baptême est le sacrement de la naissance à la vie chrétienne : marqué du signe de la croix, plongé dans l’eau, le nouveau baptisé renaît à une vie nouvelle. Devenu chrétien, le nouveau baptisé peut vivre selon l’Esprit de Dieu.",
				"Title","Le tableau",
				"Text","L’Adoration des Cœurs de Jésus et de Marie par les Anges date du XVIIIè siècle et peint par Philippe Sauvan (1697-1792). Il s’agit d’une réplique d’un tableau du même peintre conservé dans la cathédrale Sainte-Trophime d’Arles. L’image symbolique des deux Cœurs réunis hors de leur contexte est familière du milieu du XVIIIè siècle. La dévotion au Sacré-Cœur fut instituée par le pape Clément XIII.1765.",
				"img",Image5,
				"Text","Le coeur de Marie est souvent représenté transpercé d’une ou plusieurs lames, symbolisant sa souffrance de mère voyant son fils mourir.",
				"Text","« Syméon les bénit, puis il dit à Marie sa mère : « Voici que cet enfant provoquera la chute et le relèvement de beaucoup en Israël. Il sera un signe de contradiction, – et toi, ton âme sera traversée d’un glaive – : ainsi seront dévoilées les pensées qui viennent du cœur d’un grand nombre. » (Luc 2, 34-35) ",
				"Text","Quant à Jésus, son coeur peut-être représenté en flammes, brûlant d’amour pour les Hommes, ou bien jaillissant de sang et d’eau: ",
				"Text","« Comme c’était le jour de la Préparation (c’est-à-dire le vendredi), il ne fallait pas laisser les corps en croix durant le sabbat, d’autant plus que ce sabbat était le grand jour de la Pâque. Aussi les Juifs demandèrent à Pilate qu’on enlève les corps après leur avoir brisé les jambes. Les soldats allèrent donc briser les jambes du premier, puis de l’autre homme crucifié avec Jésus. Quand ils arrivèrent à Jésus, voyant qu’il était déjà mort, ils ne lui brisèrent pas les jambes, mais un des soldats avec sa lance lui perça le côté ; et aussitôt, il en sortit du sang et de l’eau.» (Jean 19, 31-34)",
			],
			done: false,

		},
		$left: "66%",
		$top: "92%",
	},
	{
		num: 17,
		infoPopup: {
			title: "Statue Notre Dame de Lourdes",
			image: Image5,
			textarea: [
				"Title","Statue Notre Dame de Lourdes",
				"Text","Cette statue de la vierge Marie est une copie de la statue de Notre Dame de Lourdes, dans la grotte des apparitions. Cette copie fut durant un temps placée au niveau du maître autel avant d’être disposée ici, dans le fond de l’église. ",
				"img",Image5,
				"Title","Un peu d’histoire",
				"Text","C'est à Lourdes, en France, au diocèse de Tarbes, que la bienheureuse Vierge Marie se montra dix-huit fois à une jeune fille pauvre, candide et pieuse nommée Bernadette Soubirous.",
				"Text","Au cours de la première apparition, qui eut lieu le 11 février 1858, Notre-Dame apprit à la jeune fille à faire dignement son signe de Croix ; puis, déroulant le chapelet qu'Elle portait suspendu au bras, Elle l'encouragea, par son exemple, à la récitation du Saint Rosaire, qu'Elle recommanda à toutes ses apparitions. À la deuxième apparition, comme Bernadette craignait une ruse diabolique, elle jeta de l'eau bénite vers la Sainte Vierge qui se mit alors à sourire en lui montrant un visage bienveillant. Au cours de la troisième apparition, Elle dit à Bernadette : “ Voulez-vous me faire la grâce de venir ici pendant quinze jours ? ” Puis, Elle ajouta : “ Je ne vous promets pas de vous rendre heureuse dans ce monde mais dans l'autre. ”",
				"img",Image5,
				"Text","Par la suite, la Sainte Vierge l'exhorta à prier et à baiser la terre pour les pécheurs, à faire pénitence. Ensuite, elle lui ordonna de déclarer aux prêtres qu'on devait bâtir là une chapelle en son honneur pour y venir en procession. Puis, Elle lui ordonna de boire de l'eau de la source encore cachée mais qui allait bientôt jaillir, et de s'en laver.",
				"Text","Enfin, le jour de l'Annonciation, le 25 mars 1858, Bernadette ayant demandé avec insistance le nom de celle qui avait eu la bonté de lui apparaître tant de fois, la Vierge Marie, rapprochant les mains sur la poitrine et levant les yeux au ciel, répondit : « Je suis l'Immaculée Conception. » Elle confirmait ainsi la proclamation du dogme de l'Immaculée Conception que le bienheureux Pape Pie IX avait défini quatre ans auparavant, le 8 décembre 1854. Bernadette reporte à son curé les mots qu’elle a entendu et ce dernier  est alors très surpris d’entendre ce terme dans la bouche d’une jeune fille qui ne sait même pas lire.",
				"Title","Un lieu de pèlerinage",
				"img",Image5,
				"Text","Par suite de la renommée croissante des bienfaits que les fidèles recevaient à la grotte de Massabielle, on vit augmenter de jour en jour l'affluence des pèlerins. C'est pourquoi l'évêque de Tarbes, après l'examen juridique des faits, prononça un jugement reconnaissant le caractère surnaturel de l'apparition et permit le culte de la Vierge Immaculée dans la grotte. Bientôt la chapelle demandée fut bâtie et depuis ce jour, des foules innombrables de fidèles du monde entier viennent en pèlerinage prier la Sainte Vierge et accomplir des vœux. L'eau de la source miraculeuse rend la santé aux malades, accomplissant des miracles innombrables. Marie Immaculée est honorée par des prières publiques et des processions à la grotte. Les Pontifes romains, dans leur dévotion pour Notre-Dame de Lourdes, ont comblé ce sanctuaire de faveurs les plus précieuses.",
				"Title","Prière des malades à Notre Dame de Lourdes",
				"Priere","<br/>Ô Vierge Marie, Santé des malades toi qui as accompagné Jésus sur le chemin du Calvaire et qui es restée au pied de la croix où mourait ton Fils en participant intimement à ses souffrances, accueille nos souffrances et unis-les aux siennes pour que les graines semées durant le Jubilé continuent à produire des fruits abondants au cours des prochaines années.<br/><br/>Mère très tendre, nous nous adressons à Toi.<br/>Obtiens-nous de ton Fils de pouvoir bientôt retourner à nos occupations, après un complet rétablissement pour nous rendre utiles au prochain par notre travail.<br/>Pour l’heure, reste avec nous au temps de l’épreuve et aide-nous à redire chaque jour avec Toi notre oui, sûrs que Dieu saura tirer du mal un bien plus grand.<br/><br/>Vierge Immaculée, fais que les fruits de l’Année Jubilaire soient pour nous et pour ceux qui nous sont chers le gage d’un élan renouvelé dans notre vie chrétienne, afin que nous trouvions l’abondance de la miséricorde de Dieu dans la contemplation du Visage du Christ ressuscité, ainsi que la joie d’une communion plus totale avec les frères, prémices de la joie sans fin du Ciel. <br/><br/>Amen !",
			],
			done: false,
			
		},
		$left: "32%",
		$top: "92%",
	},
	{
		num: 18,
		infoPopup: {
			title: "Statue de Saint Jean Paul II",
			image: Image5,
			textarea: [
				"Title","Statue de Saint Jean Paul II:",
				"Text","Karol Wojtyla, né à Wadowice le 18 mai 1920, a été profondément marqué par les pertes familiales dans sa jeunesse, notamment le décès de sa mère à l'âge de 9 ans et la disparition de son frère aîné et de son père peu de temps après. Ces épreuves ont été entremêlées avec les tumultes de l'histoire polonaise, marquée par l'occupation nazie et le totalitarisme communiste.",
				"Text","Il s'engage dans des études de littérature polonaise tout en explorant le théâtre, avant de devenir prêtre en 1946. Devenu archevêque de Cracovie en 1964, il soutient activement le mouvement de jeunesse « Vie et Lumière », malgré les oppositions politiques. Devenu le pape Jean-Paul II, il a joué un rôle crucial dans la chute du pouvoir communiste en Pologne en 1989, en soutenant ouvertement le syndicat Solidarnosc et en organisant des rassemblements populaires qui ont contribué à galvaniser la résistance. Son pontificat a également été caractérisé par son engagement en faveur des droits de l'homme, de la paix et du dialogue interreligieux, reflétant son expérience personnelle de résistance à l'oppression.",
				"img",Image5,
				"Text","En tant que figure intellectuelle et spirituelle, Jean-Paul II a œuvré pour la mise en œuvre des enseignements du concile Vatican II, publiant le Catéchisme de l'Église catholique et créant les Journées Mondiales de la Jeunesse (JMJ), rassemblement réunissant jusqu’à 2 millions de jeunes chrétiens, tous les 4 ans.",
				"Text","Le 13 Mai 1981, le pape est touché de 2 balles lors d’un attentat. Remis miraculeusement de ses blessures, il ira rencontrer son agresseur en prison pour lui pardonner.",
				"Text","Le Pape Jean-Paul II accorda une dévotion toute particulière à la Sainte Vierge Marie, lui accordant même sa guérison miraculeuse. L’emplacement de sa statue en cette église, à côté de Notre Dame de Lourdes, n’est donc pas un hasard. Il est canonisé saint en 2014 par le Pape François.",
			],
			done: false,

		},
		$left: "12%",
		$top: "84%",
	},
	{
		num: 19,
		infoPopup: {
			title: "La vision de saint Jérôme d’Alphonse Angelin",
			image: Image5,
			textarea: [
				"Title","Le tableau:",
				"Text","La vision de saint Jérôme est une commande de l’Etat en 1842. Elle se trouve juste au-dessus des confessionnaux, lieu où les chrétiens rencontrent les prêtres pour confesser leurs péchés, se placer sous la miséricorde et la bonté de Dieu et obtenir son pardon.",
				"Text","Elle est l’œuvre d’Alphonse Angelin (Aix 1814 – ap. 1860) qui fut un élève de Paul Delaroche. Il est décrit en ces mots par l’historienne aixoise Claude Tricoire:",
				"Text","“Espace étrange, tension gestuelle exacerbée, vision fantastique du savant exégète de la Bible ou plutôt cauchemar de glace d’un romantisme refroidi. Les citations appliquées au Jugement dernier de Michel-Ange augmentent le malaise. On est loin du classicisme du Sacrement du Mariage peint par le même artiste pour le baptistère de Saint-Sauveur en 1846.”",
				"Text","Saint Jérôme a vécu au IVe siècle après JC. C’est lui qui traduit la Bible en latin pour que tout le monde la comprenne. On connaît aussi de lui, la fameuse histoire où il enlève une épine de la patte d’un lion, et celui-ci lui restera fidèle jusqu’à la fin de sa vie. Dans cette peinture, saint Jérôme est dans le désert où il entend sonner une trompette (en haut), et si on regarde bien, en bas à gauche on aperçoit son fidèle ami le lion.",
				"Text","Les représentations de ce saint sont nombreuses dans cette église du Saint Esprit. Vous pourrez retrouver sa figure sur un des vitraux mais aussi sur une des 4 statues bordant le chœur, au fond à gauche. En effet, c’est église a été placée sous le patronage du Saint-Esprit, mais également de Saint Jérôme en référence au cardinal Jérôme de Grimaldi qui avait beaucoup agit pour la création de cette paroisse et de cette église.",
				"Title","La vie du Saint:",
				"Text","Né en Vénétie en 347, Saint Jérôme étudie le grec et l’hébreu. Baptisé à l’âge de 19 ans, il part en pèlerinage en Terre Sainte, puis se retire dans le désert de Syrie où il écrit la vie de Saint Paul ermite. A son retour à Rome, il révise la traduction de la Bible d’après l’original en hébreu et de la version grecque. Sa traduction porte le nom de Vulgate.Saint Jérôme occupe une place importante dans la réforme de l’église catholique après le Concile de Trente.",
				"img",Image5,
				"Text","Son histoire, en elle-même, ne donne pas beaucoup matière aux peintres. C’est surtout grâce à la Légende dorée, que certains thèmes de sa vie sont devenus populaires comme la flagellation par les anges, les tentations dans le désert, et surtout, l’histoire du lion apprivoisé. Cette légende explique comment saint Jérôme soigne un lion blessé à la patte par une épine, et la reconnaissance que lui voue l’animal jusqu’à la fin de sa vie. L’épisode relaté dans ce tableau, à en juger la présence de la trompette dans la partie supérieure, pourrait correspondre à l’illustration d’une lettre apocryphe du saint qui écrit : « Que je veille ou que je dorme, je crois toujours entendre la trompette du Jugement. ».",
			],
			done: false,

		},
		$left: "5%",
		$top: "73%",
	},
	{
		num: 20,
		infoPopup: {
			title: "Statue de Sainte Thérèse",
			image: Image5,
			textarea: [
				"Title","Son histoire:",
				"Text","Marie-Françoise-Thérèse Martin est née le 2 Janvier 1873. De caractère joyeux mais parfois impatient et colérique, elle devient une petite fille épanouie au sein de sa famille. Mais le 28 Août 1877, sa mère Zélie meurt des suites d’un cancer du sein. Thérèse a quatre ans. Elle souffre énormément de la perte de sa mère et choisit sa sœur Pauline comme « seconde Maman ». Très marquée, son caractère se modifie. D’une profonde sensibilité, elle pleure facilement.",
				"img",Image5,
				"Text","En 1882, sa « seconde Maman » Pauline, entre au Carmel de Lisieux. A nouveau ébranlée psychologiquement Thérèse tombe gravement malade quelques mois plus tard. Toute sa famille prie le Ciel pour sa guérison. Et le 13 Mai 1883, Thérèse « voit » le sourire de la statue de la Vierge Marie. Elle est guérie. ",
				"Text","Dès son enfance Thérèse souhaite devenir religieuse. En 1887, elle part en pèlerinage en Italie, accompagnée de son père afin d’obtenir la permission du Pape Léon XIII d’entrer au Carmel, malgré son jeune âge. Durant ce pèlerinage, Thérèse approfondit sa foi. Elle réalise qu’elle ne doit pas satisfaire sa volonté personnelle mais la volonté de Dieu. Sa vocation se fortifie et elle développe une certaine réflexion sur la vanité du monde.",
				"Text","Le 9 Avril 1888, Thérèse entre au Carmel. L’année suivante elle porte l’habit de Carmélite et prend le nom de sœur Thérèse de l’Enfant Jésus et de la Sainte Face. En 1894, à la demande de Mère Agnès (Pauline), elle commence à rédiger ses souvenirs d’enfance qu’elle continuera jusqu’en 1897. « Histoire d’une âme » sera publiée en 1898. En Avril 1896, Thérèse a une crise d’hémoptysie. Elle meurt d’une tuberculose le 30 Septembre 1897. Elle a 24 ans. ",
				"Title","Ses écrits",
				"Text","« Je veux passer mon Ciel à faire du bien sur la terre jusqu’à la fin du monde » ; cette promesse de Thérèse de l’Enfant-Jésus et de la Sainte-Face s’accomplit chaque jour. Un an après sa mort paraît Histoire d’une âme, un ouvrage composé à partir des manuscrits souvenirs, de quelques poésies et autres écrits de la jeune carmélite. Tiré à 2 000 exemplaires, ce livre doit rapidement être réédité. Il devient un best-seller diffusé dans le monde entier.",
				"img",Image5,
				"Text","De bouche à oreille, l’histoire de la petite Thérèse se répand ainsi que sa sainteté. Des missionnaires français, des personnes en quête de guérison affluent sur sa tombe dans le cimetière municipal à Lisieux. Le 26 mai 1908, une fillette aveugle de naissance y est miraculeusement guérie. Cette dévotion populaire et le récit des grâces obtenues par l’intercession de Thérèse de Lisieux accélèrent l’ouverture de son procès de béatification. Béatifiée en 1923, elle est canonisée le 17 mai 1925, et proclamée patronne des missions en 1927 par le pape Pie XI.",
				"Text","Le 19 octobre 1997, le pape Jean-Paul II la proclame également Docteur de l’Église. Après sainte Catherine de Sienne et sainte Thérèse d’Avila, elle est la troisième femme à accéder à ce titre, et la plus jeune ! L’Église reconnaît la portée théologique de la petite voie de Thérèse. À l’issue de la messe de clôture des Journées mondiales de la Jeunesse en 1997 à Paris, Jean-Paul II déclarait ainsi : « L’enseignement de Thérèse, véritable science de l’amour, est l’expression lumineuse de sa connaissance du mystère du Christ et de son expérience personnelle de la grâce ; elle aide les hommes et les femmes d’aujourd’hui, et elle aidera ceux de demain, à mieux percevoir les dons de Dieu et à répandre la Bonne Nouvelle de son Amour infini. »",
			],
			done: false,

		},
		$left: "24%",
		$top: "71%",
	},
	{
		num: 21,
		infoPopup: {
			title: "La croix de mission",
			image: Image5,
			textarea: [
				"Title","La croix de mission:",
				"Text","La grande croix commémorative de la Mission prêchée dans la paroisse par le Père Bridaine (1701-1767) en 1750 provient de l’atelier Jean Frochot. Érigée d’abord hors de la ville, elle a été placée ensuite dans cette église, au-dessus d’un autel contre le mur ouest. Sa hauteur est de 4 mètres.",
				"img",Image5,
				"Text","Une mission paroissiale est une retraite spirituelle dans la vie courante pour les communautés paroissiales, particulièrement dans les paroisses de campagnes. Durant plusieurs jours, ou même toute une semaine, elle consiste en une série d’exercices spirituels ponctués de prêches et conférences religieuses données par un groupe de prédicateurs venus de l’extérieur et se terminant par une grande célébration eucharistique. Souvent une ‘croix’, ou large crucifix, était érigée en un lieu public comme ‘mémorial’ de la mission.",
			],
			done: false,

		},
		$left: "5%",
		$top: "59.5%",
	},
	{
		num: 22,
		infoPopup: {
			title: "Le Retable du Parlement",
			image: Image5,
			textarea: [
				"Title","Le Retable du Parlement:",
				"Text","Le retable du Parlement est la pièce maîtresse des peintures de l’église du Saint-Esprit. Il a été peint entre 1521 et 1525 pour la chapelle du Parlement dans l’ancien palais comtal. Ce palais, qui se situait auparavant place des prêcheurs à la place actuelle du palais de Justice, a été détruit à la fin du règne de Louis XVI. Le retable, à l’origine, est un tableau qui se trouve sur l’autel où la messe est célébrée. En effet, le mot même de retable évoque son positionnement en retrait de la table d’autel, constituant l’horizon visuel et théologique vers lequel tendent le prêtre et les fidèles pendant la célébration.",
				"Text","Ici, le retable est en trois parties, on parle de triptyque. Lors des temps liturgiques d’attente des grandes fêtes: la Carême avant Pâques et l’Avent avant Noël, il est d’usage de le fermer en rabattant les volets sur le panneau central. Cela permet de laisser apparaître les parties plus sobres, peintes en grisaille, pendant ces temps d’introspection et de pénitence. Aussi appelé triptyque de l’Assomption, il représente des scènes de la vie de la Vierge Marie et avec celle du Christ, son enfant.",
				"Title","Le panneau central:",
				"img",Image5,
				"Text","Au centre, le mystère de l’Assomption est représenté avec Marie qui est élevée au ciel, corps et âme, entourée d’anges. Ce panneau est sans doute l’œuvre de Manuel Lomellin, dit Manuel le Génois. Les douze apôtres regardent dans des directions différentes, invitant à accueillir l’universalité de cet événement. Pour trouver l’inspiration des douze visages,  le peintre est resté pragmatique: il a réalisé les portraits de douze membres du Parlement, le président et 11 conseillers, qui siégeaient autour des années 1520. Le président du Parlement, Gervais de Beaumont, est vêtu de rouge et tout proche du tombeau. A sa gauche, il y a 4 conseillers clercs. A sa droite, ce sont sept laïcs. Un personnage semble ajouté postérieurement; blême, pratiquement caché.  Il pourrait s’agir de Jean Maynier, baron d’Oppède qui dirigea en 1545 l’expédition contre les Vaudois du Lubéron. Dans le fond du tableau, vous pouvez apercevoir Sainte-Victoire, la montagne plus tard magnifiée par Cézanne. Ce que vous avez sous les yeux est ainsi vraisemblablement, la 2ème représentation la plus ancienne de notre mont venturi, comme on dit en provençal.",
				"Title","Les panneaux latéraux:",
				"Text","Pour les autres scènes, vous pouvez admirer la Nativité et l’Adoration des mages au moment de la naissance de Jésus dans la crèche, à l’origine de la fête de Noël. De l’autre côté, l’Ascension, quand Jésus monte au ciel après sa résurrection. Et la Pentecôte avec l’effusion de l’Esprit Saint.",
				"Text","Quant à la scène de l’Annonciation, peint en grisaille sur le revers du retable, elle montre ce moment crucial où l’Ange Gabriel annonce à la Vierge Marie qu’elle va enfanter Jésus, le fils de Dieu, et que cet enfant sera sauveur de l’humanité. Cette partie picturale-là est d’une main inconnue.",
				"img",Image5,
				"img",Image5,
				"img",Image5,
				"img",Image5,
				"img",Image5,
			],
			done: false,

		},
		$left: "16%",
		$top: "40%",
	},
	{
		num: 23,
		infoPopup: {
			title: "La présentation de la Vierge",
			image: Image5,
			textarea: [
				"Title","La présentation de la Vierge:",
				"Text","La présentation de la Vierge au Temple de François Marot (Paris 1667-1719),  un disciple De La Fosse, admirateur de Rubens.",
				"Text","Composition ample et légère à laquelle la grâce et la tendresse des figures confèrent un caractère de joie tendre et sereine. Cette toile proviendrait de Versailles. Louis XVIII en fit don à la ville d’Aix en 1821, sur le conseil du comte Auguste de Forbin, alors directeur général des Musées Royaux.",
				"Title","Dans la tradition de l’Eglise:",
				"Text","La Présentation de Marie est une fête chrétienne célébrée le 21 novembre. La tradition nous apprend que, Anne et Joachim, les parents de Marie, la présentèrent au temple dès l’âge de trois ans pour la consacrer à Dieu. Cet épisode de la vie de Marie ne se trouve pas dans les quatre évangiles, mais dans un livre apocryphe, le « Protévangile de Jacques ». Le message spirituel que nous laisse cet évènement est que, depuis toujours, le cœur de Marie est entièrement dédié à Dieu seul.",
			],
			done: false,

		},
		$left: "6%",
		$top: "36%",
	},
	{
		num: 24,
		infoPopup: {
			title: "La chapelle à Saint Joseph",
			image: Image5,
			textarea: [
				"Title","La chapelle à Saint Joseph:",
				"Text","Cette chapelle est dédiée au père adoptif de Jésus: Saint Joseph. Deux pièces lui sont dédiées: une statue et un tableau. Saint Joseph le charpentier, patron des travailleurs, est souvent représenté avec des lys blancs, symbole de chasteté.",
				"Title","La mort de saint Joseph (1783)",
				"Text","A gauche de la chapelle, se trouve une toile représentant la mort de saint Joseph. Cette toile de l’aixois Antoine-Gabriel Goyrand (1754-1826) fut vandalisée en 1977. Malgré sa restauration dans l’atelier des musées de Marseille, il est toujours possible de voir une séparation à l’endroit où elle avait été découpée. Après la restauration elle retrouva sa place dans la chapelle de Saint Joseph pour laquelle elle fut certainement peinte.",
				"img",Image5,
				"Text","Puisque la figure de Saint Joseph n’intervient jamais, ni n’est nommée pendant la prédication de Jésus – alors qu’on parle de Marie et de son intervention, comme dans l’épisode des noces de Cana – la plupart des experts bibliques pensent que Joseph est mort avant la crucifixion de Jésus. Cela est confirmé également par le fait que le père putatif de Christ ne soit pas présent sous la croix au moment de la mort de Jésus et que Jésus en personne confie Marie à Saint Jean apôtre, pour qu’il l’accueille chez lui.",
				"Text","Joseph mourut ainsi, en compagnie de Jésus et de Marie, soigné par la famille la plus aimante qui soit existée sur Terre. En raison de cette mort douce et bonne, en compagnie de deux personnes si saintes et parfaites, Saint Joseph est considéré comme le saint de la bonne mort, invoquée pour accompagner ceux qui sont proches de la mort et demander assistance au moment du passage à une meilleure vie.",
			],
			done: false,

		},
		$left: "14%",
		$top: "19%",
	},
	{
		num: 25,
		infoPopup: {
			title: "La Chaire",
			image: Image5,
			textarea: [
				"Title","La Chaire:",
				"Text","La chaire est l’endroit depuis lequel le prêtre prêchait ses homélies. Il permet de porter la voix naturellement dans toute l’église, à une époque où les systèmes de sonorisation n’existaient pas.",
				"Text","Un croisement de 2 époques:",
				"SubText","La chaire est composée de 3 parties: la cuve, le dossier et la partie supérieure appelée abbat-voix qui servait à porter le plus loin possible la voix du prêtre. Ce qui frappe au premier regard, c’est le manque de cohérence de cet édifice.",
				"SubText","Cette chaire mêle en effet deux périodes différentes. A l’origine elle était totalement en bois (œuvre du sculpteur Esprit Routier dont on a retrouvé la facture de 1740). La cuve et la rampe de bois furent enlevées et remplacées 23 ans plus tard par une cuve en marbre et un escalier en ferronnerie, le tout offert par un riche paroissien , M. Bonnaud. On peut retrouver cette inscription au sommet de la rampe:  “Bonnaud, tailleur, a fait ce don, 1763”.",
				"Text","Les symboles:",
				"SubText","Sur l’abbat voix, se trouvait la colombe aux ailes étendues entourée de rayons et de nuages, signe du saint esprit et allusion au baptème du christ. Aujourd’hui disparue, mais dont l’emplacement est encore visible, elle est  entourée de deux palmiers, les arbres bibliques symbolisant l’arbre de Vie.“ Le juste grandira comme le palmier” (Psaume 91).",
				"img",Image5,
				"Text","Sur la rampe d’accès qui fait face à l’allée centrale, nous retrouvons un cœur surmonté de flammes, rappel de la dévotion au Sacré Coeur de Jésus. Cette dévotion a été introduite en France par sainte Marguerite Marie après les apparitions de Paray le Monial, en Bourgogne, de 1673 à 1675. Il faut s’approcher pour admirer la richesse des matériaux, la finesse et l’élégance de la décoration de cette chaire.",
				"img",Image5,
				"Text","En face de la chaire était souvent disposé un crucifix afin de rappeler au prêcheur la raison de sa présence en chaire. Ici, point de crucifix sculpté, c’est le tableau de Dandré-Bardon qui en fait office.",
			],
			done: false,

		},
		$left: "32%",
		$top: "52%",
	},
	{
		num: 26,
		infoPopup: {
			title: "La Tribune d’Orgue",
			image: Image5,
			textarea: [
				"Title","Un orgue sur-mesure?",
				"Text","On pourrait penser que cet orgue a été fait spécialement pour l’église, son volume sonore semble parfaitement adapté à l’envergure de l’édifice. Or il date du XVIIe siècle, c'est-à dire une centaine d’années environ avant la pose de la première pierre du Saint Esprit en 1706. Il a été monté initialement pour la chapelle des grands carmes d’aix. Il possédait à cette époque 24 jeux: 16 au Grand-orgue, 7 au positif, et 1 au pédalier.",
				"Text","Réalisé par le facteur d’orgue marseillais, d’origine flamande, Charles Royer en 1668, le buffet a été effectué par le menuisier aixois Adolphe Dumas selon les plans du sculpteur Jean-Claude Rambot (1618-1694). La chapelle des Carmes fut détruite pendant la Révolution et l’orgue attribué à l’église du Saint Esprit en 1791.",
				"Text","C’est un orgue exceptionnel, tant du point de vue esthétique que musical. Il est extrêmement grand : il mesure pas moins de 8m80 de hauteur pour 8m70 de largeur. Il y a sur la façade 53 tuyaux, mais à l’intérieur du buffet d’orgue il y en a 1728, soit un total de 1 781 tuyaux mesurant de quelques centimètres jusqu’à 5 mètres.",
				"Title","Les ornements :",
				"Text","Examinons ce buffet en le regardant de bas en haut:",
				"Text","Si l’on examine le buffet on remarque qu’au milieu, et séparés du buffet, se trouvent deux éléments ne faisant pas partie du mobilier primitif et placés pour dissimuler l’organiste qui tourne le dos à l’assemblée. Sur ce panneau inférieur (XVIIIè siècle) se trouve un médaillon représentant sainte Catherine de Sienne, religieuse dominicaine (1347-1380).",
				"img",Image5,
				"Text","Le fronton qui le surmonte est orné d’un écu portant un lion héraldique. Autour de cet écu se trouve une corde munie de trois nœuds comme en portent les religieux de l’ordre de Saint François d’Assise. Ces trois nœuds symbolisent les vœux religieux de pauvreté, de chasteté et d’obéissance. ",
				"img",Image5,
				"Text","Sur les 75 tuyaux visibles en façade, 53 font partie de l’ensemble sonore. Les 22 autres, placés en haut des deux plates faces encadrant la tourelle centrale, sont factices: ils ne sont la que pour la décoration (les facteurs d’orgues les appellent méchamment les “chanoines”). Dix colonnes (cannelées) corinthiennes séparent tourelles et plates-formes. Ces mêmes plateformes sont décorées d’Anges et de chérubins, motifs du courant maniériste ici parfaitement illustré par la cariatide centrale. ",
				"img",Image5,
				"img",Image5,
			],
			done: false,

		},
		$left: "42%",
		$top: "72%",
	},
	{
		num: 100,
		infoPopup: {
			title: "Vitrail de la Pentecôte",
			image: Image5,
			textarea: [
				"Title","Vitrail de la Pentecôte:",
				"Text","C’est le peintre Louis André, d’Aix (1852-1938), qui réalisa en 1882, à la demande du chanoine Emery, les sept verrières polychromes de la nef et les vitraux du chœur : Pentecôte, saint Jérôme, saint Maximin, évêque et du transept : saint Antoine et saint Paul ermites et la communion de la Vierge.",
			],
			done: false,
		},
		$left: "49%",
		$top: "0%",
	},
	{
		num: 200,
		infoPopup: {
			title: "Vitrail de Saint Jérôme",
			image: Image5,
			textarea: [
				"Title","Vitrail de Saint Jérôme:",
				"Text","Saint Jérôme est le saint patron de cette église. Ce patronage a été choisi pour rendre hommage au cardinal Jérôme de Grimaldi, qui a beaucoup oeuvré pour la création de cette paroisse.",
				"Text","Saint Jérôme est un grand traducteur de la Bible du Ve siècle, au tempérament fort. Il est souvent représenté avec un lion accroupi qui représente les passions vaincues, et le séjour du saint au désert, et fait aussi référence à l’anecdote selon laquelle il aurait retiré une épine du pied d’un lion. Il vivait dans la pensée de l'imminence de la venue définitive du Christ, qu’on appelle le jugement dernier, annoncée par les trompettes dans le dernier livre de la bible. Vous retrouverez la représentation du patron de cette église sur une des statues du choeur et sur un immense tableau au-dessus des confessionnaux.",
			],
			done: false,
		},
		$left: "0%",
		$top: "20%",
	},
	{
		num: 300,
		infoPopup: {
			title: "Vitrail de l'Évêque Saint Maximin",
			image: Image5,
			textarea: [
				"Title","Vitrail de l'Évêque Saint Maximin:",
				"Text","Saint Maximin d'Aix est, selon la tradition catholique, le premier évêque d'Aix-en-Provence au 1er siècle, sans doute à partir de 45. ",
				"Text","Il débarque en Provence en compagnie de sainte Marie Madeleine. Avec Saint Lazare à Marseille et les Sainte Marie Jacobée et Salomée en Camargues, ce seront les premiers chrétiens à évangéliser ce que nous appelons aujourd’hui la France. c'est lui qui inhume la sainte, dans la Tradition provençale, et se fait ensuite inhumer à ses côtés. Leurs tombeaux deviennent un lieu de culte et de pèlerinage important du christianisme médiéval connu aujourd’hui sous le nom de la Sainte Baume.",
			],
			done: false,
		},
		$left: "100%",
		$top: "19%",
	},
	{
		num: 400,
		infoPopup: {
			title: "Vitrail de Saint Antoine et Saint Paul ermites",
			image: Image5,
			textarea: [
				"Title","Vitrail de Saint Antoine et Saint Paul ermites:",
				"Text","Saint Antoine ou Saint Thomas l’Ermite ? ou saint Antoine rendant visite à saint Paul l’Ermite ?",
				"Text","Antoine le Grand, également connu comme Antoine d’Égypte, Antoine l’Ermite, ou encore Antoine du désert, est un moine considéré comme le père du monachisme chrétien. Il serait né vers 251 et mort vers 356 à l’âge de 105 ans, entre les bras de ses deux disciples, Macaire l’Ancien ou Macaire d’Égypte et Amathias.  Il est fêté sous le nom de saint Antoine le 17 janvier.",
				"Text","Saint Paul Ermite, premier ermite selon saint Jérôme est l’une des figures fondatrices du monachisme, avec saint Antoine. Il semblerait que le premier récit de sa vie soit dû justement à saint Jérôme, mais des doutes existent quant à son historicité. Jacques de Voragine, dans sa Légende dorée, lui consacre un chapitre.",
			],
			done: false,
		},
		$left: "0%",
		$top: "42%",
	},
	{
		num: 500,
		infoPopup: {
			title: "Vitrail de la Communion de la Sainte Vierge",
			image: Image5,
			textarea: [
				"Title","Vitrail de la Communion de la Sainte Vierge:",
			],
			done: false,
		},
		$left: "100%",
		$top: "34%",
	},
]