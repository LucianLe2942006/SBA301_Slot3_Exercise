import { Col, Container, Row } from 'react-bootstrap';
import FlowerCard from "./FlowerCard.jsx";

function OrchidGallery() {
    return (
        <section id="gallery" className="py-5">
            <Container>
                <div className="mb-4">
                    <p className="text-uppercase text-secondary fw-semibold mb-1">Gallery</p>
                    <h2 className="fw-bold">Featured Orchids</h2>
                    <p className="text-secondary mb-0">
                        Static cards today; data-driven reusable cards arrive with Props in Slot 04.
                    </p>
                </div>

                <Row className="g-4">
                    <Col xs={12} sm={6} lg={4}>
                        <FlowerCard
                            src="/images/orchid-01.svg"
                            alt="Purple orchid"
                            title="Purple Star"
                            text="Phalaenopsis - soft light and moderate watering."
                        />
                    </Col>

                    <Col xs={12} sm={6} lg={4}>
                        <FlowerCard
                            src="/images/orchid-02.svg"
                            alt="Pink orchid"
                            title="Pink Dawn"
                            text="Dendrobium - bright indirect light and airy roots."
                        />
                    </Col>

                    <Col xs={12} sm={6} lg={4}>
                        <FlowerCard
                            src="/images/orchid-03.svg"
                            alt="White orchid"
                            title="White Cloud"
                            text="Vanda - warm conditions and strong filtered light."
                        />
                    </Col>

                    <Col xs={12} sm={6} lg={4}>
                        <FlowerCard
                            src="/images/orchid-04.svg"
                            alt="Yellow orchid"
                            title="Golden Sun"
                            text="Oncidium - good airflow and careful moisture control."
                        />
                    </Col>

                    <Col xs={12} sm={6} lg={4}>
                        <FlowerCard
                            src="/images/orchid-05.svg"
                            alt="Orange orchid"
                            title="Amber Wing"
                            text="Cattleya - bright light and a drying period between watering."
                        />
                    </Col>

                    <Col xs={12} sm={6} lg={4}>
                        <FlowerCard
                            src="/images/orchid-06.svg"
                            alt="Blue orchid illustration"
                            title="Blue Mist"
                            text="Practice sample - use this card to discuss reuse and Props next slot."
                        />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default OrchidGallery;
