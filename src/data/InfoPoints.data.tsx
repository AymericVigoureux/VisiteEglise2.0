import { InfoPointProps } from "../components/InfoPoint/InfoPoint"
import Image1 from '../img/bubble.jpg'
import Image2 from '../img/image-attractive.jpg'
import Image3 from '../img/forest.jpg'

export const shortPoints: InfoPointProps[] = [
	{
		num: 1,
		infoPopup: {
			title: "Contexte et architecture",
			done: true,
			image: Image1,
			video: "https://youtube.com/embed/nAU6g6trLqg?autoplay=0",
			description: "embed/Ceci decrit en quelques mots ce qu'on va savoir sur le truc en question mais voila apres tu connais on ecrit des trucs en fonction de ce qu'on pense, on ecrit a l'aide de ses connaissances et ca c'est vraiment super"
		},
		$left: "48.5%",
		$top: "98%",
	},
	{
		num: 2,
		infoPopup: {
			title: "Le Choeur",
			description: "station 2",
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