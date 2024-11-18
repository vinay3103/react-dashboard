import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';

const InputForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    file: null,
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === 'file' ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
  };

  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col md={6}>
          <h2 className="text-center">Submit Your Details</h2>
          <Form onSubmit={handleSubmit} className="p-4 shadow-sm bg-light rounded">
            <Form.Group controlId="formName" className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formAge" className="mb-3">
              <Form.Label>Age</Form.Label>
              <Form.Select name="age" value={formData.age} onChange={handleChange} required>
                <option value="">Select Age</option>
                {Array.from({ length: 100 }, (_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>

            <Form.Group controlId="formFile" className="mb-4">
              <Form.Label>File Upload</Form.Label>
              <Form.Control type="file" name="file" onChange={handleChange} required />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Submit
            </Button>
          </Form>

          {submittedData && (
            <Alert variant="info" className="mt-4">
              <h5>Submitted Data</h5>
              <p><strong>Name:</strong> {submittedData.name}</p>
              <p><strong>Age:</strong> {submittedData.age}</p>
              <p><strong>File Name:</strong> {submittedData.file?.name}</p>
            </Alert>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default InputForm;
