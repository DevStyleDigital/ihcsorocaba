import { IconButton, Tooltip } from '@mui/material';

interface ButtonTooltipProps {
  children: React.ReactNode;
  onClick: () => void;
  label: string;
  disabled?: boolean;
}

export const ButtonTooltip = ({
  children,
  onClick,
  label,
  disabled,
}: ButtonTooltipProps) => {
  return (
    <Tooltip title={label}>
      <IconButton
        aria-label={label}
        onClick={onClick}
        disabled={disabled}
        style={{ opacity: disabled ? 0.5 : 1 }}
      >
        {children}
      </IconButton>
    </Tooltip>
  );
};
