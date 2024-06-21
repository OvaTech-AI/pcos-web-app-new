import React, { useState } from 'react';
import styled from 'styled-components';
import { Client } from '@gradio/client';

const FormContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 2.5rem;
  background-color: #f9f9f9;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 40px;
  font-size: 1.35rem
`;

const InputField = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #cbc3e3;
  color: #000000;
`;

const RadioGroup = styled.div`
  display: flex;
`;

const RadioLabel = styled.label`
  margin-right: 1rem;
`;

const CustomRadioInput = styled.input.attrs({ type: 'radio' })`
  appearance: none;
  background-color: #cbc3e3;
  border: 1px solid #ccc;
  border-radius: 50%;
  width: 1em;
  height: 1em;
  cursor: pointer;
  position: relative;
  outline: none;
  margin-right: 0.5rem;

  &:checked::before {
    content: '';
    display: block;
    border-radius: 50%;
    width: 0.5em;
    height: 0.5em;
    background-color: #5e3a87;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
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
  margin-top: 1.8rem;
  font-size: 1.6rem;
  color: #5e3a87;
`;

const getLabel = (key: string) => {
  if (key === 'weight') {
    return 'WEIGHT in KG';

  } else if (key === 'height') {
    return 'HEIGHT in CM';
    
  } else {
    // Add more conditions for other keys if needed
    return key.replace('_', ' ').toUpperCase(); // Default to uppercase with underscores replaced by spaces
  }
};

type FormDataKey = 'age' | 'weight' | 'height' | 'bmi' | 'fast_food' | 'exercise' | 'pregnant' | 'skin_darkening' | 'hair_growth' | 'weight_gain' | 'pimples' | 'hair_loss' | 'abortions' | 'cycle_length';

const SymptomModel: React.FC = () => {
  const [formData, setFormData] = useState<Record<FormDataKey, string | number>>({
    age: '',
    weight: '',
    height: '',
    bmi: '',
    fast_food: '',
    exercise: '',
    pregnant: '',
    skin_darkening: '',
    hair_growth: '',
    weight_gain: '',
    pimples: '',
    hair_loss: '',
    abortions: '',
    cycle_length: ''
  });

  const [result, setResult] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const client = await Client.connect("ecats/pcos_symptom_patient");
      const response = await client.predict("/predict", {
        age: parseFloat(formData.age as string),
        weight: parseFloat(formData.weight as string),
        height: parseFloat(formData.height as string),
        bmi: parseFloat(formData.bmi as string),
        fast_food: formData.fast_food,
        exercise: formData.exercise,
        pregnant: formData.pregnant,
        skin_darkening: formData.skin_darkening,
        hair_growth: formData.hair_growth,
        weight_gain: formData.weight_gain,
        pimples: formData.pimples,
        hair_loss: formData.hair_loss,
        abortions: parseFloat(formData.abortions as string),
        cycle_length: parseFloat(formData.cycle_length as string),
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
        {Object.keys(formData).map((key) => (
          <InputField key={key}>
            <Label htmlFor={key}>{getLabel(key)}</Label>
            {key === 'fast_food' || key === 'exercise' || key === 'pregnant' || key === 'skin_darkening' || key === 'hair_growth' || key === 'weight_gain' || key === 'pimples' || key === 'hair_loss' ? (
              <RadioGroup>
                <div>
                  <CustomRadioInput
                    name={key}
                    value="0"
                    checked={formData[key as FormDataKey] === '0'}
                    onChange={handleRadioChange}
                    id={`${key}_no`}
                  />
                  <RadioLabel htmlFor={`${key}_no`}>No</RadioLabel>
                </div>
                <div>
                  <CustomRadioInput
                    name={key}
                    value="1"
                    checked={formData[key as FormDataKey] === '1'}
                    onChange={handleRadioChange}
                    id={`${key}_yes`}
                  />
                  <RadioLabel htmlFor={`${key}_yes`}>Yes</RadioLabel>
                </div>
              </RadioGroup>
            ) : (
              <Input
                type="number"
                id={key}
                name={key}
                value={formData[key as FormDataKey]}
                onChange={handleChange}
                required
              />
            )}
          </InputField>
        ))}
        <SubmitButton type="submit">Submit</SubmitButton>
      </form>
      <p>---------------</p>
      {result && <Result>{result}</Result>}
    </FormContainer>
  );
};

export default SymptomModel;
