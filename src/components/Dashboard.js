import React from 'react'
import { Container } from 'muicss/react'
import { CropTab } from '../components/CropTab'
import { CROPS } from '../shared/constants'

export function Dashboard() {
    return (
        <Container className='master-container'>
            { CROPS.map((crop, i) => <CropTab key={ i } id={ i } path={ `/uploader/${crop.type}` } icon={ crop.icon } type={ crop.type } description={ crop.description } />) }
        </Container>
    )
}