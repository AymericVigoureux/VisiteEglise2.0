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
			textarea:["Title", "Introduction:",
			"Text","Soyez les bienvenus dans l’église du Saint-Esprit, une des 4 églises historiques du centre-ville d’aix-en-provence.","Text","Nous vous proposons une visite de l’église du Saint-Esprit à partir de son histoire : car derrière sa façade lisse,claire et calme et sous l’apparente simplicité de l’intérieur, elle cache aux yeux du visiteur et du fidèle d’aujourd’hui, une histoire mouvementée. Par-delà procédures et rivalités, cette histoire témoigne de la piété et de la persévérance de fidèles, clercs comme laïcs. Une histoire de tous les hommes et de tous les temps qu’expriment justement le dépouillement de l’architecture, l’abondance et la qualité du mobilier","Title","L’installation de la paroisse","Text","Pour comprendre son histoire, il faut remonter au XIIème siècle, en plein Moyen Age. Sur ces lieux, s’implante un hôpital tenu par les hospitaliers de l’Ordre du Saint-Esprit qui accueille les enfants trouvés, en face du couvent des augustins dont le clocher fait encore face à notre église actuelle.","img",Image1,"Text","A la fin du XVIème siècle, la population à Aix-en-Provence ne cesse de croître, un nouveau quartier est créé en 1583, appelé Villeverte. Les habitants de cette partie de la ville expriment le besoin d’avoir un lieu de culte plus proche de chez eux car ils dépendent de la paroisse de la Madeleine à l’autre bout de la ville. La chapelle de l'hôpital sert provisoirement d’église paroissiale à partir de 1670. Puis sur l’emplacement de l’hôpital, une nouvelle église se construit: sa première pierre est posée en 1706.","Text","Après de nombreux soucis d’argent et de désaccords entre notables de la cité, la construction de l’église est portée à son achèvement en 1726. Elle est placée sous le vocable de Saint Jérôme, en mémoire du cardinal Jérôme de Grimaldi, archevêque d’Aix, qui avait érigé la paroisse 56 ans auparavant. C’est sous ce nom que l’église est consacrée un siècle plus tard, le 24 octobre 1806. Néanmoins, les habitants continueront à parler de l’église du Saint-Esprit jusqu’à nos jours.","Title","Personnages importants","Text","Des personnages illustres sont passés par cette église.  Parmi eux:","SubText"," Le comte de Mirabeau, qui se marie dans cette église en juin 1772 ","img",Image1,"SubText","Mgr de Miollis, né en cette paroisse, inspira à Victor Hugo le personnage de Mgr Myriel dans Les Misérables.","SubText"," Au XIXème siècle, le chanoine Emery, prêtre du diocèse d’Aix devenu curé du Saint Esprit, était très connu pour ses sermons en provençal qui attiraient beaucoup de monde. Deux plaques de marbre lui rendent hommage dans l’église, sur la façade et sur un pilier du chœur. C’est aussi lui qui fit construire la sacristie, mettre des vitraux aux fenêtres.","SubText"," Le pape Pie VII, chef de l’église catholique, par deux fois s’est rendu à Aix-en-Provence d’abord comme prisonnier en 1809 puis en 1814 en se rendant vers Rome après sa captivité par Napoléon.","SubText","Même une reine d’Espagne en exil viendra y entendre la messe en 1840.","Title","Façade et Architecture","Text","L’architecture baroque de l’église du Saint Esprit demeure très modeste. La façade de l’édifice est d’ailleurs assez sobre. Effectivement, lors de sa construction, l’architecte doit composer avec une amputation  d’un tiers du budget prévu. Et l’espace disponible est contraint entre la rue Espariat et  la rue des Tanneurs. Ainsi, le saint esprit a été construit sur un plan rectangulaire pour optimiser la place qui lui avait été offerte.","img",Image1,"Text","Touche locale, le clocher est coiffé de quatre « chapeaux de gendarme », motif que l’on rencontre souvent dans les fermes ou bastides provençales. En face de l’église se trouvait le couvent des Augustins qui a été détruit à la Révolution mais dont subsiste le clocher de la chapelle, datant du milieu du XVème siècle."],
			description: ["Bienvenue à l’église du Saint-Esprit, un joyau historique niché au cœur du centre-ville d’Aix-en-Provence. Venez découvrir cette église fascinante, dont la construction a commencé en 1706 sur les fondations d’un ancien hôpital médiéval, et qui a été consacrée en 1806. Plongez dans son histoire riche et tumultueuse, marquée par des figures illustres telles que le comte de Mirabeau, Mgr de Miollis, et même le pape Pie VII. Admirez l’architecture intérieure baroque, ingénieusement conçue pour maximiser l’espace malgré une façade sobre due à des contraintes budgétaires. Aujourd'hui, l'église du Saint-Esprit est un lieu dynamique, particulièrement apprécié des étudiants. Rejoignez-nous pour une visite captivante et laissez-vous émerveiller par ce trésor d’Aix-en-Provence. ","5 vidéos vous permettront de découvrir l’histoire de l’église et de ses œuvres. Commençons sans plus tarder par le contexte de sa construction et son architecture…"]
		},
		$left: "52%",
		$top: "98%",
	},
	{
		num: 2,
		infoPopup: {
			title: "La Nef",
			image: Image5,
			textarea: ["Title","La Nef","Text","En pénétrant dans l’église, et en vous avançant dans la “nef”, c'est-à dire l’allée centrale, vous faites le chemin que font les croyants qui viennent communier. En remontant la nef, le fidèle se dirige vers le chœur, qui est la partie la plus sacrée de l’église, avec ses éléments les plus précieux.","Text","Résolument moderne : les lignes épurées, les arcs  en plein-cintres. Laurent Vallon joue avec l’espace, créant de nombreuses illusions : les nefs latérales sont écrasées par la nef principale pour donner une impression d’espace, et une corniche fait le tour de tout l’intérieur, unifiant les différents éléments de l’église en assurant une continuité.","img",Image1,"Text","Très riche, mais hétéroclite, la décoration de l’intérieur de l’église du Saint-Esprit s’est étoffée au cours de la Révolution et de son histoire paroissiale par de nombreux dons de riches commerçants, mais aussi par les offrandes de plus modestes fidèles allant parfois jusqu’à offrir leurs parures pour décorer le mobilier liturgique."],
			done: false,

		},
		$left: "55%",
		$top: "68%",
	},
	{
		num: 3,
		infoPopup: {
			title: "La Nef",
			image: Image5,
			textarea: [],
			done: false,

		},
		$left: "65%",
		$top: "51.5%",
	},
	{
		num: 4,
		infoPopup: {
			title: "La Nef",
			image: Image5,
			textarea: [],
			done: false,

		},
		$left: "49%",
		$top: "30%",
	},
	{
		num: 5,
		infoPopup: {
			title: "La Nef",
			image: Image5,
			textarea: [],
			done: false,

		},
		$left: "65%",
		$top: "24%",
	},
	{
		num: 6,
		infoPopup: {
			title: "La Nef",
			image: Image5,
			textarea: [],
			done: false,

		},
		$left: "49%",
		$top: "14%",
	},
	{
		num: 7,
		infoPopup: {
			title: "La Nef",
			image: Image5,
			textarea: [],
			done: false,

		},
		$left: "24%",
		$top: "46%",
	},
	{
		num: 8,
		infoPopup: {
			title: "La Nef",
			image: Image5,
			textarea: [],
			done: false,

		},
		$left: "84%",
		$top: "19%",
	},
	{
		num: 9,
		infoPopup: {
			title: "La Nef",
			image: Image5,
			textarea: [],
			done: false,

		},
		$left: "84%",
		$top: "36%",
	},
	{
		num: 10,
		infoPopup: {
			title: "La Nef",
			image: Image5,
			textarea: [],
			done: false,

		},
		$left: "94%",
		$top: "40%",
	},
	{
		num: 11,
		infoPopup: {
			title: "La Nef",
			image: Image5,
			textarea: [],
			done: false,

		},
		$left: "74%",
		$top: "56%",
	},
	{
		num: 12,
		infoPopup: {
			title: "La Nef",
			image: Image5,
			textarea: [],
			done: false,

		},
		$left: "94%",
		$top: "59%",
	},
	{
		num: 13,
		infoPopup: {
			title: "La Nef",
			image: Image5,
			textarea: [],
			done: false,

		},
		$left: "74%",
		$top: "70.5%",
	},
	{
		num: 14,
		infoPopup: {
			title: "La Nef",
			image: Image5,
			textarea: [],
			done: false,

		},
		$left: "94%",
		$top: "72%",
	},
	{
		num: 15,
		infoPopup: {
			title: "La Nef",
			image: Image5,
			textarea: [],
			done: false,

		},
		$left: "82%",
		$top: "92%",
	},
	{
		num: 16,
		infoPopup: {
			title: "La Nef",
			image: Image5,
			textarea: [],
			done: false,

		},
		$left: "66%",
		$top: "92%",
	},
	{
		num: 17,
		infoPopup: {
			title: "La Nef",
			image: Image5,
			textarea: [],
			done: false,

		},
		$left: "32%",
		$top: "92%",
	},
	{
		num: 18,
		infoPopup: {
			title: "La Nef",
			image: Image5,
			textarea: [],
			done: false,

		},
		$left: "12%",
		$top: "84%",
	},
	{
		num: 19,
		infoPopup: {
			title: "La Nef",
			image: Image5,
			textarea: [],
			done: false,

		},
		$left: "5%",
		$top: "73%",
	},
	{
		num: 20,
		infoPopup: {
			title: "La Nef",
			image: Image5,
			textarea: [],
			done: false,

		},
		$left: "24%",
		$top: "71%",
	},
	{
		num: 21,
		infoPopup: {
			title: "La Nef",
			image: Image5,
			textarea: [],
			done: false,

		},
		$left: "5%",
		$top: "59.5%",
	},
	{
		num: 22,
		infoPopup: {
			title: "La Nef",
			image: Image5,
			textarea: [],
			done: false,

		},
		$left: "16%",
		$top: "40%",
	},
	{
		num: 23,
		infoPopup: {
			title: "La Nef",
			image: Image5,
			textarea: [],
			done: false,

		},
		$left: "5%",
		$top: "36%",
	},
	{
		num: 24,
		infoPopup: {
			title: "La Nef",
			image: Image5,
			textarea: [],
			done: false,

		},
		$left: "14%",
		$top: "19%",
	},
	{
		num: 25,
		infoPopup: {
			title: "La Nef",
			image: Image5,
			textarea: [],
			done: false,

		},
		$left: "32%",
		$top: "52%",
	},
	{
		num: 26,
		infoPopup: {
			title: "La Nef",
			image: Image5,
			textarea: [],
			done: false,

		},
		$left: "42%",
		$top: "72%",
	},
]