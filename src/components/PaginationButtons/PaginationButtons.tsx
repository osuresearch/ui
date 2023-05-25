import React from 'react';
import { PressEvent } from '@react-types/shared';

import { cx } from '../../utils';
import { Icon } from '../Icon';
import { UnstyledButton } from '../UnstyledButton';
import { VisuallyHidden } from '../VisuallyHidden';

export type PaginationButtonsProps = {
  /**
   * Current page number we're on.
   */
  value: number

  /**
   * Total number of pages available.
   *
   * If omitted, there is no "last" page number that
   * the user can jump to and it will only render
   * buttons for the current page and adjacent page(s).
   */
  totalPages?: number

  /** Event callback when a page number has been activated  */
  onChange: (page: number) => void
};

/**
 * Generate a limited array of page numbers, 1-indexed.
 *
 * Reference: https://stackoverflow.com/a/31836340
 *
 * @param totalPages
 * @param eachSide
 * @param current
 */
function getPagesArray(total: number | undefined, eachSide: number, current: number): number[] {
  let start = 1
  let end = 1

  if (!total) {
    if (current > eachSide + 3) {
      // current is not too close to the beginning
      start = current - eachSide
    }
    end = current + eachSide
  }

  else {
    if (total <= (2 * eachSide) + 5) {
      // Too few pages, so display them all
      start = 1
      end = total
    } else if (current <= eachSide + 3) {
      // current is too close to the beginning
      start = 1
      end = (2 * eachSide) + 3
    } else if (current >= total - (eachSide + 2)) {
      // current is too close to the end
      start = total - (2 * eachSide) - 2
      end = total
    } else {
      // somewhere in the middle
      start = current - eachSide
      end = current + eachSide
    }
  }

  // Add numbers to a list
  const results: number[] = []
  if (start > 1) {
    results.push(1)
  }

  if (start > 3) {
    results.push(-1) // Identifier for '...'
  }

  for (let i = start; i <= end; i++) {
    results.push(i)
  }

  if (!total || end < total - 1) {
    results.push(-1) // Identifier for '...'
  }

  if (total && end < total) {
    results.push(total)
  }

  return results
}

type PaginationButtonProps = {
  isDisabled?: boolean
  isCurrent?: boolean
  children: React.ReactNode
  onPress: (e: PressEvent) => void
}

function PaginationButton({ isDisabled, isCurrent, onPress, children }: PaginationButtonProps) {
  return (
    <UnstyledButton w={40} h={40} p="xs"
      c={(isCurrent || isDisabled) ? 'neutral' : 'primary'}
      bgc={isCurrent ? 'interactive-selected' : undefined}
      className={cx(
        {
          'hover:bg-interactive-hover hover:text-neutral': !isDisabled,
        }
      )}
      onPress={onPress}
      isDisabled={isDisabled}
    >
      {children}
    </UnstyledButton>
  )
}

export function PaginationButtons({ value, totalPages, onChange }: PaginationButtonsProps) {
  const range: number[] = getPagesArray(totalPages, 2, value);

  return (
    <nav role="navigation" aria-label="Page">
      <ul className="flex justify-center">
        {/* Previous button */}
        <li>
          <PaginationButton isDisabled={value <= 1} onPress={() => onChange(value - 1)}>
            <Icon name="chevron" rotate={180} size={24} aria-label="previous" />
          </PaginationButton>

          {/* <UnstyledButton w={40} h={40} p="xs"
            c={value === 1 ? 'neutral' : 'primary'}
            className={cx(
              'flex',
              {
                'hover:bg-interactive-hover': value !== 1,
                'hover:cursor-not-allowed': value === 1
              }
            )}
            onPress={() => onChange(value - 1)}
            disabled={value === 1}
          >

          </UnstyledButton> */}
        </li>

        {/* Pages */}
        {range.map((page, idx) =>
          <li key={idx}>
            {page === -1
              ? <Icon name="dots" w={40} h={40} p="sm" />
              : <PaginationButton
                  isDisabled={value === page}
                  isCurrent={value === page}
                  onPress={() => onChange(page)}
                >
                  {page}
                  {value === page && <VisuallyHidden>current</VisuallyHidden>}
                </PaginationButton>
            }
          </li>
        )}

        {/* Next button */}
        <li>
          <PaginationButton
            isDisabled={totalPages ? value >= totalPages : false}
            onPress={() => onChange(value + 1)}
          >
            <Icon name="chevron" size={24} aria-label="next" />
          </PaginationButton>
        </li>
      </ul>
    </nav >
  );
}
