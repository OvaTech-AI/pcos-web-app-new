import React, { useState } from 'react';
import styled from 'styled-components';
import { Client } from '@gradio/client';

const FormContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const InputField = styled.div`
  margin-bottom: 1rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
`;

const FileInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const SubmitButton = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: #5e3a87;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #4b2a6e;
  }
`;

const Result = styled.div`
  margin-top: 1rem;
  font-size: 1.2rem;
`;

const ImagePreview = styled.img`
  max-width: 100%;
  margin-top: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const CNNModel: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [result, setResult] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!file) return;

    try {
      const client = await Client.connect('ecats/pcos_diagnosis_ui');
      const response = await client.predict('/predict', {
        image: file,
      });

      setResult(response.data as string);
    } catch (error) {
      console.error('Error making prediction:', error);
      setResult('An error occurred while making the prediction.');
    }
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <InputField>
          <Label htmlFor="file">Upload Ultrasound Image</Label>
          <FileInput type="file" id="file" name="file" onChange={handleFileChange} required />
        </InputField>
        {file && <ImagePreview src={URL.createObjectURL(file)} alt="Uploaded Image" />}
        <SubmitButton type="submit">Submit</SubmitButton>
      </form>
      {result && <Result>{result}</Result>}
    </FormContainer>
  );
};

export default CNNModel;
