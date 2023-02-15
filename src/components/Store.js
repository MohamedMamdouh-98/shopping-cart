import React from 'react'
import { Col, Row } from 'react-bootstrap'
import storeItem from '../data/storeItem.json'
import StoreItem from './StoreItem'
const Store = () => {
  return (
    <>
        <h1>Store</h1>
        <Row md={2} xs={1} lg={3} className='g-3'>
            {storeItem.map((item)=>(
                <Col key={item.id}>
                    <StoreItem {...item} />
                </Col>
            ))}
        </Row>
    </>
  )
}

export default Store