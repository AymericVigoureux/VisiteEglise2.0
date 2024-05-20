import { InfoPointProps } from "../components/InfoPoint/InfoPoint"
import Image1 from '../img/bubble.jpg'
import Image2 from '../img/image-attractive.jpg'
import Image3 from '../img/forest.jpg'

export const shortPoints: InfoPointProps[] = [
	{
		num: 1,
		infoPopup: {
			title: "Test number 1",
			done: true,
			image: Image1,
			description: "Ceci decrit en quelques mots ce qu'on va savoir sur le truc en question mais voila apres tu connais on ecrit des trucs en fonction de ce qu'on pense, on ecrit a l'aide de ses connaissances et ca c'est vraiment super"
		},
		$left: "48.5%",
		$top: "80%",
	},
	{
		num: 2,
		infoPopup: {
			title: "This is the number 2 but with a very long title that is really long",
			done: false,

		},
		$left: "40.5%",
		$top: "32.7%",
	},
	{
		num: 3,
		infoPopup: {
			title: "This is the number 3",
			done: true,

		},
		$left: "57.5%",
		$top: "52.7%",
	},
]

export const longPoints = [
	{

	}
]