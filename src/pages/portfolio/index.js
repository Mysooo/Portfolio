import React, { useState } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";

export const Portfolio = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({});

  const handleShow = (content) => {
    setModalContent(content);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  const handleOpenInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Portfolio | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Portfolio</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="mb-5 po_items_ho">
          {dataportfolio.map((data, i) => (
            <div key={i} className="po_item">
              <img src={data.img} alt="" />
              <div className="content">
                <p>{data.description}</p>
                <Button variant="primary" onClick={() => handleShow(data)}>
                  View Project
                </Button>
              </div>
            </div>
          ))}
        </div>

        <Modal show={showModal} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>{modalContent.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <iframe
              src={modalContent.link}
              width="100%"
              height="400px"
              frameBorder="0"
              title={modalContent.title}
            ></iframe>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button
              variant="primary"
              onClick={() => handleOpenInNewTab(modalContent.link)}
            >
              Open in New Tab
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </HelmetProvider>
  );
};
