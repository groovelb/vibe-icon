import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

const CardContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius * 2,
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  cursor: 'pointer',
  '&:hover': {
    transform: 'translateY(-8px)',
    '& svg': {
      filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.5))',
    },
  },
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: 96,
  height: 96,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: theme.spacing(2),
}));

/**
 * IconCard displays an icon with a title and description, handling hover effects.
 *
 * Props:
 * @param {string} title - The title of the icon card [Required]
 * @param {string} description - Currently unused description prop [Optional]
 * @param {ReactNode} children - The SVG icon component [Required]
 *
 * Example usage:
 * <IconCard title="The AI Tutor" description="Always-on guidance">
 *   <AITutorIcon />
 * </IconCard>
 */
export default function IconCard({ title, description, children }) {
  return (
    <CardContainer>
      <IconWrapper>
        {children}
      </IconWrapper>
      <Typography variant="h3" component="h3" sx={{ mt: 1.5, mb: 0.5 }}>
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {description}
      </Typography>
    </CardContainer>
  );
}

IconCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  children: PropTypes.node.isRequired,
};
