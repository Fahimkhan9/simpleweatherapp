import { useState } from "react"
import { Button, Card } from "react-bootstrap"

function Datacard({ title, data, tempunit }) {
    const [showtempunit, setShowtempunit] = useState('')
    if (tempunit) {
        if (tempunit == 'us') {
            setShowtempunit('F')
        } else {
            setShowtempunit('C')
        }
    }
    return (
        <Card style={{ width: '18rem', margin: '20px', textAlign: 'center', backgroundColor: '#02343F', color: '#F0EDCC' }}>

            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {data}
                    {showtempunit}
                </Card.Text>

            </Card.Body>
        </Card>
    )
}

export default Datacard