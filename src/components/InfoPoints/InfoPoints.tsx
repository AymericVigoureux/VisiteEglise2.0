import React, { useCallback, useEffect, useState } from "react"
import { ParkourType } from "../Home/Home"
import InfoPoint, { InfoPointProps } from "../InfoPoint/InfoPoint"
import { useDispatch, useSelector } from "react-redux"
import { select, remove, InfoPointSliceProps } from "../../redux/slice/infoPointSlice"
import { RootState } from "../../redux/store"
import { longPoints, shortPoints } from "../../data/InfoPoints.data"


interface InfoPointsProps {
	parkourType: ParkourType
}


const InfoPoints = ({ parkourType }: InfoPointsProps) => {

	const dispatch = useDispatch();
	const currInfoPoint = useSelector((state: RootState) => state.infoPoint);



	const onPointSelected = useCallback((infoPoint: InfoPointSliceProps) => {
		dispatch(select(infoPoint))
	}, [])



	



	const printPoints = useCallback((parkourType: ParkourType, currInfoPoint: InfoPointSliceProps) => {

		if (parkourType === 'short') {
			return (
				<React.Fragment>
					{shortPoints.map((infoPoint: InfoPointProps) => (
						<React.Fragment key={infoPoint.num}>
							<InfoPoint {...infoPoint} onSelected={onPointSelected} selected={currInfoPoint?.num === infoPoint.num} />
						</React.Fragment>
					))}
				</React.Fragment>
			)
		}
		if (parkourType === 'long') {
			return (
				<React.Fragment>
					{longPoints.map((infoPoint: InfoPointProps) => (
						<React.Fragment key={infoPoint.num}>
							<InfoPoint {...infoPoint} onSelected={onPointSelected} selected={currInfoPoint?.num === infoPoint.num} />
						</React.Fragment>
					))}
				</React.Fragment>
			)
		}
	}, [])



	return (
		<React.Fragment>
			{printPoints(parkourType, currInfoPoint)}
		</React.Fragment>
	)
}

export default InfoPoints