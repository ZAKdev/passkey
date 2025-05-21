import React from 'react';
import { AlertCircle, AlertTriangle, CheckCircle, Info, X } from 'lucide-react';
import { AlertProps, AlertVariant } from './Alert.types';
import {
    AlertContainer,
    IconContainer,
    Content,
    Title,
    Message,
    CloseButton,
} from './Alert.styled';

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