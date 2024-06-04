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

export const longPoints = [
	{

	}
]