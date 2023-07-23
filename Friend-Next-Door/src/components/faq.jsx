import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import "./FaqSection.css";

export default function FaqSection() {
  return (
    <Container>
      <section>
          <br></br><br></br>
        <h2 className="text-center mb-5" >
          FAQ
        </h2>
        <h3 className="text-center mb-5"> Find the answers for the most frequently asked questions below </h3>   
        <Row>
          <Col md="6" lg="4" className="mb-4">
            <Card className="faq-card">
              <Card.Body>
                <Card.Title>
                <i className="fas fa-question-circle" style={{ color: "black" }}></i> Am I talking to a real person?
                </Card.Title>
                <Card.Text className="faq-card-answer">
                   No. You're talking to an intelligent and emotional AI that is capable of replicating human thinking and giving human like responses.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md="6" lg="4" className="mb-4">
            <Card className="faq-card">
              <Card.Body>
                <Card.Title>
                <i className="fas fa-question-circle" style={{ color: "black" }}></i> What is AI?
                </Card.Title>
                <Card.Text className="faq-card-answer">
                  AI stands for Artificial Intelligence. To put it simply, each time you talk to your frined, there's a complex algorithm running behind!
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md="6" lg="4" className="mb-4">
            <Card className="faq-card">
              <Card.Body>
                <Card.Title>
                <i className="fas fa-question-circle" style={{ color: "black" }}></i> Is my data private?
                </Card.Title>
                <Card.Text className="faq-card-answer">
                   Yes. At FriendNextDoor we respect your privacy and safety. You're data remains only between you and your friend and is not shared for used for any other pupose!
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md="6" lg="4" className="mb-4">
            <Card className="faq-card">
              <Card.Body>
                <Card.Title>
                <i className="fas fa-question-circle" style={{ color: "black" }}></i> How does this App work?
                </Card.Title>
                <Card.Text className="faq-card-answer">
                  Our App makes use of complex AI models to reply to your texts that are delivered to you via the audio with 3d avatar!
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md="6" lg="4" className="mb-4">
            <Card className="faq-card">
              <Card.Body>
                <Card.Title>
                <i className="fas fa-question-circle" style={{ color: "black" }}></i> Can someone rely on this App for complete mental health assistance?
                </Card.Title>
                <Card.Text className="faq-card-answer">
                  Our virtual friends try their best to help you with lonliness, insecurity and negative thoughts, etc but we suggest that seeing a doctor or therapist can never go wrong!
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md="6" lg="4" className="mb-4">
            <Card className="faq-card">
              <Card.Body>
                <Card.Title>
                <i className="fas fa-question-circle" style={{ color: "black" }}></i> Are my virtual friends from diverse age groups?
                </Card.Title>
                <Card.Text className="faq-card-answer">
                  Yes, we understand that companionship is required at all ages and friends can be from all age groups. Thus we cover a diverse range of age groups.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>
    </Container>
  );
}
