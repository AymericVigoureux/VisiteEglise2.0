import FranceFlag from '../../img/Flag_of_France.svg'
import UKFlag from '../../img/Flag_of_the_United_Kingdom.svg'
import SpainFlag from '../../img/Flag_of_Spain.svg'
import JapanFlag from '../../img/Flag_of_Japan.svg'
import ItalyFlag from '../../img/Flag_of_Italy.svg'
import BrazilFlag from '../../img/Flag_of_Brazil.svg'
import RussiaFlag from '../../img/Flag_of_Russia.svg'
import ChinaFlag from '../../img/Flag_of_China.svg'


export type LanguageType =
	'french' |
	'spanish' |
	'japanese' |
	'italian' |
	'brazilian' |
	'russian' |
	'chinese';

export type FlagMap = Map<LanguageType, string>



export default [
	FranceFlag,
	// UKFlag,
	SpainFlag,
	JapanFlag,
	ItalyFlag,
	BrazilFlag,
	RussiaFlag,
	ChinaFlag
];

export const flags: FlagMap = new Map([
	['french', FranceFlag],
	['spanish', SpainFlag],
	['japanese', JapanFlag],
	['italian', ItalyFlag],
	['brazilian', BrazilFlag],
	['russian', RussiaFlag],
	['chinese', ChinaFlag]
]);