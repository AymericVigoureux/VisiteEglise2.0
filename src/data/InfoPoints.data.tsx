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
			done: true,
			image: Image1,
			video: "https://youtube.com/embed/nAU6g6trLqg?autoplay=0",
			description: 'Bienvenue à l\’église du Saint-Esprit, un joyau historique niché au cœur du centre-ville d\’Aix-en-Provence. Venez découvrir cette église fascinante, dont la construction a commencé en 1706 sur les fondations d\’un ancien hôpital médiéval, et qui a été consacrée en 1806. Plongez dans son histoire riche et tumultueuse, marquée par des figures illustres telles que le comte de Mirabeau, Mgr de Miollis, et même le pape Pie VII. Admirez l\’architecture intérieure baroque, ingénieusement conçue pour maximiser l\’espace malgré une façade sobre due à des contraintes budgétaires. Aujourd\'hui, l\'église du Saint-Esprit est un lieu dynamique, particulièrement apprécié des étudiants. Rejoignez-nous pour une visite captivante et laissez-vous émerveiller par ce trésor d’Aix-en-Provence. 5 vidéos vous permettront de découvrir l\’histoire de l\’église et de ses œuvres. Commençons sans plus tarder par le contexte de sa construction et son architecture…'
		},
		$left: "48.5%",
		$top: "98%",
	},
	{
		num: 2,
		infoPopup: {
			title: "Le Choeur",
			description: "test 2",
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
			done: true,

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
			done: true,

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
			done: true,

		},
		$left: "55%",
		$top: "60%",
	},
]

export const longPoints = [
	{

	}
]