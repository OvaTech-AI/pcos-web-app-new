import React, { useState } from 'react';
import styled from 'styled-components';
import { Client } from '@gradio/client';

const FormContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const InputField = styled.div`
  margin-bottom: 3rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 1.5rem;
  font-weight: bold;
  color: #5e3a87;
  font-size: 2rem;
`;

const FileInput = styled.input`
  width: 100%;
  padding: 2rem;
  border: 3px solid #5e3a87;
  border-radius: 5px;
  width: 735px
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
  margin-top: 1.5rem;
  font-size: 1.5rem;
  color: #5e3a87;
`;

const ImagePreview = styled.img`
  max-width: 100%;
  margin-top: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const CnnModel: React.FC = () => {
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
        {file && (
          <div>
            <ImagePreview src={URL.createObjectURL(file)} alt="Uploaded Image" />
          </div>
        )}
        <div style={{ marginTop: '20px' }}>
          <SubmitButton type="submit">Submit</SubmitButton>
        </div>
      </form>
      <p>---------------</p>
      {result && <Result>{result}</Result>}
    </FormContainer>
  );
};

export default CnnModel;
