import { CollectionBase } from '@react-types/shared';

import React from 'react';

import { useListState } from 'react-stately';

import {
  AccordionSummaryProps,
  Box,
  BoxProps,
  AccordionProps as MuiACcordionProps,
  Accordion as MuiAccordion,
  AccordionDetails as MuiAccordionDetails,
  AccordionSummary as MuiAccordionSummary,
  Typography,
  styled,
} from '@mui/material';

import { Icon } from '../Icon';

export interface AccordionProps
  extends Omit<BoxProps<'div'>, 'children'>,
    CollectionBase<AccordionItem> {}

export interface AccordionItem {
  label: React.ReactNode;
}

const StyledAccordion = styled((props: MuiACcordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  'background': 'none',
  'borderBottom': `2px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const StyledIcon = styled(Icon)(({ theme }) => ({
  color: theme.palette.primary.main,
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary expandIcon={<StyledIcon size={24} name="chevron" />} {...props} />
))(({ theme }) => ({
  'borderTop': `2px solid ${theme.palette.divider}`,
  'flexDirection': 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    padding: theme.spacing(0.5),
    marginLeft: theme.spacing(1),
  },
  '&:hover, &:focus': {
    background: '#f6f7f8',
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  marginLeft: theme.spacing(4),
}));

/**
 * Styled wrapper around MUI Accordions to simplify the API and match BUX
 */
export function Accordion({ children, ...props }: AccordionProps) {
  const state = useListState({
    ...props,
    selectionBehavior: 'toggle',
    selectionMode: 'multiple',
    children,
  });

  return (
    <Box component="div" {...props}>
      {Array.from(state.collection).map((item) => (
        <StyledAccordion
          key={item.key}
          expanded={state.selectionManager.selectedKeys.has(item.key)}
          onChange={() => state.selectionManager.toggleSelection(item.key)}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography fontWeight="bold">{item.textValue}</Typography>
          </AccordionSummary>
          <AccordionDetails>{item.rendered}</AccordionDetails>
        </StyledAccordion>
      ))}
    </Box>
  );
}
