import React from 'react';
import styled, { css } from 'styled-components';
import { AlertCircle, AlertTriangle, CheckCircle, Info, X } from 'lucide-react';

type AlertVariant = 'info' | 'success' | 'warning' | 'error';

interface AlertProps {
  variant?: AlertVariant;
  title?: string;
  children: React.ReactNode;
  onClose?: () => void;
}

const variantStyles = {
  info: css`
    background-color: ${props => props.theme.colors.primary[50]};
    border-color: ${props => props.theme.colors.primary[300]};
    
    .alert-icon {
      color: ${props => props.theme.colors.primary[500]};
    }
    
    .alert-title {
      color: ${props => props.theme.colors.primary[700]};
    }
  `,
  success: css`
    background-color: ${props => props.theme.colors.success[50]};
    border-color: ${props => props.theme.colors.secondary[300]};
    
    .alert-icon {
      color: ${props => props.theme.colors.secondary[500]};
    }
    
    .alert-title {
      color: ${props => props.theme.colors.secondary[700]};
    }
  `,
  warning: css`
    background-color: ${props => props.theme.colors.warning[50]};
    border-color: ${props => props.theme.colors.warning[300]};
    
    .alert-icon {
      color: ${props => props.theme.colors.warning[500]};
    }
    
    .alert-title {
      color: ${props => props.theme.colors.warning[700]};
    }
  `,
  error: css`
    background-color: ${props => props.theme.colors.error[50]};
    border-color: ${props => props.theme.colors.error[300]};
    
    .alert-icon {
      color: ${props => props.theme.colors.error[500]};
    }
    
    .alert-title {
      color: ${props => props.theme.colors.error[700]};
    }
  `,
};

const AlertContainer = styled.div<{ variant: AlertVariant }>`
  position: relative;
  display: flex;
  padding: ${props => props.theme.space[4]};
  border-radius: ${props => props.theme.radii.md};
  border-left: 4px solid;
  
  ${props => variantStyles[props.variant]}
  
  /* Add subtle animation */
  animation: alertFadeIn 0.3s ease-out;
  
  @keyframes alertFadeIn {
    from {
      opacity: 0;
      transform: translateY(-8px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const IconContainer = styled.div`
  margin-right: ${props => props.theme.space[3]};
  display: flex;
  align-items: flex-start;
  
  svg {
    width: 20px;
    height: 20px;
  }
`;

const Content = styled.div`
  flex: 1;
`;

const Title = styled.div`
  font-weight: 600;
  margin-bottom: ${props => props.theme.space[1]};
`;

const Message = styled.div`
  color: ${props => props.theme.colors.gray[700]};
  font-size: ${props => props.theme.fontSizes.sm};
  
  @media (prefers-color-scheme: dark) {
    color: ${props => props.theme.colors.gray[300]};
  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: ${props => props.theme.space[1]};
  margin: -${props => props.theme.space[1]};
  color: ${props => props.theme.colors.gray[500]};
  position: absolute;
  top: ${props => props.theme.space[3]};
  right: ${props => props.theme.space[3]};
  border-radius: ${props => props.theme.radii.base};
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
  
  svg {
    width: 16px;
    height: 16px;
  }
`;

const getIcon = (variant: AlertVariant) => {
  switch (variant) {
    case 'info':
      return <Info className="alert-icon" />;
    case 'success':
      return <CheckCircle className="alert-icon" />;
    case 'warning':
      return <AlertTriangle className="alert-icon" />;
    case 'error':
      return <AlertCircle className="alert-icon" />;
    default:
      return <Info className="alert-icon" />;
  }
};

const Alert: React.FC<AlertProps> = ({
  variant = 'info',
  title,
  children,
  onClose,
}) => {
  return (
    <AlertContainer variant={variant}>
      <IconContainer>{getIcon(variant)}</IconContainer>
      <Content>
        {title && <Title className="alert-title">{title}</Title>}
        <Message>{children}</Message>
      </Content>
      {onClose && (
        <CloseButton onClick={onClose}>
          <X />
        </CloseButton>
      )}
    </AlertContainer>
  );
};

export default Alert;