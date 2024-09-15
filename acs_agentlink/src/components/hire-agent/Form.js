import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import ProgressIndicator from './ProgressIndicator';
import { Button } from '../ui/button';

export default function HireAgentForm() {
  const { handleSubmit, control, register, getValues, setValue } = useForm({
    defaultValues: {
      companyName: '',
      companyEmail: '',
      noOfAgentsNeeded: '',
      workingHours: [],
    }
  });
  
  const [currentSection, setCurrentSection] = useState(1);

  const nextSection = () => setCurrentSection(prev => Math.min(prev + 1, 3));
  const prevSection = () => setCurrentSection(prev => Math.max(prev - 1, 1));

  const onSubmit = (data) => {
    console.log('Form data:', data);
    // Handle form submission logic here
  };

  return (
    <div>
        
      <ProgressIndicator currentSection={currentSection} />
      <form onSubmit={handleSubmit(onSubmit)}>
        {currentSection === 1 && (
          <Section1 control={control} register={register} />
        )}
        {currentSection === 2 && (
          <Section2 control={control} register={register} />
        )}
        {currentSection === 3 && (
          <Section3 control={control} register={register} />
        )}
        <div className="form-navigation">
          {currentSection > 1 && (
            <Button type="button" onClick={prevSection}>Previous</Button>
          )}
          {currentSection < 3 ? (
            <Button type="button" onClick={nextSection}>Next</Button>
          ) : (
            <Button type="submit">Submit</Button>
          )}
        </div>
      </form>
    </div>
  );
}
