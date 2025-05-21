import styled, { css } from 'styled-components';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  disabled?: boolean;
}

const sizeStyles = {
  sm: css`
    height: 2.25rem;
    padding: 0 ${props => props.theme.space[3]};
    font-size: ${props => props.theme.fontSizes.sm};
    border-radius: ${props => props.theme.radii.base};
  `,
  md: css`
    height: 2.5rem;
    padding: 0 ${props => props.theme.space[4]};
    font-size: ${props => props.theme.fontSizes.md};
    border-radius: ${props => props.theme.radii.base};
  `,
  lg: css`
    height: 2.75rem;
    padding: 0 ${props => props.theme.space[5]};
    font-size: ${props => props.theme.fontSizes.lg};
    border-radius: ${props => props.theme.radii.md};
  `,
};

const variantStyles = {
  primary: css`
    background-color: ${props => props.theme.colors.primary[500]};
    color: white;
    border: none;
    
    &:hover:not(:disabled) {
      background-color: ${props => props.theme.colors.primary[600]};
    }
    
    &:active:not(:disabled) {
      background-color: ${props => props.theme.colors.primary[700]};
    }
  `,
  secondary: css`
    background-color: ${props => props.theme.colors.secondary[500]};
    color: white;
    border: none;
    
    &:hover:not(:disabled) {
      background-color: ${props => props.theme.colors.secondary[600]};
    }
    
    &:active:not(:disabled) {
      background-color: ${props => props.theme.colors.secondary[700]};
    }
  `,
  outline: css`
    background-color: transparent;
    color: ${props => props.theme.colors.primary[500]};
    border: 1px solid ${props => props.theme.colors.primary[500]};
    
    &:hover:not(:disabled) {
      background-color: ${props => props.theme.colors.primary[50]};
    }
    
    &:active:not(:disabled) {
      background-color: ${props => props.theme.colors.primary[100]};
    }
  `,
  ghost: css`
    background-color: transparent;
    color: ${props => props.theme.colors.primary[500]};
    border: none;
    
    &:hover:not(:disabled) {
      background-color: ${props => props.theme.colors.primary[50]};
    }
    
    &:active:not(:disabled) {
      background-color: ${props => props.theme.colors.primary[100]};
    }
  `,
  danger: css`
    background-color: ${props => props.theme.colors.error[500]};
    color: white;
    border: none;
    
    &:hover:not(:disabled) {
      background-color: ${props => props.theme.colors.error[700]};
    }
    
    &:active:not(:disabled) {
      background-color: ${props => props.theme.colors.error[700]};
    }
  `,
};

const Button = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  transition: all 0.2s ease;
  white-space: nowrap;
  outline: none;
  cursor: pointer;
  width: ${props => props.fullWidth ? '100%' : 'auto'};
  
  ${props => sizeStyles[props.size || 'md']}
  ${props => variantStyles[props.variant || 'primary']}
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  /* Subtle hover animation */
  transform: translateY(0);
  
  &:hover:not(:disabled) {
    transform: translateY(-1px);
    box-shadow: ${props => props.theme.shadows.sm};
  }
  
  &:active:not(:disabled) {
    transform: translateY(0);
    box-shadow: none;
  }
  
  /* Icon spacing */
  svg {
    margin-right: ${props => props.theme.space[2]};
  }
  
  &:empty svg {
    margin-right: 0;
  }
`;

export default Button;