import {Button, Card} from "react-bootstrap";

function FlowerCard({title, text, src, alt}){
    return (
        <>
            <Card className="h-100 orchid-card shadow-sm">
                <Card.Img variant="top" src={src} alt={alt}/>
                <Card.Body className="d-flex flex-column">
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{text}</Card.Text>
                    <Button variant="outline-primary" className="mt-auto">View Orchid</Button>
                </Card.Body>
            </Card>
        </>
    )
}
export default FlowerCard;