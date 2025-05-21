import styled, { css } from 'styled-components';
import React, { InputHTMLAttributes, forwardRef } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
  fullWidth?: boolean;
}

const InputContainer = styled.div<{ fullWidth?: boolean }>`
  display: flex;
  flex-direction: column;
  margin-bottom: ${props => props.theme.space[4]};
  width: ${props => props.fullWidth ? '100%' : 'auto'};
`;

const Label = styled.label`
  font-size: ${props => props.theme.fontSizes.sm};
  color: ${props => props.theme.colors.gray[700]};
  margin-bottom: ${props => props.theme.space[2]};
  font-weight: 600;
`;

const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const StyledInput = styled.input<{ hasError?: boolean; hasIcon?: boolean }>`
  width: 100%;
  height: 2.75rem;
  padding: ${props => props.theme.space[3]};
  padding-left: ${props => props.hasIcon ? props.theme.space[8] : props.theme.space[3]};
  border-radius: ${props => props.theme.radii.base};
  border: 1px solid ${props => props.hasError ? props.theme.colors.error[500] : props.theme.colors.gray[300]};
  background-color: white;
  font-size: ${props => props.theme.fontSizes.base};
  color: ${props => props.theme.colors.gray[900]};
  transition: all 0.2s ease;
  outline: none;
  
  &:focus {
    border-color: ${props => props.hasError ? props.theme.colors.error[500] : props.theme.colors.primary[600]};
    box-shadow: 0 0 0 2px ${props => props.hasError ? props.theme.colors.error[100] : props.theme.colors.primary[100]};
  }
  
  &:disabled {
    background-color: ${props => props.theme.colors.gray[100]};
    cursor: not-allowed;
  }
  
  &::placeholder {
    color: ${props => props.theme.colors.gray[400]};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  left: ${props => props.theme.space[3]};
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  color: ${props => props.theme.colors.gray[500]};
`;

const ErrorMessage = styled.p`
  font-size: ${props => props.theme.fontSizes.sm};
  color: ${props => props.theme.colors.error[500]};
  margin-top: ${props => props.theme.space[1]};
  font-weight: 500;
`;

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, icon, fullWidth, ...props }, ref) => {
    return (
      <InputContainer fullWidth={fullWidth}>
        {label && <Label>{label}</Label>}
        <InputWrapper>
          {icon && <IconWrapper>{icon}</IconWrapper>}
          <StyledInput
            ref={ref}
            hasError={!!error}
            hasIcon={!!icon}
            {...props}
          />
        </InputWrapper>
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </InputContainer>
    );
  }
);

Input.displayName = 'Input';

export default Input;